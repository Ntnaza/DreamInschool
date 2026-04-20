import { prisma } from "@/lib/prisma";
import { getActivePeriodeId } from "@/lib/actions";
import IDCardClient from "./IDCardClient";

export default async function IDCardPage() {
  const activePeriodeId = await getActivePeriodeId();

  // 1. Ambil Data Pengurus (Filter by Periode Aktif)
  const rawMembers = await prisma.pengurus.findMany({
    where: { 
      periodeId: activePeriodeId || undefined,
      status: "AKTIF" 
    },
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
    <div className="relative h-[calc(100vh-140px)] flex flex-col font-sans">
      <IDCardClient 
        initialMembers={formattedMembers} 
        initialBackImage={config?.idCardBackImage || null} 
      />
    </div>
  );
}