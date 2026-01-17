import { prisma } from "@/lib/prisma";
import PengurusClient from "./PengurusClient";

// Biar data selalu fresh saat ada update pengurus baru
export const dynamic = "force-dynamic";

export default async function PengurusPage() {
  // 1. Ambil Data dari Database
  const rawMembers = await prisma.pengurus.findMany({
    orderBy: { id: 'asc' }
  });

  // 2. Logic Sorting: Urutkan berdasarkan hierarki jabatan
  const sortedMembers = rawMembers.sort((a, b) => {
    const jabatanA = a.jabatan.toLowerCase();
    const jabatanB = b.jabatan.toLowerCase();

    // Daftar prioritas urutan tampil
    const priority = [
      'ketua osis', 'ketua mpk', 
      'wakil ketua osis', 'wakil osis', 'wakil ketua mpk', 'wakil mpk',
      'sekretaris', 'bendahara'
    ];

    const idxA = priority.findIndex(p => jabatanA.includes(p));
    const idxB = priority.findIndex(p => jabatanB.includes(p));

    // Logic pengurutan
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    
    return a.jabatan.localeCompare(b.jabatan);
  });

  // 3. Logic Coloring: Warna border berdasarkan divisi/jabatan
  const getRoleColor = (jabatan: string) => {
    const j = jabatan.toLowerCase();
    if (j.includes('ketua osis')) return 'blue';
    if (j.includes('ketua mpk')) return 'purple';
    if (j.includes('wakil')) return 'cyan';
    if (j.includes('sekretaris')) return 'emerald';
    if (j.includes('bendahara')) return 'orange';
    if (j.includes('agama') || j.includes('rohani')) return 'green';
    if (j.includes('seni') || j.includes('kreatif')) return 'pink';
    if (j.includes('tik') || j.includes('multi')) return 'blue'; 
    if (j.includes('humas')) return 'yellow';
    return 'slate'; 
  };

  // 4. Format Data untuk Client
  const formattedMembers = sortedMembers.map((m: any) => ({
    id: m.id,
    name: m.nama,
    role: m.jabatan.toUpperCase(),
    
    // 🔥 PERBAIKAN FINAL DI SINI:
    // Pakai 'fotoUrl' sesuai nama kolom di database!
    img: m.fotoUrl || "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=800&auto=format&fit=crop", 
    
    color: getRoleColor(m.jabatan)
  }));

  // Judul Angkatan
  const angkatanTitle = "JIVA ABISATYA";

  return <PengurusClient members={formattedMembers} angkatanTitle={angkatanTitle} />;
}