"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  FileText, Download, Filter, Calendar, Search, ArrowLeft,
  ChevronRight, BarChart3, PieChart, Users, CheckCircle,
  XCircle, Clock, Info, Loader2, FileSpreadsheet, MapPin
} from "lucide-react";
import { useRouter } from "next/navigation";
import { getRekapAbsensi, getDetailLaporan } from "@/lib/actions";
import * as XLSX from 'xlsx';

export default function LaporanClient() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [rekapData, setRekap] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [selectedAcara, setSelectedAcara] = useState<any | null>(null);
  const [detailData, setDetailData] = useState<any[]>([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [isDetailLoading, setIsDetailLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsClient(true);
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    setIsLoading(true);
    try {
        const res = await getRekapAbsensi();
        if (res.success) {
          setRekap(res.data);
          setFilteredData(res.data);
        }
    } catch (error) {
        console.error("Error fetch data:", error);
    } finally {
        setIsLoading(false);
    }
  };

  const handleFetchDetail = async (acara: any) => {
    // Reset data lama dulu biar gak flicker data lama
    setDetailData([]); 
    setSelectedAcara(acara);
    setIsDetailLoading(true);
    try {
        const data = await getDetailLaporan(acara.id);
        setDetailData(data || []);
    } catch (error) {
        console.error("Error fetch detail:", error);
    } finally {
        setIsDetailLoading(false);
    }
  };

  const handleExportExcel = (acara: any, details: any[]) => {
    if (!details || details.length === 0) return alert("Tidak ada data untuk di-export.");

    const fileName = `Laporan_Absensi_${acara.nama.replace(/\s+/g, '_')}.xlsx`;

    // 1. Data Utama
    const rows = details.map((d, index) => ({
      'No': index + 1,
      'Nama Pengurus': d.pengurus?.nama || "Tanpa Nama",
      'NIS/NIP': d.pengurus?.nis || "-",
      'Jabatan': d.pengurus?.jabatan || "-",
      'Divisi': d.pengurus?.divisi || "-",
      'Status': d.status,
      'Waktu Scan': new Date(d.tanggal).toLocaleTimeString('id-ID'),
      'Keterangan': d.keterangan || "-"
    }));

    // 2. Tambah Baris Kosong sebagai pemisah
    rows.push({} as any);

    // 3. Tambah Rekapitulasi di bawah
    const totalHadir = details.filter(d => d.status === 'HADIR').length;
    const totalIzin = details.filter(d => d.status === 'IZIN').length;
    const totalSakit = details.filter(d => d.status === 'SAKIT').length;
    const totalAlpa = details.filter(d => d.status === 'ALPA').length;

    rows.push({ 'Nama Pengurus': 'REKAPITULASI KEHADIRAN', 'Status': '' } as any);
    rows.push({ 'Nama Pengurus': 'Total Hadir', 'Status': totalHadir } as any);
    rows.push({ 'Nama Pengurus': 'Total Izin', 'Status': totalIzin } as any);
    rows.push({ 'Nama Pengurus': 'Total Sakit', 'Status': totalSakit } as any);
    rows.push({ 'Nama Pengurus': 'Total Alpa', 'Status': totalAlpa } as any);
    rows.push({ 'Nama Pengurus': 'Total Anggota', 'Status': details.length } as any);

    const ws = XLSX.utils.json_to_sheet(rows);

    // Atur Lebar Kolom agar rapi
    ws['!cols'] = [
      { wch: 5 },  // No
      { wch: 30 }, // Nama
      { wch: 15 }, // NIS
      { wch: 20 }, // Jabatan
      { wch: 20 }, // Divisi
      { wch: 10 }, // Status
      { wch: 15 }, // Waktu
      { wch: 25 }, // Keterangan
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Laporan");
    XLSX.writeFile(wb, fileName);
  };

  useEffect(() => {
    const filtered = rekapData.filter(a => 
      a.nama?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.lokasi?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, rekapData]);

  if (!isClient) return null;

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col gap-6 font-sans">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-2 shrink-0 px-4 md:px-0">
          <div>
             <div className="flex items-center gap-4">
                <button onClick={() => router.back()} className="p-2.5 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-xl text-slate-500 hover:text-blue-600 transition-all shadow-sm"><ArrowLeft size={20}/></button>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                   Rekapitulasi Absensi <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">📊</span>
                </h1>
             </div>
             <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Pantau dan unduh data kehadiran pengurus secara mendalam.</p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
             <div className="relative flex-1 md:w-80">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                    type="text" 
                    placeholder="Cari nama acara atau lokasi..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-2xl outline-none text-sm font-medium focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
                />
             </div>
          </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-6 overflow-hidden">
          
          {/* LEFT: EVENT LISTS (SUMMARY) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-2xl p-6 shadow-sm overflow-hidden h-full">
              <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Calendar className="text-blue-600" size={18} /> Daftar Riwayat Acara
                  </h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{filteredData.length} Acara</span>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 pr-1 custom-scrollbar">
                  {isLoading ? (
                      <div className="h-full flex items-center justify-center text-slate-400">
                          <Loader2 size={32} className="animate-spin" />
                      </div>
                  ) : filteredData.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center opacity-30">
                          <FileText size={64} strokeWidth={1} />
                          <p className="text-sm font-medium mt-2">Tidak ada data ditemukan</p>
                      </div>
                  ) : (
                      filteredData.map((acara) => (
                          <div 
                            key={acara.id} 
                            onClick={() => handleFetchDetail(acara)}
                            className={`p-5 rounded-2xl cursor-pointer transition-all border group ${selectedAcara?.id === acara.id ? 'bg-blue-50/50 dark:bg-blue-600/10 border-blue-200 dark:border-blue-500/30 shadow-md' : 'bg-transparent border-slate-100 dark:border-white/5 hover:border-blue-200 dark:hover:border-blue-500/20'}`}
                          >
                              <div className="flex justify-between items-start mb-3">
                                  <div className="min-w-0">
                                      <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate uppercase tracking-tight">{acara.nama}</h4>
                                      <p className="text-[10px] font-medium text-slate-500 mt-0.5 flex items-center gap-1"><MapPin size={12}/> {acara.lokasi}</p>
                                  </div>
                                  <div className="text-right shrink-0">
                                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{acara.persentase}%</span>
                                      <p className="text-[9px] font-medium text-slate-400 uppercase tracking-widest">Hadir</p>
                                  </div>
                              </div>
                              
                              {/* STACKED PROGRESS BAR */}
                              <div className="flex items-center gap-4">
                                  <div className="flex-1 h-2 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden flex">
                                      <motion.div 
                                        initial={{ width: 0 }} animate={{ width: `${(acara.counts.HADIR / acara.totalAnggota) * 100}%` }}
                                        className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]" 
                                      />
                                      <motion.div 
                                        initial={{ width: 0 }} animate={{ width: `${(acara.counts.IZIN / acara.totalAnggota) * 100}%` }}
                                        className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]" 
                                      />
                                      <motion.div 
                                        initial={{ width: 0 }} animate={{ width: `${(acara.counts.SAKIT / acara.totalAnggota) * 100}%` }}
                                        className="h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)]" 
                                      />
                                      <motion.div 
                                        initial={{ width: 0 }} animate={{ width: `${(acara.counts.ALPA / acara.totalAnggota) * 100}%` }}
                                        className="h-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.3)]" 
                                      />
                                  </div>
                                  <div className="text-[10px] font-bold text-slate-500 flex items-center gap-1.5 whitespace-nowrap">
                                      <Users size={12}/> {acara.counts.HADIR}/{acara.totalAnggota}
                                  </div>
                              </div>
                              
                              {/* MINI LEGEND */}
                              <div className="mt-2.5 flex flex-wrap gap-2">
                                  <div className="flex items-center gap-1 text-[8px] font-bold text-slate-400 uppercase"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {acara.counts.HADIR}</div>
                                  <div className="flex items-center gap-1 text-[8px] font-bold text-slate-400 uppercase"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {acara.counts.IZIN}</div>
                                  <div className="flex items-center gap-1 text-[8px] font-bold text-slate-400 uppercase"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> {acara.counts.SAKIT}</div>
                                  <div className="flex items-center gap-1 text-[8px] font-bold text-slate-400 uppercase"><div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> {acara.counts.ALPA}</div>
                                </div>
                          </div>
                      ))
                  )}
              </div>
          </div>

          {/* RIGHT: DETAIL TABLE & EXPORT */}
          <div className="flex-1 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-2xl shadow-sm flex flex-col overflow-hidden h-full">
              <AnimatePresence mode="wait">
                  {!selectedAcara ? (
                      <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col items-center justify-center p-12 text-center opacity-30">
                          <BarChart3 size={80} strokeWidth={1} className="mb-4" />
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tighter">Pilih Acara</h3>
                          <p className="text-sm font-medium text-slate-500">Klik salah satu acara di sebelah kiri untuk melihat rincian kehadiran.</p>
                      </motion.div>
                  ) : (
                      <motion.div key="detail" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col overflow-hidden">
                          {/* DETAIL HEADER */}
                          <div className="p-6 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50/50 dark:bg-transparent">
                              <div>
                                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight">{selectedAcara.nama}</h3>
                                  <p className="text-[10px] font-medium text-slate-500 flex items-center gap-1 mt-0.5"><Calendar size={12}/> {new Date(selectedAcara.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                              </div>
                              <button 
                                onClick={() => handleExportExcel(selectedAcara, detailData)}
                                className="px-4 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-600/20 hover:scale-105 transition-all"
                              >
                                  <FileSpreadsheet size={16} /> Excel
                              </button>
                          </div>

                          {/* STATS STRIP */}
                          <div className="grid grid-cols-4 border-b border-slate-100 dark:border-white/5">
                              <div className="p-4 border-r border-slate-100 dark:border-white/5 text-center">
                                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Hadir</p>
                                  <p className="text-xl font-bold text-emerald-600">{detailData.filter(d => d.status === 'HADIR').length}</p>
                              </div>
                              <div className="p-4 border-r border-slate-100 dark:border-white/5 text-center">
                                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Izin</p>
                                  <p className="text-xl font-bold text-blue-600">{detailData.filter(d => d.status === 'IZIN').length}</p>
                              </div>
                              <div className="p-4 border-r border-slate-100 dark:border-white/5 text-center">
                                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Sakit</p>
                                  <p className="text-xl font-bold text-amber-600">{detailData.filter(d => d.status === 'SAKIT').length}</p>
                              </div>
                              <div className="p-4 text-center">
                                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Alpa</p>
                                  <p className="text-xl font-bold text-rose-600">{detailData.filter(d => d.status === 'ALPA').length}</p>
                              </div>
                          </div>

                          {/* DATA TABLE */}
                          <div className="flex-1 overflow-y-auto custom-scrollbar">
                              {isDetailLoading ? (
                                  <div className="h-full flex items-center justify-center text-slate-400"><Loader2 size={32} className="animate-spin" /></div>
                              ) : detailData.length === 0 ? (
                                  <div className="h-full flex flex-col items-center justify-center opacity-20"><Info size={48} className="mb-2" /><p className="text-sm font-medium">Belum ada data hadir</p></div>
                              ) : (
                                  <table className="w-full text-left">
                                      <thead className="sticky top-0 bg-slate-50 dark:bg-slate-800 z-10">
                                          <tr>
                                              <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pengurus</th>
                                              <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Status</th>
                                              <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Waktu</th>
                                          </tr>
                                      </thead>
                                      <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                                          {detailData.map((item) => (
                                              <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                                                  <td className="px-6 py-4">
                                                      <div className="flex items-center gap-3">
                                                          {/* FIX: Parent MUST be relative for next/image with fill */}
                                                          <div className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0 border border-slate-100 dark:border-white/10 shadow-sm">
                                                              <Image src={item.pengurus?.fotoUrl || "https://source.unsplash.com/random/100x100/?portrait"} alt="" fill className="object-cover" />
                                                          </div>
                                                          <div className="min-w-0">
                                                              <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{item.pengurus?.nama || "Tanpa Nama"}</p>
                                                              <p className="text-[10px] font-medium text-slate-500 uppercase">{item.pengurus?.jabatan || "-"}</p>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="px-6 py-4 text-center">
                                                      <span className={`text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase ${
                                                          item.status === 'HADIR' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10' :
                                                          item.status === 'IZIN' ? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10' :
                                                          item.status === 'SAKIT' ? 'bg-amber-50 text-amber-600 dark:bg-amber-500/10' :
                                                          'bg-rose-50 text-rose-600 dark:bg-rose-500/10'
                                                      }`}>
                                                          {item.status}
                                                      </span>
                                                  </td>
                                                  <td className="px-6 py-4 text-right">
                                                      <p className="text-sm font-bold text-slate-900 dark:text-white">{new Date(item.tanggal).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</p>
                                                      <p className="text-[10px] font-medium text-slate-400">WIB</p>
                                                  </td>
                                              </tr>
                                          ))}
                                      </tbody>
                                  </table>
                              )}
                          </div>
                      </motion.div>
                  )}
              </AnimatePresence>
          </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; }
      `}</style>
    </div>
  );
}