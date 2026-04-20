import { prisma } from "@/lib/prisma";
import PeriodeClient from "./PeriodeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arsip Angkatan - OSIS MPK Admin",
};

export default async function PeriodePage() {
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

  return (
    <div className="relative h-[calc(100vh-140px)] flex flex-col font-sans">
      <PeriodeClient initialData={periods} />
    </div>
  );
}
