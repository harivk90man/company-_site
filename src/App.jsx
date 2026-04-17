import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Hero from './sections/Hero'

const Services = lazy(() => import('./sections/Services'))
const TechStack = lazy(() => import('./sections/TechStack'))
const Portfolio = lazy(() => import('./sections/Portfolio'))
const Stats = lazy(() => import('./sections/Stats'))
const Testimonials = lazy(() => import('./sections/Testimonials'))
const WhyChooseUs = lazy(() => import('./sections/WhyChooseUs'))
const Process = lazy(() => import('./sections/Process'))
const Industries = lazy(() => import('./sections/Industries'))
const CTA = lazy(() => import('./sections/CTA'))
const Contact = lazy(() => import('./sections/Contact'))
const FAQ = lazy(() => import('./sections/FAQ'))
const Blog = lazy(() => import('./sections/Blog'))

function SectionLoader() {
  return <div className="min-h-[200px]" />
}

export default function App() {
  return (
    <div className="min-h-screen bg-surface-950 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Services />
          <TechStack />
          <Portfolio />
          <Stats />
          <Testimonials />
          <WhyChooseUs />
          <Process />
          <Industries />
          <CTA />
          <Contact />
          <FAQ />
          <Blog />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
