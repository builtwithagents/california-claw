import Image from 'next/image'
import RequestForm from '@/components/RequestForm'
import dinerArcade from '@/public/media/diner-arcade.jpg'

const details = [
  { label: 'Call or text', value: '(510) 506-4159', href: 'tel:+15105064159' },
  { label: 'Email', value: 'team@californiaclaw.com', href: 'mailto:team@californiaclaw.com' },
  { label: 'Hours', value: 'Open daily, 9am–9pm' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative section-padding bg-brand-navy-dark overflow-hidden">
      {/* Form over a darkened photo of a real placement */}
      <Image
        src={dinerArcade}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy-dark/90 to-brand-navy-dark/60" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="text-white">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.02] mb-5">
              Ready to get the <span className="text-brand-gold">claws</span> out?
            </h2>
            <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-md">
              A free machine for your business or a rental for your next event. Tell us
              what you need, we&apos;ll review it within 24 hours, have a quick call, and
              get you set up.
            </p>

            <dl className="border-t border-white/20">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4 border-b border-white/20"
                >
                  <dt className="text-sm font-semibold text-white/55 w-28 flex-shrink-0">
                    {d.label}
                  </dt>
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

          <div className="mr-[10px]">
            <RequestForm defaultType="machine" />
          </div>
        </div>
      </div>
    </section>
  )
}
