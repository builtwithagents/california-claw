const machines = [
  {
    name: 'Classic Joy Catcher',
    emoji: '🎰',
    tagline: 'The crowd-pleaser',
    specs: [
      'Standard size',
      'Perfect for lobbies & waiting areas',
      'Mixed plush & novelty prizes',
      'Ideal for medium-traffic locations',
    ],
    badge: 'Most Popular',
    panel: 'bg-brand-sky/40',
    badgeStyle: 'bg-brand-navy text-white',
  },
  {
    name: 'Jumbo Catcher',
    emoji: '🏆',
    tagline: 'Go big or go home',
    specs: [
      'Extra-large capacity',
      'Premium oversized plush prizes',
      'Draws attention from across the room',
      'Best for high-traffic venues',
    ],
    badge: 'Best for Campuses',
    panel: 'bg-brand-gold/25',
    badgeStyle: 'bg-brand-gold text-brand-navy border-2 border-brand-navy',
  },
  {
    name: 'Mini Catcher',
    emoji: '✨',
    tagline: 'Compact. Mighty fun.',
    specs: [
      'Small footprint',
      'Mini prizes & keychains',
      'Ideal for countertop or tight spaces',
      'Great for cafes & boutiques',
    ],
    badge: 'Space Saver',
    panel: 'bg-brand-coral/15',
    badgeStyle: 'bg-brand-coral text-white',
  },
]

export default function Machines() {
  return (
    <section id="machines" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">OUR MACHINES</div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mb-4">
            Pick your player. <span className="highlight-gold">We cover the rest.</span>
          </h2>
          <p className="text-lg text-brand-navy/60 max-w-xl mx-auto">
            We curate the right machine for your space and your customers. All models
            are professionally maintained and restocked by our team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {machines.map((machine) => (
            <div key={machine.name} className="card-fun overflow-hidden">
              {/* Emoji display panel */}
              <div className={`${machine.panel} relative flex items-center justify-center h-40`}>
                <span className="text-7xl">{machine.emoji}</span>
                <span
                  className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${machine.badgeStyle}`}
                >
                  {machine.badge}
                </span>
              </div>

              <div className="p-7">
                <h3 className="font-display text-xl font-bold text-brand-navy mb-1">{machine.name}</h3>
                <p className="text-brand-navy/50 text-sm mb-5 italic">{machine.tagline}</p>

                <ul className="space-y-2">
                  {machine.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2 text-sm text-brand-navy/70">
                      <span className="text-brand-gold font-bold mt-0.5">✓</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-brand-navy/60 text-sm mt-10">
          Not sure which machine is right for your space?{' '}
          <a
            href="#contact"
            className="text-brand-navy font-bold underline decoration-brand-gold decoration-2 underline-offset-4 hover:decoration-4 transition-all"
          >
            We&apos;ll help you choose.
          </a>
        </p>
      </div>
    </section>
  )
}
