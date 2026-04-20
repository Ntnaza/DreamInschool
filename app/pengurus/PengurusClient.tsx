"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  Mail, 
  CheckCircle2, 
  History,
  ChevronRight,
  User,
  Search,
  Plus,
  Pencil,
  BookOpen,
  GraduationCap,
  Calculator,
  Ruler,
  Eraser,
  School,
  Palette,
  Atom,
  Sigma,
  Library,
  Compass
} from "lucide-react";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

function ProfileCard({ data, index }: { data: any, index: number }) {
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
    <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className={`relative w-full max-w-7xl mx-auto flex flex-col xl:flex-row ${isEven ? 'xl:flex-row' : 'xl:flex-row-reverse'} items-center xl:items-stretch gap-8 xl:gap-16 py-12 md:py-24 group`}>
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/5 hidden xl:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#0a0f1c] hidden xl:block z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse" />
      <div className="w-full xl:w-1/2 flex justify-center py-4" style={{ justifyContent: typeof window !== 'undefined' && window.innerWidth < 1280 ? 'center' : (isEven ? 'flex-end' : 'flex-start') }}>
        <div className="relative w-[260px] h-[340px] md:w-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-white/20 transition-colors flex-shrink-0">
          <div className={`absolute inset-0 ${theme.bg} mix-blend-overlay z-10 pointer-events-none opacity-50`} />
          <Image src={data.img} alt={data.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" priority={index < 2} />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 z-20">
            <span className={`inline-block px-2.5 py-1 mb-2 rounded-full text-[10px] font-bold uppercase tracking-widest ${theme.bg} text-slate-100 border ${theme.border} backdrop-blur-md`}>{data.role}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-1">{data.name}</h2>
            <p className="text-slate-200 font-bold tracking-wide text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.hex }} />{data.divisi}</p>
          </div>
        </div>
      </div>
      <div className={`w-full xl:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8 px-4 md:px-0 z-20 ${typeof window !== 'undefined' && window.innerWidth < 1280 ? 'text-center items-center' : (isEven ? 'text-left items-start' : 'text-left items-start')}`}>
        <div className="w-full bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8 hover:border-white/10 transition-colors shadow-xl text-left">
          {(data.visi || data.misi) ? (
            <div className="space-y-6">
              {data.visi && (
                <div><h3 className={`text-sm font-bold uppercase tracking-widest text-slate-100 mb-2 flex items-center gap-2`}>Visi</h3><p className="text-white/95 font-bold leading-relaxed text-sm md:text-base italic border-l-2 pl-3" style={{ borderColor: theme.hex }}>&quot;{data.visi}&quot;</p></div>
              )}
              {data.misi && (
                <div><h3 className={`text-sm font-bold uppercase tracking-widest text-slate-100 mb-2`}>Misi</h3><div className="text-white/90 font-bold leading-relaxed text-sm md:text-base whitespace-pre-line text-justify space-y-2">{data.misi.split('\n').map((paragraph: string, i: number) => (<p key={i}>{paragraph.trim()}</p>))}</div></div>
              )}
            </div>
          ) : (<div className="flex flex-col items-center justify-center text-center py-4"><p className="text-slate-500 italic text-sm font-bold">Belum ada Visi/Misi yang dicantumkan.</p></div>)}
          {data.motto && (<div className="mt-6 pt-6 border-t border-white/5"><p className="text-slate-300 font-bold text-sm text-center">&quot;{data.motto}&quot;</p></div>)}
        </div>
        {(data.instagram || data.hp || data.email) && (
          <div className="flex flex-wrap items-center justify-center xl:justify-start gap-3 w-full">
            {data.instagram && (<a href={`https://instagram.com/${data.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-slate-300 hover:text-white text-sm font-bold shadow-sm"><Instagram size={18} className="text-pink-500" /><span>{data.instagram}</span></a>)}
            {data.hp && (<a href={`https://wa.me/${data.hp.replace(/^0/, '62')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-slate-300 hover:text-white text-sm font-bold shadow-sm"><FaWhatsapp size={18} className="text-emerald-500" /><span>WhatsApp</span></a>)}
            {data.email && (<a href={`mailto:${data.email}`} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-slate-300 hover:text-white text-sm font-bold shadow-sm"><Mail size={18} className="text-slate-400" /><span>Email</span></a>)}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function PengurusClient({ 
  members, 
  angkatanTitle,
  tahunAjaran,
  allPeriods = []
}: { 
  members: any[], 
  angkatanTitle: string,
  tahunAjaran?: string,
  allPeriods?: any[]
}) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; opacity: number; animationDuration: string }[]>([]);
  const [decorIcons, setDecorIcons] = useState<{ iconIdx: number, style: any }[]>([]);
  const [isTimeMachineOpen, setIsTimeMachineOpen] = useState(false);

  useEffect(() => {
    const generatedStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, size: `${Math.random() * 2 + 1}px`, opacity: Math.random() * 0.4 + 0.1, animationDuration: `${Math.random() * 3 + 2}s`
    }));
    setStars(generatedStars);
    const generatedIcons = Array.from({ length: 25 }).map((_, i) => ({
      iconIdx: Math.floor(Math.random() * 12), style: { top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, rotate: Math.random() * 360, scale: Math.random() * 0.4 + 0.4, duration: Math.random() * 15 + 15, delay: Math.random() * 10 }
    }));
    setDecorIcons(generatedIcons);
  }, []);

  const schoolIcons = [Pencil, BookOpen, GraduationCap, Calculator, Ruler, Eraser, School, Palette, Atom, Sigma, Library, Compass];
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 400], [0, -100]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const groupedDivisionsMap = members.reduce((acc: any, member: any) => {
    const divName = member.divisi || 'Lainnya';
    if (!acc[divName]) acc[divName] = { name: divName, members: [] };
    acc[divName].members.push(member);
    return acc;
  }, {});
  const divisions = Object.values(groupedDivisionsMap);

  return (
    <div className="relative min-h-screen bg-[#020617] selection:bg-blue-500/30 overflow-x-hidden font-sans">
      <style jsx global>{` body { background-color: #020617 !important; } `}</style>
      <div className="absolute inset-0 z-0 pointer-events-none bg-[#020617] overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[70%] h-[1200px] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-[15%] left-[-10%] w-[70%] h-[1200px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[20%] w-[60%] h-[1000px] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 opacity-[0.35]">
            {decorIcons.map((item, i) => {
              const IconComponent = schoolIcons[item.iconIdx];
              return (
                <motion.div key={`decor-${i}`} initial={{ opacity: 0 }} animate={{ opacity: [0.5, 0.8, 0.5], y: [0, -100, 0], rotate: [item.style.rotate, item.style.rotate + 30, item.style.rotate] }} transition={{ duration: item.style.duration, repeat: Infinity, delay: item.style.delay, ease: "easeInOut" }} className="absolute text-blue-500/50" style={{ top: item.style.top, left: item.style.left, scale: item.style.scale * 1.5 }}>
                  <IconComponent size={60} strokeWidth={1.5} />
                </motion.div>
              );
            })}
         </div>
        <div className="absolute inset-0 opacity-80">
            {stars.map((star) => (
            <div key={star.id} className="absolute rounded-full bg-white animate-pulse shadow-[0_0_5px_rgba(255,255,255,0.8)]" style={{ top: star.top, left: star.left, width: star.size, height: star.size, opacity: star.opacity + 0.2, animationDuration: star.animationDuration }} />
            ))}
        </div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.10] mix-blend-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-[100vw] mx-auto px-4 py-24 md:py-32" ref={containerRef}>
        <motion.div style={{ y: headerY, opacity: headerOpacity }} className="text-center max-w-4xl mx-auto mb-24 md:mb-32 pt-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <span className="text-blue-300 text-xs font-bold tracking-[0.2em] uppercase">Struktur Organisasi</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-white leading-tight">
              Kabinet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-slate-100 dark:via-slate-300 dark:to-slate-500">{angkatanTitle}</span>
            </h1>

            <p className="text-base md:text-lg text-slate-400 font-bold max-w-xl mx-auto leading-relaxed">
              Angkatan {tahunAjaran}. Mengenal lebih dekat para penggerak roda organisasi dan inovasi program kerja yang didedikasikan untuk sesama.
            </p>

            {/* TIME MACHINE SELECTOR */}
            {allPeriods.length > 1 && (
              <div className="mt-12 relative inline-block">
                <button 
                  onClick={() => setIsTimeMachineOpen(!isTimeMachineOpen)}
                  className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] hover:bg-white/10 transition-all group"
                >
                  <History className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-bold text-white uppercase tracking-widest">Pilih Angkatan</span>
                  <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isTimeMachineOpen ? 'rotate-90' : ''}`} />
                </button>

                <AnimatePresence>
                  {isTimeMachineOpen && (
                    <motion.div initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.9 }} className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-[#0a0f1c]/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl z-[100] p-3 overflow-hidden">
                      <div className="max-h-80 overflow-y-auto pr-1">
                        {allPeriods.map((p) => (
                          <button 
                            key={p.tahun}
                            onClick={() => { router.push(`/pengurus?periode=${p.tahun}`); setIsTimeMachineOpen(false); }}
                            className={`w-full flex flex-col gap-1 p-5 rounded-[1.5rem] transition-all text-left mb-2 group ${tahunAjaran === p.tahun ? 'bg-blue-600' : 'hover:bg-white/5'}`}
                          >
                            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${tahunAjaran === p.tahun ? 'text-blue-100' : 'text-blue-500'}`}>{p.tahun}</span>
                            <span className={`text-sm font-bold ${tahunAjaran === p.tahun ? 'text-white' : 'text-slate-300'}`}>{p.kabinet}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="flex justify-center mt-16">
              <div className="w-8 h-12 rounded-full border-2 border-white/20 flex justify-center p-1.5 bg-white/5 backdrop-blur-sm"><div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" /></div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="relative flex flex-col gap-8 md:gap-16 w-full">
          {divisions.map((group: any) => (
            <div key={group.name} className="w-full pt-10">
              {!(group.name.toLowerCase().includes('inti osis') || group.name.toLowerCase().includes('inti mpk')) && (
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="max-w-5xl mx-auto mb-16">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white uppercase antialiased">
                      {group.name}
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mt-6 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                  </div>
                </motion.div>
              )}
              <div className="relative flex flex-col gap-4 w-full">
                {group.members.map((member: any, index: number) => (<ProfileCard key={member.id} data={member} index={index} />))}
              </div>
            </div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-32 md:mt-40 text-center pb-12 md:pb-20 relative w-full">
          <div className="inline-block p-[2px] rounded-full bg-white/5 shadow-lg mb-8 cursor-default border border-white/10">
            <div className="bg-[#0a0f1c] rounded-full px-8 py-4 md:px-10 md:py-5 flex items-center gap-3 backdrop-blur-xl">
              <span className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] antialiased">
                <span className="text-white">#{angkatanTitle.replace(' ', '')}</span>
                <span className="text-slate-400">Memory</span>
              </span>
            </div>
          </div>
          <p className="mt-2 md:mt-4 text-slate-500 uppercase tracking-widest mb-8 font-bold text-xs md:text-xs">Masa Bakti {tahunAjaran}</p>
        </motion.div>
      </div>
    </div>
  );
}
