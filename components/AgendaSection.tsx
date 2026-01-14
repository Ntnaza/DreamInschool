import { prisma } from "@/lib/prisma";

// Function: Ambil Program Kerja sebagai Agenda
async function getAgendas() {
  try {
    const data = await prisma.programKerja.findMany({
      take: 4, // Ambil 4 agenda terdekat
      orderBy: { deadline: 'asc' }, // Urutkan dari tanggal terdekat
      where: {
        deadline: {
            gte: new Date('2024-01-01') // Ambil yang tahun-tahun ini aja (Opsional)
        }
      }
    });
    return data;
  } catch (error) {
    console.error("Gagal ambil agenda:", error);
    return [];
  }
}

// Helper: Format Tanggal (15 Jan 2026)
// Helper: Format Tanggal (MANUAL SUPAYA SERVER & CLIENT SAMA PERSIS)
function formatDate(date: Date | null) {
  if (!date) return "TBA";
  
  const d = new Date(date);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "Mei", "Jun", 
    "Jul", "Agust", "Sep", "Okt", "Nov", "Des"
  ];

  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${month} ${year}`;
}

// Helper: Tentukan Warna Berdasarkan Urutan (0-3)
function getTheme(index: number) {
  const themes = [
    { color: 'blue', badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
    { color: 'purple', badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' },
    { color: 'emerald', badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' },
    { color: 'orange', badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' }
  ];
  return themes[index % themes.length]; // Looping warna (kalau data > 4, balik ke biru)
}

export default async function AgendaSection() {
  const agendas = await getAgendas();

  if (agendas.length === 0) return null;

  return (
    <section className="relative w-full py-24 z-10 overflow-hidden bg-slate-200 dark:bg-[#020617] transition-colors duration-500">
      
      {/* === BACKGROUND PATTERN FIX === */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:hidden pointer-events-none" />
      <div className="hidden dark:block absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Agenda <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-slate-100 dark:via-slate-300 dark:to-slate-500">Mendatang</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            Jadwal kegiatan akademik dan non-akademik yang telah terencana. 
            <br className="hidden md:block" />
            Manajemen waktu yang baik adalah kunci kesuksesan organisasi.
          </p>
        </div>

        {/* === TIMELINE CONTAINER === */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* GARIS TENGAH */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent dark:from-slate-400 dark:via-slate-700 md:-translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {agendas.map((item, index) => {
              const theme = getTheme(index);

              return (
                <div key={item.id} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* 1. TITIK TENGAH (DOT) */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 dark:bg-slate-200 rounded-full border-4 border-slate-200 dark:border-[#020617] shadow-[0_0_20px_rgba(37,99,235,0.5)] dark:shadow-[0_0_20px_rgba(255,255,255,0.3)] md:-translate-x-1/2 z-20" />

                  {/* 2. AREA TANGGAL (Sisi Kosong di Desktop) */}
                  <div className="hidden md:block w-1/2 text-right px-12 opacity-0" /> 

                  {/* 3. KARTU AGENDA (Content) */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    
                    <div className="group relative p-6 bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-300 dark:border-white/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      
                      {/* Efek Glow pas Hover */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-r ${
                        index % 2 === 0 ? 'from-transparent via-transparent to-blue-500/5 dark:to-white/5' : 'from-blue-500/5 dark:from-white/5 via-transparent to-transparent'
                      }`} />

                      {/* Badge Status */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 ${theme.badge}`}>
                        <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                        {item.status.replace('_', ' ')} {/* Mengubah IN_PROGRESS jadi IN PROGRESS */}
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-slate-300 transition-colors">
                        {item.nama}
                      </h3>
                      
                      <div className={`flex flex-col gap-1 text-sm text-slate-500 dark:text-slate-400 mb-3 font-medium
                         ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}
                      `}>
                        <span className="flex items-center gap-2">
                          📅 {formatDate(item.deadline)}
                        </span>
                        <span className="flex items-center gap-2">
                          📍 {item.lokasi || "Lingkungan Sekolah"}
                        </span>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.deskripsi}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Tombol Lihat Kalender Lengkap */}
          <div className="mt-16 text-center">
              <button className="px-8 py-3 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-black font-bold text-sm hover:scale-105 transition-transform shadow-2xl">
                Lihat Semua Program Kerja 📅
              </button>
          </div>

        </div>

      </div>
    </section>
  );
}