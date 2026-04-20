import { prisma } from "@/lib/prisma";
import { getSelectedPeriodeId } from "@/lib/actions";
import BeritaClient from "./BeritaClient";

// Force Dynamic agar selalu update saat ada berita baru
export const dynamic = "force-dynamic";

export default async function BeritaPage() {
  // 1. Ambil ID periode terpilih
  const selectedPeriodeId = await getSelectedPeriodeId();

  // 2. Ambil data berita dari database berdasarkan periode
  const posts = await prisma.berita.findMany({
    where: { 
      status: "PUBLISHED",
      periodeId: selectedPeriodeId || undefined
    },
    orderBy: { createdAt: 'desc' }
  });

  // 3. Format data (Mapping)
  const formattedPosts = posts.map((post: any) => ({
    ...post,
    image: post.gambar || post.image || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop"
  }));

  return <BeritaClient posts={formattedPosts} />;
}