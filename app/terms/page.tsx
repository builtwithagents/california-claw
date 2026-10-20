import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

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
      <PageHero
        back={{ href: '/', label: 'Back to home' }}
        title="Terms of service."
        lede="Last updated June 2026"
      />

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
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
