'use client'

import { motion } from 'framer-motion'
import { wordReveal, staggerContainer } from '@/lib/animations'

export default function AnimatedHeadline() {
  return (
    <div className="text-left max-w-3xl">
      <motion.h1
        className="font-bold mb-8"
        style={{
          fontSize: 'clamp(56px, 6.5vw, 88px)',
          lineHeight: '1.15',
          letterSpacing: '-0.04em',
          fontWeight: 800,
          overflow: 'visible',
          color: '#ffffff',
        }}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        A new Web3 payment paradigm in one platform
      </motion.h1>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
        @keyframes neonPulse {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.8)) drop-shadow(0 0 40px rgba(177, 0, 255, 0.6));
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(0, 255, 255, 1)) drop-shadow(0 0 60px rgba(177, 0, 255, 0.9));
          }
        }
        @keyframes knockoutSlide {
          0% {
            background-position-y: 0%;
          }
          100% {
            background-position-y: 100%;
          }
        }
      `}</style>
    </div>
  )
}
