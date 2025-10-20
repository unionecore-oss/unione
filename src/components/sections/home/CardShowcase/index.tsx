'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeInUp, slideInRight } from '@/lib/animations'
import Image from 'next/image'

export default function CardShowcase() {
  const t = useTranslations('pages.home.cardShowcase')

  return (
    <section
      className="pt-0 pb-12 lg:pt-2 lg:pb-32"
      style={{
        background: 'linear-gradient(to bottom, #000000 0%, #000000 30%, #1a1a1a 45%, #2a2a2a 55%, #3d3d3d 65%, #808080 75%, #c0c0c0 85%, #f0f0f0 92%, #FFFFFF 100%)'
      }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeInUp}
            className="order-2 lg:order-1"
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-10 leading-tight"
              style={{ color: '#FFFFFF' }}
            >
              {t('title')}
            </h2>

            {/* App Store Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#"
                className="inline-block"
                whileHover={{
                  scale: 1.05,
                  filter: 'drop-shadow(0 8px 24px rgba(139, 92, 246, 0.6))'
                }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/images/badges/app-store.svg"
                  alt={t('appStore')}
                  style={{ height: '52px', width: '176px', objectFit: 'fill' }}
                />
              </motion.a>
              <motion.a
                href="#"
                className="inline-block"
                whileHover={{
                  scale: 1.05,
                  filter: 'drop-shadow(0 8px 24px rgba(139, 92, 246, 0.6))'
                }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/images/badges/google-play.svg"
                  alt={t('googlePlay')}
                  style={{ height: '52px', width: '176px', objectFit: 'fill' }}
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Phone Card Image */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.7 }}
            variants={slideInRight}
          >
            <div className="relative mx-auto flex items-center justify-center">
              {/* Purple Gradient Background - positioned behind image */}
              <div
                className="absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '1200px',
                  height: '1200px',
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(168, 85, 247, 0.3) 30%, rgba(124, 58, 237, 0.15) 50%, rgba(99, 102, 241, 0) 70%)',
                  filter: 'saturate(1.1)',
                  pointerEvents: 'none'
                }}
              />

              {/* Image */}
              <Image
                src="/images/phone-card-nobg.png"
                alt="Phone with Visa Card"
                width={1200}
                height={1200}
                className="object-contain relative z-10"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
