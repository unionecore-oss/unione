'use client'

import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/animations'
import FeatureCard from '../FeatureCard'

const features = [
  {
    icon: '🔒',
    title: 'Secure Storage',
    description: '은행급 보안으로 자산을 안전하게 보관합니다',
  },
  {
    icon: '⚡',
    title: 'Instant Transfers',
    description: '실시간으로 빠르게 송금하세요',
  },
  {
    icon: '💱',
    title: 'Multi-Currency',
    description: '다양한 통화를 한 곳에서 관리하세요',
  },
]

export default function WalletFeatures() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-background-secondary)' }}
    >
      <div className="container-custom">
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
