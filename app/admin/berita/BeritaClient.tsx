"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, Edit3, Trash2, Eye, Calendar, X, RefreshCw, Upload, ChevronLeft,
  Settings2, FileText, Filter, Search, ChevronDown, Check,
  PenTool, Save, Globe, Type, AlertCircle, Image as ImageIcon
} from "lucide-react";
import { createBerita, deleteBerita, updateBerita } from "@/lib/actions";
import { showToast } from "@/components/Toast";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function BeritaClient({ initialPosts, dynamicCategories }: { initialPosts: any[], dynamicCategories: string[] }) {
  const [posts, setPosts] = useState(initialPosts);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const isEditorOpen = searchParams.get("editor") === "true";
  const editId = searchParams.get("id");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingPost, setEditingPost] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("PUBLISHED");
  const [isClient, setIsClient] = useState(false);
  
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [previewImage, setPreviewImage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = ["Semua", ...dynamicCategories];

  // Efek 1: Inisialisasi Data & Skeleton
  useEffect(() => {
    setIsClient(true);
    if (initialPosts) {
      setPosts(initialPosts);
      const timer = setTimeout(() => setIsDataLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [initialPosts]);

  // Efek 2: Handling Modal Edit
  useEffect(() => {
    if (editId && posts.length > 0) {
      const post = posts.find(p => p.id === parseInt(editId));
      if (post) {
        setEditingPost(post);
        setPreviewImage(post.gambar || "");
        setSelectedStatus(post.status || "PUBLISHED");
      }
    } else {
      setEditingPost(null);
      setPreviewImage("");
      setSelectedStatus("PUBLISHED");
    }
  }, [editId, posts]);

  const closeEditor = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("editor");
    params.delete("id");
    router.push(`${pathname}?${params.toString()}`);
  };

  const openEditor = (post?: any) => {
    const params = new URLSearchParams(searchParams);
    params.set("editor", "true");
    if (post) params.set("id", post.id.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.judul.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "Semua" || post.kategori === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = async (id: number) => {
    showConfirm({
      title: "Hapus Berita?",
      message: "Artikel ini akan dihapus secara permanen dari website.",
      confirmText: "Ya, Hapus",
      type: "danger",
      onConfirm: async () => {
        try {
          const res = await deleteBerita(id);
          if (res.success) { 
            showToast("Berita telah dihapus.", "success", "Terhapus"); 
            setTimeout(() => window.location.reload(), 1000); 
          } 
          else { showToast("Gagal menghapus.", "error"); }
        } catch (err) { showToast("Terjadi kesalahan sistem.", "error"); }
      }
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) return showToast("Maksimal 4MB.", "error");
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
    if(isSubmitting) return;
    
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    if (previewImage) formData.set("gambar", previewImage);
    formData.set("status", selectedStatus);

    try {
      const result = editingPost 
        ? (formData.append("id", editingPost.id.toString()), await updateBerita(formData)) 
        : await createBerita(formData);

      if (result.success) {
        showToast(editingPost ? "Artikel diperbarui!" : "Artikel diterbitkan!", "success");
        
        // Tutup editor dan hapus parameter URL dulu
        closeEditor();
        
        // Refresh data dari server tanpa reload seluruh halaman
        router.refresh();

        // Opsional: Jika data tetap tidak update otomatis (tergantung caching server), 
        // gunakan reload manual setelah rute benar-benar pindah.
        // Namun router.refresh biasanya sudah cukup.
      } else {
        showToast(result.message || "Gagal menyimpan berita.", "error"); 
      }
    } catch (error) {
      showToast("Kesalahan sistem saat menyimpan.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30 overflow-hidden">
      <AnimatePresence mode="wait">
        {!isEditorOpen ? (
          <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col h-full">
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 flex-shrink-0">
              <div className="flex gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                  {categories.map((cat) => (
                    <button 
                      key={cat} 
                      onClick={() => setActiveCategory(cat)} 
                      className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${activeCategory === cat ? "bg-slate-900 dark:bg-purple-600 text-white border-slate-900 shadow-md" : "bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/10 text-slate-500 hover:border-slate-300"}`}
                    >
                        {cat}
                    </button>
                  ))}
              </div>
              <div className="relative flex-1 md:w-72 group w-full">
                  <input 
                    type="text" 
                    placeholder="Cari berita..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-purple-500/50 outline-none text-sm font-medium text-slate-700 dark:text-white shadow-sm transition-all"
                  />
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto pb-32 custom-scrollbar pr-2 pt-4">
              {isDataLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 animate-pulse">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="bg-white dark:bg-[#1e293b] rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden h-[380px] flex flex-col">
                      <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800 shrink-0" />
                      <div className="p-4 flex-1 space-y-4">
                        <div className="space-y-2"><div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" /><div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded" /></div>
                        <div className="flex gap-3"><div className="h-3 w-16 bg-slate-100 dark:bg-slate-800/50 rounded" /><div className="h-3 w-16 bg-slate-100 dark:bg-slate-800/50 rounded" /></div>
                        <div className="space-y-2 pt-2"><div className="h-2.5 w-full bg-slate-50 dark:bg-slate-800/30 rounded" /><div className="h-2.5 w-4/5 bg-slate-50 dark:bg-slate-800/30 rounded" /></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
                  {filteredPosts.map((post, idx) => (
                    <div key={post.id} className={`group relative bg-white dark:bg-[#1e293b] rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 h-[380px] flex flex-col overflow-hidden ${idx === 0 ? 'tour-berita-card' : ''}`}>
                        <div className="aspect-[4/3] relative overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                          <Image src={post.gambar || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"} alt={post.judul} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                              <div className="flex justify-end gap-2">
                                  <button onClick={() => openEditor(post)} className="p-2 bg-white text-slate-900 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-all transform hover:scale-110"><Edit3 size={16}/></button>
                                  <button onClick={() => handleDelete(post.id)} className="p-2 bg-white text-red-600 rounded-lg shadow-lg hover:bg-red-600 hover:text-white transition-all transform hover:scale-110"><Trash2 size={16}/></button>
                              </div>
                          </div>
                          <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 dark:bg-slate-900/90 rounded-md text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-wider shadow-sm">{post.kategori}</div>
                          <div className="absolute top-3 right-3">
                             <div className={`px-2 py-1 rounded-md text-[9px] font-bold flex items-center gap-1.5 shadow-sm border ${post.status === 'PUBLISHED' ? 'bg-emerald-500 text-white' : 'bg-amber-50 text-white'}`}><div className="w-1 h-1 rounded-full bg-white animate-pulse" /> {post.status}</div>
                          </div>
                        </div>
                        <div className="p-4 flex-1">
                          <h3 className="font-bold text-slate-800 dark:text-white mb-2 line-clamp-2 min-h-[2.5rem] leading-snug group-hover:text-purple-600 transition-colors">{post.judul}</h3>
                          <div className="flex items-center gap-3 text-[10px] text-slate-500 font-medium mb-3">
                             <div className="flex items-center gap-1.5"><Calendar size={12}/> {new Date(post.createdAt).toLocaleDateString("id-ID")}</div>
                             <div className="flex items-center gap-1.5"><Eye size={12}/> {post.views} Views</div>
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-2 opacity-80 leading-relaxed font-sans">{post.konten.replace(/<[^>]*>?/gm, '').substring(0, 100)}...</p>
                        </div>
                    </div>
                  ))}
                </div>
              ) : <div className="py-24 text-center text-slate-500 font-bold">Tidak ada berita ditemukan.</div>}
            </div>
          </motion.div>
        ) : (
          <motion.div key="editor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col h-full bg-transparent">
             <form onSubmit={handleSubmit} className="flex flex-col h-full w-full">
                <div className="flex-1 flex flex-col lg:flex-row overflow-hidden gap-6">
                   <div className="flex-1 overflow-y-auto custom-scrollbar bg-white dark:bg-[#0a0f1e] rounded-3xl p-6 md:p-12 lg:p-16 border border-slate-100 dark:border-white/5">
                      <div className="max-w-3xl mx-auto space-y-10">
                         <div className="space-y-4">
                            <textarea name="judul" defaultValue={editingPost?.judul} rows={1} onInput={(e) => { e.currentTarget.style.height = 'auto'; e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px'; }} placeholder="Judul Berita..." className="w-full bg-transparent text-3xl md:text-5xl font-bold text-slate-900 dark:text-white outline-none border-none focus:ring-0 px-0 resize-none leading-tight font-sans" required autoFocus />
                            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest font-sans"><div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-md"><Globe size={12}/> Publik</div><div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-md"><Type size={12}/> Focus Mode Active</div></div>
                         </div>
                         <div className="h-px w-full bg-slate-100 dark:bg-white/10" />
                         <textarea name="konten" defaultValue={editingPost?.konten} className="w-full min-h-[500px] text-lg text-slate-700 dark:text-slate-300 outline-none bg-transparent border-none focus:ring-0 resize-none leading-relaxed font-sans" placeholder="Tuliskan isi berita..." required />
                      </div>
                   </div>
                   <div className="w-full lg:w-80 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
                      <div className="bg-white dark:bg-[#0a0f1e] rounded-3xl p-6 space-y-8 border border-slate-100 dark:border-white/5 shadow-sm">
                         <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider font-sans"><Settings2 size={16} className="text-blue-500" /> <span>Pengaturan Berita</span></div>
                         
                         <div className="space-y-3">
                            <label className="text-[10px] font-bold text-slate-500 uppercase">Kategori</label>
                            <select name="kategori" defaultValue={editingPost?.kategori} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 outline-none text-[11px] font-bold dark:text-white focus:border-purple-500">
                                {dynamicCategories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                         </div>

                         <div className="space-y-3">
                            <label className="text-[10px] font-bold text-slate-500 uppercase">Status</label>
                            <div className="relative">
                               <button type="button" onClick={() => setIsStatusOpen(!isStatusOpen)} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[11px] font-bold border transition-all ${selectedStatus === 'PUBLISHED' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                                  <div className="flex items-center gap-2"><div className={`w-1.5 h-1.5 rounded-full ${selectedStatus === 'PUBLISHED' ? 'bg-emerald-600' : 'bg-amber-600'}`} /> {selectedStatus}</div>
                                  <ChevronDown size={14} className={`${isStatusOpen ? 'rotate-180' : ''} transition-transform`} />
                               </button>
                               {isStatusOpen && (
                                 <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/10 rounded-xl shadow-xl z-50 p-1">
                                    {["PUBLISHED", "DRAFT"].map(s => (
                                      <button key={s} type="button" onClick={() => { setSelectedStatus(s); setIsStatusOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold ${selectedStatus === s ? 'bg-blue-600 text-white' : 'hover:bg-slate-50'}`}>{s}</button>
                                    ))}
                                 </div>
                               )}
                            </div>
                         </div>
                         <div className="space-y-3">
                            <label className="text-[10px] font-bold text-slate-500 uppercase">Thumbnail</label>
                            <div onClick={() => fileInputRef.current?.click()} className="aspect-video bg-slate-50 dark:bg-[#161d2f] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden cursor-pointer relative group">
                                {previewImage ? <Image src={previewImage} alt="Thumb" fill className="object-cover" /> : <div className="flex flex-col items-center justify-center h-full text-slate-400 text-[9px]">PILIH GAMBAR</div>}
                                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                            </div>
                            <button type="button" onClick={handleRandomImage} className="w-full py-2 bg-slate-100 dark:bg-white/5 text-slate-600 text-[10px] font-bold rounded-lg border hover:bg-slate-200 transition-all flex items-center justify-center gap-2"><RefreshCw size={12}/> Gambar Acak</button>
                         </div>
                         <button disabled={isSubmitting} type="submit" className="w-full h-12 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] disabled:opacity-50 transition-all">
                            {isSubmitting ? <RefreshCw className="animate-spin" size={16} /> : <Save size={16} />} 
                            <span>{isSubmitting ? "Menyimpan..." : "Simpan Berita"}</span>
                         </button>
                      </div>
                      <div className="bg-blue-600 text-white rounded-3xl p-6 space-y-4 shadow-xl">
                         <div className="flex items-center gap-2 font-bold text-[10px] tracking-widest uppercase"><AlertCircle size={14} className="text-blue-200" /> <span>Editorial Tip</span></div>
                         <p className="text-[11px] text-blue-50 leading-relaxed">Gunakan gambar HD untuk hasil thumbnail yang lebih profesional.</p>
                      </div>
                   </div>
                </div>
             </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
