import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import KeuanganClient from "./KeuanganClient";
import KasHeader from "./KasHeader";

export default function KasPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-140px)] font-sans">
      <KasHeader />
      <Suspense fallback={<KasSkeleton />}>
        <KasDataFetcher />
      </Suspense>
    </div>
  );
}

async function KasDataFetcher() {
  const ledgers = await prisma.bukuKas.findMany({
    include: {
        transaksi: {
            orderBy: { tanggal: "desc" }
        }
    },
    orderBy: { createdAt: "asc" }
  });

  const eventsRaw = await prisma.programKerja.findMany({
    where: { anggaran: { gt: 0 } },
    orderBy: { createdAt: "desc" },
  });

  const allProker = await prisma.programKerja.findMany({
    orderBy: { nama: "asc" }
  });

  const allEventTrx = await prisma.keuangan.findMany({
     where: { prokerId: { not: null } },
     orderBy: { tanggal: "desc" }
  });

  const events = eventsRaw.map((ev) => {
     const trx = allEventTrx.filter(t => t.prokerId === ev.id).map(t => ({
        id: t.id,
        title: t.judul,
        amount: t.nominal,
        date: t.tanggal.toISOString().split("T")[0],
        fotoBarang: t.fotoBarang,
        fotoNota: t.fotoNota,
        kuantitas: t.kuantitas,
        satuan: t.satuan
     }));
        
     return {
      id: ev.id,
      name: ev.nama,
      image: ev.image,
      budget: ev.anggaran,
      used: ev.anggaranTerpakai,
      status: ev.status,
      transactions: trx
    };
  });

  return <KeuanganClient ledgers={ledgers} events={events} prokers={allProker} />;
}

function KasSkeleton() {
  return (
    <div className="flex-1 flex flex-col gap-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-6 flex-1 overflow-hidden">
        <div className="w-full lg:w-72 flex flex-col gap-4 shrink-0 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-2xl p-5 shadow-sm overflow-hidden">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Daftar Dompet</h3>
          </div>
          <div className="flex-1 overflow-y-auto space-y-2 custom-scrollbar">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-4 rounded-xl border border-transparent bg-slate-50/50 dark:bg-white/5 animate-pulse flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded" />
                  <div className="h-2 w-24 bg-slate-100 dark:bg-slate-800/50 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl h-24 animate-pulse" />
            ))}
          </div>
          <div className="flex-1 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm flex flex-col overflow-hidden">
            <div className="px-6 py-4 flex justify-between items-center border-b border-slate-100 dark:border-white/5 bg-slate-50/50">
              <div className="h-5 w-32 bg-slate-200 dark:bg-slate-800 animate-pulse rounded" />
              <div className="h-8 w-40 bg-slate-200 dark:bg-slate-800 animate-pulse rounded" />
            </div>
            <div className="flex-1 overflow-auto custom-scrollbar p-4 space-y-3">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="flex justify-between items-center p-2 animate-pulse">
                   <div className="h-3 w-12 bg-slate-100 dark:bg-slate-800 rounded" />
                   <div className="flex-1 px-12 space-y-2"><div className="h-4 w-40 bg-slate-200 dark:bg-slate-800 rounded" /><div className="h-2 w-20 bg-slate-100 dark:bg-slate-800 rounded" /></div>
                   <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
