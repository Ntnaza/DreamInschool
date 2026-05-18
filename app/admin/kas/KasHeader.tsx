"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { HelpCircle } from "lucide-react";
import TourGuide from "@/components/TourGuide";

const financeTourSteps = [
    { target: '.tour-finance-header', content: 'Selamat datang di Pusat Keuangan OSIS! Di sini Anda bisa mengelola dompet kas dan anggaran kegiatan secara profesional.', disableBeacon: true },
    { target: '.tour-ledger-sidebar', content: 'Ini adalah daftar "Dompet Kas". Anda bisa memisahkan Uang Kas Umum, Dana Sosial, atau Iuran Pengurus di sini agar tidak bercampur.' },
    { target: '.tour-stats-cards', content: 'Panel ini menampilkan saldo real-time dari dompet kas yang Anda pilih di sidebar.' },
    { target: '.tour-general-actions', content: 'Klik di sini untuk mencatat transaksi masuk (pemasukan) atau keluar (pengeluaran) harian.' },
    { target: '.tour-tab-switcher', content: 'Pindah ke tab ini untuk mengelola jatah dana khusus Program Kerja atau Event tertentu.' },
    { target: '.tour-event-list', content: 'Klik pada kartu kegiatan untuk mencatat nota belanja atau melihat riwayat audit bukti fisik dan struk.' },
];

export default function KasHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  
  const activeTab = (searchParams.get("tab") as 'general' | 'events') || 'general';
  const [isClient, setIsClient] = useState(false);
  const tourRef = useRef<any>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleStartTour = () => {
    if (tourRef.current) tourRef.current.startTour();
  };

  const handleTabChange = (tab: 'general' | 'events') => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", tab);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-end gap-4 shrink-0 px-4 md:px-0 no-print mb-6">
       <div className="tour-finance-header">
          <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">Financial System <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">💰</span></h1>
              
              {isClient && (
                <button 
                  onClick={handleStartTour}
                  className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 text-sm font-medium"
                  title="Bantuan Panduan"
                >
                  <HelpCircle className="w-5 h-5" />
                  <span className="hidden sm:inline">Panduan</span>
                </button>
              )}

              {isClient && <TourGuide ref={tourRef} steps={financeTourSteps} tourKey="finance" />}
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Pembukuan Multi-Ledger & Audit Realisasi.</p>
       </div>
       <div className="flex bg-slate-100 dark:bg-[#1e293b] p-1 rounded-xl border border-slate-200 dark:border-white/10 tour-tab-switcher">
          <button onClick={() => handleTabChange('general')} className={`px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'general' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm' : 'text-slate-500'}`}>Dompet Kas</button>
          <button onClick={() => handleTabChange('events')} className={`px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'events' ? 'bg-white dark:bg-slate-700 text-purple-600 dark:text-white shadow-sm' : 'text-slate-500'}`}>Anggaran Kegiatan</button>
       </div>
    </div>
  );
}
