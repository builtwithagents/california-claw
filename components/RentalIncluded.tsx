import Image from 'next/image'
import windowCafeTall from '@/public/media/window-cafe-tall.jpg'
import SectionHeading from '@/components/SectionHeading'

const included = [
  {
    title: 'Unlimited plushie prizes',
    description: 'Every play wins. We keep the cabinet stocked for the whole booking.',
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
    description: 'The machine pulls a line on its own. No host or attendant needed.',
  },
]

export default function RentalIncluded() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_340px] gap-14 lg:gap-20 items-center">
        <div>
          <SectionHeading
            title={
              <>
                Everything you need, <span className="highlight-gold">included</span>.
              </>
            }
            className="mb-12"
          />
          <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
            {included.map((item) => (
              <div key={item.title} className="border-t-4 border-brand-gold pt-4">
                <dt className="font-display text-2xl font-bold text-brand-navy mb-1.5">
                  {item.title}
                </dt>
                <dd className="text-brand-navy/65 leading-relaxed">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* A compact Super Mini, not the full-size cabinet */}
        <figure className="justify-self-center lg:justify-self-end w-full max-w-[340px] lg:mr-[10px]">
          <div className="photo-frame aspect-[3/4]">
            <Image
              src={windowCafeTall}
              alt="A compact purple-lit California Claw machine by a café window, two axolotl plushies in the display box on top"
              fill
              sizes="340px"
              placeholder="blur"
              className="object-cover object-[50%_30%]"
            />
          </div>
          <figcaption className="mt-5 text-sm text-brand-navy/70 border-l-2 border-brand-gold pl-3">
            The compact Super Mini.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
