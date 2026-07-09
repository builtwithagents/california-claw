import { MetadataRoute } from 'next'
import { counties } from '@/lib/counties'
import { rentalCities } from '@/lib/rentalCities'
import { posts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://californiaclaw.com'

  const countyRoutes = counties.map((county) => ({
    url: `${base}/${county.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const rentalCityRoutes = rentalCities.map((c) => ({
    url: `${base}/rent-a-claw-machine/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/rent-a-claw-machine`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...rentalCityRoutes,
    ...countyRoutes,
    ...postRoutes,
  ]
}
