"use client";

import { useState, useEffect, useRef, useCallback, cloneElement } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, XCircle, Clock, Zap, Maximize2,
  Calendar, Plus, ChevronDown, Target, Users, Info, Loader2, RefreshCw, X,
  ShieldCheck, AlertTriangle, ArrowLeft, History, Timer, Trash2, Edit2, Play, Square,
  Layers, Repeat, Activity, Volume2, VolumeX,
  Book, GraduationCap, Calculator, Pencil, Ruler, Atom, Brain, Library,
  UserPlus
} from "lucide-react";
import TourGuide from "@/components/TourGuide";
import { 
    scanAbsensi, createAcara, getDaftarAcara, getLogsByAcara, 
    updateStatusKehadiran, deleteAcara, updateAcara, 
    startAcaraSession, autoAlpaRemaining, inputManualAbsensi,
    getDaftarPengurus
} from "@/lib/actions"; 
import { Html5Qrcode } from "html5-qrcode";

const absensiTourSteps = [
    { target: '.tour-acara-header', content: 'Kelola sesi absensi aktif Anda di sini.', disableBeacon: true },
    { target: '.tour-session-controls', content: 'Klik START untuk mulai menerima absensi.', },
    { target: '.tour-scanner-btn', content: 'Klik di sini untuk meluncurkan mode kamera scanner.', },
];

const FloatingIcon = ({ children, delay = 0, x = 0, y = 0, size = 24, duration = 10 }: any) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
            opacity: [0.7, 1, 0.7], 
            y: [y, y - 60, y],
            x: [x, x + 20, x],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
        }}
        transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
        style={{ left: `${x}%`, top: `${y}%`, position: 'absolute' }}
        className="text-blue-600/40 dark:text-blue-400/30 pointer-events-none drop-shadow-md"
    >
        {cloneElement(children, { size })}
    </motion.div>
);

