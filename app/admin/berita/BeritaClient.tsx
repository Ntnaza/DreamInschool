"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, Edit3, Trash2, Eye, Calendar, X, UploadCloud, 
  Image as ImageIcon, RefreshCw, Upload, ChevronLeft,
  Settings2, Layout, FileText, CheckCircle2, AlertCircle,
  MoreVertical, Search, Filter, ArrowRight, ChevronDown, Check,
  PenTool, Save, Globe, Type
} from "lucide-react";
import { createBerita, deleteBerita, updateBerita } from "@/lib/actions";
import TourGuide from "@/components/TourGuide";

const beritaTourSteps = [
    { target: '.tour-berita-header', content: 'Manajemen seluruh artikel dan berita organisasi di sini.', disableBeacon: true },
    { target: '.tour-write-btn', content: 'Klik di sini untuk mulai menulis artikel berita baru.', disableBeacon: true },
    { target: '.tour-search-bar', content: 'Cari berita dengan cepat berdasarkan judul atau kategori.', disableBeacon: true },
    { target: '.tour-filter-btn', content: 'Saring daftar berita berdasarkan kategori atau status publikasi.', disableBeacon: true },
    { target: '.tour-berita-card', content: 'Kelola (Edit/Hapus) artikel Anda melalui tombol hover di atas gambar.', disableBeacon: true },
];

