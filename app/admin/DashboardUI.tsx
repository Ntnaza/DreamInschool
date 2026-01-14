"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, Mail, CheckCircle, Wallet, PenTool, FilePlus, 
  ClipboardList, MessageCircle, Bell, 
  Activity, ArrowUpRight, Calendar, Clock
} from "lucide-react";
import { ActivityChart } from "@/components/DashboardCharts"; 
import SpotlightCard from "@/components/SpotlightCard"; 
import TourGuide from "@/components/TourGuide";

// --- Props Interface ---
interface DashboardUIProps {
  stats: {
    totalPengurus: number;
    aspirasiBaru: number;
    prokerPersen: number;
    danaKas: number;
  };
  agenda: any[];
  aspirasi: any[];
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

const dashboardSteps = [
    { target: '.tour-dashboard-header', content: 'Selamat Datang di Dashboard Admin!', disableBeacon: true },
    { target: '.tour-stats-grid', content: 'Pantau metrik utama real-time.' },
];

export default function DashboardUI({ stats, agenda, aspirasi }: DashboardUIProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  // Helpers Warna
  const tagColorMap: any = {
    orange: "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    purple: "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    green: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
  };
  
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

  return (
    <div className="space-y-6 font-sans pb-10">
      {/* HEADER */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-6 pb-2">
         <div>
            <div className="flex items-center gap-4 mb-1">
                <h1 className="text-3xl font-black font-bold text-slate-900 dark:text-white tracking-tight tour-dashboard-header">
                   Dashboard Overview
                </h1>
                {isClient && <TourGuide steps={dashboardSteps} />}
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
               Selamat datang kembali, berikut ringkasan data hari ini.
            </p>
         </div>
         <div className="flex items-center gap-4">
             <button className="tour-notif-bell w-10 h-10 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 relative shadow-sm hover:shadow-md">
                <Bell size={20} />
                {stats.aspirasiBaru > 0 && <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-[#0f172a]" />}
             </button>
             {/* ... Profil user biarkan static dulu ... */}
         </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 tour-stats-grid">
         <SpotlightCard color="blue" className="p-6 rounded-xl border border-slate-200 dark:border-white/10">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 shadow-sm"><Users size={20} /></div>
            <h3 className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Total Pengurus</h3>
            <p className="text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight">{stats.totalPengurus}</p>
         </SpotlightCard>
         
         <SpotlightCard color="purple" className="p-6 rounded-xl border border-slate-200 dark:border-white/10">
            <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 shadow-sm"><Mail size={20} /></div>
            <h3 className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Aspirasi Baru</h3>
            <p className="text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight">{stats.aspirasiBaru}</p>
         </SpotlightCard>

         <SpotlightCard color="green" className="p-6 rounded-xl border border-slate-200 dark:border-white/10">
            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-4 shadow-sm"><CheckCircle size={20} /></div>
            <h3 className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Proker Selesai</h3>
            <p className="text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight">{stats.prokerPersen}%</p>
         </SpotlightCard>

         <SpotlightCard color="yellow" className="p-6 rounded-xl border border-slate-200 dark:border-white/10">
            <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-500/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-4 shadow-sm"><Wallet size={20} /></div>
            <h3 className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Dana Kas</h3>
            <p className="text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight">{formatCurrency(stats.danaKas)}</p>
         </SpotlightCard>
      </div>

      {/* GRID BAWAH */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* CHART */}
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2 bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm tour-activity-chart">
            <div className="flex items-center justify-between mb-6">
               <h3 className="font-black font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2"><Activity size={20} className="text-blue-600" /> Tren Aktivitas</h3>
            </div>
            <div className="h-[250px]"><ActivityChart /></div>
         </motion.div>

         {/* QUICK ACCESS (Sama seperti sebelumnya) */}
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm flex flex-col tour-quick-access">
            <h3 className="font-black font-bold text-md text-slate-900 dark:text-white mb-6 flex items-center gap-2"><PenTool size={18} className="text-indigo-500"/> Akses Cepat</h3>
            <div className="grid grid-cols-2 gap-3 flex-1">
               {[
                  { label: 'Tulis Berita', icon: PenTool, color: 'blue' },
                  { label: 'Buat Proker', icon: FilePlus, color: 'green' },
                  { label: 'Cek Laporan', icon: ClipboardList, color: 'orange' },
                  { label: 'Broadcast', icon: MessageCircle, color: 'pink' },
               ].map((item, i) => (
                  <button key={i} className="relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-md transition-all group active:scale-95">
                     <item.icon size={24} className={`${iconColorMap[item.color]}`} />
                     <span className="text-xs font-black font-bold text-slate-600 dark:text-slate-300">{item.label}</span>
                  </button>
               ))}
            </div>
         </motion.div>

         {/* AGENDA */}
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm tour-agenda-widget">
            <h3 className="font-black font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Calendar size={18} className="text-orange-500" /> Agenda Penting</h3>
            <div className="space-y-3">
               {agenda.length > 0 ? agenda.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group">
                     <div className="flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 font-bold text-xs"><Calendar size={14} className="opacity-70"/></div>
                     <div className="flex-1">
                        <h4 className="text-xs font-black font-bold text-slate-800 dark:text-white line-clamp-1">{item.nama}</h4>
                        <p className="text-[10px] text-slate-500 font-medium flex items-center gap-1 mt-0.5"><Clock size={10} /> {formatDateShort(item.deadline)}</p>
                     </div>
                  </div>
               )) : <p className="text-xs text-slate-500 italic">Belum ada agenda.</p>}
            </div>
         </motion.div>

         {/* INBOX */}
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2 bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm">
            <h3 className="font-black font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2"><Mail size={18} className="text-pink-500" /> Inbox Aspirasi</h3>
            <div className="space-y-3">
               {aspirasi.length > 0 ? aspirasi.map((item, i) => (
                  <div key={i} className="group flex items-center justify-between p-3 rounded-xl bg-slate-50/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all cursor-pointer">
                     <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-xs font-black font-bold text-slate-700 dark:text-slate-300 shadow-sm">{item.pengirim.charAt(0)}</div>
                        <div>
                           <h4 className="text-xs font-black font-bold text-slate-900 dark:text-white">{item.pengirim}</h4>
                           <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">{item.isi}</p>
                        </div>
                     </div>
                     <div className="text-right flex flex-col items-end">
                        <span className={`text-[9px] font-black font-bold px-2 py-0.5 rounded-md mb-1 ${tagColorMap[getKategoriColor(item.kategori)]}`}>{item.kategori}</span>
                     </div>
                  </div>
               )) : <p className="text-xs text-slate-500 italic text-center p-4">Belum ada aspirasi baru.</p>}
            </div>
         </motion.div>
      </div>
    </div>
  );
}