export default function ScanClient() {
  const [isClient, setIsClient] = useState(false);
  const [viewMode, setViewMode] = useState<'manage' | 'scanning'>('manage');
  
  // DATA STATES
  const [logs, setLogs] = useState<any[]>([]);
  const [daftarAcara, setDaftarAcara] = useState<any[]>([]);
  const [pengurusList, setPengurusList] = useState<any[]>([]);
  const [selectedAcaraId, setSelectedAcaraId] = useState<number | null>(null);
  const [scanResult, setScanResult] = useState<any>(null);
  
  // UI STATES
  const [isLoadingLogs, setIsLoadingLogs] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isManualModalOpen, setIsManualModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [newAcara, setNewAcara] = useState({ 
    nama: "", tanggal: new Date().toISOString().split('T')[0], 
    lokasi: "Sekolah", waktuMulai: "07:00", waktuSelesai: "15:00",
    tipe: "SEKALI_PAKAI"
  });

  const [manualInput, setManualInput] = useState({ pengurusId: "", status: "HADIR" });

  const scannerRef = useRef<Html5Qrcode | null>(null);
  const isTransitioning = useRef(false);

  const loadData = useCallback(async (autoSelectLatest = false) => {
    setIsLoadingLogs(true);
    try {
        const [list, pengurus] = await Promise.all([
            getDaftarAcara(),
            getDaftarPengurus()
        ]);
        
        setDaftarAcara(list);
        setPengurusList(pengurus);

        if (list.length > 0) {
            let targetId = selectedAcaraId;
            if (autoSelectLatest || !selectedAcaraId) { targetId = list[0].id; setSelectedAcaraId(targetId); }
            if (targetId) {
                const dbLogs = await getLogsByAcara(targetId);
                setLogs(dbLogs.map(item => ({
                    dbId: item.id,
                    name: item.pengurus.nama,
                    role: item.pengurus.jabatan,
                    image: item.pengurus.fotoUrl,
                    time: new Date(item.tanggal).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
                    status: item.status,
                    scanId: item.id
                })));
            }
        }
    } catch (err) {} finally { setIsLoadingLogs(false); }
  }, [selectedAcaraId]);

  useEffect(() => { setIsClient(true); loadData(); }, []);

  const initScanner = useCallback(async () => {
    if (!isClient || viewMode !== 'scanning' || isTransitioning.current) return;
    const checkInterval = setInterval(async () => {
        const element = document.getElementById("reader");
        if (element && !isTransitioning.current) {
            clearInterval(checkInterval);
            isTransitioning.current = true;
            try {
                if (scannerRef.current) { if (scannerRef.current.isScanning) await scannerRef.current.stop(); scannerRef.current = null; }
                const html5QrCode = new Html5Qrcode("reader");
                scannerRef.current = html5QrCode;
                await html5QrCode.start(
                    { facingMode: "environment" }, 
                    { fps: 25, qrbox: { width: 320, height: 320 }, aspectRatio: 1.0 },
                    (text) => handleScan(text), () => {}
                );
            } catch (err) {} finally { isTransitioning.current = false; }
        }
        if (attempts > 50) clearInterval(checkInterval);
    }, 150);
    let attempts = 0;
  }, [isClient, viewMode, selectedAcaraId]);

  const stopScanner = async () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    if (scannerRef.current) { if (scannerRef.current.isScanning) await scannerRef.current.stop(); scannerRef.current = null; }
    isTransitioning.current = false;
  };

  useEffect(() => {
    if (viewMode === 'scanning') initScanner();
    else stopScanner();
    return () => { stopScanner(); };
  }, [viewMode, initScanner]);

  const handleScan = async (nis: string) => {
    if (!nis || scanResult || !selectedAcaraId) return;
    if (soundEnabled) new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3').play().catch(() => {});
    try {
        const result = await scanAbsensi(nis, selectedAcaraId);
        if (result.success && result.data) {
            const timestamp = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
            setScanResult({ type: 'success', data: { ...result.data, time: timestamp }, message: result.message });
            loadData(); 
        } else { setScanResult({ type: 'error', message: result.message }); }
    } catch (err) { setScanResult({ type: 'error', message: "Koneksi Bermasalah" }); }
    setTimeout(() => { setScanResult(null); }, 2500);
  };

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAcaraId || !manualInput.pengurusId) return;
    const res = await inputManualAbsensi(selectedAcaraId, Number(manualInput.pengurusId), manualInput.status);
    if (res.success) {
        setIsManualModalOpen(false);
        setManualInput({ pengurusId: "", status: "HADIR" });
        loadData();
    }
  };

  const handleCloseSession = async () => {
    if (!selectedAcaraId) return;
    if (confirm("Tutup sesi sekarang? Pengurus yang tidak scan atau izin akan otomatis dianggap ALPA.")) {
        setIsSubmitting(true);
        const res = await autoAlpaRemaining(selectedAcaraId);
        if (res.success) {
            alert(`Sesi ditutup! ${res.count} pengurus otomatis dianggap ALPA.`);
            loadData();
        }
        setIsSubmitting(false);
    }
  };

  const handleCreateOrUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    Object.entries(newAcara).forEach(([key, val]) => formData.append(key, val));
    const res = modalMode === 'create' ? await createAcara(formData) : await updateAcara(selectedAcaraId!, formData);
    if (res.success) { setIsModalOpen(false); loadData(modalMode === 'create'); }
    setIsSubmitting(false);
  };

  const handleStartSession = async () => { if(selectedAcaraId) await startAcaraSession(selectedAcaraId).then(loadData); };
  const handleUpdateStatus = async (absensiId: number, status: string) => { await updateStatusKehadiran(absensiId, status).then(loadData); };

  const selectedAcara = daftarAcara.find(a => a.id === selectedAcaraId);

  const renderManagement = () => (
    <div className="flex-1 flex flex-col lg:flex-row gap-6 overflow-hidden h-full px-4 md:px-0">
        <div className="w-full lg:w-80 shrink-0 flex flex-col gap-4 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-2xl p-5 shadow-sm overflow-hidden h-full">
            <div className="flex justify-between items-center px-1 mb-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2"><History className="text-blue-600" size={18} /> Sesi Acara</h3>
                <button onClick={() => { setModalMode('create'); setIsModalOpen(true); }} className="p-1.5 bg-blue-600 text-white rounded-lg hover:scale-105 active:scale-95 transition-all shadow-sm"><Plus size={14} strokeWidth={3} /></button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-3 pr-1 custom-scrollbar">
                {daftarAcara.map((acara) => (
                    <div key={acara.id} onClick={() => setSelectedAcaraId(acara.id)} className={`p-4 rounded-xl cursor-pointer transition-all border group relative ${selectedAcaraId === acara.id ? 'bg-blue-600 text-white border-blue-400 shadow-md' : 'bg-transparent text-slate-600 dark:text-slate-400 border-transparent hover:bg-slate-50 dark:hover:bg-white/5'}`}>
                        <div className="flex justify-between items-start mb-3">
                            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md uppercase tracking-wide ${selectedAcaraId === acara.id ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-white/5 text-slate-500'}`}>{acara.tipe?.replace('_', ' ') || 'SEKALI PAKAI'}</span>
                            <div className={`flex gap-1.5 transition-all ${selectedAcaraId === acara.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                <button onClick={(e) => { e.stopPropagation(); setModalMode('edit'); setNewAcara({ nama: acara.nama, tanggal: new Date(acara.tanggal).toISOString().split('T')[0], lokasi: acara.lokasi, waktuMulai: acara.waktuMulai ? new Date(acara.waktuMulai).toTimeString().slice(0,5) : "07:00", waktuSelesai: acara.waktuSelesai ? new Date(acara.waktuSelesai).toTimeString().slice(0,5) : "15:00", tipe: acara.tipe || "SEKALI_PAKAI" }); setSelectedAcaraId(acara.id); setIsModalOpen(true); }} className={`p-1.5 rounded-lg ${selectedAcaraId === acara.id ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-500'}`}><Edit2 size={12}/></button>
                                <button onClick={(e) => { e.stopPropagation(); if(confirm("Hapus?")) deleteAcara(acara.id).then(() => loadData(true)); }} className={`p-1.5 rounded-lg ${selectedAcaraId === acara.id ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-red-50 hover:bg-red-100 text-red-500'}`}><Trash2 size={12}/></button>
                            </div>
                        </div>
                        <h4 className={`text-sm font-bold truncate mb-2 ${selectedAcaraId === acara.id ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{acara.nama}</h4>
                        <div className="flex justify-between items-center mt-3">
                            <p className={`text-sm font-medium flex items-center gap-1.5 ${selectedAcaraId === acara.id ? 'text-blue-100' : 'text-slate-500'}`}><Calendar size={14} /> {new Date(acara.tanggal).toLocaleDateString('id-ID')}</p>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${acara.status === 'ONGOING' ? 'bg-green-500 text-white' : acara.status === 'COMPLETED' ? (selectedAcaraId === acara.id ? 'bg-white/30 text-white' : 'bg-slate-400 text-white') : (selectedAcaraId === acara.id ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600')}`}>{acara.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-[#0f172a] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm flex flex-col justify-center">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Total Hadir</p>
                    <div className="flex items-baseline gap-2"><span className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">{logs.filter(l => l.status === 'HADIR').length}</span><span className="text-sm font-medium text-slate-400">Anggota</span></div>
                </div>
                <div className="md:col-span-2 flex gap-4 tour-session-controls">
                    {!selectedAcara || selectedAcara.status === 'UPCOMING' || (selectedAcara.status === 'COMPLETED' && selectedAcara.tipe === 'RUTINAN') ? (
                        <button onClick={handleStartSession} disabled={!selectedAcara} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 active:scale-95 disabled:opacity-50"><Play fill="currentColor" size={24} /><span className="text-sm font-bold uppercase tracking-widest">{selectedAcara?.status === 'COMPLETED' ? 'Open Session Again' : 'Start Session Now'}</span></button>
                    ) : selectedAcara.status === 'ONGOING' ? (
                        <>
                            <button onClick={() => setViewMode('scanning')} className="flex-[2] bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-white shadow-xl flex items-center justify-between cursor-pointer hover:brightness-110 group tour-scanner-btn"><div className="flex items-center gap-5"><div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md"><Maximize2 size={24} /></div><div><h4 className="text-xl font-bold tracking-tight uppercase">Launch Scanner</h4><p className="text-sm font-medium opacity-70">Session is Active</p></div></div><div className="p-2 bg-white/10 rounded-lg group-hover:translate-x-1 transition-transform"><ChevronDown size={20} className="-rotate-90" /></div></button>
                            <div className="flex flex-col gap-2">
                                <button onClick={() => setIsManualModalOpen(true)} className="flex-1 px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl shadow-md flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all"><UserPlus size={16}/> Izin/Sakit</button>
                                <button onClick={handleCloseSession} className="flex-1 px-4 bg-rose-600 hover:bg-rose-700 text-white rounded-xl shadow-md flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all"><Square fill="currentColor" size={16}/> End Session</button>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl flex items-center justify-center text-slate-400 font-bold text-sm uppercase tracking-widest">Session Completed</div>
                    )}
                </div>
            </div>
            <div className="flex-1 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm flex flex-col overflow-hidden tour-activity-stream">
                <div className="p-5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50/50 dark:bg-transparent"><h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-3"><Activity size={18} className="text-blue-600" /> Activity Stream {isLoadingLogs && <Loader2 size={14} className="animate-spin text-blue-500" />}</h3>{selectedAcara?.waktuMulaiAktual && (<div className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-md flex items-center gap-1.5"><Timer size={14}/> Started at {new Date(selectedAcara.waktuMulaiAktual).toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'})}</div>)}</div>
                <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                    <AnimatePresence mode="popLayout">{logs.length === 0 ? (<div className="h-full flex flex-col items-center justify-center opacity-20 text-center"><History size={48} className="mb-3 mx-auto" /><p className="text-sm font-medium text-slate-500">Belum ada aktivitas yang tercatat</p></div>) : (logs.map((log) => (
                        <motion.div key={log.scanId} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-sm group"><div className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0 shadow-sm border border-slate-100 dark:border-white/10"><Image src={log.image || "https://source.unsplash.com/random/100x100/?portrait"} alt={log.name} fill className="object-cover" /></div><div className="flex-1 min-w-0"><h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">{log.name}</h4><p className="text-sm font-medium text-slate-500">{log.role}</p></div><div className="flex items-center gap-3"><select value={log.status} onChange={(e) => handleUpdateStatus(log.dbId, e.target.value)} className={`text-xs font-bold px-3 py-1.5 rounded-lg outline-none border transition-all ${log.status === 'HADIR' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : log.status === 'IZIN' ? 'bg-blue-50 text-blue-600 border-blue-100' : log.status === 'SAKIT' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-rose-50 text-rose-600 border-rose-100'}`}><option value="HADIR">HADIR</option><option value="IZIN">IZIN</option><option value="SAKIT">SAKIT</option><option value="ALPA">ALPA</option></select><div className="text-right min-w-[60px]"><p className="text-sm font-medium text-slate-400">{log.time}</p></div></div></motion.div>
                    )))}</AnimatePresence>
                </div>
            </div>
        </div>
    </div>
  );

  const renderScannerPortal = () => {
    if (!isClient || viewMode !== 'scanning') return null;
    return createPortal(
        <div className="fixed inset-0 z-[999999] bg-white dark:bg-[#020617] flex flex-col items-center justify-center p-6 overflow-hidden">
            <style jsx global>{` body { overflow: hidden !important; } #reader { border: none !important; } #reader__scan_region { border: none !important; } #reader__scan_region > div { border: none !important; box-shadow: none !important; opacity: 0 !important; } #reader__dashboard { display: none !important; } video { border-radius: 2rem !important; } `}</style>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <FloatingIcon x={15} y={15} size={48} duration={12} delay={0}><Pencil /></FloatingIcon>
                <FloatingIcon x={80} y={20} size={52} duration={15} delay={1}><Book /></FloatingIcon>
                <FloatingIcon x={10} y={70} size={42} duration={10} delay={2}><Ruler /></FloatingIcon>
                <FloatingIcon x={85} y={75} size={64} duration={18} delay={3}><GraduationCap /></FloatingIcon>
                <FloatingIcon x={50} y={8} size={38} duration={11} delay={4}><Calculator /></FloatingIcon>
                <FloatingIcon x={5} y={45} size={50} duration={14} delay={5}><Atom /></FloatingIcon>
                <FloatingIcon x={92} y={50} size={46} duration={13} delay={0.5}><Brain /></FloatingIcon>
                <FloatingIcon x={45} y={85} size={44} duration={16} delay={1.5}><Library /></FloatingIcon>
            </div>
            <div className="absolute top-8 left-0 w-full px-10 flex justify-between items-center z-[1000]">
                <button onClick={() => setViewMode('manage')} className="p-4 bg-white dark:bg-slate-900 shadow-2xl rounded-2xl border border-slate-200 dark:border-white/10 flex items-center gap-3 font-bold text-sm text-slate-600 dark:text-slate-300 hover:scale-105 active:scale-95 transition-all shadow-blue-500/10"><ArrowLeft size={20} /> Back</button>
                <div className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-xl font-bold text-sm uppercase tracking-widest flex items-center gap-3"><Target size={18} className="animate-pulse" /> {selectedAcara?.nama}</div>
            </div>
            <div className="relative w-full max-w-[500px] aspect-square group">
                <div className="absolute inset-[-40px] bg-blue-500/10 blur-[100px] rounded-full opacity-60"></div>
                <div className="w-full h-full relative rounded-[3rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.2)] dark:shadow-[0_40px_120px_rgba(0,0,0,0.8)] bg-black">
                    <div id="reader" className="absolute inset-0 z-0 [&>video]:object-cover [&>video]:h-full [&>video]:w-full overflow-hidden" style={{ transform: 'scaleX(-1)' }}></div>
                    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                        <div className="relative w-[320px] h-[320px] shadow-[0_0_0_2000px_rgba(0,0,0,0.7)] rounded-none border-none">
                            <div className="absolute -top-1 -left-1 w-16 h-16 border-t-[6px] border-l-[6px] border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>
                            <div className="absolute -top-1 -right-1 w-16 h-16 border-t-[6px] border-r-[6px] border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>
                            <div className="absolute -bottom-1 -left-1 w-16 h-16 border-b-[6px] border-l-[6px] border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>
                            <div className="absolute -bottom-1 -right-1 w-16 h-16 border-b-[6px] border-r-[6px] border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>
                            {!scanResult && <motion.div animate={{ top: ["5%", "95%", "5%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} className="absolute left-[5%] w-[90%] h-1.5 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_30px_rgba(255,255,255,1)]"/>}
                            <AnimatePresence>{scanResult && scanResult.data && (
                                <motion.div initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 1.1 }} className={`absolute inset-[-40px] flex flex-col items-center justify-center text-center p-8 backdrop-blur-[100px] rounded-[3rem] z-50 pointer-events-auto border-4 shadow-2xl ${scanResult.type === 'success' ? (scanResult.data.status === 'DUPLICATE' ? 'bg-amber-500/95 border-amber-400/50' : 'bg-emerald-500/95 border-emerald-400/50') : 'bg-rose-600/95 border-rose-400/50'}`}>
                                    <div className="relative mb-6">
                                        <div className="w-40 h-40 rounded-full p-1.5 bg-white shadow-2xl ring-8 ring-white/20"><div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white"><Image src={scanResult.data.image || "https://source.unsplash.com/random/100x100/?portrait"} alt="" fill className="object-cover" /></div></div>
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className={`absolute -bottom-1 -right-1 p-2.5 rounded-full shadow-xl border-4 border-white ${scanResult.data.status === 'DUPLICATE' ? 'bg-amber-600' : 'bg-emerald-600'}`}>{scanResult.data.status === 'DUPLICATE' ? <Clock className="text-white" size={24} /> : <CheckCircle className="text-white" size={24} />}</motion.div>
                                    </div>
                                    <h2 className="text-3xl font-black text-white mb-1 tracking-tight leading-tight">{scanResult.data.name}</h2>
                                    <p className="text-xs font-bold text-white/80 uppercase tracking-[0.3em] mb-8">{scanResult.data.role}</p>
                                    <div className="px-8 py-4 bg-white rounded-2xl shadow-xl flex flex-col items-center gap-0.5"><span className={`text-xs font-black uppercase tracking-widest ${scanResult.data.status === 'DUPLICATE' ? 'text-amber-700' : 'text-emerald-700'}`}>{scanResult.message}</span><span className="text-[9px] font-bold text-slate-400 tracking-widest">{scanResult.data.time}</span></div>
                                </motion.div>
                            )}</AnimatePresence>
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-20 left-0 w-full text-center">
                    <div className="inline-flex items-center gap-4 px-8 py-4 bg-white dark:bg-slate-900 shadow-2xl rounded-full border border-slate-100 dark:border-white/5 transition-all"><div className="flex h-3 w-3 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span></div><span className="text-xs font-black text-slate-600 dark:text-blue-400 uppercase tracking-[0.4em]">Intelligence Scanner Active</span></div>
                </div>
            </div>
        </div>,
        document.body
    );
  };

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col gap-6 font-sans relative px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-2 shrink-0">
          <div>
             <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">Smart Attendance <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">⚡</span></h1>
                {isClient && <TourGuide steps={absensiTourSteps} />}
             </div>
             <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Kelola kehadiran organisasi secara efisien dan real-time.</p>
          </div>
          <div className="flex items-center gap-3">
             <button onClick={() => setSoundEnabled(!soundEnabled)} className="p-3 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-xl text-slate-500 hover:text-blue-600 shadow-sm transition-all">{soundEnabled ? <Volume2 size={18}/> : <VolumeX size={18}/>}</button>
          </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === 'manage' && <motion.div key="manage" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 overflow-hidden">{renderManagement()}</motion.div>}
      </AnimatePresence>

      {isClient && renderScannerPortal()}

      {/* MODAL MANUAL INPUT */}
      <AnimatePresence>
        {isManualModalOpen && (
            <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 backdrop-blur-md">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsManualModalOpen(false)} className="absolute inset-0 bg-slate-900/70" />
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-md bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                    <div className="p-10">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight uppercase">Input Izin / Sakit</h2>
                            <button onClick={() => setIsManualModalOpen(false)} className="p-2 bg-slate-100 dark:bg-white/5 rounded-lg transition-all"><X size={20}/></button>
                        </div>
                        <form onSubmit={handleManualSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-500">Pilih Pengurus</label>
                                <select required value={manualInput.pengurusId} onChange={e => setManualInput({...manualInput, pengurusId: e.target.value})} className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/5">
                                    <option value="">-- Pilih Nama --</option>
                                    {pengurusList.map(p => (
                                        <option key={p.id} value={p.id}>{p.nama} ({p.jabatan})</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-500">Status Kehadiran</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button type="button" onClick={() => setManualInput({...manualInput, status: 'IZIN'})} className={`py-3 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${manualInput.status === 'IZIN' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-50 dark:bg-slate-800 text-slate-500'}`}>IZIN</button>
                                    <button type="button" onClick={() => setManualInput({...manualInput, status: 'SAKIT'})} className={`py-3 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${manualInput.status === 'SAKIT' ? 'bg-amber-500 text-white shadow-md' : 'bg-slate-50 dark:bg-slate-800 text-slate-500'}`}>SAKIT</button>
                                </div>
                            </div>
                            <button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-95 transition-all">Simpan Status</button>
                        </form>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>

      {/* MODAL CREATE/EDIT */}
      <AnimatePresence>
        {isModalOpen && (
            <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 backdrop-blur-md">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-slate-900/70" />
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-lg bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                    <div className="p-10">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight uppercase flex items-center gap-3">{modalMode === 'create' ? <Plus className="text-blue-600" /> : <Edit2 className="text-blue-600" />} {modalMode === 'create' ? 'Tambah Sesi Acara' : 'Edit Sesi Acara'}</h2>
                            <button onClick={() => setIsModalOpen(false)} className="p-2 bg-slate-100 dark:bg-white/5 rounded-lg hover:bg-rose-500 hover:text-white transition-all"><X size={20}/></button>
                        </div>
                        <form onSubmit={handleCreateOrUpdate} className="space-y-5">
                            <div className="space-y-2"><label className="text-sm font-medium text-slate-500">Nama Kegiatan</label><input required value={newAcara.nama} onChange={e => setNewAcara({...newAcara, nama: e.target.value})} type="text" placeholder="e.g. Rapat Koordinasi" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/5 focus:border-blue-500 transition-all shadow-inner" /></div>
                            <div className="space-y-2"><label className="text-sm font-medium text-slate-500">Tipe Absensi</label><div className="grid grid-cols-2 gap-3"><button type="button" onClick={() => setNewAcara({...newAcara, tipe: 'SEKALI_PAKAI'})} className={`py-3 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${newAcara.tipe === 'SEKALI_PAKAI' ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-white/5 text-slate-500'}`}><Layers size={14}/> Sekali Pakai</button><button type="button" onClick={() => setNewAcara({...newAcara, tipe: 'RUTINAN'})} className={`py-3 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${newAcara.tipe === 'RUTINAN' ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-white/5 text-slate-500'}`}><Repeat size={14}/> Rutinan</button></div></div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2"><label className="text-sm font-medium text-slate-500">Jam Mulai</label><input required value={newAcara.waktuMulai} onChange={e => setNewAcara({...newAcara, waktuMulai: e.target.value})} type="time" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/5 focus:border-blue-500 transition-all shadow-inner" /></div>
                                <div className="space-y-2"><label className="text-sm font-medium text-slate-500">Jam Selesai</label><input required value={newAcara.waktuSelesai} onChange={e => setNewAcara({...newAcara, waktuSelesai: e.target.value})} type="time" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/10 focus:border-blue-500 transition-all shadow-inner" /></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2"><label className="text-sm font-medium text-slate-500">Tanggal</label><input required value={newAcara.tanggal} onChange={e => setNewAcara({...newAcara, tanggal: e.target.value})} type="date" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/10 focus:border-blue-500 transition-all shadow-inner" /></div>
                                <div className="space-y-2"><label className="text-sm font-medium text-slate-500">Lokasi</label><input required value={newAcara.lokasi} onChange={e => setNewAcara({...newAcara, lokasi: e.target.value})} type="text" placeholder="Location" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/10 focus:border-blue-500 transition-all shadow-inner" /></div>
                            </div>
                            <button disabled={isSubmitting} type="submit" className="w-full mt-4 py-5 bg-blue-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-95 transition-all">{isSubmitting ? "Processing..." : (modalMode === 'create' ? 'Create Event Session' : 'Save Changes')}</button>
                        </form>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; }
      `}</style>
    </div>
  );
}