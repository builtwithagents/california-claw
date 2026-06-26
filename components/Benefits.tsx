import { Wrench, Package, DollarSign, Zap } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: 'Free Machine Placement',
    description:
      'No upfront costs, no rental fees, no surprises. We place our premium claw machines at your location completely free of charge.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: Wrench,
    title: 'Full Maintenance',
    description:
      'We handle all repairs, technical issues, and regular maintenance. Your team never needs to think about upkeep.',
    color: 'text-violet-500',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: Package,
    title: 'Regular Restocking',
    description:
      'Fresh prizes delivered and restocked on schedule. We ensure your machine always looks irresistible to customers.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    icon: Zap,
    title: 'Zero Hidden Fees',
    description:
      'Seriously — nothing. We manage everything from installation to prizes to ongoing service. Your cost is always zero.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-violet-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Why California Claw
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            All the benefits,
            <span className="text-gradient"> none of the hassle</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We make it incredibly simple to add entertainment value to your location.
            Our turnkey solution means you get everything with none of the work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`card-hover bg-white border ${item.border} rounded-2xl p-6 shadow-sm`}
              >
                <div className={`${item.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
