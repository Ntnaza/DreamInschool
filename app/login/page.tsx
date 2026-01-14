"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Buat pindah halaman
import { loginAction } from "@/lib/auth"; // Import Server Action tadi

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Hook router
  
  // State Bintang
  const [stars, setStars] = useState<{ 
    id: number;
    width: string; 
    height: string; 
    top: string; 
    left: string; 
    duration: number;
    delay: number;
  }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      width: Math.random() * 3 + 1 + 'px', 
      height: Math.random() * 3 + 1 + 'px',
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      duration: Math.random() * 3 + 2, 
      delay: Math.random() * 5 
    }));
    setStars(generatedStars);
  }, []);

  // === HANDLE LOGIN BARU ===
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Ambil data dari form
    const formData = new FormData(e.currentTarget);

    // Panggil Server Action
    const result = await loginAction(formData);

    if (result.success) {
       // Kalau sukses, tunggu bentar biar animasi loading kerasa, lalu pindah
       setTimeout(() => {
         router.push("/admin"); // PINDAH KE DASHBOARD
       }, 1500);
    } else {
       alert(result.message); // Munculkan pesan error
       setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#020617] relative overflow-hidden font-sans">
      
      {/* === BACKGROUND SPACE ALIVE === */}
      <div className="absolute inset-0 z-0">
         {stars.map((star) => (
            <motion.div 
              key={star.id}
              className="absolute bg-white rounded-full shadow-[0_0_4px_rgba(255,255,255,0.8)]"
              style={{ width: star.width, height: star.height, top: star.top, left: star.left }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
              transition={{ duration: star.duration, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
            />
         ))}
         <motion.div 
           animate={{ x: ["-10%", "10%", "-10%"], y: ["0%", "5%", "0%"], rotate: [-5, 5, -5] }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[-30%] left-[-20%] w-[150vw] h-[60vh] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-transparent blur-[120px] transform -rotate-12 opacity-60" 
         />
         <motion.div 
           animate={{ x: ["10%", "-10%", "10%"], y: ["0%", "-5%", "0%"], rotate: [5, -5, 5] }}
           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
           className="absolute bottom-[-30%] right-[-20%] w-[150vw] h-[60vh] bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-transparent blur-[120px] transform rotate-12 opacity-50" 
         />
      </div>

      {/* === LOGIN CARD === */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md p-4"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50 opacity-30 blur-xl animate-pulse" />
        
        <div className="relative bg-[#0a0f1e]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden">
           
           <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full border border-white/5" />
           <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full border-b border-blue-500/30 animate-spin duration-[15s]" />

           {/* HEADER */}
           <div className="text-center mb-10">
             <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 mb-4 shadow-[0_0_25px_rgba(59,130,246,0.4)] border border-blue-500/20 p-1">
               <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-black/20">
                  <span className="text-xs font-black text-blue-300 text-center leading-tight">LOGO<br/>OSKA</span>
               </div>
             </div>
             <h2 className="text-3xl font-black text-white tracking-tight">ORBIT <span className="text-blue-500">ACCESS</span></h2>
             <p className="text-blue-200/60 text-sm mt-2 font-medium tracking-wide">
               GERBANG DIGITAL SMK NURUL ISLAM
             </p>
           </div>

           {/* FORM */}
           <form onSubmit={handleLogin} className="space-y-6">
              
              {/* INPUT USERNAME */}
              <div className="space-y-2 group">
                  <label className="text-[10px] font-bold text-blue-300 uppercase tracking-widest ml-1">ID Pengurus / Username</label>
                  <div className="relative">
                    <input 
                      name="username" // WAJIB ADA NAME
                      type="text" 
                      placeholder="Masukkan ID (ex: engkoh)" 
                      className="w-full bg-[#020617]/50 border border-blue-900/30 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-400 focus:bg-blue-900/30 transition-all placeholder:text-slate-500"
                      required
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full opacity-50 group-focus-within:opacity-100 group-focus-within:shadow-[0_0_10px_#3b82f6]" />
                  </div>
              </div>

              {/* INPUT PASSWORD */}
              <div className="space-y-2 group">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Sandi Keamanan</label>
                  </div>
                  <div className="relative">
                    <input 
                      name="password" // WAJIB ADA NAME
                      type="password" 
                      placeholder="••••••••" 
                      className="w-full bg-[#020617]/50 border border-blue-900/30 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-purple-400 focus:bg-blue-900/30 transition-all placeholder:text-slate-500"
                      required
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full opacity-50 group-focus-within:opacity-100 group-focus-within:shadow-[0_0_10px_#a855f7]" />
                  </div>
              </div>

              {/* TOMBOL LOGIN */}
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-4 mt-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_100%] hover:bg-[100%_0] text-white font-bold tracking-wide shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform active:scale-[0.98] transition-all duration-500 flex items-center justify-center gap-2 group disabled:opacity-70 cursor-pointer disabled:cursor-wait"
              >
                {isLoading ? (
                   <span className="flex items-center gap-2">
                     <span className="w-2 h-2 bg-white rounded-full animate-bounce" />
                     <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-75" />
                     <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150" />
                   </span>
                ) : (
                   <>
                     LOGIN SYSTEM <span className="group-hover:translate-x-1 transition-transform">➜</span>
                   </>
                )}
              </button>

           </form>

           <div className="mt-8 text-center">
              <Link href="/" className="inline-block text-xs font-bold text-slate-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">
                  BATALKAN & KEMBALI
              </Link>
           </div>

        </div>
      </motion.div>

    </div>
  );
}