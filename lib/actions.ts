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

/* ======================================================
   1. ASPIRASI SISWA
====================================================== */
export async function submitAspirasi(formData: FormData) {
  const rawNama = formData.get("nama") as string;
  const rawKelas = formData.get("kelas") as string;
  const pesan = formData.get("pesan") as string;
  const isAnonim = formData.get("isAnonim") === "true";

  if (!pesan || pesan.trim() === "") return { success: false, message: "Pesan tidak boleh kosong!" };

  const pengirim = isAnonim || !rawNama ? "Anonim" : rawNama;
  const kelas = isAnonim ? "-" : rawKelas;

  try {
    await prisma.aspirasi.create({ data: { pengirim, kelas, isi: pesan, kategori: "Umum", status: "PENDING" } });
    revalidatePath("/");
    return { success: true, message: "Aspirasi berhasil dikirim! 🚀" };
  } catch (error) {
    return { success: false, message: "Gagal mengirim aspirasi." };
  }
}

export async function replyAspirasi(formData: FormData) {
  const id = Number(formData.get("id"));
  const balasan = formData.get("balasan") as string;
  if (!balasan || balasan.trim() === "") return { success: false, message: "Balasan tidak boleh kosong." };

  try {
    await prisma.aspirasi.update({ where: { id }, data: { balasan, balasanAt: new Date(), status: "SELESAI" } });
    revalidatePath("/admin/aspirasi");
    return { success: true, message: "Balasan terkirim!" };
  } catch (error) {
    return { success: false, message: "Gagal membalas pesan." };
  }
}

export async function deleteAspirasi(id: number) {
  try {
    await prisma.aspirasi.delete({ where: { id } });
    revalidatePath("/admin/aspirasi");
    return { success: true, message: "Aspirasi dihapus." };
  } catch (error) {
    return { success: false, message: "Gagal hapus aspirasi." };
  }
}

/* ======================================================
   2. BERITA (CMS)
====================================================== */

function slugify(text: string) {
  return text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/--+/g, "-");
}

export async function createBerita(formData: FormData) {
  const validatedFields = BeritaSchema.safeParse({ judul: formData.get("judul"), konten: formData.get("konten"), kategori: formData.get("kategori") || "Umum", gambar: formData.get("gambar") });
  if (!validatedFields.success) return { success: false, message: "Data tidak valid." };

  const { judul, konten, kategori, gambar } = validatedFields.data;
  const slug = `${slugify(judul)}-${Date.now()}`;
  const session = await getCurrentUser();
  if (!session) return { success: false, message: "Sesi habis." };

  const adminUser = await prisma.user.findUnique({ where: { username: session.username } });
  if (!adminUser) return { success: false, message: "User tidak ditemukan!" };

  try {
    await prisma.berita.create({ data: { judul, slug, konten, kategori, gambar: gambar || null, penulisId: adminUser.id, status: (formData.get("status") as string) || "PUBLISHED", views: 0 } });
    revalidatePath("/admin/berita"); revalidatePath("/berita");
    return { success: true, message: "Berita disimpan!" };
  } catch (error) {
    return { success: false, message: "Gagal menyimpan berita." };
  }
}

export async function updateBerita(formData: FormData) {
  const id = Number(formData.get("id"));
  const judul = formData.get("judul") as string;
  const konten = formData.get("konten") as string;
  const kategori = formData.get("kategori") as string;
  const status = formData.get("status") as string;
  const gambar = formData.get("gambar") as string | null;

  try {
    await prisma.berita.update({ where: { id }, data: { judul, konten, kategori, status: status || "PUBLISHED", ...(gambar && { gambar }) } });
    revalidatePath("/admin/berita"); revalidatePath("/berita");
    return { success: true, message: "Berita diperbarui!" };
  } catch (error) {
    return { success: false, message: "Gagal update berita." };
  }
}

export async function deleteBerita(id: number) {
  try {
    await prisma.berita.delete({ where: { id } });
    revalidatePath("/admin/berita");
    return { success: true, message: "Berita dihapus." };
  } catch (error) {
    return { success: false, message: "Gagal hapus berita." };
  }
}

