import Hero from '../components/home/Hero'
import ServicesOverview from '../components/home/ServicesOverview'
import AboutUs from '../components/home/AboutUs'
import CaseStudy from '../components/home/CaseStudy'
import Contact from '../components/home/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutUs />
      <CaseStudy />
      <Contact />
      {/* Additional sections will be added here */}
    </>
  )
}
