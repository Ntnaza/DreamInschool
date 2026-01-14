"use client";

import { useState } from "react";
import Joyride, { Step, CallBackProps, STATUS, TooltipRenderProps } from "react-joyride";
import { Info, X, ChevronRight, ChevronLeft } from "lucide-react";

interface TourGuideProps {
  steps: Step[];
}

export default function TourGuide({ steps }: TourGuideProps) {
  const [run, setRun] = useState(false);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    // Gunakan logika OR (||) agar TypeScript aman
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false);
    }
  };

  // === INI RAHASIANYA: KOMPONEN TOOLTIP CUSTOM ===
  // Kita bikin tampilan sendiri pakai Tailwind biar bebas kreasinya
  const CustomTooltip = ({
    continuous,
    index,
    step,
    backProps,
    closeProps,
    primaryProps,
    tooltipProps,
    isLastStep,
    size, // Jumlah total langkah
  }: TooltipRenderProps) => {
    
    return (
      <div 
        {...tooltipProps} 
        className="bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 max-w-sm flex flex-col overflow-hidden font-sans"
      >
        {/* 1. Header & Close Button */}
        <div className="flex justify-between items-start p-5 pb-0">
           <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black font-bold">
                 {index + 1}
              </span>
              <h4 className="text-sm font-black font-bold text-slate-900 dark:text-white">Panduan Sistem</h4>
           </div>
           <button {...closeProps} className="text-slate-400 hover:text-red-500 transition-colors">
              <X size={16} />
           </button>
        </div>

        {/* 2. Body Content */}
        <div className="p-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
           {step.content}
        </div>

        {/* 3. Footer (Navigation) */}
        <div className="p-4 bg-slate-50 dark:bg-white/5 flex items-center justify-between border-t border-slate-100 dark:border-white/5">
           
           {/* Counter (1 dari 6) */}
           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Langkah {index + 1} dari {size}
           </span>

           {/* Tombol Navigasi */}
           <div className="flex gap-2">
              {/* Tombol Back (Hanya muncul jika bukan langkah pertama) */}
              {index > 0 && (
                <button 
                  {...backProps} 
                  className="px-3 py-2 rounded-lg text-slate-500 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
              )}
              
              {/* Tombol Next / Finish */}
              <button 
                {...primaryProps} 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-lg shadow-blue-500/30 flex items-center gap-1 transition-transform active:scale-95"
              >
                 {isLastStep ? "Selesai" : "Lanjut"} {!isLastStep && <ChevronRight size={14} />}
              </button>
           </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Trigger Button */}
      <div className="relative z-30">
        <button 
          onClick={() => setRun(true)}
          className="group flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-white/5 border border-blue-200 dark:border-white/10 rounded-full shadow-sm hover:shadow-md hover:border-blue-400 transition-all active:scale-95"
        >
          <div className="relative">
              <Info size={16} className="text-blue-600 dark:text-blue-400" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-ping" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
          </div>
          <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Panduan Interaktif
          </span>
        </button>
      </div>

      <Joyride
        callback={handleJoyrideCallback}
        continuous={true}
        run={run}
        scrollToFirstStep={true}
        showProgress={true}
        showSkipButton={true}
        steps={steps}
        tooltipComponent={CustomTooltip} // <--- KITA PASANG KOMPONEN CUSTOM DISINI
        styles={{
          options: {
            arrowColor: '#ffffff', // Sesuaikan warna panah dengan background card
            overlayColor: 'rgba(0, 0, 0, 0.6)', // Backdrop gelap biar fokus
            zIndex: 10000,
          },
        }}
        // Locale gak perlu lagi karena teksnya sudah kita hardcode di CustomTooltip
      />
    </>
  );
}