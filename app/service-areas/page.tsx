import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { regionGroups } from '@/lib/counties'
import { rentalCities } from '@/lib/rentalCities'
import { clips, machinePhotos, pick } from '@/lib/media'
import PageHero, { HeroLink } from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import LinkRows from '@/components/LinkRows'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Service Areas — California Claw',
  description:
    'Free claw machine placement and event rentals across the San Francisco Bay Area and San Diego. Find your county.',
  alternates: { canonical: '/service-areas' },
}

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Where we <span className="text-brand-gold">place machines</span>.
          </>
        }
        lede="Free placement and event rentals across the San Francisco Bay Area and San Diego. Pick your county for local details."
        clip={clips.find((c) => c.name === 'waterfall')}
        actions={
          <>
            <Link href="/get-a-free-machine" className="btn-gold px-8 py-4 text-lg">
              Get a free machine
              <ArrowRight className="w-5 h-5" />
            </Link>
            <HeroLink href="/rent-a-claw-machine">Or rent one for an event</HeroLink>
          </>
        }
      />

      {/* One section per region: a framed photo beside its county rows */}
      {regionGroups.map((region, i) => {
        const photo = pick(machinePhotos, i * 2)
        return (
          <section
            key={region.name}
            className={`section-padding ${i % 2 === 0 ? 'bg-white' : 'bg-brand-cream'}`}
          >
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start">
              <div className="hidden lg:block lg:mr-[10px]">
                <div className="photo-frame aspect-[3/4]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="300px"
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <SectionHeading title={`${region.name}.`} className="mb-8" />
                <LinkRows
                  rows={region.counties.map((c) => ({
                    href: `/${c.slug}`,
                    title: c.name,
                    note: c.description,
                  }))}
                />
              </div>
            </div>
          </section>
        )
      })}

      {/* Event rentals by city */}
      <section className="section-padding bg-brand-gold">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-start">
          <SectionHeading
            title="Renting for an event?"
            lede={
              <span className="text-brand-navy/80">
                We deliver, set up, and pick up rentals across both regions.
              </span>
            }
          />
          <ul className="border-t-4 border-brand-navy">
            {rentalCities.map((c) => (
              <li key={c.slug} className="border-b-2 border-brand-navy/20">
                <Link
                  href={`/rent-a-claw-machine/${c.slug}`}
                  className="group flex items-center justify-between gap-5 py-5 font-display text-xl font-bold text-brand-navy"
                >
                  Claw machine rentals in {c.city}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
