import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy — California Claw',
  description:
    'How California Claw (Coastal Vending Company) collects, uses, and protects your information.',
}

const sections = [
  {
    heading: 'Information we collect',
    body: 'When you submit our contact form, we collect the details you provide: your name, email address, business or location name, phone number (optional), and any message you include. We do not require an account, and we do not collect payment information through this site.',
  },
  {
    heading: 'How we use your information',
    body: 'We use the information you submit solely to respond to your request, discuss machine placement, and provide our services. We may contact you by email, phone, or text using the details you provide.',
  },
  {
    heading: 'How we share information',
    body: 'We do not sell or rent your personal information. We share it only with service providers that help us operate — for example, our email delivery provider — and only to the extent needed to respond to you. We may disclose information if required by law.',
  },
  {
    heading: 'Data retention',
    body: 'We keep contact submissions for as long as needed to serve you and maintain our business records. You can ask us to delete your information at any time.',
  },
  {
    heading: 'Your choices',
    body: 'You may request access to, correction of, or deletion of your personal information by emailing us. You can also opt out of further communication at any time.',
  },
  {
    heading: 'Contact us',
    body: 'Questions about this policy? Email team@californiaclaw.com or call (510) 506-4159.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <section className="relative bg-brand-cream pt-32 pb-14 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-confetti opacity-[0.1] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-navy/60 hover:text-brand-navy text-sm font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy">Privacy Policy</h1>
          <p className="text-brand-navy/50 mt-3 text-sm">Last updated June 2026</p>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-navy/70 leading-relaxed mb-10">
            This Privacy Policy explains how Coastal Vending Company (DBA California Claw)
            handles information collected through californiaclaw.com.
          </p>
          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy mb-2">{s.heading}</h2>
                <p className="text-brand-navy/70 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
