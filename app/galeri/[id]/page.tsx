import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import DetailGaleriClient from "./DetailGaleriClient";

// Tambahkan generateStaticParams agar Next.js tahu rute apa saja yang ada
export async function generateStaticParams() {
  const items = await prisma.galeri.findMany({ select: { id: true } });
  return items.map((item) => ({ id: item.id.toString() }));
}

export default async function DetailGaleriPage({ params }: { params: Promise<{ id: string }> }) {
  // Tunggu params karena di Next.js terbaru params bersifat async
  const { id: idStr } = await params;
  const id = parseInt(idStr);
  
  if (isNaN(id)) notFound();

  const item = await prisma.galeri.findUnique({
    where: { id }
  });

  if (!item) notFound();

  // Format data
  let images = [];
  try {
      images = JSON.parse(item.images);
  } catch (e) {
      images = [item.images];
  }

  const formattedItem = {
      id: item.id,
      title: item.judul,
      date: item.tanggal.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
      category: item.kategori,
      desc: item.deskripsi,
      album: images
  };

  return <DetailGaleriClient item={formattedItem} />;
}
