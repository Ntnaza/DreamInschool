import { prisma } from "@/lib/prisma";
import GaleriClient from "./GaleriClient";

export default async function GaleriPage() {
  const data = await prisma.galeri.findMany({
    orderBy: { createdAt: "desc" }
  });

  // Formatting Data untuk Client
  const formattedData = data.map(item => {
    let parsedImages = [];
    try {
      // Coba parse JSON string ke Array
      parsedImages = JSON.parse(item.images); 
    } catch (e) {
      // Fallback kalau data lama masih string biasa (single image)
      parsedImages = [item.images];
    }

    return {
      ...item,
      images: parsedImages, // Kirim sebagai Array ke Client
      tanggal: item.tanggal.toISOString(),
      createdAt: item.createdAt.toISOString(),
      updatedAt: item.updatedAt.toISOString(),
    };
  });

  return <GaleriClient initialData={formattedData} />;
}