"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// === DATA GALERI (DENGAN MULTI-FOTO/ALBUM) ===
const galleryItems = [
  { 
    id: 1, 
    title: "Rapat Kerja OSIS", 
    date: "12 Jan 2025", 
    category: "Rapat", 
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    desc: "Pembahasan program kerja satu periode ke depan bersama seluruh pengurus inti dan pembina.",
    album: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
    ]
  },
  { 
    id: 2, 
    title: "Upacara Hari Guru", 
    date: "25 Nov 2024", 
    category: "Upacara", 
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop", 
    desc: "Peringatan Hari Guru Nasional dengan petugas upacara dari Dewan Guru.",
    album: [
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
    ]
  },
  { 
    id: 3, 
    title: "Classmeeting Futsal", 
    date: "15 Des 2024", 
    category: "Event", 
    src: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=800&auto=format&fit=crop",
    desc: "Pertandingan persahabatan antar kelas untuk mempererat solidaritas siswa.",
    album: [
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518091043069-c6128cc192b5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop"
    ]
  },
  { 
    id: 4, 
    title: "Pentas Seni", 
    date: "10 Nov 2024", 
    category: "Pensi", 
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
    desc: "Ajang unjuk bakat siswa-siswi SMK Nurul Islam dalam bidang seni musik dan tari.",
    album: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800&auto=format&fit=crop"
    ]
  },
  { id: 5, title: "Pembacaan Puisi", date: "28 Okt 2024", category: "Pensi", src: "https://images.unsplash.com/photo-1485178075098-4a507307ac62?q=80&w=600&auto=format&fit=crop", desc: "Lomba baca puisi memperingati Bulan Bahasa.", album: ["https://images.unsplash.com/photo-1485178075098-4a507307ac62?q=80&w=600&auto=format&fit=crop"] },
  { id: 6, title: "Bakti Sosial", date: "05 Okt 2024", category: "Sosial", src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop", desc: "Berbagi sembako kepada warga sekitar sekolah.", album: ["https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop"] },
  { id: 7, title: "Kunjungan Industri", date: "22 Sep 2024", category: "Kunjungan", src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", desc: "Study visit ke PT. Telkom Indonesia.", album: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"] },
  { id: 8, title: "Dokumentasi MPLS", date: "15 Jul 2024", category: "Event", src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop", desc: "Masa Pengenalan Lingkungan Sekolah 2024.", album: ["https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop"] },
  { id: 9, title: "E-Sport Tournament", date: "10 Aug 2024", category: "Event", src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop", desc: "Turnamen Mobile Legends antar kelas.", album: ["https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"] },
  { id: 10, title: "Pelantikan Pengurus", date: "01 Aug 2024", category: "Upacara", src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop", desc: "Serah terima jabatan pengurus OSIS lama ke baru.", album: ["https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"] },
  { id: 11, title: "Poster Design", date: "20 Jul 2024", category: "Karya", src: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop", desc: "Pemenang lomba desain poster digital.", album: ["https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop"] },
  { id: 12, title: "Study Tour", date: "15 Jun 2024", category: "Kunjungan", src: "https://images.unsplash.com/photo-1533227297464-6039a853b975?q=80&w=800&auto=format&fit=crop", desc: "Wisata edukasi ke Museum Geologi Bandung.", album: ["https://images.unsplash.com/photo-1533227297464-6039a853b975?q=80&w=800&auto=format&fit=crop"] },
];

const categories = ["Semua", ...new Set(galleryItems.map((item) => item.category))];

export default function GaleriPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  // State untuk menyimpan item yang sedang dibuka di Modal
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  // State untuk index foto di dalam album (Carousel)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeFilter === "Semua" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === activeFilter);

  // Fungsi Buka Modal
  const openModal = (item: typeof galleryItems[0]) => {
    setSelectedItem(item);
    setCurrentImageIndex(0); // Reset ke foto pertama setiap buka baru
    document.body.style.overflow = "hidden"; // Stop scroll background
  };

  // Fungsi Tutup Modal
  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto"; // Balikin scroll
  };

  // Navigasi Slider (Next/Prev)
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

  // Keyboard Navigation (Arrow Keys)
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
      
      {/* Background Decor */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.10] pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-white/10 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest border border-blue-200 dark:border-white/10">
            Arsip Visual 📸
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-6 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-300 dark:to-slate-500">
            Galeri Kegiatan
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Rekaman jejak langkah, tawa, dan kerja keras kami dalam membangun cerita di SMK Nurul Islam.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
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
                onClick={() => openModal(item)} // KLIK UNTUK BUKA MODAL
                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl dark:shadow-none transition-all"
              >
                <div className="relative w-full">
                  <Image src={item.src} alt={item.title} width={0} height={0} sizes="100vw" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110" />
                  
                  {/* Overlay Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="inline-block px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded mb-2 w-fit">{item.category}</span>
                    <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-white/70 text-xs">{item.date}</p>
                      <span className="text-white/90 text-[10px] font-bold uppercase tracking-wider border border-white/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
                        +{item.album.length} Foto
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* === CINEMA LIGHTBOX MODAL === */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal} // Klik background buat nutup
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
            >
              
              {/* Container Content Modal */}
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()} // Biar klik konten ga nutup modal
                className="relative w-full max-w-6xl h-[85vh] flex flex-col md:flex-row bg-[#0f172a] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              >
                
                {/* 1. BAGIAN GAMBAR (SLIDER) */}
                <div className="relative w-full md:w-3/4 h-[50%] md:h-full bg-black flex items-center justify-center group">
                   
                   {/* Foto Utama */}
                   <div className="relative w-full h-full">
                     <Image 
                       src={selectedItem.album[currentImageIndex]} 
                       alt="Detail" 
                       fill 
                       className="object-contain"
                       priority
                     />
                   </div>

                   {/* Tombol Navigasi (Hanya muncul kalau foto > 1) */}
                   {selectedItem.album.length > 1 && (
                     <>
                       <button onClick={prevImage} className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all hover:scale-110">
                         ←
                       </button>
                       <button onClick={nextImage} className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all hover:scale-110">
                         →
                       </button>
                       {/* Indikator Slide */}
                       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-mono">
                         {currentImageIndex + 1} / {selectedItem.album.length}
                       </div>
                     </>
                   )}
                </div>

                {/* 2. BAGIAN INFO (SIDEBAR) */}
                <div className="w-full md:w-1/4 h-[50%] md:h-full bg-white dark:bg-[#1e293b] p-8 flex flex-col relative">
                   
                   {/* Tombol Close (Mobile di pojok, Desktop di atas) */}
                   <button 
                     onClick={closeModal} 
                     className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 text-slate-500 dark:text-slate-300 flex items-center justify-center transition-all z-20"
                   >
                     ✕
                   </button>

                   <div className="flex-1 overflow-y-auto mt-6 md:mt-0">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                        {selectedItem.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2 leading-tight">
                        {selectedItem.title}
                      </h2>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-6 border-b border-slate-200 dark:border-slate-700 pb-6">
                        📅 {selectedItem.date}
                      </p>
                      
                      {/* Deskripsi */}
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                        {selectedItem.desc}
                      </p>

                      {/* Mini Thumbnails (Preview Album) */}
                      {selectedItem.album.length > 1 && (
                        <div className="mt-8">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Foto Lainnya</p>
                          <div className="grid grid-cols-3 gap-2">
                             {selectedItem.album.map((img, idx) => (
                               <button 
                                 key={idx}
                                 onClick={() => setCurrentImageIndex(idx)}
                                 className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-blue-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                               >
                                 <Image src={img} alt="thumb" fill className="object-cover" />
                               </button>
                             ))}
                          </div>
                        </div>
                      )}
                   </div>
                   
                   {/* Share Button (Optional) */}
                   <div className="pt-6 border-t border-slate-200 dark:border-slate-700 mt-auto">
                     <button className="w-full py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:scale-[1.02] transition-transform">
                       Bagikan Kegiatan Ini 🔗
                     </button>
                   </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}