'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function NeonLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="relative"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Glow Background */}
      <div
        className="absolute inset-0 -m-20 opacity-80 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255, 0, 255, 0.6) 0%, rgba(139, 92, 246, 0.4) 40%, rgba(0, 255, 255, 0.3) 70%)',
          animation: 'neonPulse 4s ease-in-out infinite',
        }}
      />

      {/* Logo */}
      <motion.div
        animate={{
          rotateY: [0, 10, 0, -10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative z-10"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <Image
          src="/unione-image.png"
          alt="Unione Logo"
          width={600}
          height={600}
          className="w-full h-auto"
          style={{
            filter: 'drop-shadow(0 0 40px rgba(255, 0, 255, 0.8)) drop-shadow(0 0 80px rgba(0, 255, 255, 0.6))',
          }}
          priority
        />
      </motion.div>
    </motion.div>
  )
}
