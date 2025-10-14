import RewardSection from '@/components/sections/platform/reward/RewardSection'
import RewardCalculator from '@/components/sections/platform/reward/RewardCalculator'
import AppDownloadSection from '@/components/sections/platform/reward/AppDownloadSection'

export default function RewardPage() {
  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <RewardSection />
      <RewardCalculator />
      <AppDownloadSection />
    </main>
  )
}
