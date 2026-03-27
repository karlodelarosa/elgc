import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'media.canva.com',
      },
      {
        protocol: 'https',
        hostname: 'media-public.canva.com',
      },
      {
        protocol: 'https',
        hostname: 'images.canva.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.canva.com',
      },
    ],
  },
};

export default nextConfig;
