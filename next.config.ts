import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["assets.aceternity.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "dfstudio-d420.kxcdn.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables linting during the build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during the build
  },
};

export default nextConfig;

