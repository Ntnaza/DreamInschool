import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; 
import "./globals.css";
import MouseFollower from "@/components/MouseFollower";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import ToastContainer from "@/components/Toast";
import NextTopLoader from 'nextjs-toploader'; 
import { headers } from "next/headers";
import { trackVisitor, getAllPeriode, getSelectedPeriodeId } from "@/lib/actions";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const config = await prisma.websiteConfig.findFirst();
    return {
      title: config?.namaOrganisasi ? `${config.namaOrganisasi} - SMK Nurul Islam` : "OSIS & MPK - SMK Nurul Islam",
      description: config?.deskripsi || "Website Resmi Organisasi Siswa Intra Sekolah",
      icons: {
        icon: config?.faviconUrl || "/favicon.ico",
      }
    };
  } catch (error) {
    return {
      title: "OSIS & MPK - SMK Nurul Islam",
      description: "Website Resmi Organisasi Siswa Intra Sekolah",
    };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for") || "127.0.0.1";
  const userAgent = headerList.get("user-agent") || "Unknown";
  trackVisitor(ip, userAgent, "/");

  // Ambil data periode untuk selector di Navbar
  const periodes = await getAllPeriode();
  const selectedPeriodeId = await getSelectedPeriodeId();

  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${jakarta.className} antialiased selection:bg-blue-500 selection:text-white`}>
        <NextTopLoader 
          color="#2563eb"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          zIndex={99999}
        />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar periodes={JSON.parse(JSON.stringify(periodes))} selectedPeriodeId={selectedPeriodeId} />
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <ToastContainer />
          <MouseFollower />
        </ThemeProvider>
      </body>
    </html>
  );
}
