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
  /** Above-the-fold clip: its poster is the page's LCP image. */
  priority?: boolean
}

type NetworkInfo = { saveData?: boolean; effectiveType?: string }

/**
 * Silent looping clip, built so it never slows the first paint.
 *
 * The poster is a normal optimised image (responsive, WebP/AVIF), so it is
 * what the visitor sees first and what Lighthouse measures as LCP. The video
 * has no source until it is needed: on screen, after the page has finished
 * loading for an above-the-fold clip, and never for reduced-motion, Save-Data
 * or 2G visitors. It fades in over the poster once it is actually playing.
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
            video.src = `/media/video/${name}.mp4`
          }
          video.play().catch(() => {})
        } else if (attached) {
          video.pause()
        }
      },
      { threshold: 0.35 },
    )

    const begin = () => observer.observe(video)
    // Hold the hero clip until everything the first paint needs has loaded.
    if (priority && document.readyState !== 'complete') {
      window.addEventListener('load', begin, { once: true })
    } else {
      begin()
    }

    return () => {
      window.removeEventListener('load', begin)
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
