'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Card from '@/components/common/Card'

const features = [
  {
    title: 'Global Acceptance',
    description: '전 세계 200개 이상의 국가에서 자유롭게 사용하세요',
    icon: '🌍',
  },
  {
    title: 'Premium Rewards',
    description: '모든 구매에 대해 최대 3% 캐시백을 받으세요',
    icon: '💎',
  },
  {
    title: 'No Foreign Fees',
    description: '해외 결제 시 추가 수수료가 없습니다',
    icon: '✈️',
  },
  {
    title: 'Metal Card',
    description: '프리미엄 메탈 소재의 고급스러운 카드',
    icon: '💳',
  },
  {
    title: 'Instant Notifications',
    description: '모든 거래에 대한 실시간 알림',
    icon: '⚡',
  },
  {
    title: 'Virtual Cards',
    description: '온라인 쇼핑을 위한 가상 카드 무제한 생성',
    icon: '🔒',
  },
]

export default function FeaturesBreakdown() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-background-secondary)' }}
    >
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Card Features
          </h2>
          <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
            특별함이 담긴 프리미엄 카드의 모든 것
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeInUp}>
              <Card className="p-6 h-full">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
