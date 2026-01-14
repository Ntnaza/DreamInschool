"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Plus, CheckCircle, X, 
  Flag, Trash2, Edit, PlayCircle, AlertCircle, FileText, Loader2 
} from "lucide-react";
import TourGuide from "@/components/TourGuide"; // Pastikan path ini benar
import { saveProker, deleteProker } from "@/lib/actions"; 

// KONFIGURASI TUR PANDUAN
const tourSteps = [
    { target: '.tour-header-title', content: 'Pusat kendali kegiatan OSIS.', disableBeacon: true },
    { target: '.tour-buat-baru-btn', content: 'Klik untuk tambah proker baru.' },
    { target: '.tour-col-segera', content: 'Proker yang masih rencana (Progress 0%).', placement: 'right' as const },
    { target: '.tour-col-berjalan', content: 'Proker sedang dikerjakan (1-99%).', placement: 'bottom' as const },
    { target: '.tour-priority-badge', content: 'Tanda prioritas tinggi.', },
    { target: '.tour-edit-action', content: 'Klik pensil untuk edit.', },
];

export default function ProkerClient({ initialData }: { initialData: any[] }) {
  // STATE DATA (Diambil dari Database via Props)
  const [prokers, setProkers] = useState(initialData);

  // Update state kalau props berubah (misal setelah refresh server)
  useEffect(() => { setProkers(initialData) }, [initialData]);

  const [filterSekbid, setFilterSekbid] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [isClient, setIsClient] = useState(false);
  
  // MODAL & LOADING STATE
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 
  const [editId, setEditId] = useState<number | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // FORM STATE
  const [formState, setFormState] = useState({
    title: "", description: "", sekbid: "Inti", priority: "Medium", 
    startDate: "", endDate: "", pic: "", budget: 0, progress: 0
  });

  useEffect(() => { setIsClient(true); }, []);

  // --- ACTIONS ---
  const openNewModal = () => {
    setIsEditing(false);
    setEditId(null);
    setFormState({ title: "", description: "", sekbid: "Inti", priority: "Medium", startDate: "", endDate: "", pic: "", budget: 0, progress: 0 });
    setIsModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setIsEditing(true);
    setEditId(item.id);
    setFormState({ 
        title: item.title,
        description: item.description || "",
        sekbid: item.sekbid,
        priority: item.priority,
        startDate: item.startDate,
        endDate: item.endDate,
        pic: item.pic,
        budget: item.budget,
        progress: item.progress
    });
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (!formState.title) return alert("Nama kegiatan wajib diisi!");
    
    setIsSaving(true);

    // BUNGKUS DATA KE FORMDATA BIAR BISA DIKIRIM KE SERVER ACTION
    const formData = new FormData();
    if (isEditing && editId) formData.append("id", editId.toString());
    
    formData.append("title", formState.title);
    formData.append("description", formState.description);
    formData.append("sekbid", formState.sekbid);
    formData.append("priority", formState.priority);
    formData.append("startDate", formState.startDate);
    formData.append("endDate", formState.endDate);
    formData.append("pic", formState.pic); // Ini sementara disimpan di kolom 'lokasi' db
    formData.append("budget", formState.budget.toString());
    formData.append("progress", formState.progress.toString());

    try {
        const result = await saveProker(formData);
        
        if (result.success) {
            alert(result.message);
            setIsModalOpen(false);
            window.location.reload(); // Refresh halaman biar data baru muncul
        } else {
            alert("Gagal: " + result.message);
        }
    } catch (error) {
        console.error(error);
        alert("Terjadi kesalahan sistem.");
    } finally {
        setIsSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if(confirm("Yakin ingin menghapus proker ini permanen?")) {
      // Optimistic Update (Hapus dulu di layar biar berasa cepet)
      setProkers(prokers.filter(p => p.id !== id));
      
      const res = await deleteProker(id);
      if(!res.success) alert("Gagal menghapus data di server.");
    }
  };

  // --- FILTER LOGIC ---
  const filteredProkers = prokers.filter((item) => {
    const matchSekbid = filterSekbid === "Semua" ? true : item.sekbid === filterSekbid;
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSekbid && matchSearch;
  });

  // Mapping Status untuk Tampilan Kanban
  // Logic: Kalau progress 0 = SEGERA, 1-99 = BERJALAN, 100 = SELESAI
  const listSegera = filteredProkers.filter(p => p.progress === 0);
  const listBerjalan = filteredProkers.filter(p => p.progress > 0 && p.progress < 100);
  const listSelesai = filteredProkers.filter(p => p.progress === 100);

  return (
    <div className="relative h-full flex flex-col min-h-screen font-sans pb-20">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
        <div>
           <div className="flex items-center gap-3 mb-1">
               <h1 className="text-3xl font-bold font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-header-title">
                 Manajemen Proker <span className="text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">🚀</span>
               </h1>
               {isClient && <TourGuide steps={tourSteps} />}
           </div>
           <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Pantau status kegiatan: Segera, Berjalan, dan Selesai.</p>
        </div>
        
        <button onClick={openNewModal} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-transform active:scale-95 tour-buat-baru-btn">
           <Plus size={20} /> Proker Baru
        </button>
      </div>

      {/* TOOLBAR (Filter & Search) */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white/50 dark:bg-white/5 p-2 rounded-2xl border border-slate-200 dark:border-white/5 backdrop-blur-sm">
         <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {['Semua', 'Inti', 'MPK (Legislatif)', 'Sekbid 1', 'Sekbid 2', 'Sekbid 3', 'Sekbid 4'].map((sekbid) => (
               <button key={sekbid} onClick={() => setFilterSekbid(sekbid)} className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all border ${filterSekbid === sekbid ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-white border-blue-100 dark:border-transparent shadow-sm" : "bg-transparent border-transparent text-slate-500 hover:bg-white/50 dark:hover:bg-white/5"}`}>
                  {sekbid}
               </button>
            ))}
         </div>
         <div className="relative flex-1 md:w-72 group w-full">
            <input type="text" placeholder="Cari program kerja..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500/50 outline-none text-sm font-medium text-slate-700 dark:text-white shadow-sm"/>
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
         </div>
      </div>

      {/* KANBAN BOARD */}
      <div className="flex-1 overflow-x-auto pb-8 custom-scrollbar">
         <div className="flex flex-col md:flex-row gap-6 min-w-[1000px] md:min-w-0">
            {/* KOLOM SEGERA */}
            <KanbanColumn tourClass="tour-col-segera" title="SEGERA" icon={<AlertCircle size={18} />} count={listSegera.length} color="blue">
               {listSegera.map((item, idx) => (
                   <ProkerCard 
                       key={item.id} data={item} 
                       onDelete={handleDelete} onEdit={openEditModal} 
                       isFirstPriority={idx === 0 && item.priority === 'High'}
                   />
               ))}
            </KanbanColumn>
            
            {/* KOLOM BERJALAN */}
            <KanbanColumn tourClass="tour-col-berjalan" title="BERJALAN" icon={<PlayCircle size={18} />} count={listBerjalan.length} color="yellow">
               {listBerjalan.map((item) => <ProkerCard key={item.id} data={item} onDelete={handleDelete} onEdit={openEditModal} />)}
            </KanbanColumn>

            {/* KOLOM SELESAI */}
            <KanbanColumn title="SELESAI" icon={<CheckCircle size={18} />} count={listSelesai.length} color="green">
               {listSelesai.map((item) => <ProkerCard key={item.id} data={item} onDelete={handleDelete} onEdit={openEditModal} />)}
            </KanbanColumn>
         </div>
      </div>

      {/* MODAL INPUT FORM */}
      <AnimatePresence>
         {isModalOpen && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm"/>
               <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="relative w-full max-w-2xl bg-white dark:bg-[#0f172a] rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10 flex flex-col max-h-[90vh]">
                  
                  <div className="p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center">
                     <div>
                        <h2 className="text-xl font-black text-slate-900 dark:text-white">{isEditing ? "Edit Proker" : "Proker Baru"}</h2>
                        <p className="text-xs text-slate-500 mt-1">{isEditing ? "Update detail & progress kegiatan." : "Detail rencana kegiatan."}</p>
                     </div>
                     <button onClick={() => setIsModalOpen(false)}><X size={24} className="text-slate-400" /></button>
                  </div>

                  <div className="p-8 overflow-y-auto flex-1 space-y-5 custom-scrollbar">
                     <div className="space-y-4">
                        <div>
                           <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Nama Kegiatan</label>
                           <input type="text" value={formState.title} onChange={e => setFormState({...formState, title: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold dark:text-white" placeholder="Contoh: LDKS 2026" />
                        </div>
                        
                        <div>
                           <label className="text-xs font-bold text-slate-500 uppercase mb-1 block flex items-center gap-1"><FileText size={12}/> Deskripsi Singkat</label>
                           <textarea rows={2} value={formState.description} onChange={e => setFormState({...formState, description: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-medium dark:text-white resize-none" placeholder="Jelaskan tujuan kegiatan secara singkat..." />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Sekbid</label>
                              <select value={formState.sekbid} onChange={e => setFormState({...formState, sekbid: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold dark:text-white">
                                 <option>Inti</option><option>MPK (Legislatif)</option><option>Sekbid 1</option><option>Sekbid 2</option><option>Sekbid 3</option><option>Sekbid 4</option>
                              </select>
                           </div>
                           <div>
                              <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Prioritas</label>
                              <select value={formState.priority} onChange={e => setFormState({...formState, priority: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold dark:text-white">
                                 <option>High</option><option>Medium</option><option>Low</option>
                              </select>
                           </div>
                        </div>
                     </div>

                     <div className="border-t border-slate-100 dark:border-white/5 my-2"></div>

                     <div className="grid grid-cols-2 gap-4">
                        <div><label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Mulai</label><input type="date" value={formState.startDate} onChange={e => setFormState({...formState, startDate: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold dark:text-white" /></div>
                        <div><label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Selesai</label><input type="date" value={formState.endDate} onChange={e => setFormState({...formState, endDate: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold dark:text-white" /></div>
                        <div><label className="text-xs font-bold text-slate-500 uppercase mb-1 block">PIC (Penanggung Jawab)</label><input type="text" placeholder="Nama..." value={formState.pic} onChange={e => setFormState({...formState, pic: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold dark:text-white" /></div>
                        <div><label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Anggaran (Rp)</label><input type="number" placeholder="0" value={formState.budget} onChange={e => setFormState({...formState, budget: Number(e.target.value)})} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold dark:text-white" /></div>
                     </div>

                     <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-500/20">
                        <div className="flex justify-between items-center mb-2"><label className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase block">Progress</label><span className="text-sm font-black text-blue-600 dark:text-white">{formState.progress}%</span></div>
                        <input type="range" min="0" max="100" value={formState.progress} onChange={(e) => setFormState({...formState, progress: parseInt(e.target.value)})} className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                     </div>
                  </div>

                  <div className="p-6 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5 flex justify-end gap-3">
                     <button onClick={() => setIsModalOpen(false)} disabled={isSaving} className="px-6 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">Batal</button>
                     <button onClick={handleSave} disabled={isSaving} className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-lg shadow-blue-500/30 flex items-center gap-2">
                        {isSaving && <Loader2 className="animate-spin" size={16}/>}
                        {isSaving ? "Menyimpan..." : (isEditing ? "Update Proker" : "Simpan Proker")}
                     </button>
                  </div>
               </motion.div>
            </div>
         )}
      </AnimatePresence>
    </div>
  );
}

// === KOMPONEN PENDUKUNG (KanbanColumn & ProkerCard) ===

function KanbanColumn({ title, icon, count, children, color, tourClass }: any) {
   const colors: any = {
      blue: "bg-blue-50/80 dark:bg-blue-900/10 border-blue-200 dark:border-blue-500/20",
      yellow: "bg-yellow-50/80 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-500/20",
      green: "bg-slate-50/80 dark:bg-slate-800/30 border-slate-200 dark:border-white/10",
   }
   const textColors: any = {
      blue: "text-blue-600 dark:text-blue-400",
      yellow: "text-yellow-600 dark:text-yellow-400",
      green: "text-slate-600 dark:text-slate-400",
   }
   return (
      <div className={`flex-1 rounded-[2rem] p-4 border ${colors[color]} flex flex-col min-h-[500px] ${tourClass || ''}`}>
         <div className="flex items-center justify-between mb-4 px-2">
            <div className={`flex items-center gap-2 font-black uppercase tracking-wider text-xs ${textColors[color]}`}>{icon} <span>{title}</span></div>
            <span className="px-2.5 py-0.5 rounded-full bg-white dark:bg-white/10 text-xs font-bold text-slate-500 dark:text-slate-400 shadow-sm">{count}</span>
         </div>
         <div className="space-y-3 flex-1">{children}</div>
      </div>
   )
}

function ProkerCard({ data, onDelete, onEdit, isFirstPriority }: any) {
   // Warna PIC Random/Static
   const colorVariants: any = {
      blue: "from-blue-400 to-blue-600", purple: "from-purple-400 to-purple-600",
      pink: "from-pink-400 to-pink-600", green: "from-green-400 to-green-600", orange: "from-orange-400 to-orange-600",
   };
   
   // Logic Status Badge
   const getStatusBadge = (progress: number) => {
      if (progress === 100) return <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-wide">SELESAI</span>;
      if (progress > 0) return <span className="px-2.5 py-1 rounded-md bg-yellow-100 text-yellow-700 text-[10px] font-black uppercase tracking-wide">BERJALAN</span>;
      return <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-wide">SEGERA</span>;
   }

   const statusColor = data.progress === 100 ? 'bg-slate-400' : data.progress > 0 ? 'bg-yellow-500' : 'bg-blue-500';

   return (
      <motion.div layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }} className="bg-white dark:bg-[#1e293b] p-4 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm cursor-grab active:cursor-grabbing group relative overflow-hidden">
         <div className="flex justify-between items-start mb-3">
            {getStatusBadge(data.progress)}
            <div className="flex gap-2">
                <span className="text-[10px] font-bold text-slate-400">{data.sekbid}</span>
                <button onClick={() => onEdit(data)} className="text-slate-300 hover:text-blue-500 transition-colors tour-edit-action" title="Edit"><Edit size={14} /></button>
                <button onClick={() => onDelete(data.id)} className="text-slate-300 hover:text-red-500 transition-colors" title="Hapus"><Trash2 size={14} /></button>
            </div>
         </div>

         <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-1 leading-snug group-hover:text-blue-600 transition-colors">{data.title}</h3>
         
         <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-3 line-clamp-2 leading-relaxed">
            {data.description || "Tidak ada deskripsi kegiatan."}
         </p>

         <div className="mb-4">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1"><span>Progress</span><span>{data.progress}%</span></div>
            <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
               <div className={`h-full rounded-full transition-all duration-500 ${statusColor}`} style={{ width: `${data.progress}%` }} />
            </div>
         </div>

         <div className="flex items-center justify-between pt-3 border-t border-slate-50 dark:border-white/5">
            <div className="flex items-center gap-2">
               <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold text-white bg-gradient-to-br ${colorVariants[data.picColor || "blue"]}`}>
                  {data.pic ? data.pic.charAt(0) : "?"}
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">{data.endDate || "-"}</span>
                  {data.budget > 0 && <span className="text-[9px] text-slate-400 font-mono">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(data.budget)}</span>}
               </div>
            </div>
            
            {data.priority === 'High' && (
                <div className={`flex items-center gap-1 text-[10px] font-bold text-red-500 bg-red-50 dark:bg-red-500/10 px-2 py-0.5 rounded-full ${isFirstPriority ? 'tour-priority-badge' : ''}`}>
                    <Flag size={10} fill="currentColor" /> High
                </div>
            )}
         </div>
      </motion.div>
   )
}