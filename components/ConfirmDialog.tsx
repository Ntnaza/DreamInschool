"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Trash2, HelpCircle, X } from "lucide-react";

interface ConfirmOptions {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: "danger" | "warning" | "info";
  onConfirm: () => void;
  onCancel?: () => void;
}

const observers: ((options: ConfirmOptions | null) => void)[] = [];

export const showConfirm = (options: ConfirmOptions) => {
  observers.forEach((cb) => cb(options));
};

export default function ConfirmDialog() {
  const [config, setConfig] = useState<ConfirmOptions | null>(null);

  useEffect(() => {
    const observer = (options: ConfirmOptions | null) => setConfig(options);
    observers.push(observer);
    return () => {
      const index = observers.indexOf(observer);
      if (index > -1) observers.splice(index, 1);
    };
  }, []);

  const close = () => setConfig(null);

  const handleConfirm = () => {
    if (config?.onConfirm) config.onConfirm();
    close();
  };

  const handleCancel = () => {
    if (config?.onCancel) config.onCancel();
    close();
  };

  const themes = {
    danger: {
      icon: <Trash2 className="text-rose-500" size={32} />,
      bg: "bg-rose-500/10",
      glow: "shadow-rose-500/20",
      button: "bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 shadow-rose-500/25",
      border: "border-rose-500/20"
    },
    warning: {
      icon: <AlertTriangle className="text-amber-500" size={32} />,
      bg: "bg-amber-500/10",
      glow: "shadow-amber-500/20",
      button: "bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 shadow-amber-500/25",
      border: "border-amber-500/20"
    },
    info: {
      icon: <HelpCircle className="text-blue-500" size={32} />,
      bg: "bg-blue-500/10",
      glow: "shadow-blue-500/20",
      button: "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-blue-500/25",
      border: "border-blue-500/20"
    }
  };

  const currentTheme = themes[config?.type || "danger"];

  return (
    <AnimatePresence>
      {config && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-6">
          {/* OVERLAY DENGAN BLUR LEBIH PEKAT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCancel}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
          />

          {/* MAIN MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40, rotateX: 15 }}
            animate={{ 
              opacity: 1, scale: 1, y: 0, rotateX: 0,
              transition: { type: "spring", damping: 20, stiffness: 300 }
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } }}
            className="relative w-full max-w-[440px] perspective-1000"
          >
            <div className={`relative bg-white dark:bg-[#0f172a] rounded-3xl border-2 ${currentTheme.border} shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)] p-10 overflow-hidden`}>
              
              {/* ACCENT BACKGROUND BLOB */}
              <div className={`absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[80px] opacity-20 ${currentTheme.bg}`} />

              <div className="flex flex-col items-center text-center relative z-10">
                {/* FLOATING ICON WITH PULSE */}
                <motion.div 
                  initial={{ y: 0 }}
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-24 h-24 rounded-2xl ${currentTheme.bg} flex items-center justify-center mb-8 border border-white dark:border-white/10 shadow-2xl relative`}
                >
                   {/* PULSE EFFECT */}
                   <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 rounded-2xl ${currentTheme.bg}`}
                   />
                   {currentTheme.icon}
                </motion.div>

                {/* TEXT CONTENT */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                  {config.title}
                </h3>
                
                <p className="text-[15px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed mb-10 px-4">
                  {config.message}
                </p>

                {/* ACTION BUTTONS */}
                <div className="flex w-full gap-4">
                  <button
                    onClick={handleCancel}
                    className="flex-1 py-4 rounded-2xl text-[13px] font-bold text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-all active:scale-95 border border-transparent hover:border-slate-100 dark:hover:border-white/5"
                  >
                    {config.cancelText || "Batal"}
                  </button>
                  <button
                    onClick={handleConfirm}
                    className={`flex-1 py-4 rounded-2xl text-[13px] font-bold text-white shadow-xl transition-all active:scale-110 active:scale-95 ${currentTheme.button}`}
                  >
                    {config.confirmText || "Lanjutkan"}
                  </button>
                </div>
              </div>

              {/* WATERMARK LOGO */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] dark:opacity-[0.07] pointer-events-none rotate-12">
                  <Trash2 size={240} className="text-slate-900 dark:text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
