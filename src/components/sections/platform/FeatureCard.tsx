'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import Card from '@/components/common/Card'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="p-6 h-full">
        <div className="text-4xl mb-4">{icon}</div>
        <h3
          className="text-xl font-bold mb-2"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {title}
        </h3>
        <p style={{ color: 'var(--color-text-secondary)' }}>{description}</p>
      </Card>
    </motion.div>
  )
}
