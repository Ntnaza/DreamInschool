import { prisma } from "@/lib/prisma";
import { getSelectedPeriodeId } from "@/lib/actions";
import ProgramClient from "./ProgramClient";

// Pastikan data selalu update
export const dynamic = "force-dynamic";

export default async function ProgramPage() {
  
  // 1. Ambil ID periode terpilih
  const selectedPeriodeId = await getSelectedPeriodeId();

  // 2. Ambil Data Proker dari Database berdasarkan periode
  const programs = await prisma.programKerja.findMany({
    where: { periodeId: selectedPeriodeId || undefined },
    orderBy: [
      { startDate: 'asc' }, // Prioritas 1: Tanggal Mulai
      { createdAt: 'asc' }  // Fallback: Tanggal Dibuat
    ]
  });

  return <ProgramClient programs={programs} />;
}