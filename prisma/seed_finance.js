const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.bukuKas.createMany({
    data: [
      { nama: "Kas Umum", deskripsi: "Operasional OSIS harian", icon: "Wallet", color: "blue" },
      { nama: "Dana Sosial", deskripsi: "Dana santunan dan sumbangan", icon: "Heart", color: "rose" },
      { nama: "Iuran Pengurus", deskripsi: "Uang kas wajib pengurus", icon: "Users", color: "emerald" },
    ]
  });
  console.log("Default Buku Kas created! 💰");
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
