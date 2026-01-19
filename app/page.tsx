import Link from "next/link";
import { prisma } from "@/lib/prisma";
import HeroOrbit from "@/components/HeroOrbit";
import LeaderSection from "@/components/LeaderSection";
import ProgramSection from "@/components/ProgramSection";
import NewsSection from "@/components/NewsSection";
import GalleryPreview from "@/components/GalleryPreview"; 
import AgendaSection from "@/components/AgendaSection";
import AdvisorSection from "@/components/AdvisorSection";
import MajorsSection from "@/components/MajorsSection";
import AspirasiSection from "@/components/AspirasiSection";
import AspirasiWall from "@/components/AspirasiWall";
import Footer from "@/components/Footer";

// Agar data selalu update saat ada perubahan di DB (Real-time)
export const dynamic = "force-dynamic";

export default async function Home() {
  
  // 1. FETCHING DATA (Backend Logic)
  // ---------------------------------------------
  
  // Ambil Ketua OSIS dengan penanganan error yang lebih aman
  let ketuaNama = "Ketua OSIS";
  try {
    const ketua = await prisma.pengurus.findFirst({
      where: { 
        jabatan: { contains: "Ketua OSIS" } 
      },
      select: { nama: true } // Hanya ambil field nama untuk efisiensi
    });
    if (ketua) {
      ketuaNama = ketua.nama;
    }
  } catch (error) {
    console.error("Gagal mengambil data Ketua OSIS:", error);
  }

  // Hitung jumlah data untuk statistik dashboard dengan fallback 0
  const totalPengurus = await prisma.pengurus.count().catch(() => 0);
  const totalProker = await prisma.programKerja.count().catch(() => 0); // Jika tidak dipakai di UI, bisa dihapus
  const totalAspirasi = await prisma.aspirasi.count().catch(() => 0);

  return (
    // BG UTAMA: Slate-200 (Light) / Hitam Space (Dark)
    <main className="min-h-screen bg-slate-200 dark:bg-[#020617] relative overflow-x-hidden transition-colors duration-500">
      
      {/* ==========================
          SECTION 1: HERO (ATAS)
         ========================== */}
      <section className="relative min-h-screen flex items-center justify-center">
          
          {/* Background Layer */}
          <div className="absolute inset-0 bg-slate-200 dark:bg-[#020617] z-0 transition-colors duration-500" />
          
          {/* DEKORASI DARK MODE */}
          <div 
            className="hidden dark:block absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-[40%] bg-gradient-to-br from-white/30 via-white/5 to-transparent blur-[120px] z-0 pointer-events-none" 
            style={{ transform: 'rotate(-20deg)' }}
          />
          
          {/* Noise Texture */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] dark:opacity-[0.10] mix-blend-overlay z-0 pointer-events-none" />

          {/* Konten Hero */}
          <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full pt-20 pb-12 lg:py-0">
            
            {/* KIRI: TEKS */}
            <div className="space-y-6 text-center lg:text-left lg:max-w-lg mx-auto lg:mx-0">
              
              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight drop-shadow-sm dark:drop-shadow-2xl transition-colors duration-300">
                OSIS & MPK <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-slate-200 dark:via-slate-400 dark:to-slate-500">
                  SMK NURUL ISLAM
                </span>
                <br />
                <span className="block mt-1 font-black text-slate-800 dark:text-white tracking-widest">
                  CIANJUR
                </span>
              </h1>
              
              <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed border-l-2 border-blue-600/50 dark:border-white/40 pl-5 max-w-md mx-auto lg:mx-0 font-medium dark:font-normal">
                Selamat datang di portal resmi kami. Saat ini dipimpin oleh <b>{ketuaNama}</b> beserta {totalPengurus} pengurus lainnya.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
                <Link href="/aspirasi" className="px-6 py-2.5 bg-blue-700 dark:bg-white text-white dark:text-black rounded-full font-bold text-xs md:text-sm hover:scale-105 transition-all shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-white/40">
                  Sampaikan Aspirasi ({totalAspirasi})
                </Link>
                {/* Tombol Outline */}
                <Link href="/pengurus" className="px-6 py-2.5 bg-transparent border border-slate-400 dark:bg-black/20 dark:border-white/30 text-slate-900 dark:text-white rounded-full font-bold text-xs md:text-sm hover:bg-slate-300 dark:hover:bg-white dark:hover:text-black transition-all backdrop-blur-sm">
                  Struktur Organisasi
                </Link>
              </div>
            </div>

            {/* KANAN: ORBIT LOGO */}
            <div className="relative flex justify-center lg:justify-end transform scale-90 lg:scale-[0.85] origin-center lg:origin-right min-h-[300px] lg:min-h-auto">
                <HeroOrbit />
            </div>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20 hidden md:block">
             <span className="text-slate-600 dark:text-white/50 text-xs tracking-widest uppercase">Scroll Down</span>
             <div className="w-[1px] h-8 bg-gradient-to-b from-slate-600 to-transparent dark:from-white dark:to-transparent mx-auto mt-2" />
          </div>
      </section>

      {/* ==================================================
          SECTION BAWAHNYA (Masih Static/Aman)
          ================================================== */}
      
      <LeaderSection />

      <ProgramSection />

      <NewsSection />
      
      <GalleryPreview />

      <AgendaSection />

      <AdvisorSection />

      <MajorsSection />

      <AspirasiSection />

      <AspirasiWall />

      <Footer />
    </main>
  );
}