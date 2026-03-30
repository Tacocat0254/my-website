import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Keep this for static export
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [], // Leave as-is or configure if needed
  },
  trailingSlash: true, // Optional, you can keep or remove this
};

export default nextConfig;
