"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Plus, Grid, List,
  User, Mail, Phone, X,
  Instagram, Calendar, Heart,
  Edit3, Trash2, CheckCircle, Loader2,
  Layers, Briefcase, Camera,
  Video, Globe, Trash, Check
} from "lucide-react";
import { showToast } from "@/components/Toast";
import TourGuide from "@/components/TourGuide";
import {
  createPengurus, updatePengurus, deletePengurus,
  createDivisi, updateDivisi, deleteDivisi,
  createJabatan, updateJabatan, deleteJabatan
} from "@/lib/actions";

const pengurusTourSteps = [
  { target: '.tour-pengurus-header', content: 'Selamat datang! Ini adalah pusat database seluruh anggota OSIS & MPK.', disableBeacon: true },
  { target: '.tour-manage-divisi', content: 'Di sini Anda bisa mengatur Struktur Organisasi (Divisi & Jabatan) secara dinamis tanpa batas.', disableBeacon: true },
  { target: '.tour-add-member-btn', content: 'Gunakan tombol ini untuk menambah anggota baru ke dalam sistem.', disableBeacon: true },
  { target: '.tour-filter-sekbid', content: 'Saring daftar anggota berdasarkan Divisi/Sekbid untuk pencarian yang lebih terfokus.', disableBeacon: true },
  { target: '.tour-search-bar', content: 'Cari anggota secara spesifik berdasarkan Nama atau Jabatan di sini.', disableBeacon: true },
  { target: '.tour-view-toggle', content: 'Pilih tampilan yang paling nyaman bagi Anda: Mode Kartu (Grid) atau Mode Daftar (List).', disableBeacon: true },
  { target: '.tour-member-card', content: 'Setiap kartu menampilkan info ringkas. Klik ikon pensil untuk edit, atau tong sampah untuk hapus.', disableBeacon: true },
];

