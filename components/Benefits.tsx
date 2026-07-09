import { Wrench, Package, DollarSign, Zap } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: 'Free Machine Placement',
    description:
      'No upfront costs, no rental fees, no surprises. We place our premium claw machines at your location completely free of charge.',
    chip: 'bg-brand-gold/20 text-brand-navy',
  },
  {
    icon: Wrench,
    title: 'Full Maintenance',
    description:
      'We handle all repairs, technical issues, and regular maintenance. Your team never needs to think about upkeep.',
    chip: 'bg-brand-sky/50 text-brand-navy',
  },
  {
    icon: Package,
    title: 'Regular Restocking',
    description:
      'Fresh prizes delivered and restocked on schedule. We ensure your machine always looks irresistible to customers.',
    chip: 'bg-brand-coral/15 text-brand-coral',
  },
  {
    icon: Zap,
    title: 'Zero Hidden Fees',
    description:
      'Seriously — nothing. We manage everything from installation to prizes to ongoing service. Your cost is always zero.',
    chip: 'bg-emerald-100 text-emerald-600',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">WHY CALIFORNIA CLAW</div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mb-4">
            All the fun, <span className="highlight-gold">none of the work</span>
          </h2>
          <p className="text-lg text-brand-navy/60 max-w-2xl mx-auto">
            We make it incredibly simple to add entertainment value to your location.
            Our turnkey setup means you get everything with none of the hassle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="card-fun p-6">
                <div className={`${item.chip} w-12 h-12 rounded-2xl flex items-center justify-center mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
                <p className="text-brand-navy/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
