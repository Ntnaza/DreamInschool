"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, ChevronDown, ChevronRight, 
  PlayCircle, MessageCircle, Code, ShieldCheck, FileText, 
  CreditCard, Users, Bug, X, Send, Image as ImageIcon, ExternalLink
} from "lucide-react";

// DATA PANDUAN (KNOWLEDGE BASE)
const knowledgeBase = [
  {
    category: "Memulai",
    icon: RocketIcon,
    color: "blue",
    items: [
      { q: "Bagaimana cara login admin?", a: "Gunakan NISN sebagai username dan password default yang diberikan oleh Pembina OSIS. Segera ganti password setelah login pertama." },
      { q: "Lupa password akun?", a: "Hubungi Admin Pusat (Ketua OSIS) atau Pembina untuk melakukan reset password melalui database." },
    ]
  },
  {
    category: "Administrasi & Konten",
    icon: FileText,
    color: "purple",
    items: [
      { q: "Cara upload berita baru?", a: "Masuk ke menu 'Kelola Berita', klik tombol '+ Tulis Berita'. Pastikan gambar berukuran rasio 16:9 agar tampilan rapi." },
      { q: "Bagaimana membalas aspirasi siswa?", a: "Buka menu 'Inbox Aspirasi'. Klik pada pesan yang masuk, lalu ketik balasan. Siswa akan melihat balasan di halaman utama." },
    ]
  },
  {
    category: "Keuangan (Kas)",
    icon: CreditCard,
    color: "green",
    items: [
      { q: "Cara catat pengeluaran event?", a: "Masuk ke menu 'Kas & Anggaran', pilih Tab 'Anggaran Event'. Pilih event-nya, lalu klik 'Catat Pengeluaran'." },
      { q: "Apa itu fitur 'Tutup Buku'?", a: "Fitur untuk mengunci laporan keuangan event yang sudah selesai. Sisa dana otomatis dikembalikan ke Kas Umum." },
    ]
  },
  {
    category: "SDM & Absensi",
    icon: Users,
    color: "orange",
    items: [
      { q: "Cara cetak ID Card?", a: "Buka 'ID Card Studio', pilih nama pengurus, upload foto, lalu klik tombol 'Cetak'. Gunakan kertas PVC untuk hasil terbaik." },
      { q: "Scanner absensi tidak jalan?", a: "Pastikan browser sudah diizinkan mengakses kamera (Allow Camera Access). Gunakan pencahayaan yang cukup saat scan QR." },
    ]
  }
];

