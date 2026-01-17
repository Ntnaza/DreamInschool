"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Users, UserCheck, Mail, CheckCircle, Wallet, PenTool, 
  ClipboardList, MessageCircle, Bell, 
  Activity, Calendar, Clock,
  FileText, QrCode, ArrowUpRight, ArrowDownLeft
} from "lucide-react";
import { ActivityChart } from "@/components/DashboardCharts"; 
import SpotlightCard from "@/components/SpotlightCard"; 
import TourGuide from "@/components/TourGuide";

// --- Props Interface ---
interface DashboardUIProps {
  stats: {
    totalPengurus: number;
    hadirHariIni: number;
    aspirasiBaru: number;
    prokerPersen: number;
    danaKas: number;
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

// ✅ UPDATE: 7 LANGKAH PANDUAN LENGKAP
const dashboardSteps = [
    { target: '.tour-dashboard-header', content: 'Selamat Datang! Ini adalah pusat kontrol utama untuk memantau seluruh aktivitas organisasi.', disableBeacon: true },
    { target: '.tour-stats-grid', content: 'Ringkasan data real-time: Kehadiran hari ini, Aspirasi baru, Progres Proker, dan Saldo Kas.' },
    { target: '.tour-activity-chart', content: 'Grafik ini menampilkan tren kesibukan (aspirasi vs kegiatan) dalam 7 hari terakhir.' },
    { target: '.tour-quick-access', content: 'Jalan pintas ke menu yang paling sering digunakan: Berita, Surat, Absensi, dan Kas.' },
    { target: '.tour-agenda-widget', content: 'Daftar agenda atau proker terdekat yang harus segera disiapkan.' },
    { target: '.tour-recent-trx', content: 'Pantau arus keluar-masuk uang terbaru (Mini Mutasi) agar transparan.' },
    { target: '.tour-inbox-widget', content: 'Pesan dan aspirasi terbaru dari siswa yang perlu ditindaklanjuti.' },
];

export default function DashboardUI({ stats, agenda, transaksiTerakhir, aspirasi, chartData }: DashboardUIProps) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => { setIsClient(true); }, []);

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
               Pantau performa organisasi secara real-time hari ini.
            </p>
         </div>
         <div className="flex items-center gap-4">
             <button 
                onClick={() => router.push('/admin/aspirasi')} 
                className="tour-notif-bell w-10 h-10 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 relative shadow-sm hover:shadow-md hover:bg-slate-50 transition-all active:scale-95"
             >
                <Bell size={20} />
                {stats.aspirasiBaru > 0 && <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-[#0f172a] animate-pulse" />}
             </button>
         </div>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 tour-stats-grid">
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
  );
}