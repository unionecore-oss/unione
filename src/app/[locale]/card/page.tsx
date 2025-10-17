import { Metadata } from 'next'
import CardHero from '@/components/sections/card/CardHero'
import FeaturesBreakdown from '@/components/sections/card/FeaturesBreakdown'
import HowItWorks from '@/components/sections/card/HowItWorks'

export const metadata: Metadata = {
  title: 'Premium Metal Card',
  description: '프리미엄 메탈 카드로 특별한 금융 경험을 시작하세요. 전 세계 어디서나 사용 가능하며, 최고의 보안과 리워드를 제공합니다.',
}

export default function CardPage() {
  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <CardHero />
      <FeaturesBreakdown />
      <HowItWorks />
    </main>
  )
}
