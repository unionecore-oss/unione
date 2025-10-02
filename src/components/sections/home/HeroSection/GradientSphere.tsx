'use client'

import { motion } from 'framer-motion'

export default function GradientSphere() {
  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* Main Sphere */}
      <motion.div
        className="relative w-80 h-80 lg:w-96 lg:h-96"
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 360],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotateY: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Gradient Sphere with Glass Effect */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #FF006E 0%, #8B00FF 50%, #00D9FF 100%)',
            filter: 'blur(40px)',
            opacity: 0.6,
          }}
        />

        <div
          className="absolute inset-4 rounded-full backdrop-blur-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,0,110,0.9) 0%, rgba(139,0,255,0.9) 50%, rgba(0,217,255,0.7) 100%)',
            boxShadow: '0 20px 60px rgba(139, 0, 255, 0.4), inset 0 0 60px rgba(255,255,255,0.1)',
          }}
        >
          {/* Shine Effect */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)',
            }}
          />
        </div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.6)',
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 8)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Background Glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(139,0,255,0.15) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  )
}
