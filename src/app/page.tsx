import HeroSection from '@/components/sections/home/HeroSection'
import CardShowcase from '@/components/sections/home/CardShowcase'
import FeaturesSection from '@/components/sections/home/FeaturesSection'
import ValuePropositionSection from '@/components/sections/home/ValuePropositionSection'
import CTASection from '@/components/sections/home/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <HeroSection />
      <CardShowcase />
      <FeaturesSection />
      <ValuePropositionSection />
      <CTASection />
    </main>
  )
}
