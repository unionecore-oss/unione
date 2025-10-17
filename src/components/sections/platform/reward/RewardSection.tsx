'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { FluidGradient } from '@/components/ui/fluid-gradient'

export default function RewardSection() {
  const t = useTranslations('pages.reward.hero')

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Fluid Gradient Background */}
      <div className="absolute inset-0">
        <FluidGradient />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white"
            variants={fadeInUp}
          >
            {t('title')}
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-white/90"
            variants={fadeInUp}
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
