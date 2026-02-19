import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.polar.ltda",
      },
    ],
  },
};

export default nextConfig;
