"use client";

import { useState, useRef, useEffect, use, Suspense } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Plus, Trash2, Search, 
  Calendar, Tag, X, Loader2, Edit, UploadCloud, Settings, HelpCircle
} from "lucide-react";
import { useRouter } from "next/navigation";
import { saveGaleri, deleteGaleri, createKategoriGaleri, updateKategoriGaleri, deleteKategoriGaleri } from "@/lib/actions"; 
import TourGuide from "@/components/TourGuide";
import { showToast } from "@/components/Toast";
import { showConfirm } from "@/components/ConfirmDialog";

const galeriTourSteps = [
    { target: '.tour-galeri-header', content: 'Selamat datang di Manajemen Galeri! Di sini Anda bisa mengelola seluruh dokumentasi foto kegiatan organisasi.', disableBeacon: true },
    { target: '.tour-upload-btn', content: 'Klik tombol ini untuk mengunggah album foto kegiatan baru ke website.' },
    { target: '.tour-manage-cat', content: 'Atur kategori galeri (seperti Event, Rapat, atau Lomba) agar dokumentasi lebih terorganisir.' },
    { target: '.tour-filter-bar', content: 'Gunakan barisan filter ini untuk menyaring album foto berdasarkan kategori yang Anda buat.' },
    { target: '.tour-gallery-card', content: 'Arahkan kursor pada album untuk memunculkan tombol Edit atau Hapus.' },
];

