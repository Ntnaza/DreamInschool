"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Jangan aktifkan di halaman admin/login
  const isDisabled = pathname === "/login" || pathname?.startsWith("/admin");

  const { scrollY } = useScroll();
  
  const smoothY = useSpring(scrollY, {
    mass: 0.8,
    stiffness: 70,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothY, (value) => -value);

  const handleResize = useCallback(() => {
    if (scrollRef.current) {
      setContentHeight(scrollRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    if (isDisabled || !mounted) return;
    window.scrollTo(0, 0);
  }, [pathname, isDisabled, mounted]);

  useEffect(() => {
    if (isDisabled || !mounted) return;

    handleResize();
    const resizeObserver = new ResizeObserver(() => {
        requestAnimationFrame(handleResize);
    });

    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [handleResize, isDisabled, children, mounted]);

  // SOLUSI HIDRASI: Struktur HTML HARUS sama antara server dan client sejak awal.
  // Kita selalu render motion.div, tapi animasi (y) hanya aktif jika mounted & !isDisabled.
  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: mounted && !isDisabled ? y : 0 }}
        className={`${!isDisabled ? 'fixed top-0 left-0 w-full overflow-hidden will-change-transform z-10 bg-[#050811]' : ''}`}
      >
        {children}
      </motion.div>

      {/* Spacer hanya muncul jika smooth scroll aktif */}
      {!isDisabled && (
        <div style={{ height: contentHeight }} className="absolute top-0 left-0 w-full pointer-events-none" />
      )}
      
      <style jsx global>{`
        body {
          overflow-x: hidden;
          background-color: #050811;
        }
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}