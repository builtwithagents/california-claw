import type { StaticImageData } from 'next/image'
import cityView from '@/public/media/city-view.jpg'
import cityView2 from '@/public/media/city-view-2.jpg'
import dinerArcade from '@/public/media/diner-arcade.jpg'
import dinerCorner from '@/public/media/diner-corner.jpg'
import pizzeriaCorner from '@/public/media/pizzeria-corner.jpg'
import pizzeriaWide from '@/public/media/pizzeria-wide.jpg'
import waterfallElephant from '@/public/media/waterfall-elephant.jpg'
import windowCafe from '@/public/media/window-cafe.jpg'
import windowCafeTall from '@/public/media/window-cafe-tall.jpg'

/**
 * Our own footage and photos, shared by the interior pages. Pages rotate
 * through these by index so neighbouring county or city pages don't lead
 * with the same clip. Captions describe only what is in frame.
 *
 * These lists feed heroes and feature photos, so they hold only the compact
 * Super Mini cabinets we place at businesses. The full-size Joy Catcher stays
 * out: leading with it suggests that's the machine a business will get.
 */

export type Clip = { name: string; label: string }
export type Photo = { src: StaticImageData; alt: string }

export const clips: Clip[] = [
  {
    name: 'purple-lounge',
    label: 'A purple-lit California Claw machine in a lounge, tilting up from the cabinet to the plush on top',
  },
  {
    name: 'diner',
    label: 'A green-lit California Claw machine beside arcade cabinets on a checkered diner floor',
  },
  {
    name: 'waterfall',
    label: 'A blue-lit California Claw machine in front of a waterfall mural',
  },
  {
    name: 'green-pizzeria',
    label: 'A neon-green California Claw machine in a pizzeria, packed with plush prizes',
  },
]

export const machinePhotos: Photo[] = [
  { src: pizzeriaWide, alt: 'A green-lit California Claw machine in the corner of a pizzeria, brick wall and mural behind it' },
  { src: windowCafeTall, alt: 'A purple-lit California Claw machine by a café window, two axolotl plushies on top' },
  { src: cityView, alt: 'A purple-lit California Claw machine beside a tall window with a city view' },
  { src: dinerCorner, alt: 'A green-lit California Claw machine in a diner window corner' },
  { src: waterfallElephant, alt: 'A blue-lit California Claw machine against a waterfall mural, an elephant plush on top' },
  { src: pizzeriaCorner, alt: 'A green-lit California Claw machine in a pizzeria corner with plush in the display box on top' },
]

export const eventPhotos = {
  pizzeriaWide: {
    src: pizzeriaWide,
    alt: 'A green-lit claw machine in the corner of a pizzeria, brick wall and mural behind it',
  },
  dinerArcade: {
    src: dinerArcade,
    alt: 'A green-lit claw machine next to a yellow crane machine and an arcade cabinet on a checkered floor',
  },
  windowCafe: {
    src: windowCafe,
    alt: 'A purple-lit claw machine by a café window with two axolotl plushies on top',
  },
  cityView2: {
    src: cityView2,
    alt: 'A purple-lit claw machine by a window, an orange plush and a white bunny in the display box on top',
  },
}

export function pick<T>(list: T[], index: number): T {
  return list[((index % list.length) + list.length) % list.length]
}
