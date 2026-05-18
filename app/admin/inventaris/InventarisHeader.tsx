"use client";

import { useState, useRef, useEffect } from "react";
import { HelpCircle } from "lucide-react";
import TourGuide from "@/components/TourGuide";

const inventarisTourSteps = [
    { target: '.tour-inventory-header', content: 'Selamat datang di Manajemen Aset! Di sini Anda bisa memantau dan mengelola seluruh barang inventaris organisasi secara sistematis.', disableBeacon: true },
    { target: '.tour-stats-overview', content: 'Pantau kondisi aset secara cepat. Lihat berapa banyak barang yang tersedia, sedang dipinjam, atau dalam perbaikan.', placement: 'bottom' as const },
    { target: '.tour-filter-bar', content: 'Gunakan pencarian dan filter untuk menemukan barang tertentu berdasarkan nama atau status ketersediaannya.', },
    { target: '.tour-add-btn', content: 'Punya aset baru? Klik di sini untuk mendaftarkannya ke dalam sistem lengkap dengan foto dan spesifikasinya.', },
    { target: '.tour-export-btn', content: 'Butuh laporan fisik? Unduh seluruh data inventaris ke dalam format Excel yang rapi dengan satu klik.', },
    { target: '.tour-item-card', content: 'Klik pada kartu barang untuk melihat detail spesifikasi, serial number, hingga riwayat peminjaman lengkap.', },
    { target: '.tour-action-area', content: 'Gunakan tombol aksi cepat ini untuk melakukan proses peminjaman atau pengembalian barang secara instan.', },
];

export default function InventarisHeader() {
  const [isClient, setIsClient] = useState(false);
  const tourRef = useRef<any>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleStartTour = () => {
    if (tourRef.current) tourRef.current.startTour();
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-end gap-4 shrink-0 px-4 md:px-0 mb-6">
       <div>
          <div className="flex items-center gap-4">
             <h1 className="text-3xl font-bold font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-inventory-header">
                Inventaris Aset <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">📦</span>
             </h1>
             
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

             {isClient && <TourGuide ref={tourRef} steps={inventarisTourSteps} tourKey="inventaris" />}
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Pantau ketersediaan dan kondisi barang.</p>
       </div>
    </div>
  );
}
