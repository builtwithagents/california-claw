import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { rentalCities, getRentalCityBySlug } from '@/lib/rentalCities'
import { getOccasionHref } from '@/lib/occasionLinks'
import RentalIncluded from '@/components/RentalIncluded'
import RelatedGuides from '@/components/RelatedGuides'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import PageHero, { HeroLink } from '@/components/PageHero'
import FaqList from '@/components/FaqList'
import TagList from '@/components/TagList'
import BookingSection from '@/components/BookingSection'
import { clips, machinePhotos, pick } from '@/lib/media'

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
  { title: 'Book your date', description: 'Tell us your event date, length, and venue. We confirm availability within 24 hours.' },
  { title: 'We deliver & set up', description: 'Our team brings the machine, sets it to free-play, and stocks it with prizes.' },
  { title: 'Enjoy the fun', description: 'Guests play all event long. When it wraps, we come back and pack it away.' },
]

export default async function RentalCityPage({ params }: Props) {
  const { city: slug } = await params
  const city = getRentalCityBySlug(slug)
  const otherCities = rentalCities.filter((c) => c.slug !== slug)

  if (!city) notFound()

  // Offset from the county pages so a city and its county don't share a clip.
  const index = rentalCities.findIndex((c) => c.slug === city.slug)
  const clip = pick(clips, index + 1)
  const photo = pick(machinePhotos, index + 3)

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

      <PageHero
        title={
          <>
            Rent a claw machine in <span className="text-brand-gold">{city.city}</span>.
          </>
        }
        lede={city.heroSub}
        clip={clip}
        actions={
          <>
            <a href="#book" className="btn-gold px-8 py-4 text-lg">
              Book your event
              <ArrowRight className="w-5 h-5" />
            </a>
            <HeroLink href="/rent-a-claw-machine">See all rental areas</HeroLink>
          </>
        }
      />

      {/* Local intro */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-20 items-center">
          <div className="max-w-xl">
            <SectionHeading
              title={
                <>
                  The hit of any <span className="highlight-gold">{city.city}</span> event.
                </>
              }
              className="mb-6"
            />
            <p className="text-lg text-brand-navy/75 leading-relaxed">{city.intro}</p>
          </div>
          <div className="justify-self-center lg:justify-self-end w-full max-w-[340px] lg:mr-[10px]">
            <div className="photo-frame aspect-[3/4]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="340px"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's included (shared) */}
      <RentalIncluded />

      {/* Event types, on gold */}
      <section className="section-padding bg-brand-gold">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-start">
          <SectionHeading title={`${city.city} events we love.`} />
          <TagList
            tone="gold"
            columns="sm:columns-2"
            items={city.eventTypes.map((type) => ({ label: type, href: getOccasionHref(type) }))}
          />
        </div>
      </section>

      {/* Planning guides */}
      <RelatedGuides limit={4} heading="Planning for a specific occasion?" />

      {/* How it works */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-start">
          <SectionHeading title="Booked in three steps." />
          {/* Same gold track as the homepage: order is carried by the line */}
          <ol className="relative border-l-4 border-brand-gold ml-2 space-y-9">
            {steps.map((step) => (
              <li key={step.title} className="relative pl-8">
                <span
                  className="absolute -left-[14px] top-1.5 w-6 h-6 rounded-full bg-brand-navy border-4 border-brand-gold"
                  aria-hidden="true"
                />
                <h3 className="font-display text-2xl font-bold text-brand-navy mb-1.5">
                  {step.title}
                </h3>
                <p className="text-brand-navy/65 leading-relaxed max-w-md">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Delivery areas */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <SectionHeading
              title={
                <>
                  Delivery across <span className="highlight-gold">{city.city}</span>.
                </>
              }
              lede={`Free delivery, setup, and pickup throughout ${city.city}. ${city.nearby}`}
            />
            <div className="mt-6 space-y-3 text-brand-navy/70">
              {otherCities.length > 0 && (
                <p>
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
              )}
              <p>
                Running a business rather than planning an event?{' '}
                <Link
                  href="/blog/free-claw-machine-for-your-business-how-it-works"
                  className="font-semibold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-4"
                >
                  See how free placement works
                </Link>
                .
              </p>
            </div>
          </div>
          <TagList items={city.neighborhoods} columns="sm:columns-2" />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-start">
          <SectionHeading title={`Renting a claw machine in ${city.city}.`} />
          <FaqList faqs={city.faqs} />
        </div>
      </section>

      <BookingSection
        title={
          <>
            Book your {city.city} <span className="text-brand-gold">claw machine</span>.
          </>
        }
        lede={`Tell us your date and event details, and we'll confirm availability within 24 hours. ${city.city} dates fill up fast on weekends, so reach out early.`}
        points={[
          `Delivered and set up anywhere in ${city.city}`,
          'Unlimited plushie prizes included',
          'Indoor or outdoor setups',
        ]}
        defaultCity={city.city}
        footer={
          <>
            Looking somewhere else?{' '}
            <Link href="/rent-a-claw-machine" className="text-brand-gold font-semibold underline underline-offset-4">
              See all rental areas
            </Link>
            .
          </>
        }
      />
    </>
  )
}
