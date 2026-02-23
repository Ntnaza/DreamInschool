"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, UserCheck, Mail, CheckCircle, Wallet, PenTool, 
  ClipboardList, MessageCircle, Bell, 
  Activity, Calendar, Clock,
  FileText, QrCode, ArrowUpRight, ArrowDownLeft,
  ChevronRight, Inbox, Send, Loader2, X, MessageSquare, Eye
} from "lucide-react";
import { ActivityChart } from "@/components/DashboardCharts"; 
import SpotlightCard from "@/components/SpotlightCard"; 
import TourGuide from "@/components/TourGuide";
import { replyAspirasi } from "@/lib/actions";

// --- Props Interface ---
interface DashboardUIProps {
  stats: {
    totalPengurus: number;
    hadirHariIni: number;
    aspirasiBaru: number;
    prokerPersen: number;
    danaKas: number;
    totalViews: number;
    viewsHariIni: number;
  };
  agenda: any[];
  transaksiTerakhir: any[];
  aspirasi: any[];
  chartData: any[];
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: 'IDR', minimumFractionDigits: 0,
  }).format(amount);
};

const formatDateShort = (date: Date | null) => {
  if (!date) return "TBA";
  return new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
};

// ✅ UPDATE: 8 LANGKAH PANDUAN LENGKAP
const dashboardSteps = [
    { target: '.tour-dashboard-header', content: 'Selamat Datang! Ini adalah pusat kontrol utama untuk memantau seluruh aktivitas organisasi.', disableBeacon: true },
    { target: '.tour-stats-grid', content: 'Ringkasan data real-time: Pantau kehadiran pengurus, jumlah aspirasi, progres proker, saldo kas, hingga statistik pengunjung website dalam satu area.' },
    { target: '.tour-notif-bell', content: 'Klik ikon lonceng ini untuk melihat dan membalas aspirasi siswa secara cepat tanpa harus berpindah halaman.' },
    { target: '.tour-activity-chart', content: 'Grafik ini menampilkan tren kesibukan organisasi (Aspirasi vs Kegiatan) dalam 7 hari terakhir.' },
    { target: '.tour-quick-access', content: 'Jalan pintas ke menu yang paling sering digunakan untuk mempercepat kerja administrasi Anda.' },
    { target: '.tour-agenda-widget', content: 'Daftar agenda atau proker terdekat yang harus segera disiapkan agar tidak terlewat.' },
    { target: '.tour-recent-trx', content: 'Pantau arus kas masuk dan keluar terbaru agar pengelolaan keuangan tetap transparan.' },
    { target: '.tour-inbox-widget', content: 'Pesan dan aspirasi terbaru dari siswa yang perlu ditindaklanjuti lebih lanjut.' },
];

