import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

// DATA DUMMY
const DUMMY_NEWS = [
  {
    id: 991,
    judul: "Kunjungan Industri ke Jakarta Smart City",
    slug: "#",
    kategori: "Kunjungan",
    createdAt: new Date(),
    gambar: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    konten: "Siswa SMK Nurul Islam belajar langsung tentang teknologi kota cerdas."
  },
  {
    id: 992,
    judul: "Juara 1 Lomba Video Kreatif Tingkat Provinsi",
    slug: "#",
    kategori: "Prestasi",
    createdAt: new Date(),
    gambar: "https://images.unsplash.com/photo-1574711388569-424a52c3886e?q=80&w=800&auto=format&fit=crop",
    konten: "Karya siswa multimedia berhasil memukau juri dengan konsep inovatif."
  },
  {
    id: 993,
    judul: "Pelantikan Pengurus OSIS & MPK Periode Baru",
    slug: "#",
    kategori: "Organisasi",
    createdAt: new Date(),
    gambar: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop",
    konten: "Serah terima jabatan berlangsung khidmat disaksikan seluruh warga sekolah."
  }
];

const FALLBACK_IMG = "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80";

async function getNews() {
  try {
    const data = await prisma.berita.findMany({
      take: 3,
      orderBy: { createdAt: 'desc' },
      where: { status: "PUBLISHED" } 
    });
    
    if (!data || data.length === 0) return null;
    return data;
  } catch (error) {
    return null;
  }
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

export default async function NewsSection() {
  const dbNews = await getNews();
  let news: any[] = dbNews || [];
  
  if (news.length < 3) {
      news = [...news, ...DUMMY_NEWS.slice(0, 3 - news.length)];
  }

  const [mainNews, secondNews, thirdNews] = news;

  return (
    <section className="relative w-full py-24 z-10 overflow-hidden bg-slate-50 dark:bg-[#0b1121] transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
              <h4 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest text-sm uppercase">
               Update Terbaru
              </h4>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
               Berita & <span className="text-blue-600">Artikel</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
               Informasi terkini mengenai prestasi, kegiatan akademik, dan pengumuman sekolah.
              </p>
          </div>
          <Link 
            href="/berita" 
            className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 font-bold hover:bg-white hover:text-slate-900 hover:shadow-md transition-all text-sm text-slate-600 dark:text-slate-300"
          >
            Lihat Semua Berita →
          </Link>
        </div>

        {/* LAYOUT BERITA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[500px]">
          
          {/* BERITA UTAMA (KIRI) */}
          <div className="relative group rounded-3xl overflow-hidden bg-white dark:bg-slate-900 shadow-xl h-[400px] lg:h-full cursor-pointer">
            <Image 
                src={mainNews.gambar || FALLBACK_IMG} 
                alt={mainNews.judul} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
               <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase rounded-full mb-3 inline-block shadow-lg shadow-blue-600/40">
                 {mainNews.kategori}
               </span>
               
               {/* 🔥🔥🔥 PERBAIKAN DI SINI: Pake .id bukan .slug 🔥🔥🔥 */}
               <Link href={`/berita/${mainNews.id}`}>
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 hover:underline decoration-blue-500 underline-offset-4 decoration-2 leading-tight">
                   {mainNews.judul}
                 </h3>
               </Link>
               
               <p className="text-slate-300 text-sm line-clamp-2 max-w-lg">
                 {mainNews.konten}
               </p>
            </div>
          </div>

          {/* LIST BERITA (KANAN) */}
          <div className="flex flex-col gap-6 h-full">
            {[secondNews, thirdNews].map((item, idx) => (
               <div key={idx} className="flex-1 flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-slate-500 transition-all group">
                  <div className="relative w-1/3 min-w-[120px] rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-700">
                     <Image 
                        src={item.gambar || FALLBACK_IMG} 
                        alt={item.judul} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                     />
                  </div>
                  <div className="w-2/3 flex flex-col justify-center space-y-1">
                     <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">
                        <span className="text-blue-600 dark:text-blue-400">{item.kategori}</span> 
                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                        <span>{formatDate(item.createdAt)}</span>
                     </div>
                     
                     {/* 🔥🔥🔥 PERBAIKAN DI SINI JUGA: Pake .id 🔥🔥🔥 */}
                     <Link href={`/berita/${item.id}`}>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                          {item.judul}
                        </h3>
                     </Link>
                     
                  </div>
               </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}