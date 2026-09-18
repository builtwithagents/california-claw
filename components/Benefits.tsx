import SectionHeading from '@/components/SectionHeading'

const benefits = [
  {
    title: 'Free machine placement',
    description:
      'No upfront costs, no rental fees, no surprises. We place our premium claw machines at your location completely free of charge.',
  },
  {
    title: 'Full maintenance',
    description:
      'We handle all repairs, technical issues, and regular maintenance. Your team never needs to think about upkeep.',
  },
  {
    title: 'Regular restocking',
    description:
      'Fresh prizes delivered and restocked on schedule. We keep the cabinet full so the machine always looks worth a play.',
  },
  {
    title: 'Zero hidden fees',
    description:
      'Seriously — nothing. We manage everything from installation to prizes to ongoing service. Your cost is always zero.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-brand-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-20 items-start">
          {/* Left: the pitch */}
          <SectionHeading
            label="Why California Claw"
            title={
              <>
                All the fun,
                <br />
                <span className="highlight-gold">none of the work</span>
              </>
            }
            lede="You give us a corner and an outlet. We do everything after that."
          />

          {/* Right: what the deal actually covers */}
          <ul className="divide-y divide-brand-navy/10 border-y border-brand-navy/10">
            {benefits.map((item) => (
              <li key={item.title} className="py-7">
                <h3 className="font-display text-xl font-bold text-brand-navy mb-1.5">
                  {item.title}
                </h3>
                <p className="text-brand-navy/60 leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
