import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { CaseStudies } from "@/components/case-studies"
import { Pricing } from "@/components/pricing"
import { About } from "@/components/about"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <CaseStudies />
        <Pricing />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
