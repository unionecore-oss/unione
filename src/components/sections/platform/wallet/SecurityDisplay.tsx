'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'

export default function SecurityDisplay() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            <GradientText>Security</GradientText> You Can Trust
          </h2>
          <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
            은행급 암호화, 생체 인증, 실시간 모니터링으로
            <br />
            여러분의 자산을 안전하게 보호합니다.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
