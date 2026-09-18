import RequestForm from '@/components/RequestForm'
import SectionHeading from '@/components/SectionHeading'

const details = [
  { label: 'Call or text', value: '(510) 506-4159', href: 'tel:+15105064159' },
  { label: 'Email', value: 'team@californiaclaw.com', href: 'mailto:team@californiaclaw.com' },
  { label: 'Hours', value: 'Open daily, 9am–9pm' },
]

const next = [
  'We review your request within 24 hours.',
  'Quick call to go over the details.',
  'We get you set up — placement or event delivery.',
]

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-brand-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: how to reach us */}
          <div>
            <SectionHeading
              label="Get started"
              title={
                <>
                  Ready to get the <span className="highlight-gold">claws</span> out?
                </>
              }
              lede="Whether it's a free machine for your business or a rental for your next event, tell us what you need and we'll get back to you within 24 hours."
              className="mb-10"
            />

            {/* Contact details as a plain definition list, not icon tiles. */}
            <dl className="border-t border-brand-navy/10 mb-10">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4 border-b border-brand-navy/10"
                >
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy/45 w-28 flex-shrink-0">
                    {d.label}
                  </dt>
                  <dd className="font-display text-lg font-bold text-brand-navy">
                    {d.href ? (
                      <a
                        href={d.href}
                        className="underline decoration-brand-gold decoration-2 underline-offset-4 hover:decoration-4 transition-all"
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

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy/45 mb-4">
                What happens next
              </p>
              <ol className="space-y-3">
                {next.map((step, i) => (
                  <li key={step} className="flex gap-4 text-brand-navy/70">
                    <span className="font-display font-extrabold text-brand-gold-dark flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: Form */}
          <RequestForm defaultType="machine" />
        </div>
      </div>
    </section>
  )
}
