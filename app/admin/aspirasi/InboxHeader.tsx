"use client";

import { useState, useEffect } from "react";
import TourGuide from "@/components/TourGuide";

const inboxTourSteps = [
    { target: '.tour-inbox-header', content: 'Pusat Manajemen Aspirasi Siswa.', disableBeacon: true },
    { target: '.tour-tab-nav', content: 'Gunakan folder ini untuk memisahkan pesan masuk dan arsip selesai.', placement: 'right' as const },
    { target: '.tour-message-list', content: 'Daftar pesan masuk. Klik salah satu untuk membaca detailnya.', placement: 'right' as const },
    { target: '.tour-message-detail', content: 'Baca isi lengkap aspirasi dan berikan jawaban langsung di panel ini.', placement: 'left' as const },
];

export default function InboxHeader() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  return (
    <div className="flex-shrink-0 tour-inbox-header">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
         <div>
            <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-black font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                   Inbox Aspirasi <span className="text-2xl p-2 bg-pink-100 dark:bg-pink-900/30 rounded-full">📩</span>
                </h1>
                {isClient && <TourGuide steps={inboxTourSteps} />}
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1 ml-1">
               Respon aspirasi dan keluhan siswa secara profesional.
            </p>
         </div>
      </div>
    </div>
  );
}
