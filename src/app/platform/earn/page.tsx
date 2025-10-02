'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'
import Button from '@/components/common/Button'
import EarnOpportunities from '@/components/sections/platform/earn/EarnOpportunities'
import APYCalculator from '@/components/sections/platform/earn/APYCalculator'
import ComparisonTable from '@/components/sections/platform/earn/ComparisonTable'
import CTASection from '@/components/sections/home/CTASection'

export default function EarnPage() {
  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      {/* Hero */}
      <section className="section-padding hero-gradient">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: 'var(--color-text-primary)' }}
              variants={fadeInUp}
            >
              <GradientText>Earn</GradientText> While You Hold
            </motion.h1>

            <motion.p
              className="text-xl mb-8"
              style={{ color: 'var(--color-text-secondary)' }}
              variants={fadeInUp}
            >
              자산을 예치하고 최대 12%의 수익을 얻으세요.
              <br />
              안전하고 투명한 수익 창출 기회를 제공합니다.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button variant="primary" size="lg">
                Start Earning
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <EarnOpportunities />
      <APYCalculator />
      <ComparisonTable />
      <CTASection />
    </main>
  )
}
