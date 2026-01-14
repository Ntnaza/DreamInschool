"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroOrbit() {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);
  const [activeLogoIndex, setActiveLogoIndex] = useState(0);
  const requestRef = useRef<number | null>(null);

  const centerLogos = [
    { src: "/logos/SMK.png", alt: "SMK Nurul Islam" },
    { src: "/logos/OSKA.png", alt: "OSIS & MPK" },
  ];

  // === DATA PLANET ===
  const planets = [
    { name: "PPLG", img: "/logos/PPLG.png", shadow: "#1d4ed8" }, // Biru
    { name: "TO",   img: "/logos/TO.png",   shadow: "#1e3a8a" }, // Biru Tua
    { name: "DKV",  img: "/logos/DKV.png",  shadow: "#a1a1aa" }, // Abu Terang
    { name: "AKL",  img: "/logos/AKL.png",  shadow: "#fbbf24" }, // Emas
    { name: "MPLB", img: "/logos/MPLB.png", shadow: "#9ca3af" }, // Abu
    { name: "TJKT", img: "/logos/TJKT.png", shadow: "#ef4444" }, // Merah
  ];

  useEffect(() => {
    setIsMounted(true);
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const animate = () => {
    setAngle((prevAngle) => (prevAngle + 0.003) % (Math.PI * 2));
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogoIndex((prev) => (prev + 1) % centerLogos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const radiusX = 320; 
  const radiusY = 110; 
  
  const getPosition = (index: number, total: number) => {
    const offsetAngle = (index / total) * Math.PI * 2;
    const currentAngle = angle + offsetAngle;

    const x = Math.cos(currentAngle) * radiusX;
    const y = Math.sin(currentAngle) * radiusY;
    const scale = (Math.sin(currentAngle) + 2.2) / 3.2; 
    const isFront = Math.sin(currentAngle) > 0;
    const zIndex = isFront ? 30 : 10;
    
    return { x, y, scale, zIndex };
  };

  const sunX = mousePosition.x * -15;
  const sunY = mousePosition.y * -15;
  const orbitX = mousePosition.x * -8;
  const orbitY = mousePosition.y * -8;

  if (!isMounted) return <div className="w-full h-[650px]" />;

  return (
    <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center perspective-1000">
          
      {/* === MATAHARI TENGAH (The Motherbase) - Sekarang CLEAN tanpa Bola === */}
      <div 
        className="absolute w-40 h-40 md:w-56 md:h-56 flex items-center justify-center transition-transform duration-100 ease-out p-4"
        style={{ 
            zIndex: 20, 
            background: 'transparent', // <--- HAPUS BACKGROUND BOLA
            boxShadow: 'none',         // <--- HAPUS KOTAK CAHAYA
            transform: `translate(${sunX}px, ${sunY}px)` 
        }}
      >
          {/* Hapus div Glass & Ring disini */}

          <div className="relative w-full h-full z-10">
            {centerLogos.map((logo, index) => (
              <div
                key={logo.src}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
                  index === activeLogoIndex ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 -rotate-12"
                }`}
              >
                 <Image 
                   src={logo.src} 
                   alt={logo.alt}
                   fill 
                   className="object-contain"
                   style={{
                      // AURA PUTIH KUAT (Motherbase Glow)
                      // Drop Shadow 1 (Hitam): Biar timbul
                      // Drop Shadow 2 (Putih Terang): Aura suci mengikuti bentuk logo
                      filter: `drop-shadow(0 10px 15px rgba(0,0,0,0.5)) drop-shadow(0 0 35px rgba(255,255,255,0.8))`
                   }}
                 />
              </div>
            ))}
          </div>
      </div>

      <div 
        className="absolute w-[640px] h-[640px] scale-y-[0.35] transition-transform duration-100 ease-out"
        style={{ 
          zIndex: 0,
          transform: `translate(${orbitX}px, ${orbitY}px) scaleY(0.35)`
        }} 
      />

      {/* === ITEM ORBIT (JURUSAN) === */}
      {planets.map((planet, index) => {
        const pos = getPosition(index, planets.length);
        
        return (
          <div 
            key={planet.name}
            className="absolute flex items-center justify-center w-20 h-20 md:w-24 md:h-24 group cursor-pointer transition-transform duration-75 ease-linear"
            style={{ 
              zIndex: pos.zIndex,
              transform: `translate(${pos.x + orbitX}px, ${pos.y + orbitY}px) scale(${pos.scale})` 
            }}
          >
            {/* LOGO JURUSAN + AURA WARNA */}
            <div className="relative z-10 w-full h-full p-1">
               <Image 
                 src={planet.img} 
                 alt={planet.name} 
                 fill 
                 className="object-contain transform group-hover:scale-110 transition-transform duration-300"
                 style={{
                    // AURA WARNA (Sesuai Jurusan)
                    filter: `drop-shadow(0 5px 5px rgba(0,0,0,0.5)) drop-shadow(0 0 20px ${planet.shadow})`
                 }}
               />
            </div>

            {/* LABEL NAMA */}
            <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full border border-slate-200 dark:border-slate-500/30 whitespace-nowrap shadow-lg z-50 pointer-events-none">
                {planet.name}
            </div>
          </div>
        );
      })}

    </div>
  );
}