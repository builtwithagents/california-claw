import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
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
      <Stats />
      <Benefits />
      <HowItWorks />
      <ServiceAreas />
      <About />
      <RelatedGuides
        audience="business"
        eyebrow="BEFORE YOU ASK"
        heading="How free placement actually works"
      />
      <ContactSection />
    </>
  )
}
