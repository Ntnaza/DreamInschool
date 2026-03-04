import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import AspirasiList from "./AspirasiList";
import InboxHeader from "./InboxHeader";

/**
 * SKELETON UNTUK DAFTAR PESAN (Hanya bagian datanya)
 * Ditambahkan efek Shimmer agar lebih hidup.
 */
function AspirasiDataSkeleton() {
  return (
    <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-0 pb-20 relative overflow-hidden">
      {/* Sidebar List Skeleton */}
      <div className="w-full md:w-[420px] flex flex-col gap-4 flex-shrink-0">
         <div className="space-y-4">
            <div className="h-[52px] w-full bg-slate-200 dark:bg-slate-800 rounded-2xl relative overflow-hidden">
               <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
            <div className="h-[46px] w-full bg-slate-100 dark:bg-slate-800/50 rounded-2xl relative overflow-hidden">
               <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
         </div>
         <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
               <div key={i} className="h-[104px] w-full bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="flex justify-between items-start">
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800" />
                        <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded" />
                     </div>
                     <div className="h-2 w-10 bg-slate-100 dark:bg-slate-800/50 rounded" />
                  </div>
                  <div className="space-y-2">
                     <div className="h-2 w-full bg-slate-100 dark:bg-slate-800/50 rounded" />
                     <div className="h-2 w-2/3 bg-slate-100 dark:bg-slate-800/50 rounded" />
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Detail Area Skeleton */}
      <div className="hidden md:flex flex-1 bg-white dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/10 rounded-[2.5rem] flex flex-col p-8 space-y-8 relative overflow-hidden">
         <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
         <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 rounded-2xl bg-slate-200 dark:bg-slate-800" />
               <div className="space-y-2">
                  <div className="h-5 w-40 bg-slate-200 dark:bg-slate-800 rounded" />
                  <div className="h-3 w-24 bg-slate-100 dark:bg-slate-800/50 rounded" />
               </div>
            </div>
            <div className="h-12 w-12 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
         </div>
         <div className="flex gap-3">
            <div className="h-8 w-24 bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 rounded-xl" />
            <div className="h-8 w-32 bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 rounded-xl" />
            <div className="h-8 w-28 bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 rounded-xl" />
         </div>
         <div className="h-40 w-full bg-slate-50 dark:bg-white/5 rounded-[2rem] border border-slate-100 dark:border-white/5" />
         <div className="space-y-4 pt-8 border-t border-slate-100 dark:border-white/5">
            <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded" />
            <div className="h-32 w-full bg-slate-50 dark:bg-white/5 rounded-3xl" />
         </div>
      </div>
    </div>
  );
}

/**
 * KOMPONEN SERVER (Mengambil data asli)
 */
async function AspirasiTableData() {
  const data = await prisma.aspirasi.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return <AspirasiList initialData={data} />;
}

export default async function InboxPage() {
  return (
    <div className="relative h-[calc(100vh-140px)] flex flex-col font-sans">
      
      {/* HEADER TETAP */}
      <InboxHeader />

      <Suspense fallback={<AspirasiDataSkeleton />}>
         <AspirasiTableData />
      </Suspense>
    </div>
  );
}
