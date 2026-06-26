import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Benefits', href: '/#benefits' },
  { label: 'Machines', href: '/#machines' },
  { label: 'About Us', href: '/#about' },
  { label: 'Service Areas', href: '/#service-areas' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                C
              </div>
              <span className="text-white font-semibold text-lg">California Claw</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Premium claw machine services for universities, restaurants, and businesses.
              Zero cost, maximum fun.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:team@californiaclaw.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                team@californiaclaw.com
              </a>
              <a
                href="tel:+15105064159"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-violet-400" />
                (510) 506-4159
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ready to get started?</h3>
            <p className="text-slate-400 text-sm mb-5">
              Apply for a free claw machine at your location today. We&apos;ll handle everything.
            </p>
            <a
              href="#contact"
              className="inline-block bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Get a Free Machine →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Coastal Vending Company DBA California Claw. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
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
