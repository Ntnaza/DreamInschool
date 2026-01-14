"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wallet, ArrowUpCircle, ArrowDownCircle, Search, 
  Plus, Filter, X, Target
} from "lucide-react";
import TourGuide from "@/components/TourGuide";
// Import Action Server
import { createGeneralTrx, createEventBudget, createEventTrx } from "@/lib/actions";

// DEFINISI LANGKAH TUR (Sama kayak punya Koh)
const kasTourSteps = [
    { target: '.tour-kas-header', content: 'Pusat pengelolaan dana organisasi.', disableBeacon: true },
    { target: '.tour-tab-switcher', content: 'Pindah antara Kas Umum & Anggaran Event.' },
    { target: '.tour-stats-bar', content: 'Pantau Saldo & Arus Kas real-time.', placement: 'bottom' as const },
    { target: '.tour-trx-buttons', content: 'Catat transaksi baru.', },
    { target: '.tour-trx-table', content: 'Riwayat transaksi tercatat di sini.', },
];

const formatIDR = (val: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(val);

// Props dari Server
export default function KeuanganClient({ generalTrx, events }: { generalTrx: any[], events: any[] }) {
  const [activeTab, setActiveTab] = useState<'general' | 'events'>('general');
  const [isClient, setIsClient] = useState(false); 
  
  // STATE MODAL & FORM
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'general_in' | 'general_out' | 'new_event' | 'event_trx'>('general_in');
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<any>({ title: "", amount: "", date: "", category: "", pic: "" });

  useEffect(() => { setIsClient(true); }, []);

  // HITUNG SALDO KAS UMUM (Client Side Calculation)
  const totalMasuk = generalTrx.filter(t => t.type === 'PEMASUKAN').reduce((acc, curr) => acc + curr.amount, 0);
  const totalKeluar = generalTrx.filter(t => t.type === 'PENGELUARAN').reduce((acc, curr) => acc + curr.amount, 0);
  const saldoUmum = totalMasuk - totalKeluar;

  // --- ACTIONS ---
  const handleOpenGeneralModal = (type: 'in' | 'out') => {
    setModalType(type === 'in' ? 'general_in' : 'general_out');
    setFormData({ title: "", amount: "", date: new Date().toISOString().split('T')[0], category: "Umum", pic: "" });
    setIsModalOpen(true);
  };

  const handleOpenNewEventModal = () => {
    setModalType('new_event');
    setFormData({ title: "", amount: "", date: new Date().toISOString().split('T')[0] }); 
    setIsModalOpen(true);
  };

  const handleOpenEventTrxModal = (eventId: number) => {
    setSelectedEventId(eventId);
    setModalType('event_trx');
    setFormData({ title: "", amount: "", date: new Date().toISOString().split('T')[0] });
    setIsModalOpen(true);
  };

  // --- SUBMIT HANDLER (TERKONEKSI DB) ---
  const handleSubmit = async () => {
    if (!formData.title || !formData.amount) return alert("Data tidak lengkap!");
    setIsSubmitting(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("amount", formData.amount);
    data.append("date", formData.date);

    let result;

    try {
        if (modalType === 'general_in' || modalType === 'general_out') {
            data.append("type", modalType === 'general_in' ? "PEMASUKAN" : "PENGELUARAN");
            data.append("category", formData.category);
            data.append("pic", formData.pic || "Admin");
            result = await createGeneralTrx(data);
        } 
        else if (modalType === 'new_event') {
            if(Number(formData.amount) > saldoUmum) {
                setIsSubmitting(false);
                return alert("Saldo Kas Umum tidak cukup!");
            }
            result = await createEventBudget(data);
        } 
        else if (modalType === 'event_trx' && selectedEventId) {
            data.append("eventId", selectedEventId.toString());
            result = await createEventTrx(data);
        }

        if (result?.success) {
            alert(result.message);
            setIsModalOpen(false);
            window.location.reload(); 
        } else {
            alert("Gagal: " + result?.message);
        }
    } catch (e) {
        console.error(e);
        alert("Terjadi kesalahan.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col gap-6 font-sans">
      
      {/* HEADER & TABS (Sama persis dengan kode Koh) */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 shrink-0">
         <div>
            <div className="flex items-center gap-4 mb-1">
               <h1 className="text-3xl font-black font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-kas-header">
                  Keuangan OSIS <span className="text-2xl p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">💰</span>
               </h1>
               {isClient && <TourGuide steps={kasTourSteps} />}
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Kelola Kas Umum dan Anggaran Kegiatan.</p>
         </div>
         
         <div className="flex bg-slate-100 dark:bg-[#1e293b] p-1 rounded-xl border border-slate-200 dark:border-white/10 tour-tab-switcher">
            <button onClick={() => setActiveTab('general')} className={`px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'general' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}>Buku Kas Umum</button>
            <button onClick={() => setActiveTab('events')} className={`px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'events' ? 'bg-white dark:bg-slate-700 text-purple-600 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}>Anggaran Event</button>
         </div>
      </div>

      <div className="flex-1 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm overflow-hidden flex flex-col">
         
         {/* TAB 1: KAS UMUM */}
         {activeTab === 'general' && (
            <>
               <div className="p-6 border-b border-slate-100 dark:border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50/50 dark:bg-white/5 tour-stats-bar">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-xl"><Wallet size={24}/></div>
                     <div><p className="text-[10px] uppercase font-bold text-slate-500">Saldo Akhir</p><h2 className="text-2xl font-black text-slate-800 dark:text-white">{formatIDR(saldoUmum)}</h2></div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-xl"><ArrowUpCircle size={24}/></div>
                     <div><p className="text-[10px] uppercase font-bold text-slate-500">Pemasukan</p><h2 className="text-xl font-bold text-green-600">{formatIDR(totalMasuk)}</h2></div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 rounded-xl"><ArrowDownCircle size={24}/></div>
                     <div><p className="text-[10px] uppercase font-bold text-slate-500">Pengeluaran</p><h2 className="text-xl font-bold text-red-600">{formatIDR(totalKeluar)}</h2></div>
                  </div>
               </div>

               <div className="px-6 py-4 flex justify-between items-center border-b border-slate-100 dark:border-white/5">
                  <h3 className="font-bold text-slate-700 dark:text-white">Riwayat Transaksi</h3>
                  <div className="flex gap-2 tour-trx-buttons">
                     <button onClick={() => handleOpenGeneralModal('in')} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-bold flex items-center gap-2"><Plus size={14}/> Uang Masuk</button>
                     <button onClick={() => handleOpenGeneralModal('out')} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold flex items-center gap-2"><ArrowDownCircle size={14}/> Uang Keluar</button>
                  </div>
               </div>

               <div className="flex-1 overflow-auto custom-scrollbar p-2 tour-trx-table">
                  <table className="w-full text-left border-collapse">
                     <thead className="bg-slate-50 dark:bg-white/5 sticky top-0 z-10">
                        <tr>
                           <th className="p-4 text-[10px] font-black text-slate-400 uppercase">Tanggal</th>
                           <th className="p-4 text-[10px] font-black text-slate-400 uppercase">Keterangan</th>
                           <th className="p-4 text-[10px] font-black text-slate-400 uppercase">Kategori</th>
                           <th className="p-4 text-[10px] font-black text-slate-400 uppercase text-right">Nominal</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                        {generalTrx.length === 0 ? (
                            <tr><td colSpan={4} className="p-8 text-center text-slate-400 text-xs">Belum ada transaksi</td></tr>
                        ) : (
                            generalTrx.map(t => (
                               <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                                  <td className="p-4 text-xs font-bold text-slate-600 dark:text-slate-300">{t.date}</td>
                                  <td className="p-4"><p className="text-sm font-bold text-slate-800 dark:text-white">{t.title}</p><p className="text-[10px] text-slate-400">{t.pic}</p></td>
                                  <td className="p-4"><span className="px-2 py-1 bg-slate-100 dark:bg-white/10 rounded text-[10px] font-bold text-slate-500">{t.category}</span></td>
                                  <td className={`p-4 text-right font-black ${t.type === 'PEMASUKAN' ? 'text-green-600' : 'text-red-600'}`}>{t.type === 'PEMASUKAN' ? '+' : '-'} {formatIDR(t.amount)}</td>
                               </tr>
                            ))
                        )}
                     </tbody>
                  </table>
               </div>
            </>
         )}

         {/* TAB 2: ANGGARAN EVENT (Connected to DB Events) */}
         {activeTab === 'events' && (
            <div className="flex flex-col h-full">
               <div className="p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center">
                  <div>
                     <h3 className="text-lg font-black text-slate-800 dark:text-white">Manajemen Anggaran Event</h3>
                     <p className="text-xs text-slate-500">Pisahkan dana event agar tidak tercampur kas umum.</p>
                  </div>
                  <button onClick={handleOpenNewEventModal} className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xs shadow-lg flex items-center gap-2">
                     <Plus size={16}/> Buka Anggaran Event Baru
                  </button>
               </div>

               <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {events.map(ev => {
                        const percent = ev.budget > 0 ? Math.round((ev.used / ev.budget) * 100) : 0;
                        const sisa = ev.budget - ev.used;
                        const isClosed = ev.status === 'DONE'; // Sesuaikan status dari Proker

                        return (
                           <div key={ev.id} className={`rounded-2xl border p-5 shadow-sm relative overflow-hidden transition-all ${isClosed ? 'bg-slate-50 border-slate-200 opacity-70' : 'bg-white dark:bg-[#1e293b] border-slate-200 dark:border-white/10 hover:shadow-md'}`}>
                              <div className="flex justify-between items-start mb-4">
                                 <div className="p-3 bg-purple-100 dark:bg-purple-500/20 text-purple-600 rounded-xl"><Target size={24}/></div>
                              </div>

                              <h3 className="text-lg font-black text-slate-800 dark:text-white mb-1">{ev.name}</h3>
                              <p className="text-xs text-slate-500 mb-4">Total Anggaran: <span className="font-bold text-slate-700 dark:text-slate-300">{formatIDR(ev.budget)}</span></p>

                              <div className="space-y-2 mb-6">
                                 <div className="flex justify-between text-[10px] font-bold">
                                    <span className="text-slate-500">Terpakai ({percent}%)</span>
                                    <span className="text-purple-600">{formatIDR(ev.used)}</span>
                                 </div>
                                 <div className="w-full h-2 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-500 rounded-full transition-all duration-1000" style={{ width: `${percent}%` }}></div>
                                 </div>
                                 <div className="text-right text-[10px] font-bold text-green-600">Sisa: {formatIDR(sisa)}</div>
                              </div>

                              <div className="border-t border-slate-100 dark:border-white/5 pt-4">
                                 {!isClosed && (
                                    <button onClick={() => handleOpenEventTrxModal(ev.id)} className="w-full py-2.5 rounded-xl border-2 border-dashed border-slate-200 dark:border-white/10 hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 text-slate-400 hover:text-purple-600 text-xs font-bold transition-all flex items-center justify-center gap-2">
                                       <Plus size={14}/> Catat Pengeluaran Event
                                    </button>
                                 )}
                                 {/* Mini History (Ambil 2 trx terakhir) */}
                                 <div className="mt-4 space-y-2">
                                    {ev.transactions.slice(0, 2).map((t:any) => (
                                       <div key={t.id} className="flex justify-between items-center text-[10px]">
                                          <span className="text-slate-600 dark:text-slate-400 truncate w-1/2">{t.title}</span>
                                          <span className="font-bold text-red-500">-{formatIDR(t.amount)}</span>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         )}
      </div>

      {/* === MODAL UNIVERSAL === */}
      <AnimatePresence>
         {isModalOpen && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm"/>
               <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="relative w-full max-w-md bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10">
                  <div className={`p-5 border-b flex justify-between items-center ${modalType.includes('in') ? 'bg-green-50 text-green-700' : modalType.includes('out') || modalType === 'event_trx' ? 'bg-red-50 text-red-700' : 'bg-purple-50 text-purple-700'}`}>
                     <div>
                        <h2 className="text-lg font-black">
                           {modalType === 'general_in' && 'Uang Masuk (Kas Umum)'}
                           {modalType === 'general_out' && 'Uang Keluar (Kas Umum)'}
                           {modalType === 'new_event' && 'Buka Anggaran Event Baru'}
                           {modalType === 'event_trx' && 'Catat Pengeluaran Event'}
                        </h2>
                        <p className="text-[10px] opacity-80 mt-0.5">Pastikan data yang diinput valid.</p>
                     </div>
                     <button onClick={() => setIsModalOpen(false)} className="hover:bg-black/5 p-1 rounded-full"><X size={20}/></button>
                  </div>

                  <div className="p-6 space-y-4">
                     <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">
                           {modalType === 'new_event' ? 'Nama Event' : 'Keterangan Transaksi'}
                        </label>
                        <input autoFocus type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-xs font-bold" placeholder="..." />
                     </div>
                     
                     <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">
                           {modalType === 'new_event' ? 'Alokasi Anggaran (Dari Kas Umum)' : 'Nominal (Rp)'}
                        </label>
                        <input type="number" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} className="w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-xs font-bold" placeholder="0" />
                        {modalType === 'new_event' && <p className="text-[10px] text-orange-500 mt-1">*Saldo Kas Umum akan berkurang sejumlah ini.</p>}
                     </div>

                     {modalType !== 'new_event' && (
                        <div className="grid grid-cols-2 gap-3">
                           <div>
                              <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Tanggal</label>
                              <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-xs font-bold" />
                           </div>
                           {modalType.includes('general') && (
                              <div>
                                 <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Kategori</label>
                                 <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-xs font-bold">
                                    <option>Umum</option><option>Dana Sekolah</option><option>Sponsorship</option><option>Lainnya</option>
                                 </select>
                              </div>
                           )}
                        </div>
                     )}
                  </div>

                  <div className="p-5 border-t border-slate-100 bg-slate-50 flex justify-end gap-2">
                     <button onClick={() => setIsModalOpen(false)} disabled={isSubmitting} className="px-4 py-2.5 rounded-lg text-xs font-bold text-slate-500 hover:bg-slate-200">Batal</button>
                     <button onClick={handleSubmit} disabled={isSubmitting} className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-black text-white text-xs font-bold shadow-lg transition-transform active:scale-95">
                        {isSubmitting ? "Menyimpan..." : "Simpan"}
                     </button>
                  </div>
               </motion.div>
            </div>
         )}
      </AnimatePresence>
    </div>
  );
}