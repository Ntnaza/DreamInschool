"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle"; 
import { logoutAction } from "@/lib/auth";
import { 
  LayoutDashboard, Inbox, Newspaper, CalendarDays, Users, 
  ChevronLeft, ChevronRight, LogOut, Rocket, Menu, Settings,
  CreditCard, QrCode, FileText, Wallet, Package, HelpCircle,
  Camera // ✅ Tambahkan icon Camera
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // STATE TOOLTIP (Untuk mode mini sidebar)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setSidebarOpen(false);
      } else {
        setIsMobile(false);
        setSidebarOpen(true);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const menuGroups = [
    {
      title: "UTAMA",
      items: [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Inbox Aspirasi", href: "/admin/aspirasi", icon: Inbox },
      ]
    },
    {
      title: "KONTEN & PROYEK",
      items: [
        { name: "Kelola Berita", href: "/admin/berita", icon: Newspaper },
        { name: "Program Kerja", href: "/admin/proker", icon: CalendarDays },
        { name: "Galeri Kegiatan", href: "/admin/galeri", icon: Camera }, // ✅ MENU BARU
      ]
    },
    {
      title: "SDM & ABSENSI",
      items: [
        { name: "Data Pengurus", href: "/admin/pengurus", icon: Users },
        { name: "ID Card Studio", href: "/admin/idcard", icon: CreditCard },
        { name: "Scan Absensi", href: "/admin/absensi", icon: QrCode },
      ]
    },
    {
      title: "ADMINISTRASI",
      items: [
        { name: "Buat Surat", href: "/admin/surat", icon: FileText },
        { name: "Kas & Anggaran", href: "/admin/kas", icon: Wallet },
        { name: "Inventaris", href: "/admin/inventaris", icon: Package },
      ]
    },
    {
      title: "SUPPORT",
      items: [
        { name: "Pusat Bantuan", href: "/admin/bantuan", icon: HelpCircle },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] flex font-sans overflow-hidden transition-colors duration-500 relative">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500">
         <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]" />
      </div>

      {/* Mobile Toggle Button */}
      {isMobile && !isSidebarOpen && (
        <button onClick={() => setSidebarOpen(true)} className="fixed top-5 left-5 z-50 p-2.5 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white active:scale-95 transition-transform">
          <Menu size={22} />
        </button>
      )}

      {/* Mobile Overlay */}
      {isMobile && isSidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity" />}

      {/* === SIDEBAR PROFESIONAL === */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? (isMobile ? "85%" : 280) : (isMobile ? 0 : 88), x: isSidebarOpen ? 0 : (isMobile ? -100 : 0) }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed md:relative z-50 h-screen bg-white dark:bg-[#0a0f1e]/95 dark:backdrop-blur-xl border-r border-slate-200 dark:border-white/5 flex flex-col ${isMobile && !isSidebarOpen ? "-translate-x-full" : "translate-x-0"}`}
      >
        {/* 1. Header */}
        <div className="h-20 flex items-center justify-center border-b border-slate-100 dark:border-white/5 relative px-4 mx-2 shrink-0">
           <div className={`flex items-center gap-3 overflow-hidden ${!isSidebarOpen && !isMobile ? "justify-center w-full" : ""}`}>
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 flex-shrink-0 text-white"><Rocket size={18} fill="currentColor" /></div>
              <AnimatePresence>
                {isSidebarOpen && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10, transition: { duration: 0.1 } }} className="whitespace-nowrap overflow-hidden">
                    <span className="font-bold text-slate-800 dark:text-white tracking-tight text-lg">ORBIT<span className="text-blue-600">ADM</span></span>
                  </motion.div>
                )}
              </AnimatePresence>
           </div>
           
           {!isMobile && (
             <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center hover:text-blue-600 dark:hover:text-white transition-colors z-50">
               {isSidebarOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
             </button>
           )}
        </div>

        {/* 2. Menu List (SCROLLBAR TIPIS) */}
        <nav className="flex-1 py-6 px-4 space-y-6 overflow-y-auto overflow-x-hidden thin-scrollbar hover:thin-scrollbar-thumb relative">
           <style jsx>{`
              .thin-scrollbar::-webkit-scrollbar { width: 4px; }
              .thin-scrollbar::-webkit-scrollbar-track { background: transparent; }
              .thin-scrollbar::-webkit-scrollbar-thumb { background: transparent; border-radius: 10px; }
              .thin-scrollbar:hover::-webkit-scrollbar-thumb { background: #cbd5e1; }
              :global(.dark) .thin-scrollbar:hover::-webkit-scrollbar-thumb { background: #334155; }
           `}</style>

           {menuGroups.map((group, groupIdx) => (
             <div key={groupIdx}>
               {isSidebarOpen && (
                 <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-3 ml-2">
                   {group.title}
                 </motion.p>
               )}
               {!isSidebarOpen && !isMobile && <div className="h-4" />}

               <div className="space-y-1.5">
                 {group.items.map((item) => {
                   const isActive = pathname === item.href;
                   const Icon = item.icon;
                   return (
                     <Link 
                        key={item.href} 
                        href={item.href} 
                        onMouseEnter={(e) => {
                           if (!isSidebarOpen) {
                              setHoveredMenu(item.name);
                              setTooltipPos(e.currentTarget.getBoundingClientRect().top);
                           }
                        }}
                        onMouseLeave={() => setHoveredMenu(null)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group relative ${!isSidebarOpen && !isMobile ? "justify-center w-11 h-11 mx-auto" : ""} ${isActive ? "bg-blue-50 dark:bg-blue-600/10 text-blue-700 dark:text-blue-400" : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"}`}
                     >
                        {isActive && isSidebarOpen && <motion.div layoutId="activeNav" className="absolute left-0 w-1 h-6 bg-blue-600 rounded-r-full" />}
                        <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className="flex-shrink-0" />
                        <AnimatePresence>
                          {isSidebarOpen && (
                            <motion.span initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -5, transition: { duration: 0.1 } }} className="text-sm font-semibold tracking-wide whitespace-nowrap">
                              {item.name}
                            </motion.span>
                          )}
                        </AnimatePresence>
                     </Link>
                   )
                 })}
               </div>
             </div>
           ))}
        </nav>

        {/* 3. Footer Sidebar */}
        <div className="p-4 border-t border-slate-100 dark:border-white/5 shrink-0">
           <div className={`flex flex-col gap-3 ${!isSidebarOpen && !isMobile ? "items-center" : ""}`}>
             <div className={`flex items-center gap-2 ${!isSidebarOpen && !isMobile ? "flex-col" : "justify-between"}`}>
                 <button className={`p-2 rounded-lg text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors ${!isSidebarOpen && !isMobile ? "w-10 h-10 flex justify-center items-center" : ""}`}>
                    <Settings size={20} />
                 </button>
                 <div className="scale-90"><ThemeToggle /></div>
             </div>
             <button 
                onClick={() => logoutAction()} 
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl bg-red-50/50 dark:bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-500/20 transition-all mt-2 cursor-pointer ${!isSidebarOpen && !isMobile ? "justify-center w-11 h-11" : "w-full"}`}
             >
                <LogOut size={18} />
                {isSidebarOpen && <span className="text-xs font-bold">Log Out</span>}
             </button>
           </div>
        </div>

        {/* === FLOATING TOOLTIP === */}
        <AnimatePresence>
           {!isSidebarOpen && !isMobile && hoveredMenu && (
              <motion.div
                 initial={{ opacity: 0, x: -10, scale: 0.95 }}
                 animate={{ opacity: 1, x: 0, scale: 1 }}
                 exit={{ opacity: 0, x: -10, scale: 0.95 }}
                 transition={{ duration: 0.15, ease: "easeOut" }}
                 style={{ top: tooltipPos + 6 }} 
                 className="fixed left-[90px] z-[9999] bg-[#0f172a] text-white text-xs font-bold px-3 py-2 rounded-lg shadow-xl border border-slate-700 pointer-events-none whitespace-nowrap flex items-center"
              >
                 <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-transparent border-r-[#0f172a]" />
                 {hoveredMenu}
              </motion.div>
           )}
        </AnimatePresence>

      </motion.aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 h-screen overflow-y-auto relative z-10 scrollbar-hide">
         <div className="p-6 md:p-10 pb-24 pt-24 md:pt-10 max-w-7xl mx-auto">
            {children}
         </div>
      </main>

    </div>
  );
}