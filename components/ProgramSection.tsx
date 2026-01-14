import Image from "next/image";
import { prisma } from "@/lib/prisma"; // Pastikan import ini benar

// Function ambil data (Hanya ambil 3 program teratas)
async function getPrograms() {
  try {
    const data = await prisma.programKerja.findMany({
      take: 3, // Cuma ambil 3 biji buat di Landing Page
      orderBy: [
        { isFeatured: 'desc' }, // Yang Featured (True) taruh paling atas
        { createdAt: 'desc' }
      ]
    });
    return data;
  } catch (error) {
    console.error("Gagal ambil proker:", error);
    return [];
  }
}

export default async function ProgramSection() {
  const programs = await getPrograms();

  if (programs.length === 0) return null; // Hide section kalau kosong

  return (
    <section className="relative w-full py-24 z-10 overflow-hidden">
      
      {/* === BACKGROUND SEAMLESS === */}
      <div className="absolute inset-0 bg-slate-300 dark:bg-[#0f172a] z-0" />
      
      {/* Dekorasi Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-blue-400/30 dark:bg-slate-400/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-indigo-400/30 dark:bg-white/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
            Program <span className="text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-slate-200 dark:to-slate-500">Unggulan</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            Inovasi kegiatan untuk mengembangkan bakat, minat, dan karakter siswa SMK Nurul Islam Cianjur.
          </p>
        </div>

        {/* === BENTO GRID DYNAMIC === */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {programs.map((program, index) => {
            // LOGIKA WARNA & UKURAN BERDASARKAN URUTAN
            // Index 0 (Utama) = Biru & Besar
            // Index 1 = Ungu & Kecil
            // Index 2 = Orange & Kecil
            
            const isMain = index === 0;
            let gradientColor = "";
            let badgeColor = "";
            let subTextColor = "";

            if (index === 0) { // BLUE THEME
               gradientColor = "from-slate-900 via-slate-900/40 to-transparent";
               badgeColor = "bg-blue-600 shadow-blue-600/50";
               subTextColor = "text-slate-200";
            } else if (index === 1) { // PURPLE THEME
               gradientColor = "from-purple-900/90 via-purple-900/20 to-transparent";
               subTextColor = "text-purple-200";
            } else { // ORANGE THEME
               gradientColor = "from-orange-900/90 via-orange-900/20 to-transparent";
               subTextColor = "text-orange-200";
            }

            return (
              <div 
                key={program.id}
                className={`group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 
                  ${isMain ? 'col-span-1 md:col-span-2 md:row-span-2' : 'col-span-1 md:col-span-1 md:row-span-1'}
                `}
              >
                {/* BACKGROUND IMAGE */}
                <div className="absolute inset-0 z-0">
                   <Image 
                     src={program.image || "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"} 
                     alt={program.nama}
                     fill
                     className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 dark:opacity-70"
                   />
                   {/* Gradient Overlay */}
                   <div className={`absolute inset-0 bg-gradient-to-t ${gradientColor}`} />
                </div>
                
                {/* CONTENT */}
                <div className={`absolute bottom-0 left-0 w-full z-10 ${isMain ? 'p-8' : 'p-6'}`}>
                  
                  {/* Badge hanya untuk yang utama */}
                  {isMain && (
                    <span className={`px-3 py-1 rounded-full text-white text-xs font-bold tracking-wider mb-3 inline-block shadow-lg ${badgeColor}`}>
                      TRENDING 🔥
                    </span>
                  )}

                  <h3 className={`${isMain ? 'text-2xl md:text-4xl' : 'text-xl'} font-black text-white mb-2`}>
                    {program.nama}
                  </h3>
                  
                  <p className={`${subTextColor} ${isMain ? 'text-sm md:text-base max-w-lg line-clamp-2' : 'text-xs font-medium line-clamp-2'}`}>
                    {program.deskripsi}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}