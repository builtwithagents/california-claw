import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'
import PageHero from '@/components/PageHero'
import { ArrowRight } from 'lucide-react'
import type { Post } from '@/lib/posts'
import { getBusinessPosts, getEventPosts } from '@/lib/posts'

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

/** One post as a ruled row: meta line, display-face title, excerpt. */
function PostRow({ post }: { post: Post }) {
  return (
    <li className="border-b-2 border-brand-navy/15">
      <Link href={`/blog/${post.slug}`} className="group grid sm:grid-cols-[1fr_auto] gap-x-8 gap-y-3 py-7">
        <div>
          <p className="text-sm text-brand-navy/60 mb-2">
            <span className="font-bold text-brand-navy">{post.category}</span>
            <span aria-hidden="true"> · </span>
            {post.readTime}
            <span aria-hidden="true"> · </span>
            {formatDate(post.publishedAt)}
          </p>
          <h3 className="font-display text-2xl sm:text-[1.7rem] font-extrabold text-brand-navy leading-tight mb-2 group-hover:text-brand-navy-light transition-colors">
            {post.title}
          </h3>
          <p className="text-brand-navy/70 leading-relaxed max-w-2xl">{post.excerpt}</p>
        </div>
        <span className="hidden sm:flex self-center w-11 h-11 rounded-full border-2 border-brand-navy items-center justify-center text-brand-navy group-hover:bg-brand-gold group-hover:border-brand-gold transition-colors">
          <ArrowRight className="w-5 h-5" />
        </span>
      </Link>
    </li>
  )
}

export default function BlogIndexPage() {
  const groups = [
    {
      key: 'Business Placement',
      heading: 'Getting a free machine placed',
      blurb:
        'How free placement works, what a machine earns, and whether it fits your kind of space.',
      posts: getBusinessPosts(),
    },
    {
      key: 'Rentals',
      heading: 'Renting for a party or event',
      blurb: 'Pricing, planning, and setup for parties, weddings, offices, and trade shows.',
      posts: getEventPosts(),
    },
  ].filter((g) => g.posts.length > 0)

  return (
    <>
      <PageHero
        title={
          <>
            The California Claw <span className="text-brand-gold">blog</span>.
          </>
        }
        lede="Guides on renting a claw machine for your event and placing one in your business. Straight answers, no fluff."
      />

      {groups.map((group, i) => (
        <section
          key={group.key}
          className={`section-padding ${i % 2 === 0 ? 'bg-white' : 'bg-brand-cream'}`}
        >
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,340px)_1fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <SectionHeading title={`${group.heading}.`} lede={group.blurb} />
            </div>
            <ul className="border-t-4 border-brand-navy">
              {group.posts.map((post) => (
                <PostRow key={post.slug} post={post} />
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  )
}
