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
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto max-w-[600px]"
        style={{
          filter: 'drop-shadow(0 0 80px rgba(139, 92, 246, 0.5)) drop-shadow(0 0 120px rgba(255, 0, 255, 0.3))',
        }}
      >
        <source src="/sphere-logo.webm" type="video/webm" />
      </video>
    </motion.div>
  )
}
