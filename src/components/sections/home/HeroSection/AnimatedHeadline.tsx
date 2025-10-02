'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'

export default function AnimatedHeadline() {
  return (
    <motion.h1
      className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
      style={{ color: 'var(--color-text-primary)' }}
      variants={fadeInUp}
    >
      A full stack for the
      <br />
      <GradientText>full flow of money</GradientText>
    </motion.h1>
  )
}
