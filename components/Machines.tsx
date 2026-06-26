const machines = [
  {
    name: 'Classic Joy Catcher',
    emoji: '🎰',
    tagline: 'The crowd-pleaser',
    specs: ['Standard size', 'Perfect for lobbies & waiting areas', 'Mixed plush & novelty prizes', 'Ideal for medium-traffic locations'],
    badge: 'Most Popular',
    gradient: 'from-[#003262] to-[#004d99]',
    borderColor: 'border-[#FDB515]/30',
  },
  {
    name: 'Jumbo Catcher',
    emoji: '🏆',
    tagline: 'Go big or go home',
    specs: ['Extra-large capacity', 'Premium oversized plush prizes', 'Draws attention from across the room', 'Best for high-traffic venues'],
    badge: 'Best for Campuses',
    gradient: 'from-[#FDB515] to-[#FFD060]',
    borderColor: 'border-[#FDB515]/40',
  },
  {
    name: 'Mini Catcher',
    emoji: '✨',
    tagline: 'Compact. Mighty fun.',
    specs: ['Small footprint', 'Mini prizes & keychains', 'Ideal for countertop or tight spaces', 'Great for cafes & boutiques'],
    badge: 'Space Saver',
    gradient: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-500/30',
  },
]

export default function Machines() {
  return (
    <section id="machines" className="section-padding bg-[#001833]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#FDB515] font-semibold text-sm uppercase tracking-wider mb-3">
            Our Machines
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Premium machines,{' '}
            <span className="text-gradient">zero investment</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            We curate the right machine for your space and your customers. All models
            are professionally maintained and restocked by our team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {machines.map((machine) => (
            <div
              key={machine.name}
              className={`card-hover relative bg-[#002244] border ${machine.borderColor} rounded-2xl overflow-hidden`}
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${machine.gradient}`} />

              <div className="p-7">
                {/* Badge */}
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${machine.gradient} ${machine.badge === 'Best for Campuses' ? 'text-[#001833]' : 'text-white'} mb-4`}>
                  {machine.badge}
                </span>

                {/* Emoji display */}
                <div className="text-6xl mb-4">{machine.emoji}</div>

                <h3 className="text-xl font-bold text-white mb-1">{machine.name}</h3>
                <p className="text-slate-400 text-sm mb-5 italic">{machine.tagline}</p>

                <ul className="space-y-2">
                  {machine.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-[#FDB515] mt-0.5">✓</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Not sure which machine is right for your space?{' '}
          <a href="#contact" className="text-[#FDB515] hover:text-[#FFD060] transition-colors underline underline-offset-2">
            We&apos;ll help you choose.
          </a>
        </p>
      </div>
    </section>
  )
}
