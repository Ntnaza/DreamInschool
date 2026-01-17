"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GaleriPublicClient({ galleryItems }: { galleryItems: any[] }) {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const categories = ["Semua", ...Array.from(new Set(galleryItems.map((item) => item.category)))];

  const filteredImages = activeFilter === "Semua" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === activeFilter);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = (item: any) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden"; 
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto"; 
  };

  const nextImage = (e: any) => {
    e.stopPropagation();
    if (!selectedItem) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedItem.album.length);
  };

  const prevImage = (e: any) => {
    e.stopPropagation();
    if (!selectedItem) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedItem.album.length) % selectedItem.album.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") setCurrentImageIndex((prev) => (prev + 1) % selectedItem.album.length);
      if (e.key === "ArrowLeft") setCurrentImageIndex((prev) => (prev - 1 + selectedItem.album.length) % selectedItem.album.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-500 pt-24 pb-24">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.10] pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-white/10 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest border border-blue-200 dark:border-white/10">
            Arsip Visual 📸
          </span>
          {/* 🔥 FIX: Tambah 'pb-2' dan 'leading-tight' agar huruf 'g' tidak terpotong */}
          <h1 className="text-4xl md:text-6xl font-black text-blue-700 mt-4 mb-4 pb-2 leading-tight dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-300 dark:to-slate-500">
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
                onClick={() => openModal(item)}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl dark:shadow-none transition-all"
              >
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* === PORTAL MODAL === */}
        {mounted && selectedItem && createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              // 🔥 FIX 1: Transisi super cepat & linear biar blur terasa instan
              transition={{ duration: 0.1, ease: "linear" }}
              className="fixed inset-0 z-[999999] flex items-center justify-center"
            >
              {/* Backdrop Blur */}
              <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-xl"
                onClick={closeModal}
              />

              {/* Container Modal */}
              <motion.div 
                initial={{ scale: 0.98, opacity: 0 }} // Scale awal sedikit aja biar gak terlalu "lompat"
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                // Transisi container sedikit lebih lambat dari backdrop biar smooth
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative w-full max-w-6xl h-[85vh] flex flex-col md:flex-row bg-white dark:bg-[#1e293b] rounded-3xl overflow-hidden shadow-2xl z-10 mx-4 ring-1 ring-black/5 dark:ring-white/10"
              >
                
                {/* BAGIAN KIRI: FOTO */}
                {/* 🔥 FIX 2: Background disamakan dengan sidebar (white/dark slate) */}
                <div className="relative w-full md:w-3/4 h-[50%] md:h-full bg-white dark:bg-[#1e293b] flex items-center justify-center group overflow-hidden border-r border-slate-100 dark:border-slate-700/50"> 
                   {/* Noise tipis biar gak terlalu flat */}
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] dark:opacity-[0.05] pointer-events-none" />
                   
                   <div className="relative w-full h-full p-2 md:p-8 flex items-center justify-center z-10">
                     <Image 
                       src={selectedItem.album[currentImageIndex]} 
                       alt="Detail" 
                       fill 
                       className="object-contain drop-shadow-sm"
                       priority
                     />
                   </div>

                   {/* Navigasi Slider */}
                   {selectedItem.album.length > 1 && (
                     <>
                       <button onClick={prevImage} className="absolute left-4 z-20 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-white shadow-sm hover:scale-110 transition-all group-hover:opacity-100 opacity-0 md:opacity-100"><ChevronLeft/></button>
                       <button onClick={nextImage} className="absolute right-4 z-20 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-white shadow-sm hover:scale-110 transition-all group-hover:opacity-100 opacity-0 md:opacity-100"><ChevronRight/></button>
                       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white text-xs font-bold shadow-sm tracking-widest">
                         {currentImageIndex + 1} / {selectedItem.album.length}
                       </div>
                     </>
                   )}
                </div>

                {/* BAGIAN KANAN: INFO SIDEBAR */}
                {/* Background sudah sama dengan container utama */}
                <div className="w-full md:w-1/4 h-[50%] md:h-full bg-white dark:bg-[#1e293b] p-6 md:p-8 flex flex-col relative z-20">
                   <button onClick={closeModal} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 text-slate-500 dark:text-slate-300 flex items-center justify-center transition-all">
                      <X size={18}/>
                   </button>

                   <div className="flex-1 overflow-y-auto mt-4 custom-scrollbar pr-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                        {selectedItem.category}
                      </span>
                      <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 leading-tight">
                        {selectedItem.title}
                      </h2>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-6 border-b border-slate-100 dark:border-slate-700/50 pb-6">
                        📅 {selectedItem.date}
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm whitespace-pre-line">
                        {selectedItem.desc}
                      </p>

                      {/* Mini Thumbnails */}
                      {selectedItem.album.length > 1 && (
                        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Album Preview</p>
                          <div className="grid grid-cols-3 gap-2">
                             {selectedItem.album.map((img: string, idx: number) => (
                               <button 
                                 key={idx}
                                 onClick={() => setCurrentImageIndex(idx)}
                                 className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-blue-600 opacity-100 ring-2 ring-blue-500/20' : 'border-slate-200 dark:border-slate-700 opacity-60 hover:opacity-100'}`}
                               >
                                 <Image src={img} alt="thumb" fill className="object-cover" />
                               </button>
                             ))}
                          </div>
                        </div>
                      )}
                   </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
      </div>
    </main>
  );
}