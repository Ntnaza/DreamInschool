"use client";

import { useState, useEffect, useRef } from "react";
import TourGuide from "@/components/TourGuide";
import { HelpCircle } from "lucide-react";

const defaultSteps = [
    { target: '.tour-dashboard-header', content: 'Selamat Datang! Ini adalah pusat kontrol utama untuk memantau seluruh aktivitas organisasi.' },
];

interface DashboardHeaderProps {
  children?: React.ReactNode;
  title?: string;
  emoji?: string;
  steps?: { target: string; content: string }[];
  tourKey?: string;
}

export default function DashboardHeader({ 
  children, 
  title = "Dashboard Overview", 
  emoji = "📊",
  steps = defaultSteps,
  tourKey = "dashboard"
}: DashboardHeaderProps) {
  const [isClient, setIsClient] = useState(false);
  const tourRef = useRef<any>(null);

  useEffect(() => { setIsClient(true); }, []);

  const handleStartTour = () => {
    if (tourRef.current) {
      tourRef.current.startTour();
    }
  };

  return (
    <div className="flex-shrink-0">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
         <div>
            <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-bold font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-dashboard-header">
                   {title} <span className="text-2xl p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">{emoji}</span>
                </h1>

                {/* Tombol Bantuan Manual */}
                {isClient && (
                  <button 
                    onClick={handleStartTour}
                    className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1 text-sm font-medium"
                    title="Bantuan Tour"
                  >
                    <HelpCircle className="w-5 h-5" />
                    <span className="hidden sm:inline">Panduan</span>
                  </button>
                )}

                {isClient && <TourGuide ref={tourRef} steps={steps} tourKey={tourKey} />}
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">
               {title === "Dashboard Overview" ? "Pantau performa organisasi secara real-time hari ini." : `Kelola ${title.toLowerCase()} organisasi dengan mudah.`}
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
