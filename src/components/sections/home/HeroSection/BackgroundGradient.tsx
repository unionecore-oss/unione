'use client'

import { motion } from 'framer-motion'

export default function BackgroundGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Elegant Dark Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />

      {/* Neon Gradient Animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 15% 30%, rgba(0, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(177, 0, 255, 0.25) 0%, transparent 55%)',
            'radial-gradient(circle at 70% 40%, rgba(255, 0, 128, 0.3) 0%, transparent 55%), radial-gradient(circle at 30% 80%, rgba(0, 255, 255, 0.25) 0%, transparent 50%)',
            'radial-gradient(circle at 15% 30%, rgba(0, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(177, 0, 255, 0.25) 0%, transparent 55%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Neon Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
    </div>
  )
}
