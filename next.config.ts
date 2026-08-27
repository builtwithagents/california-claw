import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
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
