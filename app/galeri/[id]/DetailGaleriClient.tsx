"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, Maximize2, X, Download } from "lucide-react";

export default function DetailGaleriClient({ item }: { item: any }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // LOCK BODY SCROLL saat foto dibuka
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % item.album.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + item.album.length) % item.album.length);
  };

  const currentImage = selectedIndex !== null ? item.album[selectedIndex] : null;

  return (
    <main className="min-h-screen bg-white dark:bg-[#020617] pt-24 pb-24 transition-colors duration-500 relative">
      {/* Background Subtle Noise */}
      <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.02] dark:opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* TOP NAVIGATION (Back Button) */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            href="/galeri" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-all font-bold text-xs uppercase tracking-widest group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Kembali ke Galeri
          </Link>
        </motion.div>

        {/* PINTEREST-STYLE COMPACT HEADER (LEFT ALIGNED) */}
        <div className="max-w-4xl text-left mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-start gap-3"
          >
            <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[9px] font-bold uppercase tracking-[0.2em] border border-blue-100 dark:border-blue-500/20">
              {item.category}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800" />
            <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              <Calendar size={12} className="opacity-50" />
              {item.date}
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight"
          >
            {item.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-3xl"
          >
            {item.desc || "Dokumentasi visual dari kegiatan organisasi SMK Nurul Islam Cianjur."}
          </motion.p>
        </div>

        {/* IMAGE GALLERY GRID (PINTEREST STYLE: 2 COL MOBILE, 4 COL DESKTOP) */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {item.album.map((img: string, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="relative group rounded-xl md:rounded-2xl overflow-hidden cursor-zoom-in shadow-sm hover:shadow-2xl transition-all duration-700 border border-slate-100 dark:border-white/5 break-inside-avoid"
              onClick={() => setSelectedIndex(idx)}
            >
              <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
                <Image 
                  src={img} 
                  alt={`${item.title} - ${idx + 1}`} 
                  width={1200} 
                  height={1200} 
                  className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  priority={idx < 4}
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER INFO */}
        <div className="mt-32 pt-12 border-t border-slate-100 dark:border-white/5 text-center">
          <p className="text-slate-400 dark:text-slate-600 text-[10px] font-bold uppercase tracking-[0.4em]">Terima kasih telah berkunjung</p>
        </div>
      </div>

      {/* FULLSCREEN VIEWER (PORTAL VERSION) */}
      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence mode="wait">
          {selectedIndex !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999999] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4"
            >
              {/* Overlay Area for closing */}
              <div className="absolute inset-0 z-0 cursor-zoom-out" onClick={() => setSelectedIndex(null)} />
              
              {/* Top Controls Overlay */}
              <div className="absolute top-0 left-0 right-0 p-6 md:p-10 flex justify-between items-center z-20">
                 <button 
                  onClick={() => setSelectedIndex(null)}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10 backdrop-blur-md shadow-2xl"
                 >
                   <X size={24} />
                 </button>

                 <div className="hidden md:block text-white/50 text-[10px] font-bold uppercase tracking-[0.4em]">
                    {selectedIndex + 1} / {item.album.length}
                 </div>

                 <a 
                  href={currentImage!} 
                  download 
                  target="_blank"
                  className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-2xl shadow-blue-600/30 active:scale-95"
                 >
                   <Download size={16} /> Download Photo
                 </a>
              </div>

              {/* NAV BUTTONS */}
              {item.album.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 md:left-10 z-30 w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all border border-white/5 backdrop-blur-sm group"
                  >
                    <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 md:right-10 z-30 w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all border border-white/5 backdrop-blur-sm group"
                  >
                    <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </>
              )}

              <motion.div 
                key={selectedIndex}
                initial={{ scale: 0.9, opacity: 0, x: 20 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                exit={{ scale: 0.9, opacity: 0, x: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full h-full max-w-6xl flex items-center justify-center z-10 pointer-events-none"
              >
                <div className="relative w-full h-[70vh] md:h-full">
                  <Image 
                    src={currentImage!} 
                    alt="Fullview" 
                    fill 
                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </main>
  );
}
