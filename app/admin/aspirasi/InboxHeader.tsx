"use client";

import { useState, useEffect, useRef } from "react";
import TourGuide from "@/components/TourGuide";
import { HelpCircle } from "lucide-react";

const inboxTourSteps = [
    { target: '.tour-inbox-header', content: 'Selamat datang di Pusat Aspirasi! Di sini Anda bisa memantau dan membalas setiap pesan dari siswa.' },
    { target: '.tour-tab-nav', content: 'Gunakan tab ini untuk berpindah antara pesan yang Masuk dan yang sudah di Arsip/Selesai.' },
    { target: '.tour-message-list', content: 'Ini adalah daftar aspirasi yang masuk. Klik pada pesan untuk membaca detail lengkapnya.' },
    { target: '.tour-message-detail', content: 'Panel ini menampilkan isi pesan secara detail. Anda bisa langsung membalas atau mengarsipkan pesan di sini.' },
];

export default function InboxHeader() {
  const [isClient, setIsClient] = useState(false);
  const tourRef = useRef<any>(null);

  useEffect(() => { setIsClient(true); }, []);

  const handleStartTour = () => {
    if (tourRef.current) {
      tourRef.current.startTour();
    }
  };

  return (
    <div className="flex-shrink-0 tour-inbox-header">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
         <div>
            <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-bold font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                   Inbox Aspirasi <span className="text-2xl p-2 bg-pink-100 dark:bg-pink-900/30 rounded-full">📩</span>
                </h1>
                
                {isClient && (
                  <button 
                    onClick={handleStartTour}
                    className="p-2 text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors flex items-center gap-1 text-sm font-medium"
                    title="Bantuan Panduan"
                  >
                    <HelpCircle className="w-5 h-5" />
                    <span className="hidden sm:inline">Panduan</span>
                  </button>
                )}

                {isClient && <TourGuide ref={tourRef} steps={inboxTourSteps} tourKey="inbox" />}
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1 ml-1">
               Respon aspirasi dan keluhan siswa secara profesional.
            </p>
         </div>
      </div>
    </div>
  );
}
