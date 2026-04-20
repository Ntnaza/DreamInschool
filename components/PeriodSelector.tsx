"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { setSelectedPeriodeAction } from "@/lib/actions";

interface Periode {
  id: number;
  tahun: string;
  namaKabinet: string | null;
  isAktif: boolean;
}

export default function PeriodSelector({ 
  periodes, 
  selectedId,
  isSpecialPage = false 
}: { 
  periodes: Periode[], 
  selectedId: number | null,
  isSpecialPage?: boolean
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const selectedPeriode = periodes.find(p => p.id === selectedId) || periodes.find(p => p.isAktif);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = async (id: number) => {
    setIsOpen(false);
    await setSelectedPeriodeAction(id);
    router.refresh();
  };

  if (periodes.length === 0) return null;

  // Tentukan warna teks & border berdasarkan halaman
  const buttonClass = isSpecialPage
    ? "text-white border-white/30 hover:bg-white/10"
    : "text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-white/5";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold border rounded-full transition-all backdrop-blur-sm ${buttonClass}`}
      >
        <span className="hidden sm:inline opacity-70">Periode:</span>
        <span>{selectedPeriode?.tahun || "Pilih Periode"}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden z-[60] animate-in fade-in zoom-in duration-200">
          <div className="py-2">
            <div className="px-4 py-2 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              Pilih Masa Jabatan
            </div>
            {periodes.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSelect(p.id)}
                className={`w-full text-left px-4 py-2.5 text-xs flex flex-col gap-0.5 transition-colors ${
                  p.id === selectedId
                    ? "bg-blue-600 text-white"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
                }`}
              >
                <span className="font-bold">{p.tahun}</span>
                {p.namaKabinet && (
                  <span className={`text-[10px] ${p.id === selectedId ? "text-blue-100" : "text-slate-500"}`}>
                    Kabinet {p.namaKabinet}
                  </span>
                )}
                {p.isAktif && p.id !== selectedId && (
                  <span className="text-[9px] text-blue-500 font-bold uppercase mt-1">Sedang Aktif</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
