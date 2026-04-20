import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "rahasia-osis-mpk-2026-sangat-kuat"
);

// Tentukan hak akses per rute
const ACCESS_MAP: Record<string, string[]> = {
  '/admin/berita': ['sekretaris', 'ketua umum', 'admin'],
  '/admin/proker': ['ketua', 'sekretaris', 'divisi', 'admin'],
  '/admin/galeri': ['ketua', 'sekretaris', 'divisi', 'admin'],
  '/admin/pengurus': ['ketua umum', 'sekretaris', 'admin'],
  '/admin/idcard': ['sekretaris', 'admin'],
  '/admin/absensi': ['sekretaris', 'ketua umum', 'admin'],
  '/admin/absensi/laporan': ['ALL'], // Semua boleh lihat laporan
  '/admin/surat': ['sekretaris', 'ketua umum', 'ketua mpk', 'admin'],
  '/admin/kas': ['bendahara', 'ketua umum', 'ketua mpk', 'pembina', 'admin'],
  '/admin/inventaris': ['bendahara', 'ketua umum', 'admin'],
  '/admin/settings': ['admin'], // Hanya Super Admin
  '/admin/aspirasi': ['mpk', 'ketua umum', 'pembina', 'admin'],
};

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('session_token')?.value;
  const { pathname } = request.nextUrl;
  
  const isLoginPage = pathname === '/login';
  const isAdminPage = pathname.startsWith('/admin');

  let verifiedToken: any = null;
  if (token) {
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      verifiedToken = payload;
    } catch (error) {
      console.error("JWT Verification failed:", error);
    }
  }

  // 1. CEK OTENTIKASI (Sudah Login?)
  if (isAdminPage && !verifiedToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isLoginPage && verifiedToken) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  // 2. CEK OTORISASI (Boleh masuk ruangan ini?)
  if (isAdminPage && verifiedToken) {
    // Jika Super Admin (Role: ADMIN), bypass semua cek
    if (verifiedToken.role === 'ADMIN') return NextResponse.next();

    const userJabatan = (verifiedToken.jabatan as string || "").toLowerCase();
    
    // Cari apakah path ini ada di daftar proteksi
    for (const [route, allowedRoles] of Object.entries(ACCESS_MAP)) {
      if (pathname.startsWith(route)) {
        if (allowedRoles.includes('ALL')) continue;

        const isAllowed = allowedRoles.some(role => {
          const r = role.toLowerCase();
          // Logika presisi yang sama dengan sidebar
          if (r === "ketua umum" && !userJabatan.includes("umum")) return false;
          if (r === "ketua mpk" && !userJabatan.includes("mpk")) return false;
          if (r === "ketua divisi" && !userJabatan.includes("divisi")) return false;
          return userJabatan.includes(r);
        });

        if (!isAllowed) {
          // JIKA TIDAK BOLEH: Banting ke dashboard
          return NextResponse.redirect(new URL('/admin?error=unauthorized', request.url));
        }
      }
    }
  }

  return NextResponse.next();
}

// Tentukan halaman mana saja yang dijaga Satpam
export const config = {
  matcher: ['/admin/:path*', '/login'],
}