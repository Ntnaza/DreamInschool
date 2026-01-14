import { prisma } from "@/lib/prisma";
import ProkerClient from "./ProkerClient";

export default async function ProkerPage() {
  // 1. AMBIL DATA DARI DATABASE
  const rawProkers = await prisma.programKerja.findMany({
    orderBy: { createdAt: "desc" },
  });

  // 2. MAPPING DATA (DATABASE -> UI)
  // Kita sesuaikan formatnya biar komponen Client nggak kaget
  const formattedProkers = rawProkers.map((p) => ({
    id: p.id,
    title: p.nama,
    description: p.deskripsi,
    sekbid: p.divisi,
    
    // Convert Date object ke String (YYYY-MM-DD) biar bisa masuk input type="date"
    startDate: p.startDate ? p.startDate.toISOString().split('T')[0] : "",
    endDate: p.deadline ? p.deadline.toISOString().split('T')[0] : "",
    
    progress: p.progress, // (0-100)
    priority: p.prioritas,
    budget: p.anggaran,

    // PIC kita ambil dari kolom 'lokasi' sementara (sesuai kesepakatan)
    pic: p.lokasi || "Admin",
    
    // Warna avatar PIC di-random biar cantik (opsional)
    picColor: ["blue", "purple", "pink", "green", "orange"][p.id % 5] 
  }));

  // 3. LEMPAR KE CLIENT COMPONENT
  return <ProkerClient initialData={formattedProkers} />;
}