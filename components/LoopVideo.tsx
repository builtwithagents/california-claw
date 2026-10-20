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
   * Above-the-fold clip: its poster is the page's LCP image, it plays as soon
   * as that poster has painted, and it uses the lighter `-sm` encode
   * (432px wide), since hero frames render at most ~310px wide.
   */
  priority?: boolean
}

type NetworkInfo = { saveData?: boolean; effectiveType?: string }

/**
 * Silent looping clip, built so it never slows the first paint.
 *
 * The poster is a normal optimised image (responsive, WebP/AVIF), so it is
 * what the visitor sees first and what Lighthouse measures as LCP. The video
 * has no source until it is needed: an above-the-fold clip starts right
 * after its poster paints, others when scrolled into view. Never for
 * reduced-motion, Save-Data or 2G visitors. It fades in over the poster once
 * it is actually playing.
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
    let attached = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!attached) {
            attached = true
            video.src = `/media/video/${name}${priority ? '-sm' : ''}.mp4`
          }
          video.play().catch(() => {})
        } else if (attached) {
          video.pause()
        }
      },
      // Hero clips start as soon as any of the frame is visible (on phones only
      // its top edge shows under the headline); others once a third is in view.
      { threshold: priority ? 0 : 0.35 },
    )

    const begin = () => observer.observe(video)
    // The hero clip waits only for its poster to paint, so the video never
    // competes with the LCP image but still starts almost immediately.
    const poster = video.previousElementSibling as HTMLImageElement | null
    let fallback: number | undefined
    if (priority && poster && !poster.complete) {
      poster.addEventListener('load', begin, { once: true })
      fallback = window.setTimeout(begin, 1500)
    } else {
      begin()
    }

    return () => {
      poster?.removeEventListener('load', begin)
      window.clearTimeout(fallback)
      observer.disconnect()
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
