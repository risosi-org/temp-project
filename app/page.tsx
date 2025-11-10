import { Hero } from "@/components/hero"
import { HighlightSection } from "@/components/highlight-section"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HighlightSection />
      <Features />
      <Pricing />
      <CTA />
    </main>
  )
}
