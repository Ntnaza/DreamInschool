"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Mail, CheckCircle2, Circle, ClipboardList } from "lucide-react";
// Gunakan icon dari react-icons untuk WhatsApp karena lucide tidak punya
import { FaWhatsapp } from "react-icons/fa";

function ProfileCard({ data, index }: { data: any, index: number }) {
  // Logic untuk Zig-zag layout
  const isEven = index % 2 === 0;

  const colorClasses: any = {
    blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", hex: "#3b82f6" },
    purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", hex: "#a855f7" },
    cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", hex: "#06b6d4" },
    emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", hex: "#10b981" },
    orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400", hex: "#f97316" },
    green: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400", hex: "#22c55e" },
    pink: { bg: "bg-pink-500/10", border: "border-pink-500/30", text: "text-pink-400", hex: "#ec4899" },
    yellow: { bg: "bg-yellow-500/10", border: "border-yellow-500/30", text: "text-yellow-400", hex: "#eab308" },
    slate: { bg: "bg-slate-500/10", border: "border-slate-500/30", text: "text-slate-400", hex: "#64748b" },
  };

  const theme = colorClasses[data.color] || colorClasses['slate'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative w-full max-w-7xl mx-auto flex flex-col xl:flex-row ${isEven ? 'xl:flex-row' : 'xl:flex-row-reverse'} items-center xl:items-stretch gap-8 xl:gap-16 py-12 md:py-24 group`}
    >
      {/* Garis Koneksi Timeline (Hanya desktop) */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/5 hidden xl:block" />

      {/* Titik Timeline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0a0f1c] border-4 hidden xl:block z-10" style={{ borderColor: theme.hex }} />

      {/* --- KOLOM FOTO --- */}
      <div className="w-full xl:w-1/2 flex justify-center py-4" style={{ justifyContent: typeof window !== 'undefined' && window.innerWidth < 1280 ? 'center' : (isEven ? 'flex-end' : 'flex-start') }}>
        <div className="relative w-[260px] h-[340px] md:w-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-white/20 transition-colors flex-shrink-0">
          <div className={`absolute inset-0 ${theme.bg} mix-blend-overlay z-10 pointer-events-none opacity-50`} />
          <Image
            src={data.img}
            alt={data.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index < 2}
          />
          {/* Overlay Gradient Profile */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

          <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 z-20">
            <span className={`inline-block px-2.5 py-1 mb-2 rounded-full text-[10px] font-bold uppercase tracking-widest ${theme.bg} ${theme.text} border ${theme.border} backdrop-blur-md`}>
              {data.role}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-1">{data.name}</h2>
            <p className="text-slate-300 font-bold tracking-wide text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.hex }} />
              {data.divisi}
            </p>
          </div>
        </div>
      </div>

      {/* --- KOLOM INFORMASI --- */}
      <div className={`w-full xl:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8 px-4 md:px-0 z-20 ${typeof window !== 'undefined' && window.innerWidth < 1280 ? 'text-center items-center' : (isEven ? 'text-left items-start' : 'text-left items-start')}`}>

        {/* Visi & Misi Blok */}
        <div className="w-full bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8 hover:border-white/10 transition-colors shadow-xl text-left">
          {(data.visi || data.misi) ? (
            <div className="space-y-6">
              {data.visi && (
                <div>
                  <h3 className={`text-sm font-bold uppercase tracking-widest ${theme.text} mb-2 flex items-center gap-2`}>
                    Visi
                  </h3>
                  <p className="text-white/95 font-bold leading-relaxed text-sm md:text-base italic border-l-2 pl-3" style={{ borderColor: theme.hex }}>
                    &quot;{data.visi}&quot;
                  </p>
                </div>
              )}
              {data.misi && (
                <div>
                  <h3 className={`text-sm font-bold uppercase tracking-widest ${theme.text} mb-2`}>Misi</h3>
                  <div className="text-white/90 font-bold leading-relaxed text-sm md:text-base whitespace-pre-line text-justify space-y-2">
                    {data.misi.split('\n').map((paragraph: string, i: number) => (
                      <p key={i}>{paragraph.trim()}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-4">
              <p className="text-slate-500 italic text-sm font-bold">Belum ada Visi/Misi yang dicantumkan.</p>
            </div>
          )}

          {/* Moto */}
          {data.motto && (
            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="text-slate-300 font-bold text-sm text-center">&quot;{data.motto}&quot;</p>
            </div>
          )}
        </div>

        {/* Sosial Media & Kontak */}
        {(data.instagram || data.hp || data.email) && (
          <div className="flex flex-wrap items-center justify-center xl:justify-start gap-3 w-full">
            {data.instagram && (
              <a href={`https://instagram.com/${data.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-slate-300 hover:text-white text-sm font-bold shadow-sm">
                <Instagram size={18} className="text-pink-500" />
                <span>{data.instagram}</span>
              </a>
            )}
            {data.hp && (
              <a href={`https://wa.me/${data.hp.replace(/^0/, '62')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-slate-300 hover:text-white text-sm font-bold shadow-sm">
                <FaWhatsapp size={18} className="text-emerald-500" />
                <span>WhatsApp</span>
              </a>
            )}
            {data.email && (
              <a href={`mailto:${data.email}`} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-slate-300 hover:text-white text-sm font-bold shadow-sm">
                <Mail size={18} className="text-slate-400" />
                <span>Email</span>
              </a>
            )}
          </div>
        )}

      </div>
    </motion.div>
  );
}

export default function PengurusClient({ members, angkatanTitle }: { members: any[], angkatanTitle: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; opacity: number; animationDuration: string }[]>([]);

  useEffect(() => {
    // Generate random stars on client layout
    const generatedStars = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      opacity: Math.random() * 0.4 + 0.1,
      animationDuration: `${Math.random() * 3 + 2}s`
    }));
    setStars(generatedStars);
  }, []);

  const { scrollY } = useScroll();

  const headerY = useTransform(scrollY, [0, 400], [0, -100]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // --- LOGIKA GROUPING BERDASARKAN DIVISI ---
  const groupedDivisionsMap = members.reduce((acc: any, member: any) => {
    const divName = member.divisi || 'Lainnya';
    if (!acc[divName]) {
      acc[divName] = { name: divName, members: [] };
    }
    acc[divName].members.push(member);
    return acc;
  }, {});

  const divisions = Object.values(groupedDivisionsMap);

  return (
    <div className="relative min-h-screen bg-[#020617] selection:bg-blue-500/30 overflow-x-hidden font-sans">
      {/* Force body background to match to prevent white gaps at the bottom */}
      <style jsx global>{`
        body {
          background-color: #020617 !important;
        }
      `}</style>

      {/* Background Ornaments (Absolute inset-0 covers the whole scrollable content) */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[#020617] overflow-hidden">
        {/* Subtle radial glows */}
        <div className="absolute top-[-5%] right-[-10%] w-[70%] h-[1200px] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-[15%] left-[-10%] w-[70%] h-[1200px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[20%] w-[60%] h-[1000px] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen" />

        {/* Render Star Particles */}
        <div className="absolute inset-0 opacity-40">
            {stars.map((star) => (
            <div
                key={star.id}
                className="absolute rounded-full bg-white animate-pulse"
                style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                animationDuration: star.animationDuration
                }}
            />
            ))}
        </div>

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.10] mix-blend-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-[100vw] mx-auto px-4 py-24 md:py-32" ref={containerRef}>
        {/* HEADER HERO SECTION */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center max-w-4xl mx-auto mb-24 md:mb-32 pt-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <span className="text-blue-300 text-xs font-bold tracking-[0.2em] uppercase">Struktur Organisasi</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 uppercase tracking-tight leading-tight mb-6 drop-shadow-sm">
              {angkatanTitle}
            </h1>

            <p className="text-base md:text-lg text-slate-400 font-bold max-w-xl mx-auto leading-relaxed">
              Mengenal lebih dekat para penggerak roda organisasi dan inovasi program kerja yang didedikasikan untuk sesama.
            </p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center mt-16"
            >
              <div className="w-8 h-12 rounded-full border-2 border-white/20 flex justify-center p-1.5 bg-white/5 backdrop-blur-sm">
                <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* TIMELINE LIST GROUPED BY DIVISI */}
        <div className="relative flex flex-col gap-8 md:gap-16 w-full" ref={containerRef}>
          {divisions.map((group: any, groupIndex: number) => (
            <div key={group.name} className="w-full pt-10">

              {/* === BANNER DIVISI === */}
              {!(group.name.toLowerCase().includes('inti osis') || group.name.toLowerCase().includes('inti mpk')) && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="max-w-5xl mx-auto mb-16"
                >
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 uppercase tracking-widest drop-shadow-sm">{group.name}</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto mt-6" />
                  </div>
                </motion.div>
              )}

              {/* === ZIG-ZAG LIST PROFIL ANGGOTA DIVISI === */}
              <div className="relative flex flex-col gap-4 w-full">
                {group.members.map((member: any, index: number) => (
                  <ProfileCard
                    key={member.id}
                    data={member}
                    index={index}
                  />
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* FOOTER CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 md:mt-40 text-center pb-12 md:pb-20 relative w-full"
        >
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-blue-500/50 via-indigo-500/50 to-purple-500/50 shadow-lg mb-8 cursor-default">
            <div className="bg-[#0a0f1c] rounded-full px-8 py-4 md:px-10 md:py-5 flex items-center gap-3 backdrop-blur-xl">
              <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-[0.3em] uppercase">#JivaAbisatya</span>
            </div>
          </div>
          <p className="mt-2 md:mt-4 text-slate-500 uppercase tracking-widest mb-8 font-bold text-xs md:text-xs">Terima kasih telah berkunjung</p>
        </motion.div>

      </div>
    </div>
  );
}