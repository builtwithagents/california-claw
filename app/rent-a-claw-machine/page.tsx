import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { rentalCities } from '@/lib/rentalCities'
import { getOccasionHref } from '@/lib/occasionLinks'
import RentalIncluded from '@/components/RentalIncluded'
import RelatedGuides from '@/components/RelatedGuides'
import RequestForm from '@/components/RequestForm'
import SectionHeading from '@/components/SectionHeading'
import joyCatcher from '@/public/joy-catcher.jpg'
import eventWinners from '@/public/event-winners-plushies.jpg'

export const metadata: Metadata = {
  title: 'Rent a Claw Machine for Your Event | California Claw',
  description:
    'Rent a claw machine for your next party, wedding, or corporate event. Unlimited plushie prizes, delivery, and setup across the San Francisco Bay Area and San Diego.',
  alternates: { canonical: '/rent-a-claw-machine' },
  openGraph: {
    title: 'Rent a Claw Machine for Your Event',
    description:
      'The hit of any party — a real claw machine stocked with unlimited plushie prizes. Delivery and setup included.',
  },
}

const deliveryAreas: { label: string; href?: string }[] = [
  { label: 'San Francisco', href: '/rent-a-claw-machine/san-francisco' },
  { label: 'Oakland & Berkeley' },
  { label: 'San Jose' },
  { label: 'Santa Clara & Sunnyvale' },
  { label: 'Palo Alto & Mountain View' },
  { label: 'San Mateo & the Peninsula' },
  { label: 'Marin County' },
  { label: 'Walnut Creek & Concord' },
  { label: 'San Diego', href: '/rent-a-claw-machine/san-diego' },
  { label: 'La Jolla & Pacific Beach' },
  { label: 'Carlsbad & Oceanside' },
  { label: 'Chula Vista' },
]

const eventTypes = [
  'Birthday parties',
  'Weddings',
  'Corporate events',
  'Graduations',
  'Grand openings',
  'School & campus events',
  'Holiday parties',
  'Bar & bat mitzvahs',
]

