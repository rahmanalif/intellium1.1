import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scalecraftit.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
