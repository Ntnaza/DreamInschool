"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

export default function DetailBeritaClient({ post }: { post: any }) {
  const { scrollYProgress } = useScroll();

  return (
    <main className="min-h-screen bg-white dark:bg-[#020617] transition-colors duration-500 pt-24 pb-24">
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[9999] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <article className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* Breadcrumb */}
        <Link 
          href="/berita" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 mb-8 transition-colors"
        >
          ← Kembali ke Berita
        </Link>

        {/* HEADER ARTIKEL */}
        <div className="mb-10 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
             <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider rounded-full">
               {post.kategori}
             </span>
             <span className="text-slate-400 text-sm font-medium">
               {new Date(post.createdAt).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
             </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
            {post.judul}
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-3">
             <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-lg">
               ✍️
             </div>
             <div className="text-left">
                <p className="text-sm font-bold text-slate-900 dark:text-white">{post.penulis}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Penulis / Kontributor</p>
             </div>
          </div>
        </div>

        {/* HERO IMAGE (NATURAL SIZE) */}
        
        <div className="w-full mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10">
           <Image 
             src={post.image || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop"} 
             alt={post.judul} 
             // 🔥 RAHASIANYA DISINI:
             width={0}
             height={0}
             sizes="100vw"
             className="w-full h-auto" // Gambar akan memanjang ke bawah sepuasnya
             priority
           />
        </div>

        {/* CONTENT BODY */}
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed">
           <div dangerouslySetInnerHTML={{ __html: post.konten }} />
        </div>

        {/* SHARE / TAGS */}
        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex gap-2">
             <span className="text-sm font-bold text-slate-500">Tags:</span>
             <span className="text-sm text-blue-600 cursor-pointer hover:underline">#{post.kategori.replace(/\s+/g, '')}</span>
             <span className="text-sm text-blue-600 cursor-pointer hover:underline">#SMKNurulIslam</span>
           </div>
           
           <div className="flex gap-4">
             <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors">
                 Share Facebook
             </button>
             <button className="px-4 py-2 rounded-full bg-sky-500 text-white text-sm font-bold hover:bg-sky-600 transition-colors">
                 Share Twitter
             </button>
           </div>
        </div>

      </article>
    </main>
  );
}