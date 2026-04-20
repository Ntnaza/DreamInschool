const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('password123', 10);
  console.log('🧹 Membersihkan database...');
  
  await prisma.keuangan.deleteMany({});
  await prisma.berita.deleteMany({});
  await prisma.aspirasi.deleteMany({});
  await prisma.programKerja.deleteMany({});
  await prisma.absensi.deleteMany({});
  await prisma.sesiAcara.deleteMany({});
  await prisma.acara.deleteMany({});
  await prisma.surat.deleteMany({});
  await prisma.galeri.deleteMany({});
  await prisma.inventaris.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.pengurus.deleteMany({});
  await prisma.jabatan.deleteMany({});
  await prisma.divisi.deleteMany({});
  await prisma.periode.deleteMany({});

  console.log('🚀 Memulai Seeding 3 Generasi...');

  // 1. BUAT ADMIN MASTER DULU
  const master = await prisma.pengurus.create({
    data: { nama: 'Admin Master', nis: 'MASTERIT', kelas: 'STAFF', jabatan: 'IT Support', divisi: 'TEKNOLOGI', status: 'AKTIF' }
  });
  const adminUser = await prisma.user.create({
    data: { username: 'admin', password: password, role: 'ADMIN', pengurusId: master.id }
  });

  const generations = [
    { tahun: '2023/2024', kabinet: 'Adhiyaksa', aktif: false },
    { tahun: '2024/2025', kabinet: 'Jiva Abisatya', aktif: false },
    { tahun: '2025/2026', kabinet: 'Nawa Shakti', aktif: true },
  ];

  for (const gen of generations) {
    const periode = await prisma.periode.create({
      data: { tahun: gen.tahun, namaKabinet: gen.kabinet, isAktif: gen.aktif }
    });

    console.log(`📦 Periode ${gen.tahun}...`);

    const divInti = await prisma.divisi.upsert({ where: { nama: 'BPH INTI' }, update: {}, create: { nama: 'BPH INTI' } });
    const jabKetua = await prisma.jabatan.upsert({ 
      where: { nama_divisiId: { nama: 'Ketua OSIS', divisiId: divInti.id } }, 
      update: {}, 
      create: { nama: 'Ketua OSIS', divisiId: divInti.id, aksesLevel: 'PIMPINAN' } 
    });

    const namaKetua = gen.kabinet === 'Adhiyaksa' ? 'Budi Adhiyaksa' : gen.kabinet === 'Jiva Abisatya' ? 'Siti Jiva' : 'Zaki Arkan';
    const pengurus = await prisma.pengurus.create({
      data: {
        nama: namaKetua,
        nis: `NIS-${gen.tahun.replace('/','')}-01`,
        kelas: 'XII',
        jabatan: 'Ketua OSIS',
        divisi: 'BPH INTI',
        status: gen.aktif ? 'AKTIF' : 'ALUMNI',
        periodeId: periode.id
      }
    });

    await prisma.user.create({
      data: {
        username: `ketua.${periode.id}`,
        password: password,
        role: 'PENGURUS',
        pengurusId: pengurus.id
      }
    });

    await prisma.programKerja.create({
      data: {
        nama: `Event Besar ${gen.kabinet}`,
        divisi: 'BPH INTI',
        status: gen.aktif ? 'IN_PROGRESS' : 'DONE',
        progress: gen.aktif ? 50 : 100,
        periodeId: periode.id
      }
    });

    await prisma.berita.create({
      data: {
        judul: `Kabar dari Kabinet ${gen.kabinet}`,
        slug: `berita-${gen.kabinet.toLowerCase()}-${Date.now()}-${periode.id}`,
        konten: `Ini adalah arsip berita dari masa kepengurusan ${gen.kabinet}.`,
        kategori: 'Arsip',
        penulisId: adminUser.id,
        periodeId: periode.id
      }
    });
  }

  console.log('\n✨ SEEDING 3 GENERASI BERHASIL!');
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
