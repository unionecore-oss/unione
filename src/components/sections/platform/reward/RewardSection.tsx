'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function RewardSection() {
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
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
            style={{ color: 'var(--color-text-primary)' }}
            variants={fadeInUp}
          >
            The First Digital Currency You Can Mine on Your Phone
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl"
            style={{ color: 'var(--color-text-secondary)' }}
            variants={fadeInUp}
          >
            Join Unione and start mining cryptocurrency today with our eco-friendly mobile app.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
