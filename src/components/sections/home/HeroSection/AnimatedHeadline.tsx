'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'

export default function AnimatedHeadline() {
  return (
    <motion.h1
      className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-left max-w-5xl"
      style={{
        color: '#1d1d1f',
        lineHeight: '1.08',
        letterSpacing: '-0.025em',
        fontWeight: 700,
      }}
      variants={fadeInUp}
    >
      A new{' '}
      <span style={{
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        Web3 payment paradigm
      </span>
      <br />
      in one Unione platform.
    </motion.h1>
  )
}
