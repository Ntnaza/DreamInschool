"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
// ✅ 1. Import Actions untuk update Front (Personal) & Back (Global)
import { updateIdCardDesign, saveIdCardBackground } from "@/lib/actions"; 
import { 
  Search, Printer, ImageIcon, RefreshCw, AlertCircle, Scan, ArrowLeft, Users, 
  CheckSquare, Square, Trash2, Upload // ✅ 2. Import Upload sudah aman (ada koma)
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
  const [activeSide, setActiveSide] = useState<'front' | 'back'>('back');
  // ✅ 4. State background diisi data dari database server
  const [backBackground, setBackBackground] = useState<string | null>(initialBackImage);
  
  // STATE PRINT MODE
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [printSide, setPrintSide] = useState<'front' | 'back'>('back');

  const fileInputRefFront = useRef<HTMLInputElement>(null);
  const fileInputRefBack = useRef<HTMLInputElement>(null);

  useEffect(() => { setIsClient(true); }, []);

  const selectedMember = memberList.find(m => m.id === selectedId) || memberList[0];

  const filteredMembers = memberList.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // --- HANDLER UPLOAD DEPAN (PERSONAL) ---
  const handleFrontUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) return alert("Ukuran gambar maksimal 2MB!");

      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result as string;
        
        // Optimistic Update (Ganti tampilan langsung biar cepet)
        setMemberList(prev => prev.map(m => m.id === selectedId ? { ...m, frontDesign: base64 } : m));
        
        // Simpan ke Database (Perorangan)
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

  // --- HANDLER UPLOAD BELAKANG (GLOBAL) ---
  const handleBackBgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) return alert("Ukuran background maksimal 2MB!");

      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result as string;
        
        // Update Tampilan & Simpan ke Server (Global)
        setBackBackground(base64);
        await saveIdCardBackground(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ 5. Handler Reset Background Belakang
  const handleResetBackBg = async () => {
     if(confirm("Hapus template background belakang untuk SEMUA kartu?")) {
        setBackBackground(null);
        await saveIdCardBackground(null); // Hapus di DB Global
     }
  }

  // --- PRINT SELECT LOGIC ---
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

  // === COMPONENT: BACK CARD DESIGN ===
  const BackCardOriginal = ({ member, variant = 'preview' }: { member: any, variant?: 'preview' | 'print' }) => {
    const isPrint = variant === 'print';
    const containerRadius = isPrint ? "rounded-lg" : "rounded-[12px]";
    const boxRadius = isPrint ? "rounded-md" : "rounded-xl";
    const qrPadding = isPrint ? "p-1" : "p-2"; 
    const contentPadding = isPrint ? "p-4" : "p-6";
    const qrSize = isPrint ? "w-24 h-24" : "w-36 h-36";
    const iconSize = isPrint ? 10 : 14;
    const txtScan = isPrint ? "text-[7px]" : "text-[10px]"; 
    const txtID = isPrint ? "text-[7px]" : "text-[10px]";
    const txtHeader = isPrint ? "text-[6px]" : "text-[9px]"; 
    const txtBody = isPrint ? "text-[7px]" : "text-[10px]"; 
    const containerClass = isPrint ? `w-[54mm] h-[86mm] ${containerRadius} border border-slate-200` : "w-full h-full";

    const qrData = member.nis || member.id;

    return (
      <div className={`relative bg-white text-slate-900 flex flex-col overflow-hidden break-inside-avoid print:border-none print:shadow-none ${containerClass}`}>
         {backBackground ? (
            <div className="absolute inset-0 z-0">
               <Image src={backBackground} alt="Back BG" fill className="object-cover" />
            </div>
         ) : (
            <>
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 print-color-exact"></div>
               <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 print-color-exact"></div>
               <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </>
         )}
         <div className={`relative z-10 h-full w-full flex flex-col items-center ${contentPadding}`}>
            <div className="flex-1 flex flex-col items-center justify-center w-full">
               <div className={`bg-white ${qrPadding} ${boxRadius} shadow-md mb-2 print:shadow-none print:border print:border-slate-100`}> 
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrData}&bgcolor=ffffff`} alt="QR Code" className={`${qrSize} object-contain mix-blend-multiply`} />
               </div>
               <div className={`flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm mb-2 print:shadow-none print:border print:border-slate-100`}>
                  <Scan size={iconSize} className="text-slate-500" />
                  <p className={`${txtScan} font-bold text-slate-600 uppercase tracking-widest`}>Scan Absensi</p>
               </div>
               <div className={`px-2 py-0.5 bg-white/80 ${boxRadius} print:border print:border-slate-100`}>
                  <p className={`${txtID} font-mono text-slate-500 tracking-widest`}>{member.nis}</p>
               </div>
            </div>
            <div className={`w-[90%] bg-white/90 backdrop-blur-md p-3 ${boxRadius} shadow-sm mt-auto print:shadow-none print:border print:border-slate-100`}>
               <div className="flex items-center justify-center gap-2 mb-2 border-b border-slate-200 pb-1">
                  <AlertCircle size={iconSize} className="text-orange-500" />
                  <span className={`${txtHeader} font-black text-slate-700 uppercase`}>Emergency Contact</span>
               </div>
               <div className="space-y-1 text-center">
                  <p className={`${txtBody} font-medium text-slate-600 truncate leading-tight`}>{member.hp || "-"}</p>
                  <p className={`${txtBody} font-medium text-slate-600 truncate leading-tight`}>{member.email || "-"}</p>
               </div>
            </div>
         </div>
      </div>
    );
  };

  // === PRINT MODAL ===
  if (isPrintModalOpen) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen z-[99999] bg-slate-200 flex flex-col items-center overflow-auto animate-in fade-in">
         <style jsx global>{`
            @media print {
               @page { size: A4; margin: 0; }
               body * { visibility: hidden; }
               #print-content, #print-content * { visibility: visible; }
               #print-content { position: absolute; left: 0; top: 0; width: 210mm; height: 297mm; margin: 0; }
               .no-print { display: none !important; }
               * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            }
         `}</style>
         <div className="sticky top-4 z-50 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-slate-200 flex items-center gap-4 no-print mb-8 mt-4">
            <button onClick={() => setIsPrintModalOpen(false)} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold text-xs pr-4 border-r border-slate-200"><ArrowLeft size={16}/> Kembali</button>
            <h3 className="font-black text-slate-700 text-sm flex items-center gap-2"><Printer size={16}/> Preview Cetak ({selectedPrintIds.length} Kartu)</h3>
            <div className="flex bg-slate-100 p-1 rounded-lg">
               <button onClick={() => setPrintSide('front')} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${printSide === 'front' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}>Sisi Depan</button>
               <button onClick={() => setPrintSide('back')} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${printSide === 'back' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}>Sisi Belakang</button>
            </div>
            <button onClick={() => window.print()} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-lg transition-transform active:scale-95">Print Sekarang</button>
         </div>
         <div id="print-content" className="bg-white w-[210mm] min-h-[297mm] p-[10mm] shadow-2xl grid grid-cols-3 gap-x-[5mm] gap-y-[5mm] content-start mb-20">
            {memberList.filter(m => selectedPrintIds.includes(m.id)).map((member) => (
               <div key={member.id} className="break-inside-avoid flex justify-center">
                  {printSide === 'front' ? (
                     member.frontDesign ? (
                        <div className="w-[54mm] h-[86mm] relative border border-slate-200 rounded-lg overflow-hidden print:border-none print:rounded-none">
                           <Image src={member.frontDesign} alt="Front" fill className="object-cover" />
                        </div>
                     ) : (
                        <div className="w-[54mm] h-[86mm] bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                           <ImageIcon size={24} className="mb-2 opacity-50"/>
                           <span className="text-[10px] font-bold uppercase">No Design</span>
                           <span className="text-[8px] mt-1">{member.name}</span>
                        </div>
                     )
                  ) : (
                     <BackCardOriginal member={member} variant="print" />
                  )}
               </div>
            ))}
         </div>
      </div>
    );
  }

  // === DASHBOARD VIEW ===
  if (!selectedMember) return <div className="p-10 text-center">Belum ada data pengurus. Tambahkan dulu di menu Data Pengurus.</div>;

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col gap-6 font-sans">
       {/* === HEADER === */}
       <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-2 shrink-0">
          <div>
             <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-idcard-header">
                  ID Card Studio <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">🪪</span>
                </h1>
                {isClient && <TourGuide steps={idCardTourSteps} />}
             </div>
             <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Desain dan cetak kartu identitas pengurus dengan QR Code.</p>
          </div>
       </div>

       {/* === MAIN CONTENT === */}
       <div className="flex-1 flex flex-col md:flex-row gap-6 overflow-hidden">
           {/* LEFT: MEMBER LIST */}
           <div className="tour-member-list w-full md:w-80 flex flex-col gap-4 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-[2rem] p-4 shadow-sm h-full overflow-hidden">
               <div className="p-2 border-b border-slate-100 dark:border-white/5 pb-4">
                  <h2 className="text-lg font-black text-slate-900 dark:text-white mb-1 flex items-center gap-2"><Users className="text-blue-600" size={20} /> Daftar Anggota</h2>
                  <div className="flex justify-between items-end mt-2">
                      <p className="text-xs text-slate-500">Terpilih: <span className="font-bold text-blue-600">{selectedPrintIds.length}</span></p>
                      <button onClick={selectAllForPrint} className="text-[10px] font-bold text-slate-500 hover:text-blue-600 underline cursor-pointer">Pilih Semua</button>
                  </div>
               </div>
               <div className="relative group px-1">
                  <input type="text" placeholder="Cari anggota..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none text-xs font-bold focus:ring-2 focus:ring-blue-500/50 dark:text-white"/>
                  <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
               </div>
               <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                  {filteredMembers.map((member, index) => (
                     <div key={member.id} onClick={() => setSelectedId(member.id)} className={`w-full flex items-center gap-3 p-2.5 rounded-xl transition-all text-left cursor-pointer group border relative ${selectedId === member.id ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-500/30 shadow-sm" : "bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-white/5"}`}>
                        <div onClick={(e) => togglePrintSelect(member.id, e)} className={`shrink-0 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer p-1 ${index === 0 ? 'tour-select-checkbox' : ''}`}>
                           {selectedPrintIds.includes(member.id) ? <CheckSquare size={18} className="text-blue-600"/> : <Square size={18}/>}
                        </div>
                        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-200 dark:border-white/10">
                            <Image src={member.image || "https://source.unsplash.com/random/100x100/?student"} alt={member.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                           <h4 className={`text-xs font-bold truncate ${selectedId === member.id ? 'text-blue-700 dark:text-blue-300' : 'text-slate-700 dark:text-slate-200'}`}>{member.name}</h4>
                           <div className="flex items-center gap-2"><p className={`text-[10px] truncate ${selectedId === member.id ? 'text-blue-500 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`}>{member.role}</p>{member.frontDesign && <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>}</div>
                        </div>
                     </div>
                  ))}
               </div>
               <button onClick={() => setIsPrintModalOpen(true)} disabled={selectedPrintIds.length === 0} className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-black text-xs shadow-lg hover:shadow-xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 tour-print-btn"><Printer size={16}/> CETAK ({selectedPrintIds.length})</button>
           </div>

           {/* RIGHT: EDITOR */}
           <div className="flex-1 bg-slate-100 dark:bg-[#0b1121] rounded-[2rem] border border-slate-200 dark:border-white/5 relative overflow-hidden flex flex-col items-center justify-center p-8 shadow-inner">
               <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
               
               <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-[#1e293b] p-1 rounded-xl shadow-lg border border-slate-200 dark:border-white/10 flex gap-1 z-30 tour-side-toggle">
                  <button onClick={() => setActiveSide('front')} className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${activeSide === 'front' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5'}`}>Depan (Design)</button>
                  <button onClick={() => setActiveSide('back')} className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${activeSide === 'back' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5'}`}>Belakang (System)</button>
               </div>
               
               <div className="absolute top-6 right-6 flex flex-col gap-3 z-30">
                  {activeSide === 'front' ? (
                     <>
                        <input type="file" ref={fileInputRefFront} onChange={handleFrontUpload} accept="image/*" className="hidden" />
                        {selectedMember.frontDesign ? (
                           <div className="flex gap-2">
                              <button onClick={handleRemoveFrontDesign} className="p-2.5 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-colors shadow-sm"><Trash2 size={16} /></button>
                              <button onClick={() => fileInputRefFront.current?.click()} className="px-4 py-2.5 bg-white dark:bg-[#1e293b] rounded-xl font-bold text-xs shadow-sm hover:shadow-md transition-all flex items-center gap-2 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white"><RefreshCw size={14} /> Ganti</button>
                           </div>
                        ) : (
                           <button onClick={() => fileInputRefFront.current?.click()} className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2 active:scale-95"><Upload size={16} /> Upload Desain</button>
                        )}
                     </>
                  ) : (
                     <>
                        <input type="file" ref={fileInputRefBack} onChange={handleBackBgUpload} accept="image/*" className="hidden" />
                        <div className="flex gap-2">
                           {/* ✅ 6. Pasang Handler Reset Background */}
                           {backBackground && <button onClick={handleResetBackBg} className="p-2.5 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-colors shadow-sm" title="Reset Background"><Trash2 size={16} /></button>}
                           <button onClick={() => fileInputRefBack.current?.click()} className="px-4 py-2.5 bg-white dark:bg-[#1e293b] rounded-xl font-bold text-xs shadow-sm hover:shadow-md transition-all flex items-center gap-2 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white"><ImageIcon size={14} /> {backBackground ? "Ganti BG" : "Set BG Belakang"}</button>
                        </div>
                     </>
                  )}
               </div>

               {/* PREVIEW CARD */}
               <div className="relative w-[340px] h-[540px] mt-16 transition-all duration-500 shadow-2xl rounded-[16px] overflow-hidden bg-white text-slate-900 ring-1 ring-black/5 group font-sans tour-card-preview">
                   {activeSide === 'front' && (
                     <div className="absolute inset-0 w-full h-full bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center">
                        {selectedMember.frontDesign ? (
                           <div className="relative w-full h-full"><Image src={selectedMember.frontDesign} alt="Front Design" fill className="object-cover" /></div>
                        ) : (
                           <div onClick={() => fileInputRefFront.current?.click()} className="w-full h-full border-4 border-dashed border-slate-300 dark:border-white/10 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-200 dark:hover:bg-white/5 transition-colors cursor-pointer p-8 text-center">
                              <div className="w-16 h-16 bg-slate-200 dark:bg-white/10 rounded-full flex items-center justify-center mb-4"><ImageIcon size={24} /></div>
                              <h3 className="text-sm font-black text-slate-600 dark:text-slate-300 mb-1">Upload Desain Depan</h3>
                              <p className="text-[10px] text-slate-500">Format Portrait (54mm x 86mm)</p>
                           </div>
                        )}
                     </div>
                   )}
                   {activeSide === 'back' && <BackCardOriginal member={selectedMember} variant="preview" />}
               </div>
               <p className="text-[10px] text-slate-400 mt-8 text-center max-w-md flex items-center gap-2 justify-center"><Scan size={12} /> Format Standar ID Card (54 x 86 mm)</p>
           </div>
       </div>
    </div>
  );
}