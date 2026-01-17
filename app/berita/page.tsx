import { prisma } from "@/lib/prisma";
import BeritaClient from "./BeritaClient";

// Force Dynamic agar selalu update saat ada berita baru
export const dynamic = "force-dynamic";

export default async function BeritaPage() {
  // 1. Ambil data berita dari database
  const posts = await prisma.berita.findMany({
    orderBy: { createdAt: 'desc' }
  });

  // 2. Format data (Mapping)
  // KUNCI PERBAIKAN: Cek 'post.gambar' (nama kolom DB) dulu!
  const formattedPosts = posts.map((post: any) => ({
    ...post,
    image: post.gambar || post.image || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop"
  }));

  return <BeritaClient posts={formattedPosts} />;
}