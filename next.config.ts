import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets a verification build run in a separate folder without clobbering a running `npm run dev`.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
