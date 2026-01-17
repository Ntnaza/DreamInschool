"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { 
  Image as ImageIcon, Plus, Trash2, Search, 
  Calendar, Tag, X, Loader2, Edit, UploadCloud
} from "lucide-react";
import { saveGaleri, deleteGaleri } from "@/lib/actions";
import TourGuide from "@/components/TourGuide";

const galeriTourSteps = [
    { target: '.tour-galeri-header', content: 'Manajemen dokumentasi kegiatan.', disableBeacon: true },
    { target: '.tour-upload-btn', content: 'Upload album foto kegiatan baru.' },
    { target: '.tour-filter-bar', content: 'Filter berdasarkan kategori.' },
    { target: '.tour-gallery-card', content: 'Kelola (Edit/Hapus) album di sini.' },
];

export default function GaleriClient({ initialData }: { initialData: any[] }) {
  const [items, setItems] = useState(initialData);
  const [filterKategori, setFilterKategori] = useState("Semua");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setIsClient(true); setItems(initialData); }, [initialData]);

  // Form State
  const [form, setForm] = useState<{ id?: number, judul: string, kategori: string, tanggal: string, images: string[], deskripsi: string }>({
    judul: "",
    kategori: "Event",
    tanggal: new Date().toISOString().split('T')[0],
    images: [], 
    deskripsi: ""
  });

  const categories = ["Rapat", "Upacara", "Event", "Pensi", "Sosial", "Kunjungan", "Karya"];

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

          // 🚀 UPGRADE: Resolusi Full HD (Biar Tajam)
          // Kemarin 1000px, sekarang kita naikkan jadi 1920px (Standar Monitor)
          // Kalau foto aslinya lebih kecil dari 1920, pakai ukuran asli (jangan diperbesar)
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

          // 🚀 UPGRADE: Kualitas 0.9 (Hampir Original)
          // Kemarin 0.5 (Burik), sekarang 0.9 (Sangat Jernih)
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
        
        // Debug Size (Biar tau ukurannya sekarang berapa)
        const totalSize = new Blob(newImages).size;
        console.log(`Total ukuran HD: ${(totalSize/1024/1024).toFixed(2)} MB`);

        setForm(prev => ({ 
            ...prev, 
            images: [...prev.images, ...newImages] 
        }));
      } catch (err) {
        console.error("Gagal memproses gambar:", err);
        alert("Gagal memproses gambar.");
      }
    }
  };

  // --- HAPUS SATU FOTO ---
  const removeImage = (index: number) => {
    setForm(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }));
  };

  // --- MODAL & FORM ---
  const openEditModal = (item: any) => {
    setForm({
        id: item.id,
        judul: item.judul,
        kategori: item.kategori,
        tanggal: item.tanggal.split('T')[0],
        images: item.images || [], 
        deskripsi: item.deskripsi || ""
    });
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setForm({ judul: "", kategori: "Event", tanggal: new Date().toISOString().split('T')[0], images: [], deskripsi: "" });
    setIsEditing(false);
    setIsModalOpen(false);
  };

  // --- SAVE ---
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if(form.images.length === 0) return alert("Minimal upload 1 foto!");
    
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
        alert(res.message);
        resetForm();
        window.location.reload();
    } else {
        alert("Gagal: " + res.message);
    }
    setIsSubmitting(false);
  };

  // --- DELETE ---
  const handleDelete = async (id: number) => {
    if(confirm("Hapus seluruh album kegiatan ini?")) {
        await deleteGaleri(id);
        window.location.reload();
    }
  }

  const filteredItems = items.filter(item => filterKategori === "Semua" ? true : item.kategori === filterKategori);

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col gap-6 font-sans">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 shrink-0">
         <div>
            <div className="flex items-center gap-4">
                <h1 className="text-3xl font-black font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-galeri-header">
                Galeri Kegiatan <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">📸</span>
                </h1>
                {isClient && <TourGuide steps={galeriTourSteps} />}
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Dokumentasi momen seru organisasi.</p>
         </div>
         <button onClick={() => { resetForm(); setIsModalOpen(true); }} className="tour-upload-btn px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-lg flex items-center gap-2 transition-transform active:scale-95">
            <Plus size={16}/> Upload Album Baru
         </button>
      </div>

      {/* FILTER BAR */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide tour-filter-bar">
         <button onClick={() => setFilterKategori("Semua")} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${filterKategori === "Semua" ? "bg-slate-900 text-white border-slate-900" : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"}`}>Semua</button>
         {categories.map(cat => (
            <button key={cat} onClick={() => setFilterKategori(cat)} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${filterKategori === cat ? "bg-slate-900 text-white border-slate-900" : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"}`}>{cat}</button>
         ))}
      </div>

      {/* GALLERY GRID */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-1">
         {filteredItems.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-slate-400">
               <ImageIcon size={48} className="mb-2 opacity-50"/>
               <p className="text-sm font-bold">Belum ada foto di kategori ini.</p>
            </div>
         ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               {filteredItems.map((item, idx) => (
                  <div key={item.id} className={`group relative bg-white dark:bg-[#1e293b] rounded-2xl border border-slate-100 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${idx === 0 ? 'tour-gallery-card' : ''}`}>
                     {/* Thumbnail */}
                     <div className="aspect-[4/3] relative bg-slate-100 overflow-hidden">
                        <Image src={item.images[0]} alt={item.judul} fill className="object-cover group-hover:scale-110 transition-transform duration-700"/>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                           <div className="flex justify-end gap-2">
                                <button onClick={() => openEditModal(item)} className="p-2 bg-white text-slate-900 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-all transform hover:scale-110">
                                    <Edit size={16}/>
                                </button>
                                <button onClick={() => handleDelete(item.id)} className="p-2 bg-white text-red-600 rounded-lg shadow-lg hover:bg-red-600 hover:text-white transition-all transform hover:scale-110">
                                    <Trash2 size={16}/>
                                </button>
                           </div>
                        </div>

                        <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-md rounded-md text-[10px] font-bold text-slate-900 uppercase tracking-wider shadow-sm">
                           {item.kategori}
                        </div>
                        
                        {item.images.length > 1 && (
                            <div className="absolute top-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-md rounded-md text-[10px] font-bold text-white shadow-sm flex items-center gap-1">
                                <ImageIcon size={10}/> +{item.images.length}
                            </div>
                        )}
                     </div>

                     <div className="p-4">
                        <h3 className="font-bold text-slate-800 dark:text-white mb-1 line-clamp-1">{item.judul}</h3>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500">
                           <Calendar size={12}/> {new Date(item.tanggal).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
                        </div>
                        {item.deskripsi && <p className="text-xs text-slate-500 mt-2 line-clamp-2">{item.deskripsi}</p>}
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>

      {/* MODAL UPLOAD / EDIT */}
      {isModalOpen && (
         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
            <div className="bg-white dark:bg-[#1e293b] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
               <div className="p-5 border-b border-slate-100 dark:border-white/10 flex justify-between items-center">
                  <h3 className="font-black text-lg text-slate-800 dark:text-white">{isEditing ? 'Edit Album' : 'Upload Dokumentasi'}</h3>
                  <button onClick={resetForm}><X size={20}/></button>
               </div>
               
               <form onSubmit={handleSave} className="p-6 overflow-y-auto custom-scrollbar space-y-4">
                  
                  {/* Multi-Image Preview Grid */}
                  <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-slate-500">Foto Kegiatan ({form.images.length})</label>
                      <div className="grid grid-cols-3 gap-2">
                          {form.images.map((img, idx) => (
                              <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-slate-200 group">
                                  <Image src={img} alt="preview" fill className="object-cover"/>
                                  <button type="button" onClick={() => removeImage(idx)} className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                      <X size={12}/>
                                  </button>
                              </div>
                          ))}
                          {/* Upload Button Box */}
                          <div onClick={() => fileInputRef.current?.click()} className="relative aspect-square rounded-lg border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50 dark:border-white/10 dark:hover:bg-white/5 transition-colors cursor-pointer flex flex-col items-center justify-center text-slate-400">
                              <UploadCloud size={24}/>
                              <span className="text-[10px] mt-1 font-bold">Tambah</span>
                              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" multiple onChange={handleImageUpload}/>
                          </div>
                      </div>
                  </div>

                  <div className="space-y-3">
                     <div>
                        <label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block">Judul Kegiatan</label>
                        <input required type="text" className="w-full p-2.5 border rounded-lg text-sm font-bold bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 outline-none focus:border-blue-500" placeholder="Contoh: Rapat Kerja Bulanan" value={form.judul} onChange={e => setForm({...form, judul: e.target.value})}/>
                     </div>
                     
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block">Kategori</label>
                           <select className="w-full p-2.5 border rounded-lg text-sm bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 outline-none focus:border-blue-500" value={form.kategori} onChange={e => setForm({...form, kategori: e.target.value})}>
                              {categories.map(c => <option key={c} value={c}>{c}</option>)}
                           </select>
                        </div>
                        <div>
                           <label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block">Tanggal</label>
                           <input type="date" className="w-full p-2.5 border rounded-lg text-sm bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 outline-none focus:border-blue-500" value={form.tanggal} onChange={e => setForm({...form, tanggal: e.target.value})}/>
                        </div>
                     </div>

                     <div>
                        <label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block">Deskripsi Singkat</label>
                        <textarea className="w-full p-2.5 border rounded-lg text-sm h-20 resize-none bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 outline-none focus:border-blue-500" placeholder="Ceritakan sedikit tentang momen ini..." value={form.deskripsi} onChange={e => setForm({...form, deskripsi: e.target.value})}/>
                     </div>
                  </div>

                  <div className="pt-2 flex gap-2">
                     <button type="button" onClick={resetForm} className="flex-1 py-3 text-slate-500 text-xs font-bold hover:bg-slate-100 rounded-xl">Batal</button>
                     <button type="submit" disabled={isSubmitting} className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2">
                        {isSubmitting ? <Loader2 className="animate-spin" size={18}/> : <>{isEditing ? <Edit size={18}/> : <Plus size={18}/>} {isEditing ? 'Simpan Perubahan' : 'Posting Galeri'}</>}
                     </button>
                  </div>
               </form>
            </div>
         </div>
      )}
    </div>
  );
}