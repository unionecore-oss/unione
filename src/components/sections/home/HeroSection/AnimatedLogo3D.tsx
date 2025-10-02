'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedLogo3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient Background Glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1],
        }}
      />

      {/* Main Logo Container */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <div className="relative">
          {/* Main Logo with Float Animation */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1],
            }}
          >
            <Image
              src="/unione-logo-3d.png"
              alt="UNIONE Logo"
              width={550}
              height={550}
              priority
              style={{
                filter: 'drop-shadow(0 20px 50px rgba(0, 0, 0, 0.12))',
              }}
            />
          </motion.div>

          {/* Bottom Shadow/Reflection */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 blur-2xl"
            style={{
              bottom: '-100px',
              width: '80%',
              height: '100px',
              background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.25) 0%, rgba(236, 72, 153, 0.15) 50%, transparent 80%)',
              transform: 'perspective(1000px) rotateX(60deg)',
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1],
            }}
          />

          {/* Accent Lights */}
          <motion.div
            className="absolute top-1/4 -right-20 w-40 h-40 blur-3xl rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2), transparent)',
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1],
              delay: 0.5,
            }}
          />

          <motion.div
            className="absolute bottom-1/4 -left-20 w-40 h-40 blur-3xl rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent)',
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1],
              delay: 1,
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}
