import type { ReactNode } from 'react'

type Props = {
  /** Small kicker above the title. Rendered uppercase. */
  label?: string
  title: ReactNode
  /** Optional standfirst under the title. */
  lede?: ReactNode
  /** Navy sections invert the type colours. */
  tone?: 'light' | 'dark'
  /** Heading level, for pages where this sits under an existing h2. */
  as?: 'h2' | 'h3'
  className?: string
}

/**
 * The site's one section header: a gold rule, a small kicker, a left-aligned
 * title. It deliberately replaces the centred sticker-pill + oversized heading
 * that every section used to repeat.
 */
export default function SectionHeading({
  label,
  title,
  lede,
  tone = 'light',
  as: Tag = 'h2',
  className = '',
}: Props) {
  const dark = tone === 'dark'

  return (
    <header className={`max-w-2xl ${className}`}>
      {label && (
        <div className="flex items-center gap-3 mb-4">
          <span className="h-0.5 w-7 bg-brand-gold flex-shrink-0" aria-hidden="true" />
          <span
            className={`text-xs font-bold uppercase tracking-[0.18em] ${
              dark ? 'text-brand-gold' : 'text-brand-navy/45'
            }`}
          >
            {label}
          </span>
        </div>
      )}

      <Tag
        className={`font-display text-3xl sm:text-4xl font-extrabold leading-[1.12] ${
          dark ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </Tag>

      {lede && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? 'text-white/70' : 'text-brand-navy/60'
          }`}
        >
          {lede}
        </p>
      )}
    </header>
  )
}
