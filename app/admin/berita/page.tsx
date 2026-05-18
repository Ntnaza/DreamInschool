import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import { getActivePeriodeId } from "@/lib/actions";
import BeritaClient from "./BeritaClient";
import BeritaHeader from "./BeritaHeader";

export default function BeritaPage() {
  return (
    <div className="relative h-[calc(100vh-140px)] flex flex-col font-sans">
      <BeritaHeader />
      <Suspense fallback={<BeritaSkeleton />}>
        <BeritaDataFetcher />
      </Suspense>
    </div>
  );
}

async function BeritaDataFetcher() {
  const activePeriodeId = await getActivePeriodeId();

  const rawPosts = await prisma.berita.findMany({
    where: { periodeId: activePeriodeId || undefined },
    orderBy: { createdAt: "desc" },
  });

  const categoriesRaw = await prisma.kategoriGaleri.findMany({
    orderBy: { nama: "asc" },
  });

  const categories = categoriesRaw.map(c => c.nama);

  const posts = rawPosts.map(post => ({
    ...post,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  }));

  return <BeritaClient initialPosts={posts} dynamicCategories={categories} />;
}

function BeritaSkeleton() {
  return (
    <div className="flex-1 flex flex-col font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30 overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 flex-shrink-0">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            <div className="h-8 w-64 bg-slate-200 dark:bg-slate-800 animate-pulse rounded-full" />
          </div>
          <div className="relative flex-1 md:w-72 group w-full">
            <div className="h-10 w-full bg-slate-200 dark:bg-slate-800 animate-pulse rounded-xl" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto pb-32 custom-scrollbar pr-2 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 animate-pulse">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white dark:bg-[#1e293b] rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden h-[380px] flex flex-col">
                <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800 shrink-0" />
                <div className="p-4 flex-1 space-y-4">
                  <div className="space-y-2"><div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" /><div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded" /></div>
                  <div className="flex gap-3"><div className="h-3 w-16 bg-slate-100 dark:bg-slate-800/50 rounded" /><div className="h-3 w-16 bg-slate-100 dark:bg-slate-800/50 rounded" /></div>
                  <div className="space-y-2 pt-2"><div className="h-2.5 w-full bg-slate-50 dark:bg-slate-800/30 rounded" /><div className="h-2.5 w-4/5 bg-slate-50 dark:bg-slate-800/30 rounded" /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