/* ======================================================
   3. PROGRAM KERJA
====================================================== */

export async function createProgramKerja(formData: FormData) {
  const nama = formData.get("nama") as string;
  const progress = Number(formData.get("progress"));
  let status = "TODO";
  if (progress > 0 && progress < 100) status = "IN_PROGRESS";
  if (progress === 100) status = "DONE";

  try {
    await prisma.programKerja.create({
      data: {
        nama, status: status as StatusProker, progress,
        deskripsi: formData.get("deskripsi") as string,
        divisi: formData.get("divisi") as string,
        prioritas: formData.get("priority") as string,
        anggaran: Number(formData.get("anggaran")),
        lokasi: formData.get("lokasi") as string,
        image: formData.get("image") as string || null,
        isFeatured: formData.get("isFeatured") === "true",
        startDate: formData.get("startDate") ? new Date(formData.get("startDate") as string) : null,
        deadline: formData.get("deadline") ? new Date(formData.get("deadline") as string) : null
      },
    });
    revalidatePath("/admin/proker"); revalidatePath("/"); 
    return { success: true, message: "Proker berhasil dibuat!" };
  } catch (error) {
    return { success: false, message: "Gagal membuat proker." };
  }
}

export async function updateProgramKerja(formData: FormData) {
  const id = Number(formData.get("id"));
  const progress = Number(formData.get("progress"));
  let status = "TODO";
  if (progress > 0 && progress < 100) status = "IN_PROGRESS";
  if (progress === 100) status = "DONE";

  try {
    await prisma.programKerja.update({
      where: { id },
      data: {
        status: status as StatusProker, progress,
        nama: formData.get("nama") as string,
        deskripsi: formData.get("deskripsi") as string,
        divisi: formData.get("divisi") as string,
        prioritas: formData.get("priority") as string,
        anggaran: Number(formData.get("anggaran")),
        lokasi: formData.get("lokasi") as string,
        image: formData.get("image") as string || undefined,
        isFeatured: formData.get("isFeatured") === "true",
        startDate: formData.get("startDate") ? new Date(formData.get("startDate") as string) : null,
        deadline: formData.get("deadline") ? new Date(formData.get("deadline") as string) : null
      },
    });
    revalidatePath("/admin/proker"); revalidatePath("/");
    return { success: true, message: "Proker diperbarui!" };
  } catch (error) {
    return { success: false, message: "Gagal update proker." };
  }
}

export async function deleteProgramKerja(id: number) {
  try {
    await prisma.programKerja.delete({ where: { id } });
    revalidatePath("/admin/proker"); revalidatePath("/");
    return { success: true, message: "Program kerja dihapus." };
  } catch (error) {
    return { success: false, message: "Gagal hapus proker." };
  }
}

/* ======================================================
   4. PENGURUS
====================================================== */

export async function createPengurus(formData: FormData) {
  const nama = formData.get("nama") as string;
  const nis = formData.get("nis") as string;
  const jabatan = formData.get("jabatan") as string;
  if (!nama || !nis || !jabatan) return { success: false, message: "Nama, NIS, dan Jabatan wajib diisi!" };

  try {
    await prisma.pengurus.create({
      data: {
        nama, nis, jabatan, status: "AKTIF",
        kelas: formData.get("kelas") as string || "-",
        divisi: formData.get("divisi") as string || "-",
        fotoUrl: formData.get("fotoUrl") as string || null,
        isAdvisor: formData.get("isAdvisor") === "true"
      },
    });
    revalidatePath("/admin/pengurus");
    return { success: true, message: "Pengurus ditambahkan!" };
  } catch (error) {
    return { success: false, message: "Gagal menambah data." };
  }
}

