import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import { getActivePeriodeId } from "@/lib/actions";
import ProkerClient from "./ProkerClient";

/**
 * SKELETON KANBAN (Hanya untuk area kartu)
 */
function KanbanSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-6 min-w-[1000px] md:min-w-0 min-h-full h-fit animate-pulse">
      {[1, 2, 3].map((col) => (
        <div key={col} className="flex-1 rounded-[2rem] p-4 bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 min-h-[500px] space-y-4">
          <div className="flex justify-between items-center px-2 mb-4">
            <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded" />
            <div className="h-5 w-8 bg-slate-200 dark:bg-slate-800 rounded-full" />
          </div>
          {[1, 2].map((card) => (
            <div key={card} className="bg-white dark:bg-[#1e293b] p-4 rounded-2xl border border-slate-100 dark:border-white/5 space-y-4">
              <div className="flex justify-between">
                <div className="h-5 w-16 bg-slate-100 dark:bg-slate-800 rounded" />
                <div className="h-4 w-12 bg-slate-50 dark:bg-slate-800/50 rounded" />
              </div>
              <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" />
              <div className="space-y-2">
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded" />
                <div className="h-2 w-2/3 bg-slate-100 dark:bg-slate-800 rounded" />
              </div>
              <div className="pt-3 border-t border-slate-50 dark:border-white/5 flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800" />
                  <div className="h-3 w-16 bg-slate-100 dark:bg-slate-800 rounded" />
                </div>
                <div className="h-4 w-12 bg-slate-100 dark:bg-slate-800 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

async function ProkerData() {
  const activePeriodeId = await getActivePeriodeId();

  // 1. AMBIL DATA DARI DATABASE (Filter by Periode Aktif)
  const rawProkers = await prisma.programKerja.findMany({
    where: { periodeId: activePeriodeId || undefined },
    orderBy: { createdAt: "desc" },
  });

  const rawDivisions = await prisma.divisi.findMany({
    orderBy: { nama: "asc" },
  });

  // 2. MAPPING DATA (DATABASE -> UI)
  const formattedProkers = rawProkers.map((p) => ({
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

  const divisions = rawDivisions.map(d => d.nama);

  return <ProkerClient initialData={formattedProkers} divisions={divisions} />;
}

export default async function ProkerPage() {
  return (
    <div className="relative h-[calc(100vh-140px)] flex flex-col font-sans">
      <Suspense fallback={<KanbanSkeleton />}>
        <ProkerData />
      </Suspense>
    </div>
  );
}
