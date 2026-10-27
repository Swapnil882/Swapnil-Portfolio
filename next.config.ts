import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: "/portfolio/:path*",
        destination: "/:path*",
      },
      {
        source: "/profile/:path*",
        destination: "/:path*",
      },
      {
        source: "/images/:path*",
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;
