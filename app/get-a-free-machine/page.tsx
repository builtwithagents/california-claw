import type { Metadata } from 'next'
import ContactPage from '@/components/ContactPage'

export const metadata: Metadata = {
  title: 'Get a Free Claw Machine — California Claw',
  description:
    'Request a free claw machine for your business. We install, stock, and maintain it at no cost across the San Francisco Bay Area and San Diego.',
  alternates: { canonical: '/get-a-free-machine' },
}

export default function GetAFreeMachinePage() {
  return <ContactPage kind="machine" />
}
