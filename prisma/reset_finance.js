const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("🧹 Mereset Data Keuangan...");
  
  // 1. Hapus semua transaksi
  await prisma.keuangan.deleteMany();
  
  // 2. Hapus semua Buku Kas
  await prisma.bukuKas.deleteMany();
  
  // 3. Reset anggaran di Program Kerja
  await prisma.programKerja.updateMany({
    data: {
      anggaran: 0,
      anggaranTerpakai: 0,
    }
  });

  // 4. Buat ulang Buku Kas Default
  await prisma.bukuKas.createMany({
    data: [
      { nama: "Kas Umum", deskripsi: "Operasional OSIS harian", icon: "Wallet", color: "blue" },
      { nama: "Dana Sosial", deskripsi: "Dana santunan dan sumbangan", icon: "Heart", color: "rose" },
      { nama: "Iuran Pengurus", deskripsi: "Uang kas wajib pengurus", icon: "Users", color: "emerald" },
    ]
  });

  console.log("✅ Data Keuangan berhasil direset! Silakan dicoba.");
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
