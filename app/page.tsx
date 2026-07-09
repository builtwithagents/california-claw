import Hero from '@/components/Hero'
import TwoPaths from '@/components/TwoPaths'
import Stats from '@/components/Stats'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import Machines from '@/components/Machines'
import ServiceAreas from '@/components/ServiceAreas'
import About from '@/components/About'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <TwoPaths />
      <Stats />
      <Benefits />
      <HowItWorks />
      <Machines />
      <ServiceAreas />
      <About />
      <ContactSection />
    </>
  )
}
