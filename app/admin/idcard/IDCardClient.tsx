"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
// ✅ 1. Import Actions untuk update Front (Personal) & Back (Global)
import { updateIdCardDesign, saveIdCardBackground } from "@/lib/actions"; 
import { 
  Search, Printer, ImageIcon, RefreshCw, AlertCircle, Scan, ArrowLeft, Users, 
  CheckSquare, Square, Trash2, Upload, Layout, Shield
} from "lucide-react";
import TourGuide from "@/components/TourGuide";

// DEFINISI LANGKAH TUR
const idCardTourSteps = [
    { target: '.tour-idcard-header', content: 'Desain dan cetak kartu identitas pengurus.', disableBeacon: true },
    { target: '.tour-member-list', content: 'Pilih anggota untuk dipreview.', placement: 'right' as const },
    { target: '.tour-select-checkbox', content: 'Centang untuk memilih banyak kartu.', placement: 'right' as const },
    { target: '.tour-side-toggle', content: 'Ganti tampilan Depan/Belakang.', },
    { target: '.tour-card-preview', content: 'Preview hasil cetak.', },
    { target: '.tour-print-btn', content: 'Klik untuk mulai mencetak PDF.', },
];

// ✅ 3. Terima props 'initialBackImage' dari server
export default function IDCardClient({ initialMembers, initialBackImage }: { initialMembers: any[], initialBackImage: string | null }) {
  const [memberList, setMemberList] = useState(initialMembers);
  const [selectedId, setSelectedId] = useState<number>(initialMembers[0]?.id || 0);
  const [selectedPrintIds, setSelectedPrintIds] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isClient, setIsClient] = useState(false);
  
  // STATE EDITOR
  const [activeSide, setActiveSide] = useState<'front' | 'back'>('front');
  const [backBackground, setBackBackground] = useState<string | null>(initialBackImage);
  
  // STATE PRINT MODE
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [printSide, setPrintSide] = useState<'front' | 'back'>('front');

  const fileInputRefFront = useRef<HTMLInputElement>(null);
  const fileInputRefBack = useRef<HTMLInputElement>(null);

  // --- SISTEM SCALING OTOMATIS ---
  const canvasRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      if (canvasRef.current) {
        const parent = canvasRef.current.parentElement;
        if (parent) {
          const pW = parent.clientWidth - 40; 
          const pH = parent.clientHeight - 40; 
          const sW = pW / 540; 
          const sH = pH / 860; 
          setScale(Math.min(sW, sH, 1)); 
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedId, activeSide]);

  const selectedMember = memberList.find(m => m.id === selectedId) || memberList[0];

  const filteredMembers = memberList.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // --- HANDLER UPLOAD ---
  const handleFrontUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result as string;
        setMemberList(prev => prev.map(m => m.id === selectedId ? { ...m, frontDesign: base64 } : m));
        await updateIdCardDesign(selectedId, base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFrontDesign = async () => {
    if(confirm("Hapus desain kustom ini?")) {
      setMemberList(prev => prev.map(m => m.id === selectedId ? { ...m, frontDesign: null } : m));
      await updateIdCardDesign(selectedId, null);
    }
  };

  const handleBackBgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result as string;
        setBackBackground(base64);
        await saveIdCardBackground(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetBackBg = async () => {
     if(confirm("Hapus template background belakang untuk SEMUA kartu?")) {
        setBackBackground(null);
        await saveIdCardBackground(null);
     }
  }

  const togglePrintSelect = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPrintIds.includes(id)) {
      setSelectedPrintIds(selectedPrintIds.filter(pid => pid !== id));
    } else {
      setSelectedPrintIds([...selectedPrintIds, id]);
    }
  };

  const selectAllForPrint = () => {
    if (selectedPrintIds.length === filteredMembers.length) {
      setSelectedPrintIds([]);
    } else {
      setSelectedPrintIds(filteredMembers.map(m => m.id));
    }
  };

  // === COMPONENT: CARD RENDERER (UNIFIED) ===
  const CardRenderer = ({ member, side, variant = 'preview' }: { member: any, side: 'front' | 'back', variant?: 'preview' | 'print' }) => {
    const isPrint = variant === 'print';
    // MENGGABUNGKAN NAMA & NIS AGAR QR TERLIHAT LEBIH RUMIT/KOMPLEKS
    const qrData = encodeURIComponent(`${member.name} - ${member.nis || member.id}`);
    const iW = 540;
    const iH = 860;

    const content = (
      <div 
        className={`relative bg-white text-slate-900 overflow-hidden rounded-[32px] ${!isPrint ? 'shadow-2xl border border-black/5' : ''}`}
        style={{ width: iW, height: iH }}
      >
         {side === 'front' ? (
           member.frontDesign ? (
              <div className="relative w-full h-full"><Image src={member.frontDesign} alt="Front" fill className="object-cover" priority /></div>
           ) : (
              <div className="w-full h-full border-[12px] border-dashed border-slate-100 flex flex-col items-center justify-center text-slate-300 p-20 text-center">
                 <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 shadow-inner"><ImageIcon size={48} /></div>
                 <h3 className="text-2xl font-bold text-slate-400 uppercase">No Design</h3>
              </div>
           )
         ) : (
           <>
              {backBackground ? (
                 <div className="absolute inset-0 z-0"><Image src={backBackground} alt="Back BG" fill className="object-cover" /></div>
              ) : (
                 <div className="absolute inset-0 bg-slate-50 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              )}
              <div className="relative z-10 h-full w-full flex flex-col items-center justify-center p-8 gap-8">
                 {/* QR CODE - CLEAN & THIN BORDER */}
                 <div className="bg-white p-2 rounded-xl shadow-xl border border-slate-100 ring-1 ring-slate-100/50"> 
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrData}&bgcolor=ffffff`} alt="QR Code" className="w-64 h-64 object-contain mix-blend-multiply" />
                 </div>
                 
                 {/* NIS BLOCK - DARK CONTRAST & WHITE TEXT */}
                 <div className="px-6 py-2.5 bg-slate-900 rounded-xl border border-white/10 shadow-lg shrink-0">
                    <p className="text-xl font-mono font-bold text-white tracking-[0.2em] leading-none">{member.nis}</p>
                 </div>
              </div>
           </>
         )}
      </div>
    );

    if (isPrint) {
      return (
        <div className="w-[54mm] h-[86mm] overflow-hidden flex items-start justify-start border border-slate-200 rounded-[3mm] print:border-none">
           <div style={{ transform: `scale(calc(54mm / 540px))`, transformOrigin: 'top left' }}>
              {content}
           </div>
        </div>
      );
    }

    return content;
  };

  // === COMPONENT: NAV BUTTON ===
  const NavButton = ({ icon: Icon, label, onClick, active }: { 
    icon: any, label: string, onClick: () => void, active?: boolean
  }) => (
    <div className="relative group flex items-center">
      <button 
        onClick={onClick}
        className={`p-3.5 rounded-2xl transition-all duration-300 flex items-center justify-center relative overflow-hidden ${
          active 
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-110' 
            : 'bg-white dark:bg-white/5 text-slate-500 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
        }`}
      >
        <Icon size={20} />
        {active && <span className="absolute inset-0 bg-white/20 animate-pulse"></span>}
      </button>
      <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 dark:bg-blue-600 text-white text-[11px] font-bold rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap z-[100] shadow-2xl translate-x-[-10px] group-hover:translate-x-0">
        {label}
        <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 border-[6px] border-transparent border-r-slate-900 dark:border-r-blue-600"></div>
      </div>
    </div>
  );

  // === PRINT MODAL ===
  if (isPrintModalOpen) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen z-[99999] bg-slate-200 flex flex-col items-center overflow-auto animate-in fade-in duration-500">
         <style jsx global>{`
            @media print {
               @page { size: A4; margin: 0; }
               body * { visibility: hidden; }
               #print-content, #print-content * { visibility: visible; }
               #print-content { position: absolute; left: 0; top: 0; width: 210mm; height: 297mm; margin: 0; padding: 10mm; background: white; }
               .no-print { display: none !important; }
               * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            }
            .custom-scrollbar::-webkit-scrollbar { width: 4px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
            .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
         `}</style>
         <div className="sticky top-4 z-50 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-slate-200 flex items-center gap-4 no-print mb-8 mt-4">
            <button onClick={() => setIsPrintModalOpen(false)} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold text-xs pr-4 border-r border-slate-200"><ArrowLeft size={16}/> Kembali</button>
            <h3 className="font-bold text-slate-700 text-sm flex items-center gap-2"><Printer size={16}/> Preview Cetak ({selectedPrintIds.length} Kartu)</h3>
            <div className="flex bg-slate-100 p-1 rounded-lg">
               <button onClick={() => setPrintSide('front')} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${printSide === 'front' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}>Sisi Depan</button>
               <button onClick={() => setPrintSide('back')} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${printSide === 'back' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}>Sisi Belakang</button>
            </div>
            <button onClick={() => window.print()} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-lg transition-transform active:scale-95">Print Sekarang</button>
         </div>
         <div id="print-content" className="bg-white w-[210mm] min-h-[297mm] grid grid-cols-3 gap-x-[5mm] gap-y-[5mm] content-start justify-center p-[10mm]">
            {memberList.filter(m => selectedPrintIds.includes(m.id)).map((member) => (
               <div key={member.id} className="break-inside-avoid flex justify-center">
                  <CardRenderer member={member} side={printSide} variant="print" />
               </div>
            ))}
         </div>
      </div>
    );
  }

  if (!selectedMember) return <div className="p-10 text-center">Memuat data...</div>;

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col gap-6 font-sans">
       {/* HEADER */}
       <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-2 shrink-0 px-4 md:px-0">
          <div>
             <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-idcard-header">
                  ID Card Studio <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">🪪</span>
                </h1>
                {isClient && <TourGuide steps={idCardTourSteps} />}
             </div>
             <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Desain dan cetak kartu identitas pengurus dengan QR Code.</p>
          </div>
       </div>

       <div className="flex-1 flex flex-col md:flex-row gap-6 overflow-hidden">
           {/* LEFT: MEMBER LIST */}
           <div className="tour-member-list w-full md:w-80 shrink-0 flex flex-col gap-4 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-[2rem] p-4 shadow-sm h-full overflow-hidden">
               <div className="p-2 border-b border-slate-100 dark:border-white/5 pb-4">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2"><Users className="text-blue-600" size={20} /> Daftar Anggota</h2>
                  <div className="flex justify-between items-end mt-2">
                      <p className="text-xs text-slate-500 font-bold">Terpilih: <span className="text-blue-600">{selectedPrintIds.length}</span></p>
                      <button onClick={selectAllForPrint} className="text-[10px] font-bold text-slate-400 hover:text-blue-600 underline cursor-pointer">Pilih Semua</button>
                  </div>
               </div>
               <div className="relative group px-1">
                  <input type="text" placeholder="Cari anggota..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none text-xs font-bold focus:ring-4 focus:ring-blue-500/10 dark:text-white transition-all shadow-inner"/>
                  <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
               </div>
               <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                  {filteredMembers.map((member) => (
                     <div key={member.id} onClick={() => setSelectedId(member.id)} className={`w-full flex items-center gap-3 p-2.5 rounded-xl transition-all text-left cursor-pointer group border relative ${selectedId === member.id ? "bg-blue-50/50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-500/30 shadow-sm" : "bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-white/5"}`}>
                        <div onClick={(e) => togglePrintSelect(member.id, e)} className={`shrink-0 w-8 h-8 flex items-center justify-center transition-all ${selectedId === member.id || selectedPrintIds.includes(member.id) ? 'text-blue-600' : 'text-slate-300 hover:text-blue-600'}`}>
                           {selectedPrintIds.includes(member.id) ? <CheckSquare size={18} /> : <Square size={18}/>}
                        </div>
                        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-200 dark:border-white/10 shrink-0">
                            <Image src={member.image || "https://source.unsplash.com/random/100x100/?student"} alt={member.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                           <h4 className={`text-xs font-bold truncate ${selectedId === member.id ? 'text-blue-700 dark:text-blue-300' : 'text-slate-700 dark:text-slate-200'}`}>{member.name}</h4>
                           <p className={`text-[10px] font-medium truncate ${selectedId === member.id ? 'text-blue-500' : 'text-slate-400'}`}>{member.role}</p>
                        </div>
                     </div>
                  ))}
               </div>
               <button onClick={() => setIsPrintModalOpen(true)} disabled={selectedPrintIds.length === 0} className="w-full py-3.5 bg-slate-900 dark:bg-blue-600 text-white rounded-xl font-black text-xs shadow-lg transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 tour-print-btn uppercase tracking-widest"><Printer size={16}/> CETAK {selectedPrintIds.length} KARTU</button>
           </div>

           {/* RIGHT: EDITOR */}
           <div className="flex-1 relative flex flex-row items-center justify-center gap-6 overflow-hidden">
               <div className="shrink-0 flex flex-col items-center gap-6 z-40">
                  <div className="flex flex-col gap-3 p-2 bg-white/90 dark:bg-[#0f172a]/80 backdrop-blur-2xl rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl tour-side-toggle">
                     <NavButton icon={Layout} label="Sisi Depan" active={activeSide === 'front'} onClick={() => setActiveSide('front')} />
                     <NavButton icon={Shield} label="Sisi Belakang" active={activeSide === 'back'} onClick={() => setActiveSide('back')} />
                  </div>
                  <div className="flex flex-col gap-3 p-2 bg-white/90 dark:bg-[#0f172a]/80 backdrop-blur-2xl rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl">
                     {activeSide === 'front' ? (
                        <>
                           <input type="file" ref={fileInputRefFront} onChange={handleFrontUpload} accept="image/*" className="hidden" />
                           <NavButton icon={selectedMember.frontDesign ? RefreshCw : Upload} label={selectedMember.frontDesign ? "Ganti Desain" : "Upload Desain"} onClick={() => fileInputRefFront.current?.click()} />
                           {selectedMember.frontDesign && <NavButton icon={Trash2} label="Hapus Desain" onClick={handleRemoveFrontDesign} />}
                        </>
                     ) : (
                        <>
                           <input type="file" ref={fileInputRefBack} onChange={handleBackBgUpload} accept="image/*" className="hidden" />
                           <NavButton icon={ImageIcon} label={backBackground ? "Ganti BG" : "Set BG Belakang"} onClick={() => fileInputRefBack.current?.click()} />
                           {backBackground && <NavButton icon={Trash2} label="Reset Background" onClick={handleResetBackBg} />}
                        </>
                     )}
                  </div>
               </div>

               <div className="flex-1 h-full flex items-center justify-center p-4 overflow-hidden relative group">
                  <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                  <div ref={canvasRef} className="transition-all duration-700 ease-out origin-center tour-card-preview" style={{ transform: `scale(${scale})` }}>
                    <CardRenderer member={selectedMember} side={activeSide} variant="preview" />
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-50">
                     <p className="text-[10px] font-bold text-white bg-slate-900/90 dark:bg-blue-600/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-3 border border-white/20">
                        <Scan size={14} className="animate-pulse" /> Portrait 54x86 mm
                     </p>
                  </div>
               </div>
           </div>
       </div>
    </div>
  );
}
