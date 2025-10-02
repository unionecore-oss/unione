'use client'

import { motion } from 'framer-motion'
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'

const values = [
  {
    title: 'Speed',
    description: '빠른 거래 처리와 실시간 정산으로 비즈니스 속도를 높입니다.',
  },
  {
    title: 'Flexibility',
    description: '다양한 결제 수단과 맞춤형 솔루션으로 유연한 운영이 가능합니다.',
  },
  {
    title: 'Global Scale',
    description: '글로벌 인프라로 국경을 넘는 확장이 가능합니다.',
  },
]

export default function ValuePropositionSection() {
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
            Why <GradientText>UNIONE</GradientText>?
          </h2>
          <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
            더 나은 금융 경험을 위한 세 가지 핵심 가치
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {value.title}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
