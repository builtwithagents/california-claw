import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import RequestForm from '@/components/RequestForm'
import { machinePhotos } from '@/lib/media'

type Kind = 'machine' | 'event'

const content: Record<
  Kind,
  {
    title: React.ReactNode
    lede: string
    points: string[]
    steps: { title: string; description: string }[]
    other: { lead: string; label: string; href: string }
  }
> = {
  machine: {
    title: (
      <>
        Get a claw machine placed at your business for{' '}
        <span className="text-brand-gold">free</span>.
      </>
    ),
    lede: 'Tell us about your space. We review every request within 24 hours and follow up to talk through placement.',
    points: ['$0 cost, ever', 'We handle everything', 'No contracts'],
    steps: [
      { title: 'We review your request', description: 'A real person reads it and replies within 24 hours.' },
      { title: 'A quick call', description: 'We go over your space, foot traffic, and where a machine would fit.' },
      { title: 'We install it', description: 'We deliver, set up, and stock the machine. Then we keep it running.' },
    ],
    other: {
      lead: 'Planning a party or event instead?',
      label: 'Book a rental',
      href: '/book-an-event',
    },
  },
  event: {
    title: (
      <>
        Book a claw machine for your <span className="text-brand-gold">event</span>.
      </>
    ),
    lede: "Tell us your date and event details, and we'll confirm availability within 24 hours. Weekend dates fill up fast, so reach out early.",
    points: ['Unlimited plushie prizes', 'Delivery and setup included', 'Set to free-play'],
    steps: [
      { title: 'Tell us your date', description: 'Event date, length, and venue. We confirm availability within 24 hours.' },
      { title: 'We deliver and set up', description: 'We bring the machine, set it to free-play, and stock it with prizes.' },
      { title: 'Guests play', description: 'All event long. When it wraps, we come back and pack it away.' },
    ],
    other: {
      lead: 'Want a machine at your business instead? It’s free.',
      label: 'Get a free machine',
      href: '/get-a-free-machine',
    },
  },
}

const details = [
  { label: 'Call or text', value: '(510) 506-4159', href: 'tel:+15105064159' },
  { label: 'Email', value: 'team@californiaclaw.com', href: 'mailto:team@californiaclaw.com' },
  { label: 'Hours', value: 'Open daily, 9am–9pm' },
]

/** A standalone contact page: the form sits in the navy opener, above the fold. */
export default function ContactPage({ kind }: { kind: Kind }) {
  const c = content[kind]
  // Four compact cabinets, in a level strip.
  const strip = kind === 'machine' ? machinePhotos.slice(0, 4) : machinePhotos.slice(2, 6)

  return (
    <>
      <section className="bg-brand-navy text-white border-b-[6px] border-brand-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-20 grid lg:grid-cols-[1fr_minmax(0,480px)] gap-12 lg:gap-16 items-start">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.02] tracking-tight">
              {c.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-xl">{c.lede}</p>

            <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              {c.points.map((p) => (
                <li key={p} className="flex items-baseline gap-2.5 font-display text-lg font-bold">
                  <span className="w-2.5 h-2.5 bg-brand-gold flex-shrink-0 translate-y-[-2px]" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>

            <dl className="mt-10 border-t border-white/20 max-w-lg">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4 border-b border-white/20"
                >
                  <dt className="text-sm font-semibold text-white/55 w-28 flex-shrink-0">{d.label}</dt>
                  <dd className="font-display text-lg font-bold">
                    {d.href ? (
                      <a
                        href={d.href}
                        className="underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold transition-colors"
                      >
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:mr-[10px]">
            <RequestForm defaultType={kind} />
          </div>
        </div>
      </section>

      {/* What happens next, beside a level strip of our machines */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,380px)_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy leading-[1.02] mb-10">
              What happens next.
            </h2>
            <ol className="relative border-l-4 border-brand-gold ml-2 space-y-9">
              {c.steps.map((step) => (
                <li key={step.title} className="relative pl-8">
                  <span
                    className="absolute -left-[14px] top-1.5 w-6 h-6 rounded-full bg-brand-navy border-4 border-brand-gold"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-2xl font-bold text-brand-navy mb-1.5">{step.title}</h3>
                  <p className="text-brand-navy/65 leading-relaxed">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {strip.map((p) => (
              <li key={p.alt} className="photo-plain aspect-[3/5]">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 180px"
                  placeholder="blur"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The other way in */}
      <section className="bg-brand-gold">
        <Link
          href={c.other.href}
          className="group max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-wrap items-center justify-between gap-4"
        >
          <span className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
            {c.other.lead}
          </span>
          <span className="btn-navy px-6 py-3">
            {c.other.label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </section>
    </>
  )
}
