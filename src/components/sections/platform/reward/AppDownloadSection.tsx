'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Image from 'next/image'

export default function AppDownloadSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/app-phones.png"
                alt="UNIONE Mobile App"
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Start mining today by downloading the app! Join us!
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Join now and keep 100% of what you earn. Mining Uni is completely free. All you need is an invitation from a trusted member. Got one? Download the app below and get started!
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#" className="inline-block transition-transform hover:scale-105">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-14"
                />
              </a>

              <a href="#" className="inline-block transition-transform hover:scale-105">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-14"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