export async function updatePengurus(formData: FormData) {
  const id = Number(formData.get("id"));
  try {
    await prisma.pengurus.update({
      where: { id },
      data: {
        nama: formData.get("nama") as string,
        nis: formData.get("nis") as string,
        kelas: formData.get("kelas") as string,
        jabatan: formData.get("jabatan") as string,
        divisi: formData.get("divisi") as string,
        status: formData.get("status") as any,
        fotoUrl: formData.get("fotoUrl") as string || undefined
      },
    });
    revalidatePath("/admin/pengurus");
    return { success: true, message: "Data pengurus diperbarui!" };
  } catch (error) {
    return { success: false, message: "Gagal update data." };
  }
}

export async function deletePengurus(id: number) {
  try {
    await prisma.pengurus.delete({ where: { id } });
    revalidatePath("/admin/pengurus");
    return { success: true, message: "Data pengurus dihapus." };
  } catch (error) {
    return { success: false, message: "Gagal hapus data pengurus." };
  }
}

/* ======================================================
   5. ABSENSI & ACARA
====================================================== */

export async function createAcara(formData: FormData) {
  const nama = formData.get("nama") as string;
  const tanggalStr = formData.get("tanggal") as string;
  try {
    const start = formData.get("waktuMulai") ? new Date(`${tanggalStr}T${formData.get("waktuMulai")}`) : null;
    const end = formData.get("waktuSelesai") ? new Date(`${tanggalStr}T${formData.get("waktuSelesai")}`) : null;
    const newAcara = await prisma.acara.create({
      data: {
        nama, tanggal: new Date(tanggalStr), waktuMulai: start, waktuSelesai: end,
        deskripsi: formData.get("deskripsi") as string || "",
        lokasi: formData.get("lokasi") as string || "Sekolah",
        tipe: (formData.get("tipe") as any) || "SEKALI_PAKAI",
        hari: formData.get("hari") as string || null,
        autoStart: formData.get("autoStart") === "true",
        status: "UPCOMING"
      }
    });
    revalidatePath("/admin/absensi");
    return { success: true, message: "Acara dibuat!", id: newAcara.id };
  } catch (error) {
    return { success: false, message: "Gagal membuat acara." };
  }
}

export async function updateAcara(id: number, formData: FormData) {
  const tanggalStr = formData.get("tanggal") as string;
  try {
    const start = formData.get("waktuMulai") ? new Date(`${tanggalStr}T${formData.get("waktuMulai")}`) : null;
    const end = formData.get("waktuSelesai") ? new Date(`${tanggalStr}T${formData.get("waktuSelesai")}`) : null;
    await prisma.acara.update({
      where: { id },
      data: {
        nama: formData.get("nama") as string,
        tanggal: new Date(tanggalStr), waktuMulai: start, waktuSelesai: end,
        lokasi: formData.get("lokasi") as string,
        tipe: (formData.get("tipe") as any) || "SEKALI_PAKAI",
        hari: formData.get("hari") as string || null,
        autoStart: formData.get("autoStart") === "true"
      }
    });
    revalidatePath("/admin/absensi");
    return { success: true, message: "Acara diperbarui!" };
  } catch (error) {
    return { success: false, message: "Gagal update acara." };
  }
}

export async function deleteAcara(id: number) {
  try {
    await prisma.acara.delete({ where: { id } });
    revalidatePath("/admin/absensi");
    return { success: true, message: "Acara dihapus." };
  } catch (error) {
    return { success: false, message: "Gagal hapus acara." };
  }
}

export async function startAcaraSession(id: number) {
  try {
    const result = await prisma.$transaction(async (tx) => {
      await tx.acara.update({ where: { id }, data: { status: "ONGOING", waktuMulaiAktual: new Date() } });
      return await tx.sesiAcara.create({ data: { acaraId: id, waktuMulai: new Date(), status: "ONGOING" } });
    });
    revalidatePath("/admin/absensi");
    return { success: true, message: "Sesi dimulai!", sesiId: result.id };
  } catch (error) {
    return { success: false, message: "Gagal mulai sesi." };
  }
}

