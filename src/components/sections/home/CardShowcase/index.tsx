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

            {/* App Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8 max-w-3xl">
              {/* Google Play Button */}
              <motion.a
                href="#"
                className="flex items-center justify-between px-6 py-3.5 rounded-2xl transition-all"
                style={{
                  background: '#000000',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="flex-1">
                  <div className="text-white/80 text-xs font-medium mb-0.5">Download The APP</div>
                  <div className="text-white text-xl font-bold tracking-tight">Google Play</div>
                </div>
                <svg className="w-10 h-10 ml-3" viewBox="-4 -4 72 72" fill="none">
                  <defs>
                    <linearGradient id="playBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00D9FF" />
                      <stop offset="100%" stopColor="#0099CC" />
                    </linearGradient>
                    <linearGradient id="playGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    <linearGradient id="playYellow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFC107" />
                      <stop offset="100%" stopColor="#FF9800" />
                    </linearGradient>
                    <linearGradient id="playRed" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF006E" />
                      <stop offset="100%" stopColor="#D81B60" />
                    </linearGradient>
                  </defs>
                  <path d="M10 10 L42 32 L10 54 V10Z" fill="url(#playBlue)" />
                  <path d="M42 32 L52 42 L10 54 L42 32Z" fill="url(#playGreen)" />
                  <path d="M10 10 L52 22 L42 32 L10 10Z" fill="url(#playYellow)" />
                  <path d="M42 32 L52 22 L52 42 L42 32Z" fill="url(#playRed)" />
                </svg>
              </motion.a>

              {/* Android APK Button */}
              <motion.a
                href="#"
                className="flex items-center justify-between px-6 py-3.5 rounded-2xl transition-all"
                style={{
                  background: '#000000',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="flex-1">
                  <div className="text-white/80 text-xs font-medium mb-0.5">Download The APP</div>
                  <div className="text-white text-xl font-bold tracking-tight">Android APK</div>
                </div>
                <svg className="w-10 h-10 ml-3" viewBox="0 0 64 64" fill="none">
                  <path
                    d="M20 14L17 10C12 16 9 23 9 30H14C14 23.5 16 17.5 20 14Z"
                    fill="#A4DC6C"
                  />
                  <path
                    d="M44 14C48 17.5 50 23.5 50 30H55C55 23 52 16 47 10L44 14Z"
                    fill="#A4DC6C"
                  />
                  <rect x="14" y="30" width="36" height="24" rx="3" fill="#A4DC6C" />
                  <circle cx="22" cy="24" r="2" fill="#A4DC6C" />
                  <circle cx="42" cy="24" r="2" fill="#A4DC6C" />
                  <rect x="8" y="34" width="6" height="14" rx="3" fill="#A4DC6C" />
                  <rect x="50" y="34" width="6" height="14" rx="3" fill="#A4DC6C" />
                </svg>
              </motion.a>

              {/* App Store Button */}
              <motion.a
                href="#"
                className="flex items-center justify-between px-6 py-3.5 rounded-2xl transition-all"
                style={{
                  background: '#FFFFFF',
                  border: '2px solid #000000',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)' }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="flex-1">
                  <div className="text-black/70 text-xs font-medium mb-0.5">Download The APP</div>
                  <div className="text-black text-xl font-bold tracking-tight">App Store</div>
                </div>
                <div
                  className="w-10 h-10 ml-3 rounded-xl flex items-center justify-center text-white font-black text-lg"
                  style={{
                    background: 'linear-gradient(135deg, #A4DC6C 0%, #7CB342 100%)',
                    boxShadow: '0 4px 12px rgba(164, 220, 108, 0.3)',
                  }}
                >
                  U
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Dual Phone Mockup */}
          <motion.div
            className="relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            style={{ perspective: '2000px' }}
          >
            <div className="relative mx-auto" style={{ maxWidth: '600px', height: '700px' }}>
              {/* Purple Gradient Background */}
              <div
                className="absolute -inset-32 opacity-90 blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(124, 58, 237, 0.4) 40%, transparent 70%)',
                }}
              />

              {/* Left Phone */}
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-72"
                style={{
                  transformStyle: 'preserve-3d',
                  zIndex: 1,
                }}
                animate={{
                  rotateY: [-12, -15, -12],
                  y: [-10, 0, -10],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div
                  className="rounded-[3rem] overflow-hidden"
                  style={{
                    boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3), 0 20px 40px rgba(139, 92, 246, 0.2)',
                  }}
                >
                  <div
                    className="relative aspect-[9/19] p-6 flex flex-col items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%)',
                    }}
                  >
                    {/* UNIONE Logo */}
                    <svg width="160" height="160" viewBox="0 0 200 200" fill="none" className="mb-6">
                      <defs>
                        {/* Pink gradient for innermost layer */}
                        <linearGradient id="pinkGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#EC4899" />
                          <stop offset="100%" stopColor="#D946EF" />
                        </linearGradient>

                        {/* Purple gradient for middle layer */}
                        <linearGradient id="purpleGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#A855F7" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>

                        {/* Cyan gradient for outer layer */}
                        <linearGradient id="cyanGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#06B6D4" />
                          <stop offset="100%" stopColor="#0EA5E9" />
                        </linearGradient>

                        {/* Glow filters */}
                        <filter id="pinkGlow1" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="4" result="blur" />
                          <feFlood floodColor="#EC4899" floodOpacity="0.8" />
                          <feComposite in2="blur" operator="in" />
                          <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>

                        <filter id="cyanGlow1" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feFlood floodColor="#06B6D4" floodOpacity="0.6" />
                          <feComposite in2="blur" operator="in" />
                          <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Outermost layer - Cyan */}
                      <path
                        d="M45 60 L45 100 C45 135, 65 155, 100 155 C135 155, 155 135, 155 100 L155 60"
                        stroke="url(#cyanGradient1)"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#cyanGlow1)"
                      />

                      {/* Middle-outer layer - Cyan to Purple transition */}
                      <path
                        d="M52 60 L52 100 C52 131, 68 147, 100 147 C132 147, 148 131, 148 100 L148 60"
                        stroke="url(#purpleGradient1)"
                        strokeWidth="5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.9"
                      />

                      {/* Middle-inner layer - Purple */}
                      <path
                        d="M60 60 L60 100 C60 127, 73 140, 100 140 C127 140, 140 127, 140 100 L140 60"
                        stroke="url(#purpleGradient1)"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Innermost layer - Pink */}
                      <path
                        d="M68 60 L68 100 C68 122, 79 133, 100 133 C121 133, 132 122, 132 100 L132 60"
                        stroke="url(#pinkGradient1)"
                        strokeWidth="5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#pinkGlow1)"
                      />
                    </svg>

                    {/* UNIONE Text */}
                    <h3 className="text-white text-3xl font-bold mb-4 tracking-wider">UNIONE</h3>

                    {/* Description */}
                    <p className="text-white/70 text-xs text-center px-6 leading-relaxed">
                      Unlocking Bitcoin, Fiat and DeFi Money.
                      Bitcoin is the world&apos;s first decentralized digital currency,
                      created to empower people with financial freedom
                      and transparency. Unione meets money.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Phone */}
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-72"
                style={{
                  transformStyle: 'preserve-3d',
                  zIndex: 2,
                }}
                animate={{
                  rotateY: [12, 15, 12],
                  y: [10, 0, 10],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              >
                <div
                  className="rounded-[3rem] overflow-hidden"
                  style={{
                    boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3), 0 20px 40px rgba(139, 92, 246, 0.2)',
                  }}
                >
                  <div
                    className="relative aspect-[9/19] p-6 flex flex-col items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%)',
                    }}
                  >
                    {/* UNIONE Logo */}
                    <svg width="160" height="160" viewBox="0 0 200 200" fill="none" className="mb-6">
                      <defs>
                        {/* Pink gradient for innermost layer */}
                        <linearGradient id="pinkGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#EC4899" />
                          <stop offset="100%" stopColor="#D946EF" />
                        </linearGradient>

                        {/* Purple gradient for middle layer */}
                        <linearGradient id="purpleGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#A855F7" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>

                        {/* Cyan gradient for outer layer */}
                        <linearGradient id="cyanGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#06B6D4" />
                          <stop offset="100%" stopColor="#0EA5E9" />
                        </linearGradient>

                        {/* Glow filters */}
                        <filter id="pinkGlow2" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="4" result="blur" />
                          <feFlood floodColor="#EC4899" floodOpacity="0.8" />
                          <feComposite in2="blur" operator="in" />
                          <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>

                        <filter id="cyanGlow2" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feFlood floodColor="#06B6D4" floodOpacity="0.6" />
                          <feComposite in2="blur" operator="in" />
                          <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Outermost layer - Cyan */}
                      <path
                        d="M45 60 L45 100 C45 135, 65 155, 100 155 C135 155, 155 135, 155 100 L155 60"
                        stroke="url(#cyanGradient2)"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#cyanGlow2)"
                      />

                      {/* Middle-outer layer - Cyan to Purple transition */}
                      <path
                        d="M52 60 L52 100 C52 131, 68 147, 100 147 C132 147, 148 131, 148 100 L148 60"
                        stroke="url(#purpleGradient2)"
                        strokeWidth="5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.9"
                      />

                      {/* Middle-inner layer - Purple */}
                      <path
                        d="M60 60 L60 100 C60 127, 73 140, 100 140 C127 140, 140 127, 140 100 L140 60"
                        stroke="url(#purpleGradient2)"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Innermost layer - Pink */}
                      <path
                        d="M68 60 L68 100 C68 122, 79 133, 100 133 C121 133, 132 122, 132 100 L132 60"
                        stroke="url(#pinkGradient2)"
                        strokeWidth="5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#pinkGlow2)"
                      />
                    </svg>

                    {/* UNIONE Text */}
                    <h3 className="text-white text-3xl font-bold mb-4 tracking-wider">UNIONE</h3>

                    {/* Description */}
                    <p className="text-white/70 text-xs text-center px-6 leading-relaxed">
                      Unlocking Bitcoin, The Future Of Digital Money.
                      Bitcoin is the world&apos;s first decentralized digital currency,
                      created to empower people with financial freedom
                      and transparency. Unione meets money.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
