'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'
import Button from '@/components/common/Button'
import Card3D from './Card3D'

export default function CardHero() {
  return (
    <section className="section-padding min-h-[80vh] flex items-center hero-gradient">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--color-text-primary)' }}
              variants={fadeInUp}
            >
              Unione Card opens the door to{' '}
              <GradientText>borderless payments</GradientText>
            </motion.h1>

            <motion.p
              className="text-xl mb-8"
              style={{ color: 'var(--color-text-secondary)' }}
              variants={fadeInUp}
            >
              Enjoy the convenience of using your USDT digital assets instantly, wherever and whenever around the world.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Button variant="primary" size="lg">
                Get your Card
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card3D />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
