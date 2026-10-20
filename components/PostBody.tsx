import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { PostBlock } from '@/lib/posts'

const INLINE_LINK = /\[([^\]]+)\]\(([^)]+)\)/g

// Renders `[label](/href)` inside body copy as an internal link.
function withLinks(text: string) {
  const parts: React.ReactNode[] = []
  let last = 0
  let match: RegExpExecArray | null

  INLINE_LINK.lastIndex = 0
  while ((match = INLINE_LINK.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    parts.push(
      <Link
        key={`${match.index}-${match[2]}`}
        href={match[2]}
        className="font-semibold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-2 hover:decoration-4 transition-all"
      >
        {match[1]}
      </Link>
    )
    last = match.index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))

  return parts.length > 0 ? parts : text
}

export default function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'p':
            return (
              <p key={i} className="text-lg text-brand-navy/75 leading-relaxed">
                {withLinks(block.text)}
              </p>
            )
          case 'h2':
            return (
              <h2
                key={i}
                className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy leading-[1.08] pt-6"
              >
                {block.text}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={i} className="font-display text-xl font-bold text-brand-navy pt-2">
                {block.text}
              </h3>
            )
          case 'list':
            return (
              <ul key={i} className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 bg-brand-gold flex-shrink-0 mt-[0.6rem]" aria-hidden="true" />
                    <span className="text-lg text-brand-navy/75 leading-relaxed">
                      {withLinks(item)}
                    </span>
                  </li>
                ))}
              </ul>
            )
          case 'callout':
            return (
              <div
                key={i}
                className="bg-brand-gold p-6 sm:p-8 my-4 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
              >
                <p className="font-display text-xl font-bold text-brand-navy leading-snug">{block.text}</p>
                <Link href={block.cta.href} className="btn-navy self-start sm:self-auto px-6 py-3 flex-shrink-0 whitespace-nowrap">
                  {block.cta.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
