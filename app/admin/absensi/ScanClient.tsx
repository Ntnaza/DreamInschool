"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, CheckCircle, XCircle, Clock, 
  Settings, Volume2, VolumeX, Zap, Camera, ScanFace,
  QrCode
} from "lucide-react";
import TourGuide from "@/components/TourGuide";
import { scanAbsensi } from "@/lib/actions"; // 👈 Import Action Server

// DEFINISI LANGKAH TUR
const absensiTourSteps = [
    { target: '.tour-absensi-header', content: 'Halaman Smart Attendance untuk pencatatan kehadiran.', disableBeacon: true },
    { target: '.tour-camera-viewport', content: 'Arahkan QR Code ke area ini.', },
    { target: '.tour-simulation-controls', content: 'Gunakan tombol ini untuk tes scan manual (Input NIS).', },
    { target: '.tour-stats-cards', content: 'Pantau jumlah kehadiran real-time.', placement: 'left' as const },
    { target: '.tour-live-log', content: 'Log aktivitas terbaru muncul di sini.', placement: 'left' as const },
];

export default function ScanClient() {
  const [logs, setLogs] = useState<any[]>([]);
  const [scanResult, setScanResult] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isClient, setIsClient] = useState(false); 
  
  // State untuk input manual NIS (Pengganti Kamera sementara)
  const [manualNis, setManualNis] = useState("");

  useEffect(() => { setIsClient(true); }, []);
  
  const totalHadir = logs.filter(l => l.status === 'HADIR').length;
  const duplicateLog = logs.filter(l => l.status === 'DUPLICATE').length;

  // --- LOGIC SCAN ---
  const handleScan = async (nis: string) => {
    if (!isScanning || !nis) return;
    
    // Matikan scan sementara biar gak double
    setIsScanning(false); 

    try {
        // Panggil Server Action
        const result = await scanAbsensi(nis);

        const timestamp = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

        if (result.success && result.data) {
            // Sukses
            const newLog = { 
                ...result.data, // name, role, image
                time: timestamp, 
                status: result.data.status, // HADIR / DUPLICATE
                scanId: Date.now() 
            };
            
            setScanResult({ type: 'success', data: newLog, message: result.message });
            setLogs(prev => [newLog, ...prev]);
            
            // Efek Suara (Opsional)
            if(soundEnabled) {
                const audio = new Audio('/beep.mp3'); // Pastikan ada file beep.mp3 di public folder (opsional)
                audio.play().catch(() => {}); 
            }

        } else {
            // Gagal (NIS tidak ditemukan)
            setScanResult({ type: 'error', message: result.message });
        }

    } catch (error) {
        setScanResult({ type: 'error', message: "Koneksi Error" });
    }

    // Reset Scanner setelah 2.5 detik
    setTimeout(() => { 
        setScanResult(null); 
        setIsScanning(true); 
    }, 2500);
  };

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col xl:flex-row gap-6 font-sans">
      
      {/* === LEFT PANEL: CAMERA SCANNER === */}
      <div className="w-full xl:w-auto flex flex-col gap-6 shrink-0">
         
         {/* Header Card */}
         <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm flex justify-between items-center tour-absensi-header">
            <div>
               <h1 className="text-xl font-bold font-black text-slate-900 dark:text-white flex items-center gap-3">
                  <span className="p-2 bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 rounded-lg"><ScanFace size={22}/></span>
                  Smart Attendance
               </h1>
               <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 font-bold pl-1 flex items-center gap-2">
                  Status: <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span> <span className="text-green-600 dark:text-green-400">System Ready</span>
               </p>
            </div>
            
            <div className="flex items-center gap-2">
               {isClient && <TourGuide steps={absensiTourSteps} />}
               <button onClick={() => setSoundEnabled(!soundEnabled)} className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-200 dark:border-white/10">
                  {soundEnabled ? <Volume2 size={18}/> : <VolumeX size={18}/>}
               </button>
            </div>
         </div>

         {/* CAMERA VIEWPORT */}
         <div className="w-full xl:w-[480px] aspect-square bg-[#020617] rounded-2xl relative overflow-hidden shadow-2xl border border-slate-800 group ring-1 ring-slate-900/50 tour-camera-viewport">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0a0f1e] to-slate-900 z-0"></div>
            <div className="absolute inset-0 opacity-30 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
               <div className="relative w-full h-full rounded-xl overflow-hidden backdrop-blur-sm border border-blue-500/30">
                  {/* ... (Efek Visual Scanner Tetap Sama) ... */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-blue-500 rounded-tl-lg drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-blue-500 rounded-tr-lg drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-blue-500 rounded-bl-lg drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-blue-500 rounded-br-lg drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                  {isScanning && (
                     <motion.div 
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_25px_rgba(59,130,246,1)]"
                     />
                  )}

                  <AnimatePresence>
                     {scanResult && (
                        <motion.div 
                           initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9, transition: {duration: 0.2} }}
                           className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 backdrop-blur-xl ${scanResult.type === 'success' ? 'bg-green-900/80' : 'bg-red-900/80'}`}
                        >
                           {scanResult.type === 'success' ? (
                              <>
                                 <div className="w-24 h-24 rounded-full p-1.5 bg-green-500 mb-4 shadow-xl shadow-green-500/50 ring-4 ring-green-500/30">
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white">
                                       <Image src={scanResult.data.image || "https://source.unsplash.com/random/100x100/?portrait"} alt="User" fill className="object-cover" />
                                    </div>
                                 </div>
                                 <h2 className="text-xl font-black text-white mb-1 tracking-tight">{scanResult.data.name}</h2>
                                 <p className="text-xs font-bold text-green-200 uppercase tracking-widest mb-6">{scanResult.data.role}</p>
                                 <div className="px-5 py-2 bg-white text-green-700 rounded-lg font-black text-xs flex items-center gap-2 shadow-lg">
                                    <CheckCircle size={16} strokeWidth={3} /> {scanResult.message}
                                 </div>
                              </>
                           ) : (
                              <>
                                 <div className="p-4 bg-red-500/20 rounded-full mb-4 ring-4 ring-red-500/30">
                                    <XCircle size={64} className="text-red-500" />
                                 </div>
                                 <h2 className="text-2xl font-black text-white mb-2">GAGAL SCAN</h2>
                                 <p className="text-sm text-red-200 font-medium bg-red-950/50 px-4 py-2 rounded-lg">{scanResult.message}</p>
                              </>
                           )}
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>

               <div className="absolute bottom-12 bg-[#0f172a]/80 backdrop-blur-md px-5 py-2.5 rounded-lg border border-white/10 flex items-center gap-3 shadow-lg z-20">
                  <ScanFace size={16} className="text-blue-400 animate-pulse"/>
                  <span className="text-blue-100 text-[10px] font-bold tracking-wider uppercase">Posisikan QR Code dalam Bingkai</span>
               </div>
            </div>

            {/* MANUAL INPUT (Simulasi Scanner) */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-50 p-2 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 flex gap-2 shadow-xl tour-simulation-controls w-[90%]">
               <input 
                  type="text" 
                  placeholder="Input NIS Manual (Simulasi Scan)..." 
                  className="flex-1 bg-black/50 text-white text-xs px-3 py-2 rounded-md outline-none border border-white/10 focus:border-blue-500"
                  value={manualNis}
                  onChange={(e) => setManualNis(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleScan(manualNis)}
               />
               <button onClick={() => handleScan(manualNis)} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold rounded-md shadow flex items-center gap-1">
                  <QrCode size={14}/> SCAN
               </button>
            </div>
         </div>
      </div>

      {/* === RIGHT PANEL: LIVE LOG === */}
      <div className="flex-1 flex flex-col gap-6 h-full min-w-[300px]">
         
         {/* Stats Cards */}
         <div className="grid grid-cols-2 gap-4 tour-stats-cards">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 rounded-2xl text-white shadow-xl shadow-blue-600/20 relative overflow-hidden border border-blue-500/50">
               <div className="absolute -right-4 -bottom-4 opacity-20"><User size={80} /></div>
               <p className="text-[10px] font-black uppercase opacity-80 mb-1 tracking-wider">Hadir Baru</p>
               <p className="text-4xl font-black">{totalHadir}</p>
            </div>
            <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/60 dark:shadow-none relative overflow-hidden">
               <div className="absolute -right-4 -bottom-4 opacity-5 text-slate-900 dark:text-white"><Clock size={80} /></div>
               <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase mb-1 tracking-wider">Terdeteksi Ganda</p>
               <p className="text-4xl font-black text-yellow-500">{duplicateLog}</p>
            </div>
         </div>

         {/* Log List */}
         <div className="flex-1 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 shadow-md flex flex-col overflow-hidden tour-live-log">
            <div className="p-5 border-b border-slate-100 dark:border-white/5 flex justify-between items-center bg-slate-50/80 dark:bg-white/5 backdrop-blur-sm">
               <h3 className="font-black text-sm text-slate-800 dark:text-white flex items-center gap-2 uppercase tracking-wide">
                  <Zap size={16} className="text-yellow-500" fill="currentColor"/> Live Activity
               </h3>
               <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar bg-slate-50/30 dark:bg-transparent">
               <AnimatePresence>
                  {logs.length === 0 ? (
                     <div className="h-full flex flex-col items-center justify-center text-slate-300 dark:text-slate-600">
                        <Camera size={64} strokeWidth={1.5} className="mb-4 opacity-50" />
                        <p className="text-sm font-black uppercase tracking-widest">Menunggu Scan...</p>
                     </div>
                  ) : (
                     logs.map((log) => (
                        <motion.div 
                           key={log.scanId}
                           initial={{ opacity: 0, x: 20, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                           className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all shadow-sm"
                        >
                           <div className="relative w-12 h-12 rounded-full bg-slate-200 overflow-hidden shrink-0 border-2 border-white dark:border-white/10 shadow-sm">
                              <Image src={log.image || "https://source.unsplash.com/random/100x100/?portrait"} alt={log.name} fill className="object-cover" />
                           </div>
                           <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-black text-slate-900 dark:text-white truncate">{log.name}</h4>
                              <p className="text-[10px] font-bold text-slate-500 truncate uppercase tracking-wider">{log.role}</p>
                           </div>
                           <div className="text-right">
                              <p className="text-xs font-black text-slate-800 dark:text-slate-200">{log.time}</p>
                              {log.status === 'DUPLICATE' ? (
                                 <p className="text-[9px] font-black text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-0.5 rounded-md inline-block mt-0.5 uppercase">Double</p>
                              ) : (
                                 <p className="text-[9px] font-black text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-md inline-block mt-0.5 uppercase">Hadir</p>
                              )}
                           </div>
                        </motion.div>
                     ))
                  )}
               </AnimatePresence>
            </div>
         </div>

      </div>
    </div>
  );
}