const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Memulai proses seeding Struktur Organisasi...");

  // 1. Data Divisi & Jabatannya
  const structure = [
    {
      nama: "Inti OSIS",
      deskripsi: "Pengurus harian inti OSIS yang bertanggung jawab atas seluruh jalannya organisasi.",
      jabatans: ["Ketua OSIS", "Wakil Ketua OSIS", "Sekretaris Umum", "Bendahara Umum"]
    },
    {
      nama: "Inti MPK",
      deskripsi: "Pengurus harian inti MPK (Majelis Perwakilan Kelas) sebagai badan legislatif.",
      jabatans: ["Ketua MPK", "Wakil Ketua MPK", "Sekretaris MPK", "Bendahara MPK"]
    },
    {
      nama: "Sekbid 1",
      deskripsi: "Pembinaan ketaqwaan terhadap Tuhan Yang Maha Esa.",
      jabatans: ["Ketua Sekbid 1", "Sekretaris Sekbid 1", "Anggota Sekbid 1"]
    },
    {
      nama: "Sekbid 2",
      deskripsi: "Pembinaan budi pekerti luhur atau akhlak mulia.",
      jabatans: ["Ketua Sekbid 2", "Sekretaris Sekbid 2", "Anggota Sekbid 2"]
    },
    {
      nama: "Sekbid 3",
      deskripsi: "Pembinaan kepribadian unggul, wawasan kebangsaan, dan bela negara.",
      jabatans: ["Ketua Sekbid 3", "Sekretaris Sekbid 3", "Anggota Sekbid 3"]
    },
    {
      nama: "Sekbid 4",
      deskripsi: "Pembinaan prestasi akademik, seni, dan/atau olahraga sesuai bakat dan minat.",
      jabatans: ["Ketua Sekbid 4", "Sekretaris Sekbid 4", "Anggota Sekbid 4"]
    },
    {
      nama: "Sekbid 5",
      deskripsi: "Pembinaan demokrasi, hak asasi manusia, pendidikan politik, lingkungan hidup, kepekaan dan toleransi sosial dalam konteks masyarakat plural.",
      jabatans: ["Ketua Sekbid 5", "Sekretaris Sekbid 5", "Anggota Sekbid 5"]
    },
    {
      nama: "Sekbid 6",
      deskripsi: "Pembinaan kreativitas, keterampilan dan kewirausahaan.",
      jabatans: ["Ketua Sekbid 6", "Sekretaris Sekbid 6", "Anggota Sekbid 6"]
    },
    {
      nama: "Komisi MPK",
      deskripsi: "Komisi-komisi di dalam MPK untuk pengawasan.",
      jabatans: ["Ketua Komisi A", "Anggota Komisi A", "Ketua Komisi B", "Anggota Komisi B"]
    }
  ];

  // 2. Eksekusi Masuk ke DB
  for (const item of structure) {
    const divisi = await prisma.divisi.upsert({
      where: { nama: item.nama },
      update: {}, // Jangan ubah jika sudah ada
      create: {
        nama: item.nama,
        deskripsi: item.deskripsi,
      },
    });

    console.log(`🏢 Divisi dibuat: ${divisi.nama}`);

    for (const jabName of item.jabatans) {
      await prisma.jabatan.upsert({
        where: {
          nama_divisiId: {
            nama: jabName,
            divisiId: divisi.id,
          },
        },
        update: {},
        create: {
          nama: jabName,
          divisiId: divisi.id,
        },
      });
    }
    console.log(`   ✅ ${item.jabatans.length} jabatan ditambahkan ke ${divisi.nama}`);
  }

  console.log("✅ Seeding Struktur Selesai!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
