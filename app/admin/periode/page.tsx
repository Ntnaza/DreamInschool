import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import PeriodeClient, { PeriodeSkeleton } from "./PeriodeClient";
import PeriodeHeader from "./PeriodeHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arsip Angkatan - OSIS MPK Admin",
};

export default function PeriodePage() {
  return (
    <div className="relative h-[calc(100vh-140px)] flex flex-col font-sans">
      <PeriodeHeader />
      <Suspense fallback={<PeriodeSkeleton />}>
        <PeriodeDataFetcher />
      </Suspense>
    </div>
  );
}

async function PeriodeDataFetcher() {
  const periods = await prisma.periode.findMany({
    orderBy: { tahun: "desc" },
    include: {
      _count: {
        select: {
          pengurus: true,
          proker: true,
          berita: true,
          galeri: true
        }
      }
    }
  });

  return <PeriodeClient initialData={periods} />;
}
