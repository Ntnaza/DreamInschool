import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import ProfileClient from "./ProfileClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil Saya - OSIS MPK Admin",
};

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "rahasia-osis-mpk-2026-sangat-kuat"
);

async function getMe() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: { username: payload.username as string },
      include: {
        pengurus: true
      }
    });
    return user;
  } catch (error) {
    return null;
  }
}

export default async function ProfilePage() {
  const user = await getMe();

  if (!user || !user.pengurus) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Profil Tidak Ditemukan</h2>
        <p className="text-slate-500 mt-2">Pastikan akun Anda sudah terhubung dengan data pengurus.</p>
      </div>
    );
  }

  // Format tanggal agar aman dikirim ke Client Component
  const formattedPengurus = {
    ...user.pengurus,
    tglLahir: user.pengurus.tglLahir ? user.pengurus.tglLahir.toISOString().split('T')[0] : ""
  };

  return (
    <div className="relative h-[calc(100vh-140px)] flex flex-col font-sans">
      <ProfileClient data={formattedPengurus} />
    </div>
  );
}
