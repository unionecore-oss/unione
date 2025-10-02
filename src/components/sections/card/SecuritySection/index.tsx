'use client'

import { motion } from 'framer-motion'
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'

const securityFeatures = [
  {
    title: 'Bank-Level Encryption',
    description: '모든 거래는 은행급 암호화로 보호됩니다',
  },
  {
    title: 'Real-time Fraud Detection',
    description: 'AI 기반 실시간 부정 거래 탐지 시스템',
  },
  {
    title: 'Biometric Authentication',
    description: '생체 인증으로 안전하게 승인하세요',
  },
  {
    title: 'Zero Liability Protection',
    description: '승인되지 않은 거래에 대한 100% 보호',
  },
]

export default function SecuritySection() {
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
            Your <GradientText>Security</GradientText> is Our Priority
          </h2>
          <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
            최고 수준의 보안 기술로 안전하게 보호됩니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex items-start gap-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--color-accent-pink), var(--color-accent-purple))',
                }}
              >
                <span className="text-white text-xl">🔒</span>
              </div>
              <div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
