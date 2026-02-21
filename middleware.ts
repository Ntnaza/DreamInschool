import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "rahasia-osis-mpk-2026-sangat-kuat"
);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('session_token')?.value;
  
  const isLoginPage = request.nextUrl.pathname === '/login';
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin');

  let verifiedToken = null;
  if (token) {
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      verifiedToken = payload;
    } catch (error) {
      console.error("JWT Verification failed:", error);
    }
  }

  // Jika mencoba masuk admin tapi token tidak valid
  if (isAdminPage && !verifiedToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Jika sudah login tapi mau buka login lagi
  if (isLoginPage && verifiedToken) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

// Tentukan halaman mana saja yang dijaga Satpam
export const config = {
  matcher: ['/admin/:path*', '/login'],
}