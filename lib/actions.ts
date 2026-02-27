"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { StatusProker } from "@prisma/client";
import { z } from "zod";

import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "rahasia-osis-mpk-2026-sangat-kuat"
);

async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as { username: string; role: string };
  } catch (error) {
    return null;
  }
}

/* ======================================================
   ZOD SCHEMAS (VALIDATION)
====================================================== */

const BeritaSchema = z.object({
  judul: z.string().min(5, "Judul minimal 5 karakter"),
  konten: z.string().min(20, "Konten minimal 20 karakter"),
  kategori: z.string().default("Umum"),
  gambar: z.string().optional().nullable(),
});

const ProkerSchema = z.object({
  nama: z.string().min(3, "Nama proker minimal 3 karakter"),
  deskripsi: z.string().optional().nullable(),
  divisi: z.string(),
  prioritas: z.string().default("Medium"),
  anggaran: z.number().nonnegative().default(0),
  progress: z.number().min(0).max(100).default(0),
  lokasi: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  isFeatured: z.boolean().default(false),
  startDate: z.date().optional().nullable(),
  deadline: z.date().optional().nullable(),
});

/* ======================================================
   1. ASPIRASI SISWA
====================================================== */
// ... (skip for brevity, will apply in multiple steps if needed)


/* ======================================================
   1. ASPIRASI SISWA
====================================================== */
export async function submitAspirasi(formData: FormData) {
  const rawNama = formData.get("nama") as string;
  const rawKelas = formData.get("kelas") as string;
  const pesan = formData.get("pesan") as string;
  const isAnonim = formData.get("isAnonim") === "true";

  if (!pesan || pesan.trim() === "") {
    return { success: false, message: "Pesan tidak boleh kosong!" };
  }

  const pengirim = isAnonim || !rawNama ? "Anonim" : rawNama;
  const kelas = isAnonim ? "-" : rawKelas;

  try {
    await prisma.aspirasi.create({
      data: {
        pengirim,
        kelas,
        isi: pesan,
        kategori: "Umum",
        status: "PENDING",
      },
    });

    revalidatePath("/");
    return { success: true, message: "Aspirasi berhasil dikirim! 🚀" };
  } catch (error) {
    console.error("SUBMIT ASPIRASI ERROR:", error);
    return { success: false, message: "Gagal mengirim aspirasi." };
  }
}

/* ======================================================
   2. ADMIN ASPIRASI
====================================================== */
export async function replyAspirasi(formData: FormData) {
  const id = Number(formData.get("id"));
  const balasan = formData.get("balasan") as string;

  if (!balasan || balasan.trim() === "") {
    return { success: false, message: "Balasan tidak boleh kosong." };
  }

  try {
    await prisma.aspirasi.update({
      where: { id },
      data: {
        balasan,
        balasanAt: new Date(),
        status: "SELESAI",
      },
    });

    revalidatePath("/admin/aspirasi");
    return { success: true, message: "Balasan terkirim!" };
  } catch (error) {
    console.error("REPLY ASPIRASI ERROR:", error);
    return { success: false, message: "Gagal membalas pesan." };
  }
}

export async function deleteAspirasi(id: number) {
  try {
    await prisma.aspirasi.delete({ where: { id } });
    revalidatePath("/admin/aspirasi");
    return { success: true };
  } catch (error) {
    console.error("DELETE ASPIRASI ERROR:", error);
    return { success: false };
  }
}

/* ======================================================
   3. BERITA (CMS)
====================================================== */

// === 3. FITUR BERITA ===

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-");
}

// File: lib/actions.ts

export async function createBerita(formData: FormData) {
  const validatedFields = BeritaSchema.safeParse({
    judul: formData.get("judul"),
    konten: formData.get("konten"),
    kategori: formData.get("kategori") || "Umum",
    gambar: formData.get("gambar"),
  });

  if (!validatedFields.success) {
    const errorMsg = validatedFields.error.flatten().fieldErrors;
    return { 
      success: false, 
      message: errorMsg.judul?.[0] || errorMsg.konten?.[0] || "Data tidak valid." 
    };
  }

  const { judul, konten, kategori, gambar } = validatedFields.data;
  const slug = `${slugify(judul)}-${Date.now()}`;

  const session = await getCurrentUser();
  if (!session) {
    return { success: false, message: "Sesi habis. Silakan login kembali." };
  }

  const adminUser = await prisma.user.findUnique({
    where: { username: session.username },
  });

  if (!adminUser) {
    return { success: false, message: "Error: User tidak ditemukan di database!" };
  }

  try {
    await prisma.berita.create({
      data: {
        judul,
        slug,
        konten,
        kategori,
        gambar: gambar || null,
        penulisId: adminUser.id, 
        status: "PUBLISHED",
        views: 0,
      },
    });

    revalidatePath("/admin/berita");
    revalidatePath("/berita");

    return { success: true, message: "Berita berhasil terbit! 📰" };
  } catch (error) {
    console.error("CREATE BERITA ERROR:", error);
    return { success: false, message: "Gagal menerbitkan berita." };
  }
}



