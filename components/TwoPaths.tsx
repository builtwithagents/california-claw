import Link from 'next/link'
import { ArrowRight, Store, PartyPopper } from 'lucide-react'

const paths = [
  {
    icon: Store,
    tag: 'For your business',
    title: 'Get a free machine',
    description:
      'We place, stock, and maintain a premium claw machine at your café, restaurant, or campus — completely free. You just provide the space.',
    points: ['$0 cost, ever', 'We handle everything', 'No contracts'],
    cta: 'Get a Free Machine',
    href: '/#contact',
    featured: true,
  },
  {
    icon: PartyPopper,
    tag: 'For your event',
    title: 'Rent one for a party',
    description: (
      <>
        Renting for a{' '}
        <Link href="/blog/claw-machine-rental-for-a-birthday-party" className="underline decoration-brand-gold decoration-2 underline-offset-2 hover:decoration-4">
          birthday
        </Link>
        ,{' '}
        <Link href="/blog/renting-a-claw-machine-for-a-wedding" className="underline decoration-brand-gold decoration-2 underline-offset-2 hover:decoration-4">
          wedding
        </Link>
        , or{' '}
        <Link href="/blog/renting-a-claw-machine-for-the-office" className="underline decoration-brand-gold decoration-2 underline-offset-2 hover:decoration-4">
          corporate event
        </Link>
        ? Get a claw machine with unlimited plushie prizes, delivered and set up for you.
      </>
    ),
    points: ['From $200', 'Unlimited prizes', 'Delivery & setup included'],
    cta: 'See Rental Pricing',
    href: '/rent-a-claw-machine',
    featured: false,
  },
]

export default function TwoPaths() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">TWO WAYS TO PLAY</div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy mb-3">
            How do you want your <span className="highlight-gold">claw machine?</span>
          </h2>
          <p className="text-lg text-brand-navy/60 max-w-xl mx-auto">
            Whether it&apos;s a permanent fixture for your business or a showstopper for one
            big night, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {paths.map((path) => {
            const Icon = path.icon
            return (
              <div
                key={path.title}
                className={`card-fun p-8 flex flex-col ${
                  path.featured ? 'border-brand-navy shadow-[6px_6px_0_#FDB515]' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gold/20 border-2 border-brand-navy/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-brand-navy" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/50">
                    {path.tag}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-extrabold text-brand-navy mb-3">
                  {path.title}
                </h3>
                <p className="text-brand-navy/60 leading-relaxed mb-5">{path.description}</p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {path.points.map((point) => (
                    <span
                      key={point}
                      className="text-sm font-semibold text-brand-navy/70 bg-brand-cream border-2 border-brand-navy/10 px-3 py-1 rounded-full"
                    >
                      ✓ {point}
                    </span>
                  ))}
                </div>

                <Link
                  href={path.href}
                  className={`${path.featured ? 'btn-gold' : 'btn-outline'} mt-auto px-6 py-3.5`}
                >
                  {path.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
