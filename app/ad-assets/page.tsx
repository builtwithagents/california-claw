import PageHero from '@/components/PageHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ad assets',
  robots: { index: false, follow: false },
}

const files = [
  'sf_peninsula-9x16.mp4',
  'sf_peninsula-4x5.mp4',
  'san_diego-9x16.mp4',
  'san_diego-4x5.mp4',
  'sf_peninsula-9x16-music.mp4',
  'sf_peninsula-4x5-music.mp4',
  'san_diego-9x16-music.mp4',
  'san_diego-4x5-music.mp4',
  'sf_peninsula-cover.jpg',
  'san_diego-cover.jpg',
]

export default function AdAssetsPage() {
  return (
    <>
      <PageHero title="Ad assets." lede="Hosted video files used by Meta ads. Not indexed." />
      <section className="section-padding bg-white">
        <ul className="max-w-3xl mx-auto border-t-4 border-brand-navy">
          {files.map((f) => (
            <li key={f} className="border-b-2 border-brand-navy/15 py-3">
              <a
                className="font-semibold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-4"
                href={`/ad-assets/${f}`}
              >
                {f}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
