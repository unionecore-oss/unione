import { HeroSection } from '@/components/ui/galaxy-interactive-hero-section'
import CardShowcase from '@/components/sections/home/CardShowcase'
import ProductGrid from '@/components/sections/home/ProductGrid'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <CardShowcase />
      <ProductGrid />
    </main>
  )
}
