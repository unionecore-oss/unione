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
      className="relative overflow-hidden min-h-[800px] md:min-h-[750px] lg:min-h-[850px] xl:min-h-[900px] 3xl:min-h-[950px] flex items-start -mt-[74px] pt-[74px]"
    >
      {/* Background Image - Mobile */}
      <motion.div
        className="absolute inset-0 w-full h-full md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/card6.png"
          alt="Unione Card"
          className="w-full h-full object-cover"
          style={{
            filter: CSS_FILTERS.cardPage.heroBackground,
            objectPosition: 'center center',
          }}
        />
      </motion.div>

      {/* Background Image - Desktop */}
      <motion.div
        className="absolute inset-0 w-full h-full hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/card6.png"
          alt="Unione Card"
          className="w-full h-full object-cover"
          style={{
            filter: CSS_FILTERS.cardPage.heroBackground,
            objectPosition: 'center center',
          }}
        />
      </motion.div>

      {/* Text Content - Overlay Left Aligned */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 md:pl-14 lg:pl-24 3xl:pl-32 pt-16 md:pt-20 lg:pt-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-xl 3xl:max-w-2xl text-left"
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-[3.25rem] lg:text-6xl xl:text-7xl 3xl:text-8xl font-bold mb-3 md:mb-5 lg:mb-6 3xl:mb-8 leading-tight text-white"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}
            variants={fadeInUp}
          >
            {t('title')}
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-[1.375rem] lg:text-2xl 3xl:text-3xl mb-4 md:mb-7 lg:mb-8 3xl:mb-10 text-white"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7), 0 4px 12px rgba(0,0,0,0.5)' }}
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
