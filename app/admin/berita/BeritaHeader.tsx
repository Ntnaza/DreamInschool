"use client";

import { useState, useEffect } from "react";
import { Plus, ChevronLeft } from "lucide-react";
import TourGuide from "@/components/TourGuide";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const beritaTourSteps = [
    { target: '.tour-berita-header', content: 'Manajemen seluruh artikel dan berita organisasi di sini.', disableBeacon: true },
    { target: '.tour-write-btn', content: 'Klik di sini untuk mulai menulis artikel berita baru.', disableBeacon: true },
    { target: '.tour-search-bar', content: 'Cari berita dengan cepat berdasarkan judul atau kategori.', disableBeacon: true },
    { target: '.tour-filter-btn', content: 'Saring daftar berita berdasarkan kategori atau status publikasi.', disableBeacon: true },
    { target: '.tour-berita-card', content: 'Kelola (Edit/Hapus) artikel Anda melalui tombol hover di atas gambar.', disableBeacon: true },
];

export default function BeritaHeader() {
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const isEditorOpen = searchParams.get("editor") === "true";

  useEffect(() => { setIsClient(true); }, []);

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
                    {isClient && <TourGuide steps={beritaTourSteps} />}
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