const faqs = [
  {
    q: 'Where do you rent claw machines?',
    a: 'We deliver claw machines throughout the San Francisco Bay Area and the greater San Diego area. See our city pages for local details, or just ask — we handle delivery, setup, and pickup for every rental.',
  },
  {
    q: 'How much does it cost to rent a claw machine?',
    a: 'Every rental includes unlimited plushie prizes, delivery, and setup — no per-play or per-prize charges. Tell us your date, location, and event length, and we’ll send you a quote within 24 hours.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Weekend dates fill up fast, so we recommend booking two to three weeks ahead when you can. That said, reach out anytime — we do our best to accommodate last-minute events.',
  },
  {
    q: 'Do guests have to pay to play, and do prizes cost extra?',
    a: 'No. We set the machine to free-play, so your guests just walk up and grab. Unlimited plushie prizes are included — there are no per-play or per-prize charges.',
  },
  {
    q: 'What kind of space do I need?',
    a: 'A standard machine needs about a 3-by-3-foot footprint and a nearby power outlet. We set up indoors or outdoors (under cover), and our team handles the heavy lifting.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function RentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-brand-cream border-b border-brand-navy/10">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-14 text-center">
          <p className="flex items-center justify-center gap-3 mb-6"><span className="h-0.5 w-7 bg-brand-gold" aria-hidden="true" /><span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy/50">Rentals across the SF Bay Area &amp; San Diego</span></p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 leading-[1.05] mb-6 tracking-tight">
            Rent a claw machine
            <br />
            for your <span className="font-bold">event</span>.
          </h1>
          <p className="text-xl text-brand-navy/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            A real claw machine, stocked with unlimited plushie prizes, set to free-play.
            We deliver and set up across the San Francisco Bay Area and San Diego — you
            just enjoy the party.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="btn-gold px-8 py-4 text-lg">
              Book Your Event
            </a>
          </div>
        </div>

        {/* A real grab from a real booking */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <figure className="relative">
            <div className="photo-frame aspect-[16/10] sm:aspect-[16/9]">
              <Image
                src={eventWinners}
                alt="Three guests at an event holding plushies they won from a California Claw machine — two pink bunnies and a Pikachu"
                fill
                sizes="(max-width: 1024px) 100vw, 960px"
                placeholder="blur"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="absolute bottom-4 left-4 sm:left-6 sticker bg-brand-gold/95 px-3.5 py-1.5 text-xs">
              Free-play means everyone walks away with something
            </figcaption>
          </figure>
        </div>
      </section>

      {/* What's included (shared) */}
      <RentalIncluded />

      {/* Event types */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Great for"
            title={
              <>
                Perfect for any <span className="highlight-gold">occasion</span>
              </>
            }
            className="mb-8"
          />
          <div className="flex flex-wrap gap-3">
            {eventTypes.map((type) => {
              const href = getOccasionHref(type)
              const pill = (
                <>
                  {type}
                </>
              )
              return href ? (
                <Link
                  key={type}
                  href={href}
                  className="inline-flex items-center gap-2 bg-brand-cream border border-brand-navy/10 px-4 py-2 rounded-full text-sm font-semibold text-brand-navy hover:border-brand-navy/40 transition-colors"
                >
                  {pill}
                </Link>
              ) : (
                <span
                  key={type}
                  className="inline-flex items-center gap-2 bg-brand-cream border border-brand-navy/10 px-4 py-2 rounded-full text-sm font-semibold text-brand-navy"
                >
                  {pill}
                </span>
              )
            })}
          </div>
        </div>
      </section>

      {/* Planning guides */}
      <RelatedGuides limit={4} />

      {/* Cross-link: the other side of the business */}
      <section className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-brand-navy/60">
            Running a business rather than planning an event? We also place machines permanently at
            no cost —{' '}
            <Link
              href="/blog/free-claw-machine-for-your-business-how-it-works"
              className="font-semibold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-4"
            >
              see how free placement works
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Rentals by city */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-5xl mx-auto relative">
          <SectionHeading
            label="Rentals by city"
            title={
              <>
                Find your <span className="highlight-gold">city</span>
              </>
            }
            lede="Local delivery details and event ideas for your area."
            className="mb-10"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {rentalCities.map((c) => (
              <Link key={c.slug} href={`/rent-a-claw-machine/${c.slug}`} className="card-fun p-6 flex items-center gap-5 group">
                <div className="relative w-28 h-28 flex-shrink-0 rounded-2xl overflow-hidden ring-1 ring-brand-navy/10">
                  <Image
                    src={c.heroImage ?? joyCatcher}
                    alt={c.heroImage ? `${c.city}, California` : 'A California Claw machine stocked with plush prizes'}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
                    Rent in {c.city}
                  </h3>
                  <p className="text-brand-navy/60 text-sm mb-2">Claw machine rentals across {c.city}.</p>
                  <span className="inline-flex items-center gap-1 text-brand-navy font-semibold text-sm underline decoration-brand-gold decoration-2 underline-offset-4 group-hover:decoration-4 transition-all">
                    See {c.city} rentals
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Where we deliver */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Where we deliver"
            title={
              <>
                Rentals across the{' '}
                <span className="highlight-gold">San Francisco Bay Area</span> &amp; San Diego
              </>
            }
            lede="Free delivery, setup, and pickup throughout our service areas."
            className="mb-8"
          />
          <div className="flex flex-wrap gap-3">
            {deliveryAreas.map((area) =>
              area.href ? (
                <Link
                  key={area.label}
                  href={area.href}
                  className="inline-flex items-center gap-2 bg-brand-navy text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-brand-navy-light transition-colors"
                >
                  {area.label}
                </Link>
              ) : (
                <span
                  key={area.label}
                  className="inline-flex items-center gap-2 bg-brand-cream border border-brand-navy/10 px-4 py-2 rounded-full text-sm font-semibold text-brand-navy"
                >
                  {area.label}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="Good to know"
            title="Claw machine rental questions"
            className="mb-10"
          />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card-fun p-6 bg-white">
                <h3 className="font-display text-lg font-bold text-brand-navy mb-2">{faq.q}</h3>
                <p className="text-brand-navy/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section id="book" className="section-padding bg-brand-navy">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                tone="dark"
                label="Book now"
                title={
                  <>
                    Let&apos;s get your date{' '}
                    <span className="text-brand-gold">on the books</span>
                  </>
                }
                lede="Tell us your date and event details, and we'll confirm availability within 24 hours. Weekend dates fill up fast — reach out early."
                className="mb-8"
              />
              <ul className="space-y-3">
                {[
                  'Serving the San Francisco Bay Area & San Diego',
                  'Indoor or outdoor setups',
                  'Flexible timing to fit your schedule',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-white/80">
                    <span className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0">
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <RequestForm defaultType="event" />
          </div>
        </div>
      </section>
    </>
  )
}
