"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from "lucide-react";

// TIPE DATA NOTIFIKASI
export type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
  title?: string;
}

// EVENT SYSTEM
let toastCount = 0;
const observers: ((toast: Toast) => void)[] = [];

export const showToast = (message: string, type: ToastType = "success", title?: string) => {
  const id = ++toastCount;
  const newToast = { id, message, type, title };
  observers.forEach((cb) => cb(newToast));
};

export default function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Toast) => {
    setToasts((prev) => [...prev, toast]);
    setTimeout(() => removeToast(toast.id), 5000);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    observers.push(addToast);
    return () => {
      const index = observers.indexOf(addToast);
      if (index > -1) observers.splice(index, 1);
    };
  }, [addToast]);

  const icons = {
    success: <CheckCircle2 className="text-emerald-500" size={20} />,
    error: <XCircle className="text-rose-500" size={20} />,
    warning: <AlertTriangle className="text-amber-500" size={20} />,
    info: <Info className="text-sky-500" size={20} />,
  };

  const glows = {
    success: "shadow-emerald-500/10 dark:shadow-emerald-500/5",
    error: "shadow-rose-500/10 dark:shadow-rose-500/5",
    warning: "shadow-amber-500/10 dark:shadow-amber-500/5",
    info: "shadow-sky-500/10 dark:shadow-sky-500/5",
  };

  return (
    <div className="fixed top-6 right-6 z-[99999] flex flex-col gap-3 pointer-events-none w-[calc(100%-48px)] max-w-[380px]">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            layout
            initial={{ opacity: 0, y: -20, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9, transition: { duration: 0.2 } }}
            className={`pointer-events-auto relative flex items-center gap-4 p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f172a] shadow-2xl ${glows[toast.type]}`}
          >
            {/* ICON WRAPPER (Neutral BG, Colored Icon) */}
            <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center border border-slate-100 dark:border-white/5">
                {icons[toast.type]}
            </div>
            
            {/* TEXT CONTENT */}
            <div className="flex-1 min-w-0 py-0.5">
              <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] mb-0.5">
                {toast.title || (toast.type === 'success' ? 'Berhasil' : toast.type === 'error' ? 'Gagal' : 'Informasi')}
              </h4>
              <p className="text-[13px] font-bold text-slate-700 dark:text-slate-200 leading-tight truncate">
                {toast.message}
              </p>
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => removeToast(toast.id)}
              className="shrink-0 p-1.5 rounded-lg text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
            >
              <X size={14} />
            </button>
            
            {/* ACCENT PROGRESS BAR (Indikator Warna Tetap Ada di Sini) */}
            <div className="absolute bottom-0 left-4 right-4 h-[2px] overflow-hidden rounded-full bg-slate-100 dark:bg-white/5">
                <motion.div 
                    initial={{ scaleX: 1 }}
                    animate={{ scaleX: 0 }}
                    transition={{ duration: 5, ease: "linear" }}
                    className={`h-full origin-left ${
                        toast.type === "success" ? "bg-emerald-500" :
                        toast.type === "error" ? "bg-rose-500" :
                        toast.type === "warning" ? "bg-amber-500" : "bg-sky-500"
                    }`}
                />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