export async function stopAcaraSession(id: number) {
  try {
    const acara = await prisma.acara.findUnique({ where: { id } });
    if (!acara) return { success: false, message: "Acara tidak ditemukan" };
    await prisma.$transaction(async (tx) => {
      const sesiAktif = await tx.sesiAcara.findFirst({ where: { acaraId: id, status: "ONGOING" }, orderBy: { waktuMulai: 'desc' } });
      if (sesiAktif) await tx.sesiAcara.update({ where: { id: sesiAktif.id }, data: { status: "COMPLETED", waktuSelesai: new Date() } });
      const nextStatus = acara.tipe === "RUTINAN" ? "UPCOMING" : "COMPLETED";
      await tx.acara.update({ where: { id }, data: { status: nextStatus, waktuSelesaiAktual: new Date() } });
    });
    revalidatePath("/admin/absensi");
    return { success: true, message: "Sesi dihentikan." };
  } catch (error) {
    return { success: false, message: "Gagal stop sesi." };
  }
}

export async function scanAbsensi(nis: string, acaraId: number) {
  try {
    const pengurus = await prisma.pengurus.findUnique({ where: { nis } });
    if (!pengurus) return { success: false, message: "❌ QR Tidak Terdaftar!" };
    const sesiAktif = await prisma.sesiAcara.findFirst({ where: { acaraId, status: "ONGOING" }, orderBy: { waktuMulai: 'desc' } });
    if (!sesiAktif) return { success: false, message: "⚠️ Sesi tidak aktif!" };
    const existing = await prisma.absensi.findFirst({ where: { pengurusId: pengurus.id, sesiId: sesiAktif.id } });
    if (existing) return { success: true, message: "Sudah absen! 👌", data: { name: pengurus.nama, status: "DUPLICATE" } };
    await prisma.absensi.create({ data: { pengurusId: pengurus.id, acaraId, sesiId: sesiAktif.id, kegiatan: "Scan", status: "HADIR", tanggal: new Date() } });
    return { success: true, message: "Berhasil! ✅", data: { name: pengurus.nama, status: "HADIR" } };
  } catch (error) {
    return { success: false, message: "Error sistem scan." };
  }
}

export async function inputManualAbsensi(acaraId: number, pengurusId: number, status: any) {
  try {
    const sesiAktif = await prisma.sesiAcara.findFirst({ where: { acaraId, status: "ONGOING" }, orderBy: { waktuMulai: 'desc' } });
    if (!sesiAktif) return { success: false, message: "Sesi tidak aktif" };
    const existing = await prisma.absensi.findFirst({ where: { pengurusId, sesiId: sesiAktif.id } });
    if (existing) await prisma.absensi.update({ where: { id: existing.id }, data: { status } });
    else await prisma.absensi.create({ data: { acaraId, sesiId: sesiAktif.id, pengurusId, status, kegiatan: "Manual", tanggal: new Date() } });
    revalidatePath("/admin/absensi");
    return { success: true, message: "Status diperbarui manual." };
  } catch (error) {
    return { success: false, message: "Gagal input manual." };
  }
}

export async function autoAlpaRemaining(acaraId: number) {
  try {
    const sesiAktif = await prisma.sesiAcara.findFirst({ where: { acaraId, status: "ONGOING" }, orderBy: { waktuMulai: 'desc' } });
    if (!sesiAktif) return { success: false, message: "Sesi tidak aktif" };
    const semua = await prisma.pengurus.findMany({ where: { status: "AKTIF" }, select: { id: true } });
    const sudah = await prisma.absensi.findMany({ where: { sesiId: sesiAktif.id }, select: { pengurusId: true } });
    const sudahIds = sudah.map(s => s.pengurusId);
    const belum = semua.filter(p => !sudahIds.includes(p.id));
    if (belum.length > 0) {
      await prisma.absensi.createMany({ data: belum.map(p => ({ acaraId, sesiId: sesiAktif.id, pengurusId: p.id, status: "ALPA", kegiatan: "Auto", tanggal: new Date() })) });
    }
    await stopAcaraSession(acaraId);
    revalidatePath("/admin/absensi");
    return { success: true, message: "Sesi ditutup otomatis.", count: belum.length };
  } catch (error) {
    return { success: false, message: "Gagal auto-alpa." };
  }
}

