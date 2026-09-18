import SectionHeading from '@/components/SectionHeading'

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
            <SectionHeading
              tone="dark"
              label="About us"
              title={
                <>
                  Every day is a chance to{' '}
                  <span className="text-brand-gold">spark joy</span>
                </>
              }
              className="mb-6"
            />
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
              <a href="#contact" className="btn-gold px-8 py-3.5">
                Work with us
              </a>
              <a
                href="mailto:team@californiaclaw.com"
                className="inline-flex items-center justify-center border border-white/25 hover:border-brand-gold hover:text-brand-gold text-white font-bold px-8 py-3.5 rounded-full transition-colors"
              >
                Say hello
              </a>
            </div>
          </div>

          {/* Right: what we commit to */}
          <div className="lg:pt-4">
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

            <p className="mt-8 text-sm text-white/35">
              Coastal Vending Company, DBA California Claw
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
