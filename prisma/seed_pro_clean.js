const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('password123', 10);
  console.log('🧹 Membersihkan database lama secara menyeluruh...');
  
  // Hapus data transaksi & konten dulu agar tidak ada constraint violation
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
  
  // Baru hapus inti organisasi
  await prisma.user.deleteMany({});
  await prisma.pengurus.deleteMany({});
  await prisma.jabatan.deleteMany({});
  await prisma.divisi.deleteMany({});

  console.log('🚀 Memulai Seeding Struktur Organisasi PRO (Utuh & Rapi)...');

  const orgStructure = [
    {
      divisi: 'BPH INTI OSIS',
      jabatans: ['Ketua Umum OSIS', 'Wakil Ketua OSIS', 'Sekretaris 1', 'Sekretaris 2', 'Sekretaris 3', 'Bendahara 1', 'Bendahara 2', 'Bendahara 3'],
      members: [
        { nama: 'Zaki Arkan', nis: '222301001', jabatan: 'Ketua Umum OSIS' },
        { nama: 'Ahmad Fauzi', nis: '222301002', jabatan: 'Wakil Ketua OSIS' },
        { nama: 'Siti Aminah', nis: '222301003', jabatan: 'Sekretaris 1' },
        { nama: 'Laila Sari', nis: '222301004', jabatan: 'Sekretaris 2' },
        { nama: 'Dewi Sartika', nis: '222301005', jabatan: 'Sekretaris 3' },
        { nama: 'Rina Fitriani', nis: '222301006', jabatan: 'Bendahara 1' },
        { nama: 'Budi Hartono', nis: '222301007', jabatan: 'Bendahara 2' },
        { nama: 'Agus Setiawan', nis: '222301008', jabatan: 'Bendahara 3' },
      ]
    },
    {
      divisi: 'BPH INTI MPK',
      jabatans: ['Ketua MPK', 'Wakil Ketua MPK', 'Sekretaris MPK', 'Bendahara MPK'],
      members: [
        { nama: 'Fahmi Idris', nis: '222302001', jabatan: 'Ketua MPK' },
        { nama: 'Irfan Hakim', nis: '222302002', jabatan: 'Wakil Ketua MPK' },
        { nama: 'Gita Gutawa', nis: '222302003', jabatan: 'Sekretaris MPK' },
        { nama: 'Hendra Kumbara', nis: '222302004', jabatan: 'Bendahara MPK' },
      ]
    },
    {
      divisi: 'SEKBID 1 (Keagamaan)',
      jabatans: ['Ketua Sekbid 1', 'Sekretaris Sekbid 1', 'Anggota Sekbid 1'],
      members: [
        { nama: 'Ahmad Hidayat', nis: '232403001', jabatan: 'Ketua Sekbid 1' },
        { nama: 'Nur Azizah', nis: '232403002', jabatan: 'Sekretaris Sekbid 1' },
        { nama: 'Yusuf Mansur', nis: '232403003', jabatan: 'Anggota Sekbid 1' },
      ]
    },
    {
      divisi: 'SEKBID 2 (Budi Pekerti)',
      jabatans: ['Ketua Sekbid 2', 'Sekretaris Sekbid 2', 'Anggota Sekbid 2'],
      members: [
        { nama: 'Doni Pratama', nis: '232404001', jabatan: 'Ketua Sekbid 2' },
        { nama: 'Eka Saputra', nis: '232404002', jabatan: 'Sekretaris Sekbid 2' },
        { nama: 'Fitriani Syah', nis: '232404003', jabatan: 'Anggota Sekbid 2' },
      ]
    },
    {
      divisi: 'KESISWAAN',
      jabatans: ['Pembina OSIS', 'Bendahara Kesiswaan'],
      members: [
        { nama: 'Pak Mulyana, S.Pd', nis: 'GURU001', jabatan: 'Pembina OSIS', kelas: 'GURU' },
        { nama: 'Bu Ratna, M.Pd', nis: 'GURU002', jabatan: 'Bendahara Kesiswaan', kelas: 'GURU' },
      ]
    },
    {
      divisi: 'TEKNOLOGI',
      jabatans: ['Administrator IT'],
      members: [
        { nama: 'Admin Master', nis: 'IT001', jabatan: 'Administrator IT', role: 'ADMIN' },
      ]
    }
  ];

  for (const group of orgStructure) {
    const divisi = await prisma.divisi.create({ data: { nama: group.divisi } });
    for (const jabName of group.jabatans) {
      await prisma.jabatan.create({ data: { nama: jabName, divisiId: divisi.id } });
    }
    for (const m of group.members) {
      const pengurus = await prisma.pengurus.create({
        data: {
          nama: m.nama,
          nis: m.nis,
          kelas: m.kelas || 'XII',
          jabatan: m.jabatan,
          divisi: group.divisi,
          status: 'AKTIF'
        }
      });
      const username = m.role === 'ADMIN' ? 'admin' : m.nama.toLowerCase().split(' ')[0] + '.' + m.nis.toLowerCase();
      await prisma.user.create({
        data: {
          username: username,
          password: password,
          role: m.role || 'PENGURUS',
          pengurusId: pengurus.id
        }
      });
      console.log(`✅ ${m.nama} -> ${username}`);
    }
  }

  console.log('\n✨ DATABASE BERHASIL DIBERSIHKAN DAN DIISI ULANG! ✨');
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
