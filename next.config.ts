import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
