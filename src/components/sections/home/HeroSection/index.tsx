'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import BackgroundGradient from './BackgroundGradient'
import FloatingOrbs from './FloatingOrbs'
import AnimatedHeadline from './AnimatedHeadline'

// 3D Scene을 dynamic import로 로드 (SSR 방지)
const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), {
  ssr: false,
  loading: () => null,
})

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-visible pt-16 pb-20 lg:pt-20 lg:pb-24">
      {/* Animated Background */}
      <BackgroundGradient />

      {/* Floating Orbs */}
      <FloatingOrbs />

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-left"
          >
            <AnimatedHeadline />
          </motion.div>

          {/* Right: 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="relative h-[600px] lg:h-[700px] -mt-20"
          >
            <Scene3D />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
