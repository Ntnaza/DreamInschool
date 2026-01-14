import { prisma } from "@/lib/prisma";
import IDCardClient from "./IDCardClient";

export default async function IDCardPage() {
  // 1. Ambil Data Pengurus
  const rawMembers = await prisma.pengurus.findMany({
    where: { status: "AKTIF" },
    orderBy: { nama: "asc" },
  });

  // 2. Ambil Template Background Global
  const config = await prisma.appConfig.findFirst();

  const formattedMembers = rawMembers.map((m) => ({
    id: m.id,
    name: m.nama,
    role: m.jabatan,
    class: m.kelas,
    nis: m.nis,
    image: m.fotoUrl || null,
    email: m.email || "-",
    phone: m.hp || "-",
    frontDesign: m.idCardDesign || null 
  }));

  // Kirim data background juga
  return (
    <IDCardClient 
      initialMembers={formattedMembers} 
      initialBackImage={config?.idCardBackImage || null} // 👈 KIRIM INI
    />
  );
}