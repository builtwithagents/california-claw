import type { Metadata } from 'next'
import ContactPage from '@/components/ContactPage'

export const metadata: Metadata = {
  title: 'Book a Claw Machine for Your Event — California Claw',
  description:
    'Book a claw machine rental for your party, wedding, or corporate event. Unlimited plushie prizes, delivery, and setup across the San Francisco Bay Area and San Diego.',
  alternates: { canonical: '/book-an-event' },
}

export default function BookAnEventPage() {
  return <ContactPage kind="event" />
}
