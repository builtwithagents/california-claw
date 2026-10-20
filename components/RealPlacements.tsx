import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import pizzeriaPlush from '@/public/media/pizzeria-plush.jpg'
import cityView from '@/public/media/city-view.jpg'
import dinerClose from '@/public/media/diner-close.jpg'
import waterfallElephant from '@/public/media/waterfall-elephant.jpg'
import pizzeriaWide from '@/public/media/pizzeria-wide.jpg'
import windowCafe from '@/public/media/window-cafe.jpg'
import dinerArcade from '@/public/media/diner-arcade.jpg'
import plushDiner from '@/public/media/plush-diner.jpg'
import joyCatcherClose from '@/public/media/joy-catcher-close.jpg'

const shots = [
  {
    src: pizzeriaWide,
    alt: 'A green-lit claw machine in the corner of a pizzeria, brick wall and mural behind it',
    caption: 'A pizzeria corner, brick wall and all.',
  },
  {
    src: joyCatcherClose,
    alt: 'The pink-and-blue lit cabinet of the full-size Joy Catcher, piled with panda and cow plush',
    caption: 'Inside the Joy Catcher: pandas, cows, and a lot of pink light.',
  },
  {
    src: dinerArcade,
    alt: 'A green-lit claw machine next to a yellow crane machine and a classic arcade cabinet on a checkered floor',
    caption: 'Diner, checkered floor, a couple of arcade neighbours.',
    position: 'object-right',
  },
  {
    src: windowCafe,
    alt: 'A purple-lit claw machine by a café window with two axolotl plushies in the display box on top',
    caption: 'A café window, two axolotls on watch.',
  },
  {
    src: plushDiner,
    alt: 'Inside a claw machine: pandas, a green avocado plush, and a bunch of grapes in a heap',
    caption: 'Mixed plush, stocked to the glass.',
  },
  {
    src: waterfallElephant,
    alt: 'A blue-lit claw machine against a waterfall mural, an elephant plush in the display box on top',
    caption: 'Blue cabinet, mural wall, one very large elephant.',
  },
  {
    src: dinerClose,
    alt: 'A green-lit claw machine in a diner, an elephant and an axolotl plush in the display box on top',
    caption: 'Diner window seat, two plush on lookout.',
    position: 'object-top',
  },
  {
    src: pizzeriaPlush,
    alt: 'Close-up inside a claw machine: pizza-slice and boba-cup plushies piled against the glass',
    caption: 'Pizza slices and boba cups, piled to the glass.',
  },
]

export default function RealPlacements() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-center mb-20">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy leading-[1.02] mb-6">
              Our actual machines, in actual rooms.
            </h2>
            <p className="text-lg text-brand-navy/75 leading-relaxed mb-4">
              Every photo on this page is a California Claw machine on a real floor:
              a pizzeria, a diner, a tea house, a lounge with a city view. Stocked with
              plush we buy and restock ourselves.
            </p>
            <p className="text-brand-navy/65 leading-relaxed mb-8">
              When a cabinet runs low or a claw acts up, that&apos;s our problem to
              solve, not yours.
            </p>
            <Link href="/get-a-free-machine" className="btn-gold px-7 py-3.5">
              Get one for your space
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <figure className="justify-self-center lg:justify-self-end w-full max-w-[400px] lg:mr-[10px]">
            <div className="photo-frame aspect-[4/5]">
              <Image
                src={cityView}
                alt="A purple-lit California Claw machine beside a tall window with a city view, a panda and a dog plush in the display box on top"
                fill
                sizes="(max-width: 640px) 90vw, 400px"
                quality={70}
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-5 text-sm text-brand-navy/70 border-l-2 border-brand-gold pl-3">
              The compact Super Mini, in a lounge with a city view.
            </figcaption>
          </figure>
        </div>

        {/* Photo wall: one shared aspect ratio so every row sits level */}
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8">
          {shots.map((shot) => (
            <li key={shot.caption}>
              <figure>
                <div className="photo-plain aspect-[3/4]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 280px"
                    quality={65}
                    placeholder="blur"
                    className={`object-cover ${shot.position ?? 'object-center'}`}
                  />
                </div>
                <figcaption className="text-sm text-brand-navy/70 leading-relaxed mt-2.5 border-l-2 border-brand-gold pl-3">
                  {shot.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
