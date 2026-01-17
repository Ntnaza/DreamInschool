import Link from "next/link";
import { prisma } from "@/lib/prisma";
import HeroOrbit from "@/components/HeroOrbit";
import LeaderSection from "@/components/LeaderSection";
import ProgramSection from "@/components/ProgramSection";
import GallerySection from "@/components/GallerySection";
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
  
  // Ambil Ketua OSIS
  // SAYA PERBAIKI QUERY-NYA: Pakai "Ketua OSIS" agar tidak tertukar dengan "Ketua MPK"
  const ketua = await prisma.pengurus.findFirst({
    where: { 
      jabatan: { contains: "Ketua OSIS" } 
    }
  });

  // Hitung jumlah data untuk statistik dashboard
  const totalPengurus = await prisma.pengurus.count();
  const totalProker = await prisma.programKerja.count();
  const totalAspirasi = await prisma.aspirasi.count();

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
            className="hidden dark:block absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-[40%] bg-gradient-to-br from-white/30 via-white/5 to-transparent blur-[120px] z-0" 
            style={{ transform: 'rotate(-20deg)' }}
          />
          
          {/* Noise Texture */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] dark:opacity-[0.10] mix-blend-overlay z-0" />

          {/* Konten Hero */}
          <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center relative z-10 w-full">
            
            {/* KIRI: TEKS */}
            <div className="space-y-4 pt-20 lg:pt-0 text-center lg:text-left lg:max-w-lg mx-auto lg:mx-0">
              
              {/* 🔥 LIVE DB STATUS BADGE (BUKTI KONEKSI) 🔥 */}
              {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 mb-2 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300">
                  Database Connected: {totalPengurus} Pengurus | {totalProker} Proker
                </span>
              </div> */}

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
              
              <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed border-l-2 border-blue-600/50 dark:border-white/40 pl-5 max-w-md mx-auto lg:mx-0 mt-4 font-medium dark:font-normal">
                {/* Data Ketua OSIS diambil dinamis di sini */}
                Selamat datang di portal resmi kami. Saat ini dipimpin oleh <b>{ketua?.nama || "Ketua OSIS"}</b> beserta {totalPengurus} pengurus lainnya.
              </p>

              <div className="flex flex-wrap gap-3 pt-4 justify-center lg:justify-start">
                <Link href="/program" className="px-6 py-2.5 bg-blue-700 dark:bg-white text-white dark:text-black rounded-full font-bold text-xs md:text-sm hover:scale-105 transition-all shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-white/40">
                  Sampaikan Aspirasi ({totalAspirasi})
                </Link>
                {/* Tombol Outline */}
                <Link href="/pengurus" className="px-6 py-2.5 bg-transparent border border-slate-400 dark:bg-black/20 dark:border-white/30 text-slate-900 dark:text-white rounded-full font-bold text-xs md:text-sm hover:bg-slate-300 dark:hover:bg-white dark:hover:text-black transition-all backdrop-blur-sm">
                  Struktur Organisasi
                </Link>
              </div>
            </div>

            {/* KANAN: ORBIT LOGO */}
            <div className="relative flex justify-center lg:justify-end transform scale-90 lg:scale-[0.85] origin-center lg:origin-right">
                <HeroOrbit />
            </div>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
             <span className="text-slate-600 dark:text-white/50 text-xs tracking-widest uppercase">Scroll Down</span>
             <div className="w-[1px] h-8 bg-gradient-to-b from-slate-600 to-transparent dark:from-white dark:to-transparent mx-auto mt-2" />
          </div>
      </section>

      {/* ==================================================
          SECTION BAWAHNYA (Masih Static/Aman)
          ================================================== */}
      
      <LeaderSection />

      <ProgramSection />

      <GallerySection />

      <AgendaSection />

      <AdvisorSection />

      <MajorsSection />

      <AspirasiSection />

      <AspirasiWall />

      <Footer />
    </main>
  );
}