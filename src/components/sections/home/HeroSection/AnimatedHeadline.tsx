'use client'

import { motion } from 'framer-motion'
import { wordReveal, staggerContainer } from '@/lib/animations'

export default function AnimatedHeadline() {
  const words = [
    { text: 'A', gradient: false },
    { text: 'new', gradient: false },
    { text: 'Web3', gradient: true },
    { text: 'payment', gradient: true },
    { text: 'paradigm', gradient: false },
  ]

  const wordsLine2 = [
    { text: 'in', gradient: false },
    { text: 'one', gradient: false },
    { text: 'platform', gradient: false },
  ]

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
                      background: 'linear-gradient(135deg, #9666ff 0%, #6366f1 50%, #8b5cf6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      backgroundRepeat: 'repeat-y',
                      backgroundSize: '100% 200%',
                      animation: 'knockoutSlide 8s linear infinite',
                      filter: 'drop-shadow(0 0 15px rgba(150, 102, 255, 0.4))',
                    }
                  : {
                      color: '#e5e7eb',
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
                    }
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
              style={
                word.gradient
                  ? {
                      background: 'linear-gradient(135deg, #9666ff 0%, #6366f1 50%, #8b5cf6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      backgroundRepeat: 'repeat-y',
                      backgroundSize: '100% 200%',
                      animation: 'knockoutSlide 8s linear infinite',
                      filter: 'drop-shadow(0 0 15px rgba(150, 102, 255, 0.4))',
                    }
                  : {
                      color: '#e5e7eb',
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
                    }
              }
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
