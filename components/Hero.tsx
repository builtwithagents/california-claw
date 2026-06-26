import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#003262]/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#FDB515]/8 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FDB515]/15 border border-[#FDB515]/30 text-[#FDB515] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              100% Free for your business
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
              Boost Fun.
              <br />
              <span className="text-gradient">Zero Cost.</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-lg">
              We place premium claw machines at your campus or business — and
              handle installation, maintenance, and restocking. You pay nothing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 btn-gold px-8 py-4 rounded-xl shadow-lg shadow-yellow-900/30 hover:-translate-y-0.5 hover:shadow-yellow-900/50"
              >
                Get Your Free Machine
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#FDB515]/50 hover:text-[#FDB515] text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                See How It Works
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {['✓ No contracts', '✓ No upfront costs', '✓ We handle everything'].map((badge) => (
                <span
                  key={badge}
                  className="text-sm text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Machine visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Machine card */}
              <div className="w-72 h-96 rounded-3xl bg-gradient-to-b from-[#002244] to-[#001222] border border-white/10 shadow-2xl overflow-hidden relative">
                {/* Top display */}
                <div className="absolute inset-x-4 top-4 h-16 rounded-xl bg-gradient-to-r from-[#003262] to-[#004d99] flex items-center justify-center border border-[#FDB515]/30">
                  <span className="text-[#FDB515] font-bold text-lg tracking-widest drop-shadow-sm">
                    JOY CATCHER
                  </span>
                </div>

                {/* Glass panel */}
                <div className="absolute inset-x-4 top-24 bottom-16 rounded-xl bg-gradient-to-b from-sky-900/30 to-[#001833]/60 border border-white/10 overflow-hidden">
                  {/* Prize pile */}
                  <div className="absolute inset-0 flex flex-wrap gap-2 p-3 items-end justify-center">
                    {['🧸', '🐻', '🦄', '🐸', '🐶', '🎀', '🐱', '🦊', '🐼', '🐨', '🎪', '🌟'].map(
                      (emoji, i) => (
                        <span
                          key={i}
                          className="text-2xl select-none"
                          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
                        >
                          {emoji}
                        </span>
                      )
                    )}
                  </div>
                  {/* Claw */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-0.5 h-8 bg-slate-400" />
                    <div className="flex gap-0.5">
                      <div className="w-1 h-4 bg-slate-300 rounded-b-full rotate-12 origin-top" />
                      <div className="w-1 h-4 bg-slate-300 rounded-b-full" />
                      <div className="w-1 h-4 bg-slate-300 rounded-b-full -rotate-12 origin-top" />
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="absolute inset-x-4 bottom-4 h-10 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 shadow-md shadow-red-900" />
                    <div className="w-6 h-6 rounded-full bg-[#FDB515] shadow-md shadow-yellow-900" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-6 rounded-full bg-slate-600" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-[#FDB515] text-[#001833] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-bounce">
                FREE!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#003262] border border-[#FDB515]/40 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg">
                ✓ Fully Maintained
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
