"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom"; // IMPORT INI
import { motion, AnimatePresence } from "framer-motion";
import { Info, X, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";

interface GuideFeature {
  label: string;
  desc: string;
}

interface PageGuideProps {
  title: string;
  description: string;
  features: GuideFeature[];
}

export default function PageGuide({ title, description, features }: PageGuideProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Pastikan Portal hanya jalan di Client-Side
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative z-40">
      {/* TRIGGER BUTTON (Tetap di tempat asalnya) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-white/5 border border-blue-200 dark:border-white/10 rounded-full shadow-sm hover:shadow-md hover:border-blue-400 transition-all active:scale-95"
      >
        <div className="relative">
            <Info size={16} className="text-blue-600 dark:text-blue-400" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
        </div>
        <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Panduan Halaman
        </span>
      </button>

      {/* OVERLAY PANDUAN (Dipindahkan ke Body pakai Portal) */}
      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop Gelap (z-index super tinggi) */}
              <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99998]"
              />

              {/* Content Card */}
              <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }} 
                  animate={{ opacity: 1, scale: 1, y: 0 }} 
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 z-[99999] overflow-hidden"
              >
                  {/* Header with Gradient */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                      
                      <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 p-1 bg-white/20 hover:bg-white/30 rounded-full transition-colors text-white">
                          <X size={18} />
                      </button>

                      <div className="flex items-start gap-4 relative z-10">
                          <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl shadow-inner border border-white/20">
                              <Lightbulb size={28} className="text-yellow-300 fill-yellow-300" />
                          </div>
                          <div>
                              <h2 className="text-xl font-black font-bold tracking-tight">{title}</h2>
                              <p className="text-blue-100 text-xs mt-1 leading-relaxed font-medium opacity-90">{description}</p>
                          </div>
                      </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 bg-slate-50 dark:bg-[#0b1121]">
                      <h3 className="text-xs font-black font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">Fitur Utama & Cara Pakai</h3>
                      
                      <div className="space-y-3">
                          {features.map((feature, idx) => (
                              <div key={idx} className="flex gap-4 p-3 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5 hover:border-blue-300 transition-colors group">
                                  <div className="mt-0.5 shrink-0">
                                      <CheckCircle2 size={18} className="text-green-500" />
                                  </div>
                                  <div>
                                      <h4 className="text-xs font-black font-bold text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors">
                                          {feature.label}
                                      </h4>
                                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                          {feature.desc}
                                      </p>
                                  </div>
                              </div>
                          ))}
                      </div>

                      <div className="mt-6 flex justify-end">
                          <button 
                              onClick={() => setIsOpen(false)}
                              className="px-6 py-2.5 bg-slate-900 hover:bg-black dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 text-white rounded-xl text-xs font-bold shadow-lg transition-transform active:scale-95 flex items-center gap-2"
                          >
                              Saya Mengerti <ArrowRight size={14}/>
                          </button>
                      </div>
                  </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body // TARGET RENDER KE BODY
      )}
    </div>
  );
}