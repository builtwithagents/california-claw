import type { Metadata } from 'next'
import { Inter, Baloo_2 } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const baloo = Baloo_2({ subsets: ['latin'], variable: '--font-baloo', weight: ['600', '700', '800'] })

export const metadata: Metadata = {
  title: 'California Claw — Free Claw Machine Placement',
  description:
    'Premium claw machine services for universities, restaurants, and businesses across the San Francisco Bay Area and San Diego. Zero cost, full maintenance, maximum fun.',
  keywords: [
    'free claw machine',
    'claw machine placement',
    'arcade machine rental',
    'California entertainment',
    'vending machine',
    'campus entertainment',
  ],
  openGraph: {
    title: 'California Claw — Free Claw Machine Placement',
    description:
      'We install, maintain, and restock premium claw machines at your location — completely free.',
    url: 'https://californiaclaw.com',
    siteName: 'California Claw',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'California Claw — Free Claw Machine Placement',
    description: 'Free claw machines for your campus or business. We handle everything.',
  },
  metadataBase: new URL('https://californiaclaw.com'),
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'California Claw',
  alternateName: 'Coastal Vending Company DBA California Claw',
  url: 'https://californiaclaw.com',
  telephone: '+15105064159',
  email: 'team@californiaclaw.com',
  areaServed: [
    { '@type': 'Place', name: 'San Francisco Bay Area' },
    { '@type': 'Place', name: 'San Diego' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '09:00',
    closes: '21:00',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${baloo.variable}`}>
      <body className="bg-brand-cream text-brand-navy font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
