'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'
import Button from '@/components/common/Button'

export default function CardHero() {
  return (
    <section
      className="section-padding min-h-[80vh] flex items-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      {/* Background Image - Hand holding Unione card */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/card2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
              style={{
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.6)',
              }}
              variants={fadeInUp}
            >
              Unione Card opens the door to{' '}
              <GradientText>borderless payments</GradientText>
            </motion.h1>

            <motion.p
              className="text-xl mb-8 text-white"
              style={{
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.6)',
              }}
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
        </div>
      </div>
    </section>
  )
}
