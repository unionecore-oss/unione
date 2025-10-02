'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'

export default function CompanyVision() {
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
            Building the <GradientText>Future</GradientText> of Finance
          </motion.h1>

          <motion.p
            className="text-xl mb-12"
            style={{ color: 'var(--color-text-secondary)' }}
            variants={fadeInUp}
          >
            UNIONE은 더 나은 금융 경험을 만들기 위해 최선을 다하고 있습니다.
            <br />
            우리의 비전은 전 세계 모든 사람이 자유롭고 안전하게 금융 서비스를 이용하는 것입니다.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div
                className="text-4xl font-bold mb-2 bg-gradient-pink-purple bg-clip-text text-transparent"
              >
                1M+
              </div>
              <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Active Users
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div
                className="text-4xl font-bold mb-2 bg-gradient-pink-purple bg-clip-text text-transparent"
              >
                200+
              </div>
              <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Countries
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div
                className="text-4xl font-bold mb-2 bg-gradient-pink-purple bg-clip-text text-transparent"
              >
                $5B+
              </div>
              <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Transaction Volume
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
