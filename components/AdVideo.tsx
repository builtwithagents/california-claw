'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

type Props = {
  /** File name inside /ad-assets, without extension, e.g. "sf_peninsula-9x16-music". */
  name: string
  /** Matching cover frame inside /ad-assets, without extension. */
  cover: string
  label: string
}

/**
 * The ad video, played inline. Nothing is downloaded until the player is near
 * the viewport, it autoplays muted and pauses off-screen, and it falls back to
 * the cover frame with native controls for reduced-motion / Save-Data users.
 */
export default function AdVideo({ name, cover, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null)
  const [src, setSrc] = useState<string | undefined>()
  const [muted, setMuted] = useState(true)
  const [manual, setManual] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection?.saveData
    if (reduceMotion || saveData) {
      setManual(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSrc((current) => current ?? `/ad-assets/${name}.mp4`)
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '200px 0px', threshold: 0.25 },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [name])

  return (
    <figure className="relative w-full max-w-[320px] mx-auto">
      <div className="photo-frame aspect-[9/16] bg-brand-navy">
        <video
          ref={ref}
          src={manual ? `/ad-assets/${name}.mp4` : src}
          poster={`/ad-assets/${cover}.jpg`}
          muted={muted}
          loop
          playsInline
          preload="none"
          controls={manual}
          aria-label={label}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      {!manual && (
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
          aria-pressed={!muted}
          className="absolute bottom-3 right-3 sticker w-11 h-11 justify-center"
        >
          {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      )}
      <figcaption className="text-sm text-brand-navy/60 mt-3 px-1">{label}</figcaption>
    </figure>
  )
}
