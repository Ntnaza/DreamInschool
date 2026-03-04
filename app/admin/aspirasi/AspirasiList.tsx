"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Filter, Trash2, CheckCircle, MessageSquare, 
  AlertCircle, Send, Reply,
  Inbox, User, Calendar, Tag, Clock, Loader2,
  CheckCircle2, Info
} from "lucide-react";
import TourGuide from "@/components/TourGuide";
import { deleteAspirasi, replyAspirasi } from "@/lib/actions"; 
import { showToast } from "@/components/Toast";

// Helper Warna Tag
const tagColorMap: any = {
  orange: "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300 border-orange-200/50",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 border-purple-200/50",
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 border-blue-200/50",
  green: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300 border-green-200/50",
  slate: "bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-300 border-slate-200/50",
};

const getTagColor = (cat: string) => {
  const c = cat.toLowerCase();
  if (c.includes('sarana')) return 'orange';
  if (c.includes('event')) return 'purple';
  if (c.includes('kurikulum')) return 'blue';
  return 'slate';
};

const formatDateFull = (date: Date) => {
  return new Date(date).toLocaleDateString('id-ID', { 
    day: 'numeric', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
};

const formatDateShort = (date: Date) => {
  return new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
};

export default function AspirasiList({ initialData }: { initialData: any[] }) {
  const [messages, setMessages] = useState(initialData);
  const [selectedTab, setSelectedTab] = useState("all"); 
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(initialData.length > 0 ? initialData[0].id : null);
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [replyText, setReplyText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => { 
    setIsClient(true); 
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 800);

    if (initialData.length > 0 && !selectedId) {
        setSelectedId(initialData[0].id);
    }
    return () => clearTimeout(timer);
  }, [initialData, selectedId]);

  const filteredMessages = messages.filter((msg) => {
    const isDone = msg.status === 'SELESAI';
    const matchesTab = 
      selectedTab === "all" ? !isDone : 
      selectedTab === "done" ? isDone :
      selectedTab === "unread" ? msg.status === "PENDING" : true;
    
    const matchesSearch = 
      msg.pengirim.toLowerCase().includes(searchQuery.toLowerCase()) || 
      msg.isi.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const selectedMsg = messages.find(m => m.id === selectedId);

  const handleDelete = async (id: number) => {
    if(confirm("Hapus pesan ini secara permanen?")) {
      const originalMessages = [...messages];
      const newMessages = messages.filter(m => m.id !== id);
      setMessages(newMessages);
      if (selectedId === id) {
        setSelectedId(newMessages.length > 0 ? newMessages[0].id : null);
      }
      try {
        const res = await deleteAspirasi(id);
        if (res.success) {
          showToast("Aspirasi telah dihapus.", "success");
        } else {
          setMessages(originalMessages);
          showToast(res.message, "error");
        }
      } catch (err) {
        setMessages(originalMessages);
        showToast("Gagal menghapus aspirasi.", "error");
      }
    }
  };

  const handleSendReply = async () => {
    if (!replyText.trim() || !selectedId) return;
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append("id", selectedId.toString());
    formData.append("balasan", replyText);

    try {
      const res = await replyAspirasi(formData);
      if (res.success) {
          setMessages(messages.map(m => m.id === selectedId ? { ...m, status: "SELESAI", balasan: replyText, balasanAt: new Date() } : m));
          setReplyText("");
          showToast("Balasan terkirim! ✅", "success");
      } else {
          showToast("Gagal: " + res.message, "error");
      }
    } catch (err) {
      showToast("Terjadi kesalahan sistem.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inboxTourSteps = [
    { target: '.tour-inbox-header', content: 'Pusat Manajemen Aspirasi Siswa.', disableBeacon: true },
    { target: '.tour-tab-nav', content: 'Gunakan folder ini untuk memisahkan pesan masuk dan arsip selesai.', placement: 'right' as const },
    { target: '.tour-message-list', content: 'Daftar pesan masuk. Klik salah satu untuk membaca detailnya.', placement: 'right' as const },
    { target: '.tour-message-detail', content: 'Baca isi lengkap aspirasi dan berikan jawaban langsung di panel ini.', placement: 'left' as const },
  ];

  return (
    <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-0">
        <div className="w-full md:w-[420px] flex flex-col gap-4 flex-shrink-0">
           <div className="tour-tab-nav space-y-4">
              <div className="relative group">
                 <input 
                   type="text" 
                   placeholder="Cari aspirasi..." 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/10 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm font-bold text-slate-700 dark:text-white shadow-sm"
                 />
                 <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              </div>

              <div className="flex p-1 bg-slate-100 dark:bg-white/5 rounded-2xl border border-slate-200/50 dark:border-white/5">
                 {[
                   { id: "all", label: "Masuk", icon: Inbox },
                   { id: "unread", label: "Baru", icon: AlertCircle },
                   { id: "done", label: "Selesai", icon: CheckCircle2 },
                 ].map((tab) => (
                   <button 
                     key={tab.id}
                     onClick={() => setSelectedTab(tab.id)}
                     className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-black font-bold transition-all
                       ${selectedTab === tab.id 
                         ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm border border-slate-100 dark:border-white/5" 
                         : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                       }
                     `}
                   >
                      <tab.icon size={14} />
                      {tab.label}
                   </button>
                 ))}
              </div>
           </div>

           <div className="tour-message-list flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-3">
              <AnimatePresence mode="popLayout">
                 {filteredMessages.length > 0 ? (
                   filteredMessages.map((msg) => (
                     <motion.div 
                       key={msg.id}
                       layout
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0, scale: 0.95 }}
                       onClick={() => setSelectedId(msg.id)}
                       className={`group p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden
                         ${selectedId === msg.id 
                           ? "bg-white dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/40 shadow-md ring-1 ring-blue-50 dark:ring-0" 
                           : "bg-white/50 dark:bg-white/5 border-slate-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/10"
                         }
                       `}
                     >
                        {msg.status === 'PENDING' && (
                          <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white dark:border-slate-900 shadow-sm z-10" />
                        )}

                        <div className="flex justify-between items-start mb-2">
                           <div className="flex items-center gap-2">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black font-bold text-white shadow-sm bg-gradient-to-br from-slate-400 to-slate-600`}>
                                 {msg.pengirim.charAt(0)}
                              </div>
                              <div className="min-w-0">
                                 <h4 className={`text-xs truncate font-black font-bold ${selectedId === msg.id ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-white"}`}>
                                   {msg.pengirim}
                                 </h4>
                                 <p className="text-[10px] text-slate-400 font-medium">{msg.kelas || "Siswa"}</p>
                              </div>
                           </div>
                           <span className="text-[9px] font-bold text-slate-400 shrink-0">{formatDateShort(msg.createdAt)}</span>
                        </div>
                        <p className={`text-[11px] leading-relaxed line-clamp-2 ${selectedId === msg.id ? "text-slate-700 dark:text-slate-200" : "text-slate-500 dark:text-slate-400"}`}>
                           {msg.isi}
                        </p>
                     </motion.div>
                   ))
                 ) : (
                   <div className="flex flex-col items-center justify-center py-20 text-center opacity-50">
                      <Inbox size={40} className="mb-4 text-slate-300" />
                      <p className="text-xs font-bold text-slate-500">Tidak ada aspirasi.</p>
                   </div>
                 )}
              </AnimatePresence>
           </div>
        </div>

        <div className="tour-message-detail hidden md:flex flex-1 bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-sm flex flex-col relative min-w-0">
           <AnimatePresence mode="wait">
              {selectedMsg ? (
                 <motion.div 
                   key={selectedMsg.id}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="flex-1 flex flex-col min-h-0"
                 >
                    <div className="p-8 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 flex-shrink-0">
                       <div className="flex justify-between items-start mb-6">
                          <div className="flex items-center gap-4">
                             <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-black font-bold shadow-lg shadow-blue-500/20">
                                {selectedMsg.pengirim.charAt(0)}
                             </div>
                             <div>
                                <h2 className="text-xl font-black font-bold text-slate-900 dark:text-white">{selectedMsg.pengirim}</h2>
                                <p className="text-sm font-bold text-blue-600 dark:text-blue-400">{selectedMsg.kelas || "Siswa Anonim"}</p>
                             </div>
                          </div>
                          <div className="flex gap-2">
                             <button onClick={() => handleDelete(selectedMsg.id)} className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-400 hover:text-red-500 hover:border-red-500 transition-all shadow-sm active:scale-90">
                                <Trash2 size={20} />
                             </button>
                          </div>
                       </div>

                       <div className="flex flex-wrap gap-3">
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200/50 dark:border-white/10 shadow-sm">
                             <Tag size={14} className="text-slate-400" />
                             <span className={`text-[10px] font-black font-bold uppercase tracking-wider ${tagColorMap[getTagColor(selectedMsg.kategori)]} px-2 py-0.5 rounded-md border`}>
                                {selectedMsg.kategori}
                             </span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200/50 dark:border-white/10 shadow-sm">
                             <Calendar size={14} className="text-slate-400" />
                             <span className="text-[10px] font-black font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">{formatDateFull(selectedMsg.createdAt)}</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200/50 dark:border-white/10 shadow-sm">
                             <Clock size={14} className="text-slate-400" />
                             <span className={`text-[10px] font-black font-bold uppercase tracking-wider ${selectedMsg.status === 'SELESAI' ? 'text-green-500' : 'text-blue-500'}`}>
                                {selectedMsg.status === 'SELESAI' ? 'TERJAWAB' : 'MENUNGGU BALASAN'}
                             </span>
                          </div>
                       </div>
                    </div>

                    <div className="flex-1 p-8 overflow-y-auto custom-scrollbar space-y-8 min-h-0">
                       <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-[2rem] border border-slate-100 dark:border-white/5 relative">
                          <div className="absolute -top-3 left-6 px-3 py-1 bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/10 rounded-lg text-[10px] font-black font-bold text-slate-400 uppercase tracking-widest">Aspirasi</div>
                          <p className="text-sm md:text-md leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
                             {selectedMsg.isi}
                          </p>
                       </div>

                       {selectedMsg.status === 'SELESAI' && selectedMsg.balasan && (
                         <div className="bg-blue-50/50 dark:bg-blue-500/5 p-6 rounded-[2rem] border border-blue-100/50 dark:border-blue-500/20 relative ml-8">
                            <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-white rounded-lg text-[10px] font-black font-bold uppercase tracking-widest shadow-lg shadow-blue-500/20 flex items-center gap-2">
                               <Reply size={10} className="-scale-x-100" /> Jawaban Admin
                            </div>
                            <p className="text-sm text-blue-900 dark:text-blue-100 font-bold leading-relaxed">
                               {selectedMsg.balasan}
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                               <CheckCircle size={12} /> Dibalas pada {formatDateFull(selectedMsg.balasanAt || new Date())}
                            </div>
                         </div>
                       )}

                       {selectedMsg.status !== 'SELESAI' && (
                          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5 pb-10">
                             <div className="flex items-center gap-2 mb-4">
                                <MessageSquare size={18} className="text-blue-500" />
                                <h3 className="text-sm font-black font-bold text-slate-800 dark:text-white uppercase tracking-widest">Tulis Tanggapan</h3>
                             </div>
                             <div className="relative group">
                                <textarea 
                                  value={replyText}
                                  onChange={(e) => setReplyText(e.target.value)}
                                  placeholder={`Ketik jawaban untuk ${selectedMsg.pengirim}...`}
                                  className="w-full p-5 rounded-3xl bg-white dark:bg-black/20 border-2 border-slate-100 dark:border-white/5 focus:border-blue-500 dark:focus:border-blue-500 outline-none transition-all text-sm font-medium dark:text-white resize-none h-40 shadow-inner"
                                />
                                <div className="absolute bottom-4 right-4 flex gap-2">
                                   <button 
                                     onClick={handleSendReply}
                                     disabled={isSubmitting || !replyText.trim()}
                                     className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-2xl font-black font-bold text-sm shadow-xl shadow-blue-500/30 flex items-center gap-2 transition-all active:scale-95"
                                   >
                                      {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                                      {isSubmitting ? "Mengirim..." : "Kirim Jawaban"}
                                   </button>
                                </div>
                             </div>
                             <p className="mt-4 text-[11px] text-slate-400 font-medium flex items-center gap-2">
                                <Info size={14} /> Balasan Anda akan langsung muncul di halaman Aspirasi Publik dan Dashboard Siswa.
                             </p>
                          </div>
                       )}
                    </div>
                 </motion.div>
              ) : (
                 <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                    <div className="w-24 h-24 bg-slate-50 dark:bg-white/5 rounded-full flex items-center justify-center mb-6">
                       <Inbox size={48} className="text-slate-200" />
                    </div>
                    <h3 className="text-lg font-black font-bold text-slate-800 dark:text-white mb-2">Pilih Aspirasi</h3>
                    <p className="text-sm text-slate-400 max-w-xs">Silakan pilih salah satu pesan di daftar kiri untuk membaca detail dan memberikan tanggapan.</p>
                 </div>
              )}
           </AnimatePresence>
        </div>
      </div>
  );
}
