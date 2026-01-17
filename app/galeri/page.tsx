import { prisma } from "@/lib/prisma";
import GaleriPublicClient from "./GaleriPublicClient";

// Biar datanya selalu fresh setiap kali dibuka
export const dynamic = "force-dynamic";

export default async function GaleriPage() {
  // 1. Ambil data dari database (urutkan terbaru)
  const data = await prisma.galeri.findMany({
    orderBy: { tanggal: 'desc' }
  });

  // 2. Format data biar sesuai struktur Client (Parse JSON images)
  const formattedData = data.map((item) => {
    let images = [];
    try {
        images = JSON.parse(item.images);
    } catch (e) {
        images = [item.images]; // Fallback kalau error
    }

    return {
        id: item.id,
        title: item.judul,
        date: item.tanggal.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }),
        category: item.kategori,
        desc: item.deskripsi,
        src: images[0], // Foto pertama buat thumbnail
        album: images   // Semua foto buat slider
    };
  });

  // 3. Render Client Component
  return <GaleriPublicClient galleryItems={formattedData} />;
}