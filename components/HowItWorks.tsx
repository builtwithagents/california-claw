import Link from 'next/link'
import Image from 'next/image'
import pizzeriaCorner from '@/public/media/pizzeria-corner.jpg'
import dinerCorner from '@/public/media/diner-corner.jpg'

const steps = [
  {
    title: 'You apply',
    description:
      'Tell us about your space with the form below. We follow up to talk through where a machine would fit.',
  },
  {
    title: 'We install',
    description:
      'We deliver, set up, and configure the machine. You just need an outlet.',
  },
  {
    title: 'People play',
    description:
      'Customers start playing right away. We keep it stocked and maintained, month after month.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_380px] gap-14 lg:gap-20 items-center">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy leading-[1.02] mb-12 max-w-xl">
            Up and running in <span className="highlight-gold">days</span>.
          </h2>

          {/* A track, not numbered cards: order is carried by the line itself */}
          <ol className="relative border-l-4 border-brand-gold ml-2 space-y-10">
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

          <Link href="/get-a-free-machine" className="btn-gold px-8 py-4 text-lg mt-12">
            Start your application
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-5 mr-[10px]">
          <div className="photo-frame aspect-[3/5] mt-10">
            <Image
              src={pizzeriaCorner}
              alt="A green-lit claw machine installed in a pizzeria corner"
              fill
              sizes="(max-width: 1024px) 50vw, 190px"
              placeholder="blur"
              className="object-cover object-top"
            />
          </div>
          <div className="photo-frame aspect-[3/5]">
            <Image
              src={dinerCorner}
              alt="A green-lit claw machine installed in a diner window corner"
              fill
              sizes="(max-width: 1024px) 50vw, 190px"
              placeholder="blur"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
