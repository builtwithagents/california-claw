import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { counties } from '@/lib/counties'

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
        <div className="text-center mb-8">
          <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">WHERE WE PLACE</div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy mb-3">
            Free placement across your county
          </h2>
          <p className="text-brand-navy/60">
            We place, service, and restock machines throughout the San Francisco Bay Area and San
            Diego. Find the details for your area:
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {counties.map((county) => (
            <Link
              key={county.slug}
              href={`/${county.slug}`}
              className="card-fun bg-white p-4 flex items-center gap-3 group"
            >
              <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span className="font-semibold text-brand-navy text-sm">
                Claw machines in {county.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
