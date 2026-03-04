import { cookies } from "next/headers";
import AdminLayoutClient from "./AdminLayoutClient";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const sidebarOpenCookie = cookieStore.get("sidebarOpen");
  
  // Ambil nilai dari cookie, default ke true jika tidak ada
  const initialSidebarOpen = sidebarOpenCookie 
    ? sidebarOpenCookie.value === "true" 
    : true;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar-init *::-webkit-scrollbar { display: none !important; }
        .hide-scrollbar-init * { scrollbar-width: none !important; -ms-overflow-style: none !important; }
      `}} />
      <AdminLayoutClient initialSidebarOpen={initialSidebarOpen}>
        {children}
      </AdminLayoutClient>
    </>
  );
}
