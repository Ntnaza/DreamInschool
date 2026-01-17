// components/LeaderSection.tsx

import Image from "next/image";
import { prisma } from "@/lib/prisma"; 

// Function untuk ambil data Ketua OSIS & MPK dari tabel PENGURUS
async function getLeaders() {
  try {
    // Cari pengurus yang jabatannya ada kata "Ketua" (Osis/Mpk)
    const data = await prisma.pengurus.findMany({
      where: {
        jabatan: {
          contains: "Ketua" // Ini bakal nangkep "Ketua OSIS" dan "Ketua MPK"
        }
      }
    });
    
    // Sorting Manual: Pastikan Ketua OSIS (A Ramdani) selalu di kiri/atas
    const sortedData = data.sort((a, b) => {
      const roleA = a.jabatan.toLowerCase();
      const roleB = b.jabatan.toLowerCase();
      
      // Prioritas 1: Ketua OSIS
      if (roleA.includes("osis") && !roleA.includes("wakil")) return -1;
      if (roleB.includes("osis") && !roleB.includes("wakil")) return 1;
      
      // Prioritas 2: Ketua MPK
      if (roleA.includes("mpk") && !roleA.includes("wakil")) return -1;
      if (roleB.includes("mpk") && !roleB.includes("wakil")) return 1;
      
      return 0;
    });

    return sortedData;
  } catch (error) {
    console.error("Gagal mengambil data leader:", error);
    return []; 
  }
}

export default async function LeaderSection() {
  const leaders = await getLeaders();

  // Kalau belum ada Ketua, sembunyikan section ini
  if (!leaders || leaders.length === 0) {
    return null; 
  }

  return (
    <section className="relative w-full pt-20 pb-40 z-10 overflow-hidden transition-colors duration-500">
      
      {/* Background & Decoration tetap sama... */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-200 to-slate-300 dark:from-[#020617] dark:to-[#0f172a] z-0 transition-colors duration-500" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] dark:opacity-[0.10] mix-blend-overlay z-0" />
      
      <div className="relative z-20 max-w-6xl mx-auto px-8 md:px-12 space-y-48">

        {leaders.map((leader, index) => {
          const isEven = index % 2 === 0;
          
          // DEFAULT DATA (Kalau visi/misi belum diisi di Admin)
          const visiDefault = "Mewujudkan organisasi yang unggul, kreatif, dan berakhlak mulia.";
          const misiDefault = "Mengaktifkan program kerja yang inovatif dan membangun sinergi antar siswa.";
          const quoteDefault = "Pemimpin Sejati, Melayani dengan Hati";

          // Kita pakai data dari DB, kalau kosong pakai default
          const visi = leader.visi || visiDefault;
          const misi = leader.misi || misiDefault;
          const quote = leader.motto || quoteDefault;

          return (
            <div key={leader.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative group`}>
              
              {/* === FOTO PROFIL === */}
              <div className={`relative w-full md:w-5/12 flex justify-center ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div className="absolute inset-0 bg-blue-200/50 dark:bg-white/10 blur-[70px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
                  
                  <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] rounded-3xl overflow-hidden border border-slate-300 dark:border-slate-700/50 bg-white/50 dark:bg-white/5 shadow-2xl dark:shadow-none transition-all duration-500 group-hover:-translate-y-2 backdrop-blur-sm">
                    <Image
                      // Cek fotoUrl, kalau null pakai placeholder
                      src={leader.fotoUrl || "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop"} 
                      alt={leader.jabatan}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-0 dark:grayscale-[30%] dark:group-hover:grayscale-0"
                    />
                    
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent dark:from-[#0f172a] dark:via-[#0f172a]/80 p-6 pt-24">
                        <h3 className="text-2xl font-black uppercase tracking-wide text-white">
                          {leader.nama}
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="h-[1px] w-8 bg-blue-400 dark:bg-slate-400"></span>
                          <p className="text-blue-300 dark:text-slate-300 text-xs font-bold tracking-[0.2em] uppercase">
                            {leader.jabatan}
                          </p>
                        </div>
                    </div>
                  </div>
              </div>

              {/* === TEKS DESKRIPSI (VISI & MISI) === */}
              <div className={`w-full md:w-7/12 text-center ${isEven ? 'md:text-left' : 'md:text-left'} space-y-6`}>
                <h2 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white">
                  {/* Efek visual Visi */}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-slate-100 dark:via-slate-300 dark:to-slate-500">
                    "{visi}"
                  </span>
                </h2>

                <p className="text-slate-700 dark:text-slate-400 leading-relaxed text-sm md:text-base font-medium dark:font-light max-w-xl mx-auto md:mx-0 border-l-2 border-blue-600/30 dark:border-slate-500/50 pl-4">
                  Misi: {misi}
                </p>

                <div className={`flex flex-wrap justify-center ${isEven ? 'md:justify-start' : 'md:justify-start'} gap-3 pt-2`}>
                   <span className="px-4 py-1.5 rounded-full bg-white/60 dark:bg-slate-800 border border-blue-300 dark:border-slate-600/50 text-xs font-bold text-blue-800 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-default tracking-wide shadow-sm">
                      ✦ {quote}
                   </span>
                </div>
              </div>
              
            </div>
          );
        })}

      </div>
    </section>
  );
}