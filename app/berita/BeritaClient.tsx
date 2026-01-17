"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Terima data dari Server
export default function BeritaClient({ posts }: { posts: any[] }) {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  // Ambil kategori unik dari data yang ada
  const categories = ["Semua", ...Array.from(new Set(posts.map(p => p.kategori)))];

  // Logic Filter & Search
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "Semua" || post.kategori === activeCategory;
    const matchesSearch = post.judul.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pisahkan Headline (Berita Terbaru yang jadi Headline)
  // Logic: Postingan terbaru dianggap headline jika tidak sedang search
  const showHeadline = activeCategory === "Semua" && searchQuery === "";
  const featuredPost = showHeadline ? filteredPosts[0] : null; // Ambil yang paling baru
  const regularPosts = showHeadline ? filteredPosts.slice(1) : filteredPosts; // Sisanya

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-500 pt-24 pb-24">
      
      {/* Background Decor */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.10] pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-white/10 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest border border-blue-200 dark:border-white/10">
            Mading Digital 📰
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6 pb-2 text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-300 dark:to-slate-500">
            Berita & Artikel
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Informasi terkini, prestasi, dan cerita inspiratif dari warga sekolah.
          </p>
        </div>

        {/* === SEARCH & FILTER BAR === */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 sticky top-20 z-30 bg-slate-50/80 dark:bg-[#020617]/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
          
          {/* Kategori */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat: any) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Cari berita..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white text-sm"
            />
            <svg className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
        </div>

        {/* === FEATURED POST (HEADLINE) === */}
        {showHeadline && featuredPost && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            {/* Hapus 'h-...' dan biarkan grid mengatur tinggi */}
            <div className="group relative rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 shadow-2xl items-center">
              
              {/* Image Column */}
              {/* Hapus 'h-64' dan 'overflow-hidden' yang membatasi. Biarkan 'relative' aja */}
              <div className="relative w-full border-b md:border-b-0 md:border-r border-slate-100 dark:border-white/5">
                <Image 
                  src={featuredPost.image} 
                  alt={featuredPost.judul} 
                  // 🔥 RAHASIANYA DISINI:
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-contain" // w-full biar lebar penuh, h-auto biar tinggi ngikutin
                  priority
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg z-10">
                  Headline 🔥
                </div>
              </div>
              
              {/* Content Column */}
              <div className="p-8 md:p-12 flex flex-col justify-center h-full">
                <div className="flex items-center gap-3 mb-4 text-xs font-bold text-slate-400">
                  <span className="text-blue-600 dark:text-blue-400 uppercase">{featuredPost.kategori}</span>
                  <span>•</span>
                  <span>{new Date(featuredPost.createdAt).toLocaleDateString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {featuredPost.judul}
                </h2>
                <div 
                   className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed line-clamp-4" // Naikkan clamp jadi 4 biar pas sama foto tinggi
                   dangerouslySetInnerHTML={{ __html: featuredPost.konten.substring(0, 200) + "..." }} 
                />
                
                <Link href={`/berita/${featuredPost.id}`} className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:gap-4 transition-all">
                  Baca Selengkapnya <span className="text-blue-500">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* === REGULAR POSTS GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {regularPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-[#0f172a] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-lg hover:shadow-2xl"
            >
              <Link href={`/berita/${post.id}`} className="block h-full">
                
                {/* Image - MODE UKURAN ASLI (NATURAL) */}
                {/* Hapus 'h-...' fix height, biarkan dia menyesuaikan gambar */}
                <div className="relative w-full border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-800/50">
                    <Image 
                    src={post.image} 
                    alt={post.judul} 
                    // 🔥 RAHASIANYA DISINI:
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-contain" // Lebar full, tinggi otomatis
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold rounded z-10">
                    {post.kategori}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="flex justify-between items-center mb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        <span>{new Date(post.createdAt).toLocaleDateString("id-ID", { day: 'numeric', month: 'short' })}</span>
                        <span>✍️ {post.penulis}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.judul}
                    </h3>
                    <div 
                       className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3"
                       dangerouslySetInnerHTML={{ __html: post.konten.substring(0, 100) + "..." }}
                    />
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <span className="text-xs font-bold text-blue-500 group-hover:underline cursor-pointer">
                        Baca Artikel ➜
                        </span>
                    </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">Maaf, berita yang dicari tidak ditemukan.</p>
            <button 
              onClick={() => {setSearchQuery(""); setActiveCategory("Semua")}}
              className="mt-4 text-blue-500 font-bold hover:underline"
            >
              Reset Pencarian
            </button>
          </div>
        )}

      </div>
    </main>
  );
}