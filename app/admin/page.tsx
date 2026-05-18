import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import DashboardUI from "./DashboardUI";
import DashboardHeader from "./DashboardHeader";
import DashboardBell from "./DashboardBell";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "rahasia-osis-mpk-2026-sangat-kuat"
);

/**
 * SKELETON UNTUK BELL NOTIFIKASI (Tinggi disamakan dengan tombol Proker)
 */
function BellSkeleton() {
  return (
    <div className="h-[48px] flex items-end">
      <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 animate-pulse" />
    </div>
  );
}

/**
 * SKELETON DASHBOARD (Presisi 100% dengan DashboardUI)
 */
function DashboardSkeleton() {
  return (
    <div className="flex-1 overflow-y-auto pb-20 pr-2 custom-scrollbar space-y-6 animate-pulse">
      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-6 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 h-[142px]">
            <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 mb-4" />
            <div className="h-2.5 w-24 bg-slate-200 dark:bg-slate-700 rounded mb-2" />
            <div className="h-8 w-16 bg-slate-300 dark:bg-slate-600 rounded" />
          </div>
        ))}
      </div>

      {/* GRID TENGAH */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CHART */}
        <div className="lg:col-span-2 bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6">
          <div className="h-6 w-40 bg-slate-200 dark:bg-slate-700 rounded mb-6" />
          <div className="h-[250px] w-full bg-slate-100 dark:bg-slate-800/50 rounded-lg" />
        </div>
        {/* QUICK ACCESS */}
        <div className="lg:col-span-1 bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6 flex flex-col">
          <div className="h-6 w-32 bg-slate-200 dark:bg-slate-700 rounded mb-6" />
          <div className="grid grid-cols-2 gap-3 flex-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 h-[98px]" />
            ))}
          </div>
        </div>
      </div>

      {/* GRID BOTTOM */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6">
            <div className="h-5 w-36 bg-slate-200 dark:bg-slate-700 rounded mb-4" />
            <div className="space-y-3">
              {[1, 2, 3].map((j) => (
                <div key={j} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 dark:border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-full max-w-[150px] bg-slate-200 dark:bg-slate-700 rounded" />
                    <div className="h-2 w-20 bg-slate-100 dark:bg-slate-800 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function HeaderData() {
  const [aspirasiBaru, aspirasi] = await Promise.all([
    prisma.aspirasi.count({ where: { status: 'PENDING' } }),
    prisma.aspirasi.findMany({
      take: 5, where: { status: 'PENDING' }, orderBy: { createdAt: 'desc' },
      select: { id: true, pengirim: true, isi: true, kategori: true, status: true, createdAt: true }
    })
  ]);
  
  return <DashboardBell stats={{ aspirasiBaru }} aspirasi={aspirasi} />;
}

async function DashboardData() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;
  let userPayload = null;
  if (token) {
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      userPayload = payload;
    } catch (e) {}
  }

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  
  // 1. Eksekusi semua query utama secara paralel untuk memangkas waktu loading hingga 90%
  const [
    aspirasiBaru,
    totalProker,
    doneProker,
    pemasukan,
    pengeluaran,
    totalViews,
    viewsHariIni,
    agenda,
    transaksiTerakhir,
    aspirasi
  ] = await Promise.all([
    prisma.aspirasi.count({ where: { status: 'PENDING' } }),
    prisma.programKerja.count(),
    prisma.programKerja.count({ where: { status: 'DONE' } }),
    prisma.keuangan.aggregate({ _sum: { nominal: true }, where: { tipe: 'PEMASUKAN' } }),
    prisma.keuangan.aggregate({ _sum: { nominal: true }, where: { tipe: 'PENGELUARAN' } }),
    prisma.visitor.count(),
    prisma.visitor.count({ where: { createdAt: { gte: todayStart } } }),
    prisma.programKerja.findMany({
      take: 3, orderBy: { deadline: 'asc' },
      where: { deadline: { gte: new Date() }, status: { not: 'DONE' } },
      select: { id: true, nama: true, deadline: true, divisi: true }
    }),
    prisma.keuangan.findMany({
      take: 4, orderBy: { tanggal: 'desc' },
      select: { id: true, judul: true, nominal: true, tipe: true, tanggal: true }
    }),
    prisma.aspirasi.findMany({
      take: 5, where: { status: 'PENDING' }, orderBy: { createdAt: 'desc' },
      select: { id: true, pengirim: true, isi: true, kategori: true, status: true, createdAt: true }
    })
  ]);

  const prokerPersen = totalProker === 0 ? 0 : Math.round((doneProker / totalProker) * 100);
  const danaKas = (pemasukan._sum.nominal || 0) - (pengeluaran._sum.nominal || 0);

  // 2. Eksekusi query chart secara paralel
  const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  const today = new Date();
  
  const chartQueries = [];
  const chartDays = [];
  
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today); d.setDate(d.getDate() - i);
    d.setHours(0, 0, 0, 0);
    const nextD = new Date(d); nextD.setDate(d.getDate() + 1);
    
    chartDays.push(days[d.getDay()]);
    
    chartQueries.push(prisma.aspirasi.count({ where: { createdAt: { gte: d, lt: nextD } } }));
    chartQueries.push(prisma.programKerja.count({ where: { createdAt: { gte: d, lt: nextD } } }));
  }
  
  const chartResults = await Promise.all(chartQueries);
  
  const chartData = [];
  for (let i = 0; i < 7; i++) {
    chartData.push({
      name: chartDays[i],
      aspirasi: chartResults[i * 2],
      kegiatan: chartResults[i * 2 + 1]
    });
  }

  return (
    <DashboardUI 
      user={userPayload}
      stats={{ aspirasiBaru, prokerPersen, danaKas, totalViews, viewsHariIni }}
      agenda={agenda}
      transaksiTerakhir={transaksiTerakhir}
      aspirasi={aspirasi}
      chartData={chartData}
    />
  );
}

