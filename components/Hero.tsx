import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import joyCatcher from '@/public/joy-catcher.jpg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream">
      {/* Confetti dots, faded */}
      <div className="absolute inset-0 bg-confetti opacity-[0.13] pointer-events-none" />

      {/* Sun blob */}
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-gold/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="sticker text-sm px-4 py-1.5 mb-6 -rotate-1">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              100% free for your business
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 leading-[1.05] mb-6 tracking-tight">
              A claw machine.
              <br />
              For <span className="font-bold">free</span>. Really.
            </h1>

            <p className="text-xl text-brand-navy/70 leading-relaxed mb-8 max-w-lg">
              We place, stock, and maintain premium claw machines at cafés,
              restaurants, and campuses across the San Francisco Bay Area and San
              Diego. Your
              customers get the fun — you pay nothing, ever.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <a href="#contact" className="btn-gold px-8 py-4 text-lg">
                Get Your Free Machine
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#benefits" className="btn-outline px-8 py-4 text-lg">
                How It Works
              </a>
            </div>

            {/* Event rental path */}
            <Link
              href="/rent-a-claw-machine"
              className="inline-flex items-center gap-2 text-brand-navy font-semibold mb-10 group"
            >
              <span className="text-lg">🎉</span>
              Interested in renting one for an event?
              <span className="underline decoration-brand-gold decoration-2 underline-offset-4 group-hover:decoration-4 transition-all">
                Click here
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {['No contracts', 'No upfront costs', 'We handle everything'].map((badge) => (
                <span
                  key={badge}
                  className="text-sm font-semibold text-brand-navy/60 bg-white border-2 border-brand-navy/10 px-3 py-1.5 rounded-full"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Real machine photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[440px]">
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border-4 border-brand-navy shadow-[10px_10px_0_rgba(0,50,98,0.12)]">
                <Image
                  src={joyCatcher}
                  alt="Joy Catcher claw machine filled with plush prizes"
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 440px"
                  placeholder="blur"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating stickers */}
              <div className="absolute -top-4 -right-6 sticker bg-brand-gold px-4 py-2 text-sm rotate-6">
                FREE!
              </div>
              <div className="absolute -bottom-4 -left-6 sticker px-4 py-2 text-sm -rotate-3">
                🔧 Fully maintained
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy divider into next section */}
      <svg
        className="block w-full text-white"
        viewBox="0 0 1440 60"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,24 L1440,60 L0,60 Z" />
      </svg>
    </section>
  )
}
