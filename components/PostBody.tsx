import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import type { PostBlock } from '@/lib/posts'

export default function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'p':
            return (
              <p key={i} className="text-lg text-brand-navy/75 leading-relaxed">
                {block.text}
              </p>
            )
          case 'h2':
            return (
              <h2
                key={i}
                className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy pt-4"
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
                    <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                    <span className="text-lg text-brand-navy/75 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )
          case 'callout':
            return (
              <div
                key={i}
                className="card-fun bg-brand-cream p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
              >
                <p className="text-brand-navy font-semibold">{block.text}</p>
                <Link href={block.cta.href} className="btn-gold px-6 py-3 flex-shrink-0 whitespace-nowrap">
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
