// prisma/seed.ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Memulai proses seeding data...')

  // 1. Buat Data Pengurus (DUMMY)
  // ------------------------------------------
  console.log('👤 Membuat data Pengurus...')
  
  const ketua = await prisma.pengurus.upsert({
    where: { nis: '1001' },
    update: {},
    create: {
      nama: 'Engkoh Raka',
      nis: '1001',
      kelas: 'XII TKJ 1',
      jabatan: 'Ketua OSIS',
      divisi: 'Inti',
      hp: '081234567890',
      status: 'AKTIF',
      user: {
        create: {
          username: 'Raihan',
          password: 'raihanakbar8', // Nanti di real app ini di-hash
          role: 'ADMIN'
        }
      }
    },
  })

  const sekretaris = await prisma.pengurus.upsert({
    where: { nis: '1002' },
    update: {},
    create: {
      nama: 'Siti Aminah',
      nis: '1002',
      kelas: 'XI RPL 2',
      jabatan: 'Sekretaris 1',
      divisi: 'Inti',
      hp: '089876543210',
      status: 'AKTIF',
      user: {
        create: {
          username: 'siti',
          password: 'password123',
          role: 'PENGURUS'
        }
      }
    },
  })

  const anggotaHumas = await prisma.pengurus.upsert({
    where: { nis: '1003' },
    update: {},
    create: {
      nama: 'Budi Santoso',
      nis: '1003',
      kelas: 'X DKV 1',
      jabatan: 'Anggota',
      divisi: 'Humas',
      hp: '085678901234',
      status: 'AKTIF'
    },
  })

  // 2. Buat Program Kerja
  // ------------------------------------------
  console.log('📋 Membuat Program Kerja...')
  
  await prisma.programKerja.deleteMany()

  await prisma.programKerja.createMany({
    data: [
      {
        nama: 'SMK NI E-Sport Championship', 
        deskripsi: 'Turnamen Mobile Legends & Valorant antar jurusan.',
        divisi: 'Olahraga',
        status: 'DONE',
        pjId: anggotaHumas.id,
        deadline: new Date('2026-02-02'), // Set tahun depan biar masuk agenda
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
        isFeatured: true,
        lokasi: "Lab Komputer 3 & 4" // Lokasi Baru
      },
      {
        nama: 'Gebyar Seni (PENSI)',
        deskripsi: 'Ajang unjuk bakat musik & tari.',
        divisi: 'Seni Budaya',
        status: 'TODO',
        pjId: sekretaris.id,
        deadline: new Date('2026-05-20'),
        image: 'https://images.unsplash.com/photo-1459749411177-287ce112a8bf?q=80&w=800&auto=format&fit=crop',
        isFeatured: false,
        lokasi: "Panggung Utama Lapangan"
      },
      {
        nama: 'LDKS & Leadership',
        deskripsi: 'Membentuk karakter pemimpin tangguh.',
        divisi: 'Kaderisasi',
        status: 'IN_PROGRESS',
        pjId: ketua.id,
        deadline: new Date('2026-01-15'),
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
        isFeatured: false,
        lokasi: "Villa Puncak Bogor"
      },
      {
        nama: 'Rapat Kerja Triwulan 1',
        deskripsi: 'Evaluasi kinerja pengurus OSIS/MPK.',
        divisi: 'Inti',
        status: 'TODO',
        pjId: ketua.id,
        deadline: new Date('2026-03-10'),
        lokasi: "Ruang OSIS"
      }
    ]
  })

  // 3. Buat Berita
  // ------------------------------------------
  console.log('📰 Membuat Berita...')
  
  await prisma.berita.deleteMany() 

  const userEngkoh = await prisma.user.findUnique({ where: { username: 'engkoh' } })

  if (userEngkoh) {
    await prisma.berita.createMany({
      data: [
        {
          judul: 'Keseruan Classmeet 2025',
          slug: 'keseruan-classmeet-2025',
          konten: 'Classmeet tahun ini sangat meriah dengan berbagai lomba...',
          penulisId: userEngkoh.id, 
          status: 'PUBLISHED',     
          views: 150,
          kategori: 'Event' // ✅ NAH INI YANG KURANG TADI
        },
        {
          judul: 'Info Pendaftaran OSIS Baru',
          slug: 'info-pendaftaran-osis-baru',
          konten: 'Bagi siswa kelas X yang berminat menjadi pengurus...',
          penulisId: userEngkoh.id, 
          status: 'PUBLISHED',
          views: 342,
          kategori: 'Pengumuman' // ✅ INI JUGA DITAMBAH
        }
      ]
    })
  }

  // 4. Buat Keuangan (Kas)
  // ------------------------------------------
  console.log('💰 Membuat Data Keuangan...')
  
  await prisma.keuangan.deleteMany() // Hapus data lama

  await prisma.keuangan.createMany({
    data: [
      {
        judul: 'Uang Kas Bulan Januari',
        tipe: 'PEMASUKAN',
        nominal: 500000,
        kategori: 'Iuran Wajib',
        keterangan: 'Iuran dari 50 pengurus.'
      },
      {
        judul: 'Beli Spanduk LDKS',
        tipe: 'PENGELUARAN',
        nominal: 150000,
        kategori: 'Perlengkapan',
        keterangan: 'Cetak spanduk ukuran 3x1 meter.'
      }
    ]
  })

  // 5. Buat Aspirasi (UPDATE DENGAN BALASAN)
  // ------------------------------------------
  console.log('📩 Membuat Data Aspirasi...')

  await prisma.aspirasi.deleteMany()

  await prisma.aspirasi.createMany({
    data: [
      {
        pengirim: 'Anonim',
        kelas: 'XII PPLG 2',
        isi: 'Kak, tolong dong adain lagi party gitu kwkw, peminatnya banyak banget nih di kelas X.',
        kategori: 'Kegiatan',
        status: 'DITERIMA', // Status sudah diterima
        balasan: 'Halo! Terima kasih masukannya. Kabar baik, proposal E-Sport sedang kami ajukan ke Waka Kesiswaan minggu ini. Ditunggu infonya ya! 🎮',
        balasanAt: new Date()
      },
      {
        pengirim: 'Rina Marlina',
        kelas: 'XII AKL 2',
        isi: 'Mushola perempuan mukenanya banyak yang kotor, mohon dikoordinasikan.',
        kategori: 'Sarana',
        status: 'SELESAI', // Status selesai ditangani
        balasan: 'Siap Kak Rina! Sekbid 1 (Agama) sudah menjadwalkan laundry rutin setiap hari Jumat mulai minggu depan. Terima kasih laporannya! 🙏',
        balasanAt: new Date()
      },
      {
        pengirim: 'Budi (Anonim)',
        kelas: '-',
        isi: 'WC belakang airnya mati terus tiap istirahat kedua.',
        kategori: 'Sarana',
        status: 'PENDING',
        balasan: null // Belum dibalas
      }
    ]
  })

  // 6. Buat Data Leader (Landing Page)
  // ------------------------------------------
  console.log('👑 Membuat Data Leader (Ketua OSIS & MPK)...')

  await prisma.leader.deleteMany() // Hapus data lama biar gak duplikat

  await prisma.leader.createMany({
    data: [
      {
        name: "Raka Aditya",
        role: "Ketua OSIS",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        vision: "Aksi Nyata, Bukan Sekadar Janji",
        mission: "OSIS adalah wajah kedisiplinan dan prestasi. Kami hadir untuk melayani, menginspirasi, dan membawa nama baik sekolah ke tingkat yang lebih tinggi.",
        tags: "Kolaborasi,Digitalisasi,Prestasi" 
      },
      {
        name: "Siti Aminah",
        role: "Ketua MPK",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        vision: "Suara Anda, Amanah Kami",
        mission: "MPK berdiri di atas prinsip transparansi dan keadilan. Kami memastikan setiap kebijakan sekolah berpihak pada siswa dan setiap suara didengar.",
        tags: "Transparansi,Keadilan,Solutif"
      }
    ]
  })
  
  console.log('✅ Seeding Selesai! Database sudah terisi.')

  // 7. Buat Data Pembina (Advisor)
  // ------------------------------------------
  console.log('🎓 Membuat Data Pembina...')
  
  // Kita pakai upsert biar kalau dijalankan berkali-kali tidak duplikat (cek berdasarkan NIP)
  await prisma.pengurus.upsert({
    where: { nis: '19680101' }, // Anggap NIS ini sebagai NIP
    update: {},
    create: {
      nama: 'Miftah Alfa Reza',
      nis: '19680101', // NIP Pendek
      kelas: '-',
      jabatan: 'Kepala Sekolah',
      divisi: 'Manajemen',
      isAdvisor: true, // TANDAI SEBAGAI PEMBINA
      fotoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop'
    }
  })

  await prisma.pengurus.upsert({
    where: { nis: '19750505' },
    update: {},
    create: {
      nama: 'Rubi Alamsyah',
      nis: '19750505',
      kelas: '-',
      jabatan: 'Waka Kesiswaan',
      divisi: 'Manajemen',
      isAdvisor: true,
      fotoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop'
    }
  })

  await prisma.pengurus.upsert({
    where: { nis: '19880808' },
    update: {},
    create: {
      nama: 'M Nizar S.Kom.',
      nis: '19880808',
      kelas: '-',
      jabatan: 'Pembina OSIS',
      divisi: 'Manajemen',
      isAdvisor: true,
      fotoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
    }
  })

  await prisma.pengurus.upsert({
    where: { nis: '19901212' },
    update: {},
    create: {
      nama: 'Rahmat Hidayat, S.T.',
      nis: '19901212',
      kelas: '-',
      jabatan: 'Pembina MPK',
      divisi: 'Manajemen',
      isAdvisor: true,
      fotoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop'
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })