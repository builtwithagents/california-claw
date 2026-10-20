import type { ReactNode } from 'react'

type Props = {
  /**
   * Kept for call-site compatibility but no longer rendered: a small-caps
   * kicker above every heading is one of the stock "AI site" tells.
   */
  label?: string
  title: ReactNode
  /** Optional standfirst under the title. */
  lede?: ReactNode
  /** Navy and gold grounds invert or keep the type colours. */
  tone?: 'light' | 'dark'
  /** Heading level, for pages where this sits under an existing h2. */
  as?: 'h2' | 'h3'
  className?: string
}

/** The site's one section header: heavy, left-aligned, sentence case. */
export default function SectionHeading({
  title,
  lede,
  tone = 'light',
  as: Tag = 'h2',
  className = '',
}: Props) {
  const dark = tone === 'dark'

  return (
    <header className={`max-w-2xl ${className}`}>
      <Tag
        className={`font-display text-4xl sm:text-5xl font-extrabold leading-[1.02] ${
          dark ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </Tag>

      {lede && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? 'text-white/70' : 'text-brand-navy/70'
          }`}
        >
          {lede}
        </p>
      )}
    </header>
  )
}
