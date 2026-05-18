"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Instagram, Youtube, Mail, Phone, MapPin, Loader2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [config, setConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/config")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setConfig(data);
      })
      .finally(() => setLoading(false));
  }, []);

  // Default values if config is not loaded yet
  const data = config || {
    namaOrganisasi: "OSIS MPK",
    deskripsi: "Wadah aspirasi dan kreasi siswa. Membangun karakter kepemimpinan yang berakhlak mulia dan berdaya saing global.",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    tiktok: "https://tiktok.com/",
    email: "admin@school.sch.id",
    telepon: "0263123456",
    alamat: "Jl. Raya Cianjur - Bandung"
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* KOLOM 1: IDENTITAS */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-blue-600 uppercase">{data.namaOrganisasi.split(' ')[0]}</span> {data.namaOrganisasi.split(' ').slice(1).join(' ')}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-bold">
              {data.deskripsi}
            </p>
            <div className="flex items-center gap-4 pt-2">
               {/* INSTAGRAM */}
               <Link 
                 href={data.instagram} 
                 target="_blank"
                 className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white dark:hover:text-white transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1"
               >
                 <Instagram size={20} />
               </Link>

               {/* YOUTUBE */}
               <Link 
                 href={data.youtube} 
                 target="_blank"
                 className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-red-600 hover:text-white dark:hover:text-white transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1"
               >
                 <Youtube size={20} />
               </Link>

               {/* TIKTOK */}
               <Link 
                 href={data.tiktok} 
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

          {/* KOLOM 3: KONTAK */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 shrink-0" size={18} />
                <span className="font-medium">{data.alamat}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <span className="font-medium">{data.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 shrink-0" size={18} />
                <span className="font-medium">{data.telepon}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT BOTTOM */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-xs text-slate-500 dark:text-slate-500 text-center md:text-left">
             &copy; {currentYear} <strong className="text-slate-700 dark:text-slate-300">{data.namaOrganisasi}</strong>. All rights reserved.
           </p>
           <p className="text-xs text-slate-400 dark:text-slate-600 flex items-center gap-1">
             Made with ❤️ by <span className="text-blue-500 font-bold">Sultan Malik Ahmad</span>
           </p>
        </div>

      </div>
    </footer>
  );
}
