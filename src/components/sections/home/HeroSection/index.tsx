'use client'

import { motion } from 'framer-motion'
import BackgroundGradient from './BackgroundGradient'
import FloatingOrbs from './FloatingOrbs'
import WaveEffect from './WaveEffect'
import AnimatedHeadline from './AnimatedHeadline'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-visible pt-16 pb-20 lg:pt-20 lg:pb-24">
      {/* Animated Background */}
      <BackgroundGradient />

      {/* Wave Effect */}
      <WaveEffect />

      {/* Floating Orbs */}
      <FloatingOrbs />

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="flex justify-center items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center max-w-4xl"
          >
            <AnimatedHeadline />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
