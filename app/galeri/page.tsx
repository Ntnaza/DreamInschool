import { prisma } from "@/lib/prisma";
import { getSelectedPeriodeId } from "@/lib/actions";
import GaleriPublicClient from "./GaleriPublicClient";

export const dynamic = "force-dynamic";

async function getGalleryData() {
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulasi delay
  const selectedPeriodeId = await getSelectedPeriodeId();
  const data = await prisma.galeri.findMany({
    where: { periodeId: selectedPeriodeId || undefined },
    orderBy: { tanggal: 'desc' }
  });

  return data.map((item) => {
    let images = [];
    try {
        images = JSON.parse(item.images);
    } catch (e) {
        images = [item.images];
    }
    return {
        id: item.id,
        title: item.judul,
        date: item.tanggal.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }),
        category: item.kategori,
        desc: item.deskripsi,
        src: images[0], 
        album: images   
    };
  });
}

export default function GaleriPage() {
  const dataPromise = getGalleryData();
  return <GaleriPublicClient dataPromise={dataPromise} />;
}