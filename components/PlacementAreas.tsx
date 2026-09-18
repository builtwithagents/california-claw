import Link from 'next/link'
import { counties } from '@/lib/counties'
import SectionHeading from '@/components/SectionHeading'

/**
 * Geo links for the placement guides. The business-placement articles rank on
 * "free claw machine in a <business type>" queries with no location attached,
 * so this hands both the reader and a crawler the route from the topic page to
 * the county page that actually serves them.
 */

export default function PlacementAreas() {
  return (
    <section className="section-padding bg-brand-cream">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          label="Where we place"
          title="Free placement across your county"
          lede="We place, service, and restock machines throughout the San Francisco Bay Area and San Diego."
          className="mb-8"
        />
        <ul className="flex flex-wrap gap-2">
          {counties.map((county) => (
            <li key={county.slug}>
              <Link
                href={`/${county.slug}`}
                className="inline-block bg-white border border-brand-navy/10 hover:border-brand-navy px-4 py-2 rounded-full text-sm font-semibold text-brand-navy transition-colors"
              >
                {county.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
