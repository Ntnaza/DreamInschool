import { prisma } from "@/lib/prisma";
import { getActivePeriodeId } from "@/lib/actions";
import ProkerClient from "./ProkerClient";

async function getProkers() {
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulasi delay agar skeleton terlihat
  const id = await getActivePeriodeId();
  const rawProkers = await prisma.programKerja.findMany({
    where: { periodeId: id || undefined },
    orderBy: { createdAt: "desc" },
  });
  
  return rawProkers.map((p) => ({
    id: p.id,
    title: p.nama,
    description: p.deskripsi,
    sekbid: p.divisi,
    startDate: p.startDate ? p.startDate.toISOString().split('T')[0] : "",
    endDate: p.deadline ? p.deadline.toISOString().split('T')[0] : "",
    progress: p.progress, 
    priority: p.prioritas,
    budget: p.anggaran,
    pic: p.lokasi || "Admin",
    picColor: ["blue", "purple", "pink", "green", "orange"][p.id % 5],
    image: p.image, 
    isFeatured: p.isFeatured
  }));
}

async function getDivisions() {
  const rawDivisions = await prisma.divisi.findMany({
    orderBy: { nama: "asc" },
  });
  return rawDivisions.map(d => d.nama);
}

export default function ProkerPage() {
  const formattedProkersPromise = getProkers();
  const divisionsPromise = getDivisions();

  return (
    <div className="relative h-[calc(100vh-140px)] flex flex-col font-sans">
      <ProkerClient 
         dataPromise={formattedProkersPromise} 
         divisionsPromise={divisionsPromise} 
      />
    </div>
  );
}
