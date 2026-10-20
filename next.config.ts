import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    // The whole stylesheet is ~8 KB, so inline it instead of a blocking request.
    inlineCss: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // Steps between 384 and 640, so phone-sized posters and photos aren't
    // served at the next size up.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 384, 420, 480, 540],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/ad-assets/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/blog/you-dont-need-to-buy-a-claw-machine',
        destination: '/blog/free-claw-machine-vs-buying-vs-renting',
        permanent: true,
      },
      {
        source: '/blog/claw-machine-in-your-laundromat',
        destination: '/blog/free-claw-machine-in-your-laundromat',
        permanent: true,
      },
      {
        source: '/blog/claw-machine-for-your-restaurant',
        destination: '/blog/free-claw-machine-for-your-restaurant',
        permanent: true,
      },
      {
        source: '/blog/claw-machine-for-your-boba-shop',
        destination: '/blog/free-claw-machine-for-your-boba-shop',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
