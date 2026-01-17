import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import DetailBeritaClient from "./DetailBeritaClient";

// 1. Definisikan tipe params sebagai Promise
export default async function DetailBeritaPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  
  // 2. WAJIB AWAIT DULU (Ini solusi error-nya)
  const resolvedParams = await params;
  const idBerita = parseInt(resolvedParams.id);

  // 3. Validasi: Kalau ID bukan angka, 404
  if (isNaN(idBerita)) {
    notFound();
  }

  // 4. Ambil data dari database
  const post = await prisma.berita.findUnique({
    where: { id: idBerita }
  });

  // 5. Kalau berita gak ketemu
  if (!post) {
    notFound();
  }

  // 6. Format Data (Mapping kolom 'gambar' ke 'image')
  const formattedPost = {
    ...post,
    image: (post as any).gambar || (post as any).image || null 
  };

  return (
    <DetailBeritaClient post={formattedPost} />
  );
}