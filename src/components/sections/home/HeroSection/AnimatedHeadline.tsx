'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'

export default function AnimatedHeadline() {
  return (
    <motion.h1
      className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-left"
      style={{ color: 'var(--color-text-primary)' }}
      variants={fadeInUp}
    >
      A new <GradientText>Web3 payment paradigm</GradientText>
      <br />
      in one Unione platform.
    </motion.h1>
  )
}
