import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const guides = [
  { title: 'Renting for a Wedding', href: '/blog/renting-a-claw-machine-for-a-wedding' },
  { title: 'Renting for a Birthday Party', href: '/blog/claw-machine-rental-for-a-birthday-party' },
  { title: 'Renting for the Office', href: '/blog/renting-a-claw-machine-for-the-office' },
  { title: 'How Much Does It Cost?', href: '/blog/how-much-does-it-cost-to-rent-a-claw-machine' },
]

export default function RelatedGuides() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="sticker text-xs px-4 py-1.5 mb-4 rotate-1">PLANNING GUIDES</div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">
            Planning for a specific occasion?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
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
