import Image from 'next/image'
import windowCafeTall from '@/public/media/window-cafe-tall.jpg'

/**
 * Concrete commitments rather than abstract "values" — each one restates a
 * promise the site makes elsewhere, so there is nothing here we don't already
 * stand behind.
 */

const commitments = [
  {
    title: 'We answer within 24 hours',
    description: 'Every request gets a real reply from a person, not an autoresponder.',
  },
  {
    title: 'We restock on a schedule',
    description: 'You never have to call us about an empty cabinet or a jammed claw.',
  },
  {
    title: 'You can end it whenever',
    description: 'No contracts, no notice period. If it stops working for you, we collect it.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative section-padding bg-brand-navy overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: who we are */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-[1.02] mb-6">
              A small team that <span className="text-brand-gold">likes a good grab</span>.
            </h2>
            <p className="text-lg text-white/75 leading-relaxed mb-5">
              We&apos;re a small team in the San Francisco Bay Area. We started California
              Claw because a claw machine turns a dead corner into the thing people
              remember about a shop — and most owners never get one because of the cost
              and the hassle.
            </p>
            <p className="text-white/55 leading-relaxed mb-8">
              So we removed both. We buy the machine, stock it, fix it, and split nothing
              out of your register. You give us a corner and an outlet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/about" className="btn-gold px-8 py-3.5">
                More about us
              </a>
              <a
                href="mailto:team@californiaclaw.com"
                className="btn-outline-light px-8 py-3.5"
              >
                Say hello
              </a>
            </div>
          </div>

          {/* Right: what we commit to */}
          <div className="lg:pt-4">
            <div className="photo-frame aspect-[16/10] mb-10 mr-[10px]">
              <Image
                src={windowCafeTall}
                alt="A purple-lit California Claw machine by a café window, two axolotl plushies on top"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                placeholder="blur"
                className="object-cover object-[50%_30%]"
              />
            </div>
            <dl className="border-t border-white/15">
              {commitments.map((c) => (
                <div key={c.title} className="py-6 border-b border-white/15">
                  <dt className="font-display text-xl font-bold text-white mb-1.5">
                    {c.title}
                  </dt>
                  <dd className="text-white/55 leading-relaxed">{c.description}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-sm text-white/60">
              Coastal Vending Company, DBA California Claw
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