export default function PengurusClient({ initialData, initialDivisi }: { initialData: any[], initialDivisi: any[] }) {
  const [members, setMembers] = useState(initialData);
  const [divisions, setDivisions] = useState(initialDivisi);
  const [isDataLoading, setIsDataLoading] = useState(true);

  const [viewMode, setViewMode] = useState("grid");
  const [isModalStructureOpen, setIsModalStructureOpen] = useState(false);
  const [isModalPengurusOpen, setIsModalPengurusOpen] = useState(false);

  const [filterSekbid, setFilterSekbid] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [isClient, setIsClient] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("utama");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedDivId, setSelectedDivId] = useState<number | null>(initialDivisi[0]?.id || null);
  const [divisiForm, setDivisiForm] = useState({ nama: "", deskripsi: "" });
  const [jabatanFormName, setJabatanFormName] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    nama: "", nis: "", kelas: "", jabatan: "", divisi: "", status: "AKTIF",
    hp: "", email: "", instagram: "", tiktok: "",
    tglLahir: "", domisili: "", transportasi: "Motor Pribadi", motto: "",
    visi: "", misi: "", fotoUrl: "", isAdvisor: false
  });

  useEffect(() => {
    setIsClient(true);
    setMembers(initialData);
    setDivisions(initialDivisi);
    const timer = setTimeout(() => setIsDataLoading(false), 500);
    return () => clearTimeout(timer);
  }, [initialData, initialDivisi]);

  useEffect(() => {
    if (form.divisi && divisions.length > 0) {
      const currentDiv = divisions.find(d => d.nama === form.divisi);
      if (currentDiv && currentDiv.jabatans.length > 0) {
        if (!currentDiv.jabatans.some((j: any) => j.nama === form.jabatan)) {
          setForm(prev => ({ ...prev, jabatan: currentDiv.jabatans[0].nama }));
        }
      } else {
        setForm(prev => ({ ...prev, jabatan: "Anggota" }));
      }
    }
  }, [form.divisi, divisions]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) return showToast("Maksimal 2MB.", "error");
      const reader = new FileReader();
      reader.onloadend = () => setForm({ ...form, fotoUrl: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  const openNewMember = () => {
    setIsEditing(false); setEditId(null); setActiveTab("utama");
    const dDiv = divisions[0]?.nama || "Inti";
    const dJab = divisions[0]?.jabatans[0]?.nama || "Anggota";
    setForm({
      nama: "", nis: "", kelas: "", jabatan: dJab, divisi: dDiv, status: "AKTIF",
      hp: "", email: "", instagram: "", tiktok: "",
      tglLahir: "", domisili: "", transportasi: "Motor Pribadi", motto: "",
      visi: "", misi: "", fotoUrl: "", isAdvisor: false
    });
    setIsModalPengurusOpen(true);
  };

  const openEditMember = (m: any) => {
    setIsEditing(true); setEditId(m.id); setActiveTab("utama");
    setForm({
      nama: m.nama, nis: m.nis, kelas: m.kelas, jabatan: m.jabatan, divisi: m.divisi, status: m.status,
      hp: m.hp || "", email: m.email || "", instagram: m.instagram || "", tiktok: m.tiktok || "",
      tglLahir: m.tglLahir || "", domisili: m.domisili || "", transportasi: m.transportasi || "Motor Pribadi", motto: m.motto || "",
      visi: m.visi || "", misi: m.misi || "", fotoUrl: m.fotoUrl || "", isAdvisor: m.isAdvisor || false
    });
    setIsModalPengurusOpen(true);
  };

  const handleSaveMember = async () => {
    if (!form.nama || !form.nis) return showToast("Wajib diisi!", "warning");
    setIsSubmitting(true);
    const formData = new FormData();
    if (isEditing && editId) formData.append("id", editId.toString());
    Object.entries(form).forEach(([key, value]) => formData.append(key, value.toString()));
    try {
      const res = isEditing ? await updatePengurus(formData) : await createPengurus(formData);
      if (res.success) { showToast("Berhasil!", "success"); window.location.reload(); }
      else showToast(res.message, "error");
    } catch (err) { showToast("Error!", "error"); }
    finally { setIsSubmitting(false); }
  };

  const handleSaveDivisi = async () => {
    if (!divisiForm.nama) return;
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("nama", divisiForm.nama);
    formData.append("deskripsi", divisiForm.deskripsi);
    try {
      const res = selectedDivId ? await updateDivisi(selectedDivId, formData) : await createDivisi(formData);
      if (res.success) { showToast("Simpan Divisi!", "success"); window.location.reload(); }
      else showToast(res.message, "error");
    } catch (error) { showToast("Gagal!", "error"); }
    finally { setIsSubmitting(false); }
  };

  const handleAddJabatan = async () => {
    if (!jabatanFormName || !selectedDivId) return;
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("nama", jabatanFormName);
    formData.append("divisiId", selectedDivId.toString());
    try {
      const res = await createJabatan(formData);
      if (res.success) { setJabatanFormName(""); showToast("Jabatan!", "success"); window.location.reload(); }
      else showToast(res.message, "error");
    } catch (error) { showToast("Gagal!", "error"); }
    finally { setIsSubmitting(false); }
  };

  const filteredMembers = members.filter((m) => {
    const matchSekbid = filterSekbid === "Semua" ? true : m.divisi === filterSekbid;
    const matchSearch = m.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.jabatan.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSekbid && matchSearch;
  });

  const selectedDivisi = divisions.find(d => d.id === selectedDivId);

  return (
    <div className="relative h-full flex flex-col font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30 overflow-hidden" style={{ scrollbarGutter: 'stable' }}>
      <div className="flex-shrink-0">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-pengurus-header font-sans">
                Data Pengurus <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">👥</span>
              </h1>
              {isClient && <TourGuide steps={pengurusTourSteps} />}
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Database keanggotaan dan struktur organisasi.</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setIsModalStructureOpen(true)} className="tour-manage-divisi px-5 py-2.5 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 rounded-xl font-bold text-xs shadow-sm flex items-center gap-2 transition-all hover:bg-slate-50 active:scale-95">
              <Layers size={18} /> Struktur
            </button>
            <button onClick={openNewMember} className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 flex items-center gap-2 transition-transform active:scale-95 tour-add-member-btn text-xs">
              <Plus size={18} /> Tambah
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 tour-filter-sekbid no-scrollbar scrollbar-hide" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            <button onClick={() => setFilterSekbid("Semua")} className={`px-4 py-1.5 rounded-xl text-[11px] font-bold transition-all border ${filterSekbid === "Semua" ? "bg-slate-900 dark:bg-blue-600 text-white border-slate-900 shadow-md" : "bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/10 text-slate-500 hover:border-slate-300"}`}>Semua</button>
            {divisions.map((div) => (
              <button key={div.id} onClick={() => setFilterSekbid(div.nama)} className={`px-4 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all border ${filterSekbid === div.nama ? "bg-slate-900 dark:bg-blue-600 text-white border-slate-900 shadow-md" : "bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/10 text-slate-500 hover:border-slate-300"}`}>{div.nama}</button>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="tour-view-toggle flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl">
              <button onClick={() => setViewMode("grid")} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-white' : 'text-slate-400 hover:text-slate-600'}`}><Grid size={18} /></button>
              <button onClick={() => setViewMode("list")} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-white' : 'text-slate-400 hover:text-slate-600'}`}><List size={18} /></button>
            </div>
            <div className="tour-search-bar relative flex-1 md:w-64 group">
              <input type="text" placeholder="Cari..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500/50 outline-none text-sm font-medium text-slate-700 dark:text-white shadow-sm transition-all" />
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-20 pr-2 custom-scrollbar" style={{ scrollbarGutter: 'stable' }}>
        {isDataLoading ? (
          <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-pulse" : "space-y-2 pb-10 animate-pulse"}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              viewMode === "grid" ? (
                <div key={i} className="relative bg-white dark:bg-[#0f172a]/40 border border-slate-200 dark:border-white/5 rounded-3xl p-6 flex flex-col items-center overflow-hidden shadow-sm">
                  <div className="absolute top-0 left-0 w-full h-20 bg-slate-50/50 dark:bg-white/5" />
                  <div className="relative z-10 w-20 h-20 rounded-full p-1 bg-white dark:bg-[#0f172a] shadow-sm border border-slate-100 dark:border-white/10 mb-4">
                    <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-800" />
                  </div>
                  <div className="relative z-10 h-5 w-32 bg-slate-200 dark:bg-slate-800 rounded mb-1" />
                  <div className="relative z-10 h-4 w-20 bg-slate-100 dark:bg-slate-800/50 rounded" />
                  <div className="relative z-10 w-full mt-6 pt-4 border-t border-slate-50 dark:border-white/5 flex justify-between">
                    <div className="flex gap-1">
                      <div className="w-8 h-8 rounded-xl bg-slate-50 dark:bg-white/5" />
                      <div className="w-8 h-8 rounded-xl bg-slate-50 dark:bg-white/5" />
                    </div>
                    <div className="flex gap-1">
                      <div className="w-8 h-8 rounded-xl bg-slate-50 dark:bg-white/5" />
                      <div className="w-8 h-8 rounded-xl bg-slate-50 dark:bg-white/5" />
                    </div>
                  </div>
                </div>
              ) : (
                <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-[#0f172a]/40 border border-slate-200 dark:border-white/10 rounded-2xl h-[74px]">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800" />
                    <div className="space-y-2">
                      <div className="h-3 w-32 bg-slate-200 dark:bg-slate-800 rounded" />
                      <div className="h-2 w-20 bg-slate-100 dark:bg-slate-800/50 rounded" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800" />
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800" />
                  </div>
                </div>
              )
            ))}
          </div>
        ) : (
          <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-2 pb-10"}>
            <AnimatePresence mode="popLayout">
              {filteredMembers.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={viewMode === "grid"
                    ? `group relative bg-white dark:bg-[#0f172a]/40 border border-slate-200 dark:border-white/5 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center overflow-hidden shadow-sm ${idx === 0 ? 'tour-member-card' : ''}`
                    : "flex items-center justify-between p-4 bg-white dark:bg-[#0f172a]/40 border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm"
                  }
                >
                  {viewMode === "grid" ? (
                    <>
                      <div className={`absolute top-0 left-0 w-full h-20 bg-gradient-to-b ${member.divisi === 'Inti' ? 'from-blue-500/10' : 'from-slate-50 dark:from-white/5'} to-transparent`} />
                      <div className="relative z-10 w-20 h-20 rounded-full p-1 bg-white dark:bg-[#0f172a] shadow-sm border border-slate-100 dark:border-white/10 mb-4 group-hover:scale-105 transition-transform duration-500">
                        <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100"><Image src={member.fotoUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"} alt={member.nama} fill className="object-cover" /></div>
                        <div className={`absolute bottom-0 right-0 w-5 h-5 rounded-full border-2 border-white dark:border-[#0f172a] flex items-center justify-center ${member.status === 'AKTIF' ? 'bg-emerald-500' : 'bg-slate-400'}`}>{member.status === 'AKTIF' && <CheckCircle size={10} className="text-white" />}</div>
                      </div>
                      <h3 className="relative z-10 text-base font-bold text-slate-900 dark:text-white mb-1 line-clamp-1">{member.nama}</h3>
                      <span className={`relative z-10 px-2.5 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-wider ${member.divisi === 'Inti' ? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400' : 'bg-slate-50 text-slate-500 dark:bg-white/5'}`}>{member.jabatan}</span>
                      <div className="relative z-10 w-full mt-6 flex items-center justify-between border-t border-slate-50 dark:border-white/5 pt-4">
                        <div className="flex gap-1">
                          {member.hp && <a href={`https://wa.me/${member.hp}`} target="_blank" className="p-2 rounded-xl text-slate-400 hover:text-emerald-600 transition-all border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5"><Phone size={14} /></a>}
                          {member.email && <a href={`mailto:${member.email}`} className="p-2 rounded-xl text-slate-400 hover:text-blue-600 transition-all border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5"><Mail size={14} /></a>}
                        </div>
                        <div className="flex gap-1">
                          <button onClick={() => openEditMember(member)} className="p-2 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all"><Edit3 size={16} /></button>
                          <button onClick={() => { if (confirm("Hapus?")) deletePengurus(member.id).then(res => window.location.reload()); }} className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"><Trash2 size={16} /></button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-4">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100"><Image src={member.fotoUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"} alt={member.nama} fill className="object-cover" /></div>
                        <div><h4 className="font-bold text-sm text-slate-900 dark:text-white">{member.nama}</h4><p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{member.jabatan}</p></div>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => openEditMember(member)} className="p-2 text-slate-400 hover:text-blue-600"><Edit3 size={16} /></button>
                        <button onClick={() => { if (confirm("Hapus?")) deletePengurus(member.id).then(res => window.location.reload()); }} className="p-2 text-slate-400 hover:text-red-600"><Trash2 size={16} /></button>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* --- MODALS --- */}
      <AnimatePresence>
        {isModalPengurusOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalPengurusOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 30 }} className="relative w-full max-w-2xl bg-white dark:bg-[#0a0f1e] rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10 flex flex-col max-h-[90vh]">
              <div className="p-6 border-b border-slate-50 dark:border-white/5 flex justify-between items-center bg-white dark:bg-[#0a0f1e]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600 rounded-xl text-white shadow-lg"><User size={20} /></div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{isEditing ? 'Edit Profil' : 'Anggota Baru'}</h3>
                </div>
                <button onClick={() => setIsModalPengurusOpen(false)} className="p-2 text-slate-400 hover:text-red-500"><X size={20} /></button>
              </div>
              <div className="px-8 pt-4 border-b border-slate-50 dark:border-white/5 bg-slate-50/30 dark:bg-white/5 flex gap-8">
                {[{ id: "utama", label: "Utama", icon: User }, { id: "media", label: "Kontak", icon: Globe }, { id: "personal", label: "Personal", icon: Heart }, { id: "visi", label: "Visi Misi", icon: Briefcase }].map((tab) => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`pb-3 text-xs font-bold border-b-2 uppercase tracking-widest ${activeTab === tab.id ? "border-blue-600 text-blue-600" : "border-transparent text-slate-400"}`}>{tab.label}</button>
                ))}
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-8 bg-white dark:bg-[#0a0f1e]">
                <form className="space-y-8">
                  {activeTab === "utama" && (
                    <div className="space-y-8">
                      <div className="flex flex-col sm:flex-row items-center gap-8 bg-slate-50/50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5 shadow-inner">
                        <div className="relative w-24 h-24 rounded-full bg-white dark:bg-[#0f172a] border-2 border-dashed border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 cursor-pointer overflow-hidden group" onClick={() => fileInputRef.current?.click()}>
                          {form.fotoUrl ? <Image src={form.fotoUrl} alt="Foto" fill className="object-cover" /> : <Camera size={24} className="opacity-20" />}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[8px] font-bold text-white uppercase">Upload</div>
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase">Foto Profil</h4>
                          <p className="text-[10px] text-slate-400 mb-3">Rasio 1:1. Max 2MB.</p>
                          <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                          <div className="flex gap-2 justify-center sm:justify-start">
                            <button type="button" onClick={() => fileInputRef.current?.click()} className="px-4 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 text-[10px] font-bold">Pilih Gambar</button>
                            <button type="button" onClick={() => setForm({ ...form, isAdvisor: !form.isAdvisor })} className={`px-4 py-1.5 rounded-lg text-[10px] font-bold border ${form.isAdvisor ? 'bg-amber-500 text-white border-amber-500' : 'bg-slate-50'}`}>Pembina</button>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="sm:col-span-2 space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Nama Lengkap</label><input type="text" value={form.nama} onChange={e => setForm({ ...form, nama: e.target.value })} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-bold" required /></div>
                        <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">NIS / NIP</label><input type="text" value={form.nis} onChange={e => setForm({ ...form, nis: e.target.value })} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-bold" required /></div>
                        <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Kelas</label><input type="text" value={form.kelas} onChange={e => setForm({ ...form, kelas: e.target.value })} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-bold" /></div>
                        <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Divisi</label><select value={form.divisi} onChange={e => setForm({ ...form, divisi: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#161d2f] border border-slate-200 text-xs font-bold">{divisions.map(div => <option key={div.id} value={div.nama}>{div.nama}</option>)}</select></div>
                        <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Jabatan</label><select value={form.jabatan} onChange={e => setForm({ ...form, jabatan: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#161d2f] border border-slate-200 text-xs font-bold">{divisions.find(d => d.nama === form.divisi)?.jabatans.map((jab: any) => (<option key={jab.id} value={jab.nama}>{jab.nama}</option>)) || <option value="Anggota">Anggota</option>}</select></div>
                      </div>
                    </div>
                  )}
                  {activeTab === "media" && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">WhatsApp</label><input type="text" value={form.hp} onChange={e => setForm({ ...form, hp: e.target.value })} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 text-sm font-bold" placeholder="08..." /></div>
                        <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label><input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 text-sm font-bold" placeholder="name@email.com" /></div>
                        <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Instagram</label><input type="text" value={form.instagram} onChange={e => setForm({ ...form, instagram: e.target.value })} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 text-sm font-bold" placeholder="@username" /></div>
                        <div className="sm:col-span-2 space-y-2 pt-4"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Status Keaktifan</label><div className="flex gap-2">{['AKTIF', 'NONAKTIF', 'ALUMNI'].map(st => (<button key={st} type="button" onClick={() => setForm({ ...form, status: st as any })} className={`flex-1 py-3 rounded-xl text-[10px] font-bold border uppercase ${form.status === st ? 'bg-slate-900 text-white border-slate-900 shadow-lg' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>{st}</button>))}</div></div>
                      </div>
                    </div>
                  )}
                  {activeTab === "personal" && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Tanggal Lahir</label><input type="date" value={form.tglLahir} onChange={e => setForm({ ...form, tglLahir: e.target.value })} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 text-sm font-bold" /></div>
                        <div className="sm:col-span-2 space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Domisili</label><textarea value={form.domisili} onChange={e => setForm({ ...form, domisili: e.target.value })} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 text-sm font-medium min-h-[80px]" /></div>
                        <div className="sm:col-span-2 space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Motto Hidup</label><input type="text" value={form.motto} onChange={e => setForm({ ...form, motto: e.target.value })} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 text-sm font-bold italic" /></div>
                      </div>
                    </div>
                  )}
                  {activeTab === "visi" && (
                    <div className="space-y-6">
                      <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Visi</label><textarea value={form.visi} onChange={e => setForm({ ...form, visi: e.target.value })} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 text-sm font-medium min-h-[100px]" /></div>
                      <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Misi</label><textarea value={form.misi} onChange={e => setForm({ ...form, misi: e.target.value })} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 text-sm font-medium min-h-[150px]" /></div>
                    </div>
                  )}
                </form>
              </div>
              <div className="p-6 border-t border-slate-50 dark:border-white/5 flex justify-end gap-3">
                <button onClick={() => setIsModalPengurusOpen(false)} className="px-6 py-3 rounded-xl text-xs font-bold text-slate-400 uppercase">Batal</button>
                <button onClick={handleSaveMember} disabled={isSubmitting} className="px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xs font-bold shadow-xl transition-all active:scale-95 flex items-center gap-2 uppercase tracking-widest">{isSubmitting ? <Loader2 className="animate-spin" size={16} /> : <Check size={16} />} Simpan</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalStructureOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalStructureOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 30 }} className="relative w-full max-w-xl bg-white dark:bg-[#0a0f1e] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col max-h-[85vh]">
              <div className="p-6 border-b border-slate-50 dark:border-white/5 flex justify-between items-center bg-white dark:bg-[#0a0f1e]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-xl text-blue-600"><Layers size={20} /></div>
                  <h3 className="font-bold text-sm uppercase tracking-widest">Struktur Organisasi</h3>
                </div>
                <button onClick={() => setIsModalStructureOpen(false)} className="p-2 text-slate-400 hover:text-red-500"><X size={20} /></button>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Daftar Divisi</label>
                  <div className="flex flex-wrap gap-2">
                    {divisions.map(div => (
                      <button key={div.id} onClick={() => { setSelectedDivId(div.id); setDivisiForm({ nama: div.nama, deskripsi: div.deskripsi || "" }); }} className={`px-4 py-2.5 rounded-xl text-[11px] font-bold border ${selectedDivId === div.id ? 'bg-blue-600 text-white' : 'bg-slate-50'}`}>{div.nama}</button>
                    ))}
                    <button onClick={() => { setSelectedDivId(null); setDivisiForm({ nama: "", deskripsi: "" }); }} className="px-4 py-2.5 rounded-xl text-[11px] font-bold border border-dashed">+ Baru</button>
                  </div>
                </div>
                <div className="bg-slate-50/50 p-6 rounded-2xl border space-y-5">
                  <div className="flex justify-between items-center"><span className="text-xs font-bold text-blue-600">{selectedDivId ? 'Edit Divisi' : 'Baru'}</span>{selectedDivId && <button onClick={() => handleDeleteDivisi(selectedDivId)} className="text-red-400"><Trash size={14} /></button>}</div>
                  <input type="text" value={divisiForm.nama} onChange={e => setDivisiForm({ ...divisiForm, nama: e.target.value })} className="w-full p-3 rounded-xl border" placeholder="Nama..." />
                  <button onClick={handleSaveDivisi} className="w-full py-3 bg-blue-600 text-white rounded-xl text-xs font-bold">Simpan</button>
                </div>
                {selectedDivisi && (
                  <div className="space-y-4 pt-4 border-t">
                    <label className="text-[10px] font-bold uppercase">Jabatan di {selectedDivisi.nama}</label>
                    <div className="flex gap-2">
                      <input type="text" placeholder="Baru..." value={jabatanFormName} onChange={e => setJabatanFormName(e.target.value)} className="flex-1 p-2 rounded-lg border text-sm" />
                      <button onClick={handleAddJabatan} className="px-4 bg-slate-900 text-white rounded-lg text-xs font-bold">Tambah</button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedDivisi.jabatans.map((jab: any) => (
                        <div key={jab.id} className="flex items-center justify-between p-2 bg-white border rounded-lg">
                          <span className="text-[10px] font-bold truncate">{jab.nama}</span>
                          <button onClick={() => handleDeleteJabatan(jab.id)} className="text-red-400"><Trash size={12} /></button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
      `}</style>
    </div>
  );
}
