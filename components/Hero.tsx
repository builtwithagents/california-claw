import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles, Store, PartyPopper } from 'lucide-react'
import joyCatcher from '@/public/joy-catcher.jpg'

const paths = [
  {
    icon: Store,
    tag: 'For your business',
    title: 'Get a free machine',
    points: ['$0 cost, ever', 'We handle everything', 'No contracts'],
    cta: 'Get a Free Machine',
    href: '#contact',
    featured: true,
  },
  {
    icon: PartyPopper,
    tag: 'For your event',
    title: 'Rent one for a party',
    points: ['From $200', 'Unlimited prizes', 'Delivery & setup included'],
    cta: 'See Rental Pricing',
    href: '/rent-a-claw-machine',
    featured: false,
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream">
      {/* Confetti dots, faded */}
      <div className="absolute inset-0 bg-confetti opacity-[0.13] pointer-events-none" />

      {/* Sun blob */}
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-gold/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center mb-10">
          {/* Left: Copy */}
          <div>
            <div className="sticker text-sm px-4 py-1.5 mb-4 -rotate-1">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              100% free for your business
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-slate-900 leading-[1.05] mb-4 tracking-tight">
              A claw machine.
              <br />
              For <span className="font-bold">free</span>. Really.
            </h1>

            <p className="text-lg text-brand-navy/70 leading-relaxed max-w-lg">
              We place, stock, and maintain premium claw machines at cafés,
              restaurants, and campuses across the San Francisco Bay Area and San
              Diego — or rent one for your next event. Pick your path below.
            </p>
          </div>

          {/* Right: Real machine photo, smaller */}
          <div className="hidden sm:flex justify-center lg:justify-end">
            <div className="relative animate-float w-[180px] lg:w-[220px]">
              <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden border-4 border-brand-navy shadow-[8px_8px_0_rgba(0,50,98,0.12)]">
                <Image
                  src={joyCatcher}
                  alt="Joy Catcher claw machine filled with plush prizes"
                  fill
                  sizes="(max-width: 1024px) 180px, 220px"
                  placeholder="blur"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating sticker */}
              <div className="absolute -top-3 -right-4 sticker bg-brand-gold px-3 py-1.5 text-xs rotate-6">
                FREE!
              </div>
            </div>
          </div>
        </div>

        {/* Two paths — the main choice, above the fold */}
        <div className="grid md:grid-cols-2 gap-5">
          {paths.map((path) => {
            const Icon = path.icon
            return (
              <div
                key={path.title}
                className={`card-fun p-6 flex flex-col bg-white ${
                  path.featured ? 'border-brand-navy shadow-[6px_6px_0_#FDB515]' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-brand-gold/20 border-2 border-brand-navy/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-navy" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/50">
                    {path.tag}
                  </span>
                </div>

                <h2 className="font-display text-xl font-extrabold text-brand-navy mb-3">
                  {path.title}
                </h2>

                <div className="flex flex-wrap gap-2 mb-5">
                  {path.points.map((point) => (
                    <span
                      key={point}
                      className="text-xs font-semibold text-brand-navy/70 bg-brand-cream border-2 border-brand-navy/10 px-2.5 py-1 rounded-full"
                    >
                      ✓ {point}
                    </span>
                  ))}
                </div>

                <Link
                  href={path.href}
                  className={`${path.featured ? 'btn-gold' : 'btn-outline'} mt-auto px-6 py-3`}
                >
                  {path.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      {/* Wavy divider into next section */}
      <svg
        className="block w-full text-white"
        viewBox="0 0 1440 60"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,24 L1440,60 L0,60 Z" />
      </svg>
    </section>
  )
}
