import { prisma } from "@/lib/prisma";
import ProkerClient from "./ProkerClient";

export default async function ProkerPage() {
  // 1. AMBIL DATA DARI DATABASE
  const rawProkers = await prisma.programKerja.findMany({
    orderBy: { createdAt: "desc" },
  });

  // 2. MAPPING DATA (DATABASE -> UI)
  const formattedProkers = rawProkers.map((p) => ({
    id: p.id,
    title: p.nama,
    description: p.deskripsi,
    sekbid: p.divisi,
    
    // Convert Date
    startDate: p.startDate ? p.startDate.toISOString().split('T')[0] : "",
    endDate: p.deadline ? p.deadline.toISOString().split('T')[0] : "",
    
    progress: p.progress, 
    priority: p.prioritas,
    budget: p.anggaran,

    pic: p.lokasi || "Admin",
    picColor: ["blue", "purple", "pink", "green", "orange"][p.id % 5],

    // 🔥🔥 INI YANG KEMARIN KETINGGALAN! 🔥🔥
    // Tanpa ini, Client nggak tau kalau ada gambar/featured di database
    image: p.image, 
    isFeatured: p.isFeatured
  }));

  // 3. LEMPAR KE CLIENT COMPONENT
  return <ProkerClient initialData={formattedProkers} />;
}