import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import joyCatcher from '@/public/joy-catcher.jpg'
import machinePizzeria from '@/public/machine-pizzeria.jpg'

const paths = [
  {
    tag: 'For your business',
    title: 'Get a free machine',
    points: ['$0 cost, ever', 'We handle everything', 'No contracts'],
    cta: 'Get a free machine',
    href: '#contact',
    featured: true,
  },
  {
    tag: 'For your event',
    title: 'Rent one for a party',
    points: ['From $200', 'Unlimited prizes', 'Delivery & setup included'],
    cta: 'See event rentals',
    href: '/rent-a-claw-machine',
    featured: false,
  },
]

export default function Hero() {
  return (
    <section className="bg-brand-cream border-b border-brand-navy/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <p className="flex items-center gap-3 mb-5">
              <span className="h-0.5 w-7 bg-brand-gold" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy/50">
                100% free for your business
              </span>
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-[1.05] mb-5 tracking-tight">
              A claw machine.
              <br />
              For <span className="highlight-gold">free</span>. Really.
            </h1>

            <p className="text-lg text-brand-navy/65 leading-relaxed">
              We place, stock, and maintain premium claw machines at cafés,
              restaurants, and campuses across the San Francisco Bay Area and San
              Diego — or rent one for your next event.
            </p>
          </div>

          {/* Right: the two cabinet sizes, to scale */}
          <div className="hidden sm:block relative mx-auto lg:mx-0 w-[300px] lg:w-[340px] pb-12">
            <div className="photo-frame aspect-[3/4]">
              <Image
                src={joyCatcher}
                alt="A full-size neon-lit Joy Catcher claw machine in a teahouse, packed with unicorn and penguin plushies"
                fill
                sizes="(max-width: 1024px) 300px, 340px"
                placeholder="blur"
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-2 -left-10 w-[112px]">
              <div className="photo-frame aspect-[2/3] rounded-xl">
                <Image
                  src={machinePizzeria}
                  alt="A compact Super Mini claw machine in a pizzeria, stocked with Pikachu and Poké Ball plushies"
                  fill
                  sizes="112px"
                  placeholder="blur"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <p className="absolute bottom-0 right-0 text-xs text-brand-navy/45">
              Full-size or compact — whichever fits.
            </p>
          </div>
        </div>

        {/* Two paths — the main choice, above the fold */}
        <div className="grid md:grid-cols-2 gap-5">
          {paths.map((path) => (
            <div
              key={path.title}
              className={`rounded-2xl bg-white p-7 flex flex-col border transition-colors ${
                path.featured
                  ? 'border-brand-navy/25'
                  : 'border-brand-navy/10 hover:border-brand-navy/25'
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy/45 mb-3">
                {path.tag}
              </p>

              <h2 className="font-display text-2xl font-extrabold text-brand-navy mb-4">
                {path.title}
              </h2>

              <ul className="space-y-2 mb-7 text-sm text-brand-navy/65">
                {path.points.map((point) => (
                  <li key={point} className="flex items-baseline gap-2.5">
                    <span className="text-brand-gold-dark" aria-hidden="true">
                      —
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href={path.href}
                className={`${path.featured ? 'btn-gold' : 'btn-outline'} mt-auto self-start px-6 py-3`}
              >
                {path.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
