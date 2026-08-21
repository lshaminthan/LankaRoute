import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
    // Route these mock photos straight from Wikimedia to the browser instead of
    // proxying through Next's server-side optimizer: Wikimedia rate-limits/blocks
    // bulk server-to-server fetches from a single origin (429s), but tolerates
    // normal per-visitor hotlinking, which is what this produces instead.
    unoptimized: true,
  },
};

export default nextConfig;
