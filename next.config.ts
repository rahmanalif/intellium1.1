import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scalecraftit.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'brainstation-23.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
