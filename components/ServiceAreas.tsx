import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { regionGroups } from '@/lib/counties'

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="section-padding bg-brand-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy leading-[1.02] mb-12 max-w-2xl">
          Two regions. <span className="highlight-gold">Seven counties.</span>
        </h2>

        <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16">
          {regionGroups.map((region) => (
            <div key={region.name}>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy pb-3 border-b-4 border-brand-navy">
                {region.name}
              </h3>
              <ul>
                {region.counties.map((county) => (
                    <li key={county.slug} className="border-b border-brand-navy/15">
                      <Link
                        href={`/${county.slug}`}
                        className="group flex items-baseline gap-4 py-4"
                      >
                        <span className="font-display text-lg sm:text-xl font-bold text-brand-navy group-hover:text-brand-navy-light transition-colors">
                          {county.name}
                        </span>
                        <span className="text-sm text-brand-navy/55 ml-auto">{county.city}</span>
                        <ArrowUpRight className="w-4 h-4 text-brand-navy/60 group-hover:text-brand-navy group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-brand-navy/70">
          Somewhere else in California?{' '}
          <a
            href="/get-a-free-machine"
            className="text-brand-navy font-bold underline decoration-brand-gold decoration-2 underline-offset-4 hover:decoration-4 transition-all"
          >
            Ask anyway. We&apos;re expanding.
          </a>
        </p>
      </div>
    </section>
  )
}
