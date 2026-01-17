"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { StatusProker } from "@prisma/client";
/* ======================================================
   HELPER
====================================================== */


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
  const judul = formData.get("judul") as string;
  const konten = formData.get("konten") as string;
  const kategori = (formData.get("kategori") as string) || "Umum";
  const gambar = formData.get("gambar") as string | null;

  if (!judul || !konten) {
    return { success: false, message: "Judul & Konten wajib diisi!" };
  }

  const slug = `${slugify(judul)}-${Date.now()}`;

  // === PERBAIKAN DI SINI ===
  // 1. Kita cari dulu user (Admin) yang ada di database
  // Nanti kalau sudah ada login, kita ambil dari session user yang login
  const adminUser = await prisma.user.findFirst();

  if (!adminUser) {
    return { success: false, message: "Error: Belum ada User/Admin di database!" };
  }

  try {
    await prisma.berita.create({
      data: {
        judul,
        slug,
        konten,
        kategori,
        gambar: gambar || null,
        
        // 2. Hubungkan ke ID User yang ditemukan tadi
        penulisId: adminUser.id, 
        
        // Jangan pakai 'penulis: "Admin OSIS"', itu salah.
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
   4. MANAJEMEN PROGRAM KERJA
====================================================== */

export async function saveProker(formData: FormData) {
  const idRaw = formData.get("id");
  const nama = formData.get("title") as string;
  const deskripsi = formData.get("description") as string;
  const divisi = formData.get("sekbid") as string;
  const prioritas = formData.get("priority") as string;
  const anggaran = Number(formData.get("budget"));
  const progress = Number(formData.get("progress"));
  const startDate = formData.get("startDate") ? new Date(formData.get("startDate") as string) : null;
  const endDate = formData.get("endDate") ? new Date(formData.get("endDate") as string) : null;
  const picName = formData.get("pic") as string; // Sederhana dulu, simpan nama PIC sbg text sementara/lokasi

  // Mapping Status Logic
  let status: StatusProker = "TODO";
  if (progress > 0 && progress < 100) status = "IN_PROGRESS";
  if (progress === 100) status = "DONE";

  try {
    const dataToSave = {
      nama,
      deskripsi,
      divisi,
      prioritas,
      anggaran,
      progress,
      status,
      startDate,
      deadline: endDate,
      lokasi: picName, // Kita pinjam kolom lokasi buat simpan nama PIC sementara
    };

    if (idRaw) {
      // UPDATE
      await prisma.programKerja.update({
        where: { id: Number(idRaw) },
        data: dataToSave,
      });
    } else {
      // CREATE
      await prisma.programKerja.create({
        data: dataToSave,
      });
    }

    revalidatePath("/admin/proker");
    return { success: true, message: "Proker berhasil disimpan! 🚀" };
  } catch (error) {
    console.error("SAVE PROKER ERROR:", error);
    return { success: false, message: "Gagal menyimpan proker." };
  }
}

export async function deleteProker(id: number) {
  try {
    await prisma.programKerja.delete({ where: { id } });
    revalidatePath("/admin/proker");
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
   7. SISTEM ABSENSI (SCANNER)
====================================================== */

export async function scanAbsensi(nis: string) {
  if (!nis) return { success: false, message: "QR Code kosong!" };

  try {
    // 1. Cari Pengurus berdasarkan NIS
    const pengurus = await prisma.pengurus.findUnique({
      where: { nis: nis },
    });

    if (!pengurus) {
      return { success: false, message: "❌ QR Code Tidak Terdaftar!" };
    }

    if (pengurus.status !== "AKTIF") {
      return { success: false, message: "⚠️ Anggota Tidak Aktif/Alumni" };
    }

    // 2. Cek apakah sudah absen hari ini? (Opsional: Cegah spam scan)
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    const existingLog = await prisma.absensi.findFirst({
      where: {
        pengurusId: pengurus.id,
        tanggal: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
    });

    if (existingLog) {
      // Kalau sudah absen, kita tetap return success tapi kasih info "Sudah Absen"
      // Biar UI tetap menampilkan profilnya, tapi statusnya beda.
      return { 
        success: true, 
        message: "Kamu sudah absen hari ini! 👌", 
        data: {
           name: pengurus.nama,
           role: pengurus.jabatan,
           image: pengurus.fotoUrl,
           status: "DUPLICATE" 
        }
      };
    }

    // 3. Simpan ke Tabel Absensi
    await prisma.absensi.create({
      data: {
        pengurusId: pengurus.id,
        kegiatan: "Absensi Harian", // Sementara hardcode dulu
        status: "HADIR",
        tanggal: new Date(),
      },
    });

    // 4. Return Data Pengurus ke Frontend
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
    // A. Catat PENGELUARAN di Kas Umum
    await prisma.keuangan.create({
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
    await prisma.programKerja.create({
      data: {
        nama: namaEvent,
        anggaran: budget,
        anggaranTerpakai: 0,
        status: "IN_PROGRESS", // Anggap event sedang jalan
        divisi: "Kepanitiaan", // Default divisi
        deadline: new Date(dateStr), // Sementara pakai tgl transaksi
      }
    });

    revalidatePath("/admin/keuangan");
    return { success: true, message: "Anggaran Event berhasil dibuka! 🎉" };
  } catch (error) {
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
    // A. Simpan Transaksi (Linked ke ProkerID)
    await prisma.keuangan.create({
      data: {
        judul,
        nominal,
        tipe: "PENGELUARAN",
        kategori: "Pengeluaran Event",
        tanggal: new Date(dateStr),
        prokerId: eventId, // Link ke Event
      },
    });

    // B. Update 'anggaranTerpakai' di tabel Proker
    await prisma.programKerja.update({
      where: { id: eventId },
      data: {
        anggaranTerpakai: { increment: nominal } // Tambah otomatis
      }
    });

    revalidatePath("/admin/keuangan");
    return { success: true, message: "Pengeluaran event dicatat! 🧾" };
  } catch (error) {
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
    // Ambil data barang dulu buat tau siapa peminjam terakhir
    const barang = await prisma.inventaris.findUnique({ where: { id } });
    if (!barang || !barang.peminjam) return { success: false, message: "Data tidak valid." };

    // A. Simpan ke Riwayat
    await prisma.riwayatAset.create({
      data: {
        inventarisId: id,
        peminjam: barang.peminjam,
        tglKeluar: barang.tglPinjam || new Date(),
        tglKembali: new Date(),
        kondisiKembali: kondisi
      }
    });

    // B. Reset Status Barang
    await prisma.inventaris.update({
      where: { id },
      data: {
        status: kondisi === "Rusak" ? "MAINTENANCE" : "AVAILABLE",
        kondisi: kondisi,
        peminjam: null,
        tglPinjam: null
      }
    });

    revalidatePath("/admin/inventaris");
    return { success: true, message: "Barang sudah dikembalikan! ✅" };
  } catch (error) {
    return { success: false, message: "Gagal memproses pengembalian." };
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