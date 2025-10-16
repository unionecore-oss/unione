'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Button from '@/components/common/Button'

export default function CardHero() {
  return (
    <section
      className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center"
    >
      {/* Background Image - Full Width */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/card6.png"
          alt="Unione Card"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text Content - Overlay Left Aligned */}
      <div className="relative z-10 pl-8 md:pl-16 lg:pl-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-xl text-left"
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
            variants={fadeInUp}
          >
            Unione Card opens the door to{' '}
            <span className="text-white">
              borderless payments
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-white"
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
    </section>
  )
}
