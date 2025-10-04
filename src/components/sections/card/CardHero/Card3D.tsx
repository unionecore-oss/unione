'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Card3D() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <motion.div
        className="relative w-full max-w-md aspect-[1.586/1] rounded-2xl overflow-hidden"
        style={{
          boxShadow: 'var(--shadow-soft-lg)',
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          rotateY: 5,
          rotateX: 5,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Card Image */}
        <Image
          src="/cardlogo.jpeg"
          alt="UNIONE Card"
          fill
          className="object-cover"
          priority
        />

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>
    </div>
  )
}
