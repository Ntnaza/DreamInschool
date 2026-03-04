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

// EVENT SYSTEM (Agar bisa dipanggil dari mana saja tanpa Context yang berat)
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
    // Auto remove setelah 5 detik
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
    error: <XCircle className="text-red-500" size={20} />,
    warning: <AlertTriangle className="text-amber-500" size={20} />,
    info: <Info className="text-blue-500" size={20} />,
  };

  const colors = {
    success: "border-emerald-500/20 bg-emerald-50/80 dark:bg-emerald-500/5",
    error: "border-red-500/20 bg-red-50/80 dark:bg-red-500/5",
    warning: "border-amber-500/20 bg-amber-50/80 dark:bg-amber-500/5",
    info: "border-blue-500/20 bg-blue-50/80 dark:bg-blue-500/5",
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none sm:min-w-[320px] max-w-[400px]">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            layout
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95, transition: { duration: 0.2 } }}
            className={`pointer-events-auto relative group flex items-start gap-3 p-4 rounded-2xl border backdrop-blur-xl shadow-lg transition-all ${colors[toast.type]}`}
          >
            <div className="mt-0.5 shrink-0">{icons[toast.type]}</div>
            
            <div className="flex-1 pr-4">
              {toast.title && (
                <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-0.5">
                  {toast.title}
                </h4>
              )}
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                {toast.message}
              </p>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="absolute top-3 right-3 p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors"
            >
              <X size={14} />
            </button>
            
            {/* PROGRESS BAR (Visual feedback untuk auto-remove) */}
            <motion.div 
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 5, ease: "linear" }}
              className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full origin-left opacity-30 ${
                toast.type === "success" ? "bg-emerald-500" :
                toast.type === "error" ? "bg-red-500" :
                toast.type === "warning" ? "bg-amber-500" : "bg-blue-500"
              }`}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
