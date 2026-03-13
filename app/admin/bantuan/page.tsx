"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, ChevronDown, ChevronRight, 
  PlayCircle, MessageCircle, Code, ShieldCheck, FileText, 
  CreditCard, Users, Bug, X, Send, Image as ImageIcon, ExternalLink,
  Rocket, Database, QrCode, ClipboardList, Briefcase, Package,
  Zap, LifeBuoy, AlertCircle, Info, Lock, Plus
} from "lucide-react";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/Toast";
import { submitHelpTicket, saveHelpVideo, deleteHelpVideo } from "@/lib/actions";
import { prisma } from "@/lib/prisma";

// DATA PANDUAN (KNOWLEDGE BASE) - EKSLUSIF & MENDALAM
const knowledgeBase = [
  {
    category: "Sistem & Keamanan Utama",
    icon: ShieldCheck,
    color: "blue",
    description: "Panduan dasar akses, akun, dan stabilitas performa sistem.",
    items: [
      { q: "Cara aman melakukan Login Admin?", a: "Gunakan NISN atau NIP terdaftar. Jika baru pertama kali, gunakan password default dan segera ubah di menu Profil. Sistem akan otomatis logout jika tidak ada aktivitas selama 2 jam demi keamanan data." },
      { q: "Lupa password atau akun terkunci?", a: "Hubungi Admin Pusat (Ketua OSIS) atau Pembina. Password hanya bisa di-reset melalui panel database utama oleh otoritas tertinggi organisasi." },
      { q: "Mengatasi tampilan yang terasa berat/lambat?", a: "Website ini menggunakan sistem animasi Smooth-Scroll. Pastikan 'Hardware Acceleration' di pengaturan browser Anda aktif. Disarankan menggunakan Google Chrome atau Microsoft Edge versi terbaru." },
      { q: "Apakah data aman jika server mati?", a: "Sistem mencadangkan data secara otomatis setiap 24 jam ke server cloud yang terenkripsi. Semua transaksi keuangan dan absensi bersifat permanen." }
    ]
  },
  {
    category: "Database Pengurus & Struktur",
    icon: Database,
    color: "indigo",
    description: "Manajemen identitas anggota dan hierarki organisasi.",
    items: [
      { q: "Cara menambah anggota baru dengan benar?", a: "Masuk ke 'Data Pengurus', klik '+ Tambah'. Pastikan Foto Profil memiliki rasio 1:1 (kotak) agar tidak terdistorsi. NIS/NIP bersifat unik, tidak boleh ada yang sama." },
      { q: "Mengatur Divisi dan Jabatan secara dinamis?", a: "Gunakan tombol 'Struktur' di pojok kanan atas Data Pengurus. Anda bisa membuat divisi baru (misal: Sekbid 10) dan menambahkan jabatan spesifik di dalamnya secara instan." },
      { q: "Status Aktif vs Alumni?", a: "Anggota yang sudah lulus harus diubah statusnya menjadi 'ALUMNI' agar riwayat kinerjanya tetap tersimpan namun tidak lagi muncul di daftar absensi aktif." },
      { q: "Cetak ID Card Otomatis?", a: "Buka 'ID Card Studio', pilih nama anggota. Sistem akan menarik foto dan data dari database. Gunakan kertas PVC untuk hasil profesional." }
    ]
  },
  {
    category: "Absensi & Kehadiran Digital",
    icon: QrCode,
    color: "emerald",
    description: "Operasional harian scanner QR dan pelaporan kehadiran.",
    items: [
      { q: "Sistem Sesi 'Sekali Pakai' vs 'Rutinan'?", a: "Sesi 'Sekali Pakai' digunakan untuk event tertentu (Rapat Pleno). Sesi 'Rutinan' (Senin-Jumat) akan otomatis muncul kembali sesuai hari yang Anda tentukan." },
      { q: "Bagaimana jika kamera scanner tidak terbuka?", a: "Pastikan Anda memberikan izin (Permission) kamera saat browser meminta. Jika masih gagal, cek apakah kamera sedang digunakan oleh aplikasi lain." },
      { q: "Cara input absen bagi yang lupa bawa ID Card?", a: "Gunakan fitur 'Input Manual' di samping tombol scanner. Cari nama anggota tersebut, lalu pilih status kehadirannya (Hadir/Izin/Sakit)." },
      { q: "Menutup Sesi dan Auto-Alpa?", a: "Saat sesi berakhir, klik 'Tutup Sesi'. Sistem akan otomatis memberikan status 'ALPA' kepada anggota yang tidak melakukan scan tanpa keterangan izin." }
    ]
  },
  {
    category: "Keuangan, Anggaran & LPJ",
    icon: CreditCard,
    color: "amber",
    description: "Transparansi dana kas, iuran, dan laporan kegiatan.",
    items: [
      { q: "Perbedaan Pemasukan vs Pengeluaran Umum?", a: "Pemasukan Umum mencatat iuran rutin atau sponsor. Pengeluaran Umum mencatat operasional sekretariat. Semua tercatat di 'Buku Kas' yang dipilih." },
      { q: "Mengelola Anggaran Program Kerja (Proker)?", a: "Di Tab 'Anggaran Event', pilih Proker aktif. Masukkan pagu dana. Setiap belanja harus disertai upload foto barang dan nota/struk asli sebagai bukti audit." },
      { q: "Apa fungsi fitur 'Tutup Buku' Anggaran?", a: "Fitur ini digunakan saat event selesai. Sisa dana yang tidak terpakai akan otomatis dikembalikan ke Kas Umum, dan laporan (LPJ) akan dikunci." },
      { q: "Export Laporan ke Excel & PDF?", a: "Sistem mendukung ekspor satu klik. Laporan PDF didesain resmi dengan kop organisasi, siap untuk diprint sebagai berkas pertanggungjawaban." }
    ]
  },
  {
    category: "Konten: Berita & Galeri HD",
    icon: ImageIcon,
    color: "purple",
    description: "Publikasi kegiatan dan dokumentasi kualitas tinggi.",
    items: [
      { q: "Standar ukuran gambar Berita?", a: "Gunakan rasio 16:9 (Landscape) untuk thumbnail berita utama agar tampilan di Beranda tetap simetris dan profesional." },
      { q: "Keunggulan Multi-Upload Galeri HD?", a: "Anda bisa upload hingga 20 foto sekaligus. Sistem secara cerdas akan mengompres foto menjadi Full HD (1920px) namun tetap tajam, hemat ruang server tapi visual jernih." },
      { q: "Menambahkan Kategori Galeri?", a: "Klik tombol 'Kategori' di menu Galeri. Kategori ini akan memudahkan pengunjung di halaman depan untuk memfilter dokumentasi (misal: Dokumentasi Olahraga)." }
    ]
  },
  {
    category: "Inventaris & Aset",
    icon: Package,
    color: "rose",
    description: "Pelacakan barang milik organisasi dan peminjaman.",
    items: [
      { q: "Cara mencatat peminjaman barang?", a: "Cari barang di daftar, klik tombol 'Pinjam'. Masukkan nama peminjam. Status barang akan otomatis berubah menjadi 'Dipinjam' dan tidak bisa dipinjam oleh orang lain." },
      { q: "Validasi Pengembalian?", a: "Saat barang kembali, klik 'Kembalikan'. Anda wajib memilih kondisi barang (Baik/Rusak). Riwayat ini akan tersimpan permanen di histori barang." },
      { q: "Barang Rusak (Maintenance)?", a: "Ubah kondisi barang menjadi 'Rusak'. Barang tersebut akan tetap ada di database namun diberi label peringatan agar tidak dipinjam." }
    ]
  }
];

