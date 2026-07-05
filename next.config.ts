import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF primero (mejor compresión), WebP como fallback
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Thumbnails de YouTube para el facade de videos
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
  },
};

export default nextConfig;
