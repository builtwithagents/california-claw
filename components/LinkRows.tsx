import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type Row = { href: string; title: string; note?: string }

/** A ruled list of links: display-face titles, arrow on the right. */
export default function LinkRows({
  rows,
  columns = false,
}: {
  rows: Row[]
  /** Two columns from md up, for longer lists. */
  columns?: boolean
}) {
  return (
    <ul className={`border-t-4 border-brand-navy ${columns ? 'md:grid md:grid-cols-2 md:gap-x-12' : ''}`}>
      {rows.map((row) => (
        <li key={row.href} className="border-b-2 border-brand-navy/15">
          <Link href={row.href} className="group flex items-center gap-5 py-5">
            <span className="flex-1">
              <span className="block font-display text-lg sm:text-xl font-bold text-brand-navy leading-snug group-hover:text-brand-navy-light transition-colors">
                {row.title}
              </span>
              {row.note && (
                <span className="block mt-1 text-sm text-brand-navy/70 leading-relaxed">{row.note}</span>
              )}
            </span>
            <span className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-brand-navy flex items-center justify-center text-brand-navy group-hover:bg-brand-gold group-hover:border-brand-gold transition-colors">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
