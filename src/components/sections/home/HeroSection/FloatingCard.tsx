'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingCardProps {
  children: ReactNode
  delay?: number
}

export default function FloatingCard({ children, delay = 0 }: FloatingCardProps) {
  return (
    <motion.div
      className="card p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        },
      }}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  )
}