export default function BeritaClient({ initialPosts }: { initialPosts: any[] }) {
  const [posts, setPosts] = useState(initialPosts);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingPost, setEditingPost] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("PUBLISHED");
  const [isClient, setIsClient] = useState(false);
  
  // STATE FILTER
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeStatus, setActiveStatus] = useState("Semua");
  
  const [previewImage, setPreviewImage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.kategori.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "Semua" || post.kategori === activeCategory;
    const matchesStatus = activeStatus === "Semua" || post.status === activeStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const categories = ["Semua", "Umum", "Prestasi", "Event", "Akademik"];
  const statuses = ["Semua", "PUBLISHED", "DRAFT"];

  const handleDelete = async (id: number) => {
    if(confirm("Hapus berita ini secara permanen?")) {
      const originalPosts = [...posts];
      setPosts(posts.filter(p => p.id !== id));
      try {
        const res = await deleteBerita(id);
        if (!res.success) {
           setPosts(originalPosts);
           alert("Gagal menghapus berita.");
        }
      } catch (err) {
        setPosts(originalPosts);
      }
    }
  };

  const openEditor = (post?: any) => {
    if (post) {
      setEditingPost(post);
      setPreviewImage(post.gambar || "");
      setSelectedStatus(post.status || "PUBLISHED");
    } else {
      setEditingPost(null);
      setPreviewImage("");
      setSelectedStatus("PUBLISHED");
    }
    setIsEditorOpen(true);
  };

  const closeEditor = () => {
    setIsEditorOpen(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        alert("File terlalu besar! Maksimal 4MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleRandomImage = () => {
    const randomUrl = `https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200&t=${Date.now()}`;
    setPreviewImage(randomUrl);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    if (previewImage) formData.set("gambar", previewImage);
    formData.set("status", selectedStatus);

    try {
      let result;
      if (editingPost) {
        formData.append("id", editingPost.id.toString());
        result = await updateBerita(formData);
      } else {
        result = await createBerita(formData);
      }

      if (result.success) {
        closeEditor();
        window.location.reload();
      } else {
        alert("Error: " + result.message); 
      }
    } catch (error) {
      alert("Terjadi kesalahan sistem.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative h-full flex flex-col font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30 overflow-hidden">
      
      <AnimatePresence mode="wait">
        {!isEditorOpen ? (
          <motion.div 
            key="list-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col h-[calc(100vh-140px)]"
          >
            {/* --- HEADER --- */}
            <div className="flex-shrink-0">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
                  <div>
                     <div className="flex items-center gap-4 mb-1">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-berita-header">
                          Manajemen Berita <span className="text-2xl p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">📰</span>
                        </h1>
                        {isClient && <TourGuide steps={beritaTourSteps} />}
                     </div>
                     <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Kelola narasi dan informasi seputar OSIS & MPK.</p>
                  </div>
                  <button 
                    onClick={() => openEditor()} 
                    className="tour-write-btn px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-transform active:scale-95"
                  >
                     <Plus size={20} /> Tulis Berita
                  </button>
                </div>

                {/* --- TOOLBAR & SEARCH (BORDERLESS) --- */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                  <div className="tour-search-bar relative flex-1 group w-full">
                    <input 
                      type="text" 
                      placeholder="Cari berita berdasarkan judul, kategori, atau status..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500/50 outline-none text-sm font-medium text-slate-700 dark:text-white shadow-sm transition-all"
                    />
                    <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  
                  <div className="relative flex gap-2 w-full md:w-auto">
                    <button 
                      onClick={() => setIsFilterOpen(!isFilterOpen)}
                      className={`tour-filter-btn flex-1 md:flex-none px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all shadow-sm border ${isFilterOpen || activeCategory !== "Semua" || activeStatus !== "Semua" ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-50'}`}
                    >
                      <Filter size={14} /> 
                      {activeCategory !== "Semua" || activeStatus !== "Semua" ? "Filter Aktif" : "Filter"}
                    </button>

                    <AnimatePresence>
                      {isFilterOpen && (
                        <>
                          <div className="fixed inset-0 z-[40]" onClick={() => setIsFilterOpen(false)} />
                          <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute right-0 top-full mt-2 z-[50] w-64 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl p-4 space-y-4"
                          >
                            {/* Filter Kategori */}
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Kategori</label>
                              <div className="flex flex-wrap gap-1.5">
                                {categories.map(cat => (
                                  <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200'}`}
                                  >
                                    {cat}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Filter Status */}
                            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Status</label>
                              <div className="flex flex-wrap gap-1.5">
                                {statuses.map(st => (
                                  <button
                                    key={st}
                                    onClick={() => setActiveStatus(st)}
                                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${activeStatus === st ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200'}`}
                                  >
                                    {st}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Reset Button */}
                            {(activeCategory !== "Semua" || activeStatus !== "Semua") && (
                              <button 
                                onClick={() => { setActiveCategory("Semua"); setActiveStatus("Semua"); }}
                                className="w-full py-2 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-[10px] font-bold rounded-xl hover:bg-red-600 hover:text-white transition-all mt-2"
                              >
                                Atur Ulang Filter
                              </button>
                            )}
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
            </div>

            {/* --- GRID BERITA --- */}
            <div className="flex-1 overflow-y-auto pb-20 custom-scrollbar pr-2">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <AnimatePresence mode="popLayout">
                      {filteredPosts.map((post, idx) => (
                        <motion.div
                          key={post.id}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.03 }}
                          className={`group relative bg-white dark:bg-[#1e293b] rounded-2xl border border-slate-100 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${idx === 0 ? 'tour-berita-card' : ''}`}
                        >
                            <div className="aspect-[4/3] relative bg-slate-100 dark:bg-slate-800 overflow-hidden">
                              <Image src={post.gambar || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"} alt={post.judul} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                 <div className="flex justify-end gap-2">
                                      <button onClick={() => openEditor(post)} className="p-2 bg-white text-slate-900 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-all transform hover:scale-110"><Edit3 size={16}/></button>
                                      <button onClick={() => handleDelete(post.id)} className="p-2 bg-white text-red-600 rounded-lg shadow-lg hover:bg-red-600 hover:text-white transition-all transform hover:scale-110"><Trash2 size={16}/></button>
                                 </div>
                              </div>
                              <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-md text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-wider shadow-sm border border-black/5 dark:border-white/5">{post.kategori}</div>
                              <div className="absolute top-3 right-3">
                                 <div className={`px-2 py-1 rounded-md text-[9px] font-bold flex items-center gap-1.5 shadow-sm border ${post.status === 'PUBLISHED' ? 'bg-emerald-500 text-white border-emerald-400' : 'bg-amber-500 text-white border-amber-400'}`}>
                                    <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
                                    {post.status}
                                 </div>
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="font-bold text-slate-800 dark:text-white mb-2 line-clamp-2 min-h-[2.5rem] leading-snug group-hover:text-blue-600 transition-colors">{post.judul}</h3>
                              <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-500 font-medium">
                                 <div className="flex items-center gap-1.5"><Calendar size={12}/> {new Date(post.createdAt).toLocaleDateString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                                 <div className="flex items-center gap-1.5"><Eye size={12}/> {post.views} Views</div>
                              </div>
                              <p className="text-[11px] text-slate-500 mt-3 line-clamp-2 opacity-80 leading-relaxed font-sans">{post.konten.replace(/<[^>]*>?/gm, '').substring(0, 100)}...</p>
                            </div>
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-24 bg-white dark:bg-slate-900/20 border border-dashed border-slate-200 dark:border-white/10 rounded-2xl text-center">
                   <FileText size={48} className="text-slate-200 dark:text-slate-800 mb-4" />
                   <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">Tidak ada hasil ditemukan</h3>
                   <p className="text-sm text-slate-500 mt-1 font-sans">Coba kata kunci lain atau buat artikel baru.</p>
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="editor-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-[calc(100vh-140px)] bg-transparent"
          >
             <form onSubmit={handleSubmit} className="flex flex-col h-full w-full">
                {/* --- TOP BAR --- */}
                <div className="h-16 px-2 pb-6 flex items-center justify-between bg-transparent">
                   <div className="flex items-center gap-4">
                      <button type="button" onClick={closeEditor} className="p-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl transition-all text-slate-500 hover:text-blue-600 shadow-sm active:scale-95">
                         <ChevronLeft size={20} />
                      </button>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase font-sans">Mode Redaksi</span>
                         <span className="text-sm font-bold text-slate-900 dark:text-white font-sans">
                            {editingPost ? "Perbarui Artikel" : "Tulis Artikel Baru"}
                         </span>
                      </div>
                   </div>

                   <div className="flex items-center gap-3">
                      <button disabled={isSubmitting} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 active:scale-95 disabled:opacity-50 font-sans">
                         {isSubmitting ? <RefreshCw className="animate-spin" size={14} /> : <Save size={14} />}
                         {isSubmitting ? "Menyimpan..." : editingPost ? "Update Berita" : "Terbitkan Berita"}
                      </button>
                   </div>
                </div>

                <div className="flex-1 flex flex-col lg:flex-row overflow-hidden gap-6">
                   {/* --- CLEAN WRITING CANVAS --- */}
                   <div className="flex-1 overflow-y-auto custom-scrollbar bg-white dark:bg-[#0a0f1e] rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm p-6 md:p-12 lg:p-16">
                      <div className="max-w-3xl mx-auto space-y-10">
                         
                         {/* Header Input */}
                         <div className="space-y-4">
                            <textarea 
                               name="judul" 
                               defaultValue={editingPost?.judul} 
                               rows={1}
                               onInput={(e) => {
                                  e.currentTarget.style.height = 'auto';
                                  e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                               }}
                               placeholder="Berikan judul yang kuat..." 
                               className="w-full bg-transparent text-3xl md:text-5xl font-bold text-slate-900 dark:text-white outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600 border-none focus:ring-0 px-0 transition-all resize-none leading-tight font-sans" 
                               required 
                               autoFocus 
                            />
                            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest font-sans">
                               <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-md"><Globe size={12}/> Publik</div>
                               <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-md"><Type size={12}/> Focus Mode Active</div>
                            </div>
                         </div>

                         <div className="h-px w-full bg-slate-100 dark:bg-white/10" />

                         {/* Content Input */}
                         <textarea 
                            name="konten" 
                            defaultValue={editingPost?.konten} 
                            className="w-full min-h-[500px] text-lg text-slate-700 dark:text-slate-300 outline-none bg-transparent resize-none leading-relaxed font-sans placeholder:text-slate-400 dark:placeholder:text-slate-600 border-none focus:ring-0" 
                            placeholder="Tuliskan isi berita di sini secara mendalam..." 
                            required 
                         />
                      </div>
                   </div>

                   {/* --- CLEAN SIDEBAR --- */}
                   <div className="w-full lg:w-80 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
                      
                      {/* Configuration Card */}
                      <div className="bg-white dark:bg-[#0a0f1e] rounded-3xl border border-slate-100 dark:border-white/5 p-6 space-y-8 shadow-sm">
                         <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider font-sans">
                            <Settings2 size={16} className="text-blue-500" />
                            <span>Pengaturan Berita</span>
                         </div>

                         {/* Status Selector */}
                         <div className="space-y-3">
                            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-sans">Status Publikasi</label>
                            <div className="relative">
                               <button type="button" onClick={() => setIsStatusOpen(!isStatusOpen)} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[11px] font-bold border transition-all font-sans ${selectedStatus === 'PUBLISHED' ? 'bg-emerald-50/50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20' : 'bg-amber-50/50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20'}`}>
                                  <div className="flex items-center gap-2">
                                     <div className={`w-1.5 h-1.5 rounded-full ${selectedStatus === 'PUBLISHED' ? 'bg-emerald-600' : 'bg-amber-600'}`} />
                                     {selectedStatus}
                                  </div>
                                  <ChevronDown size={14} className={`transition-transform duration-300 ${isStatusOpen ? 'rotate-180' : ''}`} />
                               </button>
                               <AnimatePresence>
                                  {isStatusOpen && (
                                     <>
                                        <div className="fixed inset-0 z-[120]" onClick={() => setIsStatusOpen(false)} />
                                        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute top-full left-0 right-0 mt-2 z-[130] bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/10 rounded-xl shadow-xl overflow-hidden p-1">
                                           {["PUBLISHED", "DRAFT"].map((status) => (
                                              <button key={status} type="button" onClick={() => { setSelectedStatus(status); setIsStatusOpen(false); }} className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[11px] font-bold transition-all font-sans ${selectedStatus === status ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'}`}>
                                                 {status}
                                                 {selectedStatus === status && <Check size={12} />}
                                              </button>
                                           ))}
                                        </motion.div>
                                     </>
                                  )}
                               </AnimatePresence>
                            </div>
                         </div>

                         {/* Kategori Selector */}
                         <div className="space-y-3">
                            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-sans">Pilih Kategori</label>
                            <select name="kategori" defaultValue={editingPost?.kategori || "Umum"} className="w-full bg-slate-50 dark:bg-[#161d2f] border border-slate-100 dark:border-white/10 px-4 py-3 rounded-xl text-[11px] font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/20 transition-all font-sans cursor-pointer">
                               <option value="Umum">Umum</option>
                               <option value="Prestasi">Prestasi</option>
                               <option value="Event">Event</option>
                               <option value="Akademik">Akademik</option>
                            </select>
                         </div>

                         {/* Thumbnail Area */}
                         <div className="space-y-3">
                            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-sans">Gambar Unggulan</label>
                            <div className="group relative aspect-video bg-slate-50 dark:bg-[#161d2f] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-inner">
                                {previewImage ? (
                                   <>
                                     <Image src={previewImage} alt="Cover" fill className="object-cover" />
                                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                         <button type="button" onClick={() => fileInputRef.current?.click()} className="p-2 bg-white text-slate-900 rounded-lg shadow-sm hover:scale-110 transition-transform"><Upload size={16} /></button>
                                         <button type="button" onClick={() => setPreviewImage("")} className="p-2 bg-red-600 text-white rounded-lg shadow-sm hover:scale-110 transition-transform"><Trash2 size={16} /></button>
                                     </div>
                                   </>
                                ) : (
                                   <div onClick={() => fileInputRef.current?.click()} className="flex flex-col items-center justify-center h-full text-slate-400 dark:text-slate-500 cursor-pointer hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
                                      <ImageIcon size={24} className="mb-2 opacity-40 text-blue-500" />
                                      <span className="text-[9px] font-bold tracking-wider">PILIH GAMBAR</span>
                                   </div>
                                )}
                                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                            </div>
                            <button type="button" onClick={handleRandomImage} className="w-full py-2.5 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 rounded-xl text-[9px] font-bold border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2 font-sans shadow-sm">
                               <RefreshCw size={12} /> Gunakan Gambar Acak
                            </button>
                         </div>
                      </div>

                      {/* Info Tips Card */}
                      <div className="bg-blue-600 text-white rounded-3xl p-6 space-y-4 shadow-xl shadow-blue-600/20">
                         <div className="flex items-center gap-2 font-bold text-[10px] tracking-widest uppercase font-sans">
                            <AlertCircle size={14} className="text-blue-200" />
                            <span>Editorial Tip</span>
                         </div>
                         <p className="text-[11px] text-blue-50 text-pretty leading-relaxed font-sans">
                            Gunakan gambar dengan kualitas HD untuk hasil thumbnail yang lebih profesional di halaman depan.
                         </p>
                      </div>
                   </div>
                </div>
             </form>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; }
      `}</style>

    </div>
  );
}