const dashboardSteps = [
    { target: '.tour-dashboard-header', content: 'Selamat Datang! Ini adalah pusat kontrol utama untuk memantau seluruh aktivitas organisasi.' },
    { target: '.tour-stats-grid', content: 'Ringkasan data real-time: Pantau jumlah aspirasi, progres proker, saldo kas, hingga statistik pengunjung website dalam satu area.' },
    { target: '.tour-notif-bell', content: 'Klik ikon lonceng ini untuk melihat dan membalas aspirasi siswa secara cepat tanpa harus berpindah halaman.' },
    { target: '.tour-activity-chart', content: 'Grafik ini menampilkan tren kesibukan organisasi (Aspirasi vs Kegiatan) dalam 7 hari terakhir.' },
    { target: '.tour-quick-access', content: 'Jalan pintas ke menu yang paling sering digunakan untuk mempercepat kerja administrasi Anda.' },
    { target: '.tour-agenda-widget', content: 'Daftar agenda atau proker terdekat yang harus segera disiapkan agar tidak terlewat.' },
    { target: '.tour-recent-trx', content: 'Pantau arus kas masuk dan keluar terbaru agar pengelolaan keuangan tetap transparan.' },
    { target: '.tour-inbox-widget', content: 'Pesan dan aspirasi terbaru dari siswa yang perlu ditindaklanjuti lebih lanjut.' },
];

export default async function AdminPage() {
  return (
    <div className="relative h-[calc(100vh-140px)] flex flex-col font-sans">
      <DashboardHeader steps={dashboardSteps} tourKey="dashboard">
         <Suspense fallback={<BellSkeleton />}>
            <HeaderData />
         </Suspense>
      </DashboardHeader>

      <Suspense fallback={<DashboardSkeleton />}>
         <DashboardData />
      </Suspense>
    </div>
  );
}
