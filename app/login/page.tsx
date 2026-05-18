"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Pencil, Book, Globe, Ruler, Calculator, 
  ChevronLeft, ChevronRight, Lock, User, Sparkles, GraduationCap,
  Atom, Pi, Sigma, Microscope, Search
} from "lucide-react";
import { loginAction } from "@/lib/auth";
import { showToast } from "@/components/Toast";

const FloatingIconsBackground = () => {
  const particlesRef = useRef<any[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const icons = [Pencil, Book, Globe, Ruler, Calculator, Atom, GraduationCap, Microscope, Pencil, Book, Globe, Ruler];
    
    // Create particle objects
    particlesRef.current = icons.map((Icon, i) => {
      const size = 30 + Math.random() * 20; // 30 to 50
      return {
        id: i,
        Icon,
        x: Math.random() * (window.innerWidth - size),
        y: Math.random() * (window.innerHeight - size),
        vx: (Math.random() - 0.5) * 2.5,
        vy: (Math.random() - 0.5) * 2.5,
        rotation: Math.random() * 360,
        vrot: (Math.random() - 0.5) * 2,
        size,
        element: null as HTMLDivElement | null
      };
    });

    setMounted(true);

    let animationFrameId: number;

    const update = () => {
       const particles = particlesRef.current;
       const width = window.innerWidth;
       const height = window.innerHeight;

       for (let i = 0; i < particles.length; i++) {
         const p = particles[i];
         p.x += p.vx;
         p.y += p.vy;
         p.rotation += p.vrot;

         // Wall collisions
         if (p.x <= 0) { p.x = 0; p.vx *= -1; }
         if (p.x + p.size >= width) { p.x = width - p.size; p.vx *= -1; }
         if (p.y <= 0) { p.y = 0; p.vy *= -1; }
         if (p.y + p.size >= height) { p.y = height - p.size; p.vy *= -1; }

         // Particle collisions
         for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = (p2.x + p2.size/2) - (p.x + p.size/2);
            const dy = (p2.y + p2.size/2) - (p.y + p.size/2);
            const distance = Math.sqrt(dx*dx + dy*dy);
            const minDistance = (p.size + p2.size) / 2;

            if (distance < minDistance && distance > 0) {
              const angle = Math.atan2(dy, dx);
              const sin = Math.sin(angle);
              const cos = Math.cos(angle);

              // Component of velocity along the collision axis
              const v1n = p.vx * cos + p.vy * sin;
              const v1t = -p.vx * sin + p.vy * cos;
              const v2n = p2.vx * cos + p2.vy * sin;
              const v2t = -p2.vx * sin + p2.vy * cos;

              // Swap normal components
              p.vx = v2n * cos - v1t * sin;
              p.vy = v2n * sin + v1t * cos;
              p2.vx = v1n * cos - v2t * sin;
              p2.vy = v1n * sin + v2t * cos;

              // Separate to avoid sticking
              const overlap = minDistance - distance;
              p.x -= overlap * cos * 0.5;
              p.y -= overlap * sin * 0.5;
              p2.x += overlap * cos * 0.5;
              p2.y += overlap * sin * 0.5;
            }
         }

         // Speed limit
         const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
         if (speed > 3) {
           p.vx = (p.vx / speed) * 3;
           p.vy = (p.vy / speed) * 3;
         }

         // Update DOM directly for 60fps performance without React re-renders
         if (p.element) {
            p.element.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg)`;
         }
       }
       animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!mounted) return null;

  return (
    <>
       {particlesRef.current.map((p, i) => {
         const isBlue = i % 2 === 0;
         return (
           <div 
             key={p.id}
             ref={el => { p.element = el; }}
             className={`absolute top-0 left-0 ${isBlue ? 'text-blue-300/60 dark:text-blue-900/40' : 'text-indigo-300/60 dark:text-indigo-900/40'}`}
             style={{ 
               width: p.size, 
               height: p.size,
               transform: `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg)`
             }}
           >
             <p.Icon size={p.size} />
           </div>
         );
       })}
    </>
  );
};

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized position from -1 to 1
      const nx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const ny = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      
      // Limit the movement to a max of 6px (melirik saja, tidak sampai hilang)
      const x = nx * 6;
      const y = ny * 6;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    try {
      const result = await loginAction(formData);

      if (result.success) {
         showToast("Login berhasil! Mengalihkan ke dashboard...", "success");
         setTimeout(() => {
           router.push("/admin");
         }, 1000);
      } else {
         showToast(result.message, "error", "Gagal Masuk");
         setIsLoading(false);
      }
    } catch (err) {
      showToast("Terjadi kesalahan sistem.", "error");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-[#020617] relative overflow-hidden font-sans selection:bg-blue-500 selection:text-white">
      
      {/* === BACKGROUND DECORATION === */}
      {isClient && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-[120px] opacity-60" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[120px] opacity-60" />
           
           {/* Floating Particles Physics Engine */}
           <FloatingIconsBackground />
        </div>
      )}

      {/* === LOGIN CARD CONTAINER === */}
      <div className="relative z-10 w-full max-w-[400px] px-6">
        

        {/* CARD - Clean Modern Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative z-10"
        >
           {/* FORM */}
           <form onSubmit={handleLogin} className="space-y-6">
              
              <div className="space-y-2 pt-[110px]">
                  <label className="text-[10px] font-bold font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <User size={12} className="text-blue-500" /> Username
                  </label>
                  
                  <div className="relative">
                     {/* THE ULTIMATE MASCOT (FLAWLESS STACKING) */}
                     <div className="absolute bottom-[100%] left-0 right-0 flex justify-center pointer-events-none mb-[-12px]">
                       <motion.div
                         initial={{ y: 20, opacity: 0 }}
                         animate={{ y: 0, opacity: 1 }}
                         transition={{ type: "spring", stiffness: 300, damping: 25 }}
                         className="flex flex-col items-center"
                       >
                         {/* HEAD (BEHIND INPUT) */}
                         <div className="relative z-0 flex flex-col items-center">
                            {/* THE ULTIMATE REALISTIC SCHOOL HAT (PILL VISOR STYLE) */}
                            <div className="relative z-30 flex flex-col items-center -mb-8">
                               {/* Kancing Atas */}
                               <div className="absolute -top-1.5 w-4 h-2 bg-[#94a3b8] dark:bg-slate-500 rounded-t-full z-20" />

                               {/* Mahkota Topi (Crown) */}
                               <div className="w-[100px] h-[64px] bg-[#e2e8f0] dark:bg-slate-300 rounded-[50%_50%_0_0_/_100%_100%_0_0] relative z-10 overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.05)] flex justify-center border-t border-x border-slate-300 dark:border-slate-500">
                                  
                                  {/* Jahitan Vertikal Samping */}
                                  <div className="absolute inset-0 z-0 pointer-events-none">
                                     <div className="absolute top-0 left-[25%] w-px h-full bg-slate-400/40" />
                                     <div className="absolute top-0 right-[25%] w-px h-full bg-slate-400/40" />
                                  </div>

                                  {/* Panel Putih Depan (Lurus) */}
                                  <div className="w-[50px] h-full bg-white dark:bg-slate-100 border-x border-slate-200 dark:border-slate-400 relative flex flex-col items-center pt-3.5 z-10">
                                     <img src="/logos/SMK.png" alt="Logo SMK" className="w-[30px] h-[30px] object-contain drop-shadow-sm relative z-10" />
                                  </div>
                                  
                                  {/* Gradien 3D Mahkota */}
                                  <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/40 z-10 pointer-events-none mix-blend-overlay" />
                               </div>

                               {/* Lidah Topi (Visor) - BENTUK PILL / KAPSUL PERSIS FOTO REFERENSI */}
                               <div className="w-[136px] h-[26px] bg-gradient-to-b from-[#e2e8f0] to-[#cbd5e1] dark:from-slate-500 dark:to-slate-600 rounded-[20px] -mt-3.5 relative z-30 shadow-[0_5px_8px_rgba(0,0,0,0.2)] flex justify-center overflow-hidden border-b-[4px] border-[#94a3b8] dark:border-slate-800">
                                  {/* Garis Jahitan Lidah Topi (Melengkung ke bawah) */}
                                  <div className="absolute -top-2 w-[110px] h-[16px] border-b-[1.5px] border-slate-400/60 dark:border-slate-800/60 rounded-[50%]" />
                                  <div className="absolute -top-1 w-[124px] h-[20px] border-b-[1.5px] border-slate-400/50 dark:border-slate-800/50 rounded-[50%]" />
                               </div>
                            </div>

                            {/* Main Head Body */}
                            <div className="w-24 h-20 bg-blue-600 dark:bg-blue-500 rounded-t-[3rem] rounded-b-[1rem] relative flex flex-col items-center pt-8 shadow-md border-b-4 border-blue-700 dark:border-blue-600 overflow-hidden">
                               {/* CAST SHADOW FROM VISOR */}
                               <div className="absolute top-8 inset-x-0 h-6 bg-gradient-to-b from-black/40 to-transparent blur-[2px] z-10 pointer-events-none" />
                               
                               {/* Eyes System */}
                               <div className="flex gap-3 relative z-20">
                                  {[0, 1].map((i) => (
                                    <div key={i} className="w-6 h-6 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-blue-200 shadow-inner">
                                       <motion.div 
                                         animate={
                                           focusedField === 'password' 
                                           ? { scaleY: 0.1, y: 4 } 
                                           : { 
                                               x: focusedField === 'username' ? 0 : mousePos.x, 
                                               y: focusedField === 'username' ? 6 : mousePos.y,
                                               scale: 1
                                             }
                                         }
                                         className="w-3 h-3 bg-slate-900 rounded-full relative"
                                       >
                                          <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full opacity-60" />
                                       </motion.div>
                                    </div>
                                  ))}
                               </div>

                               {/* Blushing when password */}
                               {focusedField === 'password' && (
                                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} className="flex gap-8 absolute top-12">
                                    <div className="w-3 h-1.5 bg-pink-300 rounded-full blur-[1px]" />
                                    <div className="w-3 h-1.5 bg-pink-300 rounded-full blur-[1px]" />
                                 </motion.div>
                               )}

                               {/* Mouth Indicator */}
                               <motion.div 
                                 animate={isLoading ? { opacity: [0.2, 1, 0.2] } : { opacity: 0.5 }}
                                 transition={{ repeat: Infinity, duration: 0.8 }}
                                 className="mt-3 w-4 h-1 bg-blue-200 rounded-full"
                               />
                            </div>
                         </div>

                         {/* HANDS (ON TOP OF INPUT) */}
                         <motion.div 
                           animate={focusedField === 'password' ? { y: -30, scale: 1.1 } : { y: 12 }}
                           initial={{ y: 12 }}
                           className="absolute bottom-0 w-[105px] flex justify-between z-30"
                         >
                            <div className="w-6 h-7 bg-blue-600 dark:bg-blue-500 border-2 border-white/80 dark:border-white/20 rounded-t-xl shadow-sm transform -rotate-[15deg]" />
                            <div className="w-6 h-7 bg-blue-600 dark:bg-blue-500 border-2 border-white/80 dark:border-white/20 rounded-t-xl shadow-sm transform rotate-[15deg]" />
                         </motion.div>
                       </motion.div>
                     </div>

                     {/* USERNAME INPUT */}
                     <input 
                       name="username"
                       type="text" 
                       placeholder="ID Pengurus" 
                       onFocus={() => setFocusedField('username')}
                       onBlur={() => setFocusedField(null)}
                       className="w-full relative z-10 bg-slate-50/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-400 font-bold text-sm"
                       required
                     />
                  </div>
              </div>

              <div className="space-y-2">
                  <label className="text-[10px] font-bold font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <Lock size={12} className="text-blue-500" /> Kata Sandi
                  </label>
                  <input 
                    name="password"
                    type="password" 
                    placeholder="••••••••" 
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-slate-50/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-400 font-bold text-sm"
                    required
                  />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-4 mt-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold font-bold tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 group text-sm"
              >
                {isLoading ? (
                   <div className="flex items-center gap-2">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                        <Lock size={16} />
                      </motion.div>
                      <span>AUTENTIKASI...</span>
                   </div>
                ) : (
                   <>
                     MASUK KE PANEL <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </>
                )}
              </button>
           </form>

           <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5">
              <Link 
                href="/" 
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-50/50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-[10px] font-bold font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all group uppercase tracking-widest shadow-sm active:scale-[0.98]"
              >
                  <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
                  Kembali ke Beranda
              </Link>
           </div>
        </motion.div>

        {/* Footer Info */}
        <p className="mt-8 text-center text-[9px] font-bold font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em]">
          © 2026 SMK NURUL ISLAM • OSKA SYSTEM
        </p>
      </div>
    </div>
  );
}