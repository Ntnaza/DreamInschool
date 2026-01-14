"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue, MotionValue } from "framer-motion";

// === DATA ANGGOTA ===
const members = [
  { id: 1, name: "Raka Aditya", role: "KETUA OSIS 👑", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", color: "blue" },
  { id: 2, name: "Siti Aminah", role: "KETUA MPK 🏛️", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", color: "purple" },
  { id: 3, name: "Dimas Saputra", role: "WAKIL OSIS", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop", color: "cyan" },
  { id: 4, name: "Bayu Permana", role: "WAKIL MPK", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop", color: "pink" },
  { id: 5, name: "Nadia Putri", role: "SEKRETARIS I", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop", color: "emerald" },
  { id: 6, name: "Budi Santoso", role: "BENDAHARA", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop", color: "orange" },
  { id: 7, name: "Ahmad Fauzi", role: "AGAMA", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop", color: "green" },
  { id: 8, name: "Zahra Nur", role: "AGAMA", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", color: "green" },
  { id: 9, name: "Kevin S", role: "TIK", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop", color: "blue" },
  { id: 10, name: "Maya Indah", role: "SENI", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", color: "pink" },
  { id: 11, name: "Rizky R", role: "MULTIMEDIA", img: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=800&auto=format&fit=crop", color: "cyan" },
  { id: 12, name: "Doni T", role: "OLAHRAGA", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop", color: "yellow" },
  { id: 13, name: "Sari M", role: "HUMAS", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop", color: "purple" },
  { id: 14, name: "Fajar A", role: "LOGISTIK", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop", color: "slate" },
];

const getRandomPos = (index: number) => {
  const angle = (index / 2.5) * Math.PI * 2; 
  const radius = 950; 
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * (radius * 0.6); 
  return { x, y };
};

function AsteroidCard({ data, index, total, scrollYProgress }: { data: any, index: number, total: number, scrollYProgress: MotionValue<number> }) {
  
  // === LOGIKA BARU: SAFE ZONE ===
  // Kita perbesar Intro Buffer jadi 0.25 (25% awal scroll bersih)
  const introBuffer = 0.25;
  const outroBuffer = 0.1;
  const contentSpace = 1 - introBuffer - outroBuffer;
  const step = contentSpace / total;
  
  const targetScroll = introBuffer + (index * step); 
  const endScroll = targetScroll + 0.03; 

  // TITIK MULAI MUNCUL (Start Appear)
  // Foto baru boleh mulai muncul 0.15 sebelum target.
  // TAPI, tidak boleh kurang dari 0.1 (Biar awal page tetep bersih)
  const startAppear = Math.max(0.1, targetScroll - 0.15);

  const { x: initialX, y: initialY } = getRandomPos(index);

  // 1. SCALE
  // Range: [0, startAppear, target, end]
  // Di '0' nilainya 0. Di 'startAppear' juga 0.
  // Ini MEMASTIKAN di awal scroll (0), foto bener-bener skala 0 (ilang).
  const scale = useTransform(
    scrollYProgress, 
    [0, startAppear, targetScroll, endScroll], 
    [0, 0, 1.1, 4] 
  );
  
  // 2. OPACITY
  const opacity = useTransform(
    scrollYProgress, 
    [0, startAppear, targetScroll, endScroll], 
    [0, 0, 1, 0] 
  );
  
  const x = useTransform(scrollYProgress, [0, startAppear, targetScroll, endScroll], [`${initialX}px`, `${initialX}px`, "0px", "0px"]);
  const y = useTransform(scrollYProgress, [0, startAppear, targetScroll, endScroll], [`${initialY}px`, `${initialY}px`, "0px", "0px"]);

  const zIndex = useTransform(scrollYProgress, (pos) => {
    const dist = Math.abs(pos - targetScroll);
    return 1000 - Math.round(dist * 10000);
  });

  return (
    <motion.div
      style={{ scale, opacity, x, y, zIndex, willChange: "transform, opacity" }}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"
    >
      <div className="relative w-[300px] md:w-[450px] aspect-[3/4] group">
        
        {/* CARD CONTENT */}
        <div className="w-full h-full rounded-[2.5rem] bg-[#0f172a] shadow-2xl overflow-hidden p-0 relative">
            <div className={`absolute inset-0 rounded-[2.5rem] border-2 border-${data.color}-500/20 opacity-50`} />

            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                <Image 
                    src={data.img} alt={data.name} fill
                    className="object-cover"
                    priority={index < 5}
                    quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                    <div className={`inline-block px-3 py-1 mb-2 rounded-full text-[10px] font-bold uppercase tracking-widest bg-${data.color}-500/20 text-${data.color}-300 backdrop-blur-sm`}>
                      {data.role}
                    </div>
                    <h2 className="text-3xl font-black text-white leading-none drop-shadow-xl">{data.name}</h2>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PengurusPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig); 
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig); 

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const [stars, setStars] = useState<{ width: string, height: string, top: string, left: string, animation: string }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }).map(() => ({
      width: Math.random() * 3 + 'px',
      height: Math.random() * 3 + 'px',
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      animation: `pulse ${Math.random() * 3 + 2}s infinite`
    }));
    setStars(generatedStars);
  }, []);

  const virtualHeight = `${members.length * 200 + 100}vh`;

  return (
    <div 
      ref={containerRef} 
      style={{ height: virtualHeight }} 
      className="relative bg-[#000000]"
      onMouseMove={handleMouseMove}
    >
      
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
         <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[100px] animate-pulse" style={{ willChange: 'opacity' }} />
         <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[100px]" style={{ willChange: 'opacity' }} />
         {stars.map((style, i) => (
            <div key={i} className="absolute bg-white rounded-full opacity-40" style={style} />
         ))}
      </div>

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-[1200px]">
        
        <motion.div 
          style={{ rotateX, rotateY }} 
          className="relative w-full h-full flex items-center justify-center preserve-3d origin-center"
        >
           
           {/* === 1. INTRO TITLE (MISTERIUS) === */}
           <motion.div 
             style={{ 
               // Intro Buffer kita naikkan ke 0.2.
               // Jadi dari 0 sampai 0.2 murni cuma animasi Judul ini.
               opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]), 
               scale: useTransform(scrollYProgress, [0, 0.2], [1, 3]),
               z: useTransform(scrollYProgress, [0, 0.2], [0, 1000])
             }}
             className="absolute z-50 text-center pointer-events-none"
           >
              <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                JIVA ABISATYA
              </h1>
              <p className="text-blue-300 tracking-[0.8em] text-xs font-bold mt-4 uppercase">
                Struktur Organisasi 2025
              </p>
              <div className="mt-12 animate-bounce">
                <span className="text-white/50 text-xs tracking-widest border border-white/20 px-4 py-2 rounded-full">
                  SCROLL TO EXPLORE ↓
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
               opacity: useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 1]), 
               scale: useTransform(scrollYProgress, [0.85, 1], [0.5, 1]),
             }}
             className="absolute z-50 text-center pointer-events-none"
           >
              <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/10 text-blue-300 text-[10px] font-bold tracking-[0.3em] uppercase border border-blue-500/20">
                Terima Kasih
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 tracking-tighter">
                MAJU BERSAMA
              </h1>
              <p className="text-slate-400 mt-4 text-sm font-medium tracking-widest">
                OSIS & MPK SMK NURUL ISLAM
              </p>
           </motion.div>

        </motion.div>
        
        {/* Progress Bar */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 h-48 w-1 bg-white/10 rounded-full overflow-hidden hidden md:block">
            <motion.div 
              className="w-full bg-blue-500"
              style={{ height: scrollYProgress, transformOrigin: "0%" }}
            />
        </div>

      </div>
    </div>
  );
}