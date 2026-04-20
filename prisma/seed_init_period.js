const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('⏳ Menginisialisasi Periode Pertama...');

  // 1. Buat Periode Aktif
  const periode = await prisma.periode.upsert({
    where: { tahun: '2025/2026' },
    update: { isAktif: true, namaKabinet: 'Jiva Abisatya' },
    create: {
      tahun: '2025/2026',
      namaKabinet: 'Jiva Abisatya',
      isAktif: true
    }
  });

  console.log(`✅ Periode Aktif: ${periode.tahun} (${periode.namaKabinet})`);

  // 2. Hubungkan SEMUA data yang sudah ada ke periode ini
  console.log('🔗 Menghubungkan data seeder ke periode baru...');
  
  await prisma.pengurus.updateMany({ data: { periodeId: periode.id } });
  await prisma.leader.updateMany({ data: { periodeId: periode.id } });
  await prisma.programKerja.updateMany({ data: { periodeId: periode.id } });
  await prisma.berita.updateMany({ data: { periodeId: periode.id } });
  await prisma.galeri.updateMany({ data: { periodeId: periode.id } });
  await prisma.surat.updateMany({ data: { periodeId: periode.id } });
  await prisma.keuangan.updateMany({ data: { periodeId: periode.id } });

  console.log('✨ Semua data berhasil diarsipkan ke periode 2025/2026!');
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
