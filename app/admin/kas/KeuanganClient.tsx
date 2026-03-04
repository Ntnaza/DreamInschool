"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wallet, ArrowUpCircle, ArrowDownCircle, Search, 
  Plus, Filter, X, Target, Heart, Users, BookOpen, 
  ChevronRight, Info, AlertCircle, Calendar, Receipt,
  CheckCircle2, AlertTriangle, ArrowRightLeft, TrendingDown,
  Upload, Image as ImageIcon, Camera, Maximize2, ChevronDown,
  History, Coins, ImageOff, ShoppingBag, Hash, Sparkles,
  FileSpreadsheet, FileText, Printer, Download, FileDown, Loader2
} from "lucide-react";
import TourGuide from "@/components/TourGuide";
import { createGeneralTrx, createEventBudget, createEventTrx, createBukuKas, closeEventBudget } from "@/lib/actions";
import { showToast } from "@/components/Toast";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const formatIDR = (val: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(val);

const financeTourSteps = [
    { target: '.tour-finance-header', content: 'Selamat datang di Pusat Keuangan OSIS! Di sini Anda bisa mengelola dompet kas dan anggaran kegiatan secara profesional.', disableBeacon: true },
    { target: '.tour-ledger-sidebar', content: 'Ini adalah daftar "Dompet Kas". Anda bisa memisahkan Uang Kas Umum, Dana Sosial, atau Iuran Pengurus di sini agar tidak bercampur.', },
    { target: '.tour-stats-cards', content: 'Panel ini menampilkan saldo real-time dari dompet kas yang Anda pilih di sidebar.', },
    { target: '.tour-general-actions', content: 'Klik di sini untuk mencatat transaksi masuk (pemasukan) atau keluar (pengeluaran) harian.', },
    { target: '.tour-tab-switcher', content: 'Pindah ke tab ini untuk mengelola jatah dana khusus Program Kerja atau Event tertentu.', },
    { target: '.tour-event-list', content: 'Klik pada kartu kegiatan untuk mencatat nota belanja atau melihat riwayat audit bukti fisik dan struk.', },
];

export default function KeuanganClient({ ledgers, events, prokers }: { ledgers: any[], events: any[], prokers: any[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  
  const initialTab = (searchParams.get("tab") as 'general' | 'events') || 'general';
  const [activeTab, setActiveTab] = useState<'general' | 'events'>(initialTab);
  
  const [selectedLedgerId, setSelectedLedgerId] = useState<number>(ledgers[0]?.id || 1);
  const [expandedProkerId, setExpandedProkerId] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false); 
  const [isDataLoading, setIsDataLoading] = useState(true);
  
  // STATE MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'general_in' | 'general_out' | 'new_event' | 'new_ledger' | 'close_budget' | 'lpj_preview'>('general_in');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  
  // LIGHTBOX
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const [formData, setFormData] = useState<any>({ 
    title: "", amount: "", date: new Date().toISOString().split('T')[0], 
    category: "Umum", pic: "", prokerId: "", isSubsidi: false, 
    bukuKasId: "", ledgerName: "", ledgerDesc: "", fromBukuId: "",
    fotoBarang: "", fotoNota: "", targetBukuId: "",
    kuantitas: 1, satuan: "pcs", hargaSatuan: ""
  });

  const fileInputBarang = useRef<HTMLInputElement>(null);
  const fileInputNota = useRef<HTMLInputElement>(null);
  const lpjRef = useRef<HTMLDivElement>(null);

  useEffect(() => { 
    setIsClient(true); 
    // Beri delay halus untuk transisi skeleton awal
    const timer = setTimeout(() => setIsDataLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (tab: 'general' | 'events') => {
    setIsDataLoading(true); // Tampilkan skeleton saat pindah tab
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams);
    params.set("tab", tab);
    router.replace(`${pathname}?${params.toString()}`);
    setTimeout(() => setIsDataLoading(false), 400);
  };

  const currentLedger = ledgers.find(l => l.id === selectedLedgerId) || ledgers[0];
  const ledgerTransactions = currentLedger?.transaksi || [];
  const saldoLedger = ledgerTransactions.reduce((acc:any, curr:any) => curr.tipe === 'PEMASUKAN' ? acc + curr.nominal : acc - curr.nominal, 0);

  const activeEvent = events.find(e => e.id === (modalType === 'lpj_preview' || modalType === 'close_budget' ? Number(formData.prokerId) : expandedProkerId));
  const sisaAnggaran = activeEvent ? activeEvent.budget - activeEvent.used : 0;
  const calculatedTotal = Number(formData.kuantitas || 0) * Number(formData.hargaSatuan || 0);

  // --- EXPORT FUNCTIONS (SUPER PRO VERSION) ---
  
  const exportLedgerToExcel = () => {
    const wsData = [
        ["LAPORAN ARUS KAS ORGANISASI (RESMI)"],
        ["SMK NEGERI INDONESIA"],
        [""],
        ["DATA DOMPET KAS", "", "", "STATUS SALDO"],
        ["Nama Buku Kas", currentLedger.nama, "", "Total Masuk", ledgerTransactions.filter((t:any)=>t.tipe==='PEMASUKAN').reduce((a:any,c:any)=>a+c.nominal,0)],
        ["Kategori", currentLedger.deskripsi || "-", "", "Total Keluar", ledgerTransactions.filter((t:any)=>t.tipe==='PENGELUARAN').reduce((a:any,c:any)=>a+c.nominal,0)],
        ["Tanggal Cetak", new Date().toLocaleDateString('id-ID'), "", "SALDO AKHIR", saldoLedger],
        [""],
        ["DAFTAR TRANSAKSI MASUK & KELUAR"],
        ["NO", "TANGGAL", "URAIAN / KETERANGAN", "KATEGORI", "TIPE", "NOMINAL (Rp)"]
    ];

    ledgerTransactions.forEach((t:any, i:number) => {
        wsData.push([
            i + 1,
            new Date(t.tanggal).toLocaleDateString('id-ID'),
            t.judul,
            t.kategori,
            t.tipe,
            t.nominal
        ]);
    });

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    ws['!cols'] = [{wch: 6}, {wch: 15}, {wch: 45}, {wch: 25}, {wch: 15}, {wch: 20}];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Arus Kas");
    XLSX.writeFile(wb, `LAPORAN_KAS_${currentLedger.nama.toUpperCase()}.xlsx`);
  };

  const exportEventToExcel = (ev: any) => {
    const wsData = [
        ["LAPORAN PERTANGGUNGJAWABAN (LPJ) ANGGARAN KEGIATAN"],
        ["SMK NEGERI INDONESIA - OSIS/MPK"],
        [""],
        ["RINGKASAN KEGIATAN"],
        ["Nama Kegiatan", ev.name],
        ["Status", ev.status],
        ["Pagu Anggaran", ev.budget],
        ["Total Realisasi", ev.used],
        ["Sisa Saldo Dana", ev.budget - ev.used],
        ["Efisiensi", `${Math.round((ev.used/ev.budget)*100)}%`],
        [""],
        ["DAFTAR RINCIAN NOTA / PENGELUARAN"],
        ["NO", "TANGGAL", "URAIAN BARANG/JASA", "KUANTITAS", "SATUAN", "HARGA SATUAN (Rp)", "TOTAL PEMBAYARAN (Rp)"]
    ];

    ev.transactions.forEach((t:any, i:number) => {
        wsData.push([
            i + 1,
            t.date,
            t.title,
            t.kuantitas,
            t.satuan,
            t.amount / t.kuantitas,
            t.amount
        ]);
    });

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    ws['!cols'] = [{wch: 6}, {wch: 15}, {wch: 45}, {wch: 12}, {wch: 12}, {wch: 20}, {wch: 25}];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "LPJ Excel");
    XLSX.writeFile(wb, `LPJ_EXCEL_${ev.name.toUpperCase()}.xlsx`);
  };

  const exportAllEventsToExcel = () => {
    const wsData = [
        ["REKAPITULASI SELURUH ANGGARAN PROGRAM KERJA"],
        ["SMK NEGERI INDONESIA"],
        [""],
        ["NO", "NAMA KEGIATAN", "PAGU ANGGARAN", "TOTAL REALISASI", "SISA DANA", "STATUS", "PERSENTASE"]
    ];

    events.forEach((ev, i) => {
        wsData.push([
            i + 1,
            ev.name,
            ev.budget,
            ev.used,
            ev.budget - ev.used,
            ev.status,
            `${Math.round((ev.used/ev.budget)*100)}%`
        ]);
    });

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    ws['!cols'] = [{wch: 6}, {wch: 45}, {wch: 20}, {wch: 20}, {wch: 20}, {wch: 15}, {wch: 15}];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Rekap Anggaran");
    XLSX.writeFile(wb, "REKAP_KEGIATAN_TAHUNAN.xlsx");
  };

  const downloadPDF = async () => {
    if (!lpjRef.current) return;
    setIsExporting(true);
    try {
        const element = lpjRef.current;
        
        // TEKNIK CLONE: Pindahkan ke luar modal untuk capture utuh
        const clone = element.cloneNode(true) as HTMLElement;
        document.body.appendChild(clone);
        
        // Reset styles pada clone agar merender seluruh konten
        clone.style.position = 'absolute';
        clone.style.left = '-9999px';
        clone.style.top = '0';
        clone.style.width = '800px';
        clone.style.height = 'auto';
        clone.style.maxHeight = 'none';
        clone.style.overflow = 'visible';

        const canvas = await html2canvas(clone, { 
            scale: 2, 
            useCORS: true, 
            logging: false,
            backgroundColor: "#ffffff",
            width: 800,
            height: clone.scrollHeight // Paksa tangkap seluruh tinggi konten
        });
        
        document.body.removeChild(clone);

        const imgData = canvas.toDataURL("image/jpeg", 1.0);
        const pdf = new jsPDF("p", "mm", "a4");
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;
        
        let heightLeft = imgHeight;
        let position = 0;
        
        pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, imgHeight);
        heightLeft -= pageHeight;
        
        while (heightLeft > 0) {
            position = position - pageHeight;
            pdf.addPage();
            pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        
        pdf.save(`LPJ_RESMI_${activeEvent?.name.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
        console.error(error);
        showToast("Gagal membuat PDF. Gunakan Chrome untuk hasil terbaik.", "error");
    } finally {
        setIsExporting(false);
    }
  };

  const handleSubmit = async (overrideType?: any) => {
    const type = overrideType || modalType;
    setIsSubmitting(true);
    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
        if (val !== null && val !== undefined) data.set(key, String(val));
    });

    let result;
    try {
        if (type === 'general_in' || type === 'general_out') {
            data.set("type", type === 'general_in' ? "PEMASUKAN" : "PENGELUARAN");
            data.set("bukuKasId", String(selectedLedgerId));
            result = await createGeneralTrx(data);
        } 
        else if (type === 'new_ledger') {
            data.set("nama", formData.ledgerName);
            data.set("deskripsi", formData.ledgerDesc);
            result = await createBukuKas(data);
        }
        else if (type === 'new_event') {
            result = await createEventBudget(data);
        } 
        else if (type === 'event_trx') {
            data.set("amount", String(calculatedTotal));
            data.set("prokerId", String(formData.prokerId)); 
            result = await createEventTrx(data);
        }
        else if (type === 'close_budget') {
            result = await closeEventBudget(Number(formData.prokerId), Number(formData.targetBukuId));
        }

        if (result?.success) {
            showToast("Data keuangan berhasil diperbarui.", "success");
            setIsModalOpen(false);
            router.refresh();
            setFormData((prev: any) => ({ ...prev, title: "", amount: "", fotoBarang: "", fotoNota: "", hargaSatuan: "", kuantitas: 1 }));
        } else { showToast("Gagal: " + result?.message, "error"); }
    } catch (e) { showToast("Terjadi kesalahan sistem.", "error"); } finally { setIsSubmitting(false); }
  };

  const toggleProker = (id: number) => {
    if (expandedProkerId === id) setExpandedProkerId(null);
    else {
        setExpandedProkerId(id);
        setFormData({ ...formData, prokerId: id, amount: "", title: "", fotoBarang: "", fotoNota: "", hargaSatuan: "", kuantitas: 1 });
    }
  };

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col gap-6 font-sans relative">
      <AnimatePresence>
          {lightboxImg && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightboxImg(null)} className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-10 cursor-zoom-out no-print">
                  <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} src={lightboxImg} className="max-w-full max-h-full rounded-xl shadow-2xl" />
                  <button className="absolute top-10 right-10 p-4 bg-white/10 text-white rounded-full"><X size={32}/></button>
              </motion.div>
          )}
      </AnimatePresence>

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 shrink-0 px-4 md:px-0 no-print">
         <div className="tour-finance-header">
            <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">Financial System <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">💰</span></h1>
                {isClient && <TourGuide steps={financeTourSteps} />}
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Pembukuan Multi-Ledger & Audit Realisasi.</p>
         </div>
         <div className="flex bg-slate-100 dark:bg-[#1e293b] p-1 rounded-xl border border-slate-200 dark:border-white/10 tour-tab-switcher">
            <button onClick={() => handleTabChange('general')} className={`px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'general' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm' : 'text-slate-500'}`}>Dompet Kas</button>
            <button onClick={() => handleTabChange('events')} className={`px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'events' ? 'bg-white dark:bg-slate-700 text-purple-600 dark:text-white shadow-sm' : 'text-slate-500'}`}>Anggaran Kegiatan</button>
         </div>
      </div>

      {activeTab === 'general' && (
        <div className="flex flex-col lg:flex-row gap-6 flex-1 overflow-hidden no-print">
            <div className="w-full lg:w-72 flex flex-col gap-4 shrink-0 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-2xl p-5 shadow-sm overflow-hidden tour-ledger-sidebar">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Daftar Dompet</h3>
                    <div className="flex gap-1.5">
                        <button onClick={exportLedgerToExcel} title="Export current ledger" className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-all"><FileSpreadsheet size={14}/></button>
                        <button onClick={() => { setModalType('new_ledger'); setIsModalOpen(true); }} className="p-1.5 bg-blue-600 text-white rounded-lg hover:scale-105 transition-all shadow-lg shadow-blue-500/30"><Plus size={14}/></button>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto space-y-2 custom-scrollbar">
                    {isDataLoading ? (
                        [1, 2, 3].map(i => (
                            <div key={i} className="p-4 rounded-xl border border-transparent bg-slate-50/50 dark:bg-white/5 animate-pulse flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800" />
                                <div className="flex-1 space-y-2">
                                    <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded" />
                                    <div className="h-2 w-24 bg-slate-100 dark:bg-slate-800/50 rounded" />
                                </div>
                            </div>
                        ))
                    ) : (
                        ledgers.map(l => (
                            <div key={l.id} onClick={() => setSelectedLedgerId(l.id)} className={`p-4 rounded-xl cursor-pointer transition-all border relative ${selectedLedgerId === l.id ? 'bg-blue-50/50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30' : 'bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-white/5'}`}>
                                {selectedLedgerId === l.id && <motion.div layoutId="ledgerActive" className="absolute left-0 top-3 bottom-3 w-1 bg-blue-600 rounded-r-full" />}
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${selectedLedgerId === l.id ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-white/5 text-slate-400'}`}>
                                        {l.icon === 'Heart' ? <Heart size={16}/> : l.icon === 'Users' ? <Users size={16}/> : l.icon === 'BookOpen' ? <BookOpen size={16}/> : <Wallet size={16}/>}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className={`text-xs font-bold truncate ${selectedLedgerId === l.id ? 'text-blue-900 dark:text-blue-100' : 'text-slate-700 dark:text-slate-300'}`}>{l.nama}</h4>
                                        <p className="text-[10px] font-medium text-slate-400 truncate">{l.deskripsi}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-6 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 tour-stats-cards">
                    <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
                        <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">Saldo {currentLedger?.nama}</p>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{formatIDR(saldoLedger)}</h2>
                    </div>
                    <div className="bg-emerald-50/50 dark:bg-emerald-500/5 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-500/10">
                        <p className="text-[10px] uppercase font-bold text-emerald-600 tracking-widest mb-1">Total Masuk</p>
                        <h2 className="text-xl font-bold text-emerald-600">{formatIDR(ledgerTransactions.filter((t:any)=>t.tipe==='PEMASUKAN').reduce((a:any,c:any)=>a+c.nominal,0))}</h2>
                    </div>
                    <div className="bg-rose-50/50 dark:bg-rose-500/5 p-5 rounded-2xl border border-rose-100 dark:border-rose-500/10">
                        <p className="text-[10px] uppercase font-bold text-rose-600 tracking-widest mb-1">Total Pengeluaran</p>
                        <h2 className="text-xl font-bold text-rose-600">{formatIDR(ledgerTransactions.filter((t:any)=>t.tipe==='PENGELUARAN').reduce((a:any,c:any)=>a+c.nominal,0))}</h2>
                    </div>
                </div>

                <div className="flex-1 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm flex flex-col overflow-hidden">
                    <div className="px-6 py-4 flex justify-between items-center border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-transparent">
                        <h3 className="text-sm font-bold text-slate-800 dark:text-white">Riwayat Transaksi</h3>
                        <div className="flex gap-2 tour-general-actions">
                            <button onClick={() => handleOpenGeneralModal('in')} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[11px] font-bold flex items-center gap-2 transition-all active:scale-95"><Plus size={14}/> Masuk</button>
                            <button onClick={() => handleOpenGeneralModal('out')} className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-[11px] font-bold flex items-center gap-2 transition-all active:scale-95"><ArrowDownCircle size={14}/> Keluar</button>
                        </div>
                    </div>
                    <div className="flex-1 overflow-auto custom-scrollbar">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50 dark:bg-white/5 sticky top-0 z-10 border-b border-slate-100 dark:border-white/10">
                                <tr><th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-6">Tanggal</th><th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Keterangan</th><th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right pr-6">Nominal</th></tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                                {isDataLoading ? (
                                    [1, 2, 3, 4, 5].map(i => (
                                        <tr key={i} className="animate-pulse">
                                            <td className="p-4 pl-6"><div className="h-3 w-12 bg-slate-100 dark:bg-slate-800 rounded" /></td>
                                            <td className="p-4"><div className="space-y-2"><div className="h-4 w-40 bg-slate-200 dark:bg-slate-800 rounded" /><div className="h-2 w-20 bg-slate-100 dark:bg-slate-800/50 rounded" /></div></td>
                                            <td className="p-4 pr-6"><div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded ml-auto" /></td>
                                        </tr>
                                    ))
                                ) : ledgerTransactions.length === 0 ? ( <tr><td colSpan={3} className="p-12 text-center text-slate-400 text-xs font-medium">Belum ada riwayat transaksi.</td></tr> ) : (
                                    ledgerTransactions.map((t:any) => (
                                        <tr key={t.id} className="hover:bg-slate-50/80 dark:hover:bg-white/5 transition-colors">
                                            <td className="p-4 text-[11px] font-medium text-slate-500 pl-6">{new Date(t.tanggal).toLocaleDateString('id-ID', { day:'2-digit', month:'short' })}</td>
                                            <td className="p-4"><p className="text-sm font-bold text-slate-800 dark:text-slate-200">{t.judul}</p><p className="text-[10px] font-medium text-slate-400 uppercase tracking-tighter">{t.kategori}</p></td>
                                            <td className={`p-4 text-right font-bold pr-6 ${t.tipe === 'PEMASUKAN' ? 'text-emerald-600' : 'text-rose-600'}`}>{t.tipe === 'PEMASUKAN' ? '+' : '-'} {formatIDR(t.nominal)}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      )}

      {activeTab === 'events' && (
        <div className="flex-1 overflow-y-auto p-4 md:p-0 custom-scrollbar no-print">
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 flex flex-col h-full overflow-hidden shadow-sm">
                <div className="p-6 border-b border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50/30">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Anggaran Program Kerja</h3>
                        <p className="text-xs font-medium text-slate-500">Monitoring realisasi dana sekolah & subsidi OSIS.</p>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={exportAllEventsToExcel} className="px-4 py-2.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-emerald-100 transition-all"><FileSpreadsheet size={16}/> Download Rekap Excel</button>
                        <button onClick={() => { setModalType('new_event'); setFormData({ ...formData, prokerId: "", title: "" }); setIsModalOpen(true); }} className="px-5 py-2.5 bg-purple-600 text-white rounded-xl font-bold text-xs shadow-lg shadow-purple-500/20 transition-all active:scale-95 flex items-center gap-2"><Plus size={16}/> Alokasi Anggaran</button>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-4 tour-event-list custom-scrollbar">
                    {events.map(ev => {
                        const isExpanded = expandedProkerId === ev.id;
                        const sisa = ev.budget - ev.used;
                        const percent = ev.budget > 0 ? Math.round((ev.used / ev.budget) * 100) : 0;
                        return (
                            <div key={ev.id} className={`rounded-2xl border transition-all overflow-hidden ${isExpanded ? 'border-purple-500 ring-4 ring-purple-500/5 shadow-xl bg-slate-50/30' : 'border-slate-200 dark:border-white/5 hover:border-purple-300'}`}>
                                <div onClick={() => toggleProker(ev.id)} className={`p-5 flex items-center justify-between cursor-pointer bg-white dark:bg-white/5 ${isExpanded ? 'border-b border-slate-200' : ''}`}>
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-white/10 bg-slate-100 flex items-center justify-center">{ev.image ? <img src={ev.image} alt={ev.name} className="w-full h-full object-cover" /> : <ImageOff size={20} className="text-slate-400" />}</div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">{ev.name}</h3>
                                            <div className="flex items-center gap-3 mt-0.5"><span className="text-[10px] font-bold text-purple-600 uppercase tracking-tighter">Budget: {formatIDR(ev.budget)}</span><div className="w-1 h-1 rounded-full bg-slate-300" /><span className={`text-[10px] font-bold uppercase tracking-tighter ${sisa <= 0 ? 'text-rose-600' : 'text-emerald-600'}`}>Sisa: {formatIDR(sisa)}</span>{sisa <= 0 && ev.status !== 'DONE' && <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-[9px] font-black text-rose-500 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">OVER BUDGET!</motion.span>}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {isExpanded && ev.status !== 'DONE' && <button onClick={(e) => { e.stopPropagation(); setModalType('new_event'); setFormData({ ...formData, prokerId: ev.id, isSubsidi: true }); setIsModalOpen(true); }} className="px-3 py-1.5 bg-amber-500 text-white rounded-lg text-[9px] font-black shadow-sm flex items-center gap-1.5"><TrendingDown size={12}/> TAMBAH DANA</button>}
                                        <div className="hidden md:block w-32"><div className="w-full h-1 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${Math.min(percent, 100)}%` }} className={`h-full ${percent > 100 ? 'bg-rose-500' : 'bg-purple-500'}`} /></div></div>
                                        <ChevronDown size={20} className={`text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>
                                <AnimatePresence>{isExpanded && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                                            <div className="lg:col-span-4 p-6 border-r border-slate-200 bg-white dark:bg-[#0f172a]/50">
                                                <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-widest mb-5 flex items-center gap-2"><Receipt size={16} className="text-purple-600"/> {ev.status === 'DONE' ? 'Realisasi (Read Only)' : 'Catat Realisasi Baru'}</h4>
                                                <form onSubmit={(e) => { e.preventDefault(); handleSubmit('event_trx'); }}>
                                                    <fieldset disabled={ev.status === 'DONE'} className="space-y-4">
                                                        <div className="space-y-1.5"><label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Nama Barang / Keperluan</label><input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 outline-none text-xs font-bold dark:text-white focus:border-purple-500" placeholder="Contoh: Snack Rapat" /></div>
                                                        <div className="grid grid-cols-2 gap-3"><div className="space-y-1.5"><label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Jumlah</label><input type="number" value={formData.kuantitas} onChange={e => setFormData({...formData, kuantitas: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 outline-none text-xs font-bold dark:text-white" placeholder="1" /></div><div className="space-y-1.5"><label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Satuan</label><input type="text" value={formData.satuan} onChange={e => setFormData({...formData, satuan: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 outline-none text-xs font-bold dark:text-white" placeholder="pcs/kg/paket" /></div></div>
                                                        <div className="space-y-1.5"><label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Harga Satuan (Rp)</label><input required type="number" value={formData.hargaSatuan} onChange={e => setFormData({...formData, hargaSatuan: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 outline-none text-xs font-bold dark:text-white focus:border-purple-500" placeholder="0" /></div>
                                                        <div className="p-4 bg-purple-50 dark:bg-purple-500/10 rounded-2xl border border-purple-100 dark:border-purple-500/20"><div className="flex justify-between items-center"><span className="text-[10px] font-bold text-purple-600 uppercase">Total Pembayaran</span><span className={`text-sm font-bold ${calculatedTotal > sisaAnggaran ? 'text-rose-600' : 'text-slate-900 dark:text-white'}`}>{formatIDR(calculatedTotal)}</span></div></div>
                                                        <div className="grid grid-cols-2 gap-3"><div className="space-y-1.5"><label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Foto Fisik</label><div onClick={() => ev.status !== 'DONE' && fileInputBarang.current?.click()} className={`h-20 rounded-xl border-2 border-dashed border-slate-200 dark:border-white/10 flex items-center justify-center transition-all overflow-hidden ${ev.status !== 'DONE' ? 'cursor-pointer hover:bg-white' : ''}`}>{formData.fotoBarang ? <img src={formData.fotoBarang} className="w-full h-full object-cover" /> : <Camera size={20} className="text-slate-300"/>}</div><input type="file" ref={fileInputBarang} hidden accept="image/*" onChange={e => handleImageUpload(e, 'barang')} /></div><div className="space-y-1.5"><label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Foto Nota</label><div onClick={() => ev.status !== 'DONE' && fileInputNota.current?.click()} className={`h-20 rounded-xl border-2 border-dashed border-slate-200 dark:border-white/10 flex items-center justify-center transition-all overflow-hidden ${ev.status !== 'DONE' ? 'cursor-pointer hover:bg-white' : ''}`}>{formData.fotoNota ? <img src={formData.fotoNota} className="w-full h-full object-cover" /> : <Receipt size={20} className="text-slate-300"/>}</div><input type="file" ref={fileInputNota} hidden accept="image/*" onChange={e => handleImageUpload(e, 'nota')} /></div></div>
                                                        <button type="submit" disabled={isSubmitting || ev.status === 'DONE' || calculatedTotal <= 0} className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-[11px] shadow-lg disabled:bg-slate-400">KONFIRMASI PEMBAYARAN</button>
                                                    </fieldset>
                                                </form>
                                                <div className="mt-4 flex flex-col gap-2"><button onClick={() => { setModalType('lpj_preview'); setFormData({...formData, prokerId: ev.id}); setIsModalOpen(true); }} className="w-full py-2.5 bg-slate-100 text-slate-700 rounded-xl text-[10px] font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all"><FileDown size={14}/> EXPORT LAPORAN (PDF)</button>{ev.status !== 'DONE' && <button onClick={() => { setModalType('close_budget'); setFormData({...formData, prokerId: ev.id}); setIsModalOpen(true); }} className="w-full py-2.5 text-[10px] font-bold text-rose-500 hover:bg-rose-50 rounded-xl transition-all border border-transparent hover:border-rose-100">SELESAIKAN & TUTUP ANGGARAN</button>}</div>
                                            </div>
                                            <div className="lg:col-span-8 bg-white dark:bg-white/5 flex flex-col max-h-[500px]"><div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50"><h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2"><History size={14}/> Audit Trail Realisasi</h4><div className="flex items-center gap-3"><button onClick={() => exportEventToExcel(ev)} className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100" title="Export to Excel"><FileSpreadsheet size={14}/></button><span className="text-[10px] font-bold text-slate-400">{ev.transactions.length} Nota</span></div></div><div className="flex-1 overflow-auto custom-scrollbar-slim"><table className="w-full text-left border-collapse"><thead className="bg-slate-50 sticky top-0 z-10 border-b border-slate-100"><tr><th className="p-3 text-[9px] font-bold text-slate-400 uppercase pl-6">Tanggal</th><th className="p-3 text-[9px] font-bold text-slate-400 uppercase">Keterangan</th><th className="p-3 text-[9px] font-bold text-slate-400 uppercase text-center">Jumlah</th><th className="p-3 text-[9px] font-bold text-slate-400 uppercase text-center">Bukti</th><th className="p-3 text-[9px] font-bold text-slate-400 uppercase text-right pr-6">Nominal</th></tr></thead><tbody className="divide-y divide-slate-50">{ev.transactions.length === 0 ? ( <tr><td colSpan={5} className="p-12 text-center text-slate-300 text-[10px] font-medium italic">Belum ada pengeluaran.</td></tr> ) : ( ev.transactions.map((t:any) => ( <tr key={t.id} className="hover:bg-slate-50 transition-colors"><td className="p-3 text-[10px] font-medium text-slate-500 pl-6">{t.date}</td><td className="p-3 text-[11px] font-bold text-slate-800">{t.title}</td><td className="p-3 text-center"><span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-500 border border-slate-200">{t.kuantitas} {t.satuan}</span></td><td className="p-3"><div className="flex justify-center gap-1.5">{t.fotoBarang ? <div onClick={() => setLightboxImg(t.fotoBarang)} className="w-8 h-8 rounded border border-slate-200 cursor-zoom-in hover:scale-110 transition-all"><img src={t.fotoBarang} className="w-full h-full object-cover rounded" /></div> : null}{t.fotoNota ? <div onClick={() => setLightboxImg(t.fotoNota)} className="w-8 h-8 rounded border border-slate-200 cursor-zoom-in hover:scale-110 transition-all"><img src={t.fotoNota} className="w-full h-full object-cover rounded" /></div> : null}</div></td><td className="p-3 text-right font-bold pr-6 text-rose-500 text-[11px]">-{formatIDR(t.amount)}</td></tr> )) )}</tbody></table></div></div>
                                        </div>
                                    </motion.div>
                                )}</AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
      )}

      {/* MODAL UNIVERSAL */}
      <AnimatePresence>
        {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm no-print" />
                <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className={`relative w-full overflow-hidden border border-white/10 shadow-2xl bg-white dark:bg-[#0f172a] rounded-3xl ${modalType === 'lpj_preview' ? 'max-w-5xl' : 'max-w-md'} no-print-override`}>
                    {modalType === 'lpj_preview' && activeEvent && (
                        <div className="flex flex-col h-[90vh]">
                            <div className="p-6 border-b bg-slate-50 flex justify-between items-center no-print">
                                <div className="flex items-center gap-3"><div className="p-2 bg-purple-600 text-white rounded-lg"><FileText size={20}/></div><h2 className="text-sm font-bold uppercase tracking-tight">PDF Export Laporan</h2></div>
                                <div className="flex gap-2"><button disabled={isExporting} onClick={downloadPDF} className="px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg disabled:opacity-50">{isExporting ? <Loader2 size={16} className="animate-spin" /> : <Download size={16}/>} {isExporting ? "Memproses..." : "Download PDF"}</button><button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-200 rounded-lg"><X size={20}/></button></div>
                            </div>
                            <div className="flex-1 overflow-auto bg-slate-200 p-8 custom-scrollbar flex justify-center">
                                <div ref={lpjRef} className="bg-white p-12 w-full max-w-[800px] shadow-sm relative overflow-hidden text-black font-serif" style={{ minHeight: '1123px' }}>
                                    <div className="border-b-[3px] border-black pb-4 mb-8 flex items-center justify-between"><img src="/logos/SMK.png" alt="SMK" className="w-24 h-24 object-contain" /><div className="text-center flex-1 px-4"><h1 className="text-lg font-bold uppercase tracking-wider leading-tight text-black">PEMERINTAH DAERAH PROVINSI</h1><h2 className="text-md font-bold uppercase tracking-widest leading-tight text-black">DINAS PENDIDIKAN</h2><h2 className="text-2xl font-black my-1 tracking-wider text-black">SMK NEGERI INDONESIA</h2><p className="text-xs font-medium text-black">Jl. Pendidikan No. 1, Kota Impian, Kodepos 12345</p></div><img src="/logos/OSKA.png" alt="OSIS" className="w-24 h-24 object-contain" /></div>
                                    <div className="text-center mb-10"><h3 className="text-lg font-black uppercase tracking-widest underline underline-offset-4 mb-2 text-black">LAPORAN PERTANGGUNGJAWABAN (LPJ) KEUANGAN</h3><p className="text-sm font-bold uppercase text-black">KEGIATAN: {activeEvent.name}</p></div>
                                    <table className="w-full border-collapse border border-black mb-10 text-sm text-black"><thead className="bg-gray-100"><tr><th className="border border-black p-2 font-bold text-center w-10 text-black">NO</th><th className="border border-black p-2 font-bold text-center w-24 text-black">TANGGAL</th><th className="border border-black p-2 font-bold text-left text-black">URAIAN PENGELUARAN</th><th className="border border-black p-2 font-bold text-center w-16 text-black">VOL</th><th className="border border-black p-2 font-bold text-right w-28 text-black">HARGA SATUAN</th><th className="border border-black p-2 font-bold text-right w-32 text-black">JUMLAH (Rp)</th></tr></thead><tbody>{activeEvent.transactions.map((t:any, i:number) => ( <tr key={t.id}><td className="border border-black p-2 text-center text-black">{i+1}</td><td className="border border-black p-2 text-center text-black">{t.date}</td><td className="border border-black p-2 text-black">{t.title}</td><td className="border border-black p-2 text-center text-black">{t.kuantitas} {t.satuan}</td><td className="border border-black p-2 text-right text-black">{formatIDR(t.amount/t.kuantitas)}</td><td className="border border-black p-2 text-right font-bold text-black">{formatIDR(t.amount)}</td></tr> ))}<tr className="bg-gray-50"><td colSpan={5} className="border border-black p-2 font-bold text-right uppercase text-black">JUMLAH TOTAL PENGELUARAN</td><td className="border border-black p-2 font-bold text-right text-red-700">{formatIDR(activeEvent.used)}</td></tr><tr><td colSpan={5} className="border border-black p-2 font-bold text-right uppercase text-black">ALOKASI ANGGARAN AWAL</td><td className="border border-black p-2 font-bold text-right text-black">{formatIDR(activeEvent.budget)}</td></tr><tr className="bg-gray-200"><td colSpan={5} className="border border-black p-2 font-black text-right uppercase text-black">SISA SALDO KEPANITIAAN</td><td className="border border-black p-2 font-black text-right text-green-700">{formatIDR(activeEvent.budget - activeEvent.used)}</td></tr></tbody></table>
                                    <div className="mt-12"><h3 className="text-md font-bold uppercase border-b-2 border-black pb-2 mb-6 tracking-widest text-black">LAMPIRAN: BUKTI FISIK & NOTA BELANJA</h3><div className="grid grid-cols-2 gap-8">{activeEvent.transactions.map((t:any, i:number) => ( <div key={t.id} className="border border-black p-4" style={{ pageBreakInside: 'avoid' }}><p className="text-xs font-bold uppercase mb-3 border-b border-black pb-2 text-black">Bukti {i+1}: {t.title}</p><div className="grid grid-cols-2 gap-4"> <div className="space-y-1"><p className="text-[10px] font-bold text-center uppercase text-black">Fisik Barang</p>{t.fotoBarang ? <img src={t.fotoBarang} className="w-full h-32 object-contain border border-gray-300" /> : <div className="w-full h-32 flex items-center justify-center border border-dashed border-gray-400 text-[9px] text-gray-500">NO FOTO</div>}</div> <div className="space-y-1"><p className="text-[10px] font-bold text-center uppercase text-black">Nota / Struk</p>{t.fotoNota ? <img src={t.fotoNota} className="w-full h-32 object-contain border border-gray-300" /> : <div className="w-full h-32 flex items-center justify-center border border-dashed border-gray-400 text-[9px] text-gray-500">NO NOTA</div>}</div> </div><p className="text-right text-xs font-bold mt-4 pt-2 border-t border-black text-black">Total: {formatIDR(t.amount)}</p></div> ))}</div></div>
                                    <div className="mt-20 grid grid-cols-2 text-center text-black" style={{ pageBreakInside: 'avoid' }}><div className="space-y-24"><p className="text-sm font-bold uppercase">Mengetahui,<br/>Bendahara OSIS/MPK</p><p className="text-sm font-bold underline">( NAMA BENDAHARA )</p></div><div className="space-y-24"><p className="text-sm font-bold uppercase">Disetujui Oleh,<br/>Ketua Pelaksana</p><p className="text-sm font-bold underline">( NAMA KETUA )</p></div></div>
                                </div>
                            </div>
                        </div>
                    )}
                    {modalType !== 'lpj_preview' && (
                        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}><div className="p-6 border-b flex justify-between items-center bg-slate-50 dark:bg-white/5"><div><h2 className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-tight">{modalType === 'general_in' ? 'Pemasukan Kas' : modalType === 'general_out' ? 'Pengeluaran Kas' : modalType === 'new_ledger' ? 'Buku Kas Baru' : modalType === 'close_budget' ? 'Tutup Anggaran' : 'Alokasi Dana Kegiatan'}</h2><p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mt-0.5">{modalType === 'close_budget' ? events.find(e=>e.id===Number(formData.prokerId))?.name : currentLedger?.nama}</p></div><button type="button" onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-200 rounded-xl transition-colors"><X size={18}/></button></div><div className="p-7 space-y-5">
                            {modalType === 'new_ledger' ? ( <><div className="space-y-2"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Nama Dompet</label><input required type="text" value={formData.ledgerName} onChange={e => setFormData({...formData, ledgerName: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-xs font-bold" placeholder="Contoh: Tabungan MPK" /></div><div className="space-y-2"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Tujuan Penggunaan</label><input type="text" value={formData.ledgerDesc} onChange={e => setFormData({...formData, ledgerDesc: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-xs font-bold" placeholder="..." /></div></>
                            ) : modalType === 'new_event' ? ( <><div className="space-y-2"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Pilih Program Kerja</label><select value={formData.prokerId} onChange={e => setFormData({...formData, prokerId: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-purple-500 text-xs font-bold"><option value="">-- Buat Kegiatan Baru (Manual) --</option>{prokers.map(p => (<option key={p.id} value={p.id}>{p.nama}</option>))}</select></div>{!formData.prokerId && (<div className="space-y-2"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Nama Kegiatan</label><input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-purple-500 text-xs font-bold" placeholder="Contoh: LDKS 2026" /></div>)}<div className="space-y-2 p-4 bg-amber-50 rounded-xl border border-amber-100"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className={`p-2 rounded-lg ${formData.isSubsidi ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-400'}`}><Wallet size={16} /></div><div className="flex-1"><p className="text-[10px] font-bold text-slate-900 uppercase">Tarik dari Saldo OSIS?</p></div></div><button type="button" onClick={() => setFormData({...formData, isSubsidi: !formData.isSubsidi})} className={`w-10 h-5 rounded-full transition-all relative ${formData.isSubsidi ? 'bg-amber-500' : 'bg-slate-300'}`}><div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${formData.isSubsidi ? 'left-5.5' : 'left-0.5'}`} /></button></div>{formData.isSubsidi && (<select required value={formData.fromBukuId} onChange={e => setFormData({...formData, fromBukuId: e.target.value})} className="mt-3 w-full px-3 py-2 rounded-lg bg-white border border-amber-200 outline-none text-[10px] font-bold"><option value="">-- Pilih Sumber Saldo --</option>{ledgers.map(l => { const bal = l.transaksi.reduce((acc:any, curr:any) => curr.tipe === 'PEMASUKAN' ? acc + curr.nominal : acc - curr.nominal, 0); return (<option key={l.id} value={l.id}>{l.nama} (Sisa {formatIDR(bal)})</option>); })}</select>)}</div><div className="space-y-2"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Jumlah Anggaran (Rp)</label><input required type="number" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} className={`w-full px-4 py-3 rounded-xl bg-slate-50 border outline-none text-xs font-bold ${formData.isSubsidi && formData.fromBukuId && Number(formData.amount) > (ledgers.find(lx => lx.id === Number(formData.fromBukuId))?.transaksi.reduce((acc:any, curr:any) => curr.tipe === 'PEMASUKAN' ? acc + curr.nominal : acc - curr.nominal, 0) || 0) ? 'border-rose-500 text-rose-600' : 'border-slate-200'}`} placeholder="0" /></div></>
                            ) : modalType === 'close_budget' ? ( <div className="space-y-6"><div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center"><TrendingDown className="mx-auto mb-3 text-emerald-600" size={40}/><h4 className="text-base font-bold text-emerald-900">Sisa Anggaran: {formatIDR(sisaAnggaran)}</h4><p className="text-[11px] font-medium text-emerald-700 mt-1">Dana sisa akan dikembalikan ke dompet kas.</p></div><div className="space-y-2"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Kembalikan Saldo Ke:</label><select required value={formData.targetBukuId} onChange={e => setFormData({...formData, targetBukuId: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-emerald-500 text-xs font-bold"><option value="">-- Pilih Dompet --</option>{ledgers.map(l => (<option key={l.id} value={l.id}>{l.nama}</option>))}</select></div></div>
                            ) : ( <><div className="space-y-2"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Judul Transaksi</label><input required autoFocus type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-xs font-bold" placeholder="..." /></div><div className="space-y-2"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Nominal (Rp)</label><input required type="number" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-xs font-bold" placeholder="0" /></div><div className="grid grid-cols-2 gap-4"><div className="space-y-2"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Tanggal</label><input required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none text-[11px] font-bold" /></div><div className="space-y-2"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Kategori</label><input required type="text" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none text-[11px] font-bold" /></div></div></> )}
                        </div><div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3"><button type="button" onClick={() => setIsModalOpen(false)} disabled={isSubmitting} className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-200 transition-colors">Batal</button><button type="submit" disabled={isSubmitting || !isAllocationValid()} className="px-7 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-lg active:scale-95 disabled:opacity-50">{isSubmitting ? "MEMPROSES..." : "KONFIRMASI"}</button></div></form>
                    )}
                </motion.div>
            </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 2px !important; height: 2px !important; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar-slim::-webkit-scrollbar { width: 2px !important; height: 2px !important; }
        .custom-scrollbar-slim::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .dark .custom-scrollbar-slim::-webkit-scrollbar-thumb { background: #1e293b; }
      `}</style>
    </div>
  );
}
