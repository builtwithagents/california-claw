import type { Audience } from '@/lib/posts'
import { getGuidesForAudience } from '@/lib/posts'
import SectionHeading from '@/components/SectionHeading'
import LinkRows from '@/components/LinkRows'

type Props = {
  /** Which side of the business these guides are for. */
  audience?: Audience
  /** No longer rendered; kept so existing call sites still type-check. */
  eyebrow?: string
  heading?: string
  /** Omit to show every guide for the audience. */
  limit?: number
  /** Ground colour, so the section can sit between two white ones. */
  tone?: 'white' | 'sky'
}

export default function RelatedGuides({
  audience = 'event',
  heading = 'Planning for a specific occasion?',
  limit,
  tone = 'white',
}: Props) {
  const guides = getGuidesForAudience(audience, limit)
  if (guides.length === 0) return null

  return (
    <section className={`section-padding ${tone === 'sky' ? 'bg-brand-cream' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,340px)_1fr] gap-10 lg:gap-16 items-start">
        <SectionHeading title={heading} />
        <LinkRows
          rows={guides.map((g) => ({ href: `/blog/${g.slug}`, title: g.title }))}
          columns={guides.length > 4}
        />
      </div>
    </section>
  )
}
