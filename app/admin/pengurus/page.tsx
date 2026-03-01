import { prisma } from "@/lib/prisma";
import PengurusClient from "./PengurusClient";

export default async function PengurusPage() {
  // 1. Ambil data pengurus
  const rawMembers = await prisma.pengurus.findMany({
    orderBy: { nama: "asc" },
  });

  // 2. Ambil data divisi + jabatannya
  const divisions = await prisma.divisi.findMany({
    include: { jabatans: true },
    orderBy: { createdAt: "asc" },
  });

  // 3. Format Data Pengurus
  const formattedMembers = rawMembers.map((m) => ({
    ...m,
    tglLahir: m.tglLahir ? m.tglLahir.toISOString().split("T")[0] : "",
  }));

  return <PengurusClient initialData={formattedMembers} initialDivisi={divisions} />;
}