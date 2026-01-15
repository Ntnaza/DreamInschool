"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { 
  Box, Search, Plus, X, 
  AlertTriangle, CheckCircle, Clock, 
  ArrowRight, RotateCcw, 
  Hash, DollarSign, FileSpreadsheet,
  Trash2, Edit, Image as ImageIcon, Loader2
} from "lucide-react";
import TourGuide from "@/components/TourGuide";
// Import Server Actions
import { saveInventaris, deleteInventaris, pinjamBarang, kembalikanBarang } from "@/lib/actions";

// DEFINISI LANGKAH TUR (DIKEMBALIKAN LENGKAP)
const inventarisTourSteps = [
    { target: '.tour-inventory-header', content: 'Manajemen aset organisasi.', disableBeacon: true },
    { target: '.tour-stats-overview', content: 'Ringkasan jumlah aset.', placement: 'bottom' as const },
    { target: '.tour-filter-bar', content: 'Cari dan filter barang.', },
    { target: '.tour-add-btn', content: 'Tambah inventaris baru di sini.', },
    { target: '.tour-export-btn', content: 'Download laporan Excel.', },
    { target: '.tour-item-card', content: 'Klik kartu untuk detail history.', },
    { target: '.tour-action-area', content: 'Tombol cepat Pinjam/Kembali.', },
];

