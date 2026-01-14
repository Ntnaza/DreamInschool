// components/LeaderSection.tsx

import Image from "next/image";
import { prisma } from "@/lib/prisma"; // ✅ SUDAH DIPERBAIKI (Sesuai file Koh Raka)

// Function untuk ambil data Real dari MySQL
async function getLeaders() {
  try {
    const data = await prisma.leader.findMany({
      orderBy: {
        id: 'asc', // Urutkan berdasarkan ID biar Raka (OSIS) duluan, baru Siti (MPK)
      },
    });
    return data;
  } catch (error) {
    console.error("Gagal mengambil data leader:", error);
    return []; // Return array kosong jika error biar web gak crash
  }
}

export default async function LeaderSection() {
  const leaders = await getLeaders();

  // Jika database masih kosong, tampilkan pesan ini
  if (!leaders || leaders.length === 0) {
    return (
      <section className="py-32 text-center">
        <p className="text-slate-500">Belum ada data Pengurus. Silakan jalankan seeding.</p>
      </section>
    );
  }

  return (
    <section className="relative w-full pt-20 pb-40 z-10 overflow-hidden transition-colors duration-500">
      
      {/* === BACKGROUND FIX === */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-200 to-slate-300 dark:from-[#020617] dark:to-[#0f172a] z-0 transition-colors duration-500" />
      
      {/* === NOISE TEXTURE === */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] dark:opacity-[0.10] mix-blend-overlay z-0" />
      
      {/* AMBIENT LIGHT (LIGHT MODE) */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[100px] dark:hidden" />
      <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-[100px] dark:hidden" />

      {/* AMBIENT LIGHT (DARK MODE - SILVER THEME) */}
      <div className="hidden dark:block absolute top-[20%] left-[20%] w-96 h-96 bg-slate-500/10 rounded-full blur-[100px] animate-pulse" />
      <div className="hidden dark:block absolute bottom-[20%] right-[20%] w-96 h-96 bg-slate-400/10 rounded-full blur-[100px] animate-pulse" />


      <div className="relative z-20 max-w-6xl mx-auto px-8 md:px-12 space-y-48">

        {/* ------------------------------------------------
            LOOPING DATA DARI DATABASE
           ------------------------------------------------ */}
        {leaders.map((leader, index) => {
          // Logika Layout: Genap (0, 2) = Foto Kiri, Ganjil (1, 3) = Foto Kanan
          const isEven = index % 2 === 0;
          
          // Konversi Tags dari String "A,B,C" ke Array ["A", "B", "C"]
          const tagsArray = leader.tags ? leader.tags.split(',') : [];

          return (
            <div 
              key={leader.id} 
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative group`}
            >
              
              {/* === FOTO PROFIL === */}
              <div className={`relative w-full md:w-5/12 flex justify-center ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-blue-200/50 dark:bg-white/10 blur-[70px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
                  
                  {/* Frame Foto */}
                  <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] rounded-3xl overflow-hidden border border-slate-300 dark:border-slate-700/50 bg-white/50 dark:bg-white/5 shadow-2xl dark:shadow-none transition-all duration-500 group-hover:-translate-y-2 backdrop-blur-sm">
                    <Image
                      src={leader.image} 
                      alt={leader.role}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-0 dark:grayscale-[30%] dark:group-hover:grayscale-0"
                    />
                    
                    {/* Overlay Nama & Jabatan */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent dark:from-[#0f172a] dark:via-[#0f172a]/80 p-6 pt-24">
                        <h3 className="text-2xl font-black uppercase tracking-wide text-white">
                          {leader.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="h-[1px] w-8 bg-blue-400 dark:bg-slate-400"></span>
                          <p className="text-blue-300 dark:text-slate-300 text-xs font-bold tracking-[0.2em] uppercase">
                            {leader.role}
                          </p>
                        </div>
                    </div>
                  </div>
              </div>

              {/* === TEKS DESKRIPSI === */}
              <div className={`w-full md:w-7/12 text-center ${isEven ? 'md:text-left' : 'md:text-left'} space-y-6`}>
                <h2 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white">
                  {/* Logic Memecah Judul Vision (Jika ada koma) */}
                  {leader.vision.includes(',') ? (
                    <>
                      {leader.vision.split(',')[0]}, <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-slate-100 dark:via-slate-300 dark:to-slate-500">
                        {leader.vision.split(',').slice(1).join(',')}
                      </span>
                    </>
                  ) : (
                    <span>{leader.vision}</span>
                  )}
                </h2>

                <p className="text-slate-700 dark:text-slate-400 leading-relaxed text-sm md:text-base font-medium dark:font-light max-w-xl mx-auto md:mx-0 border-l-2 border-blue-600/30 dark:border-slate-500/50 pl-4">
                  "{leader.mission}"
                </p>

                <div className={`flex flex-wrap justify-center ${isEven ? 'md:justify-start' : 'md:justify-start'} gap-3 pt-2`}>
                    {tagsArray.map((tag, i) => (
                      <span key={i} className="px-4 py-1.5 rounded-full bg-white/60 dark:bg-slate-800 border border-blue-300 dark:border-slate-600/50 text-xs font-bold text-blue-800 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-default tracking-wide shadow-sm">
                        ✦ {tag.trim()}
                      </span>
                    ))}
                </div>
              </div>
              
            </div>
          );
        })}

      </div>
    </section>
  );
}