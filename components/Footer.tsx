import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'
import logo from '@/public/california-claw-logo.jpg'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Benefits', href: '/#benefits' },
  { label: 'Machines', href: '/#machines' },
  { label: 'Rent for Events', href: '/rent-a-claw-machine' },
  { label: 'About Us', href: '/#about' },
  { label: 'Service Areas', href: '/#service-areas' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-white">
                <Image
                  src={logo}
                  alt="California Claw logo"
                  className="w-full h-full object-contain scale-[1.35]"
                />
              </div>
              <span className="font-display text-white font-bold text-xl">
                California <span className="text-brand-gold">Claw</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Premium claw machine services for universities, restaurants, and businesses.
              Zero cost, maximum fun.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:team@californiaclaw.com"
                className="flex items-center gap-2 text-white/60 hover:text-brand-gold text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-gold" />
                team@californiaclaw.com
              </a>
              <a
                href="tel:+15105064159"
                className="flex items-center gap-2 text-white/60 hover:text-brand-gold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                (510) 506-4159
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-display text-white font-bold mb-4">Ready to get started?</h3>
            <p className="text-white/60 text-sm mb-5">
              Apply for a free claw machine at your location today. We&apos;ll handle everything.
            </p>
            <a href="/#contact" className="btn-gold text-sm px-6 py-3">
              Get a Free Machine →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Coastal Vending Company DBA California Claw. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
