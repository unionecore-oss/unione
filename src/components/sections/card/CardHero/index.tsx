'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'
import Button from '@/components/common/Button'
import Card3D from './Card3D'

export default function CardHero() {
  return (
    <section className="section-padding min-h-[80vh] flex items-center hero-gradient">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: 'var(--color-text-primary)' }}
              variants={fadeInUp}
            >
              The <GradientText>Card</GradientText> for the Modern Era
            </motion.h1>

            <motion.p
              className="text-xl mb-8"
              style={{ color: 'var(--color-text-secondary)' }}
              variants={fadeInUp}
            >
              프리미엄 메탈 카드로 특별한 금융 경험을 시작하세요.
              <br />
              전 세계 어디서나 사용 가능하며, 최고의 보안과 리워드를 제공합니다.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Button variant="primary" size="lg">
                Apply Now
              </Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card3D />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
