"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Plus, Calendar, Edit3, Trash2, Save, X, Loader2, Camera, History, 
  Users, Briefcase, Star
} from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { showToast } from "@/components/Toast";
import { showConfirm } from "@/components/ConfirmDialog";
import { createPeriode, updatePeriode, deletePeriode, setActivePeriode } from "@/lib/actions";

export default function PeriodeClient({ initialData }: { initialData: any[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [data, setData] = useState(initialData);

  const action = searchParams.get("action");
  const editIdParam = searchParams.get("id");
  const isModalOpen = action === "add" || action === "edit";
  const isEditing = action === "edit";
  const editId = editIdParam ? parseInt(editIdParam) : null;

  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const [form, setForm] = useState({
    tahun: "",
    namaKabinet: "",
    logoKabinet: "",
    fotoAngkatan: ""
  });

  useEffect(() => {
    setIsClient(true);
    if (initialData) {
      setData(initialData);
    }
  }, [initialData]);

  // Sync form with URL state for editing
  useEffect(() => {
    if (isEditing && editId && data.length > 0) {
      const p = data.find((item: any) => item.id === editId);
      if (p) {
        setForm({ tahun: p.tahun, namaKabinet: p.namaKabinet || "", logoKabinet: p.logoKabinet || "", fotoAngkatan: p.fotoAngkatan || "" });
      }
    } else if (action === "add") {
      setForm({ tahun: "", namaKabinet: "", logoKabinet: "", fotoAngkatan: "" });
    }
  }, [isEditing, editId, action, data]);

  const closeModal = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("action");
    params.delete("id");
    router.push(`${pathname}?${params.toString()}`);
  };

  const openEditModal = (p: any) => {
    const params = new URLSearchParams(searchParams);
    params.set("action", "edit");
    params.set("id", p.id.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) return showToast("Maksimal 2MB", "error");
      const reader = new FileReader();
      reader.onloadend = () => setForm({ ...form, [field]: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.tahun) return showToast("Tahun ajaran wajib!", "warning");
    setLoading(true);
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    try {
      const res = isEditing && editId ? await updatePeriode(editId, formData) : await createPeriode(formData);
      if (res.success) { 
        showToast(res.message, "success", isEditing ? "Arsip Diperbarui" : "Arsip Ditambahkan"); 
        closeModal(); 
        router.refresh(); 
      }
      else showToast(res.message, "error");
    } catch (err) { showToast("Error!", "error"); }
    finally { setLoading(false); }
  };

  const handleActivate = (p: any) => {
    showConfirm({
      title: "Aktifkan Periode?",
      message: `Ganti kepengurusan aktif ke ${p.tahun}?`,
      onConfirm: async () => {
        const res = await setActivePeriode(p.id);
        if (res.success) { showToast(res.message, "success"); router.refresh(); }
      }
    });
  };

  return (
    <div className="flex-1 overflow-hidden flex flex-col gap-6 font-sans">
      
      {/* GRID LIST */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-1">
          <PeriodeDataList 
            data={data} 
            openEditModal={openEditModal} 
            handleActivate={handleActivate}
            router={router}
          />
      </div>

      {/* MODAL */}

      {isModalOpen && (
         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
            <div className="bg-white dark:bg-[#1e293b] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
               <div className="p-5 border-b border-slate-100 dark:border-white/10 flex justify-between items-center">
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white">{isEditing ? 'Edit Angkatan' : 'Tambah Angkatan'}</h3>
                  <button onClick={closeModal}><X size={20} className="text-slate-400 hover:text-red-500" /></button>
               </div>
               <form onSubmit={handleSave} className="p-6 overflow-y-auto custom-scrollbar space-y-5">
                  
                  {/* Visual Upload Area */}
                  <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase text-slate-500">Foto Bersama</label>
                        <div onClick={() => document.getElementById('fotoUpload')?.click()} className="relative aspect-video rounded-xl border-2 border-dashed border-slate-200 dark:border-white/10 hover:border-blue-500 transition-colors cursor-pointer flex flex-col items-center justify-center overflow-hidden bg-slate-50 dark:bg-white/5">
                            {form.fotoAngkatan ? (
                              <img src={form.fotoAngkatan} className="w-full h-full object-cover" />
                            ) : (
                              <>
                                <Camera size={24} className="text-slate-300" />
                                <span className="text-[9px] mt-1 font-bold text-slate-400">UPLOAD</span>
                              </>
                            )}
                            <input type="file" id="fotoUpload" hidden accept="image/*" onChange={e => handleImageUpload(e, 'fotoAngkatan')} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase text-slate-500">Logo Kabinet</label>
                        <div onClick={() => document.getElementById('logoUpload')?.click()} className="relative aspect-video rounded-xl border-2 border-dashed border-slate-200 dark:border-white/10 hover:border-blue-500 transition-colors cursor-pointer flex flex-col items-center justify-center overflow-hidden bg-slate-50 dark:bg-white/5">
                            {form.logoKabinet ? (
                              <img src={form.logoKabinet} className="w-full h-full object-contain p-4" />
                            ) : (
                              <>
                                <Star size={24} className="text-slate-300" />
                                <span className="text-[9px] mt-1 font-bold text-slate-400">UPLOAD</span>
                              </>
                            )}
                            <input type="file" id="logoUpload" hidden accept="image/*" onChange={e => handleImageUpload(e, 'logoKabinet')} />
                        </div>
                      </div>
                  </div>

                  <div className="space-y-4">
                     <div>
                        <label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block">Tahun Ajaran</label>
                        <input 
                          required 
                          type="text" 
                          placeholder="Contoh: 2025/2026"
                          className="w-full p-3 border rounded-xl text-sm font-bold bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 outline-none focus:border-blue-500" 
                          value={form.tahun} 
                          onChange={e => setForm({...form, tahun: e.target.value})}
                        />
                     </div>
                     <div>
                        <label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block">Nama Kabinet</label>
                        <input 
                          type="text" 
                          placeholder="Contoh: Nawa Satya"
                          className="w-full p-3 border rounded-xl text-sm font-bold bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 outline-none focus:border-blue-500" 
                          value={form.namaKabinet} 
                          onChange={e => setForm({...form, namaKabinet: e.target.value})}
                        />
                     </div>
                  </div>

                  <div className="pt-4 flex gap-3">
                     <button type="button" onClick={closeModal} className="flex-1 py-3 text-slate-500 text-xs font-bold hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors">Batal</button>
                     <button type="submit" disabled={loading} className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95">
                        {loading ? <Loader2 className="animate-spin" size={18}/> : (
                          <>
                            {isEditing ? <Save size={18}/> : <Plus size={18}/>}
                            <span>{isEditing ? 'Simpan Perubahan' : 'Tambah Angkatan'}</span>
                          </>
                        )}
                     </button>
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

export function PeriodeSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-slate-100 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden">
          <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800" />
          <div className="p-4 space-y-3">
            <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded" />
            <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded" />
            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex gap-4">
               <div className="h-3 w-10 bg-slate-200 dark:bg-slate-800 rounded" />
               <div className="h-3 w-10 bg-slate-200 dark:bg-slate-800 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PeriodeDataList({ data, openEditModal, handleActivate, router }: any) {


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((p: any, idx: number) => (
        <div key={p.id} className={`group relative bg-white dark:bg-[#1e293b] rounded-2xl border border-slate-100 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${idx === 0 ? 'tour-periode-card' : ''}`}>
           {/* IMAGE AREA */}
           <div className="aspect-[4/3] relative bg-slate-100 dark:bg-slate-800 overflow-hidden">
              {p.fotoAngkatan ? (
                <Image src={p.fotoAngkatan} alt={p.tahun} fill className="object-cover group-hover:scale-110 transition-transform duration-700"/>
              ) : (
                <div className="w-full h-full flex items-center justify-center opacity-10"><History size={48} /></div>
              )}

              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                 <div className="flex justify-end gap-2">
                      <button onClick={() => openEditModal(p)} className="p-2 bg-white text-slate-900 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-all transform hover:scale-110"><Edit3 size={16}/></button>
                      {!p.isAktif && (
                        <button 
                          onClick={() => {
                            showConfirm({ 
                              title: "Hapus Arsip?", 
                              message: "Seluruh data angkatan ini akan dihapus permanen.", 
                              type: "danger", 
                              onConfirm: async () => {
                                const res = await deletePeriode(p.id);
                                if (res.success) { showToast(res.message, "success"); router.refresh(); }
                              } 
                            });
                          }} 
                          className="p-2 bg-white text-red-600 rounded-lg shadow-lg hover:bg-red-600 hover:text-white transition-all transform hover:scale-110"
                        >
                          <Trash2 size={16}/>
                        </button>
                      )}
                 </div>
              </div>

              {/* Badge Logo Kabinet */}
              <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-1.5 flex items-center justify-center shadow-sm">
                {p.logoKabinet ? <img src={p.logoKabinet} alt="L" className="w-full h-full object-contain" /> : <Star className="text-amber-400" size={16} fill="currentColor" />}
              </div>

              {p.isAktif && (
                <div className="absolute top-3 right-3 px-2 py-1 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-wider rounded-md shadow-sm flex items-center gap-1">
                  <div className="w-1 h-1 bg-white rounded-full animate-pulse" /> Menjabat
                </div>
              )}
           </div>

           {/* CARD INFO */}
           <div className="p-4">
              <h3 className="font-bold text-slate-800 dark:text-white mb-1 line-clamp-1 uppercase">{p.namaKabinet || 'TANPA KABINET'}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-bold uppercase tracking-tight">
                  <Calendar size={12}/> {p.tahun}
                </div>
                <div className="flex items-center gap-2">
                    {!p.isAktif && (
                      <button onClick={() => handleActivate(p)} className="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest hover:underline">Pilih</button>
                    )}
                </div>
              </div>
              
              {/* Mini Stats */}
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-4">
                <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                  <Users size={12} className="text-blue-500/70" /> {p._count.pengurus}
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                  <Briefcase size={12} className="text-purple-500/70" /> {p._count.proker}
                </div>
              </div>
           </div>
        </div>
      ))}
    </div>
  );
}
