import { prisma } from "@/lib/prisma";
import GalleryClient from "./GalleryClient";

// 1. DATA DUMMY (Format Object Lengkap)
const DUMMY_ITEMS = [
  {
    id: 1,
    title: "Kunjungan Industri 2026",
    category: "Kunjungan",
    date: "12 Januari 2026",
    desc: "Siswa jurusan TKJ dan RPL berkunjung ke beberapa start-up teknologi di Bandung.",
    album: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 2,
    title: "Class Meeting Semester Ganjil",
    category: "Event",
    date: "20 Desember 2025",
    desc: "Keseruan lomba antar kelas untuk mempererat tali persaudaraan.",
    album: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 3,
    title: "Upacara Hari Guru",
    category: "Upacara",
    date: "25 November 2025",
    desc: "Peringatan hari guru nasional dengan petugas upacara dari dewan guru.",
    album: ["https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 4,
    title: "Pentas Seni Tahunan",
    category: "Seni",
    date: "10 November 2025",
    desc: "Penampilan bakat siswa mulai dari tari, musik, hingga drama.",
    album: ["https://images.unsplash.com/photo-1427504746696-ea5abd71a32f?q=80&w=800&auto=format&fit=crop"]
  }
];

// 2. FUNGSI AMBIL DATA
async function getGalleryItems() {
  try {
    const data = await prisma.galeri.findMany({
      take: 8,
      orderBy: { createdAt: 'desc' },
      // 🔥 Kita ambil semua kolom yang dibutuhkan
      select: { 
        id: true,
        judul: true,
        kategori: true,
        tanggal: true,
        deskripsi: true,
        images: true 
      }
    });

    if (!data || data.length === 0) return [];

    // Format Data agar sesuai dengan UI
    const formattedData = data.map(item => {
       let parsedImages = [];
       try {
         parsedImages = JSON.parse(item.images); // Coba parse JSON Array
       } catch (e) {
         parsedImages = [item.images]; // Kalau gagal, anggap string biasa
       }

       // Pastikan parsedImages adalah array
       const album = Array.isArray(parsedImages) ? parsedImages : [parsedImages];

       return {
         id: item.id,
         title: item.judul,
         category: item.kategori,
         date: new Date(item.tanggal).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' }),
         desc: item.deskripsi || "Tidak ada deskripsi.",
         album: album.filter(img => img && img !== "") // Bersihkan yang kosong
       };
    }).filter(item => item.album.length > 0); // Hanya ambil yang punya foto

    return formattedData;

  } catch (error) {
    console.error("Gagal ambil galeri:", error);
    return [];
  }
}

export default async function GalleryPreview() {
  const dbItems = await getGalleryItems();
  const finalItems = dbItems.length > 0 ? dbItems : DUMMY_ITEMS;

  // Lempar data ke Client Component
  return <GalleryClient items={finalItems} />;
}