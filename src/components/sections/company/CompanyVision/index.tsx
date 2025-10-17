'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function CompanyVision() {
  const t = useTranslations('pages.aboutUs.vision')

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
            className="text-7xl md:text-8xl font-bold mb-12"
            style={{ color: 'var(--color-text-primary)' }}
            variants={fadeInUp}
          >
            {t('title')}
          </motion.h1>

          <motion.p
            className="text-3xl leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
            variants={fadeInUp}
          >
            {t('description')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
