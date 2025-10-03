'use client'

import { motion } from 'framer-motion'
import { wordReveal, staggerContainer } from '@/lib/animations'

export default function AnimatedHeadline() {
  const words = [
    { text: 'A', gradient: false },
    { text: 'new', gradient: false },
    { text: 'Web3', gradient: true },
    { text: 'payment', gradient: true },
    { text: 'paradigm', gradient: true },
  ]

  const wordsLine2 = [
    { text: 'in', gradient: false },
    { text: 'one', gradient: false },
    { text: 'Unione', gradient: false },
    { text: 'platform.', gradient: false },
  ]

  return (
    <div className="text-left max-w-3xl">
      <motion.h1
        className="font-bold mb-8"
        style={{
          fontSize: 'clamp(48px, 6vw, 80px)',
          lineHeight: '1.15',
          letterSpacing: '-0.04em',
          fontWeight: 800,
          overflow: 'visible',
        }}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* First Line */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-2">
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordReveal}
              style={
                word.gradient
                  ? {
                      background:
                        'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      backgroundSize: '200% 200%',
                      animation: 'shimmer 3s linear infinite',
                    }
                  : { color: '#1d1d1f' }
              }
            >
              {word.text}
            </motion.span>
          ))}
        </div>

        {/* Second Line */}
        <div className="flex flex-wrap gap-3 md:gap-4">
          {wordsLine2.map((word, index) => (
            <motion.span
              key={index}
              variants={wordReveal}
              style={{ color: '#1d1d1f' }}
            >
              {word.text}
            </motion.span>
          ))}
        </div>
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
      `}</style>
    </div>
  )
}
