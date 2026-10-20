import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { counties, getCountyBySlug } from '@/lib/counties'
import SectionHeading from '@/components/SectionHeading'
import { getVenueGuide } from '@/lib/venueLinks'
import ContactSection from '@/components/ContactSection'
import RelatedGuides from '@/components/RelatedGuides'
import PageHero, { HeroLink } from '@/components/PageHero'
import FaqList from '@/components/FaqList'
import TagList from '@/components/TagList'
import LinkRows from '@/components/LinkRows'
import { clips, machinePhotos, pick } from '@/lib/media'

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
]

export default async function CountyPage({ params }: Props) {
  const { county: slug } = await params
  const county = getCountyBySlug(slug)

  if (!county) notFound()

  // Our own clip and photo, rotated by the county's index so neighbouring
  // county pages never lead with the same machine. Stable across builds.
  const index = counties.findIndex((c) => c.slug === county.slug)
  const clip = pick(clips, index)
  const photo = pick(machinePhotos, index)

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

      <PageHero
        title={
          <>
            Free claw machines in <span className="text-brand-gold">{county.name}</span>.
          </>
        }
        lede={county.intro}
        clip={clip}
        actions={
          <>
            <Link href="/get-a-free-machine" className="btn-gold px-8 py-4 text-lg">
              Request a free machine
              <ArrowRight className="w-5 h-5" />
            </Link>
            <HeroLink href="/rent-a-claw-machine">Or rent one for an event</HeroLink>
          </>
        }
      />

      {/* Where we serve */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-start">
          <SectionHeading
            title={`Placements across ${county.name}.`}
            lede="We deliver, install, and service machines throughout the county, including:"
          />
          <TagList items={county.neighborhoods} />
        </div>
      </section>

      {/* Local angle, next to one of our machines */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-center">
          <div className="max-w-xl">
            <SectionHeading title={`Made for ${county.city} and beyond.`} className="mb-6" />
            <p className="text-lg text-brand-navy/75 leading-relaxed mb-6">{county.localAngle}</p>
            <p className="border-l-4 border-brand-gold pl-5 text-brand-navy/70">
              Every machine comes stocked with fresh plush and novelty prizes, restocked on a
              schedule that matches your foot traffic.
            </p>
          </div>
          <div className="justify-self-center lg:justify-self-end w-full max-w-[360px] lg:mr-[10px]">
            <div className="photo-frame aspect-[3/4]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="360px"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Venue types */}
      <section className="section-padding bg-brand-navy-dark text-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            tone="dark"
            title={
              <>
                {county.city} spots that <span className="text-brand-gold">shine</span> with a
                claw machine.
              </>
            }
            className="mb-12"
          />
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
            {county.venues.map((venue) => {
              const guide = getVenueGuide(venue.title)
              return (
                <div key={venue.title} className="border-t-4 border-brand-gold pt-4 flex flex-col">
                  <dt className="font-display text-2xl font-bold mb-2">{venue.title}</dt>
                  <dd className="text-white/65 leading-relaxed flex-1">{venue.blurb}</dd>
                  {/* Venue types we have a dedicated placement guide for become links. */}
                  {guide && (
                    <dd className="mt-4">
                      <Link
                        href={guide.href}
                        className="group inline-flex items-center gap-1.5 font-semibold text-brand-gold"
                      >
                        {guide.label}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </dd>
                  )}
                </div>
              )
            })}
          </dl>
        </div>
      </section>

      {/* What's included, on gold */}
      <section className="section-padding bg-brand-gold">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-start">
          <SectionHeading title="Everything included. Nothing to pay." />
          <ul className="grid sm:grid-cols-2 gap-x-10 border-t-4 border-brand-navy">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-baseline gap-3 py-4 border-b-2 border-brand-navy/15 font-display text-lg font-bold text-brand-navy"
              >
                <span className="w-2.5 h-2.5 bg-brand-navy flex-shrink-0 translate-y-[-2px]" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-start">
          <SectionHeading title={`${county.city} claw machine questions.`} />
          <FaqList faqs={county.faqs} />
        </div>
      </section>

      {/* Guides for business owners */}
      <RelatedGuides audience="business" heading="How free placement works." tone="sky" />

      {/* Other service areas */}
      {otherCounties.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <SectionHeading
                title={`We also serve ${
                  county.region === 'the San Francisco Bay Area'
                    ? 'the rest of the San Francisco Bay Area'
                    : 'these nearby areas'
                }.`}
              />
              <p className="mt-6 text-brand-navy/70">
                Renting for a one-time event instead?{' '}
                <Link
                  href="/rent-a-claw-machine"
                  className="font-semibold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-4"
                >
                  See event rentals
                </Link>
                .
              </p>
            </div>
            <LinkRows
              rows={otherCounties.map((c) => ({ href: `/${c.slug}`, title: c.name, note: c.city }))}
              columns
            />
          </div>
        </section>
      )}

      {/* CTA / Contact */}
      <ContactSection />
    </>
  )
}
