import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import SectionHeading from '@/components/SectionHeading'
import PageHero from '@/components/PageHero'
import FaqList from '@/components/FaqList'
import LinkRows from '@/components/LinkRows'
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

      <PageHero
        back={{ href: '/blog', label: 'Back to blog' }}
        meta={
          <>
            <span className="font-bold text-brand-gold">{post.category}</span>
            <span aria-hidden="true"> · </span>
            {post.readTime}
            <span aria-hidden="true"> · </span>
            {formatDate(post.publishedAt)}
          </>
        }
        title={post.title}
      />

      <article className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <PostBody blocks={post.content} />
        </div>
      </article>

      {post.faqs.length > 0 && (
        <section className="section-padding bg-brand-cream">
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Frequently asked questions." className="mb-10" />
            <FaqList faqs={post.faqs} />
          </div>
        </section>
      )}

      {relatedPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="More guides." className="mb-8" />
            <LinkRows
              rows={relatedPosts.map((p) => ({ href: `/blog/${p.slug}`, title: p.title, note: p.excerpt }))}
            />
          </div>
        </section>
      )}

      {isBusinessGuide && <PlacementAreas />}
    </>
  )
}
