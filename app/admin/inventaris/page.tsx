"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { 
  Box, Search, Plus, X, Upload, Save,
  AlertTriangle, CheckCircle, Clock, 
  MoreVertical, QrCode, ArrowRight, RotateCcw, 
  Hash, DollarSign, Calendar, FileSpreadsheet, Camera,
  Trash2, Edit, Image as ImageIcon
} from "lucide-react";
import TourGuide from "@/components/TourGuide";

// DATA DUMMY
const initialItems = [
  { 
    id: 1, name: "Kamera Sony A6400", code: "INV-CAM-001", serial: "SN-29384722", category: "Multimedia", status: "available", 
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop", condition: "Baik", 
    price: 12500000, purchaseDate: "2024-05-20", warranty: "2025-05-20",
    history: [
      { id: 1, borrower: "Seksi Pubdok", dateOut: "2025-12-01", dateIn: "2025-12-03", conditionIn: "Baik" },
      { id: 2, borrower: "Ketua OSIS", dateOut: "2025-11-10", dateIn: "2025-11-12", conditionIn: "Baik" }
    ]
  },
  { 
    id: 2, name: "Handy Talky Baofeng", code: "INV-HT-005", serial: "SN-99887766", category: "Elektronik", status: "borrowed", 
    borrower: "Seksi Acara", returnDate: "2026-01-05", 
    image: "https://images.unsplash.com/photo-1620402482329-199b9b476c9f?q=80&w=1000&auto=format&fit=crop", condition: "Baik",
    price: 350000, purchaseDate: "2023-08-17", warranty: "Expired",
    history: []
  },
  { 
    id: 3, name: "Proyektor Epson EB-X", code: "INV-PRJ-001", serial: "EP-55443322", category: "Elektronik", status: "available", 
    image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?q=80&w=1000&auto=format&fit=crop", condition: "Baik",
    price: 5800000, purchaseDate: "2024-01-10", warranty: "2026-01-10",
    history: [
      { id: 3, borrower: "Guru Tamu", dateOut: "2025-10-05", dateIn: "2025-10-05", conditionIn: "Baik" }
    ]
  },
];

// DEFINISI LANGKAH TUR
const inventarisTourSteps = [
    {
        target: '.tour-inventory-header',
        content: 'Selamat datang di Manajemen Aset! Pantau semua barang inventaris organisasi agar tidak hilang atau rusak.',
        disableBeacon: true,
    },
    {
        target: '.tour-stats-overview',
        content: 'Ringkasan cepat: Lihat berapa banyak barang yang siap pakai, sedang dipinjam, atau perlu perbaikan.',
        placement: 'bottom' as const,
    },
    {
        target: '.tour-filter-bar',
        content: 'Cari barang spesifik menggunakan kolom pencarian atau filter berdasarkan status ketersediaan.',
    },
    {
        target: '.tour-add-btn',
        content: 'Beli barang baru? Klik di sini untuk mendaftarkannya ke dalam sistem inventaris.',
    },
    {
        target: '.tour-export-btn',
        content: 'Butuh laporan fisik? Klik ini untuk mengunduh data aset dalam format Excel (.xlsx).',
    },
    {
        target: '.tour-item-card',
        content: 'Setiap kartu menampilkan foto, status, dan kondisi barang.',
    },
    {
        target: '.tour-action-area',
        content: 'Gunakan tombol ini untuk memproses Peminjaman Barang atau menerima Pengembalian.',
    },
];

