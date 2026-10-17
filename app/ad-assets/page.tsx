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
  'sf_peninsula-cover.jpg',
  'san_diego-cover.jpg',
]

export default function AdAssetsPage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <h1 className="text-xl font-semibold">Ad assets</h1>
      <p className="mt-2 text-sm">Hosted video files used by Meta ads. Not indexed.</p>
      <ul className="mt-6 space-y-2 text-sm">
        {files.map((f) => (
          <li key={f}>
            <a className="underline" href={`/ad-assets/${f}`}>
              {f}
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
