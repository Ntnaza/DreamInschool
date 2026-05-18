import { prisma } from "@/lib/prisma";
import { getActivePeriodeId } from "@/lib/actions";
import PengurusClient from "./PengurusClient";

// Bungkus dalam async function agar mengembalikan Native Promise, 
// sehingga Next.js tidak melakukan sinkronisasi blocking saat serialisasi PrismaPromise.
async function getMembers() {
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulasi delay
  const id = await getActivePeriodeId();
  const rawMembers = await prisma.pengurus.findMany({
    where: { periodeId: id || undefined },
    include: { user: true }, 
    orderBy: { nama: "asc" },
  });
  return rawMembers.map((m) => ({
    ...m,
    tglLahir: m.tglLahir ? m.tglLahir.toISOString().split("T")[0] : "",
  }));
}

async function getDivisions() {
  return await prisma.divisi.findMany({
    include: { jabatans: true },
    orderBy: { createdAt: "asc" },
  });
}

export default function PengurusPage() {
  const membersPromise = getMembers();
  const divisionsPromise = getDivisions();

  return (
    <div className="relative h-[calc(100vh-140px)] flex flex-col font-sans">
      <PengurusClient dataPromise={membersPromise} divisionsPromise={divisionsPromise} />
    </div>
  );
}
