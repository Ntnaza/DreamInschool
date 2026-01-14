"use server";

import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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

    if (!user || user.password !== password) {
      return { success: false, message: "ID atau Password salah!" };
    }

    // === PERBAIKAN DI SINI (TAMBAH AWAIT) ===
    // Di Next.js terbaru, cookies() itu async (harus ditunggu)
    const cookieStore = await cookies();

    cookieStore.set("session_user", user.username, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 Hari
      path: "/",
    });
    
    cookieStore.set("session_role", user.role, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, 
      path: "/",
    });
    // ========================================

    return { success: true, message: "Login Berhasil! Mengalihkan..." };

  } catch (error) {
    // Ini biar kita tau error aslinya apa di terminal
    console.error("Login Error (Detail):", error); 
    return { success: false, message: "Terjadi kesalahan sistem. Cek Terminal." };
  }
}

export async function logoutAction() {
  const cookieStore = await cookies(); // Tambah await juga di sini
  cookieStore.delete("session_user");
  cookieStore.delete("session_role");
  redirect("/login");
}