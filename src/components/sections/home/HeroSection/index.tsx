'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import AnimatedHeadline from './AnimatedHeadline'
import AnimatedLogo3D from './AnimatedLogo3D'
import Button from '@/components/common/Button'

export default function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center overflow-hidden py-20 lg:py-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <AnimatedHeadline />
          </motion.div>

          {/* Right: 3D Animated Logo */}
          <div className="hidden lg:block relative h-[550px]">
            <AnimatedLogo3D />
          </div>
        </div>
      </div>
    </section>
  )
}
