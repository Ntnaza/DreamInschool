const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🔄 Mengubah "Ketua Umum OSIS" menjadi "Ketua OSIS"...');
  
  // 1. Update di tabel Jabatan
  await prisma.jabatan.updateMany({
    where: { nama: 'Ketua Umum OSIS' },
    data: { nama: 'Ketua OSIS' }
  });

  // 2. Update di tabel Pengurus
  await prisma.pengurus.updateMany({
    where: { jabatan: 'Ketua Umum OSIS' },
    data: { jabatan: 'Ketua OSIS' }
  });

  console.log('✅ Perubahan nama jabatan berhasil dilakukan!');
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
