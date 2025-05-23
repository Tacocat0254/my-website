import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/my-website' : '', // Replace with your repo name
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [], // Add any remote image patterns if needed
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-website/' : '', // Add trailing slash
  trailingSlash: true, // Recommended for GitHub Pages
};

export default nextConfig;