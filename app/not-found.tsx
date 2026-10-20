import Link from 'next/link'
import PageHero from '@/components/PageHero'
import LinkRows from '@/components/LinkRows'

export default function NotFound() {
  return (
    <>
      <PageHero
        title={
          <>
            That one slipped out of the <span className="text-brand-gold">claw</span>.
          </>
        }
        lede="We couldn't find that page. It may have moved, or the link may be off by a letter."
        actions={
          <Link href="/" className="btn-gold px-8 py-4 text-lg">
            Back to home
          </Link>
        }
      />
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <LinkRows
            rows={[
              { href: '/get-a-free-machine', title: 'Get a free machine for your business' },
              { href: '/book-an-event', title: 'Book a claw machine for an event' },
              { href: '/blog', title: 'Read the blog' },
            ]}
          />
        </div>
      </section>
    </>
  )
}
