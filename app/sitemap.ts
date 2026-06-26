import { MetadataRoute } from 'next'
import { counties } from '@/lib/counties'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://californiaclaw.com'

  const countyRoutes = counties.map((county) => ({
    url: `${base}/${county.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...countyRoutes,
  ]
}
