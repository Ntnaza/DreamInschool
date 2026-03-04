"use client";

import { useState, useEffect } from "react";
import TourGuide from "@/components/TourGuide";

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

export default function DashboardHeader({ children }: { children?: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  return (
    <div className="flex-shrink-0">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
         <div>
            <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-bold font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-dashboard-header">
                   Dashboard Overview <span className="text-2xl p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">📊</span>
                </h1>
                {isClient && <TourGuide steps={dashboardSteps} />}
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">
               Pantau performa organisasi secara real-time hari ini.
            </p>
         </div>
         
         {/* Container ini dipaksa tinggi 48px agar sejajar dengan tombol "Proker Baru" di halaman lain */}
         <div className="flex items-center gap-4 h-[48px] flex-shrink-0">
            {children}
         </div>
      </div>
    </div>
  );
}
