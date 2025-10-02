'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Card from '@/components/common/Card'

const opportunities = [
  {
    title: 'Savings Account',
    apy: '4.5%',
    description: '안전하게 예치하고 수익을 얻으세요',
  },
  {
    title: 'Staking',
    apy: '8.0%',
    description: '암호화폐를 스테이킹하고 보상을 받으세요',
  },
  {
    title: 'Liquidity Pool',
    apy: '12.0%',
    description: '유동성을 제공하고 높은 수익을 얻으세요',
  },
]

export default function EarnOpportunities() {
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
          {opportunities.map((opp) => (
            <motion.div key={opp.title} variants={fadeInUp}>
              <Card className="p-6 h-full">
                <div
                  className="text-4xl font-bold mb-2 bg-gradient-pink-purple bg-clip-text text-transparent"
                >
                  {opp.apy}
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {opp.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>{opp.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
