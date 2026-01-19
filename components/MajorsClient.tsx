"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
// 🔥 IMPORT SIHIR 3D KITA
import AuroraBackground from "./AuroraBackground"; 

export default function MajorsClient({ majors }: { majors: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeMajor = majors[activeIndex];

  // --- AUTO PLAY ---
  const nextSlide = () => setActiveIndex((curr) => (curr + 1) % majors.length);
  const prevSlide = () => setActiveIndex((curr) => (curr - 1 + majors.length) % majors.length);

  useEffect(() => {
    if (!isPaused) timeoutRef.current = setTimeout(nextSlide, 8000);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [activeIndex, isPaused]);

  // === ANIMASI KONTEN (Teks & Logo) ===
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, x: -30, transition: { duration: 0.5 } }
  };

  const logoVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: { 
        opacity: 0.5, // Hantu Mode (50%)
        x: 0, scale: 1, 
        transition: { duration: 1, type: "spring", bounce: 0 } 
    },
    exit: { opacity: 0, x: 50, scale: 0.9, transition: { duration: 0.5 } }
  };

  return (
    <section 
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#020617]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* ==================================================
          LAYER 1 & 2: THE REAL 3D AURORA + STARS
      ================================================== */}
      {/* Kita panggil komponen 3D di sini. Dia akan handle Bintang & Aurora sekaligus */}
      <AuroraBackground color={activeMajor.MysteriousColor} />
      
      {/* Vignette Overlay (Biar pinggirannya gelap fokus ke tengah) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_95%)] pointer-events-none z-10" />


      {/* ==================================================
          LAYER 3: MAIN CONTENT
      ================================================== */}
      <div className="container mx-auto px-4 relative z-20 h-full flex items-center justify-center">
        <div className="w-full max-w-5xl"> 
            
            <AnimatePresence mode="wait">
                <motion.div 
                    key={activeIndex}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center min-h-[400px]"
                >

                    {/* === KIRI: TEKS === */}
                    <motion.div 
                        className="flex flex-col justify-center relative z-20 md:text-left"
                        initial="hidden" animate="visible" exit="exit" variants={textVariants}
                    >
                        <div 
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest w-fit mb-4 backdrop-blur-md shadow-lg"
                            style={{ color: activeMajor.MysteriousColor, borderColor: `${activeMajor.MysteriousColor}40` }}
                        >
                            <Zap size={12} fill="currentColor"/> {activeMajor.roleName}
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-none mb-3 tracking-tight drop-shadow-2xl">
                            {activeMajor.title}
                        </h2>
                        <h3 className="text-sm md:text-base font-bold text-white/50 mb-6 uppercase tracking-wider">
                            {activeMajor.fullName}
                        </h3>
                        
                        {/* Garis Cahaya */}
                        <div 
                            className="h-[2px] w-20 mb-6 rounded-full"
                            style={{ backgroundColor: activeMajor.MysteriousColor, boxShadow: `0 0 15px ${activeMajor.MysteriousColor}` }}
                        />

                        <p className="text-sm md:text-base text-slate-300 leading-relaxed drop-shadow-md font-medium max-w-md">
                            {activeMajor.description}
                        </p>

                        {/* Stats */}
                        {activeMajor.count !== undefined && (
                            <div className="mt-6">
                                <div className="text-2xl font-black text-white flex items-baseline gap-2" style={{ textShadow: `0 0 20px ${activeMajor.MysteriousColor}80` }}>
                                    {activeMajor.count} <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Active Agents</span>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* === KANAN: LOGO HANTU === */}
                    <motion.div 
                        className="relative h-[250px] md:h-[320px] flex items-center justify-center z-10"
                        initial="hidden" animate="visible" exit="exit" variants={logoVariants}
                    >
                        <div className="relative w-full h-full max-w-[280px] max-h-[280px]">
                            {activeMajor.logo ? (
                                <Image 
                                    src={activeMajor.logo} 
                                    alt={activeMajor.title} 
                                    fill 
                                    className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" 
                                    priority
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-[100px] opacity-40" style={{ color: activeMajor.MysteriousColor, textShadow: `0 0 30px ${activeMajor.MysteriousColor}` }}>
                                    {activeMajor.icon}
                                </div>
                            )}
                        </div>
                    </motion.div>

                </motion.div>
            </AnimatePresence>

        </div>

        {/* NAVIGATION */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
           <button onClick={prevSlide} className="p-2 text-white/40 hover:text-white transition-colors"><ChevronLeft size={20}/></button>
           <div className="flex gap-1.5">
                {majors.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-1 rounded-full transition-all duration-500 ${index === activeIndex ? "w-8" : "w-2 bg-white/20 hover:bg-white/40"}`}
                        style={{ backgroundColor: index === activeIndex ? activeMajor.MysteriousColor : undefined, boxShadow: index === activeIndex ? `0 0 10px ${activeMajor.MysteriousColor}` : 'none'  }}
                    />
                ))}
           </div>
           <button onClick={nextSlide} className="p-2 text-white/40 hover:text-white transition-colors"><ChevronRight size={20}/></button>
        </div>

      </div>
    </section>
  );
}