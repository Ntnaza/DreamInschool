/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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
};

export default nextConfig;