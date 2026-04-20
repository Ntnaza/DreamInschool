import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const prokers = await prisma.programKerja.findMany({
    select: { id: true, nama: true, periodeId: true, isFeatured: true }
  });
  console.log(JSON.stringify(prokers, null, 2));
}
main();
