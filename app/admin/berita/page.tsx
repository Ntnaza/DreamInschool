import { prisma } from "@/lib/prisma";
import { createBerita } from "@/lib/actions";
import BeritaClient from "./BeritaClient";

export default async function BeritaPage() {
  const posts = await prisma.berita.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <BeritaClient
      initialPosts={posts}
      createBerita={createBerita} // ✅ INI KUNCI
    />
  );
}
