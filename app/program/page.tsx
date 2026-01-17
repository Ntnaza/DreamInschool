import { prisma } from "@/lib/prisma";
import ProgramClient from "./ProgramClient";

// Pastikan data selalu update
export const dynamic = "force-dynamic";

export default async function ProgramPage() {
  
  // 1. Ambil Data Proker dari Database
  // Urutkan berdasarkan tanggal mulai (ASC = Terlama ke Terbaru)
  const programs = await prisma.programKerja.findMany({
    orderBy: [
      { startDate: 'asc' }, // Prioritas 1: Tanggal Mulai
      { createdAt: 'asc' }  // Fallback: Tanggal Dibuat
    ]
  });

  return <ProgramClient programs={programs} />;
}