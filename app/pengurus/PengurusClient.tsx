"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue, MotionValue } from "framer-motion";

// Helper posisi (Sedikit diperkecil radiusnya biar lebih fokus)
const getRandomPos = (index: number) => {
  const angle = (index / 2.5) * Math.PI * 2; 
  const radius = 600; // Dikurangi dari 950 ke 600 biar pergerakan lebih efisien
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * (radius * 0.6); 
  return { x, y };
};

function AsteroidCard({ data, index, total, scrollYProgress }: { data: any, index: number, total: number, scrollYProgress: MotionValue<number> }) {
  
  // === TUNING ANIMASI BARU (LEBIH RINGAN & RAPI) ===
  const introBuffer = 0.1; // Intro diperpendek (0.1) biar gak lama nunggu
  const outroBuffer = 0.05;
  const contentSpace = 1 - introBuffer - outroBuffer;
  const step = contentSpace / total;
  
  const targetScroll = introBuffer + (index * step); 
  // Range fokus diperlebar sedikit biar foto "diam" sebentar saat dilihat
  const endScroll = targetScroll + step; 

  // Titik mulai muncul
  const startAppear = Math.max(0, targetScroll - 0.1);

  const { x: initialX, y: initialY } = getRandomPos(index);

  // 1. SCALE (SOLUSI NAVBAR & TEMPAT)
  // Dulu: [0, 0, 1.1, 4] -> Terlalu besar
  // Sekarang: [0.5, 0.5, 1, 0.5] -> Mulai kecil, Fokus Normal (1), lalu mengecil lagi saat lewat
  // Efeknya seperti carousel 3D, bukan tabrakan.
  const scale = useTransform(
    scrollYProgress, 
    [startAppear, targetScroll - (step/2), targetScroll, endScroll], 
    [0.2, 0.6, 1.1, 0.2] // Max scale cuma 1.1 (Ukuran Asli + 10%)
  );
  
  // 2. OPACITY
  const opacity = useTransform(
    scrollYProgress, 
    [startAppear, targetScroll - (step/2), targetScroll, endScroll], 
    [0, 1, 1, 0] 
  );
  
  // 3. POSISI X & Y
  const x = useTransform(scrollYProgress, [startAppear, targetScroll, endScroll], [`${initialX}px`, "0px", `${-initialX}px`]);
  const y = useTransform(scrollYProgress, [startAppear, targetScroll, endScroll], [`${initialY}px`, "0px", "0px"]);

  const zIndex = useTransform(scrollYProgress, (pos) => {
    // Memberikan prioritas z-index hanya saat item sedang fokus
    return Math.abs(pos - targetScroll) < step ? 50 : 1;
  });

  const colorClasses: any = {
    blue: { border: "border-blue-500/20", bg: "bg-blue-500/20", text: "text-blue-300" },
    purple: { border: "border-purple-500/20", bg: "bg-purple-500/20", text: "text-purple-300" },
    cyan: { border: "border-cyan-500/20", bg: "bg-cyan-500/20", text: "text-cyan-300" },
    pink: { border: "border-pink-500/20", bg: "bg-pink-500/20", text: "text-pink-300" },
    emerald: { border: "border-emerald-500/20", bg: "bg-emerald-500/20", text: "text-emerald-300" },
    orange: { border: "border-orange-500/20", bg: "bg-orange-500/20", text: "text-orange-300" },
    green: { border: "border-green-500/20", bg: "bg-green-500/20", text: "text-green-300" },
    yellow: { border: "border-yellow-500/20", bg: "bg-yellow-500/20", text: "text-yellow-300" },
    slate: { border: "border-slate-500/20", bg: "bg-slate-500/20", text: "text-slate-300" },
  };

  const theme = colorClasses[data.color] || colorClasses['slate'];

  return (
    <motion.div
      style={{ scale, opacity, x, y, zIndex, willChange: "transform, opacity" }}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"
    >
      {/* Container Kartu: Ukuran dibatasi max-w-sm (kecil) agar aman dari navbar */}
      <div className="relative w-[280px] md:w-[320px] aspect-[3/4] group mt-16 md:mt-0"> 
        <div className="w-full h-full rounded-[2rem] bg-[#0f172a] shadow-2xl overflow-hidden p-0 relative border border-white/5">
            <div className={`absolute inset-0 rounded-[2rem] border-2 ${theme.border} opacity-50`} />

            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <Image 
                    src={data.img} alt={data.name} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    // Matikan priority untuk item belakang biar ringan loadnya
                    priority={index < 2} 
                    quality={60} // Turunkan quality dikit biar enteng scrolnya
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-5 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className={`inline-block px-3 py-1 mb-2 rounded-full text-[10px] font-bold uppercase tracking-widest ${theme.bg} ${theme.text} backdrop-blur-sm border border-white/5`}>
                      {data.role}
                    </div>
                    <h2 className="text-2xl font-black text-white leading-tight drop-shadow-md">{data.name}</h2>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PengurusClient({ members, angkatanTitle }: { members: any[], angkatanTitle: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 400 }; // Lebih kaku biar gak terlalu goyang (bikin pusing/berat)
  
  // Range rotasi diperkecil biar gak berat rendernya
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig); 
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig); 

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const [stars, setStars] = useState<{ width: string, height: string, top: string, left: string, animation: string }[]>([]);

  useEffect(() => {
    // Kurangi jumlah bintang dari 50 ke 30 biar ringan
    const generatedStars = Array.from({ length: 30 }).map(() => ({
      width: Math.random() * 2 + 'px',
      height: Math.random() * 2 + 'px',
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      animation: `pulse ${Math.random() * 3 + 2}s infinite`
    }));
    setStars(generatedStars);
  }, []);

  // === SOLUSI SCROLL BERAT ===
  // Dulu: members.length * 200 (Sangat Panjang)
  // Sekarang: members.length * 80 (Cepat & Ringkas)
  // Ditambah buffer 120vh untuk Intro & Outro
  const virtualHeight = `${Math.max(150, members.length * 80 + 120)}vh`;

  return (
    <div 
      ref={containerRef} 
      style={{ height: virtualHeight }} 
      className="relative bg-[#000000]"
      onMouseMove={handleMouseMove}
    >
      
      {/* BACKGROUND - Optimasi: hapus blur besar yang berat */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
         {/* Ganti blur besar dengan gradient radial simpel CSS biar ringan */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,1)_0%,_rgba(0,0,0,1)_100%)] -z-10" />
         
         {stars.map((style, i) => (
            <div key={i} className="absolute bg-white rounded-full opacity-30" style={style} />
         ))}
      </div>

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-[1200px]">
        
        <motion.div 
          style={{ rotateX, rotateY }} 
          className="relative w-full h-full flex items-center justify-center preserve-3d origin-center"
        >
           
           {/* === 1. INTRO TITLE (DI-OPTIMASI) === */}
           <motion.div 
             style={{ 
               // Animasi lebih cepat selesai (0.1)
               opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]), 
               scale: useTransform(scrollYProgress, [0, 0.1], [1, 1.5]), // Scale gak usah sampe 3x
               y: useTransform(scrollYProgress, [0, 0.1], [0, -100]) // Geser ke atas biar gak numpuk
             }}
             className="absolute z-50 text-center pointer-events-none px-4"
           >
              <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
                {angkatanTitle}
              </h1>
              <p className="text-blue-400 tracking-[0.5em] text-[10px] md:text-xs font-bold mt-4 uppercase">
                Struktur Organisasi 2025
              </p>
              <div className="mt-8 animate-bounce">
                <span className="text-white/40 text-[10px] tracking-widest border border-white/10 px-4 py-2 rounded-full">
                  SCROLL ↓
                </span>
              </div>
           </motion.div>

           {/* === 2. CONTENT CARDS === */}
           {members.map((member, index) => (
             <AsteroidCard 
               key={member.id}
               data={member}
               index={index}
               total={members.length}
               scrollYProgress={scrollYProgress}
             />
           ))}

           {/* === 3. OUTRO TITLE === */}
           <motion.div 
             style={{ 
               opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]), 
               scale: useTransform(scrollYProgress, [0.9, 1], [0.8, 1]),
             }}
             className="absolute z-50 text-center pointer-events-none"
           >
              <h1 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-600 tracking-tighter">
                TERIMA KASIH
              </h1>
           </motion.div>

        </motion.div>
        
        {/* Progress Bar - Simple Line */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 h-32 w-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-blue-500"
              style={{ height: scrollYProgress, transformOrigin: "0%" }}
            />
        </div>

      </div>
    </div>
  );
}