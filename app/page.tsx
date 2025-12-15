import Header from "@/components/header"
import Hero from "@/components/hero"
import LegacyCodebase from "@/components/legacy-codebase"
import TailoredStage from "@/components/tailored-stage"
import HowWeWork from "@/components/how-we-work"
import WhyChooseUs from "@/components/why-choose-us"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LegacyCodebase />
        <TailoredStage />
        <HowWeWork />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
