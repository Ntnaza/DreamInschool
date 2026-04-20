const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('password123', 10);
  console.log('🚀 Memulai Seeding Organisasi Full Utuh (Sinkron dengan Tabel Divisi/Jabatan)...');

  const organisasi = [
    // === INTI OSIS ===
    { username: 'ketua.osis', nama: 'Zaki Arkan', jabatan: 'Ketua Umum OSIS', divisi: 'BPH OSIS', role: 'PENGURUS' },
    { username: 'sekretaris.osis', nama: 'Siti Aminah', jabatan: 'Sekretaris Umum', divisi: 'BPH OSIS', role: 'PENGURUS' },
    { username: 'bendahara.osis', nama: 'Rina Fitriani', jabatan: 'Bendahara Umum', divisi: 'BPH OSIS', role: 'PENGURUS' },

    // === INTI MPK ===
    { username: 'ketua.mpk', nama: 'Fahmi Idris', jabatan: 'Ketua MPK', divisi: 'BPH MPK', role: 'PENGURUS' },
    { username: 'sekretaris.mpk', nama: 'Laila Sari', jabatan: 'Sekretaris MPK', divisi: 'BPH MPK', role: 'PENGURUS' },

    // === KETUA DIVISI ===
    { username: 'kadiv.agama', nama: 'Ahmad Hidayat', jabatan: 'Ketua Divisi Keagamaan', divisi: 'Keagamaan', role: 'PENGURUS' },
    { username: 'kadiv.seni', nama: 'Bunga Citra', jabatan: 'Ketua Divisi Kesenian', divisi: 'Kesenian', role: 'PENGURUS' },
    { username: 'kadiv.olahraga', nama: 'Doni Pratama', jabatan: 'Ketua Divisi Olahraga', divisi: 'Olahraga', role: 'PENGURUS' },
    { username: 'kadiv.humas', nama: 'Eka Saputra', jabatan: 'Ketua Divisi Humas', divisi: 'Humas', role: 'PENGURUS' },

    // === PEMBINA ===
    { username: 'pembina', nama: 'Pak Mulyana, S.Pd', jabatan: 'Pembina OSIS', divisi: 'Kesiswaan', role: 'PENGURUS' },

    // === SUPER ADMIN ===
    { username: 'superadmin', nama: 'Admin IT OSIS', jabatan: 'Administrator IT', divisi: 'Teknologi', role: 'ADMIN' },
  ];

  for (const org of organisasi) {
    // 1. SINKRONISASI TABEL DIVISI
    const divisiRecord = await prisma.divisi.upsert({
      where: { nama: org.divisi },
      update: {},
      create: { nama: org.divisi }
    });

    // 2. SINKRONISASI TABEL JABATAN
    await prisma.jabatan.upsert({
      where: { nama_divisiId: { nama: org.jabatan, divisiId: divisiRecord.id } },
      update: {},
      create: { nama: org.jabatan, divisiId: divisiRecord.id }
    });

    // 3. BUAT PENGURUS
    const pengurus = await prisma.pengurus.upsert({
      where: { nis: 'NIS_' + org.username },
      update: { jabatan: org.jabatan, divisi: org.divisi },
      create: {
        nama: org.nama,
        nis: 'NIS_' + org.username,
        kelas: org.username === 'pembina' ? 'GURU' : 'XII',
        jabatan: org.jabatan,
        divisi: org.divisi,
        status: 'AKTIF'
      }
    });

    // 4. BUAT USER
    await prisma.user.upsert({
      where: { username: org.username },
      update: { role: org.role, password: password },
      create: {
        username: org.username,
        password: password,
        role: org.role,
        pengurusId: pengurus.id
      }
    });
  }

  console.log('✅ Seeding Selesai! Tabel Divisi & Jabatan sekarang sudah terisi sesuai data pengurus.');
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
