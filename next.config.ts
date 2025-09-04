import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // For static hosting compatibility
  },
  turbopack: {
    root: process.cwd(), // Silence workspace root warning
  },
  // Uncomment the following for static export if using static hosting
  // output: 'export',
  // trailingSlash: true,
  // distDir: 'dist',
};

export default nextConfig;
