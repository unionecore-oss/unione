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
      className="relative overflow-hidden min-h-[600px] md:min-h-[650px] lg:min-h-[700px] xl:min-h-[750px] 3xl:min-h-[800px] flex items-center"
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
      <div className="relative z-10 px-6 sm:px-8 md:px-12 md:pl-14 lg:pl-24 3xl:pl-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-xl 3xl:max-w-2xl text-left"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-[3.25rem] lg:text-6xl xl:text-7xl 3xl:text-8xl font-bold mb-4 md:mb-5 lg:mb-6 3xl:mb-8 leading-tight text-white"
            variants={fadeInUp}
          >
            {t('title')}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-[1.375rem] lg:text-2xl 3xl:text-3xl mb-6 md:mb-7 lg:mb-8 3xl:mb-10 text-white"
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
