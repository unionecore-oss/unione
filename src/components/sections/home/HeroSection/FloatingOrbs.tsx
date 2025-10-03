'use client'

import { motion } from 'framer-motion'
import { floatSlow, floatMedium, floatFast } from '@/lib/animations'

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Orb 1 - Large Cyan Neon with Glow */}
      <motion.div
        className="absolute"
        style={{
          top: '15%',
          left: '10%',
          width: '300px',
          height: '300px',
        }}
        variants={floatSlow}
        initial="initial"
        animate="animate"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.4) 0%, rgba(0, 200, 255, 0.25) 100%)',
            filter: 'blur(60px)',
            opacity: 0.5,
            boxShadow: '0 0 100px 40px rgba(0, 255, 255, 0.3)',
          }}
        />
      </motion.div>

      {/* Orb 2 - Large Pink Neon with Glow */}
      <motion.div
        className="absolute"
        style={{
          top: '60%',
          right: '15%',
          width: '350px',
          height: '350px',
        }}
        variants={floatMedium}
        initial="initial"
        animate="animate"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 0, 128, 0.35) 0%, rgba(255, 0, 200, 0.2) 100%)',
            filter: 'blur(70px)',
            opacity: 0.45,
            boxShadow: '0 0 120px 50px rgba(255, 0, 128, 0.25)',
          }}
        />
      </motion.div>

      {/* Orb 3 - Extra Large Purple Neon with Glow */}
      <motion.div
        className="absolute"
        style={{
          top: '35%',
          right: '25%',
          width: '400px',
          height: '400px',
        }}
        variants={floatFast}
        initial="initial"
        animate="animate"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(177, 0, 255, 0.35) 0%, rgba(139, 0, 255, 0.2) 100%)',
            filter: 'blur(80px)',
            opacity: 0.4,
            boxShadow: '0 0 140px 60px rgba(177, 0, 255, 0.25)',
          }}
        />
      </motion.div>
    </div>
  )
}
