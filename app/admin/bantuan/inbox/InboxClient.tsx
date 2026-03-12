"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bug, Clock, CheckCircle, XCircle, Trash2, 
  ChevronRight, Calendar, Info, X, ExternalLink,
  Search, Filter, Image as ImageIcon
} from "lucide-react";
import { updateTicketStatus, deleteHelpTicket } from "@/lib/actions";
import { showToast } from "@/components/Toast";
import { showConfirm } from "@/components/ConfirmDialog";
import Image from "next/image";

export default function InboxClient({ initialTickets }: { initialTickets: any[] }) {
  const [tickets, setTickets] = useState(initialTickets);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const filteredTickets = tickets.filter(t => {
    const matchesSearch = t.subject.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         t.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || t.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleUpdateStatus = async (id: number, newStatus: string) => {
    const res = await updateTicketStatus(id, newStatus);
    if (res.success) {
      showToast(res.message, "success");
      setTickets(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
      if (selectedTicket?.id === id) setSelectedTicket({ ...selectedTicket, status: newStatus });
    }
  };

  const handleDelete = async (id: number) => {
    showConfirm({
      title: "Hapus Laporan?",
      message: "Data laporan bug ini akan dihapus permanen dari sistem.",
      confirmText: "Ya, Hapus",
      type: "danger",
      onConfirm: async () => {
        const res = await deleteHelpTicket(id);
        if (res.success) {
          showToast(res.message, "success");
          setTickets(prev => prev.filter(t => t.id !== id));
          if (selectedTicket?.id === id) setSelectedTicket(null);
        }
      }
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "OPEN": return "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400";
      case "ON_REVIEW": return "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400";
      case "FIXED": return "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400";
      default: return "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-400";
    }
  };

  return (
    <div className="min-h-screen font-sans">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
         <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
               Inbox Support <span className="text-2xl p-2 bg-red-100 dark:bg-red-900/30 rounded-full">📩</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">
               Daftar laporan bug dan permintaan update dari anggota organisasi.
            </p>
         </div>

         <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64 group">
               <input 
                  type="text" 
                  placeholder="Cari tiket..." 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 outline-none text-sm font-medium" 
               />
               <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
            <select 
               value={statusFilter} 
               onChange={(e) => setStatusFilter(e.target.value)}
               className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 text-sm font-bold outline-none cursor-pointer"
            >
               <option value="ALL">Semua Status</option>
               <option value="OPEN">Baru (Open)</option>
               <option value="ON_REVIEW">Review</option>
               <option value="FIXED">Selesai (Fixed)</option>
            </select>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         
         {/* TICKET LIST */}
         <div className="lg:col-span-5 space-y-3 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
            {filteredTickets.length > 0 ? filteredTickets.map((ticket) => (
               <div 
                  key={ticket.id} 
                  onClick={() => setSelectedTicket(ticket)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer group relative overflow-hidden
                     ${selectedTicket?.id === ticket.id 
                        ? 'bg-blue-50 dark:bg-blue-500/5 border-blue-200 dark:border-blue-500/30 ring-1 ring-blue-500/20' 
                        : 'bg-white dark:bg-[#0f172a]/60 border-slate-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-white/20'
                     }
                  `}
               >
                  <div className="flex justify-between items-start mb-3">
                     <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusColor(ticket.status)}`}>
                        {ticket.status}
                     </span>
                     <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase">
                        <Clock size={10}/> {new Date(ticket.createdAt).toLocaleDateString('id-ID')}
                     </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">{ticket.subject}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">{ticket.description}</p>
                  
                  {ticket.fotoBukti && (
                     <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity">
                        <ImageIcon size={24}/>
                     </div>
                  )}
               </div>
            )) : (
               <div className="h-64 bg-slate-50 dark:bg-white/5 rounded-3xl border border-dashed border-slate-200 dark:border-white/10 flex flex-col items-center justify-center text-slate-400">
                  <Info size={40} className="mb-3 opacity-20"/>
                  <p className="text-sm font-bold uppercase tracking-widest">Tidak ada laporan</p>
               </div>
            )}
         </div>

         {/* TICKET DETAIL PANEL */}
         <div className="lg:col-span-7 bg-white dark:bg-[#0f172a]/60 rounded-[2rem] border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm relative min-h-[500px]">
            {selectedTicket ? (
               <div className="h-full flex flex-col">
                  {/* DETAIL HEADER */}
                  <div className="p-8 border-b border-slate-100 dark:border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-50/50 dark:bg-white/5">
                     <div className="flex items-center gap-5">
                        <div className="p-4 rounded-2xl bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 shadow-inner">
                           <Bug size={28} />
                        </div>
                        <div>
                           <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{selectedTicket.subject}</h2>
                           <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">ID Tiket: #SPT-{selectedTicket.id}</p>
                        </div>
                     </div>
                     <div className="flex gap-2">
                        <button 
                           onClick={() => handleDelete(selectedTicket.id)}
                           className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-all"
                        >
                           <Trash2 size={20}/>
                        </button>
                     </div>
                  </div>

                  {/* DETAIL CONTENT */}
                  <div className="p-8 md:p-10 flex-1 space-y-10 overflow-y-auto">
                     {/* DESCRIPTION */}
                     <div className="space-y-4">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                           <Info size={12}/> Deskripsi Kejadian
                        </h4>
                        <div className="bg-slate-50 dark:bg-black/20 p-6 rounded-2xl border border-slate-100 dark:border-white/5 text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                           {selectedTicket.description}
                        </div>
                     </div>

                     {/* ATTACHMENT */}
                     {selectedTicket.fotoBukti && (
                        <div className="space-y-4">
                           <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                              <ImageIcon size={12}/> Lampiran Bukti
                           </h4>
                           <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-black/5 group">
                              <Image 
                                 src={selectedTicket.fotoBukti} 
                                 alt="Bukti Laporan" 
                                 fill 
                                 className="object-contain"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                 <a href={selectedTicket.fotoBukti} target="_blank" className="px-6 py-2.5 bg-white text-black rounded-xl text-xs font-bold flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform">
                                    <ExternalLink size={14}/> Lihat Ukuran Penuh
                                 </a>
                              </div>
                           </div>
                        </div>
                     )}
                  </div>

                  {/* ACTION FOOTER */}
                  <div className="p-8 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                     <div className="flex flex-wrap items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                           <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Update Status:</span>
                           <div className="flex gap-2">
                              {["OPEN", "ON_REVIEW", "FIXED", "CLOSED"].map((s) => (
                                 <button 
                                    key={s}
                                    onClick={() => handleUpdateStatus(selectedTicket.id, s)}
                                    className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all
                                       ${selectedTicket.status === s 
                                          ? 'bg-blue-600 text-white shadow-lg' 
                                          : 'bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 text-slate-500 hover:border-blue-400'
                                       }
                                    `}
                                 >
                                    {s.replace('_', ' ')}
                                 </button>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ) : (
               <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center text-slate-400">
                  <div className="w-20 h-20 rounded-3xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-6">
                     <Bug size={40} className="opacity-20"/>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Pilih Tiket</h3>
                  <p className="text-sm font-medium max-w-xs">Silakan pilih salah satu tiket di sebelah kiri untuk melihat detail kendala teknis.</p>
               </div>
            )}
         </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
      `}</style>

    </div>
  );
}
