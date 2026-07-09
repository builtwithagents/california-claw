import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service — California Claw',
  description:
    'The terms that govern use of the California Claw website and our claw machine placement service.',
}

const sections = [
  {
    heading: 'About these terms',
    body: 'These terms govern your use of californiaclaw.com and our services. By using this site or requesting a machine, you agree to these terms. California Claw is a trade name of Coastal Vending Company.',
  },
  {
    heading: 'Our service',
    body: 'We place, install, maintain, and restock claw machines at approved locations at no cost to the host business. Machines remain the property of Coastal Vending Company at all times. Placement is subject to our review and approval of your location.',
  },
  {
    heading: 'No cost, no long-term contract',
    body: 'There are no rental fees or upfront costs to host a machine. Either party may end the arrangement with reasonable notice. We will coordinate removal of the machine at a mutually convenient time.',
  },
  {
    heading: 'Host responsibilities',
    body: 'Hosts agree to provide a safe, accessible location with a standard power outlet and reasonable access for our team to service and restock the machine. Hosts should notify us promptly of any damage, malfunction, or safety concern.',
  },
  {
    heading: 'Limitation of liability',
    body: 'Our service is provided "as is." To the extent permitted by law, Coastal Vending Company is not liable for indirect or incidental damages arising from use of our machines or this website. Nothing in these terms limits liability that cannot be excluded by law.',
  },
  {
    heading: 'Changes to these terms',
    body: 'We may update these terms from time to time. Continued use of the site or our services after changes take effect constitutes acceptance of the revised terms.',
  },
  {
    heading: 'Contact us',
    body: 'Questions about these terms? Email team@californiaclaw.com or call (510) 506-4159.',
  },
]

export default function TermsPage() {
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
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy">Terms of Service</h1>
          <p className="text-brand-navy/50 mt-3 text-sm">Last updated June 2026</p>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
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
