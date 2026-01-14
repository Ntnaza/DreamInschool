import { prisma } from "@/lib/prisma";

// Function: Ambil Aspirasi yang SUDAH DIBALAS
async function getAspirasi() {
  try {
    const data = await prisma.aspirasi.findMany({
      where: {
        NOT: {
          balasan: null // Hanya ambil yang sudah ada balasannya
        }
      },
      take: 3, // Ambil 3 sampel aja buat di Wall
      orderBy: { createdAt: 'desc' }
    });
    return data;
  } catch (error) {
    console.error("Gagal ambil aspirasi:", error);
    return [];
  }
}

// Helper: Hitung "2 Jam yang lalu" (Simple Version)
function timeAgo(date: Date) {
  const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) return Math.floor(interval) + " tahun lalu";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " bulan lalu";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " hari lalu";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " jam lalu";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " menit lalu";
  return "Baru saja";
}

export default async function AspirasiWall() {
  const messages = await getAspirasi();

  // Kalau kosong, sembunyikan section
  if (messages.length === 0) return null;

  return (
    <section className="relative w-full pb-24 z-10 overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Divider text */}
        <div className="flex items-center gap-4 py-12">
          <div className="h-[1px] flex-1 bg-slate-300 dark:bg-slate-700"></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Aspirasi Terpublikasi
          </span>
          <div className="h-[1px] flex-1 bg-slate-300 dark:bg-slate-700"></div>
        </div>

        {/* Grid Aspirasi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {messages.map((item) => (
            <div key={item.id} className="flex flex-col h-full animate-fade-in-up">
              
              {/* BUBBLE USER (ATAS) */}
              <div className="relative bg-white dark:bg-[#1e293b] p-6 rounded-t-3xl rounded-br-3xl rounded-bl-none border border-slate-200 dark:border-slate-700 shadow-sm flex-1">
                <div className="flex justify-between items-start mb-3">
                   <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${item.pengirim === 'Anonim' ? 'bg-slate-200 text-slate-600' : 'bg-blue-100 text-blue-600'}`}>
                        {item.pengirim.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">{item.pengirim}</h4>
                        <p className="text-[10px] text-slate-500">
                           {item.kelas || "Siswa"} • {timeAgo(item.createdAt)}
                        </p>
                      </div>
                   </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic">
                  "{item.isi}"
                </p>
              </div>

              {/* CONNECTOR LINE */}
              <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-600 ml-8"></div>

              {/* BUBBLE ADMIN (BAWAH) */}
              <div className="relative bg-blue-50 dark:bg-slate-900/50 p-5 rounded-b-3xl rounded-tl-none rounded-tr-3xl border border-blue-100 dark:border-slate-700 ml-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white">
                      REPLY
                    </span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-400">
                      Admin OSIS/MPK
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-xs">
                    {item.balasan}
                  </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}