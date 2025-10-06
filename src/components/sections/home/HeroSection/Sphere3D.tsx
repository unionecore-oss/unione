'use client'

import { motion } from 'framer-motion'

export default function Sphere3D() {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at center, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto max-w-[600px] relative z-10"
        style={{
          filter: 'drop-shadow(0 0 60px rgba(139, 92, 246, 0.4))',
        }}
      >
        <source src="/sphere-logo.webm" type="video/webm" />
      </video>
    </motion.div>
  )
}
