  "use client";

  import Image from "next/image";

  export default function MajorsSection() {
    const majors = [
      {
        id: "PPLG",
        name: "Pengembangan Perangkat Lunak & Gim",
        short: "PPLG (RPL)",
        desc: "Mencetak programmer dan developer handal yang menguasai coding, pembuatan aplikasi, web, hingga game development.",
        color: "blue",
        logo: "/logos/PPLG.png"
      },
      {
        id: "TJKT",
        name: "Teknik Jaringan Komputer & Telekomunikasi",
        short: "TJKT (TKJ)",
        desc: "Ahli dalam merancang, membangun, dan mengamankan infrastruktur jaringan, server, hingga teknologi fiber optik.",
        color: "red",
        logo: "/logos/TJKT.png"
      },
      {
        id: "DKV",
        name: "Desain Komunikasi Visual",
        short: "DKV (Multimedia)",
        desc: "Mengasah kreativitas dalam desain grafis, fotografi, videografi, dan animasi untuk industri kreatif digital.",
        color: "purple", // Ganti ke ungu/abu biar estetik
        logo: "/logos/DKV.png"
      },
      {
        id: "MPLB",
        name: "Manajemen Perkantoran & Layanan Bisnis",
        short: "MPLB (OTKP)",
        desc: "Menyiapkan tenaga profesional dalam administrasi perkantoran, kearsipan digital, dan public speaking.",
        color: "slate",
        logo: "/logos/MPLB.png"
      },
      {
        id: "AKL",
        name: "Akuntansi & Keuangan Lembaga",
        short: "AKL",
        desc: "Kompeten dalam pengelolaan keuangan, pembukuan, perpajakan, dan audit dengan standar akuntansi modern.",
        color: "amber",
        logo: "/logos/AKL.png"
      },
      {
        id: "TO",
        name: "Teknik Otomotif",
        short: "TO (TKR/TSM)",
        desc: "Terampil dalam perawatan, perbaikan, dan modifikasi kendaraan ringan maupun sepeda motor dengan teknologi terkini.",
        color: "indigo",
        logo: "/logos/TO.png"
      }
    ];

    // Helper function buat nentuin class warna biar kodenya rapi
    const getColorClasses = (color: string) => {
      switch (color) {
        case "blue": return "group-hover:border-blue-500/50 group-hover:shadow-blue-500/20";
        case "red": return "group-hover:border-red-500/50 group-hover:shadow-red-500/20";
        case "purple": return "group-hover:border-purple-500/50 group-hover:shadow-purple-500/20";
        case "amber": return "group-hover:border-amber-500/50 group-hover:shadow-amber-500/20";
        case "indigo": return "group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/20";
        default: return "group-hover:border-slate-500/50 group-hover:shadow-slate-500/20";
      }
    };

    const getBadgeColor = (color: string) => {
      switch (color) {
        case "blue": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
        case "red": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
        case "purple": return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300";
        case "amber": return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";
        case "indigo": return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300";
        default: return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
      }
    };

    return (
      <section className="relative w-full py-24 z-10 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
        
        {/* Pattern Titik-titik Halus */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
              Konsentrasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-slate-200 dark:to-slate-500">Keahlian</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              Pilihan jurusan terbaik untuk mencetak generasi unggul yang siap kerja, santun, dan mandiri.
            </p>
          </div>

          {/* GRID JURUSAN */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majors.map((item) => (
              <div 
                key={item.id}
                className={`group relative p-8 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${getColorClasses(item.color)}`}
              >
                {/* Logo Jurusan (Melayang di Kanan Atas) */}
                <div className="absolute top-6 right-6 w-16 h-16 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0">
                  <Image 
                    src={item.logo} 
                    alt={item.short} 
                    fill 
                    className="object-contain"
                  />
                </div>

                {/* Icon Dekorasi Kecil (Di Kiri Atas) */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-xl shadow-sm transition-colors duration-300 ${getBadgeColor(item.color)}`}>
                  🎓
                </div>

                {/* Konten Teks */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 pr-12">
                  {item.id}
                </h3>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
                  {item.name}
                </p>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Tombol Pelajari (Opsional) */}
                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/10 flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-blue-600 dark:group-hover:text-white transition-colors cursor-pointer">
                  <span>Selengkapnya</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    );
  }