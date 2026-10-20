import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import ContactSection from '@/components/ContactSection'
import { eventPhotos, machinePhotos } from '@/lib/media'

export const metadata: Metadata = {
  title: 'About Us — California Claw',
  description:
    'California Claw is a small San Francisco Bay Area team that places, stocks, and maintains claw machines for businesses and events.',
  alternates: { canonical: '/about' },
}

/**
 * Everything here restates something the site already commits to elsewhere.
 * Don't add history, headcounts, or numbers that haven't been confirmed.
 */

const commitments = [
  {
    title: 'We answer within 24 hours',
    description: 'Every request gets a real reply from a person, not an autoresponder.',
  },
  {
    title: 'We restock on a schedule',
    description: 'You never have to call us about an empty cabinet or a jammed claw.',
  },
]

const services = [
  {
    title: 'Free placement for businesses',
    description:
      'We buy the machine, install it, stock it, and fix it. You give us a corner and an outlet.',
    href: '/get-a-free-machine',
    cta: 'Get a free machine',
  },
  {
    title: 'Rentals for events',
    description:
      'A machine set to free-play with unlimited plush, delivered and set up for your party, wedding, or office event.',
    href: '/rent-a-claw-machine',
    cta: 'See event rentals',
  },
]

export default function AboutPage() {
  const [first, second, third] = [machinePhotos[0], eventPhotos.windowCafe, machinePhotos[4]]

  return (
    <>
      <PageHero
        title={
          <>
            A small team that <span className="text-brand-gold">likes a good grab</span>.
          </>
        }
        lede="We're based in the San Francisco Bay Area, and we place, stock, and maintain claw machines for businesses and events here and in San Diego."
        photo={machinePhotos[2]}
      />

      {/* The why, beside a short photo strip */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center">
          <div className="max-w-xl">
            <SectionHeading title="Why we started." className="mb-6" />
            <p className="text-lg text-brand-navy/75 leading-relaxed mb-5">
              A claw machine turns a dead corner into the thing people remember about a shop.
              Most owners never get one because of the cost and the hassle.
            </p>
            <p className="text-lg text-brand-navy/75 leading-relaxed">
              So we removed both. We buy the machine, stock it, fix it, and keep it running.
              You give us a corner and an outlet.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 lg:mr-[10px]">
            {[first, second, third].map((p) => (
              <div key={p.alt} className="photo-plain aspect-[3/5]">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="140px"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we commit to */}
      <section className="section-padding bg-brand-navy-dark text-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            tone="dark"
            title={
              <>
                What you can <span className="text-brand-gold">count on</span>.
              </>
            }
            className="mb-12"
          />
          <dl className="grid md:grid-cols-2 gap-x-10 gap-y-9 max-w-4xl">
            {commitments.map((c) => (
              <div key={c.title} className="border-t-4 border-brand-gold pt-4">
                <dt className="font-display text-2xl font-bold mb-1.5">{c.title}</dt>
                <dd className="text-white/65 leading-relaxed">{c.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The two things we do, as a split band */}
      <section className="md:bg-[linear-gradient(90deg,#FDB515_50%,#E6F3FB_50%)]">
        <div className="max-w-6xl mx-auto md:px-6 lg:px-8 grid md:grid-cols-2">
          {services.map((s, i) => (
            <Link
              key={s.title}
              href={s.href}
              className={`group flex flex-col px-4 py-14 lg:py-16 ${
                i === 0 ? 'bg-brand-gold md:pl-0 md:pr-10' : 'bg-brand-cream md:pl-10 md:pr-0'
              }`}
            >
              <span className="font-display text-3xl lg:text-4xl font-extrabold text-brand-navy leading-tight">
                {s.title}
              </span>
              <span className="mt-3 text-lg text-brand-navy/75 max-w-md">{s.description}</span>
              <span className="mt-6 inline-flex items-center gap-2 font-bold text-brand-navy">
                {s.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Who we are, legally */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <p className="max-w-6xl mx-auto text-brand-navy/70">
          California Claw is a trade name of Coastal Vending Company. Reach us at{' '}
          <a
            href="mailto:team@californiaclaw.com"
            className="font-semibold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-4"
          >
            team@californiaclaw.com
          </a>{' '}
          or{' '}
          <a
            href="tel:+15105064159"
            className="font-semibold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-4"
          >
            (510) 506-4159
          </a>
          .
        </p>
      </section>

      <ContactSection />
    </>
  )
}
