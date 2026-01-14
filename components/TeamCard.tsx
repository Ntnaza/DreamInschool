"use client";

import Image from "next/image";
import Link from "next/link";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  color: "blue" | "purple" | "green" | "orange" | "red" | "yellow" | "cyan" | "pink";
  instagram?: string;
}

export default function TeamCard({ name, role, image, color, instagram }: TeamMemberProps) {
  
  // Logic Warna Aura (Glow)
  const getGlowColor = (c: string) => {
    switch (c) {
      case "blue": return "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:border-blue-500/50";
      case "purple": return "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] group-hover:border-purple-500/50";
      case "green": return "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] group-hover:border-green-500/50";
      case "orange": return "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] group-hover:border-orange-500/50";
      case "red": return "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] group-hover:border-red-500/50";
      case "yellow": return "group-hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] group-hover:border-yellow-500/50";
      case "cyan": return "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] group-hover:border-cyan-500/50";
      case "pink": return "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] group-hover:border-pink-500/50";
      default: return "group-hover:shadow-[0_0_30px_rgba(148,163,184,0.5)]";
    }
  };

  const getBgGradient = (c: string) => {
    switch (c) {
      case "blue": return "from-blue-500 to-indigo-500";
      case "purple": return "from-purple-500 to-pink-500";
      case "green": return "from-green-500 to-emerald-500";
      case "orange": return "from-orange-500 to-red-500";
      case "red": return "from-red-600 to-rose-600";
      case "yellow": return "from-yellow-400 to-orange-400";
      case "cyan": return "from-cyan-400 to-blue-400";
      case "pink": return "from-pink-500 to-rose-500";
      default: return "from-slate-500 to-gray-500";
    }
  };

  return (
    <div className={`group relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${getGlowColor(color)}`}>
      
      {/* Background Image (Foto) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        {/* Gradient Overlay (Bawah ke Atas) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
      </div>

      {/* Content (Text) */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        
        {/* Garis Warna Jabatan */}
        <div className={`w-12 h-1 mb-3 rounded-full bg-gradient-to-r ${getBgGradient(color)}`} />
        
        <h3 className="text-xl font-bold text-white leading-tight mb-1">
          {name}
        </h3>
        <p className={`text-xs font-bold uppercase tracking-widest text-white/80`}>
          {role}
        </p>

        {/* Social Media (Muncul pas hover) */}
        <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-500 mt-0 group-hover:mt-3 opacity-0 group-hover:opacity-100">
           {instagram && (
             <Link href={`https://instagram.com/${instagram}`} target="_blank" className="flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
               <span>@{instagram}</span>
             </Link>
           )}
        </div>
      </div>

    </div>
  );
}