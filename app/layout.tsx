import type { Metadata } from "next";
// 1. Import Font Plus Jakarta Sans
import { Plus_Jakarta_Sans } from "next/font/google"; 
import "./globals.css";
import MouseFollower from "@/components/MouseFollower";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
// 2. IMPORT INI (YANG BARU)
import NextTopLoader from 'nextjs-toploader'; 

// 3. Konfigurasi Font
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta', // Kita bikin variabel CSS
});

export const metadata: Metadata = {
  title: "OSIS & MPK - SMK Nurul Islam",
  description: "Website Resmi Organisasi Siswa Intra Sekolah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      {/* 4. Terapkan Font di Body */}
      <body className={`${jakarta.className} antialiased selection:bg-blue-500 selection:text-white`}>
        
        {/* 5. PASANG KOMPONEN LOADING BAR DISINI */}
        <NextTopLoader 
          color="#2563eb" // Warna Biru Orbit
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false} // Matikan spinner biar bersih
          easing="ease"
          speed={200}
          zIndex={99999}
        />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <MouseFollower />
        </ThemeProvider>
      </body>
    </html>
  );
}