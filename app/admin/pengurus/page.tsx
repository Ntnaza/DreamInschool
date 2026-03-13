import { prisma } from "@/lib/prisma";
import PengurusClient from "./PengurusClient";

export default async function PengurusPage() {
  const rawMembers = await prisma.pengurus.findMany({
    orderBy: { nama: "asc" },
  });

  const divisions = await prisma.divisi.findMany({
    include: { jabatans: true },
    orderBy: { createdAt: "asc" },
  });

  const formattedMembers = rawMembers.map((m) => ({
    ...m,
    tglLahir: m.tglLahir ? m.tglLahir.toISOString().split("T")[0] : "",
  }));

  return (
    <div className="relative h-[calc(100vh-140px)] flex flex-col font-sans">
      <PengurusClient initialData={formattedMembers} initialDivisi={divisions} />
    </div>
  );
}
