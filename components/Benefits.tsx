import Image from 'next/image'
import cityView from '@/public/media/city-view-2.jpg'

const benefits = [
  {
    title: 'Free placement',
    description: 'No upfront cost, no rental fee. We bring the machine and set it up.',
  },
  {
    title: 'Full maintenance',
    description: 'Repairs, jams, and tech issues are ours. Your team never touches it.',
  },
  {
    title: 'Regular restocking',
    description: 'Fresh prizes on a schedule, so the cabinet always looks worth a play.',
  },
  {
    title: 'No hidden fees',
    description: 'From installation to prizes to service, your cost stays at zero.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-brand-navy-dark text-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_380px] gap-14 lg:gap-20 items-center">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.02] mb-5 max-w-lg">
            All the fun. <span className="text-brand-gold">None of the work.</span>
          </h2>
          <p className="text-lg text-white/70 mb-12 max-w-md">
            You give us a corner and an outlet. Everything after that is on us.
          </p>

          <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
            {benefits.map((item) => (
              <div key={item.title} className="border-t-4 border-brand-gold pt-4">
                <dt className="font-display text-2xl font-bold mb-1.5">{item.title}</dt>
                <dd className="text-white/65 leading-relaxed">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="justify-self-center lg:justify-self-end w-full max-w-[380px] lg:mr-[10px]">
          <div className="photo-frame aspect-[3/4]">
            <Image
              src={cityView}
              alt="A purple-lit claw machine by a window with a city view, an orange plush and a white bunny in the display box on top"
              fill
              sizes="380px"
              placeholder="blur"
              className="object-cover object-[50%_35%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
