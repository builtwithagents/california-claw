import { counties } from '@/lib/counties'
import SectionHeading from '@/components/SectionHeading'
import TagList from '@/components/TagList'

/**
 * Geo links for the placement guides. The business-placement articles rank on
 * "free claw machine in a <business type>" queries with no location attached,
 * so this hands both the reader and a crawler the route from the topic page to
 * the county page that actually serves them.
 */

export default function PlacementAreas() {
  return (
    <section className="section-padding bg-brand-gold">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-start">
        <SectionHeading
          title="Free placement across your county."
          lede={
            <span className="text-brand-navy/80">
              We place, service, and restock machines throughout the San Francisco Bay Area
              and San Diego.
            </span>
          }
        />
        <TagList
          tone="gold"
          items={counties.map((c) => ({ label: c.name, href: `/${c.slug}` }))}
          columns="sm:columns-2"
        />
      </div>
    </section>
  )
}
