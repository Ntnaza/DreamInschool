import { prisma } from "@/lib/prisma";
import KeuanganClient from "./KeuanganClient";

export default async function KasPage() {
  // 1. Ambil Transaksi Umum (Tidak terikat event/proker)
  const generalTrxRaw = await prisma.keuangan.findMany({
    where: { prokerId: null }, // Hanya kas umum
    orderBy: { tanggal: "desc" },
  });

  const generalTrx = generalTrxRaw.map((t) => ({
    id: t.id,
    title: t.judul,
    amount: t.nominal,
    type: t.tipe, // PEMASUKAN / PENGELUARAN
    date: t.tanggal.toISOString().split("T")[0],
    category: t.kategori,
    pic: t.keterangan || "-",
  }));

  // 2. Ambil Event (Proker) & Transaksi terkaitnya
  // Kita anggap event adalah proker yang punya budget > 0
  const eventsRaw = await prisma.programKerja.findMany({
    where: { anggaran: { gt: 0 } },
    include: {
        // Ambil transaksi pengeluaran event ini
        // (Kita perlu query manual lewat relasi virtual kalau belum diset di schema)
        // Tapi untuk simplifikasi, kita asumsikan sudah ada relasi di schema tadi.
        // Kalau belum, kita fetch manual nanti di client atau mapping di sini.
    },
    orderBy: { createdAt: "desc" },
  });

  // Karena di schema tadi kita relasikan `Keuangan` ke `ProgramKerja` (prokerId),
  // Kita bisa fetch transaksinya sekalian.
  // Tapi kalau relasinya belum di-push, kita fetch transaksi event secara terpisah:
  
  const allEventTrx = await prisma.keuangan.findMany({
     where: { prokerId: { not: null } },
     orderBy: { tanggal: "desc" }
  });

  const events = eventsRaw.map((ev) => {
     // Filter transaksi milik event ini
     const trx = allEventTrx.filter(t => t.prokerId === ev.id).map(t => ({
        id: t.id,
        title: t.judul,
        amount: t.nominal,
        date: t.tanggal.toISOString().split("T")[0],
     }));

     return {
        id: ev.id,
        name: ev.nama,
        budget: ev.anggaran,
        used: ev.anggaranTerpakai,
        status: ev.status,
        transactions: trx
     };
  });

  return <KeuanganClient generalTrx={generalTrx} events={events} />;
}