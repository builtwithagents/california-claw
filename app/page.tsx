import Hero from '@/components/Hero'
import VideoReel from '@/components/VideoReel'
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
      <VideoReel />
      <RealPlacements />
      <Benefits />
      <HowItWorks />
      <ServiceAreas />
      <About />
      <RelatedGuides
        audience="business"
        eyebrow=""
        heading="How free placement actually works"
      />
      <ContactSection />
    </>
  )
}
