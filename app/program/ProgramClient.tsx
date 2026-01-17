"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- KOMPONEN KARTU TIMELINE (Sama persis kayak sebelumnya) ---
const TimelineItem = ({ data, index }: { data: any, index: number }) => {
  const isLeft = index % 2 === 0;

  // 🔥 LOGIKA BARU UNTUK TANGGAL:
  // 1. Cek Start Date
  // 2. Kalau kosong, cek Deadline
  // 3. Kalau kosong juga, tulis "Segera Hadir"
  const targetDate = data.startDate || data.deadline;
  
  const dateStr = targetDate 
    ? new Date(targetDate).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })
    : "Segera Hadir";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-center justify-between w-full mb-8 ${isLeft ? "flex-row-reverse" : ""}`}
    >
      {/* 1. SPACE KOSONG (ZigZag) */}
      <div className="hidden md:block w-5/12" />

      {/* 2. TITIK TENGAH (NODE) */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
         <div className={`w-8 h-8 rounded-full border-4 border-slate-50 dark:border-[#020617] shadow-lg z-10 flex items-center justify-center transition-colors duration-500
           ${data.status === 'DONE' ? 'bg-green-500' : 
             data.status === 'IN_PROGRESS' ? 'bg-yellow-400 animate-pulse' : 'bg-slate-300 dark:bg-slate-600'}
         `}>
           {data.status === 'DONE' && <span className="text-white text-[10px]">✓</span>}
         </div>
      </div>

      {/* 3. KARTU KONTEN */}
      <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
        
        {/* Card Body */}
        <div className="bg-white dark:bg-[#0f172a]/60 dark:backdrop-blur-md p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 hover:border-blue-500 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
          
          {/* Inner Glow untuk Dark Mode */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 dark:group-hover:from-blue-500/10 dark:group-hover:to-purple-500/10 transition-colors duration-500 pointer-events-none" />

          {/* FLEXBOX LAYOUT */}
          <div className={`flex items-center justify-between mb-3 relative z-10 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
            
            {/* BADGE STATUS */}
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap
              ${data.status === 'DONE' ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300' : 
                data.status === 'IN_PROGRESS' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300 animate-pulse' : 
                'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300'}
            `}>
              {data.status.replace("_", " ")}
            </span>

            {/* TANGGAL */}
            <span className="text-sm font-bold text-blue-600 dark:text-blue-300">
              {dateStr}
            </span>

          </div>

          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 leading-tight relative z-10">
            {data.nama}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed relative z-10 line-clamp-3">
            {data.deskripsi || "Tidak ada deskripsi."}
          </p>
          
          {/* INFO TAMBAHAN: Divisi & Anggaran */}
          <div className={`flex flex-wrap items-center gap-3 text-xs font-bold text-slate-400 ${isLeft ? "md:justify-end" : "md:justify-start"} relative z-10`}>
             <span className="flex items-center gap-1">🏢 {data.divisi}</span>
             {data.anggaran > 0 && (
                <span className="flex items-center gap-1 px-2 py-0.5 bg-slate-100 dark:bg-white/5 rounded">
                   💰 Rp {data.anggaran.toLocaleString("id-ID")}
                </span>
             )}
          </div>

        </div>
      </div>

    </motion.div>
  );
};

// === MAIN COMPONENT ===
export default function ProgramClient({ programs }: { programs: any[] }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // --- BACKGROUND STARS ---
  const [stars, setStars] = useState<{ width: string, height: string, top: string, left: string, animation: string }[]>([]);
  useEffect(() => {
    const generatedStars = Array.from({ length: 40 }).map(() => ({
      width: Math.random() * 3 + 'px',
      height: Math.random() * 3 + 'px',
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      animation: `pulse ${Math.random() * 3 + 2}s infinite`
    }));
    setStars(generatedStars);
  }, []);

  return (
    <main className="min-h-screen relative transition-colors duration-700 pt-24 pb-24 bg-slate-50 dark:bg-[#020617]">
      
      {/* === BACKGROUND HYBRID === */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         {/* Stars Overlay (Dark Mode Only) */}
         <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-700">
            {stars.map((style, i) => (
              <div key={i} className="absolute bg-white rounded-full opacity-30" style={style} />
            ))}
            {/* Aurora Blobs */}
            <div className="absolute top-[-20%] right-[0%] w-[700px] h-[700px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px]" />
         </div>

         {/* Noise Overlay */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.10] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-white/10 dark:text-blue-300 text-xs font-bold uppercase tracking-widest border border-blue-200 dark:border-white/10">
            Roadmap 2024/2025 🗺️
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6 pb-2
            text-blue-600 
            dark:text-transparent dark:bg-clip-text 
            dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-300 dark:to-slate-500"
          >
            Program Kerja
          </h1>
          
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Rencana dan realisasi kegiatan OSIS & MPK selama satu periode kepengurusan. Dari siswa, oleh siswa, untuk siswa.
          </p>
        </div>

        {/* === TIMELINE === */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          
          {/* GARIS TENGAH (Static) */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 rounded-full" />
          
          {/* GARIS TENGAH (Animated Progress) */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-0 w-1 rounded-full origin-top bg-gradient-to-b from-blue-500 to-purple-600 dark:from-blue-400 dark:to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          />

          {/* CARDS */}
          {programs.length === 0 ? (
            <div className="text-center py-20 text-slate-400 font-bold">Belum ada Program Kerja yang diinput.</div>
          ) : (
             <div className="space-y-12 pb-24">
                {programs.map((prog, index) => (
                  <TimelineItem key={prog.id} data={prog} index={index} />
                ))}
             </div>
          )}

          {/* FINISH LINE */}
          <div className="flex justify-center pt-8">
            <div className="px-6 py-3 rounded-full font-bold text-sm shadow-xl z-20 
              bg-slate-900 text-white 
              dark:bg-white dark:text-slate-900"
            >
               🏁 Akhir Periode
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}