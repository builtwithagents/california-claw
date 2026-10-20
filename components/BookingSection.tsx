import Image from 'next/image'
import type { ReactNode } from 'react'
import RequestForm from '@/components/RequestForm'
import { eventPhotos } from '@/lib/media'

/** Rental booking form over a darkened photo, matching the homepage contact. */
export default function BookingSection({
  title,
  lede,
  points,
  defaultCity,
  footer,
}: {
  title: ReactNode
  lede: ReactNode
  points: string[]
  defaultCity?: string
  footer?: ReactNode
}) {
  return (
    <section id="book" className="relative section-padding bg-brand-navy-dark overflow-hidden">
      <Image
        src={eventPhotos.pizzeriaWide.src}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        className="object-cover opacity-30"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy-dark/90 to-brand-navy-dark/60"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="text-white">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.02] mb-5">
            {title}
          </h2>
          <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-md">{lede}</p>
          <ul className="border-t border-white/20">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-baseline gap-3 py-4 border-b border-white/20 font-display text-lg font-bold"
              >
                <span className="w-2.5 h-2.5 bg-brand-gold flex-shrink-0 translate-y-[-2px]" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          {footer && <div className="mt-8 text-white/65 text-sm">{footer}</div>}
        </div>

        <div className="lg:mr-[10px]">
          <RequestForm defaultType="event" defaultCity={defaultCity} />
        </div>
      </div>
    </section>
  )
}
