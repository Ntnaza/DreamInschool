"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Filter, Trash2, CheckCircle, MessageSquare, 
  AlertCircle, MoreHorizontal, Send, X, Reply // Tambah icon Reply, Send, X
} from "lucide-react";
import TourGuide from "@/components/TourGuide";
import { deleteAspirasi, replyAspirasi } from "@/lib/actions"; 

// Helper Warna
const getTagColor = (cat: string) => {
  const c = cat.toLowerCase();
  if (c.includes('sarana')) return 'orange';
  if (c.includes('event')) return 'purple';
  if (c.includes('kurikulum')) return 'blue';
  return 'slate';
};

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
};

export default function AspirasiList({ initialData }: { initialData: any[] }) {
  const [messages, setMessages] = useState(initialData);
  const [selectedTab, setSelectedTab] = useState("all"); 
  const [searchQuery, setSearchQuery] = useState("");
  const [isClient, setIsClient] = useState(false);
  
  // STATE BARU: Untuk Modal Balasan
  const [replyModal, setReplyModal] = useState<{open: boolean, id: number | null, sender: string}>({
    open: false, id: null, sender: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => { setIsClient(true); }, []);

  // Filter Logic
  const filteredMessages = messages.filter((msg) => {
    const status = msg.status === 'SELESAI' ? 'done' : 'unread';
    const matchesTab = 
      selectedTab === "all" ? status !== "done" : 
      selectedTab === "done" ? status === "done" :
      selectedTab === "unread" ? status === "unread" : true;
    
    const matchesSearch = 
      msg.pengirim.toLowerCase().includes(searchQuery.toLowerCase()) || 
      msg.isi.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const handleDelete = async (id: number) => {
    if(confirm("Hapus pesan ini permanen?")) {
      setMessages(messages.filter(m => m.id !== id));
      await deleteAspirasi(id);
    }
  };

  // FUNGSI BARU: Kirim Balasan via Modal
  const handleSendReply = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    await replyAspirasi(formData); // Panggil Server Action

    // Update UI Local
    setMessages(messages.map(m => m.id === replyModal.id ? { ...m, status: "SELESAI" } : m));
    
    setIsSubmitting(false);
    setReplyModal({ open: false, id: null, sender: "" }); // Tutup Modal
    alert("Balasan terkirim! ✅");
  };

  const inboxTourSteps = [
    { target: '.tour-inbox-header', content: 'Halaman Inbox Aspirasi.', disableBeacon: true },
    { target: '.tour-folder-sidebar', content: 'Filter pesan di sini.', placement: 'right' as const },
    { target: '.tour-reply-btn', content: 'Klik tombol ini untuk membalas pesan siswa.' }, 
  ];

  return (
    <div className="space-y-6 h-full flex flex-col font-sans relative">
      
      {/* HEADER */}
      <div className="tour-inbox-header">
          <div className="flex items-center gap-3">
             <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
               Inbox Aspirasi <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">📩</span>
             </h1>
             {isClient && <TourGuide steps={inboxTourSteps} />}
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1 ml-1">
            Kelola pesan masuk dari seluruh siswa.
          </p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="flex-1 bg-white/80 dark:bg-[#0f172a]/60 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-sm flex flex-col md:flex-row min-h-[600px]">
        
        {/* SIDEBAR FILTER */}
        <div className="tour-folder-sidebar w-full md:w-72 border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/5 p-6 bg-slate-100 dark:bg-white/5 flex flex-col gap-6">
           <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all">
              <Filter size={18} /> Filter Lanjutan
           </button>

           <div className="space-y-2">
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-3 mb-1">Folder</p>
              {[
                { id: "all", label: "Kotak Masuk", icon: MessageSquare, count: messages.filter(m => m.status !== "SELESAI").length },
                { id: "unread", label: "Belum Dibaca", icon: AlertCircle, count: messages.filter(m => m.status === "PENDING").length },
                { id: "done", label: "Arsip Selesai", icon: CheckCircle, count: messages.filter(m => m.status === "SELESAI").length },
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`relative w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all border group
                    ${selectedTab === tab.id 
                      ? "bg-white dark:bg-white/10 text-blue-600 dark:text-white border-blue-100 dark:border-transparent shadow-sm" 
                      : "bg-transparent border-transparent text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                    }
                  `}
                >
                   {selectedTab === tab.id && <motion.div layoutId="activeTabIndicator" className="absolute left-0 top-3 bottom-3 w-1 bg-blue-600 rounded-r-full" />}
                   <div className="flex items-center gap-3">
                      <tab.icon size={18} className={selectedTab === tab.id ? "text-blue-500 dark:text-blue-400" : "opacity-70 group-hover:opacity-100"} />
                      {tab.label}
                   </div>
                   {tab.count > 0 && (
                     <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${selectedTab === tab.id ? "bg-blue-100 text-blue-600" : "bg-slate-200 text-slate-600"}`}>
                       {tab.count}
                     </span>
                   )}
                </button>
              ))}
           </div>
        </div>

        {/* LIST PESAN */}
        <div className="flex-1 flex flex-col bg-white dark:bg-transparent">
           
           {/* TOOLBAR */}
           <div className="p-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between gap-4 relative z-20">
              <div className="relative flex-1 max-w-md tour-search-bar">
                 <input 
                   type="text" 
                   placeholder="Cari pengirim atau isi pesan..." 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm font-medium text-slate-700 dark:text-white"
                 />
                 <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
              <button className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"><MoreHorizontal size={20}/></button>
           </div>

           {/* LIST CONTENT */}
           <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-slate-50/30 dark:bg-transparent">
             <div className="space-y-3">
               <AnimatePresence>
                 {filteredMessages.length > 0 ? (
                   filteredMessages.map((msg, index) => {
                     const color = getTagColor(msg.kategori);
                     const isUnread = msg.status === 'PENDING';
                     
                     return (
                       <motion.div 
                         key={msg.id}
                         initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                         className={`group relative p-5 rounded-2xl border transition-all cursor-pointer hover:shadow-lg hover:-translate-y-0.5 ${index === 0 ? 'tour-message-item' : ''}
                           ${isUnread 
                             ? "bg-white dark:bg-white/10 border-blue-200 dark:border-blue-500/30 shadow-sm shadow-blue-500/5 ring-1 ring-blue-50 dark:ring-0" 
                             : "bg-white dark:bg-white/5 border-slate-100 dark:border-white/5 opacity-80 hover:opacity-100"
                           }
                         `}
                       >
                         <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                               <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm bg-gradient-to-br from-blue-400 to-cyan-500`}>
                                  {msg.pengirim.charAt(0)}
                               </div>
                               <div>
                                  <div className="flex items-center gap-2">
                                    <h4 className={`text-sm ${isUnread ? "font-black text-slate-900 dark:text-white" : "font-bold text-slate-700 dark:text-slate-300"}`}>
                                      {msg.pengirim}
                                    </h4>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider bg-${color}-100 text-${color}-700 dark:bg-${color}-500/20 dark:text-${color}-300`}>
                                      {msg.kategori}
                                    </span>
                                  </div>
                                  <span className="text-xs text-slate-500 dark:text-slate-400">
                                    {msg.kelas || "Siswa"}
                                  </span>
                               </div>
                            </div>
                            <span className={`text-xs font-bold ${isUnread ? "text-blue-600" : "text-slate-400"}`}>
                              {formatDate(msg.createdAt)}
                            </span>
                         </div>

                         <div className="pl-13 md:pl-13 mb-4">
                             <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                                 {msg.isi}
                             </p>
                         </div>

                         {/* Action Buttons */}
                         <div className="absolute right-4 bottom-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                            {/* TOMBOL BALAS BARU */}
                            {msg.status !== "SELESAI" && (
                              <button 
                                onClick={() => setReplyModal({ open: true, id: msg.id, sender: msg.pengirim })} 
                                title="Balas Pesan" 
                                className="tour-reply-btn px-3 py-1.5 bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-sm transition-colors text-xs font-bold flex items-center gap-1"
                              >
                                <Reply size={12} /> Balas
                              </button>
                            )}
                            <button onClick={() => handleDelete(msg.id)} title="Hapus" className="p-1.5 bg-white dark:bg-slate-800 border hover:border-red-500 text-slate-500 hover:text-red-500 rounded-lg shadow-sm transition-colors"><Trash2 size={14} /></button>
                         </div>
                       </motion.div>
                     );
                   })
                 ) : (
                   <div className="flex flex-col items-center justify-center h-full py-20 text-center text-slate-400">
                      <div className="w-16 h-16 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-4"><Filter size={24} className="opacity-30" /></div>
                      <p className="text-sm font-bold text-slate-600 dark:text-slate-300">Folder ini kosong</p>
                   </div>
                 )}
               </AnimatePresence>
             </div>
           </div>
        </div>
      </div>

      {/* === MODAL BALASAN === */}
      <AnimatePresence>
        {replyModal.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#1e293b] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10"
            >
              <div className="px-6 py-4 border-b border-slate-100 dark:border-white/5 flex justify-between items-center bg-slate-50 dark:bg-white/5">
                <h3 className="font-bold text-slate-800 dark:text-white">Balas Pesan {replyModal.sender}</h3>
                <button onClick={() => setReplyModal({ ...replyModal, open: false })} className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                  <X size={18} />
                </button>
              </div>
              
              <form onSubmit={handleSendReply} className="p-6 space-y-4">
                <input type="hidden" name="id" value={replyModal.id || ""} />
                
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Isi Balasan</label>
                  <textarea 
                    name="balasan"
                    rows={5}
                    className="w-full p-4 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none text-sm font-medium resize-none"
                    placeholder="Tulis tanggapan untuk siswa ini..."
                    autoFocus
                    required
                  ></textarea>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button 
                    type="button"
                    onClick={() => setReplyModal({ ...replyModal, open: false })}
                    className="px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                  >
                    Batal
                  </button>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 rounded-xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20 disabled:opacity-70"
                  >
                    {isSubmitting ? "Mengirim..." : <><Send size={16} /> Kirim Balasan</>}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}