function RocketIcon({ className }: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
}

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [isBugModalOpen, setIsBugModalOpen] = useState(false);

  // Filter Logic
  const filteredKB = knowledgeBase.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen font-sans space-y-8 pb-20">
      
      {/* === HERO HEADER === */}
      <div className="relative bg-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
         
         <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-black font-bold uppercase tracking-wider mb-4">
                  <ShieldCheck size={14} /> Official Documentation
               </div>
               <h1 className="text-3xl md:text-4xl font-black font-bold text-white mb-2">
                  Pusat Bantuan OSIS
               </h1>
               <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
                  Bingung cara pakai aplikasinya? Cari panduan lengkap di sini atau laporkan kendala teknis langsung ke tim developer.
               </p>
            </div>

            {/* Search Box */}
            <div className="w-full md:w-96 relative group">
               <div className="absolute inset-0 bg-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
               <div className="relative bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-2 flex items-center">
                  <Search size={20} className="text-slate-400 ml-3 shrink-0"/>
                  <input type="text" placeholder="Ketik kata kunci (misal: Absensi)..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-transparent border-none outline-none text-white placeholder-slate-400 text-sm font-medium px-3 py-2" />
               </div>
            </div>
         </div>
      </div>

      {/* === CONTENT GRID === */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         
         {/* LEFT: FAQ LIST */}
         <div className="lg:col-span-2 space-y-6">
            {filteredKB.map((cat, catIdx) => (
               <div key={catIdx} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm">
                  <div className="p-6 border-b border-slate-100 dark:border-white/5 flex items-center gap-3">
                     <div className={`p-2.5 rounded-xl bg-${cat.color}-100 dark:bg-${cat.color}-500/20 text-${cat.color}-600 dark:text-${cat.color}-400`}>
                        <cat.icon size={20} />
                     </div>
                     <h3 className="text-lg font-black font-bold text-slate-800 dark:text-white">{cat.category}</h3>
                  </div>
                  <div className="divide-y divide-slate-100 dark:divide-white/5">
                     {cat.items.map((item, itemIdx) => {
                        const uniqueId = `${catIdx}-${itemIdx}`;
                        const isOpen = openIndex === uniqueId;
                        return (
                           <div key={itemIdx} className="group">
                              <button onClick={() => toggleAccordion(uniqueId)} className="w-full text-left p-5 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                 <span className={`text-sm font-bold ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}>{item.q}</span>
                                 {isOpen ? <ChevronDown size={18} className="text-blue-500"/> : <ChevronRight size={18} className="text-slate-400"/>}
                              </button>
                              <AnimatePresence>
                                 {isOpen && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-slate-50/50 dark:bg-[#0b1121]">
                                       <div className="p-5 pt-0 text-xs leading-relaxed text-slate-500 dark:text-slate-400 border-l-4 border-blue-500 ml-5 pl-4 mb-4">{item.a}</div>
                                    </motion.div>
                                 )}
                              </AnimatePresence>
                           </div>
                        )
                     })}
                  </div>
               </div>
            ))}
         </div>

         {/* RIGHT: ACTIONS & MEDIA */}
         <div className="space-y-6">
            
            {/* Developer Card */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl p-1 shadow-xl">
               <div className="bg-[#0f172a] rounded-xl p-6 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10"><Code size={80}/></div>
                  <div className="relative z-10">
                     <span className="text-[10px] font-black font-bold text-blue-400 uppercase tracking-widest mb-2 block">Developer</span>
                     <h3 className="text-xl font-black font-bold text-white mb-1">Orbit Adm v1.0</h3>
                     <p className="text-xs text-slate-400 mb-6">Dikembangkan oleh Raka Aditya (Angkatan 2026) untuk manajemen organisasi modern.</p>
                     
                     <div className="grid grid-cols-2 gap-2">
                        <button onClick={() => window.open('https://wa.me/62812345678', '_blank')} className="py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95">
                           <MessageCircle size={14}/> Chat WA
                        </button>
                        <button onClick={() => setIsBugModalOpen(true)} className="py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold border border-white/10 flex items-center justify-center gap-2 transition-all active:scale-95">
                           <Bug size={14}/> Lapor Bug
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* Video Tutorials (Visual Upgrade) */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 shadow-sm">
               <h3 className="font-black font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <PlayCircle size={18} className="text-red-500"/> Video Tutorial
               </h3>
               <div className="space-y-4">
                  {[
                     { title: "Tour Dashboard Admin", duration: "2:30", img: "bg-blue-100" },
                     { title: "Cara Input Kas Masuk", duration: "1:45", img: "bg-green-100" },
                     { title: "Tutorial Scan Absensi", duration: "3:10", img: "bg-purple-100" },
                  ].map((vid, i) => (
                     <div key={i} className="group relative rounded-xl overflow-hidden cursor-pointer">
                        {/* Placeholder Thumbnail */}
                        <div className={`h-24 w-full ${vid.img} dark:bg-white/5 flex items-center justify-center`}>
                           <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                              <PlayCircle size={20} className="text-white fill-white"/>
                           </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                           <h4 className="text-xs font-bold text-white line-clamp-1">{vid.title}</h4>
                           <span className="text-[9px] text-slate-300 flex items-center gap-1"><ExternalLink size={8}/> {vid.duration} menit</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </div>

      {/* === MODAL LAPOR BUG === */}
      <AnimatePresence>
         {isBugModalOpen && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsBugModalOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm"/>
               <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="relative w-full max-w-md bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10">
                  <div className="p-5 border-b border-slate-100 dark:border-white/5 flex justify-between items-center bg-slate-50 dark:bg-white/5">
                     <h3 className="font-black font-bold text-slate-900 dark:text-white flex items-center gap-2"><Bug size={18} className="text-red-500"/> Lapor Masalah</h3>
                     <button onClick={() => setIsBugModalOpen(false)}><X size={20} className="text-slate-400"/></button>
                  </div>
                  <div className="p-6 space-y-4">
                     <p className="text-xs text-slate-500">Jelaskan kendala yang kamu alami agar tim developer bisa segera memperbaikinya.</p>
                     <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Judul Masalah</label>
                        <input type="text" className="w-full px-3 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-xs font-bold outline-none focus:border-blue-500 dark:text-white" placeholder="Misal: Gagal upload foto..." />
                     </div>
                     <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Detail Kendala</label>
                        <textarea rows={3} className="w-full px-3 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-xs font-medium outline-none focus:border-blue-500 dark:text-white resize-none" placeholder="Ceritakan kronologinya..." />
                     </div>
                     <div className="border-2 border-dashed border-slate-200 dark:border-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer transition-colors">
                        <ImageIcon size={20} className="mb-2"/>
                        <span className="text-[10px] font-bold">Upload Screenshot (Opsional)</span>
                     </div>
                  </div>
                  <div className="p-5 border-t border-slate-100 dark:border-white/5 flex justify-end gap-2">
                     <button onClick={() => setIsBugModalOpen(false)} className="px-4 py-2 rounded-lg text-xs font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5">Batal</button>
                     <button className="px-6 py-2 bg-slate-900 hover:bg-black text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-lg"><Send size={14}/> Kirim Laporan</button>
                  </div>
               </motion.div>
            </div>
         )}
      </AnimatePresence>

    </div>
  );
}