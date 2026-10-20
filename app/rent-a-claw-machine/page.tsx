import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { rentalCities } from '@/lib/rentalCities'
import { getOccasionHref } from '@/lib/occasionLinks'
import RentalIncluded from '@/components/RentalIncluded'
import RelatedGuides from '@/components/RelatedGuides'
import SectionHeading from '@/components/SectionHeading'
import PageHero from '@/components/PageHero'
import FaqList from '@/components/FaqList'
import TagList from '@/components/TagList'
import BookingSection from '@/components/BookingSection'
import { clips, eventPhotos } from '@/lib/media'

// Photos for the two city tiles. Our own machines, not city stock.
const cityPhotos: Record<string, (typeof eventPhotos)[keyof typeof eventPhotos]> = {
  'san-francisco': eventPhotos.cityView2,
  'san-diego': eventPhotos.dinerArcade,
}

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

      <PageHero
        title={
          <>
            Rent a claw machine for your <span className="text-brand-gold">event</span>.
          </>
        }
        lede="A real claw machine, stocked with unlimited plushie prizes and set to free-play. We deliver and set up across the San Francisco Bay Area and San Diego. You just enjoy the party."
        clip={clips.find((c) => c.name === 'diner')}
        actions={
          <Link href="/book-an-event" className="btn-gold px-8 py-4 text-lg">
            Book your event
            <ArrowRight className="w-5 h-5" />
          </Link>
        }
      />

      {/* What's included (shared) */}
      <RentalIncluded />

      {/* Event types, on gold */}
      <section className="section-padding bg-brand-gold">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-start">
          <SectionHeading title="Perfect for any occasion." />
          <TagList
            tone="gold"
            columns="sm:columns-2"
            items={eventTypes.map((type) => ({ label: type, href: getOccasionHref(type) }))}
          />
        </div>
      </section>

      {/* Planning guides */}
      <RelatedGuides limit={4} heading="Planning for a specific occasion?" />

      {/* Rentals by city: two photo tiles */}
      <section className="section-padding bg-brand-navy-dark">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            tone="dark"
            title={
              <>
                Find your <span className="text-brand-gold">city</span>.
              </>
            }
            lede="Local delivery details and event ideas for your area."
            className="mb-10"
          />
          <div className="grid sm:grid-cols-2 gap-6 sm:mr-[10px]">
            {rentalCities.map((c) => {
              const photo = cityPhotos[c.slug] ?? eventPhotos.dinerArcade
              return (
                <Link
                  key={c.slug}
                  href={`/rent-a-claw-machine/${c.slug}`}
                  className="group photo-frame block aspect-[4/3]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 560px"
                    placeholder="blur"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
                    <span className="block font-display text-3xl sm:text-4xl font-extrabold leading-tight">
                      {c.city}
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1.5 font-semibold text-brand-gold">
                      See {c.city} rentals
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Where we deliver */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <SectionHeading
              title={
                <>
                  Rentals across the{' '}
                  <span className="highlight-gold">San Francisco Bay Area</span> and San Diego.
                </>
              }
              lede="Free delivery, setup, and pickup throughout our service areas."
            />
            <p className="mt-6 text-brand-navy/70">
              Running a business rather than planning an event? We also place machines
              permanently at no cost.{' '}
              <Link
                href="/blog/free-claw-machine-for-your-business-how-it-works"
                className="font-semibold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-4"
              >
                See how free placement works
              </Link>
              .
            </p>
          </div>
          <TagList items={deliveryAreas} columns="sm:columns-2" />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-start">
          <SectionHeading title="Claw machine rental questions." />
          <FaqList faqs={faqs} />
        </div>
      </section>

      <BookingSection
        title={
          <>
            Let&apos;s get your date <span className="text-brand-gold">on the books</span>.
          </>
        }
        lede="Tell us your date and event details, and we'll confirm availability within 24 hours. Weekend dates fill up fast, so reach out early."
        points={[
          'Serving the San Francisco Bay Area and San Diego',
          'Indoor or outdoor setups',
          'Flexible timing to fit your schedule',
        ]}
      />
    </>
  )
}
