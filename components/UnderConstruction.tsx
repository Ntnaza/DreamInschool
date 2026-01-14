"use client";

import { motion } from "framer-motion";
import { Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  title?: string;
  message?: string;
}

export default function UnderConstruction({ 
  title = "Sedang Dalam Pengerjaan", 
  message = "Fitur ini sedang dibangun oleh tim developer (Koh Raka). Segera hadir dalam update berikutnya!" 
}: Props) {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center p-6">
      
      {/* Animated Icon */}
      <div className="relative mb-8">
         <motion.div 
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 h-32 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-500"
         >
            <Construction size={64} strokeWidth={1.5} />
         </motion.div>
         {/* Particle Effects */}
         <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 left-0 w-32 h-32 border-4 border-yellow-200 dark:border-yellow-500/10 rounded-full"
         />
      </div>

      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3">
          {title}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
          {message}
        </p>

        {/* Action Button */}
        <Link href="/admin" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold transition-transform active:scale-95 hover:shadow-lg">
           <ArrowLeft size={18} /> Kembali ke Dashboard
        </Link>
      </motion.div>

    </div>
  );
}