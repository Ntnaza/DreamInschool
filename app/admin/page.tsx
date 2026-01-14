import { prisma } from "@/lib/prisma";
import DashboardUI from "./DashboardUI";

export default async function AdminPage() {
  // 1. Ambil Statistik
  const totalPengurus = await prisma.pengurus.count();
  const aspirasiBaru = await prisma.aspirasi.count({ where: { status: 'PENDING' } });
  
  const totalProker = await prisma.programKerja.count();
  const doneProker = await prisma.programKerja.count({ where: { status: 'DONE' } });
  const prokerPersen = totalProker === 0 ? 0 : Math.round((doneProker / totalProker) * 100);

  const pemasukan = await prisma.keuangan.aggregate({ _sum: { nominal: true }, where: { tipe: 'PEMASUKAN' } });
  const pengeluaran = await prisma.keuangan.aggregate({ _sum: { nominal: true }, where: { tipe: 'PENGELUARAN' } });
  const danaKas = (pemasukan._sum.nominal || 0) - (pengeluaran._sum.nominal || 0);

  // 2. Ambil List Data
  const agenda = await prisma.programKerja.findMany({
    take: 3,
    orderBy: { deadline: 'asc' },
    where: { deadline: { gte: new Date() }, status: { not: 'DONE' } },
    select: { id: true, nama: true, deadline: true, divisi: true }
  });

  const aspirasi = await prisma.aspirasi.findMany({
    take: 3,
    orderBy: { createdAt: 'desc' },
    select: { id: true, pengirim: true, isi: true, kategori: true, createdAt: true }
  });

  return (
    <DashboardUI 
      stats={{ totalPengurus, aspirasiBaru, prokerPersen, danaKas }}
      agenda={agenda}
      aspirasi={aspirasi}
    />
  );
}