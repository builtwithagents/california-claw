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
    <section className="section-padding bg-brand-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-confetti opacity-[0.08] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <div className="sticker text-xs px-4 py-1.5 mb-4 -rotate-1">THE PROCESS</div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mb-4">
            Up and running in <span className="highlight-gold">days</span>
          </h2>
          <p className="text-lg text-brand-navy/60 max-w-xl mx-auto">
            From first hello to happy customers in 3 simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Dotted connector (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] border-t-2 border-dashed border-brand-navy/20" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-3xl bg-white border-2 border-brand-navy flex items-center justify-center shadow-[5px_5px_0_rgba(0,50,98,0.12)]">
                    <Icon className="w-8 h-8 text-brand-navy" />
                  </div>
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-gold border-2 border-brand-navy text-brand-navy text-sm font-display font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                <p className="text-brand-navy/60 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-gold px-8 py-4 text-lg">
            Start Your Application
          </a>
        </div>
      </div>
    </section>
  )
}
