"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  User, Mail, Phone, Instagram, 
  MapPin, Heart, Briefcase, Camera, 
  Save, Loader2, CheckCircle, Info
} from "lucide-react";
import { updateSelfProfile } from "@/lib/actions";
import { showToast } from "@/components/Toast";

export default function ProfileClient({ data }: { data: any }) {
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    hp: data.hp || "",
    email: data.email || "",
    instagram: data.instagram || "",
    tiktok: data.tiktok || "",
    domisili: data.domisili || "",
    motto: data.motto || "",
    visi: data.visi || "",
    misi: data.misi || "",
    fotoUrl: data.fotoUrl || "",
    tglLahir: data.tglLahir || ""
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) return showToast("Maksimal 2MB", "error");
      const reader = new FileReader();
      reader.onloadend = () => setForm({ ...form, fotoUrl: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));

    try {
      const res = await updateSelfProfile(formData);
      if (res.success) {
        showToast(res.message, "success");
      } else {
        showToast(res.message, "error");
      }
    } catch (error) {
      showToast("Gagal menyimpan profil", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col space-y-8 pb-20">
      
      {/* 1. FIXED HEADER */}
      <div className="flex-shrink-0 flex flex-col md:flex-row justify-between items-center gap-6 px-1">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
            Profil Saya <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">✨</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Lengkapi data diri Anda agar tampil keren di website.</p>
        </div>
        
        <button 
          onClick={handleSave}
          disabled={loading}
          className="w-full md:w-auto px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save size={20} />}
          {loading ? "Menyimpan..." : "Simpan Profil"}
        </button>
      </div>

      {/* 2. SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar-main">
        <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* SISI KIRI: FOTO & DATA POKOK (READ ONLY) */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 group">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-700 shadow-xl relative">
                  <Image src={form.fotoUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"} alt="Profil" fill className="object-cover" />
                </div>
                <button type="button" onClick={() => fileInputRef.current?.click()} className="absolute bottom-0 right-0 p-2.5 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
                  <Camera size={18} />
                </button>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{data.nama}</h2>
              <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{data.jabatan}</p>
              
              <div className="mt-8 space-y-3 pt-6 border-t border-slate-50 dark:border-white/5">
                <div className="flex items-center justify-between text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">NIS / NIP</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{data.nis}</span>
                </div>
                <div className="flex items-center justify-between text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Divisi</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{data.divisi}</span>
                </div>
                <div className="flex items-center justify-between text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</span>
                  <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[9px] font-black rounded-full">{data.status}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-500/10 rounded-2xl border border-amber-100 dark:border-amber-500/20 flex gap-3 text-left">
                <Info size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[10px] text-amber-700 dark:text-amber-400 leading-relaxed font-medium">Nama, NIS, dan Jabatan hanya bisa diubah oleh <strong>Admin Utama</strong>.</p>
              </div>
            </motion.div>
          </div>

          {/* SISI KANAN: FORM EDIT */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* DATA KONTAK */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm space-y-6">
              <div className="flex items-center gap-3 text-blue-600 mb-2">
                <Mail size={22} strokeWidth={2.5} />
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">Kontak & Sosial Media</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">WhatsApp</label>
                  <input type="text" value={form.hp} onChange={e => setForm({...form, hp: e.target.value})} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-bold" placeholder="08..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Resmi</label>
                  <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-bold" placeholder="name@school.sch.id" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Instagram Username</label>
                  <input type="text" value={form.instagram} onChange={e => setForm({...form, instagram: e.target.value})} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-bold" placeholder="@..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">TikTok Username</label>
                  <input type="text" value={form.tiktok} onChange={e => setForm({...form, tiktok: e.target.value})} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-bold" placeholder="@..." />
                </div>
              </div>
            </motion.div>

            {/* DATA PERSONAL */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm space-y-6">
              <div className="flex items-center gap-3 text-pink-600 mb-2">
                <Heart size={22} strokeWidth={2.5} />
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">Data Personal</h3>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Tanggal Lahir</label>
                    <input type="date" value={form.tglLahir} onChange={e => setForm({...form, tglLahir: e.target.value})} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Domisili (Alamat)</label>
                    <input type="text" value={form.domisili} onChange={e => setForm({...form, domisili: e.target.value})} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-bold" placeholder="Cianjur, Jawa Barat" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Motto Hidup</label>
                  <input type="text" value={form.motto} onChange={e => setForm({...form, motto: e.target.value})} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-bold italic" placeholder="Berikan kata-kata motivasi terbaik Anda..." />
                </div>
              </div>
            </motion.div>

            {/* VISI MISI */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm space-y-6">
              <div className="flex items-center gap-3 text-orange-600 mb-2">
                <Briefcase size={22} strokeWidth={2.5} />
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">Visi & Misi Pribadi</h3>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Visi</label>
                  <textarea rows={3} value={form.visi} onChange={e => setForm({...form, visi: e.target.value})} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-medium resize-none" placeholder="Tujuan besar Anda di organisasi..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Misi</label>
                  <textarea rows={5} value={form.misi} onChange={e => setForm({...form, misi: e.target.value})} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-medium resize-none" placeholder="Langkah-langkah untuk mencapai visi tersebut..." />
                </div>
              </div>
            </motion.div>

          </div>
        </form>
      </div>
    </div>
  );
}
