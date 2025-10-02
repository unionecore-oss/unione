import RewardSection from '@/components/sections/platform/reward/RewardSection'
import RewardCalculator from '@/components/sections/platform/reward/RewardCalculator'
import CTASection from '@/components/sections/home/CTASection'

export default function RewardPage() {
  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <RewardSection />
      <RewardCalculator />
      <CTASection />
    </main>
  )
}
