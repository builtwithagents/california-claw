import type { Metadata } from 'next'
import { Check, Gift, Truck, Sparkles, PartyPopper, MapPin } from 'lucide-react'
import RentalForm from '@/components/RentalForm'

export const metadata: Metadata = {
  title: 'Rent a Claw Machine in the San Francisco Bay Area & San Diego — California Claw',
  description:
    'Rent a claw machine for your party, wedding, or corporate event. We deliver and set up across San Francisco, Oakland, San Jose, the Peninsula, Marin, and San Diego. Unlimited plushie prizes, from $200.',
  alternates: { canonical: '/rent-a-claw-machine' },
  openGraph: {
    title: 'Rent a Claw Machine — San Francisco Bay Area & San Diego',
    description:
      'The hit of any party — a real claw machine stocked with unlimited plushie prizes. Delivery and setup included across the Bay Area and San Diego.',
  },
}

const deliveryAreas = [
  'San Francisco',
  'Oakland & Berkeley',
  'San Jose',
  'Santa Clara & Sunnyvale',
  'Palo Alto & Mountain View',
  'San Mateo & the Peninsula',
  'Marin County',
  'Walnut Creek & Concord',
  'San Diego',
  'La Jolla & Pacific Beach',
  'Carlsbad & Oceanside',
  'Chula Vista',
]

const faqs = [
  {
    q: 'Do you rent claw machines in San Francisco and the Bay Area?',
    a: 'Yes — we deliver claw machines throughout the San Francisco Bay Area, including San Francisco, Oakland, Berkeley, San Jose, the Peninsula, and Marin, plus the greater San Diego area. We handle delivery, setup, and pickup for every rental.',
  },
  {
    q: 'How much does it cost to rent a claw machine?',
    a: 'Our event packages are $200 for one hour, $350 for two hours, and $500 for three hours. Every package includes unlimited plushie prizes, delivery, and setup. Longer events, multiple machines, or a compact mini machine are available on a custom quote.',
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

const tiers = [
  {
    duration: '1 Hour',
    price: '200',
    blurb: 'Perfect for a quick crowd-pleaser',
    popular: false,
  },
  {
    duration: '2 Hours',
    price: '350',
    blurb: 'Our most-booked party package',
    popular: true,
  },
  {
    duration: '3 Hours',
    price: '500',
    blurb: 'Keep the fun going all evening',
    popular: false,
  },
]

const included = [
  { icon: Gift, title: 'Unlimited plushie prizes', description: 'Every play wins — we keep it stocked the whole time.' },
  { icon: Truck, title: 'Delivery & setup', description: 'We bring it, plug it in, and take it away after.' },
  { icon: Sparkles, title: 'Free-play mode', description: 'No coins needed. Guests just walk up and grab.' },
  { icon: PartyPopper, title: 'A guaranteed crowd-pleaser', description: 'The photo-op and centerpiece your event needs.' },
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

      {/* Pricing */}
      <section id="pricing" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">SIMPLE PRICING</div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mb-4">
              Pick your <span className="highlight-gold">party</span> package
            </h2>
            <p className="text-lg text-brand-navy/60 max-w-xl mx-auto">
              Flat pricing, no hidden fees. Every package includes unlimited prizes,
              delivery, and setup.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.duration}
                className={`card-fun p-8 text-center relative ${
                  tier.popular ? 'border-brand-navy shadow-[6px_6px_0_#FDB515]' : ''
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full bg-brand-gold text-brand-navy border-2 border-brand-navy whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                <p className="font-display text-lg font-bold text-brand-navy mb-2">{tier.duration}</p>
                <div className="mb-3">
                  <span className="font-display text-5xl font-extrabold text-brand-navy">${tier.price}</span>
                </div>
                <p className="text-brand-navy/60 text-sm mb-6">{tier.blurb}</p>
                <a href="#book" className={`${tier.popular ? 'btn-gold' : 'btn-outline'} w-full px-6 py-3`}>
                  Book {tier.duration}
                </a>
              </div>
            ))}
          </div>

          {/* Custom / mini */}
          <div className="mt-6 max-w-4xl mx-auto card-fun p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
                Something bigger or smaller?
              </h3>
              <p className="text-brand-navy/60 text-sm">
                Events over 3 hours, multiple machines, or a compact mini machine for
                tight spaces — we&apos;ll put together a custom quote.
              </p>
            </div>
            <a href="#book" className="btn-outline px-6 py-3 flex-shrink-0">
              Get a Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-confetti opacity-[0.08] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14">
            <div className="sticker text-xs px-4 py-1.5 mb-4 -rotate-1">EVERY RENTAL INCLUDES</div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mb-4">
              Everything for one flat price
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {included.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="card-fun p-6">
                  <div className="bg-brand-gold/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-brand-navy" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-brand-navy/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Event types */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">GREAT FOR</div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mb-8">
            Perfect for any <span className="highlight-gold">occasion</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {eventTypes.map((type) => (
              <span
                key={type}
                className="inline-flex items-center gap-2 bg-brand-cream border-2 border-brand-navy/10 px-4 py-2 rounded-full text-sm font-semibold text-brand-navy"
              >
                <Check className="w-4 h-4 text-brand-gold" />
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Where we deliver */}
      <section className="section-padding bg-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-confetti opacity-[0.08] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
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
            {deliveryAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 bg-white border-2 border-brand-navy/10 px-4 py-2 rounded-full text-sm font-semibold text-brand-navy"
              >
                <MapPin className="w-4 h-4 text-brand-gold" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="sticker text-xs px-4 py-1.5 mb-4 -rotate-1">GOOD TO KNOW</div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy">
              Claw machine rental questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card-fun p-6">
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

            <RentalForm />
          </div>
        </div>
      </section>
    </>
  )
}
