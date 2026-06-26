import { ClipboardList, Truck, PartyPopper } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Apply Online',
    description:
      'Fill out our quick form with your location details. We review every request within 24 hours and follow up to discuss placement options.',
  },
  {
    number: '02',
    icon: Truck,
    title: 'We Install Everything',
    description:
      'Our team delivers, installs, and configures your machine. We handle permits, electrical, and setup — you just watch it happen.',
  },
  {
    number: '03',
    icon: PartyPopper,
    title: 'Watch the Fun Begin',
    description:
      'Your customers start playing right away. We keep it stocked with fresh prizes and fully maintained, month after month.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-violet-600 font-semibold text-sm uppercase tracking-wider mb-3">
            The Process
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Up and running in days
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            From first contact to happy customers in 3 simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Step number */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-200">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-amber-400 text-slate-900 text-xs font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-violet-200 hover:-translate-y-0.5"
          >
            Start Your Application
          </a>
        </div>
      </div>
    </section>
  )
}
