'use client'

import { motion } from 'framer-motion'

export default function BackgroundGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Stripe-Style Dark Gradient Base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #1a1a2e 0%, #0f0f1e 75%)',
        }}
      />

      {/* Subtle Purple Accent Gradients */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(150, 102, 255, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.06) 0%, transparent 50%)',
            'radial-gradient(circle at 60% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 50%), radial-gradient(circle at 40% 70%, rgba(150, 102, 255, 0.06) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, rgba(150, 102, 255, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.06) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: [0.215, 0.61, 0.355, 1],
        }}
      />

      {/* Subtle Glow Layer */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(150, 102, 255, 0.05) 0%, transparent 70%)',
        }}
      />

      {/* Glassmorphism Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: 'blur(0.5px)',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.1) 50%, transparent 100%)',
        }}
      />
    </div>
  )
}
