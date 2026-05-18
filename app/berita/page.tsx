import { prisma } from "@/lib/prisma";
import { getSelectedPeriodeId } from "@/lib/actions";
import BeritaClient from "./BeritaClient";

export const dynamic = "force-dynamic";

async function getBeritaPosts() {
  // Simulasi delay (Bisa dihapus nanti jika performa aslinya ingin diuji)
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const selectedPeriodeId = await getSelectedPeriodeId();
  const posts = await prisma.berita.findMany({
    where: { 
      status: "PUBLISHED",
      periodeId: selectedPeriodeId || undefined
    },
    orderBy: { createdAt: 'desc' }
  });

  return posts.map((post: any) => ({
    ...post,
    image: post.gambar || post.image || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop"
  }));
}

export default function BeritaPage() {
  const dataPromise = getBeritaPosts();

  return (
    <div className="relative font-sans">
      <BeritaClient dataPromise={dataPromise} />
    </div>
  );
}