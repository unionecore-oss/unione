'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Button from '@/components/common/Button'
import { CSS_FILTERS } from '@/lib/constants'

export default function CardHero() {
  const t = useTranslations('pages.card.hero')

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
          style={{ filter: CSS_FILTERS.cardPage.heroBackground }}
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
            {t('title')}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-white"
            variants={fadeInUp}
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeInUp}
          >
            <Button variant="primary" size="lg">
              {t('cta')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
