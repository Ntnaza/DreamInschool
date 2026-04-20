import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Ambil konfigurasi website
export async function GET() {
  try {
    let config = await prisma.websiteConfig.findFirst();
    
    // Jika belum ada, buat default
    if (!config) {
      config = await prisma.websiteConfig.create({
        data: { id: 1 }
      });
    }
    
    return NextResponse.json(config);
  } catch (error) {
    console.error("GET CONFIG ERROR:", error);
    return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 });
  }
}

// POST: Update konfigurasi
export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Hanya ambil field yang ada di skema database (Whitelist)
    const dataToUpdate = {
      namaOrganisasi: body.namaOrganisasi,
      deskripsi: body.deskripsi,
      logoUrl: body.logoUrl,
      faviconUrl: body.faviconUrl,
      instagram: body.instagram,
      youtube: body.youtube,
      tiktok: body.tiktok,
      email: body.email,
      telepon: body.telepon,
      alamat: body.alamat,
      mapUrl: body.mapUrl,
    };
    
    const config = await prisma.websiteConfig.upsert({
      where: { id: 1 },
      update: dataToUpdate,
      create: { ...dataToUpdate, id: 1 }
    });
    
    return NextResponse.json(config);
  } catch (error) {
    console.error("POST CONFIG ERROR:", error);
    return NextResponse.json({ error: "Gagal memperbarui data" }, { status: 500 });
  }
}
