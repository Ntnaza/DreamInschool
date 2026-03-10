import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.pengurus.findMany({
      where: {
        jabatan: {
          contains: "Ketua"
        }
      }
    });

    // Sorting yang DETERMINISTIK
    const sortedData = [...data].sort((a, b) => {
      const roleA = a.jabatan.toLowerCase();
      const roleB = b.jabatan.toLowerCase();
      
      const isOsisA = roleA.includes("osis") && !roleA.includes("wakil");
      const isOsisB = roleB.includes("osis") && !roleB.includes("wakil");
      if (isOsisA && !isOsisB) return -1;
      if (!isOsisA && isOsisB) return 1;
      
      const isMpkA = roleA.includes("mpk") && !roleA.includes("wakil");
      const isMpkB = roleB.includes("mpk") && !roleB.includes("wakil");
      if (isMpkA && !isMpkB) return -1;
      if (!isMpkA && isMpkB) return 1;
      
      return a.id - b.id;
    });

    return NextResponse.json(sortedData);
  } catch (error) {
    return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 });
  }
}