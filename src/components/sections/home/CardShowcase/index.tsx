'use client'

import { motion } from 'framer-motion'
import { fadeInUp, slideInRight } from '@/lib/animations'

export default function CardShowcase() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-background-secondary)' }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Unione is the bridge between your crypto and the real world powered by a USDT card that works globally.
            </h2>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            className="relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            style={{ perspective: '1500px' }}
          >
            {/* Phone Frame */}
            <div className="relative mx-auto" style={{ maxWidth: '400px' }}>
              {/* Ambient Glow */}
              <div
                className="absolute -inset-20 opacity-40 blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
                }}
              />

              {/* Decorative Elements */}
              <motion.div
                className="absolute -left-8 top-1/4 w-4 h-4 rounded-full blur-sm"
                style={{ background: 'linear-gradient(135deg, #10B981, #34D399)' }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                  x: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className="absolute -right-4 top-1/3 w-3 h-3 rounded-full blur-sm"
                style={{ background: 'linear-gradient(135deg, #10B981, #34D399)' }}
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 1, 0.5],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.7,
                }}
              />

              {/* Phone Container with Enhanced Shadow */}
              <motion.div
                className="relative rounded-[3rem] overflow-hidden"
                style={{
                  boxShadow: '0 40px 80px rgba(0, 0, 0, 0.25), 0 20px 40px rgba(16, 185, 129, 0.15)',
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateY: [0, -3, 0, 3, 0],
                  rotateX: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Phone Screen */}
                <div
                  className="relative aspect-[9/19] p-3"
                  style={{
                    background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
                  }}
                >
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 mb-4">
                    <span className="text-white text-sm font-semibold tracking-tight">12:30</span>
                    <div className="flex gap-1.5 items-center">
                      <div className="flex gap-0.5">
                        <div className="w-0.5 h-3 bg-white/90 rounded-full" />
                        <div className="w-0.5 h-3.5 bg-white/80 rounded-full" />
                        <div className="w-0.5 h-4 bg-white/70 rounded-full" />
                        <div className="w-0.5 h-4.5 bg-white/60 rounded-full" />
                      </div>
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-white/80 relative">
                        <div className="absolute inset-0.5 bg-white/60 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Card UI */}
                  <div className="px-4 space-y-4">
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-white/60 text-sm">+ New Card</span>
                      <span className="text-white font-semibold">Card</span>
                      <span className="text-white/60 text-sm">•••• ••• 3907 (Virtual Card)</span>
                    </div>

                    {/* Green Card with Enhanced 3D effect */}
                    <motion.div
                      className="relative rounded-2xl p-6 overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #0D9488 0%, #10B981 50%, #34D399 100%)',
                        boxShadow: `
                          0 30px 60px rgba(16, 185, 129, 0.5),
                          0 15px 30px rgba(16, 185, 129, 0.3),
                          inset 0 1px 0 rgba(255, 255, 255, 0.2)
                        `,
                        transformStyle: 'preserve-3d',
                      }}
                      animate={{
                        rotateY: [0, 3, 0, -3, 0],
                        rotateX: [0, 1.5, 0, -1.5, 0],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {/* Card Chip with enhanced styling */}
                      <div
                        className="w-12 h-9 rounded mb-8 relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.4) 0%, rgba(250, 204, 21, 0.3) 100%)',
                          boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        <div className="absolute inset-0.5 grid grid-cols-3 gap-0.5">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="bg-yellow-400/20 rounded-sm" />
                          ))}
                        </div>
                      </div>

                      {/* Card Balance */}
                      <div className="mb-8">
                        <div className="text-white/80 text-xs mb-1">Card Balance</div>
                        <div className="text-white text-2xl font-bold">$ 45,670,345.00</div>
                      </div>

                      {/* Card Actions */}
                      <div className="flex gap-3 relative z-10">
                        <motion.div
                          className="flex-1 rounded-xl py-3 px-4 text-white text-sm font-medium flex items-center justify-center gap-2 backdrop-blur-sm"
                          style={{
                            background: 'rgba(0, 0, 0, 0.25)',
                            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.15)',
                          }}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>💳</span> Top up
                        </motion.div>
                        <motion.div
                          className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 2px 8px rgba(0, 0, 0, 0.15)',
                          }}
                          whileHover={{ scale: 1.05, rotate: 90 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-white text-lg">⚙️</span>
                        </motion.div>
                      </div>

                      {/* Enhanced Shine Effect */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.4) 55%, rgba(255,255,255,0) 65%, transparent 75%)',
                        }}
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          repeatDelay: 2,
                        }}
                      />

                      {/* Glass Reflection */}
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 60%)',
                        }}
                      />
                    </motion.div>

                    {/* Transaction List */}
                    <div className="bg-white/5 rounded-xl p-3 space-y-2">
                      <div className="text-white/80 text-xs mb-2">Transaction</div>
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-green-500/20 rounded-full" />
                          <span className="text-white/60 text-xs">+652 PENDING USE...</span>
                        </div>
                        <span className="text-white/80 text-xs">-88.82</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Curved Lines Decoration */}
              <svg
                className="absolute -bottom-8 -right-12 w-48 h-48 opacity-30"
                viewBox="0 0 200 200"
                fill="none"
              >
                <path
                  d="M50 10 Q 150 50, 190 150"
                  stroke="url(#greenGradient)"
                  strokeWidth="2"
                  fill="none"
                />
                <defs>
                  <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#34D399" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
