'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import logo from '@/public/california-claw-logo.jpg'

const navLinks = [
  { label: 'Benefits', href: '/#benefits' },
  { label: 'Machines', href: '/#machines' },
  { label: 'Rent for Events', href: '/rent-a-claw-machine' },
  { label: 'About Us', href: '/#about' },
  { label: 'Service Areas', href: '/#service-areas' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-brand-navy/5 border-b-2 border-brand-navy/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-11 h-11 rounded-xl overflow-hidden bg-white group-hover:animate-wiggle">
              <Image
                src={logo}
                alt="California Claw logo"
                className="w-full h-full object-contain scale-[1.35]"
                priority
              />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-brand-navy">
              California <span className="text-brand-gold [-webkit-text-stroke:1px_#003262]">Claw</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-brand-navy/70 hover:text-brand-navy text-sm font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="/#contact" className="btn-gold px-5 py-2 text-sm">
              Get a Free Machine
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-brand-navy p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t-2 border-brand-navy/5 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-brand-navy/70 hover:text-brand-navy py-2 text-sm font-semibold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              className="btn-gold block px-5 py-3 text-sm text-center mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Machine
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