export default function InventarisClient({ initialItems }: { initialItems: any[] }) {
  const [items, setItems] = useState(initialItems);
  
  // Sinkronisasi data server
  useEffect(() => { setItems(initialItems) }, [initialItems]);

  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState(""); 
  const [isClient, setIsClient] = useState(false);
  const [isExporting, setIsExporting] = useState(false); // State loading export
  
  // MODAL STATES
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 
  const [borrowModal, setBorrowModal] = useState<any>(null);
  const [returnModal, setReturnModal] = useState<any>(null);
  const [detailModal, setDetailModal] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FORM STATES
  const [newItem, setNewItem] = useState<any>({ name: "", code: "", category: "Umum", price: 0, serial: "", image: "" });
  const [borrowerName, setBorrowerName] = useState("");
  const [returnCondition, setReturnCondition] = useState("Baik");
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setIsClient(true); }, []);

  // --- HANDLER EXPORT EXCEL (DIKEMBALIKAN) ---
  const handleExportExcel = async () => {
    setIsExporting(true);
    try {
      // Dynamic import biar gak berat di awal
      const XLSX = await import('xlsx');
      
      const dataToExport = items.map(item => ({
        "Kode": item.code,
        "Nama Barang": item.name,
        "Kategori": item.category,
        "Status": item.status,
        "Kondisi": item.condition,
        "Peminjam": item.peminjam || '-',
        "Harga Beli": item.price,
        "Serial Number": item.serialNum || '-'
      }));

      const worksheet = XLSX.utils.json_to_sheet(dataToExport);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Data Aset");
      XLSX.writeFile(workbook, `Laporan_Inventaris_${new Date().toISOString().split('T')[0]}.xlsx`);
    } catch (error) {
      console.error(error);
      alert("Gagal export Excel. Pastikan library 'xlsx' terinstall (npm install xlsx).");
    } finally {
      setIsExporting(false);
    }
  };

  // --- HANDLER UPLOAD GAMBAR ---
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) return alert("File max 2MB!");
      const reader = new FileReader();
      reader.onloadend = () => setNewItem({ ...newItem, image: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  // --- CRUD ACTIONS (DATABASE CONNECTED) ---
  const handleSaveItem = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData();
    if(isEditing && newItem.id) formData.append("id", newItem.id.toString());
    formData.append("name", newItem.name);
    formData.append("code", newItem.code);
    formData.append("category", newItem.category);
    formData.append("price", newItem.price.toString());
    formData.append("serial", newItem.serial || "");
    if(newItem.image) formData.append("image", newItem.image);

    const res = await saveInventaris(formData);
    if(res.success) {
        alert(res.message);
        setIsAddModalOpen(false);
        window.location.reload();
    } else {
        alert("Gagal: " + res.message);
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Yakin hapus aset ini?")) {
      const res = await deleteInventaris(id);
      if(!res.success) alert("Gagal menghapus.");
      else window.location.reload();
    }
  };

  const handleBorrowSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("id", borrowModal.id.toString());
    formData.append("borrower", borrowerName);

    const res = await pinjamBarang(formData);
    if(res.success) {
        setBorrowModal(null);
        window.location.reload();
    } else {
        alert("Gagal: " + res.message);
    }
    setIsSubmitting(false);
  };

  const handleReturnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("id", returnModal.id.toString());
    formData.append("condition", returnCondition);

    const res = await kembalikanBarang(formData);
    if(res.success) {
        setReturnModal(null);
        window.location.reload();
    } else {
        alert("Gagal: " + res.message);
    }
    setIsSubmitting(false);
  };

  // --- HELPER OPEN EDIT ---
  const openEditModal = (item: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setNewItem({
        id: item.id,
        name: item.name,
        code: item.code,
        category: item.category,
        price: item.price,
        serial: item.serialNum, // Mapping dari DB 'serialNum' ke state 'serial'
        image: item.image
    });
    setIsEditing(true);
    setIsAddModalOpen(true);
  };

  // --- HELPER STATUS UI ---
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'AVAILABLE': return <span className="px-2 py-1 rounded-md bg-green-100 text-[10px] font-bold text-green-600 flex items-center gap-1"><CheckCircle size={10}/> Tersedia</span>;
      case 'BORROWED': return <span className="px-2 py-1 rounded-md bg-orange-100 text-[10px] font-bold text-orange-600 flex items-center gap-1"><Clock size={10}/> Dipinjam</span>;
      case 'MAINTENANCE': return <span className="px-2 py-1 rounded-md bg-red-100 text-[10px] font-bold text-red-600 flex items-center gap-1"><AlertTriangle size={10}/> Rusak</span>;
      default: return null;
    }
  };

  const filteredItems = items.filter(item => {
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = item.name.toLowerCase().includes(searchLower) || item.code.toLowerCase().includes(searchLower);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col gap-6 font-sans relative">
      
      {/* HEADER & FILTER */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 shrink-0">
         <div>
            <div className="flex items-center gap-4">
               <h1 className="text-3xl font-black font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-inventory-header">
                  Inventaris Aset <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">📦</span>
               </h1>
               {/* ✅ TOUR GUIDE KEMBALI LENGKAP */}
               {isClient && <TourGuide steps={inventarisTourSteps} />}
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Pantau ketersediaan dan kondisi barang.</p>
         </div>
      </div>

      {/* STATS OVERVIEW */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 shrink-0 tour-stats-overview">
         <div className="bg-blue-600 p-5 rounded-2xl text-white relative overflow-hidden shadow-lg shadow-blue-600/20">
            <div className="absolute right-0 top-0 opacity-10 p-4"><Box size={64}/></div>
            <p className="text-xs font-bold opacity-80 uppercase tracking-wider mb-1">Total Aset</p>
            <h2 className="text-3xl font-bold font-black">{items.length} <span className="text-sm font-medium opacity-60">Item</span></h2>
         </div>
         <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
            <div className="flex items-center gap-3 mb-2"><div className="p-2 bg-green-100 text-green-600 rounded-lg"><CheckCircle size={18}/></div><p className="text-xs font-bold text-slate-500 uppercase">Siap Pakai</p></div>
            <h2 className="text-2xl font-bold font-black text-slate-800 dark:text-white">{items.filter(i => i.status === 'AVAILABLE').length}</h2>
         </div>
         <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
            <div className="flex items-center gap-3 mb-2"><div className="p-2 bg-orange-100 text-orange-600 rounded-lg"><Clock size={18}/></div><p className="text-xs font-bold text-slate-500 uppercase">Dipinjam</p></div>
            <h2 className="text-2xl font-black font-bold text-slate-800 dark:text-white">{items.filter(i => i.status === 'BORROWED').length}</h2>
         </div>
         <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
            <div className="flex items-center gap-3 mb-2"><div className="p-2 bg-red-100 text-red-600 rounded-lg"><AlertTriangle size={18}/></div><p className="text-xs font-bold text-slate-500 uppercase">Perlu Servis</p></div>
            <h2 className="text-2xl font-black font-bold text-slate-800 dark:text-white">{items.filter(i => i.status === 'MAINTENANCE').length}</h2>
         </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm flex flex-col overflow-hidden">
         <div className="p-5 border-b border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-white/5">
            <div className="flex flex-1 w-full gap-3">
               <div className="relative flex-1 max-w-md tour-filter-bar">
                  <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Cari nama barang..." className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/10 rounded-xl text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 shadow-sm dark:text-white" />
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
               </div>
               <div className="flex bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-white/10 p-1 shadow-sm">
                  {['all', 'AVAILABLE', 'BORROWED'].map(status => (
                     <button key={status} onClick={() => setFilterStatus(status)} className={`px-4 py-1.5 rounded-lg text-[10px] font-bold capitalize transition-all ${filterStatus === status ? 'bg-slate-100 dark:bg-white/20 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}>{status === 'all' ? 'Semua' : status === 'AVAILABLE' ? 'Tersedia' : 'Dipinjam'}</button>
                  ))}
               </div>
            </div>
            
            <div className="flex gap-2">
               {/* ✅ EXPORT EXCEL DIKEMBALIKAN */}
               <button onClick={handleExportExcel} disabled={isExporting} className="tour-export-btn px-4 py-2.5 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/10 text-green-700 dark:text-green-400 rounded-xl font-bold text-xs shadow-sm hover:shadow-md transition-all flex items-center gap-2">
                  <FileSpreadsheet size={16}/> {isExporting ? 'Exporting...' : 'Laporan Excel'}
               </button>
               
               <button onClick={() => {setNewItem({name:"",code:"",category:"Umum",price:0}); setIsAddModalOpen(true);}} className="tour-add-btn px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-lg flex items-center gap-2">
                  <Plus size={16}/> Tambah Barang
               </button>
            </div>
         </div>

         {/* GRID CATALOG */}
         <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               {filteredItems.map((item, index) => (
                  <div key={item.id} onClick={() => setDetailModal(item)} className={`bg-white dark:bg-[#1e293b] border border-slate-100 dark:border-white/5 rounded-2xl p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full cursor-pointer relative ${index === 0 ? 'tour-item-card' : ''}`}>
                     <div>
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-slate-100">
                           <Image src={item.image || "https://source.unsplash.com/random/300x300/?tech"} alt={item.name} fill className="object-cover" />
                           <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 gap-2">
                              <button onClick={(e) => openEditModal(item, e)} className="p-2 bg-white text-slate-800 rounded-lg shadow-lg"><Edit size={16}/></button>
                              <button onClick={(e) => handleDelete(item.id, e)} className="p-2 bg-white text-red-600 rounded-lg shadow-lg"><Trash2 size={16}/></button>
                           </div>
                           <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded-md text-[9px] font-bold text-white uppercase">{item.category}</div>
                        </div>
                        <div className="px-1 mb-4">
                           <h3 className="text-sm font-black text-slate-800 dark:text-white line-clamp-1">{item.name}</h3>
                           <p className="text-[10px] font-mono text-slate-400 mt-0.5">{item.code}</p>
                           <div className="flex justify-between items-center mt-2">
                              {getStatusBadge(item.status)}
                              <span className="text-[10px] font-medium text-slate-500">{item.condition}</span>
                           </div>
                           {item.status === 'BORROWED' && (
                              <div className="bg-orange-50 dark:bg-orange-900/10 p-2 rounded-lg border border-orange-100 mt-2">
                                 <p className="text-[9px] text-orange-700 font-bold">Peminjam: {item.peminjam}</p>
                              </div>
                           )}
                        </div>
                     </div>
                     <div className={`px-1 mt-auto pt-2 ${index === 0 ? 'tour-action-area' : ''}`} onClick={(e) => e.stopPropagation()}> 
                        {item.status === 'AVAILABLE' ? (
                           <button onClick={() => setBorrowModal(item)} className="w-full py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md active:scale-95">Pinjam Barang <ArrowRight size={14}/></button>
                        ) : item.status === 'BORROWED' ? (
                           <button onClick={() => setReturnModal(item)} className="w-full py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 bg-orange-100 text-orange-700 border border-orange-200 active:scale-95"><RotateCcw size={14}/> Terima Kembali</button>
                        ) : (
                           <button disabled className="w-full py-2.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-400 cursor-not-allowed">Tidak Tersedia</button>
                        )}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* === MODAL ADD/EDIT === */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
           <div className="bg-white dark:bg-[#1e293b] w-full max-w-md rounded-2xl shadow-2xl p-6 space-y-4">
              <h3 className="font-black text-lg text-slate-800 dark:text-white">{isEditing ? 'Edit Data Aset' : 'Tambah Aset Baru'}</h3>
              <form onSubmit={handleSaveItem} className="space-y-4">
                 <div className="space-y-2">
                    <input required placeholder="Nama Barang" className="w-full p-2.5 border rounded-lg text-xs font-bold dark:bg-slate-800 dark:border-white/10" value={newItem.name} onChange={e => setNewItem({...newItem, name: e.target.value})} />
                    <input required placeholder="Kode Aset (INV-xxx)" className="w-full p-2.5 border rounded-lg text-xs dark:bg-slate-800 dark:border-white/10" value={newItem.code} onChange={e => setNewItem({...newItem, code: e.target.value})} />
                 </div>
                 <div className="grid grid-cols-2 gap-2">
                    <select className="w-full p-2.5 border rounded-lg text-xs dark:bg-slate-800 dark:border-white/10" value={newItem.category} onChange={e => setNewItem({...newItem, category: e.target.value})}>
                       <option>Elektronik</option><option>Multimedia</option><option>Perlengkapan</option><option>Audio</option><option>Umum</option>
                    </select>
                    {/* ✅ FIX NAN ERROR: Logic value input diperbaiki */}
                    <input 
                        type="number" 
                        placeholder="Harga Beli" 
                        className="w-full p-2.5 border rounded-lg text-xs dark:bg-slate-800 dark:border-white/10" 
                        value={newItem.price || ""} 
                        onChange={e => setNewItem({...newItem, price: e.target.value ? parseInt(e.target.value) : 0})} 
                    />
                 </div>
                 <div className="space-y-2">
                    <input placeholder="Serial Number (Opsional)" className="w-full p-2.5 border rounded-lg text-xs dark:bg-slate-800 dark:border-white/10" value={newItem.serial || ""} onChange={e => setNewItem({...newItem, serial: e.target.value})} />
                 </div>
                 <div className="border-2 border-dashed border-slate-300 dark:border-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-slate-400 cursor-pointer relative overflow-hidden" onClick={() => fileInputRef.current?.click()}>
                    {newItem.image ? <Image src={newItem.image} alt="Preview" fill className="object-cover opacity-50"/> : <ImageIcon size={20} className="mb-1"/>}
                    <span className="text-[10px] relative z-10 font-bold text-slate-500">Klik Upload Gambar</span>
                    <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                 </div>
                 <div className="flex gap-2 pt-2">
                    <button type="button" onClick={() => setIsAddModalOpen(false)} className="flex-1 py-3 text-slate-500 text-xs font-bold hover:bg-slate-100 rounded-xl">Batal</button>
                    <button type="submit" disabled={isSubmitting} className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2">
                       {isSubmitting && <Loader2 size={14} className="animate-spin"/>} Simpan
                    </button>
                 </div>
              </form>
           </div>
        </div>
      )}

      {/* === MODAL BORROW === */}
      {borrowModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
           <div className="bg-white dark:bg-[#1e293b] w-full max-w-sm rounded-2xl shadow-2xl p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600"><Box/></div>
              <h3 className="font-black text-lg text-slate-800 dark:text-white">Pinjam Barang?</h3>
              <p className="text-xs text-slate-500">Anda akan meminjam <strong>{borrowModal.name}</strong>.</p>
              <form onSubmit={handleBorrowSubmit} className="space-y-4 text-left">
                 <label className="text-[10px] font-bold uppercase text-slate-500">Peminjam / Divisi</label>
                 <input required className="w-full p-2 border rounded-lg text-xs font-bold dark:bg-slate-800 dark:border-white/10" placeholder="Nama Peminjam..." value={borrowerName} onChange={e => setBorrowerName(e.target.value)}/>
                 <div className="flex gap-2">
                    <button type="button" onClick={() => setBorrowModal(null)} className="flex-1 py-2 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">Batal</button>
                    <button type="submit" disabled={isSubmitting} className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold shadow-lg">Konfirmasi</button>
                 </div>
              </form>
           </div>
        </div>
      )}

      {/* === MODAL RETURN === */}
      {returnModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
           <div className="bg-white dark:bg-[#1e293b] w-full max-w-md rounded-2xl shadow-2xl p-6 space-y-4">
              <h3 className="font-black text-slate-800 dark:text-white">Validasi Pengembalian</h3>
              <form onSubmit={handleReturnSubmit} className="space-y-4">
                 <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500">Kondisi</label>
                    <select className="w-full p-2.5 border rounded-lg text-xs font-bold mt-1 dark:bg-slate-800 dark:border-white/10" value={returnCondition} onChange={e => setReturnCondition(e.target.value)}>
                       <option value="Baik">✅ Baik / Normal</option><option value="Rusak">❌ Rusak / Perlu Servis</option>
                    </select>
                 </div>
                 <div className="flex gap-2 pt-2">
                    <button type="button" onClick={() => setReturnModal(null)} className="flex-1 py-3 bg-slate-100 rounded-xl text-xs font-bold text-slate-600">Batal</button>
                    <button type="submit" disabled={isSubmitting} className="flex-1 py-3 bg-green-600 text-white rounded-xl text-xs font-bold">Terima</button>
                 </div>
              </form>
           </div>
        </div>
      )}

      {/* === MODAL DETAIL === */}
      {detailModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
           <div className="bg-white dark:bg-[#1e293b] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              <div className="p-6 bg-slate-50 dark:bg-white/5 border-b border-slate-100 flex justify-between items-start">
                 <div className="flex gap-4">
                    <div className="w-20 h-20 bg-slate-200 rounded-xl overflow-hidden shrink-0 relative"><Image src={detailModal.image || "https://source.unsplash.com/random/200x200/?tech"} alt="Img" fill className="object-cover"/></div>
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
                          <div><p className="text-[10px] text-slate-400">Serial Number</p><p className="text-sm font-bold flex items-center gap-2"><Hash size={14}/> {detailModal.serialNum || '-'}</p></div>
                          <div><p className="text-[10px] text-slate-400">Harga Beli</p><p className="text-sm font-bold flex items-center gap-2"><DollarSign size={14}/> {detailModal.price ? `Rp ${detailModal.price.toLocaleString()}` : '-'}</p></div>
                       </div>
                    </div>
                    <div>
                       <h3 className="text-xs font-black uppercase text-slate-500 tracking-widest border-b pb-2 mb-4">Riwayat</h3>
                       <div className="space-y-3">
                          {detailModal.riwayat && detailModal.riwayat.length > 0 ? detailModal.riwayat.map((log: any) => (
                             <div key={log.id} className="text-xs border-l-2 border-slate-200 pl-2 pb-2">
                                <p className="font-bold">{log.peminjam}</p>
                                <p className="text-slate-500">{new Date(log.tglKeluar).toLocaleDateString()} - {log.kondisiKembali}</p>
                             </div>
                          )) : <p className="text-xs text-slate-400">Belum ada riwayat peminjaman.</p>}
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