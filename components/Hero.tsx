import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import LoopVideo from '@/components/LoopVideo'
import pizzeriaPlush from '@/public/media/pizzeria-plush.jpg'

export default function Hero() {
  return (
    <section className="bg-brand-navy text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-14 lg:gap-24 items-center">
          <div className="max-w-xl">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.98] tracking-tight mb-6">
              A claw machine.
              <br />
              For <span className="text-brand-gold">free</span>.
              <br />
              Really.
            </h1>

            <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-9">
              We place, stock, and maintain claw machines at cafés, restaurants, and
              campuses across the San Francisco Bay Area and San Diego. You give us a
              corner and an outlet.
            </p>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <a href="#contact" className="btn-gold px-8 py-4 text-lg">
                Get a free machine
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/rent-a-claw-machine"
                className="font-semibold text-white underline decoration-brand-gold decoration-2 underline-offset-[6px] hover:text-brand-gold transition-colors"
              >
                Or rent one for a party
              </Link>
            </div>
          </div>

          {/* A real machine, running */}
          <div className="relative justify-self-center lg:justify-self-end w-[240px] sm:w-[280px] lg:w-[310px] lg:mr-[10px]">
            <div className="photo-frame aspect-[9/16]">
              <LoopVideo
                name="green-pizzeria"
                label="A neon-green California Claw machine in a pizzeria, packed with plush prizes"
                priority
              />
            </div>

            <div className="absolute -bottom-8 -left-14 sm:-left-20 w-[120px] sm:w-[150px] rotate-[-5deg]">
              <div className="relative aspect-square overflow-hidden border-4 border-white">
                <Image
                  src={pizzeriaPlush}
                  alt="Close-up of a claw machine stocked with pizza-slice and boba-cup plushies"
                  fill
                  sizes="150px"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
        The two ways in. Colour runs edge to edge, but the content sits on the
        same centred column as everything else, so it holds at any width.
      */}
      <div className="bg-brand-gold md:bg-[linear-gradient(90deg,#FDB515_50%,#001833_50%)]">
        <div className="max-w-6xl mx-auto md:px-6 lg:px-8 grid md:grid-cols-2">
          <a
            href="#contact"
            className="group bg-brand-gold text-brand-navy px-4 md:pl-0 md:pr-10 py-10 lg:py-12 flex flex-col"
          >
            <span className="font-display text-3xl lg:text-4xl font-extrabold leading-tight">
              For your business
            </span>
            <span className="mt-2 text-brand-navy/80 text-lg">
              $0 to you, ever. We stock it, fix it, and collect it if it isn&apos;t working out.
            </span>
            <span className="mt-6 inline-flex items-center gap-2 font-bold">
              Get a free machine
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <Link
            href="/rent-a-claw-machine"
            className="group bg-brand-navy-dark text-white px-4 md:pl-10 md:pr-0 py-10 lg:py-12 flex flex-col"
          >
            <span className="font-display text-3xl lg:text-4xl font-extrabold leading-tight">
              For your event
            </span>
            <span className="mt-2 text-white/70 text-lg">
              From $200, with unlimited prizes. Delivery and setup included.
            </span>
            <span className="mt-6 inline-flex items-center gap-2 font-bold text-brand-gold">
              See event rentals
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
