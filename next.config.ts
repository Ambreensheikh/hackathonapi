import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        // This will match any image path from the domain
      },
    ],
  },
  
  
  /* config options here */
}

export default nextConfig;

