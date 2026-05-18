"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, HelpCircle } from "lucide-react";
import TourGuide from "@/components/TourGuide";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const periodeTourSteps = [
    { target: '.tour-periode-header', content: 'Selamat datang di Manajemen Angkatan! Di sini Anda dapat mengelola sejarah kepengurusan organisasi.', disableBeacon: true },
    { target: '.tour-add-btn', content: 'Klik tombol ini untuk menambahkan data angkatan atau masa jabatan baru.' },
    { target: '.tour-periode-card', content: 'Arahkan kursor pada kartu untuk mengubah data atau menghapus arsip angkatan.' },
];

export default function PeriodeHeader() {
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const tourRef = useRef<any>(null);
  
  useEffect(() => { setIsClient(true); }, []);

  const handleStartTour = () => {
    if (tourRef.current) {
      tourRef.current.startTour();
    }
  };

  const openAddModal = () => {
    const params = new URLSearchParams(searchParams);
    params.set("action", "add");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-end gap-4 shrink-0 mb-6">
       <div>
          <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3 tour-periode-header">
                 Arsip Angkatan <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">⏳</span>
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

              {isClient && <TourGuide ref={tourRef} steps={periodeTourSteps} tourKey="periode-admin" />}
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Kelola sejarah kepengurusan dan masa jabatan organisasi.</p>
       </div>
       <button onClick={openAddModal} className="tour-add-btn px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-lg flex items-center gap-2 transition-transform active:scale-95">
          <Plus size={16}/> Tambah Angkatan Baru
       </button>
    </div>
  );
}
