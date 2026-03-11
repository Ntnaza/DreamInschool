// prisma/seed.ts

import { PrismaClient, Role, StatusPengurus, StatusAspirasi, StatusProker, TipeAcara, StatusAcara, StatusKehadiran, TipeTransaksi, StatusBarang } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Memulai proses seeding komprehensif (Target: Min 4 Data per Modul)...')

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
  // 1. APP CONFIG & STRUKTUR DASAR
  // --------------------------------------------------------
  console.log('⚙️ Seeding App Config & Struktur...')
  await prisma.appConfig.create({ data: { idCardBackImage: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2000" } })
  
  const divisiData = [
    { nama: "Inti OSIS", jabatans: ["Ketua OSIS", "Wakil Ketua OSIS", "Sekretaris Umum", "Bendahara Umum"] },
    { nama: "Inti MPK", jabatans: ["Ketua MPK", "Wakil Ketua MPK", "Sekretaris MPK", "Komisi A"] },
    { nama: "Sekbid 1 (Agama)", jabatans: ["Ketua Sekbid 1", "Anggota Sekbid 1"] },
    { nama: "Sekbid 4 (Seni)", jabatans: ["Ketua Sekbid 4", "Anggota Sekbid 4"] }
  ]
  for (const d of divisiData) {
    await prisma.divisi.create({ data: { nama: d.nama, jabatans: { create: d.jabatans.map(j => ({ nama: j })) } } })
  }

  await prisma.kategoriGaleri.createMany({ data: [{ nama: "Kegiatan OSIS" }, { nama: "LDKS" }, { nama: "Classmeet" }, { nama: "Pensi" }] })

  const kasUmum = await prisma.bukuKas.create({ data: { nama: 'Kas Umum', icon: 'Wallet', color: 'blue' } })
  const danaEvent = await prisma.bukuKas.create({ data: { nama: 'Dana Event', icon: 'Star', color: 'purple' } })

  // --------------------------------------------------------
  // 2. PENGURUS & USERS (4 DATA)
  // --------------------------------------------------------
  console.log('👥 Seeding Pengurus & Users (4 data)...')
  const hashedPassword = await bcrypt.hash('admin123', 10)
  
  const pengurusData = [
    { nama: 'Ahmad Fauzi', nis: '222301001', kelas: 'XII PPLG 1', jabatan: 'Ketua OSIS', divisi: 'Inti OSIS', user: 'admin', role: Role.ADMIN },
    { nama: 'Siti Rahmawati', nis: '232402005', kelas: 'XI AKL 2', jabatan: 'Bendahara Umum', divisi: 'Inti OSIS', user: 'siti', role: Role.PENGURUS },
    { nama: 'Budi Santoso', nis: '222301042', kelas: 'XII TJKT 3', jabatan: 'Ketua MPK', divisi: 'Inti MPK', user: 'budi', role: Role.ADMIN },
    { nama: 'Lani Cahyani', nis: '232403012', kelas: 'XI DKV 1', jabatan: 'Ketua Sekbid 4', divisi: 'Sekbid 4 (Seni)', user: 'lani', role: Role.PENGURUS }
  ]

  const pengurusList: any[] = []
  for (const p of pengurusData) {
    const created = await prisma.pengurus.create({
      data: {
        nama: p.nama, nis: p.nis, kelas: p.kelas, jabatan: p.jabatan, divisi: p.divisi, status: 'AKTIF',
        visi: "Membangun sinergi yang harmonis.", misi: "Meningkatkan kualitas SDM.",
        motto: "Lakukan yang terbaik hari ini.",
        instagram: "@" + p.user,
        user: { create: { username: p.user, password: hashedPassword, role: p.role } }
      }
    })
    pengurusList.push(created)
  }

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
          konten: "Upacara pelantikan berlangsung khidmat di lapangan utama yang dipimpin langsung oleh Kepala Sekolah.",
          kategori: "Pengumuman", penulisId: adminUser.id, status: "PUBLISHED", views: 245,
          gambar: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200"
        },
        {
          judul: "Kemenangan Tim Basket Sekolah di Walikota Cup",
          slug: "kemenangan-tim-basket-walikota-cup",
          konten: "Tim basket putra berhasil meraih juara 1 setelah mengalahkan lawan tangguh di babak final.",
          kategori: "Prestasi", penulisId: adminUser.id, status: "PUBLISHED", views: 112,
          gambar: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200"
        },
        {
          judul: "Workshop Jurnalistik Modern 2025",
          slug: "workshop-jurnalistik-modern-2025",
          konten: "Meningkatkan kemampuan menulis siswa di era digital untuk konten mading sekolah.",
          kategori: "Edukasi", penulisId: adminUser.id, status: "PUBLISHED", views: 89,
          gambar: "https://images.unsplash.com/photo-1504711432869-5d39a110fdd7?q=80&w=1200"
        },
        {
          judul: "Persiapan Bazar Kewirausahaan Bulan Depan",
          slug: "persiapan-bazar-kewirausahaan",
          konten: "Mari daftarkan kelas kalian untuk mengikuti bazar makanan dan kerajinan tangan.",
          kategori: "Event", penulisId: adminUser.id, status: "PUBLISHED", views: 156,
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
        deskripsi: "Latihan Dasar Kepemimpinan Siswa angkatan baru untuk melatih mental.",
        divisi: "Inti OSIS", status: StatusProker.DONE, progress: 100, prioritas: "Tinggi", anggaran: 5000000,
        pjId: pengurusList[0].id, deadline: new Date('2024-11-15'), isFeatured: true,
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800"
      },
      {
        nama: "Bazar Kewirausahaan",
        deskripsi: "Pameran produk UMKM buatan siswa untuk melatih jiwa bisnis.",
        divisi: "Sekbid 6", status: StatusProker.IN_PROGRESS, progress: 45, prioritas: "Medium", anggaran: 2000000,
        pjId: pengurusList[1].id, deadline: new Date('2025-04-10'), isFeatured: false,
        image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=800"
      },
      {
        nama: "Classmeet Semester Genap",
        deskripsi: "Lomba olahraga dan seni antar kelas setelah ujian semester.",
        divisi: "Sekbid 4 (Seni)", status: StatusProker.TODO, progress: 0, prioritas: "Tinggi", anggaran: 3500000,
        pjId: pengurusList[3].id, deadline: new Date('2025-06-15'), isFeatured: true,
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800"
      },
      {
        nama: "Santunan Anak Yatim",
        deskripsi: "Program bakti sosial rutin OSIS untuk membantu sesama.",
        divisi: "Sekbid 1 (Agama)", status: StatusProker.DONE, progress: 100, prioritas: "Medium", anggaran: 1500000,
        pjId: pengurusList[1].id, deadline: new Date('2025-02-10'), isFeatured: false,
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800"
      }
    ]
  })

  // --------------------------------------------------------
  // 5. ASPIRASI (4 DATA)
  // --------------------------------------------------------
  console.log('📩 Seeding Aspirasi (4 data)...')
  await prisma.aspirasi.createMany({
    data: [
      { pengirim: "Andi", kelas: "X PPLG 2", isi: "Mohon diperbanyak tempat sampah di area kantin.", kategori: "Fasilitas", status: StatusAspirasi.SELESAI, balasan: "Sudah ditambahkan 3 titik sampah baru.", balasanAt: new Date() },
      { pengirim: "Anonim", kelas: "XI AKL 1", isi: "Kamar mandi lantai 2 airnya sering mati.", kategori: "Sarana", status: StatusAspirasi.PENDING },
      { pengirim: "Rina", kelas: "XII DKV 3", isi: "Banyakkan kegiatan workshop desain grafis.", kategori: "Kegiatan", status: StatusAspirasi.DITERIMA, balasan: "Akan dijadwalkan di bulan Mei." },
      { pengirim: "Jaka", kelas: "X TJKT 1", isi: "Wifi sekolah sering lemot saat jam istirahat.", kategori: "Fasilitas", status: StatusAspirasi.PENDING }
    ]
  })

  // --------------------------------------------------------
  // 6. SURAT (4 DATA)
  // --------------------------------------------------------
  console.log('📁 Seeding Surat (4 data)...')
  await prisma.surat.createMany({
    data: [
      { nomorSurat: "001/OSIS/III/2025", jenis: "Undangan", perihal: "Rapat Pleno Program Kerja", tujuan: "Seluruh Pengurus", tanggal: new Date() },
      { nomorSurat: "002/OSIS/III/2025", jenis: "Permohonan", perihal: "Izin Penggunaan Lapangan", tujuan: "Kepala Sekolah", tanggal: new Date() },
      { nomorSurat: "003/MPK/IV/2025", jenis: "SK", perihal: "Pengesahan Panitia LDKS", tujuan: "Internal MPK", tanggal: new Date() },
      { nomorSurat: "004/OSIS/IV/2025", jenis: "Undangan", perihal: "Kerja Bakti Sekolah", tujuan: "Warga Sekolah", tanggal: new Date() }
    ]
  })

  // --------------------------------------------------------
  // 7. KEUANGAN (4 DATA)
  // --------------------------------------------------------
  console.log('💰 Seeding Keuangan (4 data)...')
  await prisma.keuangan.createMany({
    data: [
      { judul: "Kas Masuk Januari", tipe: TipeTransaksi.PEMASUKAN, nominal: 1200000, kategori: "Iuran Wajib", bukuKasId: kasUmum.id },
      { judul: "Beli Alat Tulis Kantor", tipe: TipeTransaksi.PENGELUARAN, nominal: 150000, kategori: "Operasional", bukuKasId: kasUmum.id },
      { judul: "Sponsor Toko Buku", tipe: TipeTransaksi.PEMASUKAN, nominal: 500000, kategori: "Sponsor", bukuKasId: danaEvent.id },
      { judul: "DP Sewa Tenda Bazar", tipe: TipeTransaksi.PENGELUARAN, nominal: 300000, kategori: "Event", bukuKasId: danaEvent.id }
    ]
  })

  // --------------------------------------------------------
  // 8. INVENTARIS (4 DATA)
  // --------------------------------------------------------
  console.log('📦 Seeding Inventaris (4 data)...')
  await prisma.inventaris.createMany({
    data: [
      { nama: "Speaker Aktif", kode: "INV-001", kategori: "Elektronik", kondisi: "Baik", status: StatusBarang.AVAILABLE },
      { nama: "Kamera DSLR", kode: "INV-002", kategori: "Elektronik", kondisi: "Baik", status: StatusBarang.BORROWED, peminjam: "Lani Cahyani", tglPinjam: new Date() },
      { nama: "Megaphone", kode: "INV-003", kategori: "Umum", kondisi: "Baik", status: StatusBarang.AVAILABLE },
      { nama: "Laptop Admin", kode: "INV-004", kategori: "Elektronik", kondisi: "Rusak Ringan", status: StatusBarang.MAINTENANCE }
    ]
  })

  // --------------------------------------------------------
  // 9. ACARA & ABSENSI (4 DATA)
  // --------------------------------------------------------
  console.log('📅 Seeding Acara & Absensi (4 data)...')
  const acaraData = [
    { nama: "Rapat Mingguan", tipe: TipeAcara.RUTINAN, hari: "Senin", status: StatusAcara.ONGOING },
    { nama: "LDKS Day 1", tipe: TipeAcara.SEKALI_PAKAI, status: StatusAcara.COMPLETED },
    { nama: "Workshop Jurnalistik", tipe: TipeAcara.SEKALI_PAKAI, status: StatusAcara.UPCOMING },
    { nama: "Classmeet Futsal", tipe: TipeAcara.SEKALI_PAKAI, status: StatusAcara.ONGOING }
  ]

  for (const a of acaraData) {
    const createdAcara = await prisma.acara.create({
      data: { ...a, tanggal: new Date(), lokasi: "Aula Sekolah", deskripsi: "Kegiatan rutin/spesial OSIS." }
    })
    
    // Create Session and Attendance for first 2 members
    const sess = await prisma.sesiAcara.create({ data: { acaraId: createdAcara.id, status: StatusAcara.ONGOING } })
    await prisma.absensi.create({
      data: { acaraId: createdAcara.id, sesiId: sess.id, pengurusId: pengurusList[0].id, kegiatan: a.nama, status: StatusKehadiran.HADIR }
    })
    await prisma.absensi.create({
      data: { acaraId: createdAcara.id, sesiId: sess.id, pengurusId: pengurusList[1].id, kegiatan: a.nama, status: StatusKehadiran.HADIR }
    })
  }

  // --------------------------------------------------------
  // 10. LEADERS (4 DATA)
  // --------------------------------------------------------
  console.log('👑 Seeding Leaders (4 data)...')
  await prisma.leader.createMany({
    data: [
      { name: "Ahmad Fauzi", role: "Ketua OSIS", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800", vision: "Inovasi Tanpa Batas", mission: "Mewujudkan OSIS yang aktif dan religius.", tags: "Visioner,Religius" },
      { name: "Budi Santoso", role: "Ketua MPK", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800", vision: "Transparansi Pengawasan", mission: "Menjadi mitra kritis yang solutif.", tags: "Tegas,Adil" },
      { name: "Siti Rahmawati", role: "Bendahara Umum", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800", vision: "Amanah Finansial", mission: "Mengelola dana dengan transparan.", tags: "Jujur,Teliti" },
      { name: "Lani Cahyani", role: "Ketua Sekbid Seni", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800", vision: "Ekspresi Kreatif", mission: "Wadah bakat seni siswa.", tags: "Kreatif,Seni" }
    ]
  })

  // --------------------------------------------------------
  // 11. GALERI (4 DATA)
  // --------------------------------------------------------
  console.log('🎨 Seeding Galeri (4 data)...')
  const gData = [
    { judul: "Dokumentasi LDKS 2024", kategori: "LDKS", images: JSON.stringify(["https://images.unsplash.com/photo-1523240715635-2460117a2245?q=80&w=800"]), deskripsi: "Keseruan selama 3 hari di Puncak Bogor." },
    { judul: "Rapat Rutin Pengurus", kategori: "Kegiatan OSIS", images: JSON.stringify(["https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800"]), deskripsi: "Koordinasi program kerja bulanan." },
    { judul: "Classmeet Futsal 2024", kategori: "Classmeet", images: JSON.stringify(["https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800"]), deskripsi: "Pertandingan final yang menegangkan." },
    { judul: "Pensi Malam Kesenian", kategori: "Pensi", images: JSON.stringify(["https://images.unsplash.com/photo-1459749411177-287ce112a8bf?q=80&w=800"]), deskripsi: "Penampilan band dan tari tradisional siswa." }
  ]
  for (const g of gData) {
    await prisma.galeri.create({ data: g })
  }

  console.log('✅ PROSES SEEDING KOMPREHENSIF BERHASIL!')
}

main()
  .then(async () => { await prisma.$disconnect() })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1) })
