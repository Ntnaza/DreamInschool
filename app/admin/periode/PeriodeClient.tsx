"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, Calendar, ShieldCheck, Edit3, Trash2, 
  Save, X, Loader2, Camera, Clock, History, CheckCircle2,
  Users, Briefcase, ChevronRight
} from "lucide-react";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/Toast";
import { showConfirm } from "@/components/ConfirmDialog";
import { createPeriode, updatePeriode, deletePeriode, setActivePeriode } from "@/lib/actions";
import Image from "next/image";

export default function PeriodeClient({ initialData }: { initialData: any[] }) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    tahun: "",
    namaKabinet: "",
    logoKabinet: "",
    fotoAngkatan: ""
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) return showToast("Maksimal 2MB", "error");
      const reader = new FileReader();
      reader.onloadend = () => setForm({ ...form, [field]: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  const openAddModal = () => {
    setIsEditing(false); setEditId(null);
    setForm({ tahun: "", namaKabinet: "", logoKabinet: "", fotoAngkatan: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (p: any) => {
    setIsEditing(true); setEditId(p.id);
    setForm({ tahun: p.tahun, namaKabinet: p.namaKabinet || "", logoKabinet: p.logoKabinet || "", fotoAngkatan: p.fotoAngkatan || "" });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.tahun) return showToast("Tahun ajaran wajib!", "warning");
    setLoading(true);
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    try {
      const res = isEditing && editId ? await updatePeriode(editId, formData) : await createPeriode(formData);
      if (res.success) { showToast(res.message, "success"); setIsModalOpen(false); router.refresh(); }
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
    <div className="flex flex-col h-full space-y-8 pb-20">
      
      {/* 1. HEADER */}
      <div className="flex-shrink-0 flex flex-col md:flex-row justify-between items-end gap-6 px-1">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 font-sans">
            Arsip Angkatan <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">⏳</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Simpan dan kelola sejarah kepengurusan OSIS-MPK.</p>
        </div>
        <button onClick={openAddModal} className="px-6 py-3 bg-slate-900 dark:bg-blue-600 text-white rounded-xl font-bold shadow-lg text-xs transition-transform active:scale-95 flex items-center gap-2">
          <Plus size={18} /> Tambah Sejarah
        </button>
      </div>

      {/* 2. GRID LIST (CLEAN MINIMALIST) */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialData.map((p) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative group">
              
              {/* THE CARD (Subtle Rounding & Elegant) */}
              <div className={`relative bg-white dark:bg-slate-900/40 p-3 pb-6 rounded-3xl shadow-sm border transition-all duration-500 group-hover:shadow-xl ${p.isAktif ? 'border-blue-500 ring-4 ring-blue-500/5' : 'border-slate-100 dark:border-white/5'}`}>
                
                {/* PHOTO AREA (LANDSCAPE 16:9) */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-5">
                  {p.fotoAngkatan ? (
                    <img src={p.fotoAngkatan} alt="Foto" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-10"><History size={40} /></div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
                  
                  {/* LOGO KABINET (Minimalist Floating) */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xl border border-white/20 p-1.5 flex items-center justify-center">
                    {p.logoKabinet ? <img src={p.logoKabinet} alt="L" className="w-full h-full object-contain" /> : <History className="text-white/50" size={16} />}
                  </div>

                  {/* ACTIVE BADGE */}
                  {p.isAktif && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest rounded-lg shadow-xl flex items-center gap-1.5">
                      <div className="w-1 h-1 bg-white rounded-full animate-pulse" /> Aktif
                    </div>
                  )}

                  {/* INFO OVERLAY */}
                  <div className="absolute bottom-5 left-6 right-6">
                    <h3 className="text-xl font-black text-white tracking-tight uppercase leading-none">{p.tahun}</h3>
                    <p className="text-blue-400 text-[9px] font-bold uppercase tracking-[0.2em] mt-1.5">{p.namaKabinet || 'TANPA KABINET'}</p>
                  </div>
                </div>

                {/* STATS & ACTION */}
                <div className="px-3 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                      <Users size={14} className="text-slate-400" /> {p._count.pengurus} Anggota
                    </div>
                    <div className="h-3 w-[1px] bg-slate-100 dark:border-white/5" />
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                      <Briefcase size={14} className="text-slate-400" /> {p._count.proker} Program
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {!p.isAktif ? (
                      <button onClick={() => handleActivate(p)} className="flex-1 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all">Pilih</button>
                    ) : (
                      <div className="flex-1 py-2.5 bg-emerald-500/10 text-emerald-600 rounded-xl text-[9px] font-black uppercase tracking-widest text-center border border-emerald-500/20">Menjabat</div>
                    )}
                    <button onClick={() => openEditModal(p)} className="p-2.5 bg-slate-50 dark:bg-white/5 text-slate-400 hover:text-blue-600 rounded-xl transition-all"><Edit3 size={16} /></button>
                    {!p.isAktif && (
                      <button onClick={() => {
                        showConfirm({ title: "Hapus Arsip?", message: "Data akan musnah!", type: "danger", onConfirm: async () => {
                          const res = await deletePeriode(p.id);
                          if (res.success) { showToast(res.message, "success"); router.refresh(); }
                        } });
                      }} className="p-2.5 bg-slate-50 dark:bg-white/5 text-slate-400 hover:text-red-500 rounded-xl transition-all"><Trash2 size={16} /></button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MODAL (MODERN SUBTLE) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 30 }} className="relative w-full max-w-xl bg-white dark:bg-[#0a0f1e] rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10">
              <div className="p-8 border-b border-slate-50 dark:border-white/5 flex justify-between items-center bg-white dark:bg-[#0a0f1e]">
                <h3 className="font-black text-xl text-slate-900 dark:text-white uppercase tracking-tighter">{isEditing ? 'Update Sejarah' : 'Tambah Angkatan'}</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 text-slate-300 hover:text-red-500 transition-colors"><X size={24} /></button>
              </div>
              
              <form onSubmit={handleSave} className="p-8 space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Foto Angkatan</label>
                    <div className="relative h-32 rounded-2xl bg-slate-50 dark:bg-white/5 border-2 border-dashed flex items-center justify-center overflow-hidden cursor-pointer" onClick={() => document.getElementById('fotoUpload')?.click()}>
                      {form.fotoAngkatan ? <img src={form.fotoAngkatan} className="w-full h-full object-cover" /> : <Camera size={24} className="text-slate-300" />}
                      <input type="file" id="fotoUpload" hidden accept="image/*" onChange={e => handleImageUpload(e, 'fotoAngkatan')} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Logo Kabinet</label>
                    <div className="relative h-32 rounded-2xl bg-slate-50 dark:bg-white/5 border-2 border-dashed flex items-center justify-center overflow-hidden cursor-pointer" onClick={() => document.getElementById('logoUpload')?.click()}>
                      {form.logoKabinet ? <img src={form.logoKabinet} className="w-full h-full object-contain p-4" /> : <History size={24} className="text-slate-300" />}
                      <input type="file" id="logoUpload" hidden accept="image/*" onChange={e => handleImageUpload(e, 'logoKabinet')} />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tahun</label><input type="text" value={form.tahun} onChange={e => setForm({...form, tahun: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-slate-50 border outline-none focus:ring-4 focus:ring-blue-500/10 text-sm font-bold" placeholder="2025/2026" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Kabinet</label><input type="text" value={form.namaKabinet} onChange={e => setForm({...form, namaKabinet: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-slate-50 border outline-none focus:ring-4 focus:ring-blue-500/10 text-sm font-bold" placeholder="Jiva Abisatya" /></div>
                </div>
                <button type="submit" disabled={loading} className="w-full py-4 bg-blue-600 text-white rounded-xl text-xs font-black shadow-xl uppercase tracking-[0.2em]">{loading ? <Loader2 className="animate-spin mx-auto" size={20} /> : 'Simpan Sejarah'}</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
