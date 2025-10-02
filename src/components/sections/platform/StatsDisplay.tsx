'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface StatItem {
  label: string
  value: string
}

interface StatsDisplayProps {
  stats: StatItem[]
}

export default function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-8"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      {stats.map((stat) => (
        <motion.div key={stat.label} className="text-center" variants={fadeInUp}>
          <div
            className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-pink-purple bg-clip-text text-transparent"
          >
            {stat.value}
          </div>
          <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