export async function getDaftarAcara() { return await prisma.acara.findMany({ include: { sesi: { where: { status: "ONGOING" }, take: 1 } }, orderBy: { createdAt: 'desc' } }); }
export async function getDaftarPengurus() { return await prisma.pengurus.findMany({ where: { status: "AKTIF" }, orderBy: { nama: "asc" } }); }

export async function getRekapAbsensi() {
  const total = await prisma.pengurus.count({ where: { status: "AKTIF" } });
  const sesiList = await prisma.sesiAcara.findMany({ include: { acara: true, absensi: true }, orderBy: { waktuMulai: 'desc' } });
  return {
    success: true, message: "Rekap dimuat",
    data: sesiList.map(s => ({
      id: s.id, nama: s.acara.nama, tanggal: s.waktuMulai, totalAnggota: total,
      counts: { HADIR: s.absensi.filter(a => a.status === 'HADIR').length, IZIN: s.absensi.filter(a => a.status === 'IZIN').length, SAKIT: s.absensi.filter(a => a.status === 'SAKIT').length, ALPA: s.absensi.filter(a => a.status === 'ALPA').length },
      persentase: total > 0 ? Math.round((s.absensi.filter(a => a.status === 'HADIR').length / total) * 100) : 0
    }))
  };
}

export async function getDetailLaporan(sesiId: number) { return await prisma.absensi.findMany({ where: { sesiId }, include: { pengurus: true }, orderBy: { pengurus: { nama: 'asc' } } }); }

export async function getLogsByAcara(id: number, type: 'sesi' | 'acara' = 'sesi') {
  try {
    let targetSesiId = id;
    if (type === 'acara') {
        const activeSesi = await prisma.sesiAcara.findFirst({ where: { acaraId: id, status: "ONGOING" }, orderBy: { waktuMulai: 'desc' } });
        if (!activeSesi) return []; 
        targetSesiId = activeSesi.id;
    }
    return await prisma.absensi.findMany({ where: { sesiId: targetSesiId }, include: { pengurus: true }, orderBy: { tanggal: 'desc' } });
  } catch (error) { return []; }
}

export async function checkAndAutoStartAcara() { return { success: true, message: "Checked" }; }
export async function checkAndAutoStopAcara() { return { success: true, message: "Checked" }; }

/* ======================================================
   6. KEUANGAN
====================================================== */

