"use server";

import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "rahasia-osis-mpk-2026-sangat-kuat"
);

export async function loginAction(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return { success: false, message: "ID dan Password wajib diisi!" };
  }

  try {
    const user = await prisma.user.findUnique({
      where: { username: username },
      include: { pengurus: true }
    });

    if (!user) {
      return { success: false, message: "ID atau Password salah!" };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { success: false, message: "ID atau Password salah!" };
    }

    // Cari Level Akses dari tabel Jabatan berdasarkan nama jabatan pengurus
    const jabatanData = await prisma.jabatan.findFirst({
      where: { nama: user.pengurus?.jabatan || "" }
    });

    const aksesLevel = jabatanData?.aksesLevel || "UMUM";

    // Buat JWT Token dengan data jabatan & aksesLevel
    const token = await new SignJWT({ 
      username: user.username, 
      role: user.role,
      jabatan: user.pengurus?.jabatan || "Umum",
      divisi: user.pengurus?.divisi || "Umum",
      aksesLevel: aksesLevel // Simpan level akses ke token
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d")
      .sign(JWT_SECRET);

    const cookieStore = await cookies();

    // Simpan token di cookie yang aman
    cookieStore.set("session_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 Hari
      path: "/",
      sameSite: "lax"
    });
    
    // Cookie role tetap ada untuk kebutuhan UI ringan, tapi bukan penentu akses (Satpam asli ada di JWT)
    cookieStore.set("session_role", user.role, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, 
      path: "/",
    });

    return { success: true, message: "Login Berhasil! Mengalihkan..." };

  } catch (error) {
    console.error("Login Error (Detail):", error); 
    return { success: false, message: "Terjadi kesalahan sistem. Cek Terminal." };
  }
}

export async function logoutAction() {
  const cookieStore = await cookies(); 
  cookieStore.delete("session_token");
  cookieStore.delete("session_role");
  redirect("/login");
}