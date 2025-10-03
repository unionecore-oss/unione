'use client'

import { motion } from 'framer-motion'
import { floatSlow, floatMedium, floatFast } from '@/lib/animations'

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Orb 1 - Large Purple with Glow */}
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
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.6) 0%, rgba(168, 85, 247, 0.4) 100%)',
            filter: 'blur(60px)',
            opacity: 0.8,
            boxShadow: '0 0 100px 40px rgba(139, 92, 246, 0.4)',
          }}
        />
      </motion.div>

      {/* Orb 2 - Large Blue with Glow */}
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
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.5) 0%, rgba(139, 92, 246, 0.3) 100%)',
            filter: 'blur(70px)',
            opacity: 0.7,
            boxShadow: '0 0 120px 50px rgba(99, 102, 241, 0.3)',
          }}
        />
      </motion.div>

      {/* Orb 3 - Extra Large Pink with Glow */}
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
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.5) 0%, rgba(99, 102, 241, 0.3) 100%)',
            filter: 'blur(80px)',
            opacity: 0.6,
            boxShadow: '0 0 140px 60px rgba(168, 85, 247, 0.3)',
          }}
        />
      </motion.div>
    </div>
  )
}
