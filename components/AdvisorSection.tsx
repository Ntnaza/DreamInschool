import Image from "next/image";
import { prisma } from "@/lib/prisma";

// Ambil data Pembina dari tabel Pengurus
async function getAdvisors() {
  try {
    const data = await prisma.pengurus.findMany({
      where: {
        isAdvisor: true // Filter hanya yang ditandai sebagai Pembina
      },
      orderBy: {
        nis: 'asc' // Urutkan berdasarkan NIP (Senioritas)
      }
    });
    return data;
  } catch (error) {
    console.error("Gagal ambil advisor:", error);
    return [];
  }
}

export default async function AdvisorSection() {
  const advisors = await getAdvisors();

  if (advisors.length === 0) return null;

  return (
    <section className="relative w-full py-24 z-10 overflow-hidden bg-white dark:bg-[#0b1121] transition-colors duration-500">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-transparent to-transparent dark:from-slate-800/20 dark:to-transparent opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Pembina <span className="text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-slate-200 dark:to-slate-400">Organisasi</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-slate-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium">
            Membimbing dengan hati, mengarahkan dengan visi. Sosok inspiratif di balik kemajuan OSIS & MPK.
          </p>
        </div>

        {/* GRID PEMBINA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((item) => (
            <div 
              key={item.id} 
              className="group relative flex flex-col items-center text-center p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-blue-200 dark:hover:border-slate-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Foto Circle dengan Border */}
              <div className="relative w-32 h-32 mb-6 rounded-full p-1 bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-slate-400 dark:to-slate-600 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-[#0b1121] relative">
                   <Image 
                     src={item.fotoUrl || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"} 
                     alt={item.nama}
                     fill
                     className="object-cover"
                   />
                </div>
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-slate-200 transition-colors">
                {item.nama}
              </h3>
              
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-slate-700 dark:text-slate-300 mb-2">
                {item.jabatan}
              </span>

              <p className="text-xs text-slate-500 dark:text-slate-500 font-mono">
                NIP. {item.nis} {/* Kita pakai kolom NIS untuk simpan NIP */}
              </p>

              {/* Garis Dekorasi Bawah */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-500 dark:bg-slate-400 rounded-t-full transition-all duration-300 group-hover:w-1/2" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}