'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'
import Button from '@/components/common/Button'

export default function RewardSection() {
  return (
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
            Earn <GradientText>Rewards</GradientText> on Every Purchase
          </motion.h1>

          <motion.p
            className="text-xl mb-8"
            style={{ color: 'var(--color-text-secondary)' }}
            variants={fadeInUp}
          >
            모든 거래에서 최대 3% 캐시백을 받으세요.
            <br />
            사용할수록 더 많은 리워드가 쌓입니다.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button variant="primary" size="lg">
              Start Earning
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