export default function InventarisPage() {
  const [items, setItems] = useState(initialItems);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState(""); 
  const [isClient, setIsClient] = useState(false);
  
  // MODAL STATES
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 
  const [borrowModal, setBorrowModal] = useState<any>(null);
  const [returnModal, setReturnModal] = useState<any>(null);
  const [detailModal, setDetailModal] = useState<any>(null);

  // FORM STATES
  const [newItem, setNewItem] = useState<any>({ name: "", code: "", category: "Umum", condition: "Baik", price: 0 });
  const [borrowerName, setBorrowerName] = useState("");
  const [returnCondition, setReturnCondition] = useState("Baik");
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => { setIsClient(true); }, []);

  // --- ACTIONS ---
  const handleSaveItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      const updatedItems = items.map(item => item.id === newItem.id ? { ...item, ...newItem } : item);
      setItems(updatedItems as any);
    } else {
      const item = {
        id: Date.now(),
        ...newItem,
        status: "available",
        serial: "SN-" + Math.floor(Math.random() * 100000),
        image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=1000&auto=format&fit=crop",
        history: []
      };
      setItems([item, ...items] as any);
    }
    setIsAddModalOpen(false);
    setIsEditing(false);
    setNewItem({ name: "", code: "", category: "Umum", condition: "Baik", price: 0 });
  };

  const openEditModal = (item: any, e: React.MouseEvent) => {
    e.stopPropagation(); 
    setNewItem(item);
    setIsEditing(true);
    setIsAddModalOpen(true);
  };

  const handleDelete = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Yakin ingin menghapus aset ini permanen?")) {
      setItems(items.filter(i => i.id !== id));
    }
  };

  const handleBorrowSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedItems = items.map(i => i.id === borrowModal.id ? { ...i, status: 'borrowed', borrower: borrowerName, returnDate: new Date().toISOString().split('T')[0] } : i);
    setItems(updatedItems as any);
    setBorrowModal(null);
  };

  const handleReturnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedItems = items.map(i => {
      if (i.id === returnModal.id) {
        const newHistoryLog = {
          id: Date.now(),
          borrower: i.borrower,
          dateOut: "2026-01-01", 
          dateIn: new Date().toISOString().split('T')[0],
          conditionIn: returnCondition
        };
        const { borrower, returnDate, ...rest } = i as any;
        return { 
          ...rest, 
          status: returnCondition === 'Rusak' ? 'maintenance' : 'available',
          condition: returnCondition,
          history: [newHistoryLog, ...(i.history || [])] 
        };
      }
      return i;
    });
    setItems(updatedItems);
    setReturnModal(null);
  };

  const handleExportExcel = async () => {
    setIsExporting(true);
    try {
      const XLSX = await import('xlsx');
      const dataToExport = items.map(item => ({
        "Kode": item.code, "Nama": item.name, "Kategori": item.category, "Status": item.status,
        "Kondisi": item.condition, "Peminjam": item.borrower || '-', "Harga": item.price || 0
      }));
      const worksheet = XLSX.utils.json_to_sheet(dataToExport);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Data Aset");
      XLSX.writeFile(workbook, "Laporan_Aset.xlsx");
    } catch (error) {
      alert("Gagal export. Pastikan library 'xlsx' terinstall.");
    } finally {
      setIsExporting(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'available': return <span className="px-2 py-1 rounded-md bg-green-100 dark:bg-green-900/30 text-[10px] font-bold text-green-600 dark:text-green-400 flex items-center gap-1"><CheckCircle size={10}/> Tersedia</span>;
      case 'borrowed': return <span className="px-2 py-1 rounded-md bg-orange-100 dark:bg-orange-900/30 text-[10px] font-bold text-orange-600 dark:text-orange-400 flex items-center gap-1"><Clock size={10}/> Dipinjam</span>;
      case 'maintenance': return <span className="px-2 py-1 rounded-md bg-red-100 dark:bg-red-900/30 text-[10px] font-bold text-red-600 dark:text-red-400 flex items-center gap-1"><AlertTriangle size={10}/> Rusak</span>;
      default: return null;
    }
  };

  const filteredItems = items.filter(item => {
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      item.name.toLowerCase().includes(searchLower) || 
      item.code.toLowerCase().includes(searchLower) ||
      item.category.toLowerCase().includes(searchLower);
    
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col gap-6 font-sans relative">
      
      {/* 1. HEADER PAGE + GUIDE BUTTON (FINAL FIX) */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 shrink-0">
         <div>
            {/* WRAPPER FLEX BIAR SEJAJAR */}
            <div className="flex items-center gap-4">
                {/* Target Tur 1 */}
                <h1 className="text-3xl font-black font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-inventory-header">
                  Inventaris Aset <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">📦</span>
                </h1>
                
                {/* TOMBOL PANDUAN (Sekarang duduk manis di sini) */}
                {isClient && <TourGuide steps={inventarisTourSteps} />}
            </div>
            
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">
               Pantau ketersediaan dan kondisi barang organisasi.
            </p>
         </div>
      </div>

      {/* HEADER STATS */}
      {/* Target Tur 2: Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 shrink-0 tour-stats-overview">
         <div className="bg-blue-600 p-5 rounded-2xl text-white relative overflow-hidden shadow-lg shadow-blue-600/20">
            <div className="absolute right-0 top-0 opacity-10 p-4"><Box size={64}/></div>
            <p className="text-xs font-bold opacity-80 uppercase tracking-wider mb-1">Total Aset</p>
            <h2 className="text-3xl font-bold font-black">{items.length} <span className="text-sm font-medium opacity-60">Item</span></h2>
         </div>
         <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
            <div className="flex items-center gap-3 mb-2"><div className="p-2 bg-green-100 text-green-600 rounded-lg"><CheckCircle size={18}/></div><p className="text-xs font-bold text-slate-500 uppercase">Siap Pakai</p></div>
            <h2 className="text-2xl font-bold font-black text-slate-800 dark:text-white">{items.filter(i => i.status === 'available').length}</h2>
         </div>
         <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
            <div className="flex items-center gap-3 mb-2"><div className="p-2 bg-orange-100 text-orange-600 rounded-lg"><Clock size={18}/></div><p className="text-xs font-bold text-slate-500 uppercase">Dipinjam</p></div>
            <h2 className="text-2xl font-black font-bold text-slate-800 dark:text-white">{items.filter(i => i.status === 'borrowed').length}</h2>
         </div>
         <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
            <div className="flex items-center gap-3 mb-2"><div className="p-2 bg-red-100 text-red-600 rounded-lg"><AlertTriangle size={18}/></div><p className="text-xs font-bold text-slate-500 uppercase">Perlu Servis</p></div>
            <h2 className="text-2xl font-black font-bold text-slate-800 dark:text-white">{items.filter(i => i.status === 'maintenance').length}</h2>
         </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm flex flex-col overflow-hidden">
         <div className="p-5 border-b border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-white/5">
            <div className="flex flex-1 w-full gap-3">
               
               {/* Target Tur 3: Filter & Search */}
               <div className="relative flex-1 max-w-md tour-filter-bar">
                  <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Cari nama barang..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/10 rounded-xl text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 shadow-sm dark:text-white" 
                  />
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
               </div>
               <div className="flex bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-white/10 p-1 shadow-sm">
                  {['all', 'available', 'borrowed'].map(status => (
                     <button key={status} onClick={() => setFilterStatus(status)} className={`px-4 py-1.5 rounded-lg text-[10px] font-bold capitalize transition-all ${filterStatus === status ? 'bg-slate-100 dark:bg-white/20 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}>{status === 'all' ? 'Semua' : status === 'available' ? 'Tersedia' : 'Dipinjam'}</button>
                  ))}
               </div>
            </div>
            
            <div className="flex gap-2">
               {/* Target Tur 5: Export */}
               <button onClick={handleExportExcel} disabled={isExporting} className="tour-export-btn px-4 py-2.5 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/10 text-green-700 dark:text-green-400 rounded-xl font-bold text-xs shadow-sm hover:shadow-md transition-all flex items-center gap-2">
                  <FileSpreadsheet size={16}/> {isExporting ? '...' : 'Laporan Excel'}
               </button>
               {/* Target Tur 4: Add Button */}
               <button onClick={() => {setNewItem({name:"",code:"",category:"Umum"}); setIsAddModalOpen(true);}} className="tour-add-btn px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-lg shadow-blue-600/20 active:scale-95 transition-all flex items-center gap-2">
                  <Plus size={16}/> Tambah Barang
               </button>
            </div>
         </div>

         {/* GRID CATALOG */}
         <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            
            {filteredItems.length === 0 ? (
               <div className="h-full flex flex-col items-center justify-center text-slate-400 opacity-60">
                  <Box size={64} className="mb-4 stroke-1"/>
                  <p className="text-sm font-bold">Barang tidak ditemukan.</p>
                  <p className="text-xs">Coba kata kunci lain.</p>
               </div>
            ) : (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredItems.map((item, index) => (
                     <div 
                       key={item.id} 
                       onClick={() => setDetailModal(item)} 
                       // Target Tur 6: Kartu Barang (Hanya item pertama)
                       className={`bg-white dark:bg-[#1e293b] border border-slate-100 dark:border-white/5 rounded-2xl p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full cursor-pointer relative ${index === 0 ? 'tour-item-card' : ''}`}
                     >
                        <div>
                           <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-slate-100">
                              <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 gap-2">
                                 <button onClick={(e) => openEditModal(item, e)} className="p-2 bg-white text-slate-800 rounded-lg hover:bg-blue-500 hover:text-white transition-all shadow-lg" title="Edit"><Edit size={16}/></button>
                                 <button onClick={(e) => handleDelete(item.id, e)} className="p-2 bg-white text-red-600 rounded-lg hover:bg-red-500 hover:text-white transition-all shadow-lg" title="Hapus"><Trash2 size={16}/></button>
                              </div>
                              <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded-md text-[9px] font-bold text-white uppercase tracking-wider">{item.category}</div>
                           </div>
                           <div className="px-1">
                              <div className="mb-2">
                                 <h3 className="text-sm font-black text-slate-800 dark:text-white line-clamp-1" title={item.name}>{item.name}</h3>
                                 <p className="text-[10px] font-mono text-slate-400 mt-0.5">{item.code}</p>
                              </div>
                              <div className="flex justify-between items-center mb-4">
                                 {getStatusBadge(item.status)}
                                 <span className="text-[10px] font-medium text-slate-500">{item.condition}</span>
                              </div>
                              {item.status === 'borrowed' && (
                                 <div className="bg-orange-50 dark:bg-orange-900/10 p-2 rounded-lg border border-orange-100 dark:border-orange-500/10 mb-3">
                                    <p className="text-[9px] text-orange-700 dark:text-orange-400 font-bold mb-0.5">Peminjam: {item.borrower}</p>
                                    <p className="text-[9px] text-orange-600/70">Kembali: {item.returnDate}</p>
                                 </div>
                              )}
                           </div>
                        </div>
                        
                        {/* Target Tur 7: Action Area */}
                        <div className={`px-1 mt-auto pt-2 ${index === 0 ? 'tour-action-area' : ''}`} onClick={(e) => e.stopPropagation()}> 
                           {item.status === 'available' ? (
                              <button onClick={() => setBorrowModal(item)} className="w-full py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 bg-slate-900 dark:bg-white hover:bg-blue-600 hover:text-white text-white dark:text-slate-900 shadow-md transition-all active:scale-95">
                                 Pinjam Barang <ArrowRight size={14}/>
                              </button>
                           ) : item.status === 'borrowed' ? (
                              <button onClick={() => setReturnModal(item)} className="w-full py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 bg-orange-100 hover:bg-orange-200 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400 dark:hover:bg-orange-900/40 transition-all active:scale-95 border border-orange-200 dark:border-orange-500/20">
                                 <RotateCcw size={14}/> Terima Kembali
                              </button>
                           ) : (
                              <button disabled className="w-full py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 bg-slate-100 dark:bg-white/5 text-slate-400 cursor-not-allowed">
                                 Tidak Tersedia
                              </button>
                           )}
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>
      </div>

      {/* === MODAL ADD / EDIT (Sama seperti sebelumnya) === */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
           <div className="bg-white dark:bg-[#1e293b] w-full max-w-md rounded-2xl shadow-2xl p-6 space-y-4">
              <h3 className="font-black text-lg text-slate-800 dark:text-white">{isEditing ? 'Edit Data Aset' : 'Tambah Aset Baru'}</h3>
              <form onSubmit={handleSaveItem} className="space-y-4">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-slate-500">Nama & Kode</label>
                    <input required placeholder="Nama Barang" className="w-full p-2.5 border rounded-lg text-xs font-bold dark:bg-slate-800 dark:border-white/10" value={newItem.name} onChange={e => setNewItem({...newItem, name: e.target.value})} />
                    <input required placeholder="Kode Aset (INV-xxx)" className="w-full p-2.5 border rounded-lg text-xs dark:bg-slate-800 dark:border-white/10" value={newItem.code} onChange={e => setNewItem({...newItem, code: e.target.value})} />
                 </div>
                 
                 <div className="grid grid-cols-2 gap-2">
                    <div>
                       <label className="text-[10px] font-bold uppercase text-slate-500">Kategori</label>
                       <select className="w-full p-2.5 border rounded-lg text-xs dark:bg-slate-800 dark:border-white/10" value={newItem.category} onChange={e => setNewItem({...newItem, category: e.target.value})}>
                          <option>Elektronik</option><option>Multimedia</option><option>Perlengkapan</option><option>Audio</option><option>Umum</option>
                       </select>
                    </div>
                    <div>
                       <label className="text-[10px] font-bold uppercase text-slate-500">Harga Beli</label>
                       <input type="number" placeholder="Rp 0" className="w-full p-2.5 border rounded-lg text-xs dark:bg-slate-800 dark:border-white/10" value={newItem.price || ''} onChange={e => setNewItem({...newItem, price: parseInt(e.target.value)})} />
                    </div>
                 </div>

                 <div className="border-2 border-dashed border-slate-300 dark:border-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer">
                    <ImageIcon size={20} className="mb-1"/>
                    <span className="text-[10px]">Klik untuk upload gambar</span>
                 </div>

                 <div className="flex gap-2 pt-2">
                    <button type="button" onClick={() => {setIsAddModalOpen(false); setIsEditing(false)}} className="flex-1 py-3 text-slate-500 text-xs font-bold hover:bg-slate-100 rounded-xl">Batal</button>
                    <button type="submit" className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg">{isEditing ? 'Update Aset' : 'Simpan Aset'}</button>
                 </div>
              </form>
           </div>
        </div>
      )}

      {/* ... BORROW, RETURN, DETAIL MODALS (Sama) ... */}
      {borrowModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
           <div className="bg-white dark:bg-[#1e293b] w-full max-w-sm rounded-2xl shadow-2xl p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600"><Box/></div>
              <h3 className="font-black text-lg text-slate-800 dark:text-white">Pinjam Barang?</h3>
              <p className="text-xs text-slate-500">Anda akan meminjam <strong>{borrowModal.name}</strong>.</p>
              <form onSubmit={handleBorrowSubmit} className="space-y-4 text-left">
                 <label className="text-[10px] font-bold uppercase text-slate-500">Peminjam / Divisi</label>
                 <input required className="w-full p-2 border rounded-lg text-xs font-bold dark:bg-slate-800 dark:border-white/10" placeholder="Nama Peminjam..." value={borrowerName} onChange={e => setBorrowerName(e.target.value)}/>
                 <div className="flex gap-2">
                    <button type="button" onClick={() => setBorrowModal(null)} className="flex-1 py-2 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">Batal</button>
                    <button type="submit" className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold shadow-lg">Konfirmasi</button>
                 </div>
              </form>
           </div>
        </div>
      )}
      {returnModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
           <div className="bg-white dark:bg-[#1e293b] w-full max-w-md rounded-2xl shadow-2xl p-6 space-y-4">
              <h3 className="font-black text-slate-800 dark:text-white">Validasi Pengembalian</h3>
              <form onSubmit={handleReturnSubmit} className="space-y-4">
                 <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500">Kondisi</label>
                    <select className="w-full p-2.5 border rounded-lg text-xs font-bold mt-1 dark:bg-slate-800 dark:border-white/10" value={returnCondition} onChange={e => setReturnCondition(e.target.value)}>
                       <option value="Baik">✅ Baik / Normal</option><option value="Rusak">❌ Rusak</option>
                    </select>
                 </div>
                 <div className="flex gap-2 pt-2">
                    <button type="button" onClick={() => setReturnModal(null)} className="flex-1 py-3 bg-slate-100 rounded-xl text-xs font-bold text-slate-600">Batal</button>
                    <button type="submit" className="flex-1 py-3 bg-green-600 text-white rounded-xl text-xs font-bold">Terima</button>
                 </div>
              </form>
           </div>
        </div>
      )}
      {detailModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
           <div className="bg-white dark:bg-[#1e293b] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              <div className="p-6 bg-slate-50 dark:bg-white/5 border-b border-slate-100 flex justify-between items-start">
                 <div className="flex gap-4">
                    <div className="w-20 h-20 bg-slate-200 rounded-xl overflow-hidden shrink-0 relative"><Image src={detailModal.image} alt="Img" fill className="object-cover"/></div>
                    <div>
                       <h2 className="text-xl font-black text-slate-900 dark:text-white">{detailModal.name}</h2>
                       <div className="flex items-center gap-2 mt-1"><span className="px-2 py-0.5 bg-slate-200 text-slate-600 rounded text-[10px] font-mono font-bold">{detailModal.code}</span>{getStatusBadge(detailModal.status)}</div>
                    </div>
                 </div>
                 <button onClick={() => setDetailModal(null)} className="p-2 hover:bg-slate-200 rounded-full"><X size={20}/></button>
              </div>
              <div className="p-6 overflow-y-auto custom-scrollbar">
                 <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                       <h3 className="text-xs font-black uppercase text-slate-500 tracking-widest border-b pb-2">Spesifikasi</h3>
                       <div className="space-y-3">
                          <div><p className="text-[10px] text-slate-400">Serial Number</p><p className="text-sm font-bold flex items-center gap-2"><Hash size={14}/> {detailModal.serial || '-'}</p></div>
                          <div><p className="text-[10px] text-slate-400">Harga Beli</p><p className="text-sm font-bold flex items-center gap-2"><DollarSign size={14}/> {detailModal.price ? `Rp ${detailModal.price.toLocaleString()}` : '-'}</p></div>
                       </div>
                    </div>
                    <div>
                       <h3 className="text-xs font-black uppercase text-slate-500 tracking-widest border-b pb-2 mb-4">Riwayat</h3>
                       <div className="space-y-3">
                          {detailModal.history && detailModal.history.length > 0 ? detailModal.history.map((log: any) => (<div key={log.id} className="text-xs border-l-2 border-slate-200 pl-2 pb-2"><p className="font-bold">{log.borrower}</p><p className="text-slate-500">{log.dateOut}</p></div>)) : <p className="text-xs text-slate-400">Kosong</p>}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

    </div>
  );
}