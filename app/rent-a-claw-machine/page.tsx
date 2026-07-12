import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Sparkles, MapPin, ArrowRight } from 'lucide-react'
import { rentalCities } from '@/lib/rentalCities'
import { getOccasionHref } from '@/lib/occasionLinks'
import CountyScene from '@/components/CountyScene'
import RentalPricing from '@/components/RentalPricing'
import RentalAddOns from '@/components/RentalAddOns'
import RentalIncluded from '@/components/RentalIncluded'
import RelatedGuides from '@/components/RelatedGuides'
import RequestForm from '@/components/RequestForm'

export const metadata: Metadata = {
  title: 'Rent a Claw Machine — Event Rental Prices & Packages | California Claw',
  description:
    'Rent a claw machine for your next party, wedding, or corporate event. Simple flat pricing from $200 with unlimited plushie prizes, delivery, and setup across the San Francisco Bay Area and San Diego.',
  alternates: { canonical: '/rent-a-claw-machine' },
  openGraph: {
    title: 'Rent a Claw Machine for Your Event',
    description:
      'The hit of any party — a real claw machine stocked with unlimited plushie prizes. Simple flat pricing, delivery and setup included.',
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
    a: 'Our event packages are $200 for one hour, $350 for two hours, $475 for three hours, $575 for four hours, and $700 for six hours. Every package includes unlimited plushie prizes, delivery, and setup — no per-play or per-prize charges. Events over six hours, multiple machines, or a compact mini machine are available on a custom quote.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Weekend dates fill up fast, so we recommend booking two to three weeks ahead when you can. That said, reach out anytime — we do our best to accommodate last-minute events.',
  },
  {
    q: 'Do guests have to pay to play, and do prizes cost extra?',
    a: 'No. We set the machine to free-play, so your guests just walk up and grab. Unlimited plushie prizes are included in the flat price — there are no per-play or per-prize charges.',
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
      <section className="relative bg-brand-cream overflow-hidden">
        <div className="absolute inset-0 bg-confetti opacity-[0.13] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-gold/20 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <div className="sticker text-sm px-4 py-1.5 mb-6 -rotate-1">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            Rentals across the SF Bay Area &amp; San Diego
          </div>
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
            <a href="#pricing" className="btn-outline px-8 py-4 text-lg">
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Pricing (shared) */}
      <RentalPricing />

      {/* Add-ons (shared) */}
      <RentalAddOns />

      {/* What's included (shared) */}
      <RentalIncluded />

      {/* Event types */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">GREAT FOR</div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mb-8">
            Perfect for any <span className="highlight-gold">occasion</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {eventTypes.map((type) => {
              const href = getOccasionHref(type)
              const pill = (
                <>
                  <Check className="w-4 h-4 text-brand-gold" />
                  {type}
                </>
              )
              return href ? (
                <Link
                  key={type}
                  href={href}
                  className="inline-flex items-center gap-2 bg-brand-cream border-2 border-brand-navy/10 px-4 py-2 rounded-full text-sm font-semibold text-brand-navy hover:border-brand-navy/40 transition-colors"
                >
                  {pill}
                </Link>
              ) : (
                <span
                  key={type}
                  className="inline-flex items-center gap-2 bg-brand-cream border-2 border-brand-navy/10 px-4 py-2 rounded-full text-sm font-semibold text-brand-navy"
                >
                  {pill}
                </span>
              )
            })}
          </div>
        </div>
      </section>

      {/* Planning guides */}
      <RelatedGuides />

      {/* Rentals by city */}
      <section className="section-padding bg-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-confetti opacity-[0.08] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="sticker text-xs px-4 py-1.5 mb-4 -rotate-1">RENTALS BY CITY</div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mb-4">
              Find your <span className="highlight-gold">city</span>
            </h2>
            <p className="text-lg text-brand-navy/60 max-w-xl mx-auto">
              Local delivery details, event ideas, and pricing for your area.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {rentalCities.map((c) => (
              <Link key={c.slug} href={`/rent-a-claw-machine/${c.slug}`} className="card-fun p-6 flex items-center gap-5 group">
                <div className="w-28 flex-shrink-0">
                  <CountyScene scene={c.scene} />
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
        <div className="max-w-5xl mx-auto text-center">
          <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">WHERE WE DELIVER</div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mb-4">
            Claw machine rentals across the{' '}
            <span className="highlight-gold">Bay Area</span> &amp; San Diego
          </h2>
          <p className="text-lg text-brand-navy/60 max-w-2xl mx-auto mb-8">
            Free delivery, setup, and pickup throughout our service areas. If you&apos;re near
            one of these cities, we can bring the fun to your event:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {deliveryAreas.map((area) =>
              area.href ? (
                <Link
                  key={area.label}
                  href={area.href}
                  className="inline-flex items-center gap-2 bg-brand-navy text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-brand-navy-light transition-colors"
                >
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  {area.label}
                </Link>
              ) : (
                <span
                  key={area.label}
                  className="inline-flex items-center gap-2 bg-brand-cream border-2 border-brand-navy/10 px-4 py-2 rounded-full text-sm font-semibold text-brand-navy"
                >
                  <MapPin className="w-4 h-4 text-brand-gold" />
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
          <div className="text-center mb-12">
            <div className="sticker text-xs px-4 py-1.5 mb-4 -rotate-1">GOOD TO KNOW</div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy">
              Claw machine rental questions
            </h2>
          </div>
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
      <section id="book" className="section-padding bg-brand-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#FDB515 1.5px, transparent 1.5px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="sticker text-xs px-4 py-1.5 mb-4 -rotate-1">BOOK NOW</div>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                Let&apos;s make your event{' '}
                <span className="text-brand-gold">unforgettable</span>
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Tell us your date and package, and we&apos;ll confirm availability within
                24 hours. Dates fill up fast on weekends — reach out early.
              </p>
              <ul className="space-y-3">
                {[
                  'Serving the San Francisco Bay Area & San Diego',
                  'Indoor or outdoor setups',
                  'Flexible timing to fit your schedule',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-white/80">
                    <span className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-brand-navy" />
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
