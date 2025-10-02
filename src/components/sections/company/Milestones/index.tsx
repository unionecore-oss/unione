'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import Timeline from './Timeline'

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'UNIONE이 설립되어 핀테크 혁신의 여정을 시작했습니다.',
  },
  {
    year: '2021',
    title: 'Series A Funding',
    description: '$50M 규모의 시리즈 A 투자를 유치했습니다.',
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: '100개 이상의 국가로 서비스를 확장했습니다.',
  },
  {
    year: '2023',
    title: '1M Users Milestone',
    description: '누적 사용자 100만 명을 달성했습니다.',
  },
  {
    year: '2024',
    title: 'Platform Launch',
    description: '통합 플랫폼 서비스를 출시했습니다.',
  },
]

export default function Milestones() {
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
            Our Journey
          </h2>
          <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
            혁신과 성장의 발자취
          </p>
        </motion.div>

        <Timeline items={milestones} />
      </div>
    </section>
  )
}