export async function updateBerita(formData: FormData) {
  const idRaw = formData.get("id");
  if (!idRaw) {
    return { success: false, message: "ID tidak valid." };
  }

  const id = Number(idRaw);
  const judul = formData.get("judul") as string;
  const konten = formData.get("konten") as string;
  const kategori = formData.get("kategori") as string;
  const gambar = formData.get("gambar") as string | null;

  try {
    await prisma.berita.update({
      where: { id },
      data: {
        judul,
        konten,
        kategori,
        ...(gambar && { gambar }),
      },
    });

    revalidatePath("/admin/berita");
    return { success: true, message: "Berita berhasil diperbarui! 📝" };
  } catch (error) {
    console.error("UPDATE BERITA ERROR:", error);
    return { success: false, message: "Gagal update berita." };
  }
}

export async function deleteBerita(id: number) {
  try {
    await prisma.berita.delete({ where: { id } });
    revalidatePath("/admin/berita");
    return { success: true };
  } catch (error) {
    console.error("DELETE BERITA ERROR:", error);
    return { success: false };
  }
}

/* ======================================================
   4. MANAJEMEN PROGRAM KERJA (UPDATE FIX)
====================================================== */

export async function createProgramKerja(formData: FormData) {
  // Ambil data sesuai nama field di Frontend
  const nama = formData.get("nama") as string;
  const deskripsi = formData.get("deskripsi") as string;
  const divisi = formData.get("divisi") as string;
  const prioritas = formData.get("priority") as string; // Frontend kirim 'priority', DB simpan 'prioritas'
  const anggaran = Number(formData.get("anggaran"));
  const progress = Number(formData.get("progress"));
  const lokasi = formData.get("lokasi") as string; // PIC disimpan di kolom lokasi
  
  // ✅ FITUR BARU: Image & Featured
  const image = formData.get("image") as string; 
  const isFeatured = formData.get("isFeatured") === "true";

  // Date Handling
  const startDateRaw = formData.get("startDate") as string;
  const startDate = startDateRaw ? new Date(startDateRaw) : null;
  const deadlineRaw = formData.get("deadline") as string;
  const deadline = deadlineRaw ? new Date(deadlineRaw) : null;

  // Mapping Status Logic (Otomatis atau Manual dari Frontend)
  // Kita pakai status manual kalau dikirim, kalau nggak pakai logic progress
  let status = "TODO";
  if (progress > 0 && progress < 100) status = "IN_PROGRESS";
  if (progress === 100) status = "DONE";

  try {
    await prisma.programKerja.create({
      data: {
        nama,
        deskripsi,
        divisi,
        prioritas,
        anggaran,
        progress,
        status, // Simpan status
        lokasi, // PIC
        startDate,
        deadline,
        image: image || null, // Simpan Gambar
        isFeatured: isFeatured // Simpan Status Unggulan
      },
    });

    // Refresh halaman Admin & Homepage (karena ada section Program Unggulan)
    revalidatePath("/admin/proker");
    revalidatePath("/"); 
    return { success: true, message: "Proker berhasil dibuat! 🚀" };
  } catch (error) {
    console.error("CREATE PROKER ERROR:", error);
    return { success: false, message: "Gagal membuat proker." };
  }
}

export async function updateProgramKerja(formData: FormData) {
  const idRaw = formData.get("id");
  if (!idRaw) return { success: false, message: "ID tidak ditemukan" };
  const id = Number(idRaw);

  const nama = formData.get("nama") as string;
  const deskripsi = formData.get("deskripsi") as string;
  const divisi = formData.get("divisi") as string;
  const prioritas = formData.get("priority") as string;
  const anggaran = Number(formData.get("anggaran"));
  const progress = Number(formData.get("progress"));
  const lokasi = formData.get("lokasi") as string;
  
  const image = formData.get("image") as string;
  const isFeatured = formData.get("isFeatured") === "true";

  const startDateRaw = formData.get("startDate") as string;
  const startDate = startDateRaw ? new Date(startDateRaw) : null;
  const deadlineRaw = formData.get("deadline") as string;
  const deadline = deadlineRaw ? new Date(deadlineRaw) : null;

  // Status Logic Update
  let status = "TODO";
  if (progress > 0 && progress < 100) status = "IN_PROGRESS";
  if (progress === 100) status = "DONE";

  try {
    await prisma.programKerja.update({
      where: { id },
      data: {
        nama,
        deskripsi,
        divisi,
        prioritas,
        anggaran,
        progress,
        status,
        lokasi,
        startDate,
        deadline,
        isFeatured,
        // Update gambar CUMA jika user upload baru (string tidak kosong)
        ...(image && { image }),
      },
    });

    revalidatePath("/admin/proker");
    revalidatePath("/");
    return { success: true, message: "Proker berhasil diupdate! ✨" };
  } catch (error) {
    console.error("UPDATE PROKER ERROR:", error);
    return { success: false, message: "Gagal update proker." };
  }
}

// Ganti nama deleteProker jadi deleteProgramKerja biar konsisten sama frontend
export async function deleteProgramKerja(id: number) {
  try {
    await prisma.programKerja.delete({ where: { id } });
    revalidatePath("/admin/proker");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("DELETE PROKER ERROR:", error);
    return { success: false };
  }
}



/* ======================================================
   5. MANAJEMEN PENGURUS (LENGKAP)
====================================================== */

