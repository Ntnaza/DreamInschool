"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#020617] flex items-center justify-center relative overflow-hidden font-sans selection:bg-blue-500 selection:text-white">
      
      {/* DEKORASI BACKGROUND (BLOB & GLOW) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.svg')] opacity-[0.05] mix-blend-overlay z-0 pointer-events-none" />
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[120px] z-0 animate-pulse" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          
          {/* ILUSTRASI 404 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <h1 className="text-[12rem] md:text-[18rem] font-bold text-white/5 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="text-blue-500"
              >
                <Ghost size={120} strokeWidth={1} className="drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
              </motion.div>
            </div>
          </motion.div>

          {/* TEKS PESAN */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Halaman Menghilang ke Angkasa! 🚀
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto leading-relaxed font-medium text-center">
              Sepertinya alamat yang Anda tuju tidak tersedia atau telah dipindahkan ke dimensi lain. Jangan khawatir, mari kembali ke orbit.
            </p>
          </motion.div>

          {/* TOMBOL AKSI */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link 
              href="/"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-sm flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20 group"
            >
              <Home size={18} />
              Kembali ke Beranda
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-sm flex items-center gap-3 transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
            >
              <ArrowLeft size={18} />
              Sebelumnya
            </button>
          </motion.div>

          {/* FOOTER KECIL */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1 }}
            className="text-[10px] text-white uppercase tracking-[0.4em] pt-12 font-bold text-center"
          >
            Orbit System • SMK Nurul Islam
          </motion.p>

        </div>
      </div>

    </main>
  );
}
