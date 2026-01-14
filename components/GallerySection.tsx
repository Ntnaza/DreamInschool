import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

// 1. Definisikan Data Dummy (Cadangan kalau DB Kosong)
const DUMMY_NEWS = [
  {
    id: 991,
    judul: "Kunjungan Industri ke Jakarta Smart City",
    slug: "#",
    kategori: "Kunjungan",
    createdAt: new Date(),
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    konten: "Data belum di-seed. Ini adalah tampilan dummy sementara agar layout tidak kosong."
  },
  {
    id: 992,
    judul: "Juara 1 Lomba Video Kreatif",
    slug: "#",
    kategori: "Prestasi",
    createdAt: new Date(),
    thumbnail: "https://images.unsplash.com/photo-1574711388569-424a52c3886e?q=80&w=800&auto=format&fit=crop",
    konten: "Silakan jalankan 'npx prisma db seed' untuk mengisi data asli."
  },
  {
    id: 993,
    judul: "Pelantikan OSIS & MPK",
    slug: "#",
    kategori: "Organisasi",
    createdAt: new Date(),
    thumbnail: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop",
    konten: "Serah terima jabatan berlangsung khidmat disaksikan seluruh warga sekolah."
  }
];

async function getNews() {
  try {
    const data = await prisma.berita.findMany({
      take: 3,
      orderBy: { createdAt: 'desc' },
    });
    // Kalau data kosong, return null biar diganti dummy nanti
    if (!data || data.length === 0) return null;
    return data;
  } catch (error) {
    console.error("Gagal ambil berita:", error);
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

export default async function GallerySection() {
  // Cek DB dulu, kalau kosong pakai DUMMY_NEWS
  const dbNews = await getNews();
  const news = (dbNews && dbNews.length >= 3) ? dbNews : DUMMY_NEWS;

  // Pecah data ke variabel biar gampang
  const [mainNews, secondNews, thirdNews] = news;

  return (
    <section className="relative w-full py-24 z-10 overflow-hidden bg-slate-50 dark:bg-[#0b1121] transition-colors duration-500">
      
      {/* Dekorasi Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 dark:bg-slate-800/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/40 dark:bg-slate-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
              <h4 className="text-blue-600 dark:text-slate-400 font-bold tracking-widest text-sm uppercase">
               Kabar Sekolah
              </h4>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
               Galeri & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-slate-200 dark:via-slate-400 dark:to-slate-500">Berita Terkini</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
               Ikuti jejak langkah dan pencapaian terbaru dari warga SMK Nurul Islam Cianjur.
              </p>
          </div>

          <Link 
            href="/berita" 
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-slate-400 hover:text-blue-600 dark:hover:text-white transition-all shadow-sm"
          >
            Lihat Semua Galeri
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* GRID KONTEN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[500px]">
          
          {/* KIRI: BERITA UTAMA */}
          <div className="relative group rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-none h-[400px] lg:h-full">
            <Image 
              src={mainNews.thumbnail || "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80"} 
              alt={mainNews.judul}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent dark:from-black/90 dark:via-black/40" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
               <div className="flex items-center gap-3 mb-3">
                 <span className="px-3 py-1 bg-blue-600 dark:bg-white dark:text-black text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                   {mainNews.kategori}
                 </span>
                 <span className="text-slate-300 dark:text-slate-400 text-xs font-medium flex items-center gap-1">
                   📅 {formatDate(mainNews.createdAt)}
                 </span>
               </div>
               <Link href={`/berita/${mainNews.slug}`}>
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight group-hover:underline decoration-blue-500 underline-offset-4 decoration-2">
                   {mainNews.judul}
                 </h3>
               </Link>
               <p className="text-slate-300 dark:text-slate-400 text-sm line-clamp-2 max-w-lg">
                 {mainNews.konten}
               </p>
            </div>
          </div>

          {/* KANAN: LIST KECIL */}
          <div className="flex flex-col gap-6 h-full">
            
            {/* ITEM 2 */}
            <div className="flex-1 flex flex-row gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-slate-500 transition-colors group">
               <div className="relative w-1/3 h-full min-h-[120px] rounded-xl overflow-hidden">
                  <Image 
                    src={secondNews.thumbnail || "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80"} 
                    alt={secondNews.judul}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
               </div>
               <div className="w-2/3 flex flex-col justify-center space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                       {secondNews.kategori}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span className="text-slate-400 text-[10px]">{formatDate(secondNews.createdAt)}</span>
                  </div>
                  <Link href={`/berita/${secondNews.slug}`}>
                     <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-blue-600 dark:group-hover:text-white transition-colors line-clamp-2">
                        {secondNews.judul}
                     </h3>
                  </Link>
                  <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2">
                    {secondNews.konten}
                  </p>
               </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex-1 flex flex-row gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-slate-500 transition-colors group">
               <div className="relative w-1/3 h-full min-h-[120px] rounded-xl overflow-hidden">
                  <Image 
                    src={thirdNews.thumbnail || "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80"} 
                    alt={thirdNews.judul}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
               </div>
               <div className="w-2/3 flex flex-col justify-center space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-wider">
                       {thirdNews.kategori}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span className="text-slate-400 text-[10px]">{formatDate(thirdNews.createdAt)}</span>
                  </div>
                  <Link href={`/berita/${thirdNews.slug}`}>
                     <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-blue-600 dark:group-hover:text-white transition-colors line-clamp-2">
                        {thirdNews.judul}
                     </h3>
                  </Link>
                  <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2">
                    {thirdNews.konten}
                  </p>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}