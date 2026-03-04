import { prisma } from "@/lib/prisma";
import GaleriClient from "./GaleriClient";

export default async function GaleriPage() {
  // Ambil data Galeri
  const rawGaleris = await prisma.galeri.findMany({
    orderBy: { tanggal: "desc" },
  });

  // Ambil Kategori Dinamis
  const categoriesRaw = await prisma.kategoriGaleri.findMany({
    orderBy: { nama: "asc" },
  });

  const categories = categoriesRaw.map(c => c.nama);
  const fullCategories = categoriesRaw.map(c => ({ id: c.id, nama: c.nama }));

  // Konversi data agar aman dilempar ke client
  const galeris = rawGaleris.map(g => ({
    ...g,
    images: JSON.parse(g.images)
  }));

  return (
    <div className="relative h-[calc(100vh-140px)] flex flex-col font-sans">
      {/* 
          Kita tidak menggunakan Suspense di sini agar GaleriClient (Shell) 
          langsung merender Header & Filter Bar secara statis.
          Skeleton ditangani secara lokal di dalam GaleriClient pada area grid.
      */}
      <GaleriClient initialData={galeris} categories={categories} fullCategories={fullCategories} />
    </div>
  );
}
