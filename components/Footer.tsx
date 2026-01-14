"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-500 overflow-hidden">
      
      {/* Dekorasi Gradient Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      {/* Dekorasi Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -bottom-[50%] -left-[20%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-[50%] -right-[20%] w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* KOLOM 1: IDENTITAS SEKOLAH */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-blue-600">OSIS</span> MPK
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Wadah aspirasi dan kreasi siswa SMK Nurul Islam Cianjur. Membangun karakter kepemimpinan yang berakhlak mulia dan berdaya saing global.
            </p>
            <div className="flex items-center gap-4 pt-2">
               <Link 
                 href="https://instagram.com/osis_smknuris" 
                 target="_blank"
                 className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white dark:hover:text-white transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                 </svg>
               </Link>

               {/* 2. YOUTUBE */}
               <Link 
                 href="https://youtube.com/@smknuris" 
                 target="_blank"
                 className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-red-600 hover:text-white dark:hover:text-white transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                   <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                 </svg>
               </Link>

               {/* 3. TIKTOK */}
               <Link 
                 href="https://tiktok.com/@smknuris" 
                 target="_blank"
                 className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                 </svg>
               </Link>  
            </div>
          </div>

          {/* KOLOM 2: NAVIGASI */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">Menu Utama</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/program" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Program Kerja</Link></li>
              <li><Link href="/pengurus" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Struktur Organisasi</Link></li>
              <li><Link href="/galeri" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Galeri Kegiatan</Link></li>
              <li><Link href="/berita" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Berita Terkini</Link></li>
            </ul>
          </div>

          {/* KOLOM 3: KONSENTRASI KEAHLIAN */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">Jurusan</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><span className="hover:text-blue-600 cursor-default transition-colors">PPLG (RPL)</span></li>
              <li><span className="hover:text-blue-600 cursor-default transition-colors">TJKT (TKJ)</span></li>
              <li><span className="hover:text-blue-600 cursor-default transition-colors">DKV (Multimedia)</span></li>
              <li><span className="hover:text-blue-600 cursor-default transition-colors">MPLB (OTKP)</span></li>
              <li><span className="hover:text-blue-600 cursor-default transition-colors">AKL (Akuntansi)</span></li>
              <li><span className="hover:text-blue-600 cursor-default transition-colors">TO (Otomotif)</span></li>
            </ul>
          </div>

          {/* KOLOM 4: KONTAK */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <span>Jl. Raya Cianjur - Bandung Km. 09, Bojong, Karangtengah, Cianjur, Jawa Barat.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📧</span>
                <span>osis@smknuris.sch.id</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <span>(0263) 1234567</span>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT BOTTOM */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-xs text-slate-500 dark:text-slate-500 text-center md:text-left">
             &copy; {currentYear} <strong className="text-slate-700 dark:text-slate-300">OSIS & MPK SMK Nurul Islam</strong>. All rights reserved.
           </p>
           <p className="text-xs text-slate-400 dark:text-slate-600 flex items-center gap-1">
             Made with ❤️ by <span className="text-blue-500 font-bold">Sultan Malik Ahmad</span>
           </p>
        </div>

      </div>
    </footer>
  );
}