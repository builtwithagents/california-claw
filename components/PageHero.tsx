import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import LoopVideo from '@/components/LoopVideo'
import type { Clip, Photo } from '@/lib/media'

type Props = {
  title: ReactNode
  lede?: ReactNode
  /** Buttons or links under the lede. */
  actions?: ReactNode
  /** A line of small facts above the title, e.g. a post's category and date. */
  meta?: ReactNode
  back?: { href: string; label: string }
  /** A portrait clip or photo on the right. Omit for text-only pages. */
  clip?: Clip
  photo?: Photo
}

/** Navy opener shared by every interior page, matching the homepage hero. */
export default function PageHero({ title, lede, actions, meta, back, clip, photo }: Props) {
  const hasMedia = Boolean(clip || photo)

  return (
    <section className="bg-brand-navy text-white overflow-hidden border-b-[6px] border-brand-gold">
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 ${
          hasMedia ? 'pb-16 lg:pb-20' : 'pb-14 sm:pb-16'
        }`}
      >
        <div
          className={
            hasMedia ? 'grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-center' : 'max-w-3xl'
          }
        >
          <div className="max-w-2xl">
            {back && (
              <Link
                href={back.href}
                className="inline-flex items-center gap-2 text-white/65 hover:text-brand-gold text-sm font-semibold mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {back.label}
              </Link>
            )}
            {meta && <div className="mb-5 text-sm text-white/65">{meta}</div>}

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.02] tracking-tight">
              {title}
            </h1>

            {lede && (
              <p className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed">{lede}</p>
            )}
            {actions && (
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">{actions}</div>
            )}
          </div>

          {hasMedia && (
            <div className="justify-self-center lg:justify-self-end w-[220px] sm:w-[260px] lg:w-[280px] lg:mr-[10px]">
              <div className="photo-frame aspect-[9/16]">
                {clip ? (
                  <LoopVideo
                    name={clip.name}
                    label={clip.label}
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 280px"
                    priority
                  />
                ) : (
                  photo && (
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      priority
                      sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 280px"
                      placeholder="blur"
                      className="object-cover"
                    />
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/** Secondary hero link: underlined, gold rule. */
export function HeroLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="font-semibold text-white underline decoration-brand-gold decoration-2 underline-offset-[6px] hover:text-brand-gold transition-colors"
    >
      {children}
    </Link>
  )
}
