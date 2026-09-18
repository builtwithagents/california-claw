import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { counties } from '@/lib/counties'
import SectionHeading from '@/components/SectionHeading'

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="section-padding bg-brand-cream">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Where we operate"
          title={
            <>
              Serving the <span className="highlight-gold">San Francisco Bay Area</span> &amp;
              San Diego
            </>
          }
          lede="If you're in one of these counties, we can have a machine at your door."
          className="mb-10"
        />

        {/* A plain index of counties — no pin icons, no cards. */}
        <ul className="border-t border-brand-navy/10">
          {counties.map((county) => (
            <li key={county.slug} className="border-b border-brand-navy/10">
              <Link
                href={`/${county.slug}`}
                className="group flex items-baseline gap-4 py-4 sm:py-5"
              >
                <span className="font-display text-lg sm:text-xl font-bold text-brand-navy group-hover:text-brand-gold-dark transition-colors">
                  {county.name}
                </span>
                <span className="hidden sm:block flex-1 border-b-2 border-dotted border-brand-navy/15" />
                <span className="text-sm text-brand-navy/50 ml-auto sm:ml-0">{county.city}</span>
                <ArrowUpRight className="w-4 h-4 text-brand-navy/30 group-hover:text-brand-gold-dark group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-brand-navy/60">
          Don&apos;t see your county?{' '}
          <a
            href="#contact"
            className="text-brand-navy font-bold underline decoration-brand-gold decoration-2 underline-offset-4 hover:decoration-4 transition-all"
          >
            Reach out anyway — we&apos;re expanding.
          </a>
        </p>
      </div>
    </section>
  )
}
