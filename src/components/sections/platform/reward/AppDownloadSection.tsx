'use client'

import { m } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Image from 'next/image'

export default function AppDownloadSection() {
  const t = useTranslations('pages.reward.appDownload')

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/phone1.png"
                alt="UNIONE Mobile App"
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </m.div>

          {/* Right: Text Content */}
          <m.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            <m.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {t('title')}
            </m.h2>

            <m.p
              variants={fadeInUp}
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {t('description')}
            </m.p>

            <m.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#" className="inline-block transition-transform hover:scale-105">
                <img
                  src="/images/badges/app-store.svg"
                  alt="Download on the App Store"
                  style={{ height: '52px', width: '176px', objectFit: 'fill' }}
                />
              </a>
              <a href="#" className="inline-block transition-transform hover:scale-105">
                <img
                  src="/images/badges/google-play.svg"
                  alt="Get it on Google Play"
                  style={{ height: '52px', width: '176px', objectFit: 'fill' }}
                />
              </a>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
