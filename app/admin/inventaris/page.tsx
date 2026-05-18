import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import InventarisClient from "./InventarisClient";
import InventarisHeader from "./InventarisHeader";

export default function InventarisPage() {
  return (
    <div className="relative h-[calc(100vh-140px)] flex flex-col font-sans">
      <InventarisHeader />
      <Suspense fallback={<InventarisSkeleton />}>
        <InventarisDataFetcher />
      </Suspense>
    </div>
  );
}

async function InventarisDataFetcher() {
  const itemsRaw = await prisma.inventaris.findMany({
    include: {
      riwayat: {
        orderBy: { tglKembali: "desc" },
        take: 5
      }
    },
    orderBy: { createdAt: "desc" },
  });

  const items = itemsRaw.map((item) => ({
    id: item.id,
    name: item.nama,
    code: item.kode,
    category: item.kategori,
    status: item.status,
    condition: item.kondisi,
    price: item.harga,
    image: item.fotoUrl,
    serialNum: item.serialNum,
    peminjam: item.peminjam,
    riwayat: item.riwayat
  }));

  return <InventarisClient initialItems={items} />;
}

function InventarisSkeleton() {
  return (
    <div className="flex-1 flex flex-col gap-6 font-sans relative overflow-hidden">
      {/* STATS OVERVIEW */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 shrink-0">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-slate-50 dark:bg-white/5 p-5 rounded-2xl h-[104px] animate-pulse" />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm flex flex-col overflow-hidden">
         <div className="p-5 border-b border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-white/5">
            <div className="flex flex-1 w-full gap-3">
               <div className="h-10 w-full max-w-md bg-slate-100 dark:bg-white/5 rounded-xl animate-pulse" />
               <div className="h-10 w-48 bg-slate-100 dark:bg-white/5 rounded-xl animate-pulse" />
            </div>
            <div className="flex gap-2">
               <div className="h-10 w-32 bg-slate-100 dark:bg-white/5 rounded-xl animate-pulse" />
               <div className="h-10 w-36 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse" />
            </div>
         </div>

         {/* GRID CATALOG */}
         <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                 <div key={i} className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-3 h-[280px] animate-pulse flex flex-col justify-between">
                    <div>
                       <div className="aspect-[4/3] rounded-xl bg-slate-200 dark:bg-slate-800 mb-3" />
                       <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded mb-1" />
                       <div className="h-3 w-1/2 bg-slate-200 dark:bg-slate-800 rounded mb-2" />
                       <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded" />
                    </div>
                    <div className="h-10 w-full bg-slate-200 dark:bg-slate-800 rounded-lg mt-auto" />
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}