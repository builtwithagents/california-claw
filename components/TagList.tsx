import Link from 'next/link'

type Item = { label: string; href?: string }

/**
 * Neighbourhoods, event types and delivery areas as a columned list with a
 * gold square marker, instead of a cloud of rounded pills.
 */
export default function TagList({
  items,
  tone = 'light',
  columns = 'sm:columns-2 lg:columns-3',
}: {
  items: (Item | string)[]
  tone?: 'light' | 'dark' | 'gold'
  columns?: string
}) {
  const text =
    tone === 'dark' ? 'text-white' : 'text-brand-navy'
  const marker = tone === 'gold' ? 'bg-brand-navy' : 'bg-brand-gold'

  return (
    <ul className={`columns-2 ${columns} gap-x-10`}>
      {items.map((raw) => {
        const item = typeof raw === 'string' ? { label: raw } : raw
        return (
          <li key={item.label} className={`break-inside-avoid flex items-baseline gap-3 py-2 ${text}`}>
            <span className={`w-2 h-2 flex-shrink-0 translate-y-[-2px] ${marker}`} aria-hidden="true" />
            {item.href ? (
              <Link
                href={item.href}
                className={`font-display text-lg font-bold underline decoration-2 underline-offset-4 hover:decoration-4 transition-all ${
                  tone === 'gold' ? 'decoration-brand-navy' : 'decoration-brand-gold'
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-display text-lg font-bold">{item.label}</span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
