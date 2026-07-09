export const counties = [
  {
    slug: 'san-francisco-county',
    name: 'San Francisco County',
    city: 'San Francisco',
    description: 'Serving cafes, co-working spaces, and university campuses across San Francisco.',
  },
  {
    slug: 'san-mateo-county',
    name: 'San Mateo County',
    city: 'San Mateo',
    description: 'Bringing arcade fun to restaurants and businesses throughout the Peninsula.',
  },
  {
    slug: 'san-jose-county',
    name: 'Santa Clara County',
    city: 'San Jose',
    description: 'Energizing tech campuses, food courts, and entertainment venues in Silicon Valley.',
  },
  {
    slug: 'marin-county',
    name: 'Marin County',
    city: 'San Rafael',
    description: 'Adding a touch of fun to Marin\'s boutique shops, restaurants, and campuses.',
  },
  {
    slug: 'oakland-county',
    name: 'Alameda County',
    city: 'Oakland',
    description: 'Serving Oakland, Berkeley, and surrounding East Bay communities.',
  },
  {
    slug: 'contra-costa-county',
    name: 'Contra Costa County',
    city: 'Martinez',
    description: 'Covering Walnut Creek, Concord, and communities throughout Contra Costa.',
  },
  {
    slug: 'san-diego-county',
    name: 'San Diego County',
    city: 'San Diego',
    description: 'Bringing the claw machine experience to San Diego\'s vibrant venue scene.',
  },
]

export type County = (typeof counties)[number]

export function getCountyBySlug(slug: string): County | undefined {
  return counties.find((c) => c.slug === slug)
}
