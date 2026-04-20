const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Memperbaiki data login agar username unik...');
  
  const allUsers = await prisma.user.findMany({
    include: { pengurus: true }
  });

  for (const user of allUsers) {
    if (user.pengurus) {
      // Buat username unik dari nama dan NIS (misal: zaki.arkan.12345)
      const newUsername = user.pengurus.nama.toLowerCase().split(' ')[0] + '.' + user.pengurus.nis.toLowerCase();
      
      try {
        await prisma.user.update({
          where: { id: user.id },
          data: { username: newUsername }
        });
        console.log(`✅ Update: ${user.username} -> ${newUsername}`);
      } catch (e) {
        console.log(`⚠️ Skip: ${newUsername} mungkin sudah ada.`);
      }
    }
  }

  // Khusus Super Admin, kita sisakan satu akun 'admin' yang asli
  const superAdmin = await prisma.user.findFirst({ where: { role: 'ADMIN' } });
  if (superAdmin) {
    await prisma.user.update({
      where: { id: superAdmin.id },
      data: { username: 'admin' }
    });
    console.log('👑 Akun master superadmin diatur ke: admin');
  }

  console.log('✅ Pembersihan selesai!');
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
