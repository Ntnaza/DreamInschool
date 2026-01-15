import { prisma } from "@/lib/prisma";
import InventarisClient from "./InventarisClient";

export default async function InventarisPage() {
  const itemsRaw = await prisma.inventaris.findMany({
    include: {
      riwayat: {
        orderBy: { tglKembali: "desc" },
        take: 5 // Ambil 5 riwayat terakhir aja
      }
    },
    orderBy: { createdAt: "desc" },
  });

  const items = itemsRaw.map((item) => ({
    id: item.id,
    name: item.nama,
    code: item.kode,
    category: item.kategori,
    status: item.status,
    condition: item.kondisi,
    price: item.harga,
    image: item.fotoUrl,
    serialNum: item.serialNum,
    peminjam: item.peminjam,
    riwayat: item.riwayat
  }));

  return <InventarisClient initialItems={items} />;
}