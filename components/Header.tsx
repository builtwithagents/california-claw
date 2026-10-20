'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { regionGroups } from '@/lib/counties'
import logo from '@/public/california-claw-logo.jpg'

// Service areas sits first as its own menu; About us goes last, right of Blog.
const navLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'About us', href: '/about' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false)
  const areasRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  // Every page opens on a navy hero, so the bar starts in light-on-dark.
  const onDark = !scrolled && !mobileOpen
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  // Hover opens the menu; a short delay on leave stops it flickering shut
  // while the cursor travels from the label down into the panel.
  const openAreas = () => {
    clearTimeout(closeTimer.current)
    setAreasOpen(true)
  }
  const closeAreasSoon = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setAreasOpen(false), 150)
  }

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  // Close menus on navigation.
  useEffect(() => {
    setAreasOpen(false)
    setMobileOpen(false)
    setMobileAreasOpen(false)
  }, [pathname])

  // Close the areas menu on an outside click or Escape.
  useEffect(() => {
    if (!areasOpen) return
    const onClick = (e: MouseEvent) => {
      if (!areasRef.current?.contains(e.target as Node)) setAreasOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAreasOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [areasOpen])

  const linkTone = onDark
    ? 'text-white/75 hover:text-brand-gold'
    : 'text-brand-navy/70 hover:text-brand-navy'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    // Pages can load already scrolled (refresh, /#contact links), so check now
    // rather than waiting for the first scroll event.
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-brand-navy/5 border-b border-brand-navy/5'
          : 'bg-brand-navy'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-11 h-11 overflow-hidden bg-white group-hover:animate-wiggle">
              <Image
                src={logo}
                alt="California Claw logo"
                width={88}
                height={88}
                className="w-full h-full object-contain scale-[1.35]"
                priority
              />
            </div>
            <span
              className={`font-display font-bold text-xl tracking-tight ${
                onDark ? 'text-white' : 'text-brand-navy'
              }`}
            >
              California{' '}
              <span className={onDark ? 'text-brand-gold' : 'text-brand-gold-dark'}>Claw</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Service areas: a click-to-open menu of every county */}
            <div
              ref={areasRef}
              className="relative"
              onMouseEnter={openAreas}
              onMouseLeave={closeAreasSoon}
              onFocus={openAreas}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) closeAreasSoon()
              }}
            >
              <button
                type="button"
                onClick={() => setAreasOpen((o) => !o)}
                aria-expanded={areasOpen}
                aria-controls="areas-menu"
                className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors ${linkTone}`}
              >
                Service areas
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {areasOpen && (
                // pt-5 instead of a margin, so the hover area has no gap in it
                <div id="areas-menu" className="absolute left-1/2 -translate-x-1/2 top-full pt-5 w-[520px]">
                <div className="bg-white p-7 shadow-[10px_10px_0_#FDB515] border-2 border-brand-navy">
                  <div className="grid grid-cols-[3fr_2fr] gap-8">
                    {regionGroups.map((region) => (
                      <div key={region.name}>
                        <p className="font-display text-lg font-extrabold text-brand-navy pb-2 mb-2 border-b-4 border-brand-navy">
                          {region.name}
                        </p>
                        <ul>
                          {region.counties.map((county) => (
                            <li key={county.slug}>
                              <Link
                                href={`/${county.slug}`}
                                onClick={() => setAreasOpen(false)}
                                className="block py-1.5 text-sm font-semibold text-brand-navy/75 hover:text-brand-navy hover:underline decoration-brand-gold decoration-2 underline-offset-4"
                              >
                                {county.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/service-areas"
                    onClick={() => setAreasOpen(false)}
                    className="mt-6 pt-5 border-t-2 border-brand-navy/15 flex items-center justify-between font-bold text-brand-navy group"
                  >
                    See all service areas
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${linkTone}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/book-an-event"
              className={`${onDark ? 'btn-outline-light' : 'btn-outline'} px-4 py-2 text-sm`}
            >
              Rent for an Event
            </Link>
            <Link href="/get-a-free-machine" className="btn-gold px-4 py-2 text-sm">
              Get a Free Machine
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-1 ${onDark ? 'text-white' : 'text-brand-navy'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-brand-navy/5 shadow-lg">
          <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <button
              type="button"
              onClick={() => setMobileAreasOpen((o) => !o)}
              aria-expanded={mobileAreasOpen}
              className="w-full flex items-center justify-between text-brand-navy py-2.5 text-base font-semibold"
            >
              Service areas
              <ChevronDown
                className={`w-5 h-5 transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileAreasOpen && (
              <div className="border-l-4 border-brand-gold pl-4 pb-2 space-y-4">
                {regionGroups.map((region) => (
                  <div key={region.name}>
                    <p className="font-display font-extrabold text-brand-navy mb-1">{region.name}</p>
                    <ul>
                      {region.counties.map((county) => (
                        <li key={county.slug}>
                          <Link
                            href={`/${county.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1.5 text-sm font-semibold text-brand-navy/70"
                          >
                            {county.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link
                  href="/service-areas"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-4"
                >
                  See all service areas
                </Link>
              </div>
            )}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-brand-navy py-2.5 text-base font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/book-an-event"
                className="btn-outline block px-5 py-3 text-sm text-center"
                onClick={() => setMobileOpen(false)}
              >
                Rent for an Event
              </Link>
              <Link
                href="/get-a-free-machine"
                className="btn-gold block px-5 py-3 text-sm text-center"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Machine
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
