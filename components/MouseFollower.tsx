"use client";

import { useEffect, useRef } from "react";

export default function MouseFollower() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Simpan jejak posisi mouse (Array history)
  const trail = useRef<{ x: number; y: number }[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 1. Atur Ukuran Canvas Full Layar
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Panggil sekali di awal

    // 2. Event Listener: Catat posisi mouse LANGSUNG (Tanpa delay physics)
    const handleMouseMove = (e: MouseEvent) => {
      // Masukkan posisi terbaru ke urutan pertama array
      // Kita simpan history 25 titik terakhir untuk jadi "Ekor"
      trail.current.unshift({ x: e.clientX, y: e.clientY });
      
      // Batasi panjang ekor (semakin besar angka ini, semakin panjang ekornya)
      if (trail.current.length > 25) {
        trail.current.pop();
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 3. Loop Animasi (Menggambar Garis)
    let animationFrameId: number;
    
    const render = () => {
      // Bersihkan layar setiap frame (hapus gambar sebelumnya)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Gambar Ekor Meteor
      if (trail.current.length > 1) {
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // Mulai dari titik kepala (posisi mouse saat ini)
        ctx.moveTo(trail.current[0].x, trail.current[0].y);

        // Sambungkan titik-titik history menjadi garis
        for (let i = 1; i < trail.current.length; i++) {
            const point = trail.current[i];
            
            // Trik Visual: Garis semakin ke belakang semakin tipis & transparan
            const size = 6 * (1 - i / trail.current.length); // Ukuran mengecil
            
            ctx.lineTo(point.x, point.y);
            
            // Kita gambar manual per segmen biar bisa gradasi opacity
            // (Sebenarnya lineTo biasa lebih cepat, tapi ini lebih cantik)
        }
        
        // Warna Ekor: Putih kebiruan bercahaya
        // Create gradient stroke
        const gradient = ctx.createLinearGradient(
            trail.current[0].x, trail.current[0].y, 
            trail.current[trail.current.length - 1].x, trail.current[trail.current.length - 1].y
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");   // Kepala: Putih Solid
        gradient.addColorStop(0.5, "rgba(200, 220, 255, 0.5)"); // Tengah: Biru Muda Pudar
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");   // Ekor: Transparan

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 4; // Ketebalan garis
        ctx.stroke();
      }

      // Gambar Kepala Bintang (Sparkle) di posisi Mouse (index 0)
      if (trail.current.length > 0) {
          const head = trail.current[0];
          
          // Glow Luar
          ctx.beginPath();
          ctx.arc(head.x, head.y, 8, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
          ctx.fill();

          // Inti Bintang Putih
          ctx.beginPath();
          ctx.arc(head.x, head.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowBlur = 15;
          ctx.shadowColor = "white";
          ctx.fill();
          
          // Reset shadow biar ga ngefek ke garis
          ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Sembunyikan di HP
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-screen"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}