import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { counties } from '@/lib/counties'

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="section-padding bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="sticker text-xs px-4 py-1.5 mb-4 -rotate-1">WHERE WE OPERATE</div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mb-4">
            Serving the <span className="highlight-gold">San Francisco Bay Area</span> &amp; San Diego
          </h2>
          <p className="text-lg text-brand-navy/60 max-w-xl mx-auto">
            From the San Francisco Bay Area to San Diego — if you&apos;re in one of these counties,
            we can have a machine at your door.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {counties.map((county) => (
            <Link
              key={county.slug}
              href={`/${county.slug}`}
              className="group card-fun flex items-start gap-3 p-4"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-gold/20 group-hover:bg-brand-gold flex items-center justify-center flex-shrink-0 transition-colors">
                <MapPin className="w-4 h-4 text-brand-navy" />
              </div>
              <div>
                <div className="font-bold text-brand-navy text-sm">{county.name}</div>
                <div className="text-brand-navy/50 text-xs mt-0.5">{county.city}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-brand-navy/60 text-sm">
            Don&apos;t see your county?{' '}
            <a
              href="#contact"
              className="text-brand-navy font-bold underline decoration-brand-gold decoration-2 underline-offset-4 hover:decoration-4 transition-all"
            >
              Reach out anyway — we&apos;re expanding fast.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
