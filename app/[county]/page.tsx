import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, CheckCircle2, Phone, Mail } from 'lucide-react'
import { counties, getCountyBySlug } from '@/lib/counties'
import CountyScene from '@/components/CountyScene'
import ContactSection from '@/components/ContactSection'
import joyCatcher from '@/public/joy-catcher.jpg'

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
  '24/7 customer support',
  'No long-term contracts required',
]

export default async function CountyPage({ params }: Props) {
  const { county: slug } = await params
  const county = getCountyBySlug(slug)

  if (!county) notFound()

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
      <section className="relative bg-brand-cream overflow-hidden">
        <div className="absolute inset-0 bg-confetti opacity-[0.1] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="sticker text-sm px-4 py-1.5 mb-6 -rotate-1">
                <MapPin className="w-4 h-4 text-brand-gold" />
                Now serving {county.city}
              </div>
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
            <div className="max-w-md mx-auto lg:mx-0 w-full animate-float">
              <CountyScene scene={county.scene} />
            </div>
          </div>
        </div>
      </section>

      {/* Where we serve */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">WHERE WE SERVE</div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
            Placements across <span className="highlight-gold">{county.name}</span>
          </h2>
          <p className="text-lg text-brand-navy/60 max-w-2xl mx-auto mb-8">
            We deliver, install, and service machines throughout the county — including these areas:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {county.neighborhoods.map((n) => (
              <span
                key={n}
                className="inline-flex items-center gap-2 bg-brand-cream border-2 border-brand-navy/10 px-4 py-2 rounded-full text-sm font-semibold text-brand-navy"
              >
                <MapPin className="w-4 h-4 text-brand-gold" />
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Local flavor + photo */}
      <section className="section-padding bg-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-confetti opacity-[0.08] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative max-w-[420px] mx-auto lg:mx-0 w-full animate-float">
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border-4 border-brand-navy shadow-[10px_10px_0_rgba(0,50,98,0.12)]">
                <Image
                  src={joyCatcher}
                  alt={`A California Claw machine stocked with plush prizes, ready for ${county.city}`}
                  fill
                  sizes="(max-width: 1024px) 420px, 420px"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-5 sticker bg-brand-gold px-4 py-2 text-sm rotate-6">
                FREE!
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="sticker text-xs px-4 py-1.5 mb-4 -rotate-1">LOCAL FLAVOR</div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy mb-5 leading-tight">
                Made for {county.city} &amp; beyond
              </h2>
              <p className="text-lg text-brand-navy/70 leading-relaxed mb-6">{county.localAngle}</p>
              <div className="flex items-center gap-3 bg-white border-2 border-brand-navy/10 rounded-2xl p-4">
                <span className="text-2xl">🎁</span>
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
          <div className="text-center mb-14">
            <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">PERFECT FOR</div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
              {county.city} spots that shine with a claw machine
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {county.venues.map((venue) => (
              <div key={venue.title} className="card-fun p-6">
                <div className="text-4xl mb-4">{venue.emoji}</div>
                <h3 className="font-display text-lg font-bold text-brand-navy mb-2">{venue.title}</h3>
                <p className="text-brand-navy/60 text-sm leading-relaxed">{venue.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy text-center mb-12">
            Everything included, <span className="highlight-gold">nothing to pay</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="card-fun flex items-start gap-3 p-5 bg-white">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-brand-navy/80">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="sticker text-xs px-4 py-1.5 mb-4 -rotate-1">GOOD TO KNOW</div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">
              {county.city} claw machine questions
            </h2>
          </div>
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

      {/* CTA / Contact */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Local contact strip */}
      <section className="bg-brand-navy py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
          <div className="flex items-center gap-3 text-white">
            <Phone className="w-5 h-5 text-brand-gold" />
            <a href="tel:+15105064159" className="hover:text-brand-gold transition-colors">
              (510) 506-4159
            </a>
          </div>
          <div className="flex items-center gap-3 text-white">
            <Mail className="w-5 h-5 text-brand-gold" />
            <a href="mailto:team@californiaclaw.com" className="hover:text-brand-gold transition-colors">
              team@californiaclaw.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
