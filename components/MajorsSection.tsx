import { prisma } from "@/lib/prisma";
import MajorsClient from "./MajorsClient";

// KONFIGURASI JURUSAN
// Note: MysteriousColor wajib warna TERANG/NEON agar efek Aurora Three.js menyala di background hitam.
const MAJORS_CONFIG = [
  {
    id: "pplg",
    code: "PPLG", 
    title: "PPLG",
    fullName: "Pengembangan Perangkat Lunak & Gim",
    roleName: "Cyber Architects",
    description: "Penguasa kode dan logika. Kami membangun realitas digital sekolah, dari website hingga sistem pemungutan suara masa depan.",
    logo: "/logos/PPLG.png",
    icon: "💻",
    // Gunakan Cyan/Electric Blue biar Auroranya MENYALA (Jangan pakai Navy gelap)
    MysteriousColor: "#00c3ff" 
  },
  {
    id: "tjkt",
    code: "TJKT",
    title: "TJKT",
    fullName: "Teknik Jaringan Komputer & Telekomunikasi",
    roleName: "The Netrunners",
    description: "Penjaga gerbang konektivitas. Kami memastikan arus data mengalir tanpa henti dan infrastruktur jaringan tetap absolut.",
    logo: "/logos/TJKT.png",
    icon: "📡",
    // Merah Neon / Orange Fire
    MysteriousColor: "#ff3c00" 
  },
  {
    id: "dkv",
    code: "DKV",
    title: "DKV",
    fullName: "Desain Komunikasi Visual",
    roleName: "Visual Alchemists",
    description: "Memanipulasi persepsi melalui visual. Kami mengubah ide abstrak menjadi karya seni digital yang menghipnotis.",
    logo: "/logos/DKV.png",
    icon: "🎨",
    // Putih Terang (Untuk efek Monokrom/Silver di background hitam)
    MysteriousColor: "#ffffff" 
  },
  {
    id: "mplb",
    code: "MPLB", 
    title: "MPLB",
    fullName: "Manajemen Perkantoran",
    roleName: "Shadow Administrators",
    description: "Beroperasi di balik layar dengan presisi tinggi. Kami mengendalikan ketertiban organisasi dan arus informasi rahasia.",
    logo: "/logos/MPLB.png",
    icon: "📁", 
    // Kuning Emas / Amber Neon
    MysteriousColor: "#ffbf00" 
  },
  {
    id: "akl",
    code: "AKL",
    title: "AKL",
    fullName: "Akuntansi & Keuangan Lembaga",
    roleName: "The Vault Keepers",
    description: "Penjaga brankas dan angka. Kami memastikan setiap koin diperhitungkan dengan akurasi yang mematikan.",
    logo: "/logos/AKL.png",
    icon: "📊",
    // Ungu Neon Terang
    MysteriousColor: "#d946ef" 
  },
  {
    id: "to",
    code: "TO", 
    title: "TO",
    fullName: "Teknik Otomotif",
    roleName: "Steel Titans",
    description: "Kekuatan mekanik murni. Kami adalah mesin penggerak yang siap diterjunkan ke medan lapangan kapanpun dibutuhkan.",
    logo: "/logos/TO.png",
    icon: "⚙️",
    // Biru Langit Terang (Cool White/Blue)
    MysteriousColor: "#38bdf8" 
  }
];

// FUNGSI SERVER: Hitung Jumlah Siswa
async function getMajorsStats() {
  const stats = await Promise.all(
    MAJORS_CONFIG.map(async (major) => {
      // Hitung jumlah pengurus berdasarkan keyword kelas (Misal: cari yang mengandung 'PPLG')
      const count = await prisma.pengurus.count({
        where: {
          kelas: { contains: major.code }
        }
      });
      return { ...major, count };
    })
  );
  return stats;
}

// KOMPONEN UTAMA (SERVER COMPONENT)
export default async function MajorsSection() {
  // 1. Ambil data dari Database
  const majorsData = await getMajorsStats();

  // 2. Kirim data ke Client Component (yang ada animasinya)
  return <MajorsClient majors={majorsData} />;
}