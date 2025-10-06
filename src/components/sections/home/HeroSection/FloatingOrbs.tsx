'use client'

import { motion } from 'framer-motion'
import { floatSlow, floatMedium, floatFast } from '@/lib/animations'

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Orb 1 - Neon Pink */}
      <motion.div
        className="absolute"
        style={{
          top: '15%',
          left: '10%',
          width: '350px',
          height: '350px',
        }}
        variants={floatSlow}
        initial="initial"
        animate="animate"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.2) 0%, rgba(255, 0, 255, 0.12) 100%)',
            filter: 'blur(70px)',
            opacity: 0.35,
            boxShadow: '0 0 100px 40px rgba(255, 0, 255, 0.15)',
          }}
        />
      </motion.div>

      {/* Orb 2 - Neon Cyan */}
      <motion.div
        className="absolute"
        style={{
          top: '55%',
          right: '15%',
          width: '400px',
          height: '400px',
        }}
        variants={floatMedium}
        initial="initial"
        animate="animate"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.18) 0%, rgba(0, 255, 255, 0.1) 100%)',
            filter: 'blur(80px)',
            opacity: 0.3,
            boxShadow: '0 0 100px 40px rgba(0, 255, 255, 0.12)',
          }}
        />
      </motion.div>

      {/* Orb 3 - Neon Purple */}
      <motion.div
        className="absolute"
        style={{
          top: '35%',
          right: '30%',
          width: '450px',
          height: '450px',
        }}
        variants={floatFast}
        initial="initial"
        animate="animate"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.16) 0%, rgba(139, 92, 246, 0.1) 100%)',
            filter: 'blur(90px)',
            opacity: 0.28,
            boxShadow: '0 0 110px 45px rgba(139, 92, 246, 0.12)',
          }}
        />
      </motion.div>
    </div>
  )
}
