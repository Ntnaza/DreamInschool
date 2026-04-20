"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, Globe, Share2, Phone, Mail, MapPin, Loader2, Image as ImageIcon } from "lucide-react";
import { showToast } from "@/components/Toast";

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [config, setConfig] = useState({
    namaOrganisasi: "",
    deskripsi: "",
    logoUrl: "",
    faviconUrl: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    email: "",
    telepon: "",
    alamat: "",
    mapUrl: ""
  });

  useEffect(() => {
    fetchConfig();
  }, []);

  const fetchConfig = async () => {
    try {
      const res = await fetch("/api/config", { cache: 'no-store' });
      const data = await res.json();
      if (!data.error) {
        setConfig(data);
      }
    } catch (err) {
      showToast("Gagal mengambil data pengaturan", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // Limit 2MB
        showToast("Ukuran file terlalu besar (Maks 2MB)", "error");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setConfig({ ...config, [field]: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config)
      });
      if (res.ok) {
        showToast("Pengaturan berhasil disimpan!", "success");
      } else {
        throw new Error();
      }
    } catch (err) {
      showToast("Gagal menyimpan pengaturan", "error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="relative h-[calc(100vh-140px)] flex flex-col font-sans">
      
      {/* 1. FIXED HEADER (BENAR-BENAR TIDAK BERGERAK) */}
      <div className="flex-shrink-0 mb-8 px-1">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="flex items-center gap-4 mb-1">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                Pengaturan Website <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">⚙️</span>
              </h1>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">
              Kelola identitas, kontak, dan media sosial website OSIS-MPK.
            </p>
          </div>
          
          <button 
            onClick={handleSave}
            disabled={saving}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 flex items-center gap-2 transition-transform active:scale-95 text-xs disabled:opacity-50"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save size={18} />}
            {saving ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
        </div>
      </div>

      {/* 2. SCROLLABLE CONTENT AREA */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar-main space-y-8 pb-20">
        <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* IDENTITAS UTAMA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <Globe size={22} strokeWidth={2.5} />
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">Identitas Organisasi</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Nama Organisasi</label>
                <input 
                  type="text" 
                  value={config.namaOrganisasi}
                  onChange={(e) => setConfig({...config, namaOrganisasi: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="Contoh: OSIS MPK SMK Nurul Islam"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Deskripsi Singkat</label>
                <textarea 
                  rows={3}
                  value={config.deskripsi || ""}
                  onChange={(e) => setConfig({...config, deskripsi: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                  placeholder="Deskripsi yang tampil di footer..."
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 text-blue-600">Logo Utama</label>
                  <div className="relative group">
                    <div className="w-full h-32 rounded-xl bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-white/10 flex flex-col items-center justify-center overflow-hidden transition-all group-hover:border-blue-500/50">
                      {config.logoUrl ? (
                        <div className="relative w-full h-full">
                          <img src={config.logoUrl} alt="Logo Preview" className="w-full h-full object-contain p-2" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-xs font-bold bg-blue-600 px-3 py-1.5 rounded-lg shadow-lg">Ganti Logo</span>
                          </div>
                        </div>
                      ) : (
                        <>
                          <ImageIcon className="text-slate-400 mb-2" size={28} />
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pilih Logo</span>
                        </>
                      )}
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "logoUrl")}
                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 text-indigo-600">Favicon Browser</label>
                  <div className="relative group">
                    <div className="w-full h-32 rounded-xl bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-white/10 flex flex-col items-center justify-center overflow-hidden transition-all group-hover:border-indigo-500/50">
                      {config.faviconUrl ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <img src={config.faviconUrl} alt="Favicon Preview" className="w-12 h-12 object-contain" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-[10px] font-bold bg-indigo-600 px-3 py-1.5 rounded-lg shadow-lg">Ganti Favicon</span>
                          </div>
                        </div>
                      ) : (
                        <>
                          <ImageIcon className="text-slate-400 mb-2" size={28} />
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pilih Favicon</span>
                        </>
                      )}
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "faviconUrl")}
                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>            </div>
          </motion.div>

          {/* MEDIA SOSIAL */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3 text-purple-600 mb-2">
              <Share2 size={22} strokeWidth={2.5} />
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">Media Sosial</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Instagram URL</label>
                <input 
                  type="text" 
                  value={config.instagram || ""}
                  onChange={(e) => setConfig({...config, instagram: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                  placeholder="https://instagram.com/..."
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">YouTube URL</label>
                <input 
                  type="text" 
                  value={config.youtube || ""}
                  onChange={(e) => setConfig({...config, youtube: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-red-500 outline-none transition-all"
                  placeholder="https://youtube.com/..."
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">TikTok URL</label>
                <input 
                  type="text" 
                  value={config.tiktok || ""}
                  onChange={(e) => setConfig({...config, tiktok: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                  placeholder="https://tiktok.com/@..."
                />
              </div>
            </div>
          </motion.div>

          {/* KONTAK & LOKASI */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3 text-orange-600 mb-2">
              <MapPin size={22} strokeWidth={2.5} />
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">Kontak & Lokasi</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Resmi</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="email" 
                      value={config.email || ""}
                      onChange={(e) => setConfig({...config, email: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                      placeholder="osis@sekolah.sch.id"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Telepon / WA</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      value={config.telepon || ""}
                      onChange={(e) => setConfig({...config, telepon: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                      placeholder="081234..."
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Alamat Lengkap</label>
                  <textarea 
                    rows={2}
                    value={config.alamat || ""}
                    onChange={(e) => setConfig({...config, alamat: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none"
                    placeholder="Jl. Raya..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Google Maps URL</label>
                  <input 
                    type="text" 
                    value={config.mapUrl || ""}
                    onChange={(e) => setConfig({...config, mapUrl: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                    placeholder="https://goo.gl/maps/..."
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
