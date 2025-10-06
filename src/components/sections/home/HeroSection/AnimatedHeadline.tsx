'use client'

import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/animations'

export default function AnimatedHeadline() {
  return (
    <div className="text-left max-w-5xl">
      <motion.h1
        className="font-bold mb-8"
        style={{
          fontSize: 'clamp(48px, 6vw, 80px)',
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          fontWeight: 800,
          overflow: 'visible',
        }}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: '#ffffff' }}
        >
          A new
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ color: '#ffffff' }}
        >
          Web3 payment
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ color: '#ffffff' }}
        >
          paradigm
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ color: '#ffffff' }}
        >
          in one platform
        </motion.div>
      </motion.h1>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mt-12"
      >
        <a
          href="/app"
          className="inline-flex items-center gap-3 px-10 py-5 text-xl font-bold rounded-full transition-all duration-300 group"
          style={{
            background: '#ffffff',
            color: '#000000',
          }}
        >
          Get Started
          <svg
            className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </motion.div>

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
