"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle"; 

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === LOGIKA BARU: SEMBUNYIKAN DI LOGIN & ADMIN ===
  if (pathname === "/login" || pathname?.startsWith("/admin")) {
    return null;
  }

  // 🔥 LOGIKA KHUSUS HALAMAN PENGURUS (GHOST MODE) 🔥
  const isSpecialPage = pathname === "/pengurus";

  const menus = [
    { name: "Beranda", href: "/" },
    { name: "Program Kerja", href: "/program" },
    { name: "Struktur Organisasi", href: "/pengurus" },
    { name: "Berita", href: "/berita" },
    { name: "Galeri Kegiatan", href: "/galeri" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          // 🔥 JIKA di halaman Pengurus -> PAKSA TRANSPARAN (py-6)
          // 🔥 JIKA BUKAN -> Cek Scroll seperti biasa
          isSpecialPage
            ? "bg-transparent py-6"
            : isScrolled 
              ? "bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md shadow-sm py-4" 
              : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-end">
          
          <nav className="hidden md:flex items-center gap-8">
            {menus.map((item) => {
              const isActive = pathname === item.href;
              
              // Tentukan warna teks
              // Jika Special Page: Teks Putih (Aktif) atau Putih Transparan (Non-Aktif)
              // Jika Normal Page: Warna Slate/Blue seperti biasa
              const textColorClass = isSpecialPage
                ? (isActive ? "text-white" : "text-white/70 hover:text-white")
                : (isActive ? "text-blue-600 dark:text-white" : "text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-white");

              // Tentukan warna garis bawah
              const underlineColorClass = isSpecialPage
                ? "bg-white"
                : "bg-blue-600 dark:bg-white";

              return (
                <Link key={item.href} href={item.href} className="relative group py-1">
                  <span className={`text-sm font-bold tracking-wide transition-colors duration-300 ${textColorClass}`}>
                    {item.name}
                  </span>
                  <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${underlineColorClass} ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
            
            {/* Divider */}
            <div className={`w-[1px] h-6 mx-2 ${isSpecialPage ? "bg-white/30" : "bg-slate-300 dark:bg-slate-700"}`} />
            
            <ThemeToggle />
            
            <Link href="/login" className="px-5 py-2 text-xs font-bold text-white bg-blue-600 dark:bg-white dark:text-black rounded-full hover:bg-blue-700 dark:hover:bg-slate-200 transition-all shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-white/20">
              LOGIN
            </Link>
          </nav>

          {/* MOBILE MENU TOGGLE */}
          <div className="md:hidden flex items-center gap-4">
             <ThemeToggle />
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none">
                {/* Paksa garis jadi putih jika di halaman special page */}
                <span className={`block w-8 h-[2px] rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2 bg-white" : (isSpecialPage ? "bg-white" : "bg-slate-900 dark:bg-white")}`} />
                <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : (isSpecialPage ? "bg-white" : "bg-slate-900 dark:bg-white")}`} />
                <span className={`block w-8 h-[2px] rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2 bg-white" : (isSpecialPage ? "bg-white" : "bg-slate-900 dark:bg-white")}`} />
             </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div className={`fixed inset-0 z-40 bg-slate-900/95 dark:bg-[#020617]/95 backdrop-blur-xl transition-all duration-500 md:hidden flex items-center justify-center ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <nav className="flex flex-col items-center gap-8">
          {menus.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
              {item.name}
            </Link>
          ))}
          <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-8 py-3 text-sm font-bold text-black bg-white rounded-full hover:scale-105 transition-transform">
            LOGIN STAFF
          </Link>
        </nav>
      </div>
    </>
  );
}