export default function HelpCenterPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<string | null>(knowledgeBase[0].category + "-0");
  const [isBugModalOpen, setIsBugModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form States
  const [bugForm, setBugForm] = useState({ subject: "", description: "", fotoBukti: "" });
  const [videoForm, setVideoForm] = useState({ title: "", youtubeId: "", duration: "", desc: "", thumbnail: "" });

  useEffect(() => { setIsClient(true); }, []);

  const handleLaporBug = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("subject", bugForm.subject);
    formData.append("description", bugForm.description);
    formData.append("fotoBukti", bugForm.fotoBukti);

    const res = await submitHelpTicket(formData);
    if (res.success) {
      showToast(res.message, "success");
      setBugForm({ subject: "", description: "", fotoBukti: "" });
      setIsBugModalOpen(false);
    } else { showToast(res.message, "error"); }
    setIsSubmitting(false);
  };

  const handleAddVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    Object.entries(videoForm).forEach(([key, val]) => formData.append(key, val));
    const res = await saveHelpVideo(formData);
    if (res.success) {
      showToast(res.message, "success");
      setIsVideoModalOpen(false);
      setVideoForm({ title: "", youtubeId: "", duration: "", desc: "", thumbnail: "" });
      router.refresh();
    } else { showToast(res.message, "error"); }
    setIsSubmitting(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => { setBugForm(prev => ({ ...prev, fotoBukti: reader.result as string })); };
      reader.readAsDataURL(file);
    }
  };

  const filteredKB = knowledgeBase.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  const toggleAccordion = (id: string) => { setOpenIndex(openIndex === id ? null : id); };

  if (!isClient) return null;

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col font-sans relative px-4 md:px-0">
      
      {/* === HERO HEADER (COMPACT & FREEZE) === */}
      <div className="shrink-0 relative bg-slate-900 rounded-3xl p-5 md:p-6 overflow-hidden shadow-xl border border-white/5 mb-4">
         <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
         
         <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left flex-1">
               <div className="flex flex-wrap items-center gap-2 mb-2 justify-center lg:justify-start">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-bold uppercase tracking-wider antialiased">
                     <ShieldCheck size={12} /> Knowledge Base v2.5
                  </div>
                  <button onClick={() => router.push('/admin/bantuan/inbox')} className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[9px] font-bold uppercase tracking-wider hover:bg-red-500/20 transition-all">
                     <Send size={12} /> Inbox Support
                  </button>
               </div>
               <h1 className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight leading-tight">
                  Pusat Bantuan <span className="text-blue-500">Orbit Sistem</span>
               </h1>
               <p className="text-slate-400 text-[10px] md:text-xs max-w-xl leading-relaxed font-medium">
                  Analisis menyeluruh untuk memudahkan anggota dalam mengelola website secara mandiri.
               </p>
            </div>

            <div className="w-full lg:w-72 relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
               <div className="relative bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 flex items-center shadow-lg">
                  <Search size={16} className="text-blue-500 ml-2 shrink-0"/>
                  <input type="text" placeholder="Cari solusi..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-transparent border-none outline-none text-white placeholder:text-slate-500 text-xs font-bold px-3 py-1" />
               </div>
            </div>
         </div>
      </div>

      {/* === MAIN CONTENT GRID (SCROLLABLE) === */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-24">
            
            {/* LEFT: FAQ LIST */}
            <div className="lg:col-span-2 space-y-6">
               <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                     <Zap className="text-amber-500" size={20}/> Direktori Panduan
                  </h2>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10">
                     {filteredKB.length} Kategori
                  </span>
               </div>

            {filteredKB.length > 0 ? filteredKB.map((cat, catIdx) => (
               <div key={catIdx} className="bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-6 border-b border-slate-100 dark:border-white/5 flex items-center gap-4 bg-slate-50/50 dark:bg-white/5">
                     <div className={`p-3 rounded-xl bg-${cat.color}-100 dark:bg-${cat.color}-500/10 text-${cat.color}-600 dark:text-${cat.color}-400 shadow-inner border border-${cat.color}-200/50 dark:border-${cat.color}-500/20`}>
                        <cat.icon size={22} />
                     </div>
                     <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-0.5">{cat.category}</h3>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">{cat.description}</p>
                     </div>
                  </div>
                  <div className="divide-y divide-slate-100 dark:divide-white/5">
                     {cat.items.map((item, itemIdx) => {
                        const uniqueId = `${cat.category}-${itemIdx}`;
                        const isOpen = openIndex === uniqueId;
                        return (
                           <div key={itemIdx} className="group">
                              <button onClick={() => toggleAccordion(uniqueId)} className="w-full text-left p-6 flex justify-between items-start gap-6 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                                 <span className={`text-sm font-bold leading-relaxed ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300 group-hover:text-blue-500'}`}>{item.q}</span>
                                 <div className={`mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : 'text-slate-400'}`}>
                                    <ChevronDown size={18} />
                                 </div>
                              </button>
                              <AnimatePresence>
                                 {isOpen && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-slate-50/50 dark:bg-[#0b1121]">
                                       <div className="p-6 pt-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400 border-l-4 border-blue-600 ml-6 pl-6 mb-6 font-medium italic">
                                          {item.a}
                                       </div>
                                    </motion.div>
                                 )}
                              </AnimatePresence>
                           </div>
                        )
                     })}
                  </div>
               </div>
            )) : (
               <div className="h-64 bg-white dark:bg-[#0f172a]/60 rounded-3xl border border-dashed border-slate-300 dark:border-white/10 flex flex-col items-center justify-center text-slate-500">
                  <AlertCircle size={48} className="mb-4 opacity-20"/>
                  <p className="font-bold">Solusi tidak ditemukan.</p>
               </div>
            )}
         </div>

         {/* RIGHT: INTERACTIVE SIDEBAR */}
         <div className="space-y-8">
            
            {/* Workshop Section */}
            <div className="bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-white/5 p-6 shadow-sm">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                     <PlayCircle size={20} className="text-red-500"/> Video Tutorial
                  </h3>
                  <button onClick={() => setIsVideoModalOpen(true)} className="p-1.5 bg-blue-500/10 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
                     <Plus size={16}/>
                  </button>
               </div>
               
               <div className="space-y-4">
                  {[
                    { id: "youtube_id_1", title: "Mastering Dashboard", duration: "03:45", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop" },
                    { id: "youtube_id_2", title: "Manajemen Keuangan", duration: "06:12", thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=500&auto=format&fit=crop" },
                  ].map((vid, i) => (
                     <div key={i} onClick={() => setActiveVideo(vid.id)} className="group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 shadow-sm">
                        <div className="h-32 w-full relative">
                           <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"/>
                           <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                 <PlayCircle size={24} fill="white"/>
                              </div>
                           </div>
                           <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-[9px] font-bold text-white uppercase">
                              {vid.duration}
                           </div>
                        </div>
                        <div className="p-4 bg-slate-900">
                           <h4 className="text-[11px] font-bold text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors line-clamp-1 antialiased">{vid.title}</h4>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Orbit Support Card */}
            <div className="bg-[#0a0f1e] rounded-3xl p-8 border border-white/5 relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
               <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-15 transition-opacity duration-1000 rotate-12">
                  <Rocket size={180}/>
               </div>
               <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20 mx-auto mb-6 shadow-inner">
                     <LifeBuoy size={32} className="animate-spin-slow"/>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Orbit Support</h3>
                  <p className="text-sm text-slate-400 mb-8 leading-relaxed font-medium italic">&quot;Tim pengembang siap membantu operasional organisasi Anda.&quot;</p>
                  
                  <div className="space-y-3">
                     <button onClick={() => window.open('https://wa.me/6285842817255', '_blank')} className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-blue-600/20">
                        <MessageCircle size={18}/> Chat Developer
                     </button>
                     <button onClick={() => setIsBugModalOpen(true)} className="w-full py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-2xl text-xs font-bold border border-white/10 flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
                        <Bug size={18} className="text-red-500"/> Laporkan Bug
                     </button>
                  </div>
               </div>
            </div>

         </div>

         </div>
         </div>

         {/* === MODALS === */}

      <AnimatePresence>
         {activeVideo && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveVideo(null)} className="absolute inset-0 bg-black/95 backdrop-blur-xl"/>
               <motion.div initial={{ scale: 0.9, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 50 }} className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.2)] border border-white/10">
                  <button onClick={() => setActiveVideo(null)} className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-red-600 text-white rounded-full transition-all">
                     <X size={24}/>
                  </button>
                  <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
               </motion.div>
            </div>
         )}
      </AnimatePresence>

      <AnimatePresence>
         {isBugModalOpen && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsBugModalOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-md"/>
               <form onSubmit={handleLaporBug} className="contents">
                  <motion.div initial={{ scale: 0.95, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 30 }} className="relative w-full max-w-lg bg-white dark:bg-[#0f172a] rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10">
                     <div className="p-8 border-b border-slate-100 dark:border-white/5 flex justify-between items-center bg-slate-50 dark:bg-white/5">
                        <div className="flex items-center gap-4">
                           <div className="p-3 bg-red-500/10 rounded-2xl text-red-500"><Bug size={24}/></div>
                           <div>
                              <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-none mb-1 antialiased">Lapor Kendala</h3>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Support Ticket</p>
                           </div>
                        </div>
                        <button type="button" onClick={() => setIsBugModalOpen(false)} className="p-2 text-slate-400 hover:text-red-500 transition-colors"><X size={28}/></button>
                     </div>
                     <div className="p-10 space-y-8">
                        <div>
                           <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 block ml-1">Subjek</label>
                           <input type="text" required value={bugForm.subject} onChange={e => setBugForm({...bugForm, subject: e.target.value})} className="w-full px-6 py-4 bg-slate-50 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 rounded-2xl text-sm font-bold outline-none focus:ring-4 focus:ring-blue-500/10 dark:text-white transition-all" placeholder="Misal: QR Code tidak terbaca..." />
                        </div>
                        <div>
                           <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 block ml-1">Deskripsi</label>
                           <textarea rows={4} required value={bugForm.description} onChange={e => setBugForm({...bugForm, description: e.target.value})} className="w-full px-6 py-4 bg-slate-50 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 rounded-2xl text-sm font-medium outline-none focus:ring-4 focus:ring-blue-500/10 dark:text-white resize-none transition-all" placeholder="Jelaskan detail error..." />
                        </div>
                        <div className="relative group border-2 border-dashed border-slate-200 dark:border-white/10 rounded-[1.5rem] p-8 flex flex-col items-center justify-center text-slate-400 hover:bg-blue-500/5 hover:border-blue-500/50 cursor-pointer transition-all">
                           <input type="file" accept="image/*" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                           {bugForm.fotoBukti ? (
                              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                                 <img src={bugForm.fotoBukti} className="w-full h-full object-cover" />
                                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white text-xs font-bold">Ganti Foto</span>
                                 </div>
                              </div>
                           ) : (
                              <>
                                 <div className="w-16 h-14 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <ImageIcon size={32} className="text-slate-400 group-hover:text-blue-500 transition-colors"/>
                                 </div>
                                 <span className="text-xs font-bold uppercase tracking-[0.1em]">Upload Bukti Error</span>
                                 <span className="text-[9px] mt-2 font-bold opacity-50 uppercase tracking-widest">PNG, JPG up to 5MB</span>
                              </>
                           )}
                        </div>
                     </div>
                     <div className="p-8 border-t border-slate-100 dark:border-white/5 flex justify-end gap-4 bg-slate-50 dark:bg-white/5">
                        <button type="button" onClick={() => setIsBugModalOpen(false)} className="px-8 py-4 rounded-2xl text-xs font-bold text-slate-400 uppercase tracking-widest">Batal</button>
                        <button type="submit" disabled={isSubmitting} className="px-10 py-4 bg-slate-900 dark:bg-blue-600 hover:bg-black dark:hover:bg-blue-700 text-white rounded-[1.2rem] text-xs font-bold flex items-center gap-3 shadow-xl transition-all active:scale-[0.96] uppercase tracking-widest">
                           {isSubmitting ? <Code className="animate-spin" size={18}/> : <Send size={18}/>} 
                           <span>{isSubmitting ? "Mengirim..." : "Kirim"}</span>
                        </button>
                     </div>
                  </motion.div>
               </form>
            </div>
         )}
      </AnimatePresence>

      {/* === MODAL ADD VIDEO TUTORIAL === */}
      <AnimatePresence>
         {isVideoModalOpen && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsVideoModalOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-md"/>
               <form onSubmit={handleAddVideo} className="contents">
                  <motion.div initial={{ scale: 0.95, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 30 }} className="relative w-full max-w-md bg-white dark:bg-[#0f172a] rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10">
                     <div className="p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center bg-slate-50 dark:bg-white/5">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-3"><PlayCircle size={20} className="text-blue-500"/> Tambah Tutorial</h3>
                        <button type="button" onClick={() => setIsVideoModalOpen(false)} className="p-2 text-slate-400 hover:text-red-500 transition-colors"><X size={24}/></button>
                     </div>
                     <div className="p-8 space-y-5">
                        <div>
                           <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Judul Video</label>
                           <input type="text" required value={videoForm.title} onChange={e => setVideoForm({...videoForm, title: e.target.value})} className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-blue-500/20 dark:text-white" placeholder="Misal: Cara Input Kas..." />
                        </div>
                        <div>
                           <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">YouTube Video ID</label>
                           <input type="text" required value={videoForm.youtubeId} onChange={e => setVideoForm({...videoForm, youtubeId: e.target.value})} className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-blue-500/20 dark:text-white" placeholder="ID setelah v= (misal: dQw4w9WgXcQ)" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Durasi</label>
                              <input type="text" value={videoForm.duration} onChange={e => setVideoForm({...videoForm, duration: e.target.value})} className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-blue-500/20 dark:text-white" placeholder="05:20" />
                           </div>
                           <div>
                              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Thumbnail (Opsional)</label>
                              <input type="text" value={videoForm.thumbnail} onChange={e => setVideoForm({...videoForm, thumbnail: e.target.value})} className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-blue-500/20 dark:text-white" placeholder="Link Gambar" />
                           </div>
                        </div>
                     </div>
                     <div className="p-6 border-t border-slate-100 dark:border-white/5 flex justify-end gap-3 bg-slate-50 dark:bg-white/5">
                        <button type="button" onClick={() => setIsVideoModalOpen(false)} className="px-6 py-3 rounded-xl text-xs font-bold text-slate-400">Batal</button>
                        <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-lg">Simpan Video</button>
                     </div>
                  </motion.div>
               </form>
            </div>
         )}
      </AnimatePresence>

      <style jsx global>{`
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
      `}</style>

    </div>
  );
}
