import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["image.daisyui.com", "fakestoreapi.com"],
  },
  eslint: {
    // Disables ESLint during development and production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
