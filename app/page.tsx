import Hero from '@/components/Hero'
import RealPlacements from '@/components/RealPlacements'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import ServiceAreas from '@/components/ServiceAreas'
import About from '@/components/About'
import ContactSection from '@/components/ContactSection'
import RelatedGuides from '@/components/RelatedGuides'

export default function Home() {
  return (
    <>
      <Hero />
      <RealPlacements />
      <Benefits />
      <HowItWorks />
      <ServiceAreas />
      <About />
      <RelatedGuides
        audience="business"
        eyebrow="Before you ask"
        heading="How free placement actually works"
      />
      <ContactSection />
    </>
  )
}
