"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Plus, Grid, List, 
  User, Mail, Phone, MapPin, Award, X, Upload, 
  Instagram, Calendar, Heart, Truck, Ruler,
  Edit3, Trash2, CheckCircle, Loader2, Lightbulb
} from "lucide-react";
import TourGuide from "@/components/TourGuide";
import { createPengurus, updatePengurus, deletePengurus } from "@/lib/actions";

const pengurusTourSteps = [
    { target: '.tour-pengurus-header', content: 'Database lengkap anggota OSIS/MPK.', disableBeacon: true },
    { target: '.tour-add-member-btn', content: 'Klik untuk tambah anggota baru.' },
    { target: '.tour-filter-sekbid', content: 'Filter anggota per Divisi/Sekbid.' },
    { target: '.tour-view-toggle', content: 'Ubah tampilan: Grid (Kartu) atau List (Daftar).', },
    { target: '.tour-member-card', content: 'Kartu identitas anggota.', },
    { target: '.tour-card-actions', content: 'Menu Edit atau Hapus anggota.', },
];

export default function PengurusClient({ initialData }: { initialData: any[] }) {
  const [members, setMembers] = useState(initialData);

  useEffect(() => { setMembers(initialData) }, [initialData]);

  const [filterSekbid, setFilterSekbid] = useState("Semua"); 
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); 
  const [isClient, setIsClient] = useState(false);

  // MODAL & FORM STATE
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("profil"); 
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // STATE FORM LENGKAP
  // 🔥 UPDATE: Tambahkan 'visi' dan 'misi'
  const [form, setForm] = useState({
     nama: "", nis: "", kelas: "", jabatan: "Anggota", divisi: "Inti", status: "AKTIF",
     hp: "", email: "", instagram: "", tiktok: "",
     tglLahir: "", domisili: "", transportasi: "Motor Pribadi", motto: "",
     visi: "", misi: "", // ✅ Field Baru
     fotoUrl: ""
  });

  useEffect(() => { setIsClient(true); }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) return alert("File terlalu besar! Max 2MB.");
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, fotoUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const openNewModal = () => {
    setIsEditing(false);
    setEditId(null);
    setForm({
        nama: "", nis: "", kelas: "", jabatan: "Anggota", divisi: "Inti", status: "AKTIF",
        hp: "", email: "", instagram: "", tiktok: "",
        tglLahir: "", domisili: "", transportasi: "Motor Pribadi", motto: "",
        visi: "", misi: "", // ✅ Reset Visi Misi
        fotoUrl: ""
    });
    setIsModalOpen(true);
  };

  const openEditModal = (m: any) => {
    setIsEditing(true);
    setEditId(m.id);
    setForm({
        nama: m.nama, nis: m.nis, kelas: m.kelas, jabatan: m.jabatan, divisi: m.divisi, status: m.status,
        hp: m.hp || "", email: m.email || "", instagram: m.instagram || "", tiktok: m.tiktok || "",
        tglLahir: m.tglLahir || "", domisili: m.domisili || "", transportasi: m.transportasi || "Motor Pribadi", motto: m.motto || "",
        visi: m.visi || "", misi: m.misi || "", // ✅ Load Visi Misi dari DB
        fotoUrl: m.fotoUrl || ""
    });
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if(!form.nama || !form.nis) return alert("Nama dan NIS wajib diisi!");

    setIsSubmitting(true);
    const formData = new FormData();
    
    if (isEditing && editId) formData.append("id", editId.toString());
    Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
    });

    try {
        const result = isEditing ? await updatePengurus(formData) : await createPengurus(formData);
        
        if (result.success) {
            alert(result.message);
            setIsModalOpen(false);
            window.location.reload(); 
        } else {
            alert("Gagal: " + result.message);
        }
    } catch (err) {
        console.error(err);
        alert("Terjadi kesalahan sistem.");
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    if(confirm("Hapus data pengurus ini permanen?")) {
      setMembers(members.filter(m => m.id !== id)); 
      await deletePengurus(id);
    }
  };

  const filteredMembers = members.filter((member) => {
    const matchSekbid = filterSekbid === "Semua" ? true : member.divisi === filterSekbid;
    const matchSearch = member.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        member.jabatan.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSekbid && matchSearch;
  });

  return (
    <div className="relative h-full flex flex-col min-h-screen pb-20">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
        <div>
           <div className="flex items-center gap-4">
               <h1 className="text-3xl font-bold font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-pengurus-header">
                 Data Pengurus <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">👥</span>
               </h1>
               {isClient && <TourGuide steps={pengurusTourSteps} />}
           </div>
           <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">
             Manajemen struktur organisasi dan anggota.
           </p>
        </div>
        
        <button onClick={openNewModal} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-transform active:scale-95 tour-add-member-btn">
           <Plus size={20} /> Tambah Pengurus
        </button>
      </div>

      {/* TOOLBAR */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white/50 dark:bg-white/5 p-2 rounded-2xl border border-slate-200 dark:border-white/5 backdrop-blur-sm">
         <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide tour-filter-sekbid">
            {['Semua', 'Inti', 'Sekbid 1', 'Sekbid 2', 'Sekbid 3', 'Sekbid 4'].map((sekbid) => (
               <button key={sekbid} onClick={() => setFilterSekbid(sekbid)} className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all border ${filterSekbid === sekbid ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-white border-blue-100 dark:border-transparent shadow-sm" : "bg-transparent border-transparent text-slate-500 hover:bg-white/50 dark:hover:bg-white/5"}`}>
                  {sekbid}
               </button>
            ))}
         </div>

         <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex bg-slate-100 dark:bg-black/20 p-1 rounded-lg tour-view-toggle">
               <button onClick={() => setViewMode("grid")} className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-white' : 'text-slate-400'}`}><Grid size={16} /></button>
               <button onClick={() => setViewMode("list")} className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-white' : 'text-slate-400'}`}><List size={16} /></button>
            </div>
            <div className="relative flex-1 md:w-64 group">
               <input type="text" placeholder="Cari nama / jabatan..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500/50 outline-none text-sm font-medium text-slate-700 dark:text-white shadow-sm"/>
               <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
         </div>
      </div>

      {/* MEMBERS GRID / LIST (TETAP SAMA) */}
      {viewMode === "grid" ? (
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10">
            <AnimatePresence>
               {filteredMembers.map((member, index) => (
                  <motion.div key={member.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className={`group relative bg-white dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/10 rounded-[2rem] p-6 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center text-center overflow-hidden ${index === 0 ? 'tour-member-card' : ''}`}>
                     <div className={`absolute top-0 left-0 w-full h-24 bg-gradient-to-b ${member.divisi === 'Inti' ? 'from-blue-500/20' : 'from-slate-100 dark:from-white/5'} to-transparent z-0`} />
                     <div className="relative z-10 w-24 h-24 rounded-full p-1 bg-white dark:bg-[#0f172a] shadow-md mb-4 group-hover:scale-105 transition-transform">
                        <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-200">
                           <Image src={member.fotoUrl || "https://source.unsplash.com/random/200x200/?student"} alt={member.nama} fill className="object-cover" />
                        </div>
                        <div className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 border-white dark:border-[#0f172a] flex items-center justify-center ${member.status === 'AKTIF' ? 'bg-green-500' : 'bg-slate-400'}`}>
                           {member.status === 'AKTIF' && <CheckCircle size={10} className="text-white" />}
                        </div>
                     </div>
                     <div className="relative z-10 mb-6">
                        <h3 className="text-lg font-black text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">{member.nama}</h3>
                        <div className="flex items-center justify-center gap-2 mb-2">
                           <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${member.divisi === 'Inti' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300' : 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-400'}`}>{member.jabatan}</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center justify-center gap-1"><Award size={12} /> {member.kelas}</p>
                     </div>
                     <div className="relative z-10 w-full mt-auto flex items-center justify-between border-t border-slate-100 dark:border-white/5 pt-4">
                        <div className="flex gap-2">
                           {member.hp && <a href={`https://wa.me/${member.hp}`} target="_blank" className="p-2 rounded-full bg-slate-50 dark:bg-white/5 text-slate-500 hover:bg-green-100 hover:text-green-600 transition-colors"><Phone size={16} /></a>}
                           {member.email && <a href={`mailto:${member.email}`} className="p-2 rounded-full bg-slate-50 dark:bg-white/5 text-slate-500 hover:bg-blue-100 hover:text-blue-600 transition-colors"><Mail size={16} /></a>}
                        </div>
                        <div className={`flex gap-1 ${index === 0 ? 'tour-card-actions' : ''}`}>
                           <button onClick={() => openEditModal(member)} className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"><Edit3 size={16} /></button>
                           <button onClick={() => handleDelete(member.id)} className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"><Trash2 size={16} /></button>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </AnimatePresence>
         </div>
      ) : (
         /* LIST VIEW */
         <div className="space-y-3 pb-10">
            {filteredMembers.map((member) => (
               <motion.div key={member.id} layout className="flex items-center justify-between p-4 bg-white dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/10 rounded-2xl hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                     <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                        <Image src={member.fotoUrl || "https://source.unsplash.com/random/200x200/?student"} alt={member.nama} fill className="object-cover" />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{member.nama}</h4>
                        <div className="flex items-center gap-2 text-xs">
                           <span className="text-blue-600 dark:text-blue-400 font-medium">{member.jabatan}</span>
                           <span className="text-slate-300">•</span>
                           <span className="text-slate-500">{member.kelas}</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${member.status === 'AKTIF' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>{member.status}</span>
                     <button onClick={() => openEditModal(member)} className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><Edit3 size={16}/></button>
                     <button onClick={() => handleDelete(member.id)} className="p-2 text-slate-400 hover:text-red-600 transition-colors"><Trash2 size={16}/></button>
                  </div>
               </motion.div>
            ))}
         </div>
      )}

      {/* MODERN MODAL */}
      <AnimatePresence>
         {isModalOpen && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm"/>
               <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="relative w-full max-w-2xl bg-white dark:bg-[#0f172a] rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10 flex flex-col max-h-[90vh]">
                  
                  <div className="p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center bg-white dark:bg-[#0f172a] z-10">
                     <div>
                        <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                           <User size={24} className="text-blue-500" /> {isEditing ? "Edit Data Pengurus" : "Tambah Pengurus"}
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Lengkapi data anggota secara detail.</p>
                     </div>
                     <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full text-slate-500"><X size={20} /></button>
                  </div>

                  <div className="px-6 pt-4 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 flex gap-6 overflow-x-auto">
                     {[{ id: "profil", label: "Profil & Jabatan", icon: User }, { id: "kontak", label: "Kontak & Sosmed", icon: Instagram }, { id: "personal", label: "Data Personal", icon: Heart }].map((tab) => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`pb-3 text-sm font-bold flex items-center gap-2 transition-all border-b-2 ${activeTab === tab.id ? "border-blue-500 text-blue-600 dark:text-white" : "border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"}`}>
                           <tab.icon size={16} /> {tab.label}
                        </button>
                     ))}
                  </div>
                  
                  <div className="p-8 overflow-y-auto flex-1 bg-white dark:bg-[#0f172a]">
                     
                     {/* TAB PROFIL (Tetap Sama) */}
                     {activeTab === "profil" && (
                        <div className="space-y-6">
                           <div className="flex items-center gap-6">
                              <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-white/5 border-2 border-dashed border-slate-300 dark:border-white/20 flex items-center justify-center text-slate-400 cursor-pointer hover:border-blue-500 hover:text-blue-500 transition-all flex-shrink-0 overflow-hidden relative" onClick={() => fileInputRef.current?.click()}>
                                 {form.fotoUrl ? <Image src={form.fotoUrl} alt="Preview" fill className="object-cover" /> : <Upload size={24} />}
                              </div>
                              <div>
                                 <h4 className="font-bold text-slate-900 dark:text-white mb-1">Foto Profil</h4>
                                 <p className="text-xs text-slate-500 mb-3">Format JPG/PNG. Maks 2MB.</p>
                                 <button onClick={() => fileInputRef.current?.click()} className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-white/10 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">Pilih File</button>
                                 <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                              </div>
                           </div>
                           <div className="grid grid-cols-2 gap-4">
                              <div className="col-span-2">
                                 <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Nama Lengkap *</label>
                                 <input type="text" value={form.nama} onChange={e => setForm({...form, nama: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white" />
                              </div>
                              <div>
                                 <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">NIS / NIP *</label>
                                 <input type="text" value={form.nis} onChange={e => setForm({...form, nis: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white" />
                              </div>
                              <div>
                                 <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Status</label>
                                 <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white">
                                    <option value="AKTIF">Aktif</option><option value="NONAKTIF">Nonaktif</option><option value="ALUMNI">Alumni</option>
                                 </select>
                              </div>
                              <div>
                                 <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Jabatan</label>
                                 <select value={form.jabatan} onChange={e => setForm({...form, jabatan: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white">
                                    <option>Anggota</option><option>Ketua OSIS</option><option>Ketua MPK</option><option>Wakil Ketua OSIS</option><option>Wakil Ketua MPK</option><option>Sekretaris</option><option>Bendahara</option><option>Koordinator</option>
                                 </select>
                              </div>
                              <div>
                                 <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Divisi / Sekbid</label>
                                 <select value={form.divisi} onChange={e => setForm({...form, divisi: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white">
                                    <option>Inti</option><option>Sekbid 1</option><option>Sekbid 2</option><option>Sekbid 3</option><option>Sekbid 4</option><option>MPK (Legislatif)</option>
                                 </select>
                              </div>
                              <div className="col-span-2">
                                 <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Kelas</label>
                                 <input type="text" placeholder="XI RPL 1" value={form.kelas} onChange={e => setForm({...form, kelas: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white" />
                              </div>
                           </div>
                        </div>
                     )}

                     {/* TAB KONTAK (Tetap Sama) */}
                     {activeTab === "kontak" && (
                        <div className="space-y-6">
                           <div className="grid grid-cols-2 gap-4">
                              <div className="col-span-2">
                                 <label className="text-xs font-bold text-slate-500 uppercase mb-1 block flex items-center gap-1"><Phone size={12}/> WhatsApp</label>
                                 <input type="text" value={form.hp} onChange={e => setForm({...form, hp: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white" />
                              </div>
                              <div className="col-span-2">
                                 <label className="text-xs font-bold text-slate-500 uppercase mb-1 block flex items-center gap-1"><Mail size={12}/> Email Pribadi</label>
                                 <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white" />
                              </div>
                              <div className="border-t border-slate-100 dark:border-white/10 col-span-2 my-2"></div>
                              <div>
                                 <label className="text-xs font-bold text-slate-500 uppercase mb-1 block flex items-center gap-1"><Instagram size={12}/> Instagram</label>
                                 <input type="text" value={form.instagram} onChange={e => setForm({...form, instagram: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-pink-500 text-sm font-bold text-slate-900 dark:text-white" />
                              </div>
                              <div>
                                 <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">TikTok</label>
                                 <input type="text" value={form.tiktok} onChange={e => setForm({...form, tiktok: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-black text-sm font-bold text-slate-900 dark:text-white" />
                              </div>
                           </div>
                        </div>
                     )}

                     {/* TAB PERSONAL + VISI MISI */}
                     {activeTab === "personal" && (
                        <div className="space-y-6">
                           <div className="grid grid-cols-2 gap-4">
                              <div className="col-span-2">
                                 <label className="text-xs font-bold text-slate-500 uppercase mb-1 block flex items-center gap-1"><Calendar size={12}/> Tanggal Lahir</label>
                                 <input type="date" value={form.tglLahir} onChange={e => setForm({...form, tglLahir: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white" />
                              </div>
                              <div className="col-span-2">
                                 <label className="text-xs font-bold text-slate-500 uppercase mb-1 block flex items-center gap-1"><MapPin size={12}/> Alamat Lengkap (Domisili)</label>
                                 <textarea value={form.domisili} onChange={e => setForm({...form, domisili: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white min-h-[80px]" />
                              </div>
                              <div>
                                 <label className="text-xs font-bold text-slate-500 uppercase mb-1 block flex items-center gap-1"><Truck size={12}/> Transportasi</label>
                                 <select value={form.transportasi} onChange={e => setForm({...form, transportasi: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white">
                                    <option>Motor Pribadi</option><option>Antar Jemput</option><option>Angkutan Umum</option><option>Jalan Kaki</option>
                                 </select>
                              </div>
                              <div className="col-span-2">
                                 <label className="text-xs font-bold text-slate-500 uppercase mb-1 block flex items-center gap-1"><Lightbulb size={12} className="text-yellow-500"/> Motto Hidup / Quotes</label>
                                 <input type="text" value={form.motto} onChange={e => setForm({...form, motto: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white italic" />
                              </div>
                              
                              {/* 🔥 VISI & MISI SECTION (DITAMBAHKAN) 🔥 */}
                              <div className="col-span-2 border-t border-slate-200 dark:border-white/10 my-2 pt-2">
                                 <h4 className="text-sm font-black text-blue-600 dark:text-blue-400 mb-4">Khusus Ketua / Wakil</h4>
                              </div>

                              <div className="col-span-2">
                                 <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Visi</label>
                                 <textarea placeholder="Contoh: Mewujudkan OSIS yang berintegritas..." value={form.visi} onChange={e => setForm({...form, visi: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white min-h-[60px]" />
                              </div>
                              <div className="col-span-2">
                                 <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Misi</label>
                                 <textarea placeholder="Contoh: 1. Meningkatkan kedisiplinan..." value={form.misi} onChange={e => setForm({...form, misi: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white min-h-[80px]" />
                              </div>
                           </div>
                        </div>
                     )}
                  </div>

                  <div className="p-6 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5 flex justify-end gap-3 z-10">
                     <button onClick={() => setIsModalOpen(false)} disabled={isSubmitting} className="px-6 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">Batal</button>
                     <button onClick={handleSave} disabled={isSubmitting} className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-lg shadow-blue-500/30 transition-transform active:scale-95 flex items-center gap-2">
                        {isSubmitting && <Loader2 className="animate-spin" size={16}/>}
                        {isSubmitting ? "Menyimpan..." : "Simpan Data"}
                     </button>
                  </div>
               </motion.div>
            </div>
         )}
      </AnimatePresence>
    </div>
  );
}