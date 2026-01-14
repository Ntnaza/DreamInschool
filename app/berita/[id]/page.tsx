"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation"; 
// PERBAIKAN DI SINI: Tambah useScroll
import { motion, useScroll } from "framer-motion"; 

// === DATA DUMMY (SAMA KAYAK HALAMAN DEPAN) ===
const allPosts = [
  {
    id: 1,
    title: "SMK Nurul Islam Juara Umum Lomba Robotic Nasional 2024",
    excerpt: "Tim Robotik sekolah kembali mengharumkan nama almamater dengan menyapu bersih piala kategori Sumo Bot dan Line Follower di Jakarta.",
    date: "10 Jan 2025",
    author: "Tim Jurnalis",
    category: "Prestasi",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    content: `
      <p>Prestasi membanggakan kembali ditorehkan oleh siswa-siswi SMK Nurul Islam. Dalam ajang National Robotic Championship 2024 yang diselenggarakan di Jakarta Convention Center, Tim Robotik sekolah berhasil menyabet gelar Juara Umum.</p>
      <p>Persaingan sangat ketat, melibatkan lebih dari 50 sekolah dari seluruh Indonesia. Namun, berkat ketekunan dan inovasi dalam pemrograman sensor, robot "Garuda-X" karya siswa kelas 11 RPL berhasil mengalahkan lawan-lawannya di kategori Sumo Bot.</p>
      <h3>Persiapan yang Matang</h3>
      <p>Pembina Ekstrakurikuler Robotik, Bapak Hartono, mengatakan bahwa persiapan telah dilakukan selama 3 bulan. "Anak-anak lembur setiap pulang sekolah untuk tuning sensor dan motor. Usaha tidak mengkhianati hasil," ujarnya.</p>
      <p>Kepala Sekolah SMK Nurul Islam turut memberikan apresiasi tinggi dan beasiswa pendidikan bagi para pemenang.</p>
    `
  },
  {
    id: 2,
    title: "Peringatan Maulid Nabi: Meneladani Akhlak Rasulullah",
    excerpt: "Kegiatan keagamaan yang dihadiri oleh penceramah kondang, mengajak siswa untuk meneladani sifat-sifat mulia Nabi Muhammad SAW.",
    date: "25 Des 2024",
    author: "Sekbid 1",
    category: "Religi",
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=800&auto=format&fit=crop",
    content: "<p>Konten artikel religi di sini...</p>"
  },
  {
    id: 3,
    title: "Tips Menghadapi Ujian Semester Tanpa Stres",
    excerpt: "Simak tips jitu dari kakak kelas tentang cara mengatur waktu belajar dan menjaga kesehatan mental saat pekan ujian.",
    date: "15 Des 2024",
    author: "Opini Siswa",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    content: "<p>Konten artikel tips di sini...</p>"
  },
  {
    id: 4,
    title: "Pemilihan Ketua OSIS Periode 2025/2026 Berlangsung Sengit",
    excerpt: "Debat kandidat berlangsung panas namun suportif. Siapakah yang akan memimpin OSIS tahun depan?",
    date: "20 Nov 2024",
    author: "MPK",
    category: "Berita",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop",
    content: "<p>Konten artikel pemilos di sini...</p>"
  },
  {
    id: 5,
    title: "Ekskul Fotografi Gelar Pameran Karya 'Lensa Sekolah'",
    excerpt: "Melihat sudut-sudut sekolah yang tak terduga melalui lensa kamera para siswa berbakat.",
    date: "10 Nov 2024",
    author: "Ekskul Multimedia",
    category: "Seni",
    image: "https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=800&auto=format&fit=crop",
    content: "<p>Konten artikel pameran di sini...</p>"
  },
  {
    id: 6,
    title: "Kunjungan Industri ke Google Indonesia",
    excerpt: "Siswa jurusan RPL diajak melihat langsung budaya kerja di perusahaan teknologi raksasa.",
    date: "05 Okt 2024",
    author: "Humas",
    category: "Kunjungan",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    content: "<p>Konten artikel kunjungan di sini...</p>"
  },
];

export default function DetailBeritaPage() {
  const params = useParams(); 
  const { id } = params;

  // PANGGIL HOOK USESCROLL DI SINI
  const { scrollYProgress } = useScroll();

  const post = allPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#020617]">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">404</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">Berita tidak ditemukan.</p>
        <Link href="/berita" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          Kembali ke Berita
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#020617] transition-colors duration-500 pt-24 pb-24">
      
      {/* Scroll Progress Bar (Indikator Baca) */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }} // Pake variabel yang udah dideclare
      />

      <article className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* Breadcrumb */}
        <Link 
          href="/berita" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 mb-8 transition-colors"
        >
          ← Kembali ke Berita
        </Link>

        {/* HEADER ARTIKEL */}
        <div className="mb-10 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
             <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider rounded-full">
               {post.category}
             </span>
             <span className="text-slate-400 text-sm font-medium">
               {post.date}
             </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-3">
             <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-lg">
                ✍️
             </div>
             <div className="text-left">
                <p className="text-sm font-bold text-slate-900 dark:text-white">{post.author}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Penulis / Kontributor</p>
             </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12">
           <Image 
             src={post.image} 
             alt={post.title} 
             fill 
             className="object-cover"
             priority
           />
        </div>

        {/* CONTENT BODY */}
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed">
           <div dangerouslySetInnerHTML={{ __html: post.content || "<p>Isi artikel belum tersedia secara lengkap.</p>" }} />
           
           <p className="mt-6">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </p>
           <p className="mt-4">
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </p>
           <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Kesimpulan</h3>
           <p>
             Semoga prestasi ini menjadi pemicu semangat bagi siswa-siswi jurusan lain untuk terus berkarya dan berinovasi. Maju terus SMK Nurul Islam!
           </p>
        </div>

        {/* SHARE / TAGS */}
        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex gap-2">
              <span className="text-sm font-bold text-slate-500">Tags:</span>
              <span className="text-sm text-blue-600 cursor-pointer hover:underline">#Prestasi</span>
              <span className="text-sm text-blue-600 cursor-pointer hover:underline">#Robotik</span>
              <span className="text-sm text-blue-600 cursor-pointer hover:underline">#SMKBisa</span>
           </div>
           
           <div className="flex gap-4">
              <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors">
                 Share Facebook
              </button>
              <button className="px-4 py-2 rounded-full bg-sky-500 text-white text-sm font-bold hover:bg-sky-600 transition-colors">
                 Share Twitter
              </button>
           </div>
        </div>

      </article>
    </main>
  );
}