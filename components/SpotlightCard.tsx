"use client";

import { useRef, useState, useEffect } from "react";

export default function SpotlightCard({ children, className = "", color = "blue" }: any) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  // Mapping warna ke HEX untuk spotlight
  const colorMap: any = {
    blue: "#3b82f6",
    purple: "#a855f7",
    green: "#22c55e",
    yellow: "#eab308",
    red: "#ef4444",
    orange: "#f97316",
    pink: "#ec4899",
  };

  const spotlightColor = colorMap[color] || "#3b82f6";

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-[2rem] bg-white dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* SPOTLIGHT EFFECT (Cahaya Ikut Kursor) */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}15, transparent 40%)`,
        }}
      />
      
      {/* BORDER GLOW (Garis Pinggir Ikut Kursor) */}
      <div 
         className="pointer-events-none absolute inset-0 z-10 transition duration-300"
         style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}40, transparent 40%)`,
            maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px", // Ketebalan border glow
         }}
      />

      {/* Content */}
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  );
}