import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { rentalCities, getRentalCityBySlug } from '@/lib/rentalCities'
import { getOccasionHref } from '@/lib/occasionLinks'
import RentalPricing from '@/components/RentalPricing'
import RentalAddOns from '@/components/RentalAddOns'
import RentalIncluded from '@/components/RentalIncluded'
import RelatedGuides from '@/components/RelatedGuides'
import RequestForm from '@/components/RequestForm'
import SectionHeading from '@/components/SectionHeading'
import joyCatcher from '@/public/joy-catcher.jpg'

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
  { title: 'Book your date', description: 'Tell us your event date, package, and venue. We confirm availability within 24 hours.' },
  { title: 'We deliver & set up', description: 'Our team brings the machine, sets it to free-play, and stocks it with prizes.' },
  { title: 'Enjoy the fun', description: 'Guests play all event long. When it wraps, we come back and pack it away.' },
]

export default async function RentalCityPage({ params }: Props) {
  const { city: slug } = await params
  const city = getRentalCityBySlug(slug)
  const otherCities = rentalCities.filter((c) => c.slug !== slug)

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
      <section className="bg-brand-cream border-b border-brand-navy/10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="flex items-center justify-center gap-3 mb-6"><span className="h-0.5 w-7 bg-brand-gold" aria-hidden="true" /><span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy/50">Claw machine rentals in {city.city}</span></p>
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
            <div className="max-w-md mx-auto lg:mx-0 w-full">
              <div className="photo-frame aspect-[4/3] w-full">
                <Image
                  src={city.heroImage ?? joyCatcher}
                  alt={city.heroImage ? `${city.city}, California` : `A California Claw machine stocked with plush prizes, ready for ${city.city}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 448px, 90vw"
                  placeholder={city.heroImage ? undefined : 'blur'}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local intro */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label={`${city.city} events`}
            title={
              <>
                The hit of any <span className="highlight-gold">{city.city}</span> event
              </>
            }
            className="mb-6"
          />
          <p className="text-lg text-brand-navy/70 leading-relaxed">{city.intro}</p>
        </div>
      </section>

      {/* Pricing (shared) */}
      <RentalPricing cityLabel={city.city} />

      {/* Add-ons (shared) */}
      <RentalAddOns />

      {/* What's included (shared) */}
      <RentalIncluded />

      {/* Event types */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Great for"
            title={`${city.city} events we love`}
            className="mb-8"
          />
          <div className="flex flex-wrap gap-3">
            {city.eventTypes.map((type) => {
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

      {/* Other rental cities */}
      {otherCities.length > 0 && (
        <section className="bg-white pt-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-brand-navy/60">
              We also rent in{' '}
              {otherCities.map((c, i) => (
                <span key={c.slug}>
                  {i > 0 && ', '}
                  <Link
                    href={`/rent-a-claw-machine/${c.slug}`}
                    className="font-semibold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-4"
                  >
                    {c.city}
                  </Link>
                </span>
              ))}
              .
            </p>
          </div>
        </section>
      )}

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

      {/* How it works */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-5xl mx-auto relative">
          <SectionHeading
            label="How it works"
            title="Booked in three steps"
            className="mb-10"
          />
          <ol className="grid md:grid-cols-3 gap-px bg-brand-navy/10 border border-brand-navy/10 rounded-3xl overflow-hidden">
            {steps.map((step, i) => (
              <li key={step.title} className="bg-white p-7 sm:p-8">
                <span className="font-display text-5xl font-extrabold text-brand-gold leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl font-bold text-brand-navy mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="text-brand-navy/60 leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Delivery areas */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Where we deliver"
            title={
              <>
                Delivery across <span className="highlight-gold">{city.city}</span>
              </>
            }
            lede={`Free delivery, setup, and pickup throughout ${city.city}. ${city.nearby}`}
            className="mb-8"
          />
          <div className="flex flex-wrap gap-3">
            {city.neighborhoods.map((n) => (
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

      {/* FAQ */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="Good to know"
            title={`Renting a claw machine in ${city.city}`}
            className="mb-10"
          />
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
      <section id="book" className="section-padding bg-brand-navy">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                tone="dark"
                label="Book now"
                title={
                  <>
                    Book your {city.city} <span className="text-brand-gold">claw machine</span>
                  </>
                }
                lede={`Tell us your date and package, and we'll confirm availability within 24 hours. ${city.city} dates fill up fast on weekends — reach out early.`}
                className="mb-8"
              />
              <ul className="space-y-3">
                {[
                  `Delivered & set up anywhere in ${city.city}`,
                  'Unlimited plushie prizes included',
                  'Indoor or outdoor setups',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-white/80">
                    <span className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0">
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

            <RequestForm defaultType="event" defaultCity={city.city} />
          </div>
        </div>
      </section>
    </>
  )
}
