'use client'

import { motion } from 'framer-motion'
import { floatSlow, floatMedium, floatFast } from '@/lib/animations'

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Orb 1 - Subtle Purple */}
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
            background: 'linear-gradient(135deg, rgba(150, 102, 255, 0.12) 0%, rgba(139, 92, 246, 0.08) 100%)',
            filter: 'blur(70px)',
            opacity: 0.25,
            boxShadow: '0 0 80px 30px rgba(150, 102, 255, 0.1)',
          }}
        />
      </motion.div>

      {/* Orb 2 - Subtle Indigo */}
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
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(79, 70, 229, 0.08) 100%)',
            filter: 'blur(80px)',
            opacity: 0.22,
            boxShadow: '0 0 90px 35px rgba(99, 102, 241, 0.08)',
          }}
        />
      </motion.div>

      {/* Orb 3 - Subtle Violet */}
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
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(124, 58, 237, 0.06) 100%)',
            filter: 'blur(90px)',
            opacity: 0.2,
            boxShadow: '0 0 100px 40px rgba(139, 92, 246, 0.08)',
          }}
        />
      </motion.div>
    </div>
  )
}
