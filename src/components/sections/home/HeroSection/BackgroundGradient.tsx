'use client'

import { motion } from 'framer-motion'

export default function BackgroundGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Stripe-style Mesh Gradient Background (5-color animation) */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            // Frame 1: Purple & Pink dominant (더 진하게)
            'radial-gradient(circle at 15% 30%, rgba(99, 91, 255, 0.40) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(169, 96, 238, 0.35) 0%, transparent 55%), radial-gradient(circle at 50% 50%, rgba(144, 224, 255, 0.25) 0%, transparent 45%)',
            // Frame 2: Blue & Yellow accent
            'radial-gradient(circle at 70% 40%, rgba(144, 224, 255, 0.35) 0%, transparent 55%), radial-gradient(circle at 30% 80%, rgba(255, 203, 87, 0.30) 0%, transparent 50%), radial-gradient(circle at 50% 20%, rgba(99, 91, 255, 0.30) 0%, transparent 45%)',
            // Frame 3: Pink & Red blend
            'radial-gradient(circle at 40% 60%, rgba(169, 96, 238, 0.40) 0%, transparent 55%), radial-gradient(circle at 80% 30%, rgba(255, 51, 61, 0.28) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(144, 224, 255, 0.30) 0%, transparent 45%)',
            // Frame 4: Yellow & Purple mix
            'radial-gradient(circle at 60% 70%, rgba(255, 203, 87, 0.35) 0%, transparent 55%), radial-gradient(circle at 25% 40%, rgba(99, 91, 255, 0.38) 0%, transparent 50%), radial-gradient(circle at 75% 60%, rgba(169, 96, 238, 0.28) 0%, transparent 45%)',
            // Frame 5: Blue & Red accent
            'radial-gradient(circle at 50% 80%, rgba(144, 224, 255, 0.38) 0%, transparent 55%), radial-gradient(circle at 80% 50%, rgba(255, 51, 61, 0.30) 0%, transparent 50%), radial-gradient(circle at 30% 30%, rgba(255, 203, 87, 0.25) 0%, transparent 45%)',
            // Back to Frame 1
            'radial-gradient(circle at 15% 30%, rgba(99, 91, 255, 0.40) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(169, 96, 238, 0.35) 0%, transparent 55%), radial-gradient(circle at 50% 50%, rgba(144, 224, 255, 0.25) 0%, transparent 45%)',
          ],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background:
            'radial-gradient(circle at 15% 30%, rgba(99, 91, 255, 0.40) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(169, 96, 238, 0.35) 0%, transparent 55%), radial-gradient(circle at 50% 50%, rgba(144, 224, 255, 0.25) 0%, transparent 45%)',
        }}
      />

      {/* Grid Pattern Overlay (더 섬세하게) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/90" />
    </div>
  )
}
