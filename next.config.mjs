/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // <--- MEMBUAT HASIL BUILD SUPER KECIL
  experimental: {
    serverActions: {
      bodySizeLimit: '200mb',
    },
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
  // Optimasi tambahan agar folder build tidak membengkak
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;