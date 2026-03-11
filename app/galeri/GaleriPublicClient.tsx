"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Calendar } from "lucide-react";

export default function GaleriPublicClient({ galleryItems }: { galleryItems: any[] }) {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const categories = ["Semua", ...Array.from(new Set(galleryItems.map((item) => item.category)))];

  const filteredImages = activeFilter === "Semua" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-500 pt-24 pb-24">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.10] pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-white/10 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest border border-blue-200 dark:border-white/10">
            Arsip Visual 📸
          </span>
          <h1 className="text-4xl md:text-5xl font-black mt-4 mb-4 pb-2 leading-tight
            text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700
            dark:from-slate-100 dark:via-slate-300 dark:to-slate-500">
            Galeri Kegiatan
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Rekaman jejak langkah, tawa, dan kerja keras kami dalam membangun cerita di SMK Nurul Islam.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat: any) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MASONRY GRID */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 p-2">
          <AnimatePresence>
            {filteredImages.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                key={item.id}
              >
                <Link href={`/galeri/${item.id}`} className="break-inside-avoid relative group block rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl dark:shadow-none transition-all">
                  <div className="relative w-full">
                    <Image src={item.album[0]} alt={item.title} width={500} height={500} className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="inline-block px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded mb-2 w-fit">{item.category}</span>
                      <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-white/70 text-xs flex items-center gap-1"><Calendar size={12}/> {item.date}</p>
                        {item.album.length > 1 && (
                          <span className="text-white/90 text-[10px] font-bold uppercase tracking-wider border border-white/30 px-2 py-0.5 rounded-full backdrop-blur-sm flex items-center gap-1">
                            <ImageIcon size={10}/> +{item.album.length}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}