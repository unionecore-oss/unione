'use client'

import { motion } from 'framer-motion'
import BackgroundGradient from './BackgroundGradient'
import FloatingOrbs from './FloatingOrbs'
import WaveEffect from './WaveEffect'
import AnimatedHeadline from './AnimatedHeadline'
import NeonLogo from './NeonLogo'
import Particles from './Particles'
import Sphere3D from './Sphere3D'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-visible pt-16 pb-20 lg:pt-20 lg:pb-24"
      style={{
        background: '#000000',
      }}
    >
      {/* Particles Only */}
      <Particles />

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <AnimatedHeadline />
          </motion.div>

          {/* Right: 3D Sphere */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <Sphere3D />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
