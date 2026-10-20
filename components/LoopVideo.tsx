'use client'

import { useEffect, useRef } from 'react'

type Props = {
  /** Path under /media/video, without extension. Expects .mp4 and .jpg poster. */
  name: string
  label: string
  className?: string
  priority?: boolean
}

/**
 * Silent looping clip. Plays only while on screen and never autoplays for
 * visitors who ask for reduced motion (they keep the poster frame).
 */
export default function LoopVideo({ name, label, className = '', priority = false }: Props) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    // Some React versions drop the muted attribute, which blocks autoplay.
    video.muted = true
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.35 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      className={`w-full h-full object-cover ${className}`}
      muted
      loop
      playsInline
      preload={priority ? 'auto' : 'none'}
      poster={`/media/video/${name}.jpg`}
      aria-label={label}
    >
      <source src={`/media/video/${name}.mp4`} type="video/mp4" />
    </video>
  )
}
