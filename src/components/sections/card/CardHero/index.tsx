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
      className="relative overflow-hidden min-h-[650px] md:min-h-[600px] lg:min-h-[850px] xl:min-h-[950px] 3xl:min-h-[1000px] flex items-center -mt-[74px] pt-[74px] bg-white"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/card6.png"
          alt="Unione Card"
          className="w-full h-full object-cover
            object-[70%_center]
            md:object-[60%_center]
            lg:object-center"
          style={{
            filter: CSS_FILTERS.cardPage.heroBackground,
          }}
        />
      </motion.div>

      {/* Text Content - Overlay Left Aligned */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 md:pl-14 lg:pl-24 3xl:pl-32 py-8 pt-12 md:pt-16 lg:pt-20">
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
            <Button
              variant="primary"
              size="lg"
              style={{
                background: '#ffffff',
                color: '#000000',
                border: '1px solid rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f5f5f5'
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff'
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)'
              }}
            >
              {t('cta')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
