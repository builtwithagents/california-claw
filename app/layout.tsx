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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${baloo.variable}`}>
      <body className="bg-brand-cream text-brand-navy font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
