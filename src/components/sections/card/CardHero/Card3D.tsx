'use client'

import { motion } from 'framer-motion'

export default function Card3D() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <motion.div
        className="relative w-full max-w-md aspect-[1.586/1] rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, var(--color-accent-pink), var(--color-accent-purple))',
          boxShadow: 'var(--shadow-soft-lg)',
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          rotateY: 5,
          rotateX: 5,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Card Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          <div>
            <span className="text-white text-sm font-medium">UNIONE</span>
          </div>

          <div>
            <div className="text-white text-2xl font-mono tracking-wider mb-4">
              •••• •••• •••• 1234
            </div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-white/70 text-xs mb-1">Card Holder</div>
                <div className="text-white text-sm font-medium">YOUR NAME</div>
              </div>
              <div>
                <div className="text-white/70 text-xs mb-1">Expires</div>
                <div className="text-white text-sm font-medium">12/28</div>
              </div>
            </div>
          </div>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
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
