const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('--- Memulai Seeding Data Realistis ---');

  // 1. PEMBERSIHAN DATA (Optional, tapi bagus biar gak duplikat)
  // await prisma.pengurus.deleteMany();
  // await prisma.periode.deleteMany();

  // 2. BUAT PERIODE
  const p1 = await prisma.periode.upsert({
    where: { tahun: "2023/2024" },
    update: {},
    create: {
      tahun: "2023/2024",
      namaKabinet: "Aruna Bhakti",
      isAktif: false,
      fotoAngkatan: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop",
    }
  });

  const p2 = await prisma.periode.upsert({
    where: { tahun: "2024/2025" },
    update: {},
    create: {
      tahun: "2024/2025",
      namaKabinet: "Jiva Abisatya",
      isAktif: true,
      fotoAngkatan: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
    }
  });

  const p3 = await prisma.periode.upsert({
    where: { tahun: "2025/2026" },
    update: {},
    create: {
      tahun: "2025/2026",
      namaKabinet: "Nitya Sahwahita",
      isAktif: false,
      fotoAngkatan: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    }
  });

  console.log('✔ Periode berhasil dibuat');

  // 3. DATA PENGURUS (Contoh Realistis per Periode)
  const pengurusData = [
    // --- PERIODE 2024/2025 (AKTIF) ---
    { nama: "Ahmad Fauzi", nis: "2425001", kelas: "XI PPLG 1", jabatan: "Ketua OSIS", divisi: "Inti", periodeId: p2.id, moto: "Memimpin dengan aksi, bukan sekadar janji.", ig: "@ahmadfzi_" },
    { nama: "Siti Aminah", nis: "2425002", kelas: "XI AKL 2", jabatan: "Ketua MPK", divisi: "Inti", periodeId: p2.id, moto: "Suara siswa adalah amanah bagi kami.", ig: "@sitiaminah.s" },
    { nama: "Rizky Ramadhan", nis: "2425003", kelas: "XI TJKT 3", jabatan: "Wakil Ketua OSIS", divisi: "Inti", periodeId: p2.id, moto: "Sinergi dalam keberagaman.", ig: "@rizkyr_" },
    { nama: "Lestari Putri", nis: "2425004", kelas: "XI MPLB 1", jabatan: "Sekretaris Umum", divisi: "Inti", periodeId: p2.id, moto: "Tertib administrasi, lancar organisasi.", ig: "@lestarip" },
    { nama: "Budi Santoso", nis: "2425005", kelas: "X PPLG 2", jabatan: "Ketua Sekbid 1 (Ketaqwaan)", divisi: "Sekbid 1", periodeId: p2.id, moto: "Iman kuat, mental hebat.", ig: "@budisans" },
    { nama: "Dewi Sartika", nis: "2425006", kelas: "X DKV 1", jabatan: "Ketua Sekbid 7 (Kesenian)", divisi: "Sekbid 7", periodeId: p2.id, moto: "Kreativitas tanpa batas.", ig: "@dewisr" },

    // --- PERIODE 2023/2024 (ARSIP) ---
    { nama: "Farhan Malik", nis: "2324001", kelas: "XII TJKT 1", jabatan: "Ketua OSIS", divisi: "Inti", periodeId: p1.id, moto: "Legacy is built by hard work.", ig: "@farhanm" },
    { nama: "Nadia Utami", nis: "2324002", kelas: "XII AKL 1", jabatan: "Ketua MPK", divisi: "Inti", periodeId: p1.id, moto: "Adil dan Bijaksana.", ig: "@nadiautm" },

    // --- PERIODE 2025/2026 (FUTURE) ---
    { nama: "Gibran Rakabumi", nis: "2526001", kelas: "X PPLG 1", jabatan: "Ketua OSIS", divisi: "Inti", periodeId: p3.id, moto: "Menuju masa depan gemilang.", ig: "@gibranr" },
  ];

  for (const p of pengurusData) {
    await prisma.pengurus.upsert({
      where: { nis: p.nis },
      update: {},
      create: {
        nama: p.nama,
        nis: p.nis,
        kelas: p.kelas,
        jabatan: p.jabatan,
        divisi: p.divisi,
        periodeId: p.periodeId,
        motto: p.moto,
        instagram: p.ig,
        status: p.periodeId === p1.id ? "ALUMNI" : "AKTIF",
        fotoUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${p.nama}`,
        visi: "Mewujudkan OSIS yang inklusif dan inovatif.",
        misi: "Meningkatkan literasi digital dan kreativitas siswa melalui program kerja yang terukur."
      }
    });
  }

  console.log('✔ Pengurus berhasil dibuat');

  // 4. PROGRAM KERJA (Realistis)
  const prokerData = [
    { nama: "LDKS 2024", deskripsi: "Latihan Dasar Kepemimpinan Siswa untuk menumbuhkan jiwa kepemimpinan.", divisi: "Sekbid 10", status: "DONE", periodeId: p2.id, isFeatured: true },
    { nama: "Class Meeting 2024", deskripsi: "Lomba antar kelas setelah ujian semester.", divisi: "Sekbid 7", status: "IN_PROGRESS", periodeId: p2.id, isFeatured: true },
    { nama: "OSIS Cup 2025", deskripsi: "Turnamen olahraga tingkat sekolah.", divisi: "Sekbid 6", status: "TODO", periodeId: p2.id, isFeatured: false },
    { nama: "Bakti Sosial 2023", deskripsi: "Penyaluran bantuan kepada masyarakat sekitar.", divisi: "Sekbid 2", status: "DONE", periodeId: p1.id, isFeatured: false },
  ];

  for (const pr of prokerData) {
    await prisma.programKerja.create({
      data: {
        nama: pr.nama,
        deskripsi: pr.deskripsi,
        divisi: pr.divisi,
        status: pr.status,
        periodeId: pr.periodeId,
        isFeatured: pr.isFeatured,
        startDate: new Date(),
        deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      }
    });
  }

  console.log('✔ Program Kerja berhasil dibuat');

  // 5. BERITA (Realistis)
  // Ambil user admin untuk penulis (asumsi user 1 ada)
  const admin = await prisma.user.findFirst();
  if (admin) {
    const beritaData = [
      { judul: "Pelantikan Kabinet Jiva Abisatya", kategori: "Organisasi", periodeId: p2.id },
      { judul: "Suksesnya Acara Pensi 2024", kategori: "Event", periodeId: p2.id },
      { judul: "Rapat Koordinasi Angkatan 2023", kategori: "Organisasi", periodeId: p1.id },
    ];

    for (const b of beritaData) {
      const slug = b.judul.toLowerCase().replace(/ /g, '-') + '-' + Date.now();
      await prisma.berita.create({
        data: {
          judul: b.judul,
          slug: slug,
          konten: `Ini adalah konten berita untuk ${b.judul}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
          kategori: b.kategori,
          penulisId: admin.id,
          periodeId: b.periodeId,
          status: "PUBLISHED",
          gambar: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop"
        }
      });
    }
    console.log('✔ Berita berhasil dibuat');
  }

  // 6. GALERI
  await prisma.galeri.create({
    data: {
      judul: "Dokumentasi LDKS 2024",
      kategori: "Event",
      periodeId: p2.id,
      images: JSON.stringify(["https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop"]),
      deskripsi: "Momen kebersamaan pengurus OSIS saat latihan kepemimpinan."
    }
  });

  console.log('--- Seeding Selesai! ---');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
