import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Cek apakah user punya "tiket" login (cookie)
  const isLoggedIn = request.cookies.has('session_user');
  
  // Cek halaman yang sedang diakses
  const isLoginPage = request.nextUrl.pathname === '/login';
  
  // PERBAIKAN: Gunakan .startsWith (Huruf besar 'W')
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin');

  // SKENARIO 1: Belum Login, tapi nekat masuk Admin -> Tendang ke Login
  if (isAdminPage && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // SKENARIO 2: Sudah Login, tapi mau buka halaman Login lagi -> Lempar ke Admin
  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

// Tentukan halaman mana saja yang dijaga Satpam
export const config = {
  matcher: ['/admin/:path*', '/login'],
}