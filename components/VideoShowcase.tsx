import AdVideo from '@/components/AdVideo'
import SectionHeading from '@/components/SectionHeading'

const videos = {
  bay: {
    name: 'sf_peninsula-9x16-music',
    cover: 'sf_peninsula-cover',
    label: 'San Francisco & Peninsula placements',
  },
  sd: {
    name: 'san_diego-9x16-music',
    cover: 'san_diego-cover',
    label: 'San Diego placements',
  },
}

type Props = {
  /** Show only one region's video (county pages); omit to show both. */
  region?: 'bay' | 'sd'
}

export default function VideoShowcase({ region }: Props) {
  const list = region ? [videos[region]] : [videos.bay, videos.sd]

  return (
    <section className="section-padding bg-brand-navy">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-center">
          <SectionHeading
            tone="dark"
            label="See it in action"
            title={
              <>
                A machine in your corner, <span className="text-brand-gold">12 seconds</span>
              </>
            }
            lede="This is the actual cabinet we install. Tap the speaker for sound."
          />
          <div className={`grid gap-8 ${list.length > 1 ? 'sm:grid-cols-2' : ''}`}>
            {list.map((v) => (
              <AdVideo key={v.name} {...v} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
