import Image from 'next/image'
import prizePineapple from '@/public/prize-pineapple-plush.jpg'
import SectionHeading from '@/components/SectionHeading'

const included = [
  {
    title: 'Unlimited plushie prizes',
    description: 'Every play wins — we keep the cabinet stocked for the whole booking.',
  },
  {
    title: 'Delivery & setup',
    description: 'We bring it, plug it in, and haul it away after. You never touch the machine.',
  },
  {
    title: 'Free-play mode',
    description: 'No coins, no card reader. Guests walk up, grab, and go.',
  },
  {
    title: 'A photo-op that runs itself',
    description: 'The machine pulls a line on its own — no host or attendant needed.',
  },
]

export default function RentalIncluded() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_minmax(0,340px)] gap-10 lg:gap-16 items-center">
          {/* Left: what every rental covers */}
          <div>
            <SectionHeading
              label="Every rental includes"
              title="Everything you need, included"
              className="mb-8"
            />

            <ul className="divide-y divide-brand-navy/10 border-y border-brand-navy/10">
              {included.map((item) => (
                <li key={item.title} className="py-6">
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-1">
                    {item.title}
                  </h3>
                  <p className="text-brand-navy/60 leading-relaxed">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: an actual prize out of an actual machine */}
          <figure className="relative mx-auto lg:mx-0 max-w-[340px]">
            <div className="photo-frame aspect-[3/4]">
              <Image
                src={prizePineapple}
                alt="A hand holding a smiling pineapple plushie won from a California Claw machine, with rows of boba-cup plushies behind it"
                fill
                sizes="(max-width: 1024px) 340px, 340px"
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute bottom-4 left-4 sticker bg-brand-gold/95 px-3.5 py-1.5 text-xs">
              Unlimited grabs, start to finish
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
