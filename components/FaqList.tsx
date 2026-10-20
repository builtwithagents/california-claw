import { Plus } from 'lucide-react'
import type { ReactNode } from 'react'

type Faq = { q: string; a: ReactNode }

/**
 * Questions as an accordion on thick rules, not a stack of cards. Native
 * <details> keeps every answer in the HTML for crawlers and works without JS.
 */
export default function FaqList({ faqs, tone = 'light' }: { faqs: Faq[]; tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <div className={`border-t-4 ${dark ? 'border-brand-gold' : 'border-brand-navy'}`}>
      {faqs.map((faq, i) => (
        <details
          key={faq.q}
          className={`group border-b-2 ${dark ? 'border-white/15' : 'border-brand-navy/15'}`}
          open={i === 0}
        >
          <summary className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <h3
              className={`font-display text-xl font-bold leading-snug ${
                dark ? 'text-white' : 'text-brand-navy'
              }`}
            >
              {faq.q}
            </h3>
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center mt-0.5 transition-transform group-open:rotate-45">
              <Plus className="w-5 h-5" strokeWidth={3} />
            </span>
          </summary>
          <p
            className={`pb-6 pr-14 leading-relaxed ${dark ? 'text-white/70' : 'text-brand-navy/75'}`}
          >
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  )
}
