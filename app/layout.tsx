import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'California Claw — Free Claw Machine Placement',
  description:
    'Premium claw machine services for universities, restaurants, and businesses across California. Zero cost, full maintenance, maximum fun.',
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
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
