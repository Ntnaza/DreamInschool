import { prisma } from "@/lib/prisma";
import BeritaClient from "./BeritaClient";
import BeritaHeader from "./BeritaHeader";

/**
 * SERVER COMPONENT (Pengambil Data)
 */
export default async function BeritaPage() {
  // Ambil data Berita
  const rawPosts = await prisma.berita.findMany({
    orderBy: { createdAt: "desc" },
  });

  // Ambil Kategori dari Galeri agar terpusat
  const categoriesRaw = await prisma.kategoriGaleri.findMany({
    orderBy: { nama: "asc" },
  });

  const categories = categoriesRaw.map(c => c.nama);

  // SERIALISASI DATA (PENTING: Agar tidak stuck di skeleton)
  const posts = rawPosts.map(post => ({
    ...post,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  }));

  return (
    <div className="relative h-[calc(100vh-140px)] flex flex-col font-sans">
      <BeritaHeader />
      <BeritaClient initialPosts={posts} dynamicCategories={categories} />
    </div>
  );
}
