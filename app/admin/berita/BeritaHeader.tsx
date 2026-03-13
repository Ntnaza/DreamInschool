"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, ChevronLeft, HelpCircle } from "lucide-react";
import TourGuide from "@/components/TourGuide";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const beritaTourSteps = [
    { target: '.tour-berita-header', content: 'Selamat datang di Manajemen Berita! Di sini Anda bisa mengelola seluruh artikel dan kabar terbaru organisasi.' },
    { target: '.tour-write-btn', content: 'Klik tombol ini untuk mulai menulis artikel berita baru yang akan tampil di website publik.' },
    { target: '.tour-search-bar', content: 'Cari berita yang sudah dibuat dengan cepat melalui judul atau isi konten.' },
    { target: '.tour-filter-btn', content: 'Gunakan filter ini untuk menyaring berita berdasarkan kategori tertentu.' },
    { target: '.tour-berita-card', content: 'Setiap kartu berita memiliki tombol aksi untuk Mengedit atau Menghapus artikel saat Anda mengarahkan kursor ke atasnya.' },
];

export default function BeritaHeader() {
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const tourRef = useRef<any>(null);
  
  const isEditorOpen = searchParams.get("editor") === "true";

  useEffect(() => { setIsClient(true); }, []);

  const handleStartTour = () => {
    if (tourRef.current) {
      tourRef.current.startTour();
    }
  };

  const toggleEditor = () => {
    const params = new URLSearchParams(searchParams);
    if (isEditorOpen) {
      params.delete("editor");
      params.delete("id");
    } else {
      params.set("editor", "true");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex-shrink-0">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
         <div>
            <div className="flex items-center gap-4 mb-1">
                {!isEditorOpen ? (
                  <>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-berita-header">
                      Manajemen Berita <span className="text-2xl p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">📰</span>
                    </h1>
                    
                    {isClient && (
                      <button 
                        onClick={handleStartTour}
                        className="p-2 text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1 text-sm font-medium"
                        title="Bantuan Panduan"
                      >
                        <HelpCircle className="w-5 h-5" />
                        <span className="hidden sm:inline">Panduan</span>
                      </button>
                    )}

                    {isClient && <TourGuide ref={tourRef} steps={beritaTourSteps} tourKey="berita" />}
                  </>
                ) : (
                  <div className="flex items-center gap-4">
                    <button onClick={toggleEditor} className="p-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-slate-500 hover:text-blue-600 transition-all">
                       <ChevronLeft size={20} />
                    </button>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                       {searchParams.get("id") ? "Perbarui Artikel" : "Tulis Artikel Baru"}
                    </h1>
                  </div>
                )}
            </div>
            {!isEditorOpen && <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Kelola narasi dan informasi seputar OSIS & MPK.</p>}
         </div>
         
         {!isEditorOpen && (
           <button 
             onClick={toggleEditor}
             className="tour-write-btn px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 flex items-center gap-2 transition-transform active:scale-95 text-xs"
           >
              <Plus size={18} /> Tulis Berita
           </button>
         )}
      </div>
    </div>
  );
}
