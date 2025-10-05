'use client'

import { motion } from 'framer-motion'

export default function WaveEffect() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Flowing Wave Pattern */}
      <motion.div
        className="absolute"
        style={{
          bottom: '-20%',
          right: '-10%',
          width: '150%',
          height: '100%',
          opacity: 0.03,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: [0.215, 0.61, 0.355, 1],
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9666ff" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#9666ff" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Flowing Wave Paths */}
          <motion.path
            d="M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z"
            fill="url(#waveGradient1)"
            animate={{
              d: [
                'M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z',
                'M0,350 Q300,450 600,350 T1200,350 L1200,800 L0,800 Z',
                'M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z',
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.path
            d="M0,500 Q400,400 800,500 T1200,500 L1200,800 L0,800 Z"
            fill="url(#waveGradient2)"
            animate={{
              d: [
                'M0,500 Q400,400 800,500 T1200,500 L1200,800 L0,800 Z',
                'M0,450 Q400,550 800,450 T1200,450 L1200,800 L0,800 Z',
                'M0,500 Q400,400 800,500 T1200,500 L1200,800 L0,800 Z',
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />

          {/* Cloth-like Mesh */}
          <motion.path
            d="M0,300 Q200,250 400,300 T800,300 Q1000,250 1200,300 L1200,800 L0,800 Z"
            fill="url(#waveGradient1)"
            opacity="0.15"
            animate={{
              d: [
                'M0,300 Q200,250 400,300 T800,300 Q1000,250 1200,300 L1200,800 L0,800 Z',
                'M0,280 Q200,320 400,280 T800,280 Q1000,320 1200,280 L1200,800 L0,800 Z',
                'M0,300 Q200,250 400,300 T800,300 Q1000,250 1200,300 L1200,800 L0,800 Z',
              ],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: [0.7, 0, 0, 1],
            }}
          />
        </svg>
      </motion.div>

      {/* Additional Subtle Wave Layer */}
      <motion.div
        className="absolute"
        style={{
          top: '-10%',
          left: '-10%',
          width: '120%',
          height: '80%',
          opacity: 0.02,
        }}
        animate={{
          rotate: [0, 5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,200 Q300,150 600,200 T1200,200 L1200,0 L0,0 Z"
            fill="url(#waveGradient2)"
            animate={{
              d: [
                'M0,200 Q300,150 600,200 T1200,200 L1200,0 L0,0 Z',
                'M0,180 Q300,230 600,180 T1200,180 L1200,0 L0,0 Z',
                'M0,200 Q300,150 600,200 T1200,200 L1200,0 L0,0 Z',
              ],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}
