"use client";

import { useState, useEffect } from "react";
import { Plus, Layers } from "lucide-react";
import TourGuide from "@/components/TourGuide";

const pengurusTourSteps = [
    { target: '.tour-pengurus-header', content: 'Selamat datang! Ini adalah pusat database seluruh anggota OSIS & MPK.', disableBeacon: true },
    { target: '.tour-manage-divisi', content: 'Di sini Anda bisa mengatur Struktur Organisasi (Divisi & Jabatan) secara dinamis tanpa batas.', disableBeacon: true },
    { target: '.tour-add-member-btn', content: 'Gunakan tombol ini untuk menambah anggota baru ke dalam sistem.', disableBeacon: true },
    { target: '.tour-filter-sekbid', content: 'Saring daftar anggota berdasarkan Divisi/Sekbid untuk pencarian yang lebih terfokus.', disableBeacon: true },
    { target: '.tour-search-bar', content: 'Cari anggota secara spesifik berdasarkan Nama atau Jabatan di sini.', disableBeacon: true },
    { target: '.tour-view-toggle', content: 'Pilih tampilan yang paling nyaman bagi Anda: Mode Kartu (Grid) atau Mode Daftar (List).', disableBeacon: true },
    { target: '.tour-member-card', content: 'Setiap kartu menampilkan info ringkas. Klik ikon pensil untuk edit, atau tong sampah untuk hapus.', disableBeacon: true },
];

export default function PengurusHeader({ onOpenStructure, onAddMember }: { onOpenStructure: () => void, onAddMember: () => void }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  return (
    <div className="flex-shrink-0">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
        <div>
          <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-pengurus-header font-sans">
                Data Pengurus <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">👥</span>
              </h1>
              {isClient && <TourGuide steps={pengurusTourSteps} />}
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1 font-sans">Database keanggotaan dan struktur organisasi.</p>
        </div>
        
        <div className="flex gap-3">
          <button onClick={onOpenStructure} className="tour-manage-divisi px-5 py-3 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 rounded-xl font-bold text-xs shadow-sm flex items-center gap-2 transition-all hover:bg-slate-50 font-sans uppercase tracking-widest">
            <Layers size={18} /> Struktur
          </button>
          <button onClick={onAddMember} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-transform active:scale-95 tour-add-member-btn font-sans uppercase tracking-widest">
            <Plus size={20} /> Tambah
          </button>
        </div>
      </div>
    </div>
  );
}