export default function GaleriClient({ dataPromise, catsPromise, fullCatsPromise }: { dataPromise: Promise<any[]>, catsPromise: Promise<string[]>, fullCatsPromise: Promise<any[]> }) {
  const router = useRouter();
  const [filterKategori, setFilterKategori] = useState("Semua");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const tourRef = useRef<any>(null);

  // Management Kategori State
  const [isCatModalOpen, setIsCatModalOpen] = useState(false);
  const [newCatName, setNewCatName] = useState("");
  const [editingCatId, setEditingCatId] = useState<number | null>(null);

  useEffect(() => { 
    setIsClient(true); 
  }, []);

  // Form State
  const [form, setForm] = useState<{ id?: number, judul: string, kategori: string, tanggal: string, images: string[], deskripsi: string }>({
    judul: "",
    kategori: "Umum",
    tanggal: new Date().toISOString().split('T')[0],
    images: [], 
    deskripsi: ""
  });

  const handleStartTour = () => {
    if (tourRef.current) {
      tourRef.current.startTour();
    }
  };

  // --- 🔥 FUNGSI KOMPRES GAMBAR (VERSI HD) 🔥 ---
  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = document.createElement("img");
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          const MAX_WIDTH = 1920; 
          let width = img.width;
          let height = img.height;
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
          canvas.width = width;
          canvas.height = height;
          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
          const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.9);
          resolve(compressedDataUrl);
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (err) => reject(err);
    });
  };

  // --- HANDLER MULTI-UPLOAD ---
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const fileReaders: Promise<string>[] = [];
      Array.from(files).forEach(file => {
        fileReaders.push(compressImage(file));
      });
      try {
        const newImages = await Promise.all(fileReaders);
        setForm(prev => ({ 
            ...prev, 
            images: [...prev.images, ...newImages] 
        }));
      } catch (err) {
        showToast("Gagal memproses gambar.", "error");
      }
    }
  };

  const removeImage = (index: number) => {
    setForm(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }));
  };

  const openEditModal = (item: any) => {
    const safeDate = item.tanggal instanceof Date 
      ? item.tanggal.toISOString().split('T')[0] 
      : new Date(item.tanggal).toISOString().split('T')[0];
    setForm({
        id: item.id,
        judul: item.judul,
        kategori: item.kategori,
        tanggal: safeDate,
        images: item.images || [], 
        deskripsi: item.deskripsi || ""
    });
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setForm({ judul: "", kategori: "Umum", tanggal: new Date().toISOString().split('T')[0], images: [], deskripsi: "" });
    setIsEditing(false);
    setIsModalOpen(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if(form.images.length === 0) return showToast("Minimal upload 1 foto!", "warning");
    
    setIsSubmitting(true);
    const formData = new FormData();
    if (isEditing && form.id) formData.append("id", form.id.toString());
    formData.append("judul", form.judul);
    formData.append("kategori", form.kategori);
    formData.append("tanggal", form.tanggal);
    formData.append("deskripsi", form.deskripsi);
    formData.append("images", JSON.stringify(form.images));

    const res = await saveGaleri(formData);
    if(res.success) {
        showToast(res.message, "success", isEditing ? "Album Diperbarui" : "Album Terposting");
        resetForm();
        router.refresh();
    } else {
        showToast(res.message, "error", "Gagal Simpan");
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (id: number) => {
    showConfirm({
        title: "Hapus Album?",
        message: "Seluruh foto dalam album ini akan dihapus permanen dari sistem.",
        confirmText: "Ya, Hapus",
        type: "danger",
        onConfirm: async () => {
            const res = await deleteGaleri(id);
            if(res.success) {
                showToast("Album galeri berhasil dihapus.", "success", "Album Dihapus");
                router.refresh();
            } else {
                showToast("Gagal menghapus album.", "error");
            }
        }
    });
  }

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col gap-6 font-sans">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 shrink-0">
         <div>
            <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3 tour-galeri-header">
                Galeri Kegiatan <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">📸</span>
                </h1>
                
                {isClient && (
                  <button 
                    onClick={handleStartTour}
                    className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 text-sm font-medium"
                    title="Bantuan Panduan"
                  >
                    <HelpCircle className="w-5 h-5" />
                    <span className="hidden sm:inline">Panduan</span>
                  </button>
                )}

                {isClient && <TourGuide ref={tourRef} steps={galeriTourSteps} tourKey="galeri" />}
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Dokumentasi momen seru organisasi.</p>
         </div>
         <div className="flex gap-2">
            <button onClick={() => setIsCatModalOpen(true)} className="tour-manage-cat px-4 py-2.5 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white rounded-xl font-bold text-xs shadow-sm flex items-center gap-2 transition-all hover:bg-slate-50">
                <Settings size={16} /> Kategori
            </button>
            <button onClick={() => { resetForm(); setIsModalOpen(true); }} className="tour-upload-btn px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-lg flex items-center gap-2 transition-transform active:scale-95">
                <Plus size={16}/> Upload Album Baru
            </button>
         </div>
      </div>

      {/* FILTER BAR */}
      <Suspense fallback={<div className="h-10 w-full bg-slate-200 dark:bg-slate-800 animate-pulse rounded-full" />}>
         <GaleriFilters catsPromise={catsPromise} filterKategori={filterKategori} setFilterKategori={setFilterKategori} />
      </Suspense>

      {/* GALLERY GRID */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-1">
         <Suspense fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="bg-white dark:bg-[#1e293b] rounded-2xl border border-slate-100 dark:border-white/5 overflow-hidden">
                        <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800" />
                        <div className="p-4"><div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded mb-2" /><div className="h-3 w-1/2 bg-slate-100 dark:bg-slate-800/50 rounded mb-4" /></div>
                    </div>
                ))}
            </div>
         }>
            <GaleriGrid dataPromise={dataPromise} filterKategori={filterKategori} openEditModal={openEditModal} handleDelete={handleDelete} />
         </Suspense>
      </div>

      {/* MODALS */}
      <AnimatePresence>
        {isCatModalOpen && (
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCatModalOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm"/>
                <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative w-full max-w-md bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10 p-8">
                    <div className="flex justify-between items-center mb-6"><h2 className="text-xl font-bold font-bold text-slate-900 dark:text-white">Atur Kategori</h2><button onClick={() => setIsCatModalOpen(false)}><X size={24} className="text-slate-400" /></button></div>
                    <div className="flex gap-2 mb-6">
                        <input type="text" value={newCatName} onChange={e => setNewCatName(e.target.value)} placeholder="Nama kategori..." className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold dark:text-white" />
                        <button onClick={async () => {
                            if(!newCatName) return;
                            const fd = new FormData(); fd.append("nama", newCatName);
                            const res = editingCatId ? await updateKategoriGaleri(editingCatId, fd) : await createKategoriGaleri(fd);
                            if(res.success) { showToast(res.message, "success"); router.refresh(); setNewCatName(""); setEditingCatId(null); }
                        }} className="px-4 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm">{editingCatId ? "Update" : "Tambah"}</button>
                    </div>
                    <Suspense fallback={<div className="space-y-2"><div className="h-10 bg-slate-100 dark:bg-white/5 rounded-xl animate-pulse"/><div className="h-10 bg-slate-100 dark:bg-white/5 rounded-xl animate-pulse"/></div>}>
                        <KategoriModalList 
                           fullCatsPromise={fullCatsPromise} 
                           setEditingCatId={setEditingCatId} 
                           setNewCatName={setNewCatName} 
                           router={router} 
                        />
                    </Suspense>
                </motion.div>
            </div>
        )}
      </AnimatePresence>

      {isModalOpen && (
         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
            <div className="bg-white dark:bg-[#1e293b] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
               <div className="p-5 border-b border-slate-100 dark:border-white/10 flex justify-between items-center">
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white">{isEditing ? 'Edit Album' : 'Upload Dokumentasi'}</h3>
                  <button onClick={resetForm}><X size={20}/></button>
               </div>
               <form onSubmit={handleSave} className="p-6 overflow-y-auto custom-scrollbar space-y-4">
                  <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-slate-500">Foto Kegiatan ({form.images.length})</label>
                      <div className="grid grid-cols-3 gap-2">
                          {form.images.map((img, idx) => (
                              <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-slate-200 group">
                                  <Image src={img} alt="preview" fill className="object-cover"/>
                                  <button type="button" onClick={() => removeImage(idx)} className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"><X size={12}/></button>
                              </div>
                          ))}
                          <div onClick={() => fileInputRef.current?.click()} className="relative aspect-square rounded-lg border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50 dark:border-white/10 dark:hover:bg-white/5 transition-colors cursor-pointer flex flex-col items-center justify-center text-slate-400">
                              <UploadCloud size={24}/><span className="text-[10px] mt-1 font-bold">Tambah</span>
                              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" multiple onChange={handleImageUpload}/>
                          </div>
                      </div>
                  </div>
                  <div className="space-y-3">
                     <div><label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block">Judul Kegiatan</label><input required type="text" className="w-full p-2.5 border rounded-lg text-sm font-bold bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 outline-none focus:border-blue-500" value={form.judul} onChange={e => setForm({...form, judul: e.target.value})}/></div>
                     <div className="grid grid-cols-2 gap-4">
                        <Suspense fallback={<div><label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block">Kategori</label><div className="w-full h-10 border rounded-lg bg-slate-50 dark:bg-white/5 animate-pulse" /></div>}>
                           <GaleriKategoriSelect catsPromise={catsPromise} form={form} setForm={setForm} />
                        </Suspense>
                        <div><label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block">Tanggal</label><input type="date" className="w-full p-2.5 border rounded-lg text-sm bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 outline-none focus:border-blue-500" value={form.tanggal} onChange={e => setForm({...form, tanggal: e.target.value})}/></div>
                     </div>
                     <div><label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block">Deskripsi Singkat</label><textarea className="w-full p-2.5 border rounded-lg text-sm h-20 resize-none bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 outline-none focus:border-blue-500" value={form.deskripsi} onChange={e => setForm({...form, deskripsi: e.target.value})}/></div>
                  </div>
                  <div className="pt-2 flex gap-2">
                     <button type="button" onClick={resetForm} className="flex-1 py-3 text-slate-500 text-xs font-bold hover:bg-slate-100 rounded-xl">Batal</button>
                     <button type="submit" disabled={isSubmitting} className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2">{isSubmitting ? <Loader2 className="animate-spin" size={18}/> : <>{isEditing ? <Edit size={18}/> : <Plus size={18}/>} {isEditing ? 'Simpan' : 'Posting'}</>}</button>
                  </div>
               </form>
            </div>
         </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
      `}</style>
    </div>
  );
}

// --------------------------------------------------------------------------------------
// SKELETONS & EXTRACTED COMPONENTS (REACT 19 STREAMING)
// --------------------------------------------------------------------------------------

function GaleriFilters({ catsPromise, filterKategori, setFilterKategori }: any) {
  const categories = use(catsPromise) as string[];
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide tour-filter-bar">
       <button onClick={() => setFilterKategori("Semua")} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${filterKategori === "Semua" ? "bg-slate-900 text-white border-slate-900 shadow-md" : "bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/10 text-slate-500 hover:border-slate-300"}`}>Semua</button>
       {categories.map(cat => (
          <button key={cat} onClick={() => setFilterKategori(cat)} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${filterKategori === cat ? "bg-slate-900 text-white border-slate-900 shadow-md" : "bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/10 text-slate-500 hover:border-slate-300"}`}>{cat}</button>
       ))}
    </div>
  );
}

function GaleriGrid({ dataPromise, filterKategori, openEditModal, handleDelete }: any) {
  const items = use(dataPromise) as any[];
  const filteredItems = items.filter(item => filterKategori === "Semua" ? true : item.kategori === filterKategori);

  if (filteredItems.length === 0) {
    return (
      <div className="h-64 flex flex-col items-center justify-center text-slate-400">
         <ImageIcon size={48} className="mb-2 opacity-50"/><p className="text-sm font-bold">Belum ada foto di kategori ini.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {filteredItems.map((item, idx) => (
          <div key={item.id} className={`group relative bg-white dark:bg-[#1e293b] rounded-2xl border border-slate-100 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${idx === 0 ? 'tour-gallery-card' : ''}`}>
             <div className="aspect-[4/3] relative bg-slate-100 overflow-hidden">
                <Image src={item.images[0]} alt={item.judul} fill className="object-cover group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                   <div className="flex justify-end gap-2">
                        <button onClick={() => openEditModal(item)} className="p-2 bg-white text-slate-900 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-all transform hover:scale-110"><Edit size={16}/></button>
                        <button onClick={() => handleDelete(item.id)} className="p-2 bg-white text-red-600 rounded-lg shadow-lg hover:bg-red-600 hover:text-white transition-all transform hover:scale-110"><Trash2 size={16}/></button>
                   </div>
                </div>
                <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-md rounded-md text-[10px] font-bold text-slate-900 uppercase tracking-wider shadow-sm">{item.kategori}</div>
                {item.images.length > 1 && (<div className="absolute top-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-md rounded-md text-[10px] font-bold text-white shadow-sm flex items-center gap-1"><ImageIcon size={10}/> +{item.images.length}</div>)}
             </div>
             <div className="p-4">
                <h3 className="font-bold text-slate-800 dark:text-white mb-1 line-clamp-1">{item.judul}</h3>
                <div className="flex items-center gap-2 text-[10px] text-slate-500"><Calendar size={12}/> {new Date(item.tanggal).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                {item.deskripsi && <p className="text-xs text-slate-500 mt-2 line-clamp-2">{item.deskripsi}</p>}
             </div>
          </div>
       ))}
    </div>
  );
}

function KategoriModalList({ fullCatsPromise, setEditingCatId, setNewCatName, router }: any) {
  const fullCategories = use(fullCatsPromise) as any[];
  return (
    <div className="space-y-2 max-h-[300px] overflow-y-auto custom-scrollbar">
        {fullCategories.map((cat: any) => (
            <div key={cat.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{cat.nama}</span>
                <div className="flex gap-2">
                    <button onClick={() => { setEditingCatId(cat.id); setNewCatName(cat.nama); }} className="p-1.5 text-slate-400 hover:text-blue-500"><Edit size={14}/></button>
                    <button onClick={async () => { if(confirm("Hapus?")) { const res = await deleteKategoriGaleri(cat.id); if(res.success) { showToast("Dihapus", "success"); router.refresh(); } } }} className="p-1.5 text-slate-400 hover:text-red-500"><Trash2 size={14}/></button>
                </div>
            </div>
        ))}
    </div>
  );
}

function GaleriKategoriSelect({ catsPromise, form, setForm }: any) {
  const categories = use(catsPromise) as string[];
  return (
    <div><label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block">Kategori</label><select className="w-full p-2.5 border rounded-lg text-sm bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 outline-none focus:border-blue-500" value={form.kategori} onChange={e => setForm({...form, kategori: e.target.value})}>{categories.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
  );
}
