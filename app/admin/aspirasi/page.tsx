import { prisma } from "@/lib/prisma";
import AspirasiList from "./AspirasiList";

export default async function InboxPage() {
  // Ambil data asli dari Database
  const data = await prisma.aspirasi.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return <AspirasiList initialData={data} />;
}