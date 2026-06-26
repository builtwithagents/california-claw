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
    <section id="about" className="section-padding bg-hero-gradient">
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-violet-700/10 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-3">
              About Us
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              We believe every day is a chance to{' '}
              <span className="text-gradient">spark joy</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              At California Claw, our mission is simple: bring fun and engaging experiences
              to campuses, restaurants, and businesses across California. With a focus on
              reliability, quality, and unforgettable entertainment, we make it easy to add
              excitement to any space.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              We&apos;re a small, passionate team based in the Bay Area. We started California
              Claw because we saw how much joy a simple claw machine brings — and we wanted
              to make that accessible to every business without the typical cost or hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
              >
                Work With Us
              </a>
              <a
                href="mailto:team@californiaclaw.com"
                className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
              >
                Say Hello
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
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{v.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              )
            })}

            {/* Company badge */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Legal name</p>
              <p className="text-white font-medium">Coastal Vending Company DBA California Claw</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
