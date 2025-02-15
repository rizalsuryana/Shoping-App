import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true, // Bypass ESLint saat build
  }
};

export default nextConfig;