export default function DashboardUI({ stats, agenda, transaksiTerakhir, aspirasi, chartData }: DashboardUIProps) {
  const [isClient, setIsClient] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const notifRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => { 
    setIsClient(true); 
    
    // Handle click outside to close notif
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
      // Aspirasi akan terupdate otomatis via revalidatePath di action
    } else {
      alert(res.message);
    }
    setIsSubmitting(false);
  };

  // Helpers Warna Tag
  const tagColorMap: any = {
    orange: "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    purple: "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    green: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
  };
  
  // Helpers Warna Icon Akses Cepat
  const iconColorMap: any = {
    blue: "text-blue-600 group-hover:text-blue-700",
    green: "text-green-600 group-hover:text-green-700",
    orange: "text-orange-600 group-hover:text-orange-700",
    pink: "text-pink-600 group-hover:text-pink-700",
  };

  const getKategoriColor = (kategori: string) => {
      const k = kategori.toLowerCase();
      if(k.includes('sarana')) return 'orange';
      if(k.includes('event')) return 'purple';
      return 'blue';
  };

  const quickAccessItems = [
    { label: 'Tulis Berita', icon: PenTool, color: 'blue', href: '/admin/berita' },
    { label: 'Buat Surat', icon: FileText, color: 'pink', href: '/admin/surat' },
    { label: 'Scan Absensi', icon: QrCode, color: 'green', href: '/admin/absensi' },
    { label: 'Input Kas', icon: Wallet, color: 'orange', href: '/admin/kas' },
  ];

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col font-sans">
      {/* HEADER (FIXED) */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-6 pb-6 shrink-0">
         <div>
            <div className="flex items-center gap-4 mb-1">
                <h1 className="text-3xl font-black font-bold text-slate-900 dark:text-white tracking-tight tour-dashboard-header">
                   Dashboard Overview
                </h1>
                {isClient && <TourGuide steps={dashboardSteps} />}
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
               Pantau performa organisasi secara real-time hari ini.
            </p>
         </div>
         <div className="flex items-center gap-4 relative" ref={notifRef}>
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

             {/* FLOATING NOTIFICATION DROPDOWN */}
             <AnimatePresence>
                {isNotifOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 top-12 w-80 md:w-[420px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
                  >
                    <div className="p-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50/50 dark:bg-white/5">
                        <div className="flex items-center gap-2">
                           <Inbox size={18} className="text-blue-600" />
                           <h3 className="font-black font-bold text-slate-900 dark:text-white text-sm">Aspirasi Terbaru</h3>
                        </div>
                        <span className="text-[10px] font-black font-bold bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full">
                          {stats.aspirasiBaru} Baru
                        </span>
                    </div>

                    <div className="max-h-[450px] overflow-y-auto custom-scrollbar p-2 space-y-2">
                       {aspirasi.length > 0 ? (
                         aspirasi.map((item, i) => (
                           <div 
                             key={i} 
                             className={`p-3 rounded-xl transition-all border ${
                               replyingTo === item.id 
                               ? "bg-blue-50/50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30" 
                               : "hover:bg-slate-50 dark:hover:bg-white/5 border-transparent hover:border-slate-100 dark:hover:border-white/5"
                             }`}
                           >
                              <div className="flex items-start gap-3">
                                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black font-bold text-xs shrink-0 shadow-sm">
                                    {item.pengirim.charAt(0)}
                                 </div>
                                 <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-0.5">
                                       <h4 className="text-xs font-black font-bold text-slate-900 dark:text-white truncate pr-2">{item.pengirim}</h4>
                                       <span className="text-[9px] text-slate-400 font-medium shrink-0">{formatDateShort(item.createdAt || new Date())}</span>
                                    </div>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                                       {item.isi}
                                    </p>
                                    
                                    <div className="mt-2 flex items-center justify-between">
                                       <span className={`text-[8px] font-black font-bold px-1.5 py-0.5 rounded ${tagColorMap[getKategoriColor(item.kategori)]}`}>
                                          {item.kategori}
                                       </span>
                                       
                                       {item.status !== 'SELESAI' ? (
                                         <button 
                                            onClick={() => {
                                              if (replyingTo === item.id) {
                                                setReplyingTo(null);
                                                setReplyText("");
                                              } else {
                                                setReplyingTo(item.id);
                                                setReplyText("");
                                              }
                                            }}
                                            className="text-[10px] font-black font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                                         >
                                            <MessageSquare size={12} />
                                            {replyingTo === item.id ? "Batal" : "Balas Cepat"}
                                         </button>
                                       ) : (
                                         <span className="text-[9px] text-green-500 font-bold flex items-center gap-1">
                                            <CheckCircle size={10} /> Terjawab
                                         </span>
                                       )}
                                    </div>

                                    {/* REPLY INPUT AREA */}
                                    <AnimatePresence>
                                      {replyingTo === item.id && (
                                        <motion.div 
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{ opacity: 1, height: "auto" }}
                                          exit={{ opacity: 0, height: 0 }}
                                          className="mt-3 overflow-hidden"
                                        >
                                          <textarea 
                                            autoFocus
                                            value={replyText}
                                            onChange={(e) => setReplyText(e.target.value)}
                                            placeholder="Tulis jawaban Anda..."
                                            className="w-full p-2 text-xs rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none resize-none h-20"
                                          />
                                          <div className="mt-2 flex justify-end">
                                            <button 
                                              disabled={isSubmitting || !replyText.trim()}
                                              onClick={() => handleReply(item.id)}
                                              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-[10px] font-black font-bold px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors"
                                            >
                                              {isSubmitting ? <Loader2 size={12} className="animate-spin" /> : <Send size={12} />}
                                              Kirim Balasan
                                            </button>
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                 </div>
                              </div>
                           </div>
                         ))
                       ) : (
                         <div className="py-12 text-center">
                            <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-300">
                               <Bell size={24} />
                            </div>
                            <p className="text-xs text-slate-500 italic">Belum ada aspirasi baru.</p>
                         </div>
                       )}
                    </div>

                    <button 
                      onClick={() => {
                        router.push('/admin/aspirasi');
                        setIsNotifOpen(false);
                      }}
                      className="w-full p-3 text-center text-xs font-black font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors border-t border-slate-100 dark:border-white/5 flex items-center justify-center gap-2 group"
                    >
                      Lihat Semua Aspirasi
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                )}
             </AnimatePresence>
         </div>
      </div>

      {/* SCROLLABLE CONTENT AREA */}
      <div className="flex-1 overflow-y-auto pb-20 pr-2 custom-scrollbar space-y-6">
         {/* STATS GRID */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 tour-stats-grid">
         <SpotlightCard color="blue" className="p-6 rounded-xl border border-slate-200 dark:border-white/10 cursor-pointer hover:border-blue-300 transition-colors" onClick={() => router.push('/admin/absensi')}>
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 shadow-sm">
                <UserCheck size={20} />
            </div>
            <h3 className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Kehadiran Hari Ini</h3>
            <div className="flex items-baseline gap-1">
                <p className="text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight">{stats.hadirHariIni}</p>
                <span className="text-sm font-medium text-slate-400">/ {stats.totalPengurus}</span>
            </div>
         </SpotlightCard>
         
         <SpotlightCard color="purple" className="p-6 rounded-xl border border-slate-200 dark:border-white/10 cursor-pointer hover:border-purple-300 transition-colors" onClick={() => router.push('/admin/aspirasi')}>
            <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 shadow-sm"><Mail size={20} /></div>
            <h3 className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Aspirasi Baru</h3>
            <p className="text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight">{stats.aspirasiBaru}</p>
         </SpotlightCard>

         <SpotlightCard color="green" className="p-6 rounded-xl border border-slate-200 dark:border-white/10 cursor-pointer hover:border-green-300 transition-colors" onClick={() => router.push('/admin/proker')}>
            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-4 shadow-sm"><CheckCircle size={20} /></div>
            <h3 className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Proker Selesai</h3>
            <p className="text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight">{stats.prokerPersen}%</p>
         </SpotlightCard>

         <SpotlightCard color="yellow" className="p-6 rounded-xl border border-slate-200 dark:border-white/10 cursor-pointer hover:border-yellow-300 transition-colors" onClick={() => router.push('/admin/kas')}>
            <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-500/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-4 shadow-sm"><Wallet size={20} /></div>
            <h3 className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Dana Kas</h3>
            <p className="text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight">{formatCurrency(stats.danaKas)}</p>
         </SpotlightCard>

         <SpotlightCard color="indigo" className="tour-total-views p-6 rounded-xl border border-slate-200 dark:border-white/10 cursor-pointer hover:border-indigo-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 shadow-sm"><Eye size={20} /></div>
            <h3 className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Total Views</h3>
            <div className="flex items-baseline gap-2">
                <p className="text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight">{stats.totalViews}</p>
                <span className="text-[10px] font-bold text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded">+{stats.viewsHariIni} hari ini</span>
            </div>
         </SpotlightCard>
      </div>

      {/* GRID BAWAH */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* CHART */}
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2 bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm tour-activity-chart">
            <div className="flex items-center justify-between mb-6">
               <h3 className="font-black font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2"><Activity size={20} className="text-blue-600" /> Tren Aktivitas</h3>
            </div>
            <div className="h-[250px]"><ActivityChart data={chartData} /></div>
         </motion.div>

         {/* QUICK ACCESS */}
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm flex flex-col tour-quick-access">
            <h3 className="font-black font-bold text-md text-slate-900 dark:text-white mb-6 flex items-center gap-2"><PenTool size={18} className="text-indigo-500"/> Akses Cepat</h3>
            <div className="grid grid-cols-2 gap-3 flex-1">
               {quickAccessItems.map((item, i) => (
                  <button 
                    key={i} 
                    onClick={() => router.push(item.href)}
                    className="relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-md transition-all group active:scale-95"
                  >
                     <item.icon size={24} className={`${iconColorMap[item.color]}`} />
                     <span className="text-xs font-black font-bold text-slate-600 dark:text-slate-300">{item.label}</span>
                  </button>
               ))}
            </div>
         </motion.div>
      </div>

      {/* GRID BOTTOM (Agenda + Transaksi + Inbox) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
         {/* WIDGET 1: AGENDA (KIRI) */}
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm tour-agenda-widget">
            <h3 className="font-black font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Calendar size={18} className="text-orange-500" /> Agenda Penting</h3>
            <div className="space-y-3">
               {agenda.length > 0 ? agenda.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-colors group cursor-pointer" onClick={() => router.push('/admin/proker')}>
                     <div className="flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 font-bold text-xs"><Calendar size={14} className="opacity-70"/></div>
                     <div className="flex-1">
                        <h4 className="text-xs font-black font-bold text-slate-800 dark:text-white line-clamp-1">{item.nama}</h4>
                        <p className="text-[10px] text-slate-500 font-medium flex items-center gap-1 mt-0.5"><Clock size={10} /> {formatDateShort(item.deadline)}</p>
                     </div>
                  </div>
               )) : <p className="text-xs text-slate-500 italic">Belum ada agenda.</p>}
            </div>
         </motion.div>

         {/* WIDGET 2: TRANSAKSI (TENGAH) */}
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm tour-recent-trx">
            <h3 className="font-black font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Wallet size={18} className="text-green-500" /> Transaksi Terakhir</h3>
            <div className="space-y-3">
               {transaksiTerakhir.length > 0 ? transaksiTerakhir.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer" onClick={() => router.push('/admin/kas')}>
                     <div className="flex items-center gap-3">
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.tipe === 'PEMASUKAN' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                            {item.tipe === 'PEMASUKAN' ? <ArrowDownLeft size={14}/> : <ArrowUpRight size={14}/>}
                         </div>
                         <div>
                            <h4 className="text-xs font-bold text-slate-800 dark:text-white line-clamp-1">{item.judul}</h4>
                            <p className="text-[10px] text-slate-500">{formatDateShort(item.tanggal)}</p>
                         </div>
                     </div>
                     <span className={`text-xs font-bold ${item.tipe === 'PEMASUKAN' ? 'text-green-600' : 'text-red-500'}`}>
                        {item.tipe === 'PEMASUKAN' ? '+' : '-'}{formatCurrency(item.nominal).replace('Rp', '')}
                     </span>
                  </div>
               )) : <p className="text-xs text-slate-500 italic">Belum ada transaksi.</p>}
            </div>
         </motion.div>

         {/* WIDGET 3: INBOX (KANAN) */}
         {/* HAPUS 'lg:col-span-2' AGAR PAS 1 KOLOM */}
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm tour-inbox-widget">
            <h3 className="font-black font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2"><Mail size={18} className="text-pink-500" /> Inbox Aspirasi</h3>
            <div className="space-y-3">
               {aspirasi.length > 0 ? aspirasi.map((item, i) => (
                  <div key={i} onClick={() => router.push('/admin/aspirasi')} className="group flex items-center justify-between p-3 rounded-xl bg-slate-50/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all cursor-pointer">
                     <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-xs font-black font-bold text-slate-700 dark:text-slate-300 shadow-sm shrink-0">{item.pengirim.charAt(0)}</div>
                        <div className="min-w-0"> {/* Fix text overflow */}
                           <h4 className="text-xs font-black font-bold text-slate-900 dark:text-white truncate">{item.pengirim}</h4>
                           <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">{item.isi}</p>
                        </div>
                     </div>
                     {/* Badge Kategori disembunyikan di mobile/layar sempit biar gak nabrak, muncul di hover/layar besar */}
                     <span className={`text-[9px] font-black font-bold px-2 py-0.5 rounded-md ${tagColorMap[getKategoriColor(item.kategori)]} shrink-0`}>{item.kategori}</span>
                  </div>
               )) : <p className="text-xs text-slate-500 italic text-center p-4">Belum ada aspirasi baru.</p>}
            </div>
         </motion.div>

      </div>
    </div>
    </div>
  );
}