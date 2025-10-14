'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function CompanyVision() {
  return (
    <section className="section-padding hero-gradient">
      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: 'var(--color-text-primary)' }}
            variants={fadeInUp}
          >
            Building the Future of Finance
          </motion.h1>

          <motion.p
            className="text-xl"
            style={{ color: 'var(--color-text-secondary)' }}
            variants={fadeInUp}
          >
            We are dedicated to creating a better financial experience. Our vision is for everyone around the world to access financial services freely and securely.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
