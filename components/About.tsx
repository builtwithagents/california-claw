import { Heart, Star, Users } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Joy-first',
    description: 'We believe every business deserves to be a place customers love visiting.',
  },
  {
    icon: Star,
    title: 'Reliability',
    description: 'Our machines are always stocked, always working, always bringing smiles.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We succeed when your customers keep coming back. Our goals are aligned.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative section-padding bg-brand-navy overflow-hidden">
      {/* Confetti dots on navy */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#FDB515 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">ABOUT US</div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Every day is a chance to{' '}
              <span className="text-brand-gold">spark joy</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              At California Claw, our mission is simple: bring fun and engaging experiences
              to campuses, restaurants, and businesses across the San Francisco Bay Area and San Diego. With a focus on
              reliability, quality, and unforgettable entertainment, we make it easy to add
              excitement to any space.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              We&apos;re a small, passionate team based in the San Francisco Bay Area. We started California
              Claw because we saw how much joy a simple claw machine brings — and we wanted
              to make that accessible to every business without the typical cost or hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-gold px-8 py-3.5">
                Work With Us
              </a>
              <a
                href="mailto:team@californiaclaw.com"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-brand-gold hover:text-brand-gold text-white font-bold px-8 py-3.5 rounded-full transition-colors"
              >
                Say Hello 👋
              </a>
            </div>
          </div>

          {/* Right: Values */}
          <div className="space-y-4">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="flex items-start gap-4 bg-white/5 border-2 border-white/10 hover:border-brand-gold/50 rounded-3xl p-5 transition-colors"
                >
                  <div className="w-11 h-11 rounded-2xl bg-brand-gold flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white mb-1">{v.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              )
            })}

            {/* Company badge */}
            <div className="bg-white/5 border-2 border-white/10 rounded-3xl p-5 text-center">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Legal name</p>
              <p className="text-white font-medium">Coastal Vending Company DBA California Claw</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
