import { ClipboardList, Truck, PartyPopper } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Apply Online',
    description:
      'Fill out our quick form with your location details. We review every request within 24 hours and follow up to discuss placement options.',
  },
  {
    icon: Truck,
    title: 'We Install Everything',
    description:
      'Our team delivers, installs, and configures your machine. We handle permits, electrical, and setup — you just watch it happen.',
  },
  {
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
          <p className="text-[#003262] font-semibold text-sm uppercase tracking-wider mb-3">
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
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#003262]/20 to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#003262] to-[#004d99] flex items-center justify-center shadow-lg shadow-blue-900/20">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#FDB515] text-[#001833] text-xs font-bold flex items-center justify-center shadow-md">
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
            className="inline-flex items-center gap-2 btn-gold px-8 py-4 rounded-xl shadow-lg shadow-yellow-200 hover:-translate-y-0.5"
          >
            Start Your Application
          </a>
        </div>
      </div>
    </section>
  )
}
