import HeroSection from '@/components/sections/home/HeroSection'
import CardShowcase from '@/components/sections/home/CardShowcase'
import ProductGrid from '@/components/sections/home/ProductGrid'

export default function Home() {
  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <HeroSection />
      <CardShowcase />
      <ProductGrid />
    </main>
  )
}
