"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar, Image as ImageIcon } from "lucide-react";

export default function GalleryClient({ items }: { items: any[] }) {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // === LOGIKA MODAL (Sama persis dengan GaleriPublicClient) ===
  const openModal = (item: any) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden"; // Kunci scroll
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto"; // Buka scroll
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

  // Shortcut Keyboard
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
    <section className="py-20 bg-white dark:bg-[#020617] border-t border-slate-100 dark:border-white/5 overflow-hidden transition-colors duration-500">
      
      {/* Header Section */}
      <div className="container mx-auto px-6 mb-10 flex justify-between items-end">
         <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Dokumentasi <span className="text-blue-600">Kegiatan</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Momen-momen seru yang terekam kamera lensa OSIS.
            </p>
         </div>
         <Link href="/galeri" className="hidden md:block text-sm font-bold text-blue-600 hover:underline">
            Lihat Semua Foto →
         </Link>
      </div>

      {/* === ANIMASI MARQUEE === */}
      <div className="relative w-full overflow-hidden group">
         <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white dark:from-[#020617] to-transparent pointer-events-none" />
         <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white dark:from-[#020617] to-transparent pointer-events-none" />

         <div className="flex gap-4 animate-scroll whitespace-nowrap hover:[animation-play-state:paused]">
            {/* Duplikasi array 3x biar looping mulus */}
            {[...items, ...items, ...items].slice(0, 15).map((item, index) => (
               <div 
                 key={index} 
                 onClick={() => openModal(item)} // 🔥 KLIK UNTUK BUKA MODAL MEWAH
                 className="relative w-[280px] h-[180px] md:w-[350px] md:h-[220px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all border border-slate-100 dark:border-white/10 shadow-sm group/item"
               >
                  <Image 
                    src={item.album[0]} // Ambil foto pertama saja untuk cover
                    alt={item.title} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 350px"
                  />
                  {/* Overlay Info Singkat */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 flex flex-col justify-end p-4 transition-opacity duration-300">
                     <span className="text-[10px] font-bold text-white bg-blue-600 px-2 py-0.5 rounded w-fit mb-1">{item.category}</span>
                     <p className="text-white font-bold text-sm truncate">{item.title}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* === MODAL MEWAH (PORTAL) === */}
      {mounted && selectedItem && createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, ease: "linear" }}
              className="fixed inset-0 z-[999999] flex items-center justify-center"
            >
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-xl"
                onClick={closeModal}
              />

              {/* Modal Content */}
              <motion.div 
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative w-full max-w-6xl h-[85vh] flex flex-col md:flex-row bg-white dark:bg-[#1e293b] rounded-3xl overflow-hidden shadow-2xl z-10 mx-4 ring-1 ring-black/5 dark:ring-white/10"
              >
                
                {/* KIRI: IMAGE SLIDER */}
                <div className="relative w-full md:w-3/4 h-[50%] md:h-full bg-white dark:bg-[#1e293b] flex items-center justify-center border-r border-slate-100 dark:border-slate-700/50"> 
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
                        <button onClick={prevImage} className="absolute left-4 z-20 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-white shadow-sm hover:scale-110 transition-all opacity-0 md:opacity-100"><ChevronLeft/></button>
                        <button onClick={nextImage} className="absolute right-4 z-20 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-white shadow-sm hover:scale-110 transition-all opacity-0 md:opacity-100"><ChevronRight/></button>
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white text-xs font-bold shadow-sm tracking-widest">
                          {currentImageIndex + 1} / {selectedItem.album.length}
                        </div>
                      </>
                    )}
                </div>

                {/* KANAN: SIDEBAR INFO */}
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
                                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-blue-600 opacity-100' : 'border-slate-200 dark:border-slate-700 opacity-60 hover:opacity-100'}`}
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

    </section>
  );
}