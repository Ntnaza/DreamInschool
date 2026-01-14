"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { 
  Download, Printer, LayoutTemplate, AlignLeft, 
  PenTool, Sparkles, ZoomIn, ZoomOut, RefreshCcw
} from "lucide-react";
import TourGuide from "@/components/TourGuide";

// TEMPLATE OPTIONS
const templates = [
  { id: 'dispen', name: 'Dispensasi', icon: '🏃' },
  { id: 'undangan', name: 'Undangan Rapat', icon: '📅' },
  { id: 'peminjaman', name: 'Peminjaman Aset', icon: '📦' },
];

// DEFINISI LANGKAH TUR
const suratTourSteps = [
    {
        target: '.tour-magic-header',
        content: 'Selamat datang di Magic Letter! Fitur ini membantu Anda membuat surat resmi OSIS dalam hitungan detik.',
        disableBeacon: true,
    },
    {
        target: '.tour-editor-panel',
        content: 'Isi data surat di panel kiri ini. Mulai dari Nomor Surat, Perihal, hingga Isi Paragraf.',
        placement: 'right' as const,
    },
    {
        target: '.tour-preview-panel',
        content: 'Lihat hasilnya secara langsung (real-time) di panel kanan ini. Surat otomatis terformat rapi sesuai standar resmi.',
        placement: 'left' as const,
    },
    {
        target: '.tour-ttd-section',
        content: 'Jangan lupa lengkapi data penanda tangan (Ketua, Sekretaris, Pembina) di bagian bawah editor.',
    },
    {
        target: '.tour-action-toolbar',
        content: 'Sudah selesai? Gunakan tombol ini untuk Print langsung atau Download sebagai PDF.',
    },
];

