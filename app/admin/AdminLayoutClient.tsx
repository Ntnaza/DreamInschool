"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle"; 
import { logoutAction } from "@/lib/auth";
import ToastContainer from "@/components/Toast";
import ConfirmDialog from "@/components/ConfirmDialog";
import { 
  LayoutDashboard, Inbox, Newspaper, CalendarDays, Users, 
  ChevronLeft, ChevronRight, LogOut, Rocket, Menu, Settings,
  CreditCard, QrCode, FileText, Wallet, Package, HelpCircle,
  Camera, BarChart3
} from "lucide-react";

export default function AdminLayout({ 
  children,
  initialSidebarOpen = true 
}: { 
  children: React.ReactNode,
  initialSidebarOpen?: boolean
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(initialSidebarOpen);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState(0);

  // Fungsi untuk toggle sidebar dengan persistensi Cookie
  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setSidebarOpen(newState);
    if (!isMobile) {
      // Simpan ke cookie (tahan 30 hari)
      document.cookie = `sidebarOpen=${newState}; path=/; max-age=${60 * 60 * 24 * 30}`;
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      
      if (isMobileView) {
        setSidebarOpen(false);
      } else {
        // Pada mount pertama di desktop, pastikan kita sinkron dengan cookie
        // (Meskipun sudah dikirim dari server, ini untuk keamanan extra)
        const cookies = document.cookie.split(';');
        const sbCookie = cookies.find(c => c.trim().startsWith('sidebarOpen='));
        if (sbCookie) {
          const val = sbCookie.split('=')[1] === 'true';
          setSidebarOpen(val);
        }
      }
      
      setIsMounted(true);
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
        { name: "Galeri Kegiatan", href: "/admin/galeri", icon: Camera },
      ]
    },
    {
      title: "SDM & ABSENSI",
      items: [
        { name: "Data Pengurus", href: "/admin/pengurus", icon: Users },
        { name: "ID Card Studio", href: "/admin/idcard", icon: CreditCard },
        { name: "Scan Absensi", href: "/admin/absensi", icon: QrCode },
        { name: "Laporan Absensi", href: "/admin/absensi/laporan", icon: BarChart3 },
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
    <div className={`h-screen bg-[#F8FAFC] dark:bg-[#020617] flex font-sans overflow-hidden transition-colors duration-500 relative ${!isMounted ? "sidebar-no-transition hide-scrollbar-init" : ""}`}>
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500">
         <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]" />
      </div>

      {isMobile && !isSidebarOpen && (
        <button onClick={() => setSidebarOpen(true)} className="fixed top-5 left-5 z-50 p-2.5 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white active:scale-95 transition-transform">
          <Menu size={22} />
        </button>
      )}

      {isMobile && isSidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity" />}

      {/* === SIDEBAR FIXED === */}
      <motion.aside 
        animate={{ 
          width: isSidebarOpen ? (isMobile ? "85%" : 240) : (isMobile ? 0 : 80), 
          x: isSidebarOpen ? 0 : (isMobile ? -100 : 0),
        }}
        initial={isMounted ? false : { 
          width: initialSidebarOpen ? 240 : 80,
          x: initialSidebarOpen ? 0 : 0
        }}
        transition={isMounted ? { type: "spring", stiffness: 300, damping: 30 } : { duration: 0 }}
        className="fixed md:relative z-50 h-screen bg-white dark:bg-[#0a0f1e]/95 dark:backdrop-blur-xl border-r border-slate-200 dark:border-white/5 flex flex-col"
      >
        {/* Toggle Button (Outside sidebar bounds) */}
        {!isMobile && (
          <button onClick={toggleSidebar} className="absolute -right-3 top-10 w-6 h-6 bg-white dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center hover:text-blue-600 dark:hover:text-white transition-colors z-[60]">
            {isSidebarOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
          </button>
        )}

        {/* 1. Header */}
        <div className="h-20 flex items-center relative shrink-0 border-b border-slate-100 dark:border-white/5 overflow-hidden">
           <div className="absolute left-0 w-20 h-11 flex justify-center items-center">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 text-white flex-shrink-0">
                <Rocket size={18} fill="currentColor" />
              </div>
           </div>
           <AnimatePresence>
              {isSidebarOpen && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="pl-20 whitespace-nowrap overflow-hidden">
                  <span className="font-bold text-slate-800 dark:text-white tracking-tight text-lg uppercase">ORBIT<span className="text-blue-600">ADM</span></span>
                </motion.div>
              )}
           </AnimatePresence>
        </div>

        {/* 2. Menu List */}
        <nav className="flex-1 py-6 space-y-6 overflow-y-auto overflow-x-hidden thin-scrollbar hover:thin-scrollbar-thumb">
           {menuGroups.map((group, groupIdx) => (
             <div key={groupIdx}>
               <div className="h-6 flex items-center mb-2 relative">
                 <AnimatePresence mode="wait">
                   {isSidebarOpen ? (
                     <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest pl-7">
                       {group.title}
                     </motion.p>
                   ) : (
                     <div className="absolute left-0 w-20 flex justify-center">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-8 h-[1px] bg-slate-100 dark:bg-white/5" />
                     </div>
                   )}
                 </AnimatePresence>
               </div>

               <div className="space-y-1.5 px-0">
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
                        className="flex items-center group relative h-11 w-full"
                     >
                        {/* THE BACKGROUND BOX (Perfectly Square when closed) */}
                        <div className={`absolute h-11 transition-all duration-300 rounded-xl ${isSidebarOpen ? "left-3 right-3" : "left-[18px] w-11"} ${isActive ? "bg-blue-50 dark:bg-blue-600/10" : "group-hover:bg-slate-50 dark:group-hover:bg-white/5"}`} />

                        {/* THE FIXED ICON (80px width to center in mini mode) */}
                        <div className={`absolute left-0 w-20 h-11 flex justify-center items-center z-10 transition-colors ${isActive ? "text-blue-700 dark:text-blue-400" : "text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:hover:text-white"}`}>
                           <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                        </div>
                        
                        {isActive && isSidebarOpen && (
                          <motion.div layoutId="activeNav" className="absolute left-1.5 w-1 h-6 bg-blue-600 rounded-full z-20" />
                        )}

                        <AnimatePresence>
                          {isSidebarOpen && (
                            <motion.span 
                              initial={{ opacity: 0, x: -10 }} 
                              animate={{ opacity: 1, x: 0 }} 
                              exit={{ opacity: 0, x: -10 }} 
                              className={`pl-20 text-sm font-semibold tracking-wide whitespace-nowrap z-10 ${isActive ? "text-blue-700 dark:text-blue-400" : "text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"}`}
                            >
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
        <div className="p-4 border-t border-slate-100 dark:border-white/5 shrink-0 overflow-hidden">
           <div className="flex flex-col gap-3">
             <div className="flex items-center h-11 w-full relative">
                 <div className="absolute left-[-16px] w-20 h-11 flex justify-center items-center">
                    <button className="p-2 rounded-lg text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors">
                       <Settings size={20} />
                    </button>
                 </div>
                 {isSidebarOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex justify-end pr-2">
                       <div className="scale-90"><ThemeToggle /></div>
                    </motion.div>
                 )}
             </div>
             
             <button 
                onClick={() => logoutAction()} 
                className="flex items-center group relative h-11 w-full overflow-hidden"
             >
                {/* Perfect Square logout background when closed */}
                <div className={`absolute h-11 transition-all duration-300 rounded-xl bg-red-50/50 dark:bg-red-500/10 group-hover:bg-red-100 dark:group-hover:bg-red-500/20 ${isSidebarOpen ? "left-0 right-0" : "left-[18px] w-11"}`} />
                <div className="absolute left-0 w-20 h-11 flex justify-center items-center text-red-600 dark:text-red-400 z-10">
                   <LogOut size={18} />
                </div>
                {isSidebarOpen && (
                  <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="pl-12 text-xs font-bold text-red-600 dark:text-red-400 z-10">
                    Log Out
                  </motion.span>
                )}
             </button>
           </div>
        </div>

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

      <main className="flex-1 overflow-y-auto relative z-10 custom-scrollbar-main" style={{ scrollbarGutter: 'stable' }}>
         <div className="p-6 md:p-10 pb-24 pt-24 md:pt-10 max-w-7xl mx-auto w-full">
            {children}
         </div>
      </main>

      <ToastContainer />
      <ConfirmDialog />

      <style jsx global>{`
        .sidebar-no-transition *,
        .sidebar-no-transition {
          transition: none !important;
          animation: none !important;
        }
        .thin-scrollbar::-webkit-scrollbar { width: 4px; }
        .thin-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .thin-scrollbar::-webkit-scrollbar-thumb { background: transparent; border-radius: 10px; }
        .thin-scrollbar:hover::-webkit-scrollbar-thumb { background: #cbd5e1; }
        .dark .thin-scrollbar:hover::-webkit-scrollbar-thumb { background: #334155; }
        .custom-scrollbar-main::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar-main::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar-main::-webkit-scrollbar-thumb { background: transparent; border-radius: 10px; }
        .custom-scrollbar-main:hover::-webkit-scrollbar-thumb { background: #cbd5e1; }
        .dark .custom-scrollbar-main:hover::-webkit-scrollbar-thumb { background: #334155; }
      `}</style>
    </div>
  );
}