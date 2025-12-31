import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // serverComponentsExternalPackages should be here if needed
    serverComponentsExternalPackages: ['@prisma/client'],
  },
};

export default nextConfig;