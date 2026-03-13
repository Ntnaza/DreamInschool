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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Cek apakah perangkat mobile atau memiliki kemampuan sentuh
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || navigator.maxTouchPoints > 0);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Jangan aktifkan di halaman admin/login
  const isDisabled = pathname === "/login" || pathname?.startsWith("/admin");

  const { scrollY } = useScroll();
  
  // Parameter spring yang lebih responsif dan ringan
  const smoothY = useSpring(scrollY, {
    mass: 0.1,        // Mass lebih kecil agar lebih cepat merespon
    stiffness: 100,    // Lebih kaku agar tidak terlalu banyak ayunan
    damping: 20,       // Damping seimbang agar tidak "floating"
    restDelta: 0.001
  });

  const y = useTransform(smoothY, (value) => -value);

  const handleResize = useCallback(() => {
    if (scrollRef.current) {
      setContentHeight(scrollRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    if (isDisabled || !mounted || isMobile) return;

    // Handle Anchor Links (Sampaikan Aspirasi, dll)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          e.preventDefault();
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [isDisabled, mounted, isMobile]);

  useEffect(() => {
    if (isDisabled || !mounted || isMobile) return;

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
  }, [handleResize, isDisabled, children, mounted, isMobile]);

  // Jika di mobile atau disabled, gunakan scroll standar browser
  if (isMobile || isDisabled) {
    return (
      <>
        <div className="bg-[#050811] min-h-screen">
          {children}
        </div>
        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
          body {
            overflow-x: hidden;
            background-color: #050811;
          }
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #050811;
          }
          ::-webkit-scrollbar-thumb {
            background: #1e293b;
            border-radius: 10px;
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform z-10 bg-[#050811]"
      >
        {children}
      </motion.div>

      {/* Spacer untuk mensimulasikan tinggi dokumen asli */}
      <div style={{ height: contentHeight }} className="relative top-0 left-0 w-full pointer-events-none" />
      
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