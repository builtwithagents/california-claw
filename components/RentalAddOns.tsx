import SectionHeading from '@/components/SectionHeading'

const addOns = [
  {
    title: 'Second machine',
    price: 'Half the base tier price',
    example: '+$350 on a 6-hour booking',
    description:
      "For events over 150 guests, where one machine bottlenecks. Always half of your booked tier's base price.",
  },
  {
    title: 'Extended hours',
    price: '$45/hr',
    example: 'Beyond the 6-hour base',
    description:
      'Need more time than the 6-hour package covers? We extend the rental at a flat hourly rate.',
  },
]

export default function RentalAddOns() {
  return (
    <section className="section-padding bg-brand-cream">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Optional add-ons"
          title="Need a little more?"
          lede="Two add-ons for bigger or longer events. No other fees, no surprises."
          className="mb-10"
        />

        <dl className="border-t border-brand-navy/10">
          {addOns.map((addOn) => (
            <div
              key={addOn.title}
              className="grid sm:grid-cols-[1fr_auto] gap-x-8 gap-y-2 py-7 border-b border-brand-navy/10"
            >
              <div>
                <dt className="font-display text-xl font-bold text-brand-navy mb-1.5">
                  {addOn.title}
                </dt>
                <dd className="text-brand-navy/60 leading-relaxed max-w-xl">
                  {addOn.description}
                </dd>
              </div>
              <div className="sm:text-right sm:row-start-1 sm:col-start-2">
                <p className="font-display text-2xl font-extrabold text-brand-navy whitespace-nowrap">
                  {addOn.price}
                </p>
                <p className="text-brand-navy/45 text-xs font-semibold mt-0.5">{addOn.example}</p>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
