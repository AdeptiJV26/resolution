import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    // We cast to 'any' to bypass the strict "position only" type check
    buildActivity: false,
  } as any,
  experimental: {
    vercelToolbar: false,
  } as any,
};

export default nextConfig;