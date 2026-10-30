'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type Props = {
  /** Path under /media/video, without extension. Expects .mp4 and .jpg poster. */
  name: string
  label: string
  /** Rendered width, so the poster is served at the right size. */
  sizes?: string
  className?: string
  /**
   * Above-the-fold clip: its poster is the page's LCP image, it starts a
   * moment after page load, and it uses the lighter `-sm` encode (432px wide), since hero frames render at most
   * ~310px wide.
   */
  priority?: boolean
}

/** Pause after page load before the hero clips start. */
const HERO_DELAY_MS = 600

type NetworkInfo = { saveData?: boolean; effectiveType?: string }

/**
 * Silent looping clip. Clips start playing on hydration with no scroll gating;
 * above-the-fold clips wait only for page load plus a short beat.
 *
 * The poster is a normal optimised image (responsive, WebP/AVIF), so it is
 * what the visitor sees first and what Lighthouse measures as LCP. The video
 * fades in over it once it is actually playing. Never plays for
 * reduced-motion, Save-Data or 2G visitors.
 */
export default function LoopVideo({
  name,
  label,
  sizes = '280px',
  className = '',
  priority = false,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const net = (navigator as Navigator & { connection?: NetworkInfo }).connection
    if (net?.saveData || /2g$/.test(net?.effectiveType ?? '')) return

    // Some React versions drop the muted attribute, which blocks autoplay.
    video.muted = true
    const start = () => {
      video.src = `/media/video/${name}${priority ? '-sm' : ''}.mp4`
      video.play().catch(() => {})
    }
    if (!priority) {
      start()
      return
    }

    // Above-the-fold clips wait for the page's own load event, then a beat
    // more, so the video bytes never compete with the LCP image.
    let timer: number | undefined
    const later = () => {
      timer = window.setTimeout(start, HERO_DELAY_MS)
    }
    if (document.readyState === 'complete') later()
    else window.addEventListener('load', later, { once: true })

    return () => {
      window.removeEventListener('load', later)
      window.clearTimeout(timer)
    }
  }, [name, priority])

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        src={`/media/video/${name}.jpg`}
        alt={label}
        fill
        sizes={sizes}
        quality={65}
        priority={priority}
        fetchPriority={priority ? 'high' : 'auto'}
        className="object-cover"
      />
      <video
        ref={ref}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          playing ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        onPlaying={() => setPlaying(true)}
      />
    </div>
  )
}
