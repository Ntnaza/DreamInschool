import { prisma } from "@/lib/prisma";
import KeuanganClient from "./KeuanganClient";

export default async function KasPage() {
  // 1. Ambil Semua Buku Kas (Ledgers)
  const ledgers = await prisma.bukuKas.findMany({
    include: {
        transaksi: {
            orderBy: { tanggal: "desc" }
        }
    },
    orderBy: { createdAt: "asc" }
  });

  // 2. Ambil Proker (Event) yang sudah punya budget
  const eventsRaw = await prisma.programKerja.findMany({
    where: { anggaran: { gt: 0 } },
    orderBy: { createdAt: "desc" },
  });

  // 3. Ambil Semua Proker (untuk pilihan link anggaran)
  const allProker = await prisma.programKerja.findMany({
    orderBy: { nama: "asc" }
  });

  const allEventTrx = await prisma.keuangan.findMany({
     where: { prokerId: { not: null } },
     orderBy: { tanggal: "desc" }
  });

      const events = eventsRaw.map((ev) => {
         const trx = allEventTrx.filter(t => t.prokerId === ev.id).map(t => ({
            id: t.id,
            title: t.judul,
                      amount: t.nominal,
                      date: t.tanggal.toISOString().split("T")[0],
                      fotoBarang: t.fotoBarang,
                      fotoNota: t.fotoNota,
                      kuantitas: t.kuantitas,
                      satuan: t.satuan
                   }));
            
       return {
        id: ev.id,
        name: ev.nama,
        image: ev.image,
        budget: ev.anggaran,
        used: ev.anggaranTerpakai,
        status: ev.status,
        transactions: trx
     };
  });

  return <KeuanganClient ledgers={ledgers} events={events} prokers={allProker} />;
}
  