"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, Edit3, Trash2, Eye, Calendar, X, UploadCloud, 
  Image as ImageIcon, RefreshCw, Upload, Maximize2
} from "lucide-react";
import { createBerita, deleteBerita, updateBerita } from "@/lib/actions";

export default function BeritaClient({ initialPosts }: { initialPosts: any[] }) {
  const [posts, setPosts] = useState(initialPosts);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingPost, setEditingPost] = useState<any | null>(null);
  
  // STATE PREVIEW GAMBAR
  const [previewImage, setPreviewImage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDelete = async (id: number) => {
    if(confirm("Hapus berita ini permanen?")) {
      setPosts(posts.filter(p => p.id !== id));
      await deleteBerita(id);
    }
  };

  const openEditor = (post?: any) => {
    if (post) {
      setEditingPost(post);
      setPreviewImage(post.gambar || "");
    } else {
      setEditingPost(null);
      setPreviewImage("");
    }
    setIsEditorOpen(true);
  };

  // FUNGSI: Handle Upload Gambar Lokal
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validasi Ukuran: Max 4MB biar server kuat
      if (file.size > 4 * 1024 * 1024) {
        alert("File terlalu besar! Maksimal 4MB ya Koh.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRandomImage = () => {
    const randomUrl = `https://source.unsplash.com/random/1200x800/?school,student&t=${Date.now()}`;
    setPreviewImage(randomUrl);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    
    // Pastikan gambar masuk ke data yang dikirim
    if (previewImage) formData.set("gambar", previewImage);

    try {
      let result;
      
      if (editingPost) {
        formData.append("id", editingPost.id);
        result = await updateBerita(formData);
      } else {
        result = await createBerita(formData);
      }

      // Cek respon server
      if (result.success) {
        alert(result.message); // "Berhasil!"
        setIsEditorOpen(false);
        window.location.reload();
      } else {
        alert("GAGAL: " + result.message); 
      }

    } catch (error) {
      alert("Terjadi kesalahan. Cek ukuran gambar atau koneksi database.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen font-sans pb-20">
      
      {/* HEADER DASHBOARD */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
        <div>
           <h1 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
             Kelola Berita <span className="text-2xl p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">📰</span>
           </h1>
           <p className="text-slate-500 mt-1">Dapur redaksi OSIS & MPK.</p>
        </div>
        <button 
          onClick={() => openEditor()} 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-transform active:scale-95"
        >
           <Plus size={20} /> Tulis Berita
        </button>
      </div>

      {/* LIST BERITA */}
      <div className="grid grid-cols-1 gap-4">
         <AnimatePresence>
            {posts.map((post) => (
               <motion.div
                 key={post.id}
                 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                 className="group flex flex-col md:flex-row items-center gap-6 p-4 bg-white dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/10 rounded-3xl hover:border-blue-400 transition-all"
               >
                  <div className="relative w-full md:w-48 h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-200">
                     <Image src={post.gambar || "https://source.unsplash.com/random"} alt={post.judul} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 w-full text-center md:text-left">
                     <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                       <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md">
                          {post.kategori}
                       </span>
                       <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${post.status === 'PUBLISHED' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {post.status}
                       </span>
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">{post.judul}</h3>
                     <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><Calendar size={12}/> {new Date(post.createdAt).toLocaleDateString("id-ID")}</span>
                        <span className="flex items-center gap-1"><Eye size={12}/> {post.views} Views</span>
                     </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => openEditor(post)} className="p-3 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-xl transition-colors"><Edit3 size={18} /></button>
                    <button onClick={() => handleDelete(post.id)} className="p-3 bg-slate-100 hover:bg-red-600 hover:text-white rounded-xl transition-colors"><Trash2 size={18} /></button>
                  </div>
               </motion.div>
            ))}
         </AnimatePresence>
      </div>

      {/* === EDITOR FULL SCREEN (YANG SUDAH DILEBARKAN) === */}
      <AnimatePresence>
         {isEditorOpen && (
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
               transition={{ type: "spring", duration: 0.3 }}
               className="fixed inset-0 z-[100] bg-white dark:bg-[#020617] flex flex-col"
            >
               {/* PERBAIKAN: Hapus max-w-4xl di sini supaya LEBAR */}
               <form onSubmit={handleSubmit} className="flex flex-col h-full w-full bg-white dark:bg-[#0a0f1e]">
                   
                   {/* NAVIGASI ATAS */}
                   <div className="h-16 px-4 md:px-8 border-b border-slate-200 dark:border-white/10 flex items-center justify-between bg-white dark:bg-[#0a0f1e] sticky top-0 z-50">
                      <div className="flex items-center gap-4">
                         <button type="button" onClick={() => setIsEditorOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors">
                            <X size={24} className="text-slate-500" />
                         </button>
                         <span className="text-sm font-bold text-slate-400 uppercase tracking-widest hidden md:block">
                            {editingPost ? "Edit Mode" : "Editor Berita"}
                         </span>
                      </div>
                      <button disabled={isSubmitting} className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
                         {isSubmitting ? <RefreshCw className="animate-spin" size={18}/> : <UploadCloud size={18} />}
                         {isSubmitting ? "Publishing..." : "Publish Berita"}
                      </button>
                   </div>

                   {/* KANVAS EDITOR (LEBAR & LEGA) */}
                   <div className="flex-1 overflow-y-auto bg-[#FAFAFA] dark:bg-[#020617]">
                      {/* PERBAIKAN: Gunakan max-w-5xl atau max-w-7xl biar seperti kertas A4 Lebar */}
                      <div className="max-w-5xl mx-auto min-h-full bg-white dark:bg-[#0a0f1e] shadow-lg border-x border-slate-100 dark:border-white/5 p-8 md:p-16 space-y-10">
                          
                          {/* 1. COVER IMAGE */}
                          <div className="group relative w-full h-[400px] bg-slate-100 dark:bg-white/5 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden transition-all hover:border-blue-400">
                              {previewImage ? (
                                 <Image src={previewImage} alt="Cover" fill className="object-cover" />
                              ) : (
                                 <div 
                                   onClick={() => fileInputRef.current?.click()}
                                   className="flex flex-col items-center justify-center h-full text-slate-400 cursor-pointer hover:text-blue-500 transition-colors"
                                 >
                                    <ImageIcon size={64} className="mb-4 opacity-30" />
                                    <span className="text-xl font-bold">Tambahkan Cover Berita</span>
                                    <span className="text-sm opacity-60">Format JPG/PNG, Max 4MB</span>
                                 </div>
                              )}
                              
                              {/* TOMBOL GANTI */}
                              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <button type="button" onClick={() => fileInputRef.current?.click()} className="px-4 py-2 bg-white/90 backdrop-blur text-slate-900 rounded-lg text-xs font-bold shadow-lg hover:bg-white flex items-center gap-2">
                                     <Upload size={14}/> Upload
                                  </button>
                                  <button type="button" onClick={handleRandomImage} className="px-4 py-2 bg-black/50 backdrop-blur text-white rounded-lg text-xs font-bold shadow-lg hover:bg-black/70 flex items-center gap-2">
                                     <RefreshCw size={14}/> Random
                                  </button>
                              </div>
                              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                              <input type="hidden" name="gambar" value={previewImage} />
                          </div>

                          {/* 2. JUDUL (BESAR & TEGAS) */}
                          <input 
                             name="judul"
                             defaultValue={editingPost?.judul}
                             type="text" 
                             placeholder="Judul Berita..." 
                             className="w-full bg-transparent text-5xl md:text-6xl font-black text-slate-900 dark:text-white outline-none placeholder:text-slate-200 dark:placeholder:text-slate-800 leading-[1.1]"
                             required
                             autoComplete="off"
                          />

                          {/* 3. META INFO */}
                          <div className="flex items-center gap-4 py-4 border-y border-slate-100 dark:border-white/5">
                             <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">A</div>
                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Admin OSIS</span>
                             </div>
                             <span className="text-slate-300">|</span>
                             <select name="kategori" defaultValue={editingPost?.kategori || "Umum"} className="bg-transparent text-sm font-bold text-slate-600 dark:text-slate-400 outline-none cursor-pointer hover:text-blue-600">
                                <option value="Umum">Umum</option>
                                <option value="Prestasi">Prestasi</option>
                                <option value="Event">Event</option>
                                <option value="Akademik">Akademik</option>
                             </select>
                          </div>

                          {/* 4. KONTEN (SERIF & NYAMAN DIBACA) */}
                          <textarea 
                             name="konten"
                             defaultValue={editingPost?.konten}
                             className="w-full min-h-[600px] text-xl text-slate-700 dark:text-slate-300 outline-none bg-transparent resize-none leading-loose font-serif placeholder:text-slate-300/50" 
                             placeholder="Mulai menulis cerita..."
                             required
                          />
                      </div>
                   </div>
               </form>
            </motion.div>
         )}
      </AnimatePresence>

    </div>
  );
}