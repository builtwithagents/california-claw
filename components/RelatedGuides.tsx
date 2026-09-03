import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Audience } from '@/lib/posts'
import { getGuidesForAudience } from '@/lib/posts'

type Props = {
  /** Which side of the business these guides are for. */
  audience?: Audience
  eyebrow?: string
  heading?: string
  /** Omit to show every guide for the audience. */
  limit?: number
}

export default function RelatedGuides({
  audience = 'event',
  eyebrow = 'PLANNING GUIDES',
  heading = 'Planning for a specific occasion?',
  limit,
}: Props) {
  const guides = getGuidesForAudience(audience, limit)
  if (guides.length === 0) return null

  // Keep the last row full rather than stranding a single card on its own.
  const columns = guides.length % 4 === 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'

  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">{eyebrow}</div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">
            {heading}
          </h2>
        </div>
        <div className={`grid sm:grid-cols-2 ${columns} gap-4`}>
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/blog/${guide.slug}`}
              className="card-fun p-5 flex items-center justify-between gap-3 group"
            >
              <span className="font-semibold text-brand-navy text-sm">{guide.title}</span>
              <ArrowRight className="w-4 h-4 text-brand-navy/40 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
