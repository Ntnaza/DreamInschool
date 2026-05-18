import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getSelectedPeriodeId } from "@/lib/actions";
import HeroSection from "@/components/HeroSection";
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
  
  // Ambil ID periode yang dipilih atau aktif
  const selectedPeriodeId = await getSelectedPeriodeId();

  // Ambil data periode untuk menampilkan Nama Kabinet & Tahun
  const currentPeriode = await prisma.periode.findFirst({
    where: selectedPeriodeId ? { id: selectedPeriodeId } : { isAktif: true }
  });

  return (
    // BG UTAMA: Slate-200 (Light) / Hitam Space (Dark)
    <main className="min-h-screen bg-slate-200 dark:bg-[#020617] relative overflow-x-hidden transition-colors duration-500">
      
      {/* ==========================
          SECTION 1: HERO (ATAS)
         ========================== */}
      <HeroSection selectedPeriodeId={selectedPeriodeId} currentPeriode={currentPeriode} />

      {/* ==================================================
          SECTION BAWAHNYA (Masih Static/Aman)
          ================================================== */}
      
      <div suppressHydrationWarning>
        <LeaderSection periodeId={selectedPeriodeId} />
      </div>

      <ProgramSection periodeId={selectedPeriodeId} />

      <NewsSection periodeId={selectedPeriodeId} />
      
      <GalleryPreview periodeId={selectedPeriodeId} />

      <AgendaSection />

      <AdvisorSection />

      <MajorsSection />

      <AspirasiSection />

      <AspirasiWall />

      <Footer />
    </main>
  );
}