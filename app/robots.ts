import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/ad-assets/',
    },
    sitemap: 'https://californiaclaw.com/sitemap.xml',
    host: 'https://californiaclaw.com',
  }
}
