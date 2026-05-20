import { Suspense, use } from "react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import HeroOrbit from "./HeroOrbit";

async function getHeroStats(periodeId: string | null) {
  // Simulasi delay biar kelihatan skeletonnya (bisa dihapus nanti)
  await new Promise(resolve => setTimeout(resolve, 1500));

  let ketuaNama = "Ketua OSIS";
  try {
    const ketua = await prisma.pengurus.findFirst({
      where: { 
        periodeId: periodeId || undefined,
        jabatan: { contains: "Ketua OSIS" } 
      },
      select: { nama: true }
    });
    if (ketua) ketuaNama = ketua.nama;
  } catch (error) {}

  const totalPengurus = await prisma.pengurus.count({
    where: { periodeId: periodeId || undefined }
  }).catch(() => 0);
  
  const totalProker = await prisma.programKerja.count({
    where: { periodeId: periodeId || undefined }
  }).catch(() => 0); 
  
  const totalAspirasi = await prisma.aspirasi.count().catch(() => 0);

  return { ketuaNama, totalPengurus, totalProker, totalAspirasi };
}

function HeroStatsContent({ statsPromise, currentPeriode }: { statsPromise: Promise<any>, currentPeriode: any }) {
  const { ketuaNama, totalPengurus, totalProker, totalAspirasi } = use(statsPromise);

  return (
    <>
      <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed border-l-2 border-blue-600/50 dark:border-white/40 pl-5 max-w-md mx-auto lg:mx-0 font-bold">
        Selamat datang di portal resmi kami. Periode <b>{currentPeriode?.tahun}</b> dipimpin oleh <b>{ketuaNama}</b> beserta {totalPengurus} pengurus lainnya.
      </p>

      <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
        <a href="#aspirasi-form" className="px-6 py-2.5 bg-blue-700 dark:bg-white text-white dark:text-black rounded-full font-bold text-xs md:text-sm hover:scale-105 transition-all shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-white/40">
          Sampaikan Aspirasi ({totalAspirasi})
        </a>
        <Link href="/pengurus" className="px-6 py-2.5 bg-transparent border border-slate-400 dark:bg-black/20 dark:border-white/30 text-slate-900 dark:text-white rounded-full font-bold text-xs md:text-sm hover:bg-slate-300 dark:hover:bg-white dark:hover:text-black transition-all backdrop-blur-sm">
          Struktur Organisasi
        </Link>
      </div>
    </>
  );
}

function HeroStatsSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="border-l-2 border-slate-300 dark:border-white/20 pl-5 max-w-md mx-auto lg:mx-0 space-y-2">
         <div className="h-4 bg-slate-300 dark:bg-slate-800 rounded w-full"></div>
         <div className="h-4 bg-slate-300 dark:bg-slate-800 rounded w-5/6"></div>
         <div className="h-4 bg-slate-300 dark:bg-slate-800 rounded w-4/6"></div>
      </div>
      <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
        <div className="h-10 w-40 bg-blue-400/50 dark:bg-white/20 rounded-full"></div>
        <div className="h-10 w-36 bg-slate-300 dark:bg-slate-800 rounded-full"></div>
      </div>
    </div>
  );
}

export default function HeroSection({ selectedPeriodeId, currentPeriode }: { selectedPeriodeId: string | null, currentPeriode: any }) {
  const statsPromise = getHeroStats(selectedPeriodeId);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-slate-200 dark:bg-[#020617] z-0 transition-colors duration-500" />
        
        {/* DEKORASI DARK MODE */}
        <div 
          className="hidden dark:block absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-[40%] bg-gradient-to-br from-white/30 via-white/5 to-transparent blur-[120px] z-0 pointer-events-none" 
          style={{ transform: 'rotate(-20deg)' }}
        />
        
        {/* Noise Texture */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.svg')] opacity-[0.04] dark:opacity-[0.10] mix-blend-overlay z-0 pointer-events-none" />

        {/* Konten Hero */}
        <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full pt-20 pb-12 lg:py-0">
          
          {/* KIRI: TEKS */}
          <div className="space-y-6 text-center lg:text-left lg:max-w-lg mx-auto lg:mx-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight drop-shadow-sm dark:drop-shadow-2xl transition-colors duration-300">
              OSIS & MPK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-slate-200 dark:via-slate-400 dark:to-slate-500">
                {currentPeriode?.namaKabinet ? `KABINET ${currentPeriode.namaKabinet.toUpperCase()}` : "SMK NURUL ISLAM"}
              </span>
              <br />
              <span className="block mt-1 font-bold text-slate-800 dark:text-white tracking-widest">
                {currentPeriode?.tahun || "CIANJUR"}
              </span>
            </h1>
            
            <Suspense fallback={<HeroStatsSkeleton />}>
                <HeroStatsContent statsPromise={statsPromise} currentPeriode={currentPeriode} />
            </Suspense>
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
  );
}
