import { Gift, Truck, Sparkles, PartyPopper } from 'lucide-react'

const included = [
  { icon: Gift, title: 'Unlimited plushie prizes', description: 'Every play wins — we keep it stocked the whole time.' },
  { icon: Truck, title: 'Delivery & setup', description: 'We bring it, plug it in, and take it away after.' },
  { icon: Sparkles, title: 'Free-play mode', description: 'No coins needed. Guests just walk up and grab.' },
  { icon: PartyPopper, title: 'A guaranteed crowd-pleaser', description: 'The photo-op and centerpiece your event needs.' },
]

export default function RentalIncluded() {
  return (
    <section className="section-padding bg-brand-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-confetti opacity-[0.08] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <div className="sticker text-xs px-4 py-1.5 mb-4 -rotate-1">EVERY RENTAL INCLUDES</div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mb-4">
            Everything for one flat price
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {included.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="card-fun p-6">
                <div className="bg-brand-gold/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand-navy" />
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
