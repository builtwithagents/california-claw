import { Layers, Clock } from 'lucide-react'

const addOns = [
  {
    icon: Layers,
    title: 'Second machine',
    price: 'Half the base tier price',
    example: '+$350 on a 6-hour booking',
    description: "Great for events over 150 guests, where one machine bottlenecks. Always half of your booked tier's base price.",
  },
  {
    icon: Clock,
    title: 'Extended hours',
    price: '$45/hr',
    example: 'Beyond the 6-hour base',
    description: 'Need more time than the 6-hour package covers? We extend the rental at a flat hourly rate.',
  },
]

export default function RentalAddOns() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="sticker text-xs px-4 py-1.5 mb-4 -rotate-1">OPTIONAL ADD-ONS</div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
            Need a little more?
          </h2>
          <p className="text-lg text-brand-navy/60 max-w-xl mx-auto">
            Two simple add-ons for bigger or longer events. No other fees, no surprises.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {addOns.map((addOn) => {
            const Icon = addOn.icon
            return (
              <div key={addOn.title} className="card-fun p-6">
                <div className="bg-brand-gold/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand-navy" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-navy mb-1">{addOn.title}</h3>
                <p className="font-display text-2xl font-extrabold text-brand-navy mb-1">{addOn.price}</p>
                <p className="text-brand-navy/50 text-xs font-semibold mb-3">{addOn.example}</p>
                <p className="text-brand-navy/60 text-sm leading-relaxed">{addOn.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
