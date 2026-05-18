import { prisma } from "@/lib/prisma";
import { getActivePeriodeId } from "@/lib/actions";
import GaleriClient from "./GaleriClient";

async function getGaleri() {
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulasi delay
  const id = await getActivePeriodeId();
  const rawGaleris = await prisma.galeri.findMany({
    where: { periodeId: id || undefined },
    orderBy: { tanggal: "desc" },
  });
  return rawGaleris.map(g => ({
    ...g,
    images: JSON.parse(g.images)
  }));
}

async function getFullCats() {
  return await prisma.kategoriGaleri.findMany({
    orderBy: { nama: "asc" },
  });
}

async function getCats() {
  const cats = await getFullCats();
  return cats.map(c => c.nama);
}

export default function GaleriPage() {
  const dataPromise = getGaleri();
  const fullCatsPromise = getFullCats();
  const catsPromise = getCats();

  return (
    <div className="relative h-[calc(100vh-140px)] flex flex-col font-sans">
      <GaleriClient dataPromise={dataPromise} catsPromise={catsPromise} fullCatsPromise={fullCatsPromise} />
    </div>
  );
}
