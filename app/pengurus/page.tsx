import { prisma } from "@/lib/prisma";
import { getSelectedPeriodeId } from "@/lib/actions";
import PengurusClient from "./PengurusClient";

// Biar data selalu fresh saat ada update pengurus baru
export const dynamic = "force-dynamic";

export default async function PengurusPage({ searchParams }: { searchParams: { periode?: string } }) {
  // 1. Ambil data semua periode untuk pilihan filter
  const allPeriods = await prisma.periode.findMany({
    orderBy: { tahun: 'desc' }
  });

  // 2. Tentukan periode mana yang mau dilihat
  // Prioritas: 1. SearchParams (URL), 2. SelectedPeriodeId (Cookie/Aktif)
  const selectedTahun = searchParams.periode;
  const cookiePeriodeId = await getSelectedPeriodeId();
  
  let activePeriod = allPeriods.find(p => p.id === cookiePeriodeId);
  
  if (selectedTahun) {
    const found = allPeriods.find(p => p.tahun === selectedTahun);
    if (found) activePeriod = found;
  }

  // Jika masih tidak ada, ambil yang aktif
  if (!activePeriod) {
    activePeriod = allPeriods.find(p => p.isAktif) || allPeriods[0];
  }

  // 3. Ambil Pengurus berdasarkan periode terpilih
  const rawMembers = await prisma.pengurus.findMany({
    where: { 
      periodeId: activePeriod?.id || undefined 
    },
    orderBy: { id: 'asc' },
    include: {
      programKerja: true
    }
  });

  // (rest of the logic remains same for sorting and coloring)
  const sortedMembers = rawMembers.sort((a, b) => {
    const jabatanA = a.jabatan.toLowerCase();
    const jabatanB = b.jabatan.toLowerCase();
    const priority = ['ketua osis', 'ketua mpk', 'wakil', 'sekretaris', 'bendahara'];
    const idxA = priority.findIndex(p => jabatanA.includes(p));
    const idxB = priority.findIndex(p => jabatanB.includes(p));
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return a.jabatan.localeCompare(b.jabatan);
  });

  const getRoleColor = (jabatan: string) => {
    const j = jabatan.toLowerCase();
    if (j.includes('ketua osis')) return 'blue';
    if (j.includes('ketua mpk')) return 'purple';
    if (j.includes('wakil')) return 'cyan';
    if (j.includes('sekretaris')) return 'emerald';
    if (j.includes('bendahara')) return 'orange';
    return 'slate';
  };

  const formattedMembers = sortedMembers.map((m: any) => ({
    id: m.id,
    name: m.nama,
    role: m.jabatan.toUpperCase(),
    divisi: m.divisi,
    img: m.fotoUrl || "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=800&auto=format&fit=crop",
    color: getRoleColor(m.jabatan),
    visi: m.visi, misi: m.misi, motto: m.motto,
    instagram: m.instagram, tiktok: m.tiktok, email: m.email,
    programKerja: m.programKerja || [],
  }));

  return (
    <PengurusClient 
      members={formattedMembers} 
      angkatanTitle={activePeriod?.namaKabinet || "Generasi OSIS-MPK"} 
      tahunAjaran={activePeriod?.tahun || ""}
      allPeriods={allPeriods.map(p => ({ tahun: p.tahun, kabinet: p.namaKabinet }))}
    />
  );
}