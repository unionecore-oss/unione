'use client'

import { motion } from 'framer-motion'
import { fadeInUp, slideInRight } from '@/lib/animations'

export default function CardShowcase() {
  return (
    <section
      className="py-20 lg:py-32"
      style={{ backgroundColor: 'var(--color-background-secondary)' }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="order-2 lg:order-1"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-10 leading-tight"
              style={{
                background: 'var(--brand-gradient-solid)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}
            >
              Unione bridges crypto and the real world with a global card
            </h2>

            {/* App Store Badges */}
            <div className="flex flex-wrap gap-4">
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
            </div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              {/* Brand Color Gradient Background */}
              <div
                className="absolute inset-0 -m-20 opacity-60 blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(233, 30, 99, 0.4) 0%, rgba(124, 58, 237, 0.3) 50%, rgba(6, 182, 212, 0.2) 100%)',
                }}
              />

              {/* Image */}
              <img
                src="https://www.figma.com/api/mcp/asset/a0321d04-96ae-4474-937a-c2ff5b3de83a"
                alt="UNIONE Mobile App"
                className="relative z-10 w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
