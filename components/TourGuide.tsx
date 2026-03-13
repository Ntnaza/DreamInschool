"use client";

import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

interface Step {
  target: string;
  content: string;
}

interface TourGuideProps {
  steps: Step[];
  tourKey: string; // Kunci unik untuk setiap halaman (misal: 'dashboard', 'kas')
}

/**
 * Komponen TourGuide dengan dukungan gaya kustom dan akses manual.
 */
const TourGuide = forwardRef((props: TourGuideProps, ref) => {
  const { steps, tourKey } = props;
  const driverRef = useRef<any>(null);

  // Fungsi untuk menjalankan tour
  const startTour = () => {
    if (driverRef.current) {
      driverRef.current.drive();
    }
  };

  // Ekspos fungsi startTour ke komponen induk lewat ref
  useImperativeHandle(ref, () => ({
    startTour
  }));

  useEffect(() => {
    const driverObj = driver({
      showProgress: true,
      nextBtnText: 'Lanjut',
      prevBtnText: 'Kembali',
      doneBtnText: 'Selesai',
      allowClose: true,
      overlayColor: 'rgba(0, 0, 0, 0.75)',
      stagePadding: 4,
      steps: steps.map(step => ({
        element: step.target,
        popover: {
          description: step.content,
          side: "bottom",
          align: "start",
          // Gaya kustom untuk popover akan kita tambahkan lewat CSS global
        }
      })),
      onDestroyed: () => {
        localStorage.setItem(`has_seen_tour_${tourKey}`, "true");
      }
    });

    driverRef.current = driverObj;

    // Otomatis jalan jika belum pernah lihat
    const hasSeenTour = localStorage.getItem(`has_seen_tour_${tourKey}`);
    if (!hasSeenTour) {
      setTimeout(() => {
        driverObj.drive();
      }, 1500);
    }

    return () => {
      if (driverRef.current) driverRef.current.destroy();
    };
  }, [steps, tourKey]);

  return null;
});

TourGuide.displayName = "TourGuide";

export default TourGuide;
