"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Pencil, Book, Globe, Ruler, Calculator, 
  ChevronLeft, ChevronRight, Lock, User, Sparkles, GraduationCap,
  Atom, Pi, Sigma, Microscope, Search
} from "lucide-react";
import { loginAction } from "@/lib/auth";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await loginAction(formData);

    if (result.success) {
       setTimeout(() => {
         router.push("/admin");
       }, 1000);
    } else {
       alert(result.message);
       setIsLoading(false);
    }
  };

  // Komponen Elemen Melayang
  const FloatingElement = ({ icon: Icon, delay, x, y, size = 24, rotate = 0, text = "" }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: [0.2, 0.5, 0.2], 
        y: [0, -40, 0],
        x: [0, 20, 0],
        rotate: [rotate, rotate + 10, rotate]
      }}
      transition={{ 
        duration: 8 + Math.random() * 5, 
        repeat: Infinity, 
        delay: delay,
        ease: "easeInOut" 
      }}
      className="absolute pointer-events-none select-none text-blue-600/30 dark:text-blue-400/20"
      style={{ left: x, top: y }}
    >
      {Icon ? <Icon size={size} /> : <span className="font-black font-bold text-2xl italic">{text}</span>}
    </motion.div>
  );

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-[#020617] relative overflow-hidden font-sans selection:bg-blue-500 selection:text-white">
      
      {/* === BACKGROUND DECORATION (FLOATING ELEMENTS) === */}
      {isClient && (
        <div className="absolute inset-0 z-0">
           {/* Icons */}
           <FloatingElement icon={Pencil} x="10%" y="20%" delay={0} size={40} rotate={-15} />
           <FloatingElement icon={Book} x="85%" y="15%" delay={2} size={48} rotate={10} />
           <FloatingElement icon={Globe} x="15%" y="75%" delay={1} size={42} />
           <FloatingElement icon={Ruler} x="80%" y="80%" delay={3} size={36} rotate={45} />
           <FloatingElement icon={Calculator} x="70%" y="10%" delay={4} size={38} />
           <FloatingElement icon={Microscope} x="20%" y="40%" delay={5} size={40} />
           <FloatingElement icon={Atom} x="75%" y="50%" delay={1.5} size={44} />
           <FloatingElement icon={GraduationCap} x="5%" y="50%" delay={2.5} size={50} rotate={-5} />

           {/* Formulas/Text */}
           <FloatingElement text="E=mc²" x="40%" y="15%" delay={0.5} />
           <FloatingElement text="∫dx" x="60%" y="85%" delay={2.5} />
           <FloatingElement text="πr²" x="5%" y="10%" delay={3.5} />
           <FloatingElement text="∑n" x="90%" y="40%" delay={1} />
           <FloatingElement text="sin θ" x="30%" y="90%" delay={4.5} />
           <FloatingElement text="H₂O" x="50%" y="5%" delay={2} />

           {/* Soft Gradients */}
           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-[120px] opacity-60" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[120px] opacity-60" />
        </div>
      )}

      {/* === LOGIN CARD CONTAINER === */}
      <div className="relative z-10 w-full max-w-[380px] px-6">
        
        {/* === DETECTIVE CHARACTER (THE MASCOT) === */}
        <AnimatePresence>
          {isPasswordFocused && (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute -right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center pointer-events-none"
            >
              <div className="w-12 h-4 bg-slate-800 dark:bg-slate-700 rounded-full mb-[-4px] relative z-20" />
              <div className="w-8 h-6 bg-slate-800 dark:bg-slate-700 rounded-t-lg relative z-20" />
              <div className="w-10 h-10 bg-orange-100 dark:bg-slate-800 rounded-full border-2 border-slate-800 dark:border-slate-600 mt-[-2px] relative z-10 flex flex-col items-center justify-center overflow-hidden">
                 <div className="flex gap-2 mt-1">
                    <motion.div animate={{ scaleY: [1, 0.1, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full" />
                    <motion.div animate={{ scaleY: [1, 0.1, 1] }} transition={{ repeat: Infinity, duration: 3, delay: 0.1 }} className="w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full" />
                 </div>
              </div>
              <motion.div 
                animate={{ rotate: [0, -10, 10, 0], x: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-2 text-slate-800 dark:text-slate-400"
              >
                <Search size={32} className="stroke-[3px]" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
           {/* FORM */}
           <form onSubmit={handleLogin} className="space-y-6">
              <div className="mb-8 text-center">
                 <div className="inline-block p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 mb-2">
                    <Sparkles size={20} />
                 </div>
                 <p className="text-[9px] font-black font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">Identity Verification</p>
              </div>
              
              <div className="space-y-2">
                  <label className="text-[10px] font-black font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <User size={12} className="text-blue-500" /> Username
                  </label>
                  <input 
                    name="username"
                    type="text" 
                    placeholder="ID Pengurus" 
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-400 font-bold text-sm"
                    required
                  />
              </div>

              <div className="space-y-2">
                  <label className="text-[10px] font-black font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <Lock size={12} className="text-blue-500" /> Kata Sandi
                  </label>
                  <input 
                    name="password"
                    type="password" 
                    placeholder="••••••••" 
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-400 font-bold text-sm"
                    required
                  />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 mt-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black font-bold tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 group text-sm"
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
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-[10px] font-black font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all group uppercase tracking-widest shadow-sm active:scale-[0.98]"
              >
                  <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
                  Kembali ke Beranda
              </Link>
           </div>
        </motion.div>

        {/* Footer Info */}
        <p className="mt-8 text-center text-[9px] font-black font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em]">
          © 2026 SMK NURUL ISLAM • OSKA SYSTEM
        </p>
      </div>
    </div>
  );
}
