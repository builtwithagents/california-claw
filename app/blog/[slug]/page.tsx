import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'
import { posts, getPostBySlug } from '@/lib/posts'
import PostBody from '@/components/PostBody'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} — California Claw`,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const otherPosts = posts.filter((p) => p.slug !== post.slug)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { '@type': 'Organization', name: 'California Claw' },
    publisher: { '@type': 'Organization', name: 'California Claw' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className="relative bg-brand-cream overflow-hidden">
        <div className="absolute inset-0 bg-confetti opacity-[0.1] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-navy/60 hover:text-brand-navy text-sm font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy bg-brand-gold/20 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-brand-navy/50">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="text-xs text-brand-navy/50">{formatDate(post.publishedAt)}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <PostBody blocks={post.content} />
        </div>
      </article>

      {post.faqs.length > 0 && (
        <section className="section-padding bg-brand-cream">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="sticker text-xs px-4 py-1.5 mb-4 -rotate-1">GOOD TO KNOW</div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">
                Frequently asked questions
              </h2>
            </div>
            <div className="space-y-4">
              {post.faqs.map((faq) => (
                <div key={faq.q} className="card-fun p-6 bg-white">
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">{faq.q}</h3>
                  <p className="text-brand-navy/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {otherPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="sticker text-xs px-4 py-1.5 mb-6 -rotate-1">KEEP READING</div>
            <div className="grid gap-4">
              {otherPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card-fun bg-brand-cream p-6 block">
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-1">{p.title}</h3>
                  <p className="text-brand-navy/60 text-sm">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
