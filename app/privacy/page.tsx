import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

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
      <PageHero
        back={{ href: '/', label: 'Back to home' }}
        title="Privacy policy."
        lede="Last updated June 2026"
      />

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-brand-navy/75 leading-relaxed mb-12">
            This Privacy Policy explains how Coastal Vending Company (DBA California Claw)
            handles information collected through californiaclaw.com.
          </p>
          <div className="border-t-4 border-brand-navy">
            {sections.map((s) => (
              <div key={s.heading} className="py-8 border-b-2 border-brand-navy/15">
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-2">{s.heading}</h2>
                <p className="text-brand-navy/75 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
