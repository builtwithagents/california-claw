import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { posts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog — California Claw',
  description:
    'Tips and guides on claw machine rentals and free business placement across the San Francisco Bay Area and San Diego.',
  alternates: { canonical: '/blog' },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function BlogIndexPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  return (
    <>
      <section className="relative bg-brand-cream overflow-hidden">
        <div className="absolute inset-0 bg-confetti opacity-[0.1] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center">
          <div className="sticker text-sm px-4 py-1.5 mb-6 -rotate-1">FROM THE TEAM</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-5 leading-[1.05]">
            The California Claw <span className="highlight-gold">Blog</span>
          </h1>
          <p className="text-lg text-brand-navy/70 max-w-xl mx-auto">
            Guides on renting a claw machine for your event and placing one in your business —
            straight answers, no fluff.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto grid gap-6">
          {sorted.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card-fun p-7 sm:p-8 block group">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy bg-brand-gold/20 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-brand-navy/50">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
                <span className="text-xs text-brand-navy/50">{formatDate(post.publishedAt)}</span>
              </div>
              <h2 className="font-display text-2xl font-extrabold text-brand-navy mb-2">
                {post.title}
              </h2>
              <p className="text-brand-navy/60 leading-relaxed mb-4">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-brand-navy font-semibold text-sm underline decoration-brand-gold decoration-2 underline-offset-4 group-hover:decoration-4 transition-all">
                Read the article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
