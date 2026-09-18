import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import machineLobbyPalms from '@/public/machine-lobby-palms.jpg'
import prizePineapple from '@/public/prize-pineapple-plush.jpg'
import eventWinners from '@/public/event-winners-plushies.jpg'
const shots = [
  {
    src: machineLobbyPalms,
    alt: 'A claw machine beside a window with palm trees outside, holding Charmander, Poké Ball, and Mario cap plushies',
    caption: 'A lobby corner with palms out the window, Charmander watching over the display case.',
    position: 'object-top',
  },
  {
    src: prizePineapple,
    alt: 'A hand holding a smiling pineapple plushie in front of a claw machine full of boba-cup plushies',
    caption: 'One pineapple, straight out of the chute — with a wall of boba plush waiting behind it.',
    position: 'object-center',
  },
]
export default function RealPlacements() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Feature: a real grab, next to the pitch. Left-aligned on purpose. */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14">
          <div className="relative order-2 lg:order-1">
            <div className="photo-frame aspect-[3/2]">
              <Image
                src={eventWinners}
                alt="Three people holding plushies they won — two pink bunnies and a Pikachu — in front of a California Claw machine"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 sticker bg-brand-gold/95 px-3.5 py-1.5 text-xs">
              Three grabs, three winners
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              label="The real thing"
              title={
                <>
                  Our actual machines,
                  <br />
                  in <span className="highlight-gold">actual rooms</span>
                </>
              }
              className="mb-5"
            />
            <p className="text-lg text-brand-navy/70 leading-relaxed mb-4">
              No renders, no stock photos. These are California Claw machines on real
              floors — a pizzeria, a lobby, an event — stocked with the plush we buy and
              restock ourselves.
            </p>
            <p className="text-brand-navy/60 leading-relaxed mb-7">
              Every cabinet gets restocked on a schedule. When one runs low or a claw acts
              up, that&apos;s our problem to solve, not yours.
            </p>
            <Link href="#contact" className="btn-gold px-7 py-3.5">
              Get one for your space
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Photo wall */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {shots.map((shot) => (
            <figure key={shot.caption} className="group">
              <div className="photo-frame aspect-[2/3]">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  placeholder="blur"
                  className={`object-cover ${shot.position}`}
                />
              </div>
              <figcaption className="text-sm text-brand-navy/60 leading-relaxed mt-3 px-1">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
