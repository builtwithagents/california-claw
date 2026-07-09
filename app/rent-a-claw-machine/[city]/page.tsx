import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, MapPin, ClipboardList, Truck, PartyPopper } from 'lucide-react'
import { rentalCities, getRentalCityBySlug } from '@/lib/rentalCities'
import CountyScene from '@/components/CountyScene'
import RentalPricing from '@/components/RentalPricing'
import RentalIncluded from '@/components/RentalIncluded'
import RentalForm from '@/components/RentalForm'

type Props = {
  params: Promise<{ city: string }>
}

export function generateStaticParams() {
  return rentalCities.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params
  const city = getRentalCityBySlug(slug)
  if (!city) return {}

  return {
    title: `Rent a Claw Machine in ${city.city} — California Claw`,
    description: city.metaDescription,
    alternates: { canonical: `/rent-a-claw-machine/${city.slug}` },
    openGraph: {
      title: `Rent a Claw Machine in ${city.city}`,
      description: city.metaDescription,
    },
  }
}

const steps = [
  { icon: ClipboardList, title: 'Book your date', description: 'Tell us your event date, package, and venue. We confirm availability within 24 hours.' },
  { icon: Truck, title: 'We deliver & set up', description: 'Our team brings the machine, sets it to free-play, and stocks it with prizes.' },
  { icon: PartyPopper, title: 'Enjoy the fun', description: 'Guests play all event long. When it wraps, we come back and pack it away.' },
]

export default async function RentalCityPage({ params }: Props) {
  const { city: slug } = await params
  const city = getRentalCityBySlug(slug)

  if (!city) notFound()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faqs.map((f) => ({
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
        <div className="absolute inset-0 bg-confetti opacity-[0.13] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-gold/20 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="sticker text-sm px-4 py-1.5 mb-6 -rotate-1">
                <MapPin className="w-4 h-4 text-brand-gold" />
                Claw machine rentals in {city.city}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-slate-900 leading-[1.05] mb-6 tracking-tight">
                Rent a claw machine
                <br />
                in <span className="font-bold">{city.city}</span>.
              </h1>
              <p className="text-lg text-brand-navy/70 leading-relaxed mb-8 max-w-xl">{city.heroSub}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#book" className="btn-gold px-8 py-4 text-lg">
                  Book Your Event
                </a>
                <a href="#pricing" className="btn-outline px-8 py-4 text-lg">
                  See Pricing
                </a>
              </div>
            </div>
            <div className="max-w-md mx-auto lg:mx-0 w-full animate-float">
              <CountyScene scene={city.scene} />
            </div>
          </div>
        </div>
      </section>

      {/* Local intro */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">{city.city.toUpperCase()} EVENTS</div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy mb-6">
            The hit of any <span className="highlight-gold">{city.city}</span> event
          </h2>
          <p className="text-lg text-brand-navy/70 leading-relaxed">{city.intro}</p>
        </div>
      </section>

      {/* Pricing (shared) */}
      <RentalPricing cityLabel={city.city} />

      {/* What's included (shared) */}
      <RentalIncluded />

      {/* Event types */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">GREAT FOR</div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy mb-8">
            {city.city} events we love
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {city.eventTypes.map((type) => (
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

      {/* How it works */}
      <section className="section-padding bg-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-confetti opacity-[0.08] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-14">
            <div className="sticker text-xs px-4 py-1.5 mb-4 -rotate-1">HOW IT WORKS</div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">
              Booked in three easy steps
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-3xl bg-white border-2 border-brand-navy flex items-center justify-center shadow-[5px_5px_0_rgba(0,50,98,0.12)]">
                      <Icon className="w-8 h-8 text-brand-navy" />
                    </div>
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-gold border-2 border-brand-navy text-brand-navy text-sm font-display font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                  <p className="text-brand-navy/60 leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Delivery areas */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">WHERE WE DELIVER</div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
            Delivery across <span className="highlight-gold">{city.city}</span>
          </h2>
          <p className="text-lg text-brand-navy/60 max-w-2xl mx-auto mb-8">
            Free delivery, setup, and pickup throughout {city.city}. {city.nearby}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {city.neighborhoods.map((n) => (
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

      {/* FAQ */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="sticker text-xs px-4 py-1.5 mb-4 -rotate-1">GOOD TO KNOW</div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">
              Renting a claw machine in {city.city}
            </h2>
          </div>
          <div className="space-y-4">
            {city.faqs.map((faq) => (
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
                Book your {city.city} <span className="text-brand-gold">claw machine</span>
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Tell us your date and package, and we&apos;ll confirm availability within 24 hours.
                {city.city} dates fill up fast on weekends — reach out early.
              </p>
              <ul className="space-y-3">
                {[
                  `Delivered & set up anywhere in ${city.city}`,
                  'Unlimited plushie prizes included',
                  'Indoor or outdoor setups',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-white/80">
                    <span className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-brand-navy" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-white/60 text-sm">
                Looking somewhere else?{' '}
                <Link href="/rent-a-claw-machine" className="text-brand-gold font-semibold underline underline-offset-4">
                  See all rental areas
                </Link>
                .
              </p>
            </div>

            <RentalForm />
          </div>
        </div>
      </section>
    </>
  )
}
