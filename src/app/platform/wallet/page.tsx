'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'
import Button from '@/components/common/Button'
import WalletFeatures from '@/components/sections/platform/wallet/WalletFeatures'
import SecurityDisplay from '@/components/sections/platform/wallet/SecurityDisplay'
import CTASection from '@/components/sections/home/CTASection'

export default function WalletPage() {
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
              Your Digital <GradientText>Wallet</GradientText>
            </motion.h1>

            <motion.p
              className="text-xl mb-8"
              style={{ color: 'var(--color-text-secondary)' }}
              variants={fadeInUp}
            >
              안전하고 편리한 디지털 지갑으로 자산을 관리하세요.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button variant="primary" size="lg">
                Create Wallet
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <WalletFeatures />
      <SecurityDisplay />
      <CTASection />
    </main>
  )
}
