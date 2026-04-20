import { PrismaClient, Role, StatusPengurus, StatusAspirasi, StatusProker, TipeAcara, StatusAcara, StatusKehadiran, TipeTransaksi, StatusBarang, AksesLevel } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log("Memulai Seeding 'Ultimate V2': Fix Galeri & Akun Aman...");

  // 1. CLEAN DATA OPERASIONAL
  await prisma.absensi.deleteMany();
  await prisma.sesiAcara.deleteMany();
  await prisma.acara.deleteMany();
  await prisma.keuangan.deleteMany();
  await prisma.bukuKas.deleteMany();
  await prisma.riwayatAset.deleteMany();
  await prisma.inventaris.deleteMany();
  await prisma.programKerja.deleteMany();
  await prisma.berita.deleteMany();
  await prisma.galeri.deleteMany();
  await prisma.leader.deleteMany();
  await prisma.aspirasi.deleteMany();
  await prisma.helpTicket.deleteMany();
  await prisma.helpVideo.deleteMany();
  await prisma.user.deleteMany();
  await prisma.pengurus.deleteMany();
  await prisma.periode.deleteMany();
  await prisma.websiteConfig.deleteMany();
  await prisma.kategoriGaleri.deleteMany();
  await prisma.divisi.deleteMany();

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash("admin123", salt);

  // 2. WEBSITE CONFIG
  await prisma.websiteConfig.create({
    data: {
      namaOrganisasi: "OSIS & MPK SMK NEGERI 1 KOTA",
      deskripsi: "Pusat gerakan siswa yang kreatif, kolaboratif, dan berintegritas. Wadah aspirasi terbesar siswa.",
      logoUrl: "/logos/OSKA.png",
      email: "osis@smkn1.sch.id",
      telepon: "021-9876543",
      alamat: "Jl. Merdeka No. 45, Jakarta",
    }
  });

  // 3. PERIODE
  const pArsip = await prisma.periode.create({
    data: { tahun: "2024/2025", namaKabinet: "Pratama Abhinaya", isAktif: false, logoKabinet: "https://api.dicebear.com/7.x/shapes/svg?seed=pratama" }
  });
  const pAktif = await prisma.periode.create({
    data: { tahun: "2025/2026", namaKabinet: "Nawa Satya", isAktif: true, logoKabinet: "https://api.dicebear.com/7.x/shapes/svg?seed=nawa" }
  });

  // 4. DIVISI & JABATAN
  const divBPH = await prisma.divisi.create({ data: { nama: "Badan Pengurus Harian" } });
  const divSek5 = await prisma.divisi.create({ data: { nama: "Sekbid V - Humas & IT" } });

  // 5. PROTECTED USERS
  async function ensureUser(username: string, nama: string, nis: string) {
    const pengurus = await prisma.pengurus.upsert({
      where: { nis: nis },
      update: { periodeId: pAktif.id, status: StatusPengurus.AKTIF, nama: nama },
      create: {
        nama: nama, nis: nis, kelas: "XI PPLG 1", jabatan: "Ketua Umum", divisi: "Badan Pengurus Harian",
        periodeId: pAktif.id, status: StatusPengurus.AKTIF,
        fotoUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
      }
    });
    const user = await prisma.user.upsert({
      where: { username: username },
      update: { pengurusId: pengurus.id, role: Role.ADMIN },
      create: { username: username, password: hashedPass, role: Role.ADMIN, pengurusId: pengurus.id }
    });
    return user;
  }
  const uAdmin = await ensureUser("admin", "Admin Utama", "admin_root");
  await ensureUser("arya", "Arya Wijaya", "2223001");

  // 6. GALERI KEGIATAN (PADAT - 10 Per Periode)
  const katKegiatan = await prisma.kategoriGaleri.create({ data: { nama: "Kegiatan" } });
  const katLomba = await prisma.kategoriGaleri.create({ data: { nama: "Perlombaan" } });

  for (let i = 1; i <= 10; i++) {
    // Galeri Aktif
    await prisma.galeri.create({
      data: {
        judul: `Dokumentasi Event Aktif ${i}`,
        kategori: i % 2 === 0 ? "Kegiatan" : "Perlombaan",
        periodeId: pAktif.id,
        images: JSON.stringify([
          `https://picsum.photos/seed/g-active-${i}-1/800/600`,
          `https://picsum.photos/seed/g-active-${i}-2/800/600`
        ]),
        deskripsi: `Koleksi foto terbaik dari event yang baru saja dilaksanakan pada periode ${pAktif.tahun}.`,
        tanggal: new Date()
      }
    });

    // Galeri Arsip
    await prisma.galeri.create({
      data: {
        judul: `Memori Event Masa Lalu ${i}`,
        kategori: i % 2 === 0 ? "Kegiatan" : "Perlombaan",
        periodeId: pArsip.id,
        images: JSON.stringify([
          `https://picsum.photos/seed/g-old-${i}-1/800/600`,
          `https://picsum.photos/seed/g-old-${i}-2/800/600`
        ]),
        deskripsi: `Momen berharga yang terdokumentasi dengan baik pada masa jabatan ${pArsip.tahun}.`,
        tanggal: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
      }
    });
  }

  // 7. BERITA PADAT (10 Per Periode)
  for (let i = 1; i <= 10; i++) {
    await prisma.berita.create({
      data: {
        judul: `Update Berita ${pAktif.tahun} - ${i}`, slug: `berita-aktif-${i}`, konten: "Konten berita...", kategori: "Info", penulisId: uAdmin.id, periodeId: pAktif.id,
        gambar: `https://picsum.photos/seed/na${i}/800/400`
      }
    });
    await prisma.berita.create({
      data: {
        judul: `Arsip Berita ${pArsip.tahun} - ${i}`, slug: `berita-arsip-${i}`, konten: "Konten lama...", kategori: "Arsip", penulisId: uAdmin.id, periodeId: pArsip.id,
        gambar: `https://picsum.photos/seed/no${i}/800/400`
      }
    });
  }

  // 8. PROKER PADAT (5 Per Periode)
  for (let i = 1; i <= 5; i++) {
    const today = new Date();
    const nextMonth = new Date();
    nextMonth.setMonth(today.getMonth() + 1);

    const pastDate = new Date();
    pastDate.setFullYear(today.getFullYear() - 1);
    const pastDeadline = new Date(pastDate);
    pastDeadline.setMonth(pastDate.getMonth() + 1);

    // Proker Aktif
    await prisma.programKerja.create({
      data: {
        nama: `Proker Unggulan Aktif ${i}`, 
        status: StatusProker.IN_PROGRESS, 
        progress: 40, 
        divisi: "Sekbid V", 
        periodeId: pAktif.id,
        isFeatured: i <= 3,
        startDate: today,
        deadline: nextMonth,
        image: `https://picsum.photos/seed/pa${i}/600/400`,
        deskripsi: `Deskripsi program kerja unggulan ke-${i} yang sedang berjalan dengan target penyelesaian bulan depan.`
      }
    });

    // Proker Arsip
    await prisma.programKerja.create({
      data: {
        nama: `Proker Sukses Masa Lalu ${i}`, 
        status: StatusProker.DONE, 
        progress: 100, 
        divisi: "Sekbid V", 
        periodeId: pArsip.id,
        isFeatured: i <= 3,
        startDate: pastDate,
        deadline: pastDeadline,
        image: `https://picsum.photos/seed/po${i}/600/400`,
        deskripsi: `Dokumentasi keberhasilan program kerja ke-${i} yang telah selesai dilaksanakan pada tahun lalu.`
      }
    });
  }

  // 9. PENGURUS TAMBAHAN
  for (let i = 1; i <= 10; i++) {
    await prisma.pengurus.create({
      data: {
        nama: `Anggota Aktif ${i}`, nis: `N-AKTIF-${i}`, kelas: "XI PPLG", jabatan: "Anggota", divisi: "Sekbid V", periodeId: pAktif.id,
        fotoUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=N-Aktif${i}`
      }
    });
  }

  console.log("Seeding SELESAI! Galeri Kegiatan kini sangat padat.");
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
