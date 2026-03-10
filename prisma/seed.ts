// prisma/seed.ts

import { PrismaClient, Role, StatusPengurus, StatusAspirasi, StatusProker, TipeAcara, StatusAcara, StatusKehadiran, TipeTransaksi, StatusBarang } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Memulai proses seeding komprehensif (Update: 4 Data per Modul)...')

  // --------------------------------------------------------
  // 0. MEMBERSIHKAN DATABASE
  // --------------------------------------------------------
  console.log('🧹 Membersihkan database lama...')
  await prisma.riwayatAset.deleteMany()
  await prisma.inventaris.deleteMany()
  await prisma.keuangan.deleteMany()
  await prisma.bukuKas.deleteMany()
  await prisma.absensi.deleteMany()
  await prisma.sesiAcara.deleteMany()
  await prisma.acara.deleteMany()
  await prisma.programKerja.deleteMany()
  await prisma.berita.deleteMany()
  await prisma.user.deleteMany()
  await prisma.pengurus.deleteMany()
  await prisma.aspirasi.deleteMany()
  await prisma.surat.deleteMany()
  await prisma.leader.deleteMany()
  await prisma.visitor.deleteMany()
  await prisma.jabatan.deleteMany()
  await prisma.divisi.deleteMany()
  await prisma.kategoriGaleri.deleteMany()
  await prisma.galeri.deleteMany()
  await prisma.appConfig.deleteMany()

  // --------------------------------------------------------
  // 1. APP CONFIG & STRUKTUR
  // --------------------------------------------------------
  await prisma.appConfig.create({ data: { idCardBackImage: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2000" } })
  
  const divisiData = [
    { nama: "Inti OSIS", jabatans: ["Ketua OSIS", "Wakil Ketua OSIS", "Sekretaris Umum", "Bendahara Umum"] },
    { nama: "Sekbid 1", jabatans: ["Ketua Sekbid 1", "Anggota Sekbid 1"] },
    { nama: "Sekbid 4", jabatans: ["Ketua Sekbid 4", "Anggota Sekbid 4"] },
    { nama: "Sekbid 6", jabatans: ["Ketua Sekbid 6", "Anggota Sekbid 6"] }
  ]
  for (const d of divisiData) {
    await prisma.divisi.create({ data: { nama: d.nama, jabatans: { create: d.jabatans.map(j => ({ nama: j })) } } })
  }

  await prisma.kategoriGaleri.createMany({ data: [{ nama: "Kegiatan OSIS" }, { nama: "LDKS" }, { nama: "Classmeet" }, { nama: "Pensi" }] })

  const kasUmum = await prisma.bukuKas.create({ data: { nama: 'Kas Umum', icon: 'Wallet', color: 'blue' } })

  // --------------------------------------------------------
  // 2. PENGURUS & USERS
  // --------------------------------------------------------
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const adminPengurus = await prisma.pengurus.create({
    data: {
      nama: 'Ahmad Fauzi', nis: '222301001', kelas: 'XII PPLG 1', jabatan: 'Ketua OSIS', divisi: 'Inti OSIS', status: 'AKTIF',
      user: { create: { username: 'admin', password: hashedPassword, role: Role.ADMIN } }
    }
  })
  const pengurus2 = await prisma.pengurus.create({
    data: {
      nama: 'Siti Rahmawati', nis: '232402005', kelas: 'XI AKL 2', jabatan: 'Bendahara Umum', divisi: 'Inti OSIS', status: 'AKTIF',
      user: { create: { username: 'siti', password: hashedPassword, role: Role.PENGURUS } }
    }
  })

  // --------------------------------------------------------
  // 3. BERITA (4 DATA)
  // --------------------------------------------------------
  console.log('📰 Seeding Berita (4 data)...')
  const adminUser = await prisma.user.findUnique({ where: { username: 'admin' } })
  if (adminUser) {
    await prisma.berita.createMany({
      data: [
        {
          judul: "Pelantikan Pengurus OSIS Masa Bakti 2024/2025",
          slug: "pelantikan-pengurus-osis-2024-2025",
          konten: "Upacara pelantikan berlangsung khidmat di lapangan utama...",
          kategori: "Pengumuman",
          penulisId: adminUser.id,
          status: "PUBLISHED",
          views: 245,
          gambar: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200"
        },
        {
          judul: "Kemenangan Tim Basket Sekolah di Walikota Cup",
          slug: "kemenangan-tim-basket-walikota-cup",
          konten: "Tim basket berhasil meraih juara 1 setelah perjuangan keras...",
          kategori: "Prestasi",
          penulisId: adminUser.id,
          status: "PUBLISHED",
          views: 112,
          gambar: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200"
        },
        {
          judul: "Workshop Jurnalistik Modern 2025",
          slug: "workshop-jurnalistik-modern-2025",
          konten: "Meningkatkan kemampuan menulis siswa di era digital...",
          kategori: "Edukasi",
          penulisId: adminUser.id,
          status: "PUBLISHED",
          views: 89,
          gambar: "https://images.unsplash.com/photo-1504711432869-5d39a110fdd7?q=80&w=1200"
        },
        {
          judul: "Persiapan Bazar Kewirausahaan Bulan Depan",
          slug: "persiapan-bazar-kewirausahaan",
          konten: "Mari daftarkan kelas kalian untuk mengikuti bazar makanan...",
          kategori: "Event",
          penulisId: adminUser.id,
          status: "PUBLISHED",
          views: 156,
          gambar: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1200"
        }
      ]
    })
  }

  // --------------------------------------------------------
  // 4. PROGRAM KERJA (4 DATA)
  // --------------------------------------------------------
  console.log('📋 Seeding Program Kerja (4 data)...')
  await prisma.programKerja.createMany({
    data: [
      {
        nama: "LDKS 2024",
        deskripsi: "Latihan Dasar Kepemimpinan Siswa angkatan baru.",
        divisi: "Inti OSIS",
        status: StatusProker.DONE,
        progress: 100,
        prioritas: "Tinggi",
        anggaran: 5000000,
        pjId: adminPengurus.id,
        deadline: new Date('2024-11-15'),
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800",
        isFeatured: true
      },
      {
        nama: "Bazar Kewirausahaan",
        deskripsi: "Pameran produk UMKM buatan siswa.",
        divisi: "Sekbid 6",
        status: StatusProker.IN_PROGRESS,
        progress: 45,
        prioritas: "Medium",
        anggaran: 2000000,
        pjId: pengurus2.id,
        deadline: new Date('2025-04-10'),
        image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=800",
        isFeatured: false
      },
      {
        nama: "Classmeet Semester Genap",
        deskripsi: "Lomba olahraga dan seni antar kelas.",
        divisi: "Sekbid 4",
        status: StatusProker.TODO,
        progress: 0,
        prioritas: "Tinggi",
        anggaran: 3500000,
        pjId: adminPengurus.id,
        deadline: new Date('2025-06-15'),
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800",
        isFeatured: true
      },
      {
        nama: "Santunan Anak Yatim",
        deskripsi: "Program bakti sosial rutin OSIS.",
        divisi: "Sekbid 1",
        status: StatusProker.DONE,
        progress: 100,
        prioritas: "Medium",
        anggaran: 1500000,
        pjId: pengurus2.id,
        deadline: new Date('2025-02-10'),
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800",
        isFeatured: false
      }
    ]
  })

  // --------------------------------------------------------
  // 5. GALERI (4 DATA)
  // --------------------------------------------------------
  console.log('🎨 Seeding Galeri (4 data)...')
  const galeriData = [
    {
      judul: "Dokumentasi LDKS 2024",
      kategori: "LDKS",
      images: JSON.stringify(["https://images.unsplash.com/photo-1523240715635-2460117a2245?q=80&w=800", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800"]),
      deskripsi: "Keseruan selama 3 hari di Puncak Bogor."
    },
    {
      judul: "Rapat Rutin Pengurus",
      kategori: "Kegiatan OSIS",
      images: JSON.stringify(["https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800"]),
      deskripsi: "Koordinasi program kerja bulanan."
    },
    {
      judul: "Classmeet Futsal 2024",
      kategori: "Classmeet",
      images: JSON.stringify(["https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800"]),
      deskripsi: "Pertandingan final yang sangat menegangkan."
    },
    {
      judul: "Pensi Malam Kesenian",
      kategori: "Pensi",
      images: JSON.stringify(["https://images.unsplash.com/photo-1459749411177-287ce112a8bf?q=80&w=800"]),
      deskripsi: "Penampilan band dan tari tradisional siswa."
    }
  ]
  for (const g of galeriData) {
    await prisma.galeri.create({ data: g })
  }

  // --------------------------------------------------------
  // 6. DATA PELENGKAP LAINNYA
  // --------------------------------------------------------
  await prisma.leader.createMany({
    data: [
      { name: "Ahmad Fauzi", role: "Ketua OSIS", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800", vision: "Inovatif", mission: "Kerja Nyata", tags: "Inovasi" },
      { name: "Siti Rahmawati", role: "Bendahara Umum", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800", vision: "Transparan", mission: "Jujur", tags: "Jujur" }
    ]
  })

  await prisma.keuangan.create({
    data: { judul: "Kas Masuk", tipe: TipeTransaksi.PEMASUKAN, nominal: 1000000, kategori: "Iuran", bukuKasId: kasUmum.id }
  })

  await prisma.surat.create({
    data: { nomorSurat: "001/OSIS/III/2025", jenis: "Undangan", perihal: "Rapat Pleno", tujuan: "Pengurus", tanggal: new Date() }
  })

  await prisma.inventaris.create({
    data: { nama: "Speaker Aktif", kode: "INV-002", kategori: "Elektronik", kondisi: "Baik", status: StatusBarang.AVAILABLE }
  })

  console.log('✅ SEEDING UPDATE BERHASIL!')
}

main()
  .then(async () => { await prisma.$disconnect() })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1) })