export default function MagicLetterPage() {
  const [activeTemplate, setActiveTemplate] = useState('dispen');
  const [zoomLevel, setZoomLevel] = useState(0.75);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isClient, setIsClient] = useState(false); 
  const printAreaRef = useRef<HTMLDivElement>(null);

  // STATE DATA SURAT
  const [letterData, setLetterData] = useState({
    nomor: "001/OSKA/XI/2026",
    lampiran: "1 (Satu) Berkas",
    perihal: "Permohonan Dispensasi Kegiatan",
    tujuan: "Bapak/Ibu Guru Mata Pelajaran",
    tempat: "Di Tempat",
    paragraf1: "Sehubungan dengan akan diadakannya kegiatan persiapan Lomba Kompetensi Siswa (LKS) tingkat Kabupaten Cianjur tahun 2026, kami selaku pengurus OSIS memohon izin untuk meminjam siswa/siswi yang tercantum namanya di bawah ini guna mengikuti kegiatan pemusatan latihan.",
    detail: "1. Raka Aditya (XI RPL 1) - Web Technologies\n2. Nadina Putri (XI TKJ 2) - IT Network System\n3. Dimas Anggara (X DKV 1) - Graphic Design Technology",
    penutup: "Demikian surat permohonan dispensasi ini kami sampaikan. Atas perhatian, dukungan, dan izin yang Bapak/Ibu berikan, kami ucapkan terima kasih.",
    tanggal_surat: "03 Januari 2026",
    ketua: "Raka Aditya",
    nis_ketua: "2122.10.001",
    sekretaris: "Siti Aminah",
    nis_sekretaris: "2122.10.005",
    pembina: "Drs. H. Ahmad Sudrajat, M.Pd",
    nip_pembina: "19800101 200501 1 001",
    tembusan: "1. Kepala Sekolah\n2. Waka Kesiswaan\n3. Arsip"
  });

  useEffect(() => { setIsClient(true); }, []);

  const handleInput = (e: any) => {
    setLetterData({ ...letterData, [e.target.name]: e.target.value });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    if (!printAreaRef.current) return;
    setIsGenerating(true);

    try {
      const html2pdfModule = await import('html2pdf.js');
      const html2pdf = (html2pdfModule.default || html2pdfModule) as any;

      const element = printAreaRef.current;
      const clone = element.cloneNode(true) as HTMLElement;

      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.top = '-9999px';
      container.style.left = '0px'; 
      container.style.width = '210mm';
      container.style.zIndex = '-1';
      document.body.appendChild(container);
      
      clone.style.transform = 'scale(1)'; 
      clone.style.margin = '0';
      clone.style.width = '100%';
      clone.style.height = 'auto';
      
      container.appendChild(clone);

      const opt = {
        margin:       0,
        filename:     `Surat_${letterData.perihal.replace(/\s+/g, '_')}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, scrollY: 0, windowWidth: 800 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      await html2pdf().set(opt).from(clone).save();
      document.body.removeChild(container);

    } catch (error) {
      console.error("PDF Error:", error);
      alert("Gagal membuat PDF.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col xl:flex-row gap-6 font-sans">
      
      {/* GLOBAL CSS */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #94a3b8; }
        @media print {
          @page { size: A4; margin: 0; }
          body * { visibility: hidden; }
          #printable-area, #printable-area * { visibility: visible; }
          #printable-area {
            position: absolute !important; left: 0 !important; top: 0 !important;
            width: 210mm !important; height: 297mm !important;
            margin: 0 !important; padding: 20mm 25mm !important;
            transform: none !important; background: white !important; z-index: 99999;
          }
          .no-print { display: none !important; }
        }
      `}</style>

      {/* === LEFT PANEL: EDITOR === */}
      <div className="flex-1 flex flex-col gap-4 min-w-[350px] overflow-hidden no-print tour-editor-panel">
         
         {/* HEADER + TOUR GUIDE BUTTON */}
         <div className="bg-white dark:bg-[#0f172a] p-5 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm tour-magic-header flex justify-between items-center">
            <h1 className="text-xl font-bold font-black text-slate-800 dark:text-white flex items-center gap-2 uppercase tracking-wide">
               <span className="p-1.5 bg-blue-600 text-white rounded-lg"><Sparkles size={18} /></span>
               Magic Letter
            </h1>
            
            {/* TOMBOL PANDUAN PINDAH KESINI */}
            {isClient && <TourGuide steps={suratTourSteps} />}
         </div>

         {/* Form Inputs */}
         <div className="flex-1 bg-white dark:bg-[#0f172a] rounded-xl border border-slate-200 dark:border-white/5 shadow-sm overflow-y-auto custom-scrollbar">
            <div className="p-5 space-y-6">
               
               {/* 1. Header */}
               <div>
                  <h3 className="text-xs font-black text-slate-800 dark:text-white flex items-center gap-2 mb-3 pb-2 border-b border-slate-100 uppercase tracking-wider">
                     <LayoutTemplate size={14}/> Header & Tujuan
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Nomor Surat</label>
                        <input name="nomor" value={letterData.nomor} onChange={handleInput} className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs font-bold outline-none focus:border-blue-500 transition-colors" />
                     </div>
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Lampiran</label>
                        <input name="lampiran" value={letterData.lampiran} onChange={handleInput} className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs font-bold outline-none focus:border-blue-500 transition-colors" />
                     </div>
                     <div className="col-span-2 space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Perihal</label>
                        <input name="perihal" value={letterData.perihal} onChange={handleInput} className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs font-bold outline-none focus:border-blue-500 transition-colors" />
                     </div>
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Tanggal Surat</label>
                        <input name="tanggal_surat" value={letterData.tanggal_surat} onChange={handleInput} className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs font-bold outline-none focus:border-blue-500 transition-colors" />
                     </div>
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Kepada Yth.</label>
                        <input name="tujuan" value={letterData.tujuan} onChange={handleInput} className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs font-bold outline-none focus:border-blue-500 transition-colors" />
                     </div>
                  </div>
               </div>

               {/* 2. Isi */}
               <div>
                  <h3 className="text-xs font-black text-slate-800 dark:text-white flex items-center gap-2 mb-3 pb-2 border-b border-slate-100 uppercase tracking-wider">
                     <AlignLeft size={14}/> Konten Surat
                  </h3>
                  <div className="space-y-3">
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Paragraf Pembuka</label>
                        <textarea name="paragraf1" rows={5} value={letterData.paragraf1} onChange={handleInput} className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:border-blue-500 outline-none resize-none transition-colors" />
                     </div>
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Detail (List)</label>
                        <textarea name="detail" rows={6} value={letterData.detail} onChange={handleInput} className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs font-mono focus:border-blue-500 outline-none resize-none transition-colors" />
                     </div>
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Penutup</label>
                        <textarea name="penutup" rows={3} value={letterData.penutup} onChange={handleInput} className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:border-blue-500 outline-none resize-none transition-colors" />
                     </div>
                  </div>
               </div>

               {/* 3. TTD */}
               <div className="tour-ttd-section">
                  <h3 className="text-xs font-black text-slate-800 dark:text-white flex items-center gap-2 mb-3 pb-2 border-b border-slate-100 uppercase tracking-wider">
                     <PenTool size={14}/> Tanda Tangan
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Ketua OSIS</label>
                        <input name="ketua" value={letterData.ketua} onChange={handleInput} className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs font-bold" />
                     </div>
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Sekretaris</label>
                        <input name="sekretaris" value={letterData.sekretaris} onChange={handleInput} className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs font-bold" />
                     </div>
                     <div className="col-span-2 space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Pembina (Mengetahui)</label>
                        <input name="pembina" value={letterData.pembina} onChange={handleInput} className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs font-bold" />
                     </div>
                     <div className="col-span-2 space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">NIP Pembina</label>
                        <input name="nip_pembina" value={letterData.nip_pembina} onChange={handleInput} className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs font-bold" />
                     </div>
                     <div className="col-span-2 space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Tembusan</label>
                        <textarea name="tembusan" rows={3} value={letterData.tembusan} onChange={handleInput} className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs font-mono resize-none" />
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>

      {/* === RIGHT PANEL: PREVIEW === */}
      <div className="flex-[1.5] bg-slate-200 dark:bg-[#0b1121] rounded-xl border border-slate-300 dark:border-white/5 relative flex flex-col items-center overflow-hidden tour-preview-panel">
         
         <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

         {/* Toolbar */}
         <div className="w-full bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-sm p-3 border-b border-slate-200 dark:border-white/5 flex justify-between items-center z-20 absolute top-0 shadow-sm no-print tour-action-toolbar">
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-white/10 rounded-lg p-1">
                <button onClick={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.1))} className="p-1.5 hover:bg-white rounded-md text-slate-600"><ZoomOut size={14}/></button>
                <span className="text-[10px] font-bold w-8 text-center text-slate-600">{Math.round(zoomLevel * 100)}%</span>
                <button onClick={() => setZoomLevel(Math.min(1.5, zoomLevel + 0.1))} className="p-1.5 hover:bg-white rounded-md text-slate-600"><ZoomIn size={14}/></button>
                <button onClick={() => setZoomLevel(0.75)} className="p-1.5 hover:bg-white rounded-md text-slate-600 border-l border-slate-200 ml-1"><RefreshCcw size={12}/></button>
            </div>
            <div className="flex gap-2">
               <button onClick={handlePrint} className="px-4 py-2 bg-white text-slate-800 rounded-lg font-bold text-xs shadow-sm hover:shadow border border-slate-200 flex items-center gap-2 active:scale-95 transition-all">
                  <Printer size={14} /> Print
               </button>
               <button 
                  onClick={handleDownloadPDF} 
                  disabled={isGenerating}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold text-xs shadow-md hover:bg-blue-700 flex items-center gap-2 active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
               >
                  {isGenerating ? <span className="animate-spin w-3 h-3 border-2 border-white border-t-transparent rounded-full"></span> : <Download size={14} />}
                  {isGenerating ? "Proses..." : "Download PDF"}
               </button>
            </div>
         </div>

         {/* === PAPER AREA === */}
         <div className="w-full h-full overflow-y-auto p-8 pt-20 custom-scrollbar flex justify-center bg-slate-200/50 dark:bg-[#0b1121]/50">
            <div 
               id="printable-area"
               ref={printAreaRef}
               className="bg-white text-black shadow-2xl flex flex-col shrink-0 origin-top"
               style={{ 
                  width: '210mm', minHeight: '297mm', padding: '20mm 25mm',
                  fontFamily: '"Times New Roman", Times, serif',
                  transform: `scale(${zoomLevel})`, transformOrigin: 'top center', marginBottom: '100px'
               }}
            >
               {/* KOP */}
               <div className="flex items-center justify-between pb-2 mb-1 border-b-[3px] border-black border-double" style={{borderBottomStyle: 'double', borderBottomWidth: '3px'}}>
                  <div className="w-[22mm] h-[22mm] relative flex items-center justify-center">
                     <Image src="/logos/OSKA.png" alt="OSIS" width={80} height={80} className="object-contain" />
                  </div>
                  <div className="text-center flex-1 px-2 leading-tight">
                     <h3 className="text-[10pt] font-bold uppercase tracking-wider">Pemerintah Provinsi Jawa Barat</h3>
                     <h3 className="text-[10pt] font-bold uppercase tracking-wider">Dinas Pendidikan</h3>
                     <h1 className="text-[14pt] font-black uppercase tracking-wide mt-1">SMK Nurul Islam Cianjur</h1>
                     <p className="text-[9pt] italic mt-1">Jl. Raya Bandung Km 09, Karangtengah, Cianjur - Jawa Barat 43281</p>
                     <p className="text-[8pt]">Website: www.smknurulislam.sch.id | Email: osis@smknurulislam.sch.id</p>
                  </div>
                  <div className="w-[22mm] h-[22mm] relative flex items-center justify-center">
                     <Image src="/logos/SMK.png" alt="SMK" width={80} height={80} className="object-contain" />
                  </div>
               </div>
               <div className="w-full h-[1px] bg-black mb-6"></div>

               {/* BODY */}
               <div className="text-[12pt] leading-[1.5]">
                  <div className="flex justify-between items-start mb-6">
                     <table className="w-auto border-collapse">
                        <tbody>
                           <tr><td className="align-top pr-2">Nomor</td><td className="align-top text-center w-4">:</td><td className="align-top">{letterData.nomor}</td></tr>
                           <tr><td className="align-top pr-2">Lampiran</td><td className="align-top text-center w-4">:</td><td className="align-top">{letterData.lampiran}</td></tr>
                           <tr><td className="align-top pr-2">Perihal</td><td className="align-top text-center w-4">:</td><td className="align-top font-bold underline">{letterData.perihal}</td></tr>
                        </tbody>
                     </table>
                     <div className="text-right"><p>Cianjur, {letterData.tanggal_surat}</p></div>
                  </div>

                  <div className="mb-6"><p>Yth.</p><p className="font-bold">{letterData.tujuan}</p><p>{letterData.tempat}</p></div>

                  <div className="text-justify">
                     <p className="mb-3">Assalamualaikum Wr. Wb.</p>
                     <p className="mb-4 indent-[1.27cm]">{letterData.paragraf1}</p>
                     <div className="ml-[1.27cm] mb-4 whitespace-pre-wrap font-medium">{letterData.detail}</div>
                     <p className="indent-[1.27cm] mb-6">{letterData.penutup}</p>
                     <p className="mb-8">Wassalamualaikum Wr. Wb.</p>
                  </div>

                  {/* TANDA TANGAN */}
                  <div className="w-full mt-4 text-[12pt] leading-tight">
                     <div className="grid grid-cols-2 gap-4 mb-24 text-center">
                        <div><p className="mb-24">Sekretaris,</p><p className="font-bold underline uppercase">{letterData.sekretaris}</p><p>NIS. {letterData.nis_sekretaris}</p></div>
                        <div className="relative">
                           <p className="mb-24">Ketua OSIS,</p>
                           <div className="absolute top-12 left-10 w-24 h-24 opacity-70 rotate-[-12deg] mix-blend-multiply pointer-events-none print:opacity-100">
                              <Image src="/logos/OSKA.png" alt="Stempel" width={100} height={100} />
                           </div>
                           <p className="font-bold underline uppercase relative z-10">{letterData.ketua}</p><p>NIS. {letterData.nis_ketua}</p>
                        </div>
                     </div>
                     <div className="flex justify-center text-center">
                        <div className="w-[10cm]"><p className="mb-24">Mengetahui,<br/>Pembina OSIS</p><p className="font-bold underline uppercase">{letterData.pembina}</p><p>NIP. {letterData.nip_pembina}</p></div>
                     </div>
                  </div>

                  {/* TEMBUSAN */}
                  {letterData.tembusan && (
                     <div className="text-[10pt] mt-auto pt-6 leading-tight"><p className="underline mb-1 font-bold">Tembusan:</p><div className="whitespace-pre-wrap italic">{letterData.tembusan}</div></div>
                  )}
               </div>
            </div>
         </div>

      </div>
    </div>
  );
}