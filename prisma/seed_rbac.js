const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('password123', 10);

  const roles = [
    { username: 'admin', role: 'ADMIN', nama: 'Super Admin', jabatan: 'Ketua Umum', divisi: 'Inti' },
    { username: 'sekretaris', role: 'PENGURUS', nama: 'Sultan Sekretaris', jabatan: 'Sekretaris 1', divisi: 'Inti' },
    { username: 'bendahara', role: 'PENGURUS', nama: 'Ahmad Bendahara', jabatan: 'Bendahara 1', divisi: 'Inti' },
    { username: 'divisi', role: 'PENGURUS', nama: 'Malik Kadiv', jabatan: 'Ketua Divisi', divisi: 'Kesenian' },
  ];

  for (const r of roles) {
    const pengurus = await prisma.pengurus.upsert({
      where: { nis: r.username + '_nis' },
      update: {},
      create: {
        nama: r.nama,
        nis: r.username + '_nis',
        kelas: 'XII',
        jabatan: r.jabatan,
        divisi: r.divisi,
        status: 'AKTIF'
      }
    });

    await prisma.user.upsert({
      where: { username: r.username },
      update: { password: password },
      create: {
        username: r.username,
        password: password,
        role: r.role,
        pengurusId: pengurus.id
      }
    });
  }

  console.log('✅ Akun uji coba RBAC berhasil dibuat!');
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