export async function createBukuKas(formData: FormData) {
  try {
    await prisma.bukuKas.create({ data: { nama: formData.get("nama") as string, deskripsi: formData.get("deskripsi") as string, color: formData.get("color") as string || "blue", icon: formData.get("icon") as string || "Wallet" } });
    revalidatePath("/admin/keuangan"); return { success: true, message: "Buku Kas dibuat!" };
  } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function updateBukuKas(id: number, formData: FormData) {
  try {
    await prisma.bukuKas.update({ where: { id }, data: { nama: formData.get("nama") as string, deskripsi: formData.get("deskripsi") as string, color: formData.get("color") as string, icon: formData.get("icon") as string } });
    revalidatePath("/admin/keuangan"); return { success: true, message: "Buku Kas diperbarui!" };
  } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function deleteBukuKas(id: number) {
  try {
    await prisma.bukuKas.delete({ where: { id } });
    revalidatePath("/admin/keuangan"); return { success: true, message: "Buku Kas dihapus!" };
  } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function createGeneralTrx(formData: FormData) {
  try {
    await prisma.keuangan.create({ data: { judul: formData.get("title") as string, nominal: Number(formData.get("amount")), tipe: formData.get("type") as any, kategori: formData.get("category") as string, tanggal: new Date(), bukuKasId: Number(formData.get("bukuKasId")) } });
    revalidatePath("/admin/keuangan"); return { success: true, message: "Dicatat!" };
  } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function createEventBudget(formData: FormData) {
  try {
    await prisma.programKerja.update({ where: { id: Number(formData.get("prokerId")) }, data: { anggaran: { increment: Number(formData.get("amount")) } } });
    revalidatePath("/admin/keuangan"); return { success: true, message: "Dialokasikan!" };
  } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function createEventTrx(formData: FormData) {
  try {
    await prisma.$transaction([
      prisma.keuangan.create({ data: { judul: formData.get("title") as string, nominal: Number(formData.get("amount")), tipe: "PENGELUARAN", kategori: "Event", tanggal: new Date(), prokerId: Number(formData.get("prokerId")) } }),
      prisma.programKerja.update({ where: { id: Number(formData.get("prokerId")) }, data: { anggaranTerpakai: { increment: Number(formData.get("amount")) } } })
    ]);
    revalidatePath("/admin/keuangan"); return { success: true, message: "Dicatat!" };
  } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function closeEventBudget(prokerId: number, targetBukuId: number) {
  try {
    await prisma.programKerja.update({ where: { id: prokerId }, data: { status: "DONE" } });
    revalidatePath("/admin/keuangan"); return { success: true, message: "Ditutup!" };
  } catch (error) { return { success: false, message: "Gagal." }; }
}

/* ======================================================
   7. INVENTARIS
====================================================== */

export async function saveInventaris(formData: FormData) {
  try {
    const id = formData.get("id");
    const data = {
      nama: formData.get("name") as string,
      kode: formData.get("code") as string,
      kategori: formData.get("category") as string || "Umum",
      kondisi: formData.get("condition") as string || "Baik",
      status: (formData.get("status") as any) || "AVAILABLE"
    };

    if (id) {
      await prisma.inventaris.update({ where: { id: Number(id) }, data });
      revalidatePath("/admin/inventaris");
      return { success: true, message: "Aset diperbarui!" };
    } else {
      await prisma.inventaris.create({ data });
      revalidatePath("/admin/inventaris");
      return { success: true, message: "Aset disimpan!" };
    }
  } catch (error) { return { success: false, message: "Gagal menyimpan aset." }; }
}

export async function deleteInventaris(id: number) {
  try {
    await prisma.inventaris.delete({ where: { id } });
    revalidatePath("/admin/inventaris"); return { success: true, message: "Hapus!" };
  } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function pinjamBarang(formData: FormData) {
  try {
    await prisma.inventaris.update({ where: { id: Number(formData.get("id")) }, data: { status: "BORROWED", peminjam: formData.get("borrower") as string, tglPinjam: new Date() } });
    revalidatePath("/admin/inventaris"); return { success: true, message: "Dipinjam!" };
  } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function kembalikanBarang(formData: FormData) {
  try {
    await prisma.inventaris.update({ where: { id: Number(formData.get("id")) }, data: { status: "AVAILABLE", peminjam: null, tglPinjam: null } });
    revalidatePath("/admin/inventaris"); return { success: true, message: "Kembali!" };
  } catch (error) { return { success: false, message: "Gagal." }; }
}

/* ======================================================
   8. GALERI
====================================================== */

export async function saveGaleri(formData: FormData) {
  try {
    const id = formData.get("id");
    const tanggalStr = formData.get("tanggal") as string;
    
    const data = {
      judul: formData.get("judul") as string,
      kategori: formData.get("kategori") as string || "Umum",
      images: formData.get("images") as string,
      deskripsi: formData.get("deskripsi") as string || "",
      tanggal: tanggalStr ? new Date(tanggalStr) : new Date()
    };

    if (id) {
      await prisma.galeri.update({ where: { id: Number(id) }, data });
      revalidatePath("/admin/galeri");
      revalidatePath("/galeri");
      return { success: true, message: "Galeri diperbarui!" };
    } else {
      await prisma.galeri.create({ data });
      revalidatePath("/admin/galeri");
      revalidatePath("/galeri");
      return { success: true, message: "Galeri disimpan!" };
    }
  } catch (error) { 
    console.error("Save Galeri Error:", error);
    return { success: false, message: "Gagal menyimpan galeri." }; 
  }
}

export async function deleteGaleri(id: number) {
  try {
    await prisma.galeri.delete({ where: { id } });
    revalidatePath("/admin/galeri"); return { success: true, message: "Hapus!" };
  } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function createKategoriGaleri(formData: FormData) {
  try {
    await prisma.kategoriGaleri.create({ data: { nama: formData.get("nama") as string } });
    revalidatePath("/admin/galeri"); return { success: true, message: "Kategori dibuat!" };
  } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function updateKategoriGaleri(id: number, formData: FormData) {
  try {
    await prisma.kategoriGaleri.update({ where: { id }, data: { nama: formData.get("nama") as string } });
    revalidatePath("/admin/galeri"); return { success: true, message: "Update!" };
  } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function deleteKategoriGaleri(id: number) {
  try {
    await prisma.kategoriGaleri.delete({ where: { id } });
    revalidatePath("/admin/galeri"); return { success: true, message: "Hapus!" };
  } catch (error) { return { success: false, message: "Gagal." }; }
}

/* ======================================================
   9. LAINNYA
====================================================== */

export async function updateIdCardDesign(id: number, designUrl: string | null) {
  try { await prisma.pengurus.update({ where: { id }, data: { idCardDesign: designUrl } }); revalidatePath("/admin/idcard"); return { success: true, message: "Desain disimpan" }; } catch (e) { return { success: false, message: "Gagal" }; }
}

export async function saveIdCardBackground(imageUrl: string | null) {
  try { await prisma.appConfig.upsert({ where: { id: 1 }, update: { idCardBackImage: imageUrl }, create: { id: 1, idCardBackImage: imageUrl } }); revalidatePath("/admin/idcard"); return { success: true, message: "BG disimpan" }; } catch (e) { return { success: false, message: "Gagal" }; }
}

export async function trackVisitor(ip: string, userAgent: string, path: string) {
  try { if (!path.startsWith('/admin')) await (prisma as any).visitor.create({ data: { ip, userAgent, path } }); } catch (error) {}
}

export async function createDivisi(formData: FormData) {
  try { await prisma.divisi.create({ data: { nama: formData.get("nama") as string } }); revalidatePath("/admin/pengurus"); return { success: true, message: "Divisi dibuat!" }; } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function updateDivisi(id: number, formData: FormData) {
  try { await prisma.divisi.update({ where: { id }, data: { nama: formData.get("nama") as string } }); revalidatePath("/admin/pengurus"); return { success: true, message: "Divisi diperbarui" }; } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function deleteDivisi(id: number) {
  try { await prisma.divisi.delete({ where: { id } }); revalidatePath("/admin/pengurus"); return { success: true, message: "Divisi dihapus" }; } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function createJabatan(formData: FormData) {
  try { await prisma.jabatan.create({ data: { nama: formData.get("nama") as string, divisiId: Number(formData.get("divisiId")) } }); revalidatePath("/admin/pengurus"); return { success: true, message: "Jabatan dibuat" }; } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function updateJabatan(id: number, formData: FormData) {
  try { await prisma.jabatan.update({ where: { id }, data: { nama: formData.get("nama") as string } }); revalidatePath("/admin/pengurus"); return { success: true, message: "Jabatan diperbarui" }; } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function deleteJabatan(id: number) {
  try { await prisma.jabatan.delete({ where: { id } }); revalidatePath("/admin/pengurus"); return { success: true, message: "Jabatan dihapus" }; } catch (error) { return { success: false, message: "Gagal." }; }
}

export async function updateStatusKehadiran(absensiId: number, status: any) {
  try { await prisma.absensi.update({ where: { id: absensiId }, data: { status } }); revalidatePath("/admin/absensi"); return { success: true, message: "Status diperbarui" }; } catch (error) { return { success: false, message: "Gagal." }; }
}
