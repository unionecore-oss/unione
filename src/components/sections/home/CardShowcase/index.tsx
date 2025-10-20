'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeInUp, slideInRight } from '@/lib/animations'
import Image from 'next/image'

export default function CardShowcase() {
  const t = useTranslations('pages.home.cardShowcase')

  return (
    <section
      className="py-20 lg:py-32 bg-white"
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
              style={{ color: '#000000' }}
            >
              {t('title')}
            </h2>

            {/* App Store Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#" className="inline-block transition-transform hover:scale-105">
                <img
                  src="/images/badges/app-store.svg"
                  alt={t('appStore')}
                  style={{ height: '52px', width: '176px', objectFit: 'fill' }}
                />
              </a>
              <a href="#" className="inline-block transition-transform hover:scale-105">
                <img
                  src="/images/badges/google-play.svg"
                  alt={t('googlePlay')}
                  style={{ height: '52px', width: '176px', objectFit: 'fill' }}
                />
              </a>
            </div>
          </motion.div>

          {/* Right: Phone Card Image */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
            <div className="relative mx-auto max-w-[700px] h-[500px] flex items-center justify-center">
              <Image
                src="/images/phone-card.png"
                alt="Phone with Visa Card"
                width={600}
                height={600}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
