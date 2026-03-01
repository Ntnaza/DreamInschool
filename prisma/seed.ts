// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Memulai proses seeding data...')

  const hashedPasswordAdmin = await bcrypt.hash('admin123', 10)
  const hashedPasswordUser = await bcrypt.hash('password123', 10)

  // 0. Buat Buku Kas Default (MULTI-LEDGER SUPPORT)
  // ------------------------------------------
  console.log('📚 Membuat kategori pembukuan...')
  const kasUmum = await prisma.bukuKas.upsert({
    where: { nama: 'Kas Umum' },
    update: {},
    create: { nama: 'Kas Umum', deskripsi: 'Operasional OSIS harian', icon: 'Wallet', color: 'blue' }
  })
  
  await prisma.bukuKas.upsert({
    where: { nama: 'Dana Sosial' },
    update: {},
    create: { nama: 'Dana Sosial', deskripsi: 'Dana santunan dan sumbangan', icon: 'Heart', color: 'rose' }
  })

  // 1. Buat Data Pengurus
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
          username: 'admin',
          password: hashedPasswordAdmin, 
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
          password: hashedPasswordUser,
          role: 'PENGURUS'
        }
      }
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
        pjId: ketua.id,
        deadline: new Date('2026-02-02'),
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
        isFeatured: true,
        lokasi: "Lab Komputer 3 & 4"
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
      }
    ]
  })

  // 3. Buat Berita
  // ------------------------------------------
  console.log('📰 Membuat Berita...')
  
  await prisma.berita.deleteMany() 
  const adminUser = await prisma.user.findUnique({ where: { username: 'admin' } })

  if (adminUser) {
    await prisma.berita.createMany({
      data: [
        {
          judul: 'Keseruan Classmeet 2025',
          slug: 'keseruan-classmeet-2025',
          konten: 'Classmeet tahun ini sangat meriah dengan berbagai lomba...',
          penulisId: adminUser.id, 
          status: 'PUBLISHED',     
          views: 150,
          kategori: 'Event'
        }
      ]
    })
  }

  // 4. Buat Keuangan
  // ------------------------------------------
  console.log('💰 Membuat Data Keuangan...')
  await prisma.keuangan.deleteMany()

  await prisma.keuangan.createMany({
    data: [
      {
        judul: 'Uang Kas Bulan Januari',
        tipe: 'PEMASUKAN',
        nominal: 500000,
        kategori: 'Iuran Wajib',
        keterangan: 'Iuran dari 50 pengurus.',
        bukuKasId: kasUmum.id
      },
      {
        judul: 'Beli Spanduk LDKS',
        tipe: 'PENGELUARAN',
        nominal: 150000,
        kategori: 'Perlengkapan',
        keterangan: 'Cetak spanduk ukuran 3x1 meter.',
        bukuKasId: kasUmum.id
      }
    ]
  })

  // 5. Buat Data Leader
  // ------------------------------------------
  console.log('👑 Membuat Data Leader...')
  await prisma.leader.deleteMany()
  await prisma.leader.createMany({
    data: [
      {
        name: "Engkoh Raka",
        role: "Ketua OSIS",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        vision: "Aksi Nyata, Bukan Sekadar Janji",
        mission: "OSIS adalah wajah kedisiplinan dan prestasi.",
        tags: "Kolaborasi,Digitalisasi" 
      }
    ]
  })
  
  console.log('✅ Seeding Selesai!')
}

main()
  .then(async () => { await prisma.$disconnect() })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
