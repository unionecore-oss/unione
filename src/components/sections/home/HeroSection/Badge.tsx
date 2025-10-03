'use client'

import { motion } from 'framer-motion'
import { badgePulse, fadeInUp } from '@/lib/animations'

export default function Badge() {
  return (
    <motion.div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <motion.span
        variants={badgePulse}
        animate="animate"
        className="text-lg"
      >
        🚀
      </motion.span>
      <span className="text-sm font-medium text-gray-700">
        Now in Beta
      </span>
    </motion.div>
  )
}
