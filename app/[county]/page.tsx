import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { counties, getCountyBySlug } from '@/lib/counties'
import SectionHeading from '@/components/SectionHeading'
import { getVenueGuide } from '@/lib/venueLinks'
import ContactSection from '@/components/ContactSection'
import RelatedGuides from '@/components/RelatedGuides'
import joyCatcher from '@/public/joy-catcher.jpg'
import machinePizzeria from '@/public/machine-pizzeria.jpg'
import machineLobbyPalms from '@/public/machine-lobby-palms.jpg'

/**
 * Machines we actually run, rotated by county so no two neighbouring county
 * pages lead with the same cabinet. Keyed off the county's index in `counties`
 * so the pick is stable across builds.
 */

const machinePhotos = [joyCatcher, machinePizzeria, machineLobbyPalms]

type Props = {
  params: Promise<{ county: string }>
}

export function generateStaticParams() {
  return counties.map((c) => ({ county: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { county: slug } = await params
  const county = getCountyBySlug(slug)
  if (!county) return {}

  return {
    title: `Free Claw Machines in ${county.name} — California Claw`,
    description: `Free claw machine placement across ${county.name}. ${county.tagline} We install, maintain, and restock at zero cost to your business.`,
    alternates: { canonical: `/${county.slug}` },
    openGraph: {
      title: `Free Claw Machines in ${county.name}`,
      description: county.description,
    },
  }
}

const benefits = [
  'Zero upfront cost or rental fees',
  'Professional installation included',
  'All repairs and maintenance handled',
  'Regular prize restocking on schedule',
  'Direct line to a real person, not a ticket queue',
  'No long-term contracts required',
]

export default async function CountyPage({ params }: Props) {
  const { county: slug } = await params
  const county = getCountyBySlug(slug)

  if (!county) notFound()

  // Counties we have real local photography for lead with it; the rest lead
  // with the machine itself, which beats a generic illustration either way.
  const heroPhoto = county.heroImage
  const machinePhoto =
    machinePhotos[counties.findIndex((c) => c.slug === county.slug) % machinePhotos.length]
  const clawInHero = !heroPhoto

  // Same region first, so a San Francisco Bay Area page links its neighbours.
  const otherCounties = [
    ...counties.filter((c) => c.slug !== county.slug && c.region === county.region),
    ...counties.filter((c) => c.slug !== county.slug && c.region !== county.region),
  ].slice(0, 6)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: county.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-brand-cream border-b border-brand-navy/10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="flex items-center justify-center gap-3 mb-6"><span className="h-0.5 w-7 bg-brand-gold" aria-hidden="true" /><span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy/50">Now serving {county.city}</span></p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-5 leading-[1.05]">
                Free Claw Machines in <span className="highlight-gold">{county.name}</span>
              </h1>
              <p className="text-lg text-brand-navy/70 mb-6 max-w-xl">{county.intro}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-gold px-8 py-3.5">
                  Request a Free Machine
                </a>
                <Link href="/rent-a-claw-machine" className="btn-outline px-8 py-3.5">
                  Rent for an Event
                </Link>
              </div>
            </div>
            <div className="relative max-w-md mx-auto lg:mx-0 w-full">
              <div
                className={`relative ${
                  clawInHero ? 'aspect-[3/4] max-w-[380px] mx-auto' : 'aspect-[4/3]'
                } w-full photo-frame`}
              >
                <Image
                  src={heroPhoto ?? machinePhoto}
                  alt={
                    county.heroAlt ??
                    `A California Claw machine stocked with plush prizes, ready for ${county.city}`
                  }
                  fill
                  priority
                  sizes={clawInHero ? '(min-width: 1024px) 380px, 90vw' : '(min-width: 1024px) 448px, 90vw'}
                  placeholder={heroPhoto ? undefined : 'blur'}
                  className="object-cover"
                />
              </div>
              {clawInHero && (
                <div className="absolute top-4 right-4 sticker bg-brand-gold/95 px-3.5 py-1.5 text-xs">
                  FREE!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Where we serve */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Where we serve"
            title={
              <>
                Placements across <span className="highlight-gold">{county.name}</span>
              </>
            }
            lede="We deliver, install, and service machines throughout the county — including these areas:"
            className="mb-8"
          />
          <div className="flex flex-wrap gap-3">
            {county.neighborhoods.map((n) => (
              <span
                key={n}
                className="inline-flex items-center gap-2 bg-brand-cream border border-brand-navy/10 px-4 py-2 rounded-full text-sm font-semibold text-brand-navy"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Local flavor + photo */}
      <section className="section-padding bg-brand-cream">
        <div className="relative max-w-7xl mx-auto">
          <div
            className={
              clawInHero
                ? 'max-w-2xl mx-auto text-center'
                : 'grid lg:grid-cols-2 gap-12 items-center'
            }
          >
            {/* The claw photo only appears here when the hero led with a
                county photo, so no page shows the same image twice. */}
            {!clawInHero && (
              <div className="order-2 lg:order-1 relative max-w-[420px] mx-auto lg:mx-0 w-full">
                <div className="photo-frame aspect-[3/4]">
                  <Image
                    src={machinePhoto}
                    alt={`A California Claw machine stocked with plush prizes, ready for ${county.city}`}
                    fill
                    sizes="(max-width: 1024px) 420px, 420px"
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 sticker bg-brand-gold/95 px-3.5 py-1.5 text-xs">
                  FREE!
                </div>
              </div>
            )}
            <div className="order-1 lg:order-2">
              <SectionHeading
                label="Local flavor"
                title={`Made for ${county.city} & beyond`}
                className="mb-5"
              />
              <p className="text-lg text-brand-navy/70 leading-relaxed mb-6">{county.localAngle}</p>
              <div className={`border-l-4 border-brand-gold pl-5 ${clawInHero ? 'text-left' : ''}`}>
                <p className="text-sm text-brand-navy/70">
                  Every machine comes stocked with fresh, high-quality plush and novelty prizes —
                  restocked on a schedule that matches your foot traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue types */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Perfect for"
            title={`${county.city} spots that shine with a claw machine`}
            className="mb-10"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {county.venues.map((venue) => {
              const guide = getVenueGuide(venue.title)
              const body = (
                <>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">
                    {venue.title}
                  </h3>
                  <p className="text-brand-navy/60 text-sm leading-relaxed">{venue.blurb}</p>
                </>
              )

              // Venue types we have a dedicated placement guide for become links.
              return guide ? (
                <Link
                  key={venue.title}
                  href={guide.href}
                  className="card-fun p-6 flex flex-col group"
                >
                  <div className="flex-1">{body}</div>
                  <span className="mt-4 pt-4 border-t border-brand-navy/5 inline-flex items-center gap-1.5 text-brand-navy font-semibold text-sm">
                    {guide.label}
                    <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ) : (
                <div key={venue.title} className="card-fun p-6">
                  {body}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="What's included"
            title={
              <>
                Everything included, <span className="highlight-gold">nothing to pay</span>
              </>
            }
            className="mb-10"
          />
          <ul className="grid sm:grid-cols-2 gap-x-10">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 py-4 border-b border-brand-navy/10"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-brand-navy/80">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="Good to know"
            title={`${county.city} claw machine questions`}
            className="mb-10"
          />
          <div className="space-y-4">
            {county.faqs.map((faq) => (
              <div key={faq.q} className="card-fun p-6">
                <h3 className="font-display text-lg font-bold text-brand-navy mb-2">{faq.q}</h3>
                <p className="text-brand-navy/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides for business owners */}
      <RelatedGuides
        audience="business"
        eyebrow="For business owners"
        heading="How free placement works"
      />

      {/* Other service areas */}
      {otherCounties.length > 0 && (
        <section className="section-padding bg-brand-cream">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              label="Nearby"
              title={`We also serve ${
                county.region === 'the San Francisco Bay Area'
                  ? 'the rest of the San Francisco Bay Area'
                  : 'these nearby areas'
              }`}
              className="mb-8"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherCounties.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="card-fun bg-white p-5 flex items-center justify-between gap-3 group"
                >
                  <span className="font-semibold text-brand-navy text-sm">{c.name}</span>
                </Link>
              ))}
            </div>
            <p className="text-center text-brand-navy/60 text-sm mt-8">
              Renting for a one-time event instead?{' '}
              <Link
                href="/rent-a-claw-machine"
                className="font-semibold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-4"
              >
                See rental pricing and packages
              </Link>
              .
            </p>
          </div>
        </section>
      )}

      {/* CTA / Contact */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Local contact strip */}
      <section className="bg-brand-navy py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
          <div className="flex items-center gap-3 text-white">
            <a href="tel:+15105064159" className="hover:text-brand-gold transition-colors">
              (510) 506-4159
            </a>
          </div>
          <div className="flex items-center gap-3 text-white">
            <a href="mailto:team@californiaclaw.com" className="hover:text-brand-gold transition-colors">
              team@californiaclaw.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
