import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import AdminLayoutClient from "./AdminLayoutClient";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "rahasia-osis-mpk-2026-sangat-kuat"
);

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const sidebarOpenCookie = cookieStore.get("sidebarOpen");
  
  // Ambil nilai dari cookie, default ke true jika tidak ada
  const initialSidebarOpen = sidebarOpenCookie 
    ? sidebarOpenCookie.value === "true" 
    : true;

  const token = cookieStore.get("session_token")?.value;
  let userPayload = null;
  if (token) {
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      userPayload = payload;
    } catch (e) {}
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar-init *::-webkit-scrollbar { display: none !important; }
        .hide-scrollbar-init * { scrollbar-width: none !important; -ms-overflow-style: none !important; }
      `}} />
      <AdminLayoutClient initialSidebarOpen={initialSidebarOpen} initialUser={userPayload}>
        {children}
      </AdminLayoutClient>
    </>
  );
}