export async function createPengurus(formData: FormData) {
  // 1. Ambil Data Wajib
  const nama = formData.get("nama") as string;
  const nis = formData.get("nis") as string;
  const kelas = formData.get("kelas") as string;
  const jabatan = formData.get("jabatan") as string;
  const divisi = formData.get("divisi") as string;
  
  // 2. Ambil Data Tambahan
  const hp = formData.get("hp") as string;
  const email = formData.get("email") as string;
  const instagram = formData.get("instagram") as string;
  const tiktok = formData.get("tiktok") as string;
  const domisili = formData.get("domisili") as string;
  const transportasi = formData.get("transportasi") as string;
  const motto = formData.get("motto") as string;
  const fotoUrl = formData.get("fotoUrl") as string;
  
  // ✅ DATA BARU: VISI & MISI (Ditangkap dari FormData)
  const visi = formData.get("visi") as string;
  const misi = formData.get("misi") as string;
  
  // Cek Tanggal Lahir (Convert string ke Date)
  const tglLahirRaw = formData.get("tglLahir") as string;
  const tglLahir = tglLahirRaw ? new Date(tglLahirRaw) : null;

  // Cek apakah Guru/Pembina
  const isAdvisor = formData.get("isAdvisor") === "true";

  // Validasi Dasar
  if (!nama || !nis || !jabatan) {
    return { success: false, message: "Nama, NIS/NIP, dan Jabatan wajib diisi!" };
  }

  try {
    await prisma.pengurus.create({
      data: {
        nama,
        nis,
        kelas: kelas || "-",
        jabatan,
        divisi,
        hp,
        email,
        instagram,
        tiktok,
        domisili,
        transportasi,
        motto,
        // ✅ SIMPAN VISI & MISI KE DATABASE
        visi: visi || null, 
        misi: misi || null,
        tglLahir,
        fotoUrl: fotoUrl || null,
        status: "AKTIF",
        isAdvisor: isAdvisor
      },
    });

    revalidatePath("/admin/pengurus");
    return { success: true, message: "Pengurus berhasil ditambahkan! 👤" };
  } catch (error) {
    console.error("CREATE PENGURUS ERROR:", error);
    return { success: false, message: "Gagal menambah data. NIS mungkin sudah terdaftar." };
  }
}

export async function updatePengurus(formData: FormData) {
  const idRaw = formData.get("id");
  if (!idRaw) return { success: false, message: "ID tidak ditemukan" };
  const id = Number(idRaw);

  // Ambil semua data input
  const nama = formData.get("nama") as string;
  const nis = formData.get("nis") as string;
  const kelas = formData.get("kelas") as string;
  const jabatan = formData.get("jabatan") as string;
  const divisi = formData.get("divisi") as string;
  const status = formData.get("status") as "AKTIF" | "NONAKTIF" | "ALUMNI";
  
  // Data Tambahan
  const hp = formData.get("hp") as string;
  const email = formData.get("email") as string;
  const instagram = formData.get("instagram") as string;
  const tiktok = formData.get("tiktok") as string;
  const domisili = formData.get("domisili") as string;
  const transportasi = formData.get("transportasi") as string;
  const motto = formData.get("motto") as string;
  const fotoUrl = formData.get("fotoUrl") as string;
  
  // ✅ DATA BARU: VISI & MISI (Update)
  const visi = formData.get("visi") as string;
  const misi = formData.get("misi") as string;

  const tglLahirRaw = formData.get("tglLahir") as string;
  const tglLahir = tglLahirRaw ? new Date(tglLahirRaw) : undefined; 

  try {
    await prisma.pengurus.update({
      where: { id },
      data: {
        nama,
        nis,
        kelas,
        jabatan,
        divisi,
        status,
        hp,
        email,
        instagram,
        tiktok,
        domisili,
        transportasi,
        motto,
        // ✅ UPDATE VISI & MISI
        visi, 
        misi,
        // Update tanggal lahir cuma kalau ada input baru
        ...(tglLahir && { tglLahir }),
        // Update foto cuma kalau ada foto baru yang dikirim
        ...(fotoUrl && { fotoUrl }),
      },
    });

    revalidatePath("/admin/pengurus");
    return { success: true, message: "Data pengurus diperbarui! 📝" };
  } catch (error) {
    console.error("UPDATE PENGURUS ERROR:", error);
    return { success: false, message: "Gagal update data." };
  }
}

export async function deletePengurus(id: number) {
  try {
    await prisma.pengurus.delete({ where: { id } });
    revalidatePath("/admin/pengurus");
    return { success: true };
  } catch (error) {
    console.error("DELETE PENGURUS ERROR:", error);
    return { success: false };
  }
}

export async function updateIdCardDesign(id: number, designUrl: string | null) {
  try {
    await prisma.pengurus.update({
      where: { id },
      data: { idCardDesign: designUrl },
    });
    revalidatePath("/admin/idcard"); 
    return { success: true };
  } catch (error) {
    console.error("UPDATE ID CARD ERROR:", error);
    return { success: false };
  }
}

export async function saveIdCardBackground(imageUrl: string | null) {
  try {
    await prisma.appConfig.upsert({
      where: { id: 1 },
      update: { idCardBackImage: imageUrl },
      create: { id: 1, idCardBackImage: imageUrl },
    });
    
    revalidatePath("/admin/idcard");
    return { success: true };
  } catch (error) {
    console.error("SAVE BG ERROR:", error);
    return { success: false };
  }
}

/* ======================================================
   7. SISTEM ABSENSI (SCANNER & ACARA)
====================================================== */

// 1. Buat Acara Baru (Update: Tambah Waktu, Tipe, Hari, & AutoStart)
export async function createAcara(formData: FormData) {
  const nama = formData.get("nama") as string;
  const deskripsi = formData.get("deskripsi") as string;
  const tanggalStr = formData.get("tanggal") as string;
  const lokasi = formData.get("lokasi") as string;
  const mulaiStr = formData.get("waktuMulai") as string; 
  const selesaiStr = formData.get("waktuSelesai") as string; 
  const tipe = (formData.get("tipe") as any) || "SEKALI_PAKAI";
  const hari = formData.get("hari") as string; // Contoh: "Senin,Selasa"
  const autoStart = formData.get("autoStart") === "true";

  if (!nama || !tanggalStr) return { success: false, message: "Nama dan Tanggal wajib diisi!" };

  try {
    const start = mulaiStr ? new Date(`${tanggalStr}T${mulaiStr}`) : null;
    const end = selesaiStr ? new Date(`${tanggalStr}T${selesaiStr}`) : null;

    const newAcara = await prisma.acara.create({
      data: {
        nama,
        deskripsi: deskripsi || "",
        tipe,
        hari: tipe === "RUTINAN" ? hari : null,
        tanggal: new Date(tanggalStr),
        waktuMulai: start,
        waktuSelesai: end,
        lokasi: lokasi || "Sekolah",
        status: "UPCOMING",
        autoStart
      }
    });
    
    revalidatePath("/admin/absensi");
    return { success: true, message: "Acara berhasil dibuat! 📅", id: newAcara.id };
  } catch (error) {
    console.error("CREATE ACARA ERROR:", error);
    return { success: false, message: "Gagal membuat acara." };
  }
}

// 6. Update Status Kehadiran (Sakit, Izin, dll)
export async function updateStatusKehadiran(absensiId: number, status: any) {
  try {
    await prisma.absensi.update({
      where: { id: absensiId },
      data: { status }
    });
    revalidatePath("/admin/absensi");
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

// 2. Ambil Semua Acara (Terutama yang aktif/mendatang)
export async function getDaftarAcara() {
  try {
    return await prisma.acara.findMany({
      include: {
        sesi: {
          where: { status: "ONGOING" },
          take: 1,
          orderBy: { waktuMulai: 'desc' }
        }
      },
      orderBy: { createdAt: 'desc' } // Urutkan dari yang terbaru dibuat
    });
  } catch (error) {
    return [];
  }
}

// 3. Update Acara (Edit detail + Tipe + Hari + AutoStart)
export async function updateAcara(id: number, formData: FormData) {
  const nama = formData.get("nama") as string;
  const tanggalStr = formData.get("tanggal") as string;
  const lokasi = formData.get("lokasi") as string;
  const mulaiStr = formData.get("waktuMulai") as string;
  const selesaiStr = formData.get("waktuSelesai") as string;
  const tipe = (formData.get("tipe") as any) || "SEKALI_PAKAI";
  const hari = formData.get("hari") as string;
  const autoStart = formData.get("autoStart") === "true";

  try {
    const start = mulaiStr ? new Date(`${tanggalStr}T${mulaiStr}`) : null;
    const end = selesaiStr ? new Date(`${tanggalStr}T${selesaiStr}`) : null;

    await prisma.acara.update({
      where: { id },
      data: {
        nama,
        tipe,
        hari: tipe === "RUTINAN" ? hari : null,
        tanggal: new Date(tanggalStr),
        lokasi,
        waktuMulai: start,
        waktuSelesai: end,
        autoStart
      }
    });
    revalidatePath("/admin/absensi");
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

// 4. Hapus Acara
export async function deleteAcara(id: number) {
  try {
    await prisma.acara.delete({ where: { id } });
    revalidatePath("/admin/absensi");
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

// 5. Start Sesi (Manual Override & Logic Sesi Baru)
export async function startAcaraSession(id: number) {
  try {
    const result = await prisma.$transaction(async (tx) => {
      // 1. Update status Acara
      await tx.acara.update({
        where: { id },
        data: {
          status: "ONGOING",
          waktuMulaiAktual: new Date()
        }
      });

      // 2. Buat Sesi Baru
      return await tx.sesiAcara.create({
        data: {
          acaraId: id,
          waktuMulai: new Date(),
          status: "ONGOING"
        }
      });
    });

    revalidatePath("/admin/absensi");
    return { success: true, sesiId: result.id };
  } catch (error) {
    console.error("START SESSION ERROR:", error);
    return { success: false };
  }
}

// 6. Stop Sesi
export async function stopAcaraSession(id: number) {
  try {
    const acara = await prisma.acara.findUnique({ where: { id } });
    if (!acara) return { success: false };

    await prisma.$transaction(async (tx) => {
      // 1. Cari sesi yang aktif
      const sesiAktif = await tx.sesiAcara.findFirst({
        where: { acaraId: id, status: "ONGOING" },
        orderBy: { waktuMulai: 'desc' }
      });

      if (sesiAktif) {
        await tx.sesiAcara.update({
          where: { id: sesiAktif.id },
          data: {
            status: "COMPLETED",
            waktuSelesai: new Date()
          }
        });
      }

      // 2. Update status Acara
      // Jika Rutinan, balik ke UPCOMING biar bisa di-start lagi besok
      const nextStatus = acara.tipe === "RUTINAN" ? "UPCOMING" : "COMPLETED";

      await tx.acara.update({
        where: { id: id },
        data: {
          status: nextStatus,
          waktuSelesaiAktual: new Date()
        }
      });
    });

    revalidatePath("/admin/absensi");
    return { success: true };
  } catch (error) {
    console.error("STOP SESSION ERROR:", error);
    return { success: false };
  }
}

// 7. Scan Absensi (Update: Logika Berbasis Sesi)
export async function scanAbsensi(nis: string, acaraId: number) {
  if (!nis || !acaraId) return { success: false, message: "Data tidak lengkap!" };

  try {
    const pengurus = await prisma.pengurus.findUnique({ where: { nis } });
    if (!pengurus) return { success: false, message: "❌ QR Code Tidak Terdaftar!" };
    if (pengurus.status !== "AKTIF") return { success: false, message: "⚠️ Anggota Tidak Aktif" };

    const acara = await prisma.acara.findUnique({ where: { id: acaraId } });
    if (!acara) return { success: false, message: "❌ Acara tidak ditemukan!" };

    // CARI SESI AKTIF
    const sesiAktif = await prisma.sesiAcara.findFirst({
      where: { acaraId: acaraId, status: "ONGOING" },
      orderBy: { waktuMulai: 'desc' }
    });

    if (!sesiAktif) return { success: false, message: "⚠️ Sesi tidak aktif! Silakan Start dulu." };

    // Cek duplikasi berdasarkan sesiId
    const existingLog = await prisma.absensi.findFirst({ 
      where: { 
        pengurusId: pengurus.id, 
        sesiId: sesiAktif.id 
      } 
    });

    if (existingLog) {
      return { 
        success: true, 
        message: "Sudah absen di sesi ini! 👌", 
        data: {
           name: pengurus.nama,
           role: pengurus.jabatan,
           image: pengurus.fotoUrl,
           status: "DUPLICATE" 
        }
      };
    }

    // Simpan Absensi
    await prisma.absensi.create({
      data: {
        pengurusId: pengurus.id,
        acaraId: acaraId,
        sesiId: sesiAktif.id, // WAJIB simpan sesiId
        kegiatan: acara.nama,
        status: "HADIR",
        tanggal: new Date(),
      },
    });

    return { 
      success: true, 
      message: "Absensi Berhasil! ✅",
      data: {
         name: pengurus.nama,
         role: pengurus.jabatan,
         image: pengurus.fotoUrl,
         status: "HADIR"
      }
    };
  } catch (error) {
    console.error("SCAN ERROR:", error);
    return { success: false, message: "Server Error." };
  }
}

// 11. Input Absensi Manual (Update: Berbasis Sesi)
export async function inputManualAbsensi(acaraId: number, pengurusId: number, status: any) {
  try {
    const sesiAktif = await prisma.sesiAcara.findFirst({
        where: { acaraId: acaraId, status: "ONGOING" },
        orderBy: { waktuMulai: 'desc' }
    });
    
    if (!sesiAktif) return { success: false, message: "⚠️ Tidak ada sesi aktif! Silakan Start dulu." };

    const acara = await prisma.acara.findUnique({ where: { id: acaraId } });
    if (!acara) return { success: false, message: "Acara tidak ditemukan" };

    // Gunakan findFirst + Create/Update karena Absensi tidak punya unique key di schema yang mendukung Upsert untuk sesiId
    const existing = await prisma.absensi.findFirst({
        where: { pengurusId, sesiId: sesiAktif.id }
    });

    if (existing) {
        await prisma.absensi.update({
            where: { id: existing.id },
            data: { status }
        });
    } else {
        await prisma.absensi.create({
            data: {
                acaraId,
                sesiId: sesiAktif.id,
                pengurusId,
                status,
                kegiatan: acara.nama,
                tanggal: new Date()
            }
        });
    }
    
    revalidatePath("/admin/absensi");
    return { success: true };
  } catch (error) {
    console.error("MANUAL INPUT ERROR:", error);
    return { success: false };
  }
}

// 12. Auto-Alpa bagi yang tidak hadir saat sesi ditutup (Update: Berbasis Sesi)
export async function autoAlpaRemaining(acaraId: number) {
  try {
    const sesiAktif = await prisma.sesiAcara.findFirst({
        where: { acaraId: acaraId, status: "ONGOING" },
        orderBy: { waktuMulai: 'desc' }
    });
    
    if (!sesiAktif) return { success: false, message: "Tidak ada sesi aktif" };

    const acara = await prisma.acara.findUnique({ where: { id: acaraId } });
    if (!acara) return { success: false };

    // 1. Ambil semua pengurus aktif
    const semuaPengurus = await prisma.pengurus.findMany({
      where: { status: "AKTIF" },
      select: { id: true }
    });

    // 2. Ambil pengurus yang SUDAH punya record di SESI INI
    const sudahAbsen = await prisma.absensi.findMany({
      where: { sesiId: sesiAktif.id },
      select: { pengurusId: true }
    });

    const idsSudahAbsen = sudahAbsen.map(a => a.pengurusId);

    // 3. Filter siapa yang belum ada recordnya
    const belumAbsen = semuaPengurus.filter(p => !idsSudahAbsen.includes(p.id));

    // 4. Masukkan mereka sebagai ALPA
    if (belumAbsen.length > 0) {
      await prisma.absensi.createMany({
        data: belumAbsen.map(p => ({
          acaraId,
          sesiId: sesiAktif.id,
          pengurusId: p.id,
          status: "ALPA",
          kegiatan: acara.nama,
          tanggal: new Date()
        }))
      });
    }

    // 5. Tutup Sesi secara resmi
    await stopAcaraSession(acaraId);

    revalidatePath("/admin/absensi");
    return { success: true, count: belumAbsen.length };
  } catch (error) {
    console.error("AUTO ALPA ERROR:", error);
    return { success: false };
  }
}

// 13. Ambil Daftar Pengurus Aktif (Untuk Dropdown Manual)
export async function getDaftarPengurus() {
  try {
    return await prisma.pengurus.findMany({
      where: { status: "AKTIF" },
      orderBy: { nama: "asc" }
    });
  } catch (error) {
    return [];
  }
}

// 14. Auto-Start Sesi berdasarkan Waktu
export async function checkAndAutoStartAcara() {
  const now = new Date();
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  
  // Hitung total menit dari jam sekarang (Lokal)
  const currentTimeVal = now.getHours() * 60 + now.getMinutes();

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const todayDay = days[now.getDay()];

  try {
    const upcomingAcara = await prisma.acara.findMany({
      where: {
        status: "UPCOMING",
        autoStart: true,
      }
    });

    for (const acara of upcomingAcara) {
      if (!acara.waktuMulai) continue;

      // Hitung total menit dari jadwal
      const scheduleHours = acara.waktuMulai.getHours();
      const scheduleMinutes = acara.waktuMulai.getMinutes();
      const scheduleTimeVal = scheduleHours * 60 + scheduleMinutes;

      const isToday = acara.tipe === "SEKALI_PAKAI" && 
                      acara.tanggal.toDateString() === now.toDateString();
      
      const isRoutineToday = acara.tipe === "RUTINAN" && 
                             acara.hari?.includes(todayDay);

      if ((isToday || isRoutineToday) && currentTimeVal >= scheduleTimeVal) {
        
        // 1. Cek apakah ada sesi yang sedang ONGOING (Jangan double start)
        const activeSesi = await prisma.sesiAcara.findFirst({
            where: { acaraId: acara.id, status: "ONGOING" }
        });
        if (activeSesi) continue;

        // 2. Cek Sesi terakhir hari ini
        const lastSesiHariIni = await prisma.sesiAcara.findFirst({
            where: { 
                acaraId: acara.id, 
                waktuMulai: { gte: startOfToday } 
            },
            orderBy: { waktuMulai: 'desc' }
        });

        if (!lastSesiHariIni) {
            // Belum ada sesi sama sekali hari ini, boleh start
            console.log(`Auto-starting session for: ${acara.nama}`);
            await startAcaraSession(acara.id);
        } else {
            // Jika sudah ada sesi, bandingkan jam jadwalnya.
            // Jika jadwal diedit ke waktu yang lebih baru dari sesi terakhir, boleh start lagi.
            const lastSesiTimeVal = lastSesiHariIni.waktuMulai.getHours() * 60 + lastSesiHariIni.waktuMulai.getMinutes();
            
            if (scheduleTimeVal > lastSesiTimeVal) {
                console.log(`New schedule detected for ${acara.nama}, restarting session...`);
                await startAcaraSession(acara.id);
            }
        }
      }
    }
    return { success: true };
  } catch (error) {
    console.error("AUTO START ERROR:", error);
    return { success: false };
  }
}

// 15. Ambil Daftar Sesi (Untuk Laporan Per Sesi)
export async function getDaftarSesi(acaraId: number) {
  try {
    return await prisma.sesiAcara.findMany({
      where: { acaraId },
      orderBy: { waktuMulai: 'desc' }
    });
  } catch (error) {
    return [];
  }
}

// 8. Ambil Rekap Absensi Lengkap (Update: Berbasis Sesi & Multi-Status)
export async function getRekapAbsensi() {
  try {
    const totalPengurus = await prisma.pengurus.count({ where: { status: "AKTIF" } });
    
    // Ambil semua sesi yang pernah dilakukan
    const sesiList = await prisma.sesiAcara.findMany({
      include: {
        acara: true,
        absensi: {
          select: { status: true }
        }
      },
      orderBy: { waktuMulai: 'desc' }
    });

    return {
      success: true,
      data: sesiList.map(s => {
        const tgl = new Date(s.waktuMulai);
        const formatTgl = tgl.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit' });
        const formatJam = tgl.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

        const counts = {
          HADIR: s.absensi.filter(a => a.status === 'HADIR').length,
          IZIN: s.absensi.filter(a => a.status === 'IZIN').length,
          SAKIT: s.absensi.filter(a => a.status === 'SAKIT').length,
          ALPA: s.absensi.filter(a => a.status === 'ALPA').length,
        };

        return {
          id: s.id,
          acaraId: s.acaraId,
          nama: `${s.acara.nama} (${formatTgl} ${formatJam})`,
          lokasi: s.acara.lokasi,
          tanggal: s.waktuMulai,
          counts,
          totalAnggota: totalPengurus,
          persentase: totalPengurus > 0 ? Math.round((counts.HADIR / totalPengurus) * 100) : 0,
          statusSesi: s.status
        };
      })
    };
  } catch (error) {
    console.error("REKAP ERROR:", error);
    return { success: false, message: "Gagal memuat rekap." };
  }
}

// 9. Ambil Detail Absensi per Sesi (Laporan - Sort by Nama)
export async function getDetailLaporan(sesiId: number) {
  try {
    return await prisma.absensi.findMany({
      where: { sesiId: sesiId },
      include: { pengurus: true },
      orderBy: { pengurus: { nama: 'asc' } }
    });
  } catch (error) {
    console.error("DETAIL ERROR:", error);
    return [];
  }
}

// 10. Ambil Log Absensi per Sesi/Acara (Activity Stream)
export async function getLogsByAcara(id: number, type: 'sesi' | 'acara' = 'sesi') {
  try {
    let targetSesiId = id;

    if (type === 'acara') {
        const activeSesi = await prisma.sesiAcara.findFirst({
            where: { acaraId: id, status: "ONGOING" },
            orderBy: { waktuMulai: 'desc' }
        });
        if (!activeSesi) return []; // Tidak ada sesi aktif = tidak ada log
        targetSesiId = activeSesi.id;
    }

    return await prisma.absensi.findMany({
      where: { sesiId: targetSesiId },
      include: { pengurus: true },
      orderBy: { tanggal: 'desc' }
    });
  } catch (error) {
    return [];
  }
}




/* ======================================================
   8. MANAJEMEN KEUANGAN (KAS & ANGGARAN)
====================================================== */

// 1. Catat Transaksi Kas Umum
export async function createGeneralTrx(formData: FormData) {
  const judul = formData.get("title") as string;
  const nominal = Number(formData.get("amount"));
  const tipe = formData.get("type") as "PEMASUKAN" | "PENGELUARAN";
  const kategori = formData.get("category") as string;
  const dateStr = formData.get("date") as string;
  const pic = formData.get("pic") as string; // Keterangan PIC

  try {
    await prisma.keuangan.create({
      data: {
        judul,
        nominal,
        tipe,
        kategori,
        tanggal: new Date(dateStr),
        keterangan: `PIC: ${pic}`, // Simpan PIC di keterangan
      },
    });
    
    revalidatePath("/admin/keuangan");
    return { success: true, message: "Transaksi berhasil dicatat! 💰" };
  } catch (error) {
    return { success: false, message: "Gagal mencatat transaksi." };
  }
}

// 2. Buka Anggaran Event Baru (Pindah Buku: Kas Umum -> Event)
export async function createEventBudget(formData: FormData) {
  const namaEvent = formData.get("title") as string;
  const budget = Number(formData.get("amount"));
  const dateStr = formData.get("date") as string;

  try {
    await prisma.$transaction(async (tx) => {
      // A. Catat PENGELUARAN di Kas Umum
      await tx.keuangan.create({
        data: {
          judul: `Modal Event: ${namaEvent}`,
          nominal: budget,
          tipe: "PENGELUARAN",
          kategori: "Anggaran Event",
          tanggal: new Date(dateStr),
          keterangan: "Alokasi dana ke event baru",
        },
      });

      // B. Buat Data Proker Baru (Status: ACTIVE)
      await tx.programKerja.create({
        data: {
          nama: namaEvent,
          anggaran: budget,
          anggaranTerpakai: 0,
          status: "IN_PROGRESS", 
          divisi: "Kepanitiaan", 
          deadline: new Date(dateStr), 
        }
      });
    });

    revalidatePath("/admin/keuangan");
    return { success: true, message: "Anggaran Event berhasil dibuka! 🎉" };
  } catch (error) {
    console.error("CREATE EVENT BUDGET ERROR:", error);
    return { success: false, message: "Gagal membuka anggaran." };
  }
}

// 3. Catat Transaksi Pengeluaran Event
export async function createEventTrx(formData: FormData) {
  const eventId = Number(formData.get("eventId"));
  const judul = formData.get("title") as string;
  const nominal = Number(formData.get("amount"));
  const dateStr = formData.get("date") as string;

  try {
    await prisma.$transaction(async (tx) => {
      // A. Simpan Transaksi (Linked ke ProkerID)
      await tx.keuangan.create({
        data: {
          judul,
          nominal,
          tipe: "PENGELUARAN",
          kategori: "Pengeluaran Event",
          tanggal: new Date(dateStr),
          prokerId: eventId, 
        },
      });

      // B. Update 'anggaranTerpakai' di tabel Proker
      await tx.programKerja.update({
        where: { id: eventId },
        data: {
          anggaranTerpakai: { increment: nominal } 
        }
      });
    });

    revalidatePath("/admin/keuangan");
    return { success: true, message: "Pengeluaran event dicatat! 🧾" };
  } catch (error) {
    console.error("CREATE EVENT TRX ERROR:", error);
    return { success: false, message: "Gagal update data event." };
  }
}

/* ======================================================
   9. MANAJEMEN INVENTARIS
====================================================== */

// 1. Tambah/Edit Barang
export async function saveInventaris(formData: FormData) {
  const idRaw = formData.get("id");
  const nama = formData.get("name") as string;
  const kode = formData.get("code") as string;
  const kategori = formData.get("category") as string;
  const harga = Number(formData.get("price"));
  const fotoUrl = formData.get("image") as string;
  const serial = formData.get("serial") as string;

  try {
    if (idRaw) {
      // Edit
      await prisma.inventaris.update({
        where: { id: Number(idRaw) },
        data: { nama, kode, kategori, harga, serialNum: serial, ...(fotoUrl && { fotoUrl }) }
      });
    } else {
      // Create
      await prisma.inventaris.create({
        data: { 
           nama, kode, kategori, harga, serialNum: serial, fotoUrl, 
           status: "AVAILABLE", kondisi: "Baik" 
        }
      });
    }
    revalidatePath("/admin/inventaris");
    return { success: true, message: "Data aset tersimpan! 📦" };
  } catch (error) {
    return { success: false, message: "Gagal menyimpan aset." };
  }
}

// 2. Hapus Barang
export async function deleteInventaris(id: number) {
  try {
    await prisma.inventaris.delete({ where: { id } });
    revalidatePath("/admin/inventaris");
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

// 3. Pinjam Barang
export async function pinjamBarang(formData: FormData) {
  const id = Number(formData.get("id"));
  const peminjam = formData.get("borrower") as string;

  try {
    await prisma.inventaris.update({
      where: { id },
      data: {
        status: "BORROWED",
        peminjam: peminjam,
        tglPinjam: new Date()
      }
    });
    revalidatePath("/admin/inventaris");
    return { success: true, message: "Barang berhasil dipinjam! 🕒" };
  } catch (error) {
    return { success: false, message: "Gagal memproses peminjaman." };
  }
}

// 4. Kembalikan Barang
export async function kembalikanBarang(formData: FormData) {
  const id = Number(formData.get("id"));
  const kondisi = formData.get("condition") as string;
  
  try {
    const result = await prisma.$transaction(async (tx) => {
      // Ambil data barang dulu buat tau siapa peminjam terakhir
      const barang = await tx.inventaris.findUnique({ where: { id } });
      if (!barang || !barang.peminjam) {
        throw new Error("Data barang tidak valid atau tidak sedang dipinjam.");
      }

      // A. Simpan ke Riwayat
      await tx.riwayatAset.create({
        data: {
          inventarisId: id,
          peminjam: barang.peminjam,
          tglKeluar: barang.tglPinjam || new Date(),
          tglKembali: new Date(),
          kondisiKembali: kondisi
        }
      });

      // B. Reset Status Barang
      await tx.inventaris.update({
        where: { id },
        data: {
          status: kondisi === "Rusak" ? "MAINTENANCE" : "AVAILABLE",
          kondisi: kondisi,
          peminjam: null,
          tglPinjam: null
        }
      });

      return { success: true, message: "Barang sudah dikembalikan! ✅" };
    });

    revalidatePath("/admin/inventaris");
    return result;
  } catch (error: any) {
    console.error("RETURN ITEM ERROR:", error);
    return { success: false, message: error.message || "Gagal memproses pengembalian." };
  }
}




/* ======================================================
   11. STATISTIK PENGUNJUNG (VISITOR TRACKING)
====================================================== */

export async function trackVisitor(ip: string, userAgent: string, path: string) {
  // 1. Abaikan rute internal/admin
  if (path.startsWith('/admin') || path.startsWith('/api') || path.includes('_next') || path.includes('favicon')) {
    return;
  }

  // 2. Filter Bot Dasar (Mencegah jutaan hit dari crawler)
  const botKeywords = ['bot', 'crawler', 'spider', 'googlebot', 'bingbot', 'yandexbot', 'slurp', 'baiduspider'];
  const uaLower = userAgent.toLowerCase();
  if (botKeywords.some(keyword => uaLower.includes(keyword))) {
    return;
  }

  // Safety check: Pastikan model visitor ada
  if (!(prisma as any).visitor) return;

  try {
    // 3. Gunakan rentang waktu untuk pengecekan "unique visit"
    // Kita anggap satu orang adalah satu kunjungan per 1 jam per halaman
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    
    // Cek apakah sudah ada kunjungan serupa (gunakan select id saja agar ringan)
    const recentVisit = await (prisma as any).visitor.findFirst({
      where: {
        ip,
        path,
        createdAt: { gte: oneHourAgo }
      },
      select: { id: true }
    });

    if (!recentVisit) {
      await (prisma as any).visitor.create({
        data: { ip, userAgent: userAgent.substring(0, 255), path }
      });
    }
  } catch (error) {
    // Gunakan logging yang tidak menghentikan proses utama
    console.error("TRACK VISITOR ERROR:", error);
  }
}

/* ======================================================
   10. MANAJEMEN GALERI KEGIATAN
====================================================== */

export async function saveGaleri(formData: FormData) {
  const idRaw = formData.get("id");
  const judul = formData.get("judul") as string;
  const kategori = formData.get("kategori") as string;
  const tanggal = formData.get("tanggal") as string;
  const deskripsi = formData.get("deskripsi") as string;
  
  // Ambil JSON string dari form client
  const imagesJson = formData.get("images") as string; 

  if (!judul || !imagesJson) {
    return { success: false, message: "Judul dan minimal 1 Foto wajib diisi!" };
  }

  try {
    if (idRaw) {
      // MODE EDIT
      await prisma.galeri.update({
        where: { id: Number(idRaw) },
        data: {
          judul, kategori, deskripsi,
          tanggal: new Date(tanggal),
          images: imagesJson // Simpan sebagai JSON String
        }
      });
    } else {
      // MODE BARU
      await prisma.galeri.create({
        data: {
          judul, kategori, deskripsi,
          tanggal: new Date(tanggal),
          images: imagesJson
        }
      });
    }
    
    revalidatePath("/admin/galeri");
    revalidatePath("/galeri"); 
    return { success: true, message: "Galeri berhasil disimpan! 📸" };
  } catch (error) {
    console.error("GALERI ERROR:", error);
    return { success: false, message: "Gagal menyimpan galeri." };
  }
}

export async function deleteGaleri(id: number) {
  try {
    await prisma.galeri.delete({ where: { id } });
    revalidatePath("/admin/galeri");
    revalidatePath("/galeri");
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}