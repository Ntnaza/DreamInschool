import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // BAGIAN PENTING: Izinkan upload file sampai 10MB
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'source.unsplash.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;