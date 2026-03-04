"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bell, Inbox, CheckCircle, MessageSquare, ChevronRight, Send, Loader2, X, Clock
} from "lucide-react";
import { replyAspirasi } from "@/lib/actions";
import { showToast } from "@/components/Toast";
import { useRouter } from "next/navigation";

export default function DashboardBell({ stats, aspirasi }: { stats: any, aspirasi: any[] }) {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotifOpen(false);
        setReplyingTo(null);
        setReplyText("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleReply = async (id: number) => {
    if (!replyText.trim()) return;
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("id", id.toString());
    formData.append("balasan", replyText);
    const res = await replyAspirasi(formData);
    if (res.success) {
      setReplyingTo(null);
      setReplyText("");
      showToast("Balasan berhasil dikirim!", "success");
    } else {
      showToast("Gagal membalas: " + res.message, "error");
    }
    setIsSubmitting(false);
  };

  const formatDateShort = (date: Date | null) => {
    if (!date) return "TBA";
    return new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
  };

  return (
    <div className="relative z-50" ref={notifRef}>
      <button 
        onClick={() => {
          setIsNotifOpen(!isNotifOpen);
          if (isNotifOpen) {
            setReplyingTo(null);
            setReplyText("");
          }
        }} 
        className={`tour-notif-bell w-10 h-10 rounded-lg border flex items-center justify-center relative shadow-sm transition-all active:scale-95 ${
          isNotifOpen 
          ? "bg-blue-50 border-blue-200 text-blue-600 dark:bg-blue-500/20 dark:border-blue-500/30 dark:text-blue-400" 
          : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 hover:shadow-md hover:bg-slate-50"
        }`}
      >
        <Bell size={20} />
        {stats.aspirasiBaru > 0 && <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-[#0f172a] animate-pulse" />}
      </button>

      <AnimatePresence>
        {isNotifOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 top-12 w-80 md:w-[420px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="p-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50/50 dark:bg-white/5">
                <div className="flex items-center gap-2">
                   <Inbox size={18} className="text-blue-600" />
                   <h3 className="font-bold text-slate-900 dark:text-white text-sm">Aspirasi Terbaru</h3>
                </div>
                <span className="text-[10px] font-bold bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full">
                  {stats.aspirasiBaru} Baru
                </span>
            </div>
            <div className="max-h-[450px] overflow-y-auto custom-scrollbar p-2 space-y-2 text-left">
               {aspirasi.length > 0 ? (
                 aspirasi.map((item, i) => (
                   <div key={i} className={`p-3 rounded-xl transition-all border ${replyingTo === item.id ? "bg-blue-50/50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30" : "hover:bg-slate-50 dark:hover:bg-white/5 border-transparent hover:border-slate-100 dark:hover:border-white/5"}`}>
                      <div className="flex items-start gap-3">
                         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shrink-0">{item.pengirim.charAt(0)}</div>
                         <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                               <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">{item.pengirim}</h4>
                               <span className="text-[9px] text-slate-400">{formatDateShort(item.createdAt)}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">{item.isi}</p>
                            <div className="mt-2 flex justify-end">
                               <button onClick={() => setReplyingTo(replyingTo === item.id ? null : item.id)} className="text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                                  <MessageSquare size={12} /> {replyingTo === item.id ? "Batal" : "Balas"}
                               </button>
                            </div>
                            {replyingTo === item.id && (
                              <div className="mt-3 space-y-2">
                                <textarea autoFocus value={replyText} onChange={(e) => setReplyText(e.target.value)} placeholder="Jawaban..." className="w-full p-2 text-xs rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none resize-none h-20" />
                                <div className="flex justify-end">
                                  <button disabled={isSubmitting || !replyText.trim()} onClick={() => handleReply(item.id)} className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-2">
                                    {isSubmitting ? <Loader2 size={12} className="animate-spin" /> : <Send size={12} />} Kirim
                                  </button>
                                </div>
                              </div>
                            )}
                         </div>
                      </div>
                   </div>
                 ))
               ) : (
                 <div className="py-8 text-center"><p className="text-xs text-slate-500">Belum ada aspirasi.</p></div>
               )}
            </div>
            <button onClick={() => { router.push('/admin/aspirasi'); setIsNotifOpen(false); }} className="w-full p-3 text-center text-xs font-bold text-blue-600 border-t border-slate-100 dark:border-white/5 hover:bg-slate-50 transition-colors">Lihat Semua</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
