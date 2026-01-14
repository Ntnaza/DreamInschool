import { prisma } from "@/lib/prisma";
import PengurusClient from "./PengurusClient";

export default async function PengurusPage() {
  // 1. Ambil data dari database (Urut berdasarkan Nama)
  const rawMembers = await prisma.pengurus.findMany({
    orderBy: { nama: "asc" },
  });

  // 2. Format Data (Biar aman saat dikirim ke Client)
  // Khususnya tanggal lahir harus jadi string
  const formattedMembers = rawMembers.map((m) => ({
    ...m,
    tglLahir: m.tglLahir ? m.tglLahir.toISOString().split("T")[0] : "", // Format YYYY-MM-DD
  }));

  return <PengurusClient initialData={formattedMembers} />;
}