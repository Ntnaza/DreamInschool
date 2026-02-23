import { prisma } from "@/lib/prisma";
import DashboardUI from "./DashboardUI";

export default async function AdminPage() {
  // --- 1. Statistik Utama ---
  
  // A. Absensi Hari Ini (Real-time)
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0); // Mulai dari jam 00:00 hari ini
  
  const hadirHariIni = await prisma.absensi.count({
    where: { tanggal: { gte: todayStart } }
  });
  const totalPengurus = await prisma.pengurus.count(); // Buat penyebut (contoh: 5/40 Hadir)

  // B. Statistik Lain
  const aspirasiBaru = await prisma.aspirasi.count({ where: { status: 'PENDING' } });
  
  const totalProker = await prisma.programKerja.count();
  const doneProker = await prisma.programKerja.count({ where: { status: 'DONE' } });
  const prokerPersen = totalProker === 0 ? 0 : Math.round((doneProker / totalProker) * 100);

  const pemasukan = await prisma.keuangan.aggregate({ _sum: { nominal: true }, where: { tipe: 'PEMASUKAN' } });
  const pengeluaran = await prisma.keuangan.aggregate({ _sum: { nominal: true }, where: { tipe: 'PENGELUARAN' } });
  const danaKas = (pemasukan._sum.nominal || 0) - (pengeluaran._sum.nominal || 0);

  // C. Statistik Pengunjung (Views)
  const totalViews = await prisma.visitor.count();
  const viewsHariIni = await prisma.visitor.count({
    where: { createdAt: { gte: todayStart } }
  });

  // --- 2. List Data Terbaru ---
  
  // Agenda Terdekat
  const agenda = await prisma.programKerja.findMany({
    take: 3,
    orderBy: { deadline: 'asc' },
    where: { deadline: { gte: new Date() }, status: { not: 'DONE' } },
    select: { id: true, nama: true, deadline: true, divisi: true }
  });

  // Transaksi Terakhir (NEW WIDGET) 💸
  const transaksiTerakhir = await prisma.keuangan.findMany({
    take: 4,
    orderBy: { tanggal: 'desc' }, // ✅ Ganti jadi 'tanggal'
    select: { 
        id: true, 
        judul: true, 
        nominal: true, 
        tipe: true, 
        tanggal: true // ✅ Ganti jadi 'tanggal'
    }
  });

  // Aspirasi Terbaru (Hanya yang belum dibalas/PENDING)
  const aspirasi = await prisma.aspirasi.findMany({
    take: 5,
    where: { status: 'PENDING' },
    orderBy: { createdAt: 'desc' },
    select: { id: true, pengirim: true, isi: true, kategori: true, status: true, createdAt: true }
  });

  // --- 3. Data Chart 7 Hari Terakhir ---
  const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  const today = new Date();
  const chartData = [];

  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    d.setHours(0, 0, 0, 0);
    
    const nextD = new Date(d);
    nextD.setDate(d.getDate() + 1);

    const countAspirasi = await prisma.aspirasi.count({ where: { createdAt: { gte: d, lt: nextD } } });
    const countProker = await prisma.programKerja.count({ where: { createdAt: { gte: d, lt: nextD } } }); // Atau ganti 'berita'

    chartData.push({
      name: days[d.getDay()],
      aspirasi: countAspirasi,
      kegiatan: countProker 
    });
  }

  return (
    <DashboardUI 
      stats={{ 
        totalPengurus, 
        hadirHariIni, 
        aspirasiBaru, 
        prokerPersen, 
        danaKas,
        totalViews,
        viewsHariIni
      }}
      agenda={agenda}
      transaksiTerakhir={transaksiTerakhir} // Kirim data transaksi
      aspirasi={aspirasi}
      chartData={chartData}
    />
  );
}