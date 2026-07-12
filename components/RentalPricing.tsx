const primaryTiers = [
  { duration: '2 Hours', price: '350', blurb: 'Our most-booked party package', popular: false },
  { duration: '3 Hours', price: '475', blurb: 'Keep the fun going all evening', popular: false },
  {
    duration: '6 Hours',
    price: '700',
    blurb: 'The wedding & corporate-event favorite. Most competitors start around $750 for 6 hours and cap prizes at 25 — ours are unlimited.',
    popular: true,
  },
]

const secondaryTiers = [
  { duration: '1 Hour', price: '200', blurb: 'A quick, high-energy activation' },
  { duration: '4 Hours', price: '575', blurb: 'For a longer reception or offsite' },
]

export default function RentalPricing({ cityLabel }: { cityLabel?: string }) {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">SIMPLE PRICING</div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mb-4">
            Pick your <span className="highlight-gold">party</span> package
          </h2>
          <p className="text-lg text-brand-navy/60 max-w-xl mx-auto">
            Flat pricing, no hidden fees{cityLabel ? ` for ${cityLabel} events` : ''}. Every package
            includes unlimited prizes, delivery, and setup — no per-play or per-prize charges, ever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {primaryTiers.map((tier) => (
            <div
              key={tier.duration}
              className={`card-fun p-8 text-center relative ${
                tier.popular ? 'border-brand-navy shadow-[6px_6px_0_#FDB515]' : ''
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full bg-brand-gold text-brand-navy border-2 border-brand-navy whitespace-nowrap">
                  Most Popular
                </span>
              )}
              <p className="font-display text-lg font-bold text-brand-navy mb-2">{tier.duration}</p>
              <div className="mb-3">
                <span className="font-display text-5xl font-extrabold text-brand-navy">${tier.price}</span>
              </div>
              <p className="text-brand-navy/60 text-sm mb-6">{tier.blurb}</p>
              <a href="#book" className={`${tier.popular ? 'btn-gold' : 'btn-outline'} w-full px-6 py-3`}>
                Book {tier.duration}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {secondaryTiers.map((tier) => (
            <div
              key={tier.duration}
              className="card-fun p-5 flex items-center justify-between gap-4"
            >
              <div>
                <p className="font-display font-bold text-brand-navy">{tier.duration}</p>
                <p className="text-brand-navy/60 text-sm">{tier.blurb}</p>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="font-display text-2xl font-extrabold text-brand-navy">${tier.price}</span>
                <a href="#book" className="btn-outline px-4 py-2 text-sm whitespace-nowrap">
                  Book
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 max-w-4xl mx-auto card-fun p-6 sm:p-8 bg-brand-cream text-center">
          <p className="text-brand-navy leading-relaxed">
            <span className="font-bold">Unlimited prizes, every rental.</span> Most claw machine
            rental companies include around 25 starter prizes and charge roughly $150 for each
            additional batch of 25. Ours never run out — we restock all event long, included in
            the flat price.
          </p>
        </div>

        <div className="mt-6 max-w-4xl mx-auto card-fun p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
              Something bigger or smaller?
            </h3>
            <p className="text-brand-navy/60 text-sm">
              Events over 6 hours, multiple machines, or a compact mini machine for tight spaces —
              we&apos;ll put together a custom quote.
            </p>
          </div>
          <a href="#book" className="btn-outline px-6 py-3 flex-shrink-0">
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  )
}
