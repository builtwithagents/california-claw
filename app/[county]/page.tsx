import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, CheckCircle2, Phone, Mail } from 'lucide-react'
import { counties, getCountyBySlug } from '@/lib/counties'
import ContactSection from '@/components/ContactSection'

type Props = {
  params: Promise<{ county: string }>
}

export function generateStaticParams() {
  return counties.map((c) => ({ county: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { county: slug } = await params
  const county = getCountyBySlug(slug)
  if (!county) return {}

  return {
    title: `Free Claw Machines in ${county.name} — California Claw`,
    description: `California Claw provides free claw machine placement in ${county.name}. We install, maintain, and restock — zero cost to your business.`,
    openGraph: {
      title: `Free Claw Machines in ${county.name}`,
      description: county.description,
    },
  }
}

const benefits = [
  'Zero upfront cost or rental fees',
  'Professional installation included',
  'All repairs and maintenance handled',
  'Regular prize restocking on schedule',
  '24/7 customer support',
  'No long-term contracts required',
]

export default async function CountyPage({ params }: Props) {
  const { county: slug } = await params
  const county = getCountyBySlug(slug)

  if (!county) notFound()

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-cream min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-confetti opacity-[0.1] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <div className="sticker text-sm px-4 py-1.5 mb-6 -rotate-1">
            <MapPin className="w-4 h-4 text-brand-gold" />
            Now serving {county.city}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-6 leading-tight">
            Free Claw Machines in{' '}
            <span className="highlight-gold">{county.name}</span>
          </h1>
          <p className="text-xl text-brand-navy/70 mb-8 max-w-2xl mx-auto">
            {county.description} We handle everything — installation, maintenance,
            and restocking — at zero cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-gold px-8 py-3.5">
              Request a Free Machine
            </a>
            <Link href="/" className="btn-outline px-8 py-3.5">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits in this area */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-extrabold text-brand-navy text-center mb-12">
            Everything included, <span className="highlight-gold">nothing to pay</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="card-fun flex items-start gap-3 p-5">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-brand-navy/80">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Simple local contact strip */}
      <section className="bg-brand-navy py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
          <div className="flex items-center gap-3 text-white">
            <Phone className="w-5 h-5 text-brand-gold" />
            <a href="tel:+15105064159" className="hover:text-brand-gold transition-colors">
              (510) 506-4159
            </a>
          </div>
          <div className="flex items-center gap-3 text-white">
            <Mail className="w-5 h-5 text-brand-gold" />
            <a href="mailto:team@californiaclaw.com" className="hover:text-brand-gold transition-colors">
              team@californiaclaw.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
