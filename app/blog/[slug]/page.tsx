import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'
import { ArrowLeft } from 'lucide-react'
import { posts, getPostBySlug, getRelatedPosts, audienceOf } from '@/lib/posts'
import PostBody from '@/components/PostBody'
import PlacementAreas from '@/components/PlacementAreas'

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

  const relatedPosts = getRelatedPosts(post.slug, 3)
  const isBusinessGuide = audienceOf(post) === 'business'

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

      <section className="bg-brand-cream border-b border-brand-navy/10">
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
            <SectionHeading
              label="Good to know"
              title="Frequently asked questions"
              className="mb-10"
            />
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

      {relatedPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto">
            <SectionHeading label="Keep reading" title="More guides" className="mb-8" />
            <div className="grid gap-4">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card-fun bg-brand-cream p-6 block">
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-1">{p.title}</h3>
                  <p className="text-brand-navy/60 text-sm">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {isBusinessGuide && <PlacementAreas />}
    </>
  )
}
