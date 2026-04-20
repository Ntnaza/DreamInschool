const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.websiteConfig.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      namaOrganisasi: 'OSIS MPK SMK NURUL ISLAM',
      deskripsi: 'Wadah aspirasi dan kreasi siswa SMK Nurul Islam Cianjur.',
      instagram: 'https://instagram.com/osis_smknuris',
      youtube: 'https://youtube.com/@smknuris',
      tiktok: 'https://tiktok.com/@smknuris',
      email: 'osis@smknuris.sch.id',
      telepon: '(0263) 1234567',
      alamat: 'Jl. Raya Cianjur - Bandung Km. 09, Bojong, Karangtengah, Cianjur, Jawa Barat.'
    }
  });
  console.log('✅ WebsiteConfig Seeder Berhasil!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
