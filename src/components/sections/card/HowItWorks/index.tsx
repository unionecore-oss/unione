'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'

const steps = [
  {
    number: '01',
    title: 'Apply Online',
    description: '간단한 온라인 신청으로 3분 안에 완료하세요',
  },
  {
    number: '02',
    title: 'Get Approved',
    description: '실시간 심사를 통해 즉시 승인 결과를 확인하세요',
  },
  {
    number: '03',
    title: 'Receive Your Card',
    description: '프리미엄 메탈 카드를 7일 이내에 받아보세요',
  },
  {
    number: '04',
    title: 'Start Spending',
    description: '카드를 활성화하고 전 세계 어디서나 사용하세요',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding">
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
            How It <GradientText>Works</GradientText>
          </h2>
          <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
            4단계로 간단하게 시작하세요
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step) => (
            <motion.div key={step.number} className="text-center" variants={fadeInUp}>
              <div
                className="text-6xl font-bold mb-4 bg-gradient-pink-purple bg-clip-text text-transparent"
              >
                {step.number}
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {step.title}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
