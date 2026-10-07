import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Audience } from '@/lib/posts'
import { getGuidesForAudience } from '@/lib/posts'
import SectionHeading from '@/components/SectionHeading'

type Props = {
  /** Which side of the business these guides are for. */
  audience?: Audience
  eyebrow?: string
  heading?: string
  /** Omit to show every guide for the audience. */
  limit?: number
  /** "cards" lays guides out in a grid; "list" condenses them into a single card. */
  variant?: 'cards' | 'list'
}

export default function RelatedGuides({
  audience = 'event',
  eyebrow = 'Planning guides',
  heading = 'Planning for a specific occasion?',
  limit,
  variant = 'cards',
}: Props) {
  const guides = getGuidesForAudience(audience, limit)
  if (guides.length === 0) return null

  // Keep the last row full rather than stranding a single card on its own.
  const columns = guides.length % 4 === 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'

  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label={eyebrow} title={heading} className="mb-8" />
        {variant === 'list' ? (
          <ul className="card-fun divide-y divide-brand-navy/10 overflow-hidden">
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/blog/${guide.slug}`}
                  className="flex items-center justify-between gap-4 px-6 py-5 group hover:bg-brand-cream/60 transition-colors"
                >
                  <span className="min-w-0">
                    <span className="block font-display font-bold text-brand-navy">{guide.title}</span>
                    <span className="block text-sm text-brand-navy/60 truncate">{guide.excerpt}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-brand-navy/40 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
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
        )}
      </div>
    </section>
  )
}
