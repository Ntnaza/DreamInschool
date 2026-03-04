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

  // Jangan aktifkan di halaman admin/login
  const isDisabled = pathname === "/login" || pathname?.startsWith("/admin");

  const { scrollY } = useScroll();
  
  // Tuning ulang agar lebih stabil: mass rendah, damping pas
  const smoothY = useSpring(scrollY, {
    mass: 0.1,
    stiffness: 45,
    damping: 15,
    restDelta: 0.001
  });

  const y = useTransform(smoothY, (value) => -value);

  const handleResize = useCallback(() => {
    if (scrollRef.current) {
      setContentHeight(scrollRef.current.scrollHeight);
    }
  }, []);

  // Reset Scroll ke atas saat pindah halaman
  useEffect(() => {
    if (isDisabled) return;
    window.scrollTo(0, 0);
  }, [pathname, isDisabled]);

  useEffect(() => {
    if (isDisabled) return;

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    // Interval kecil untuk jaga-jaga jika ada gambar yang loading lambat
    const timer = setInterval(handleResize, 1000);

    return () => {
      resizeObserver.disconnect();
      clearInterval(timer);
    };
  }, [handleResize, isDisabled, children]);

  if (isDisabled) {
    return <>{children}</>;
  }

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform z-10"
      >
        {children}
      </motion.div>
      {/* Spacer untuk memberikan tinggi halaman asli */}
      <div style={{ height: contentHeight }} className="absolute top-0 left-0 w-full pointer-events-none" />
      
      {/* Style untuk menghilangkan scrollbar default agar tidak double */}
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
        /* Sembunyikan scrollbar tapi tetap bisa di-scroll */
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