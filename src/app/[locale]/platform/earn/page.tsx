'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Hero from '@/components/ui/neural-network-hero'

export default function EarnPage() {
  const t = useTranslations('pages.earn')

  return (
    <main className="min-h-screen">
      {/* Hero - Normal flow positioning */}
      <Hero
        title={t('hero.title')}
        description=""
        badgeText=""
        badgeLabel=""
        ctaButtons={[
          { text: t('hero.ctaAppStore'), href: "#", primary: true },
          { text: t('hero.ctaGooglePlay'), href: "#" }
        ]}
        microDetails={[]}
      />

      {/* Features Grid */}
      <section className="py-0 bg-white">
        <div className="w-full">
          <div className="space-y-0">
            {/* Row 1: Financial opportunities open to everyone */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center group cursor-pointer"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="p-16 flex items-center justify-center min-h-[400px] relative overflow-hidden transition-all duration-500"
                style={{
                  backgroundImage: 'url(/images/mesh-gradients/opportunity-bg.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                variants={fadeInUp}
              >
              </motion.div>
              <motion.div
                className="px-12 md:px-20 py-16 bg-white"
                variants={fadeInUp}
              >
                <h2 className="text-4xl font-bold mb-4 text-gray-900 transition-all duration-300 group-hover:text-orange-600">
                  {t('features.financialOpportunities.title')}
                </h2>
                <p className="text-gray-600 text-lg">{t('features.financialOpportunities.description')}</p>
              </motion.div>
            </motion.div>

            {/* Row 2: Flexible Entry and Exit Anytime */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center group cursor-pointer"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="px-12 md:px-20 py-16 bg-white"
                variants={fadeInUp}
              >
                <h2 className="text-4xl font-bold mb-4 text-gray-900 transition-all duration-300 group-hover:text-purple-600">
                  {t('features.flexibleEntry.title')}
                </h2>
                <p className="text-gray-600 text-lg">{t('features.flexibleEntry.description')}</p>
              </motion.div>
              <motion.div
                className="p-16 flex items-center justify-center min-h-[400px] relative overflow-hidden transition-all duration-500"
                style={{
                  backgroundImage: 'url(/images/mesh-gradients/wallet-bg.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                variants={fadeInUp}
              >
              </motion.div>
            </motion.div>

            {/* Row 3: Make your idle money work for you */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center group cursor-pointer"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="p-16 flex items-center justify-center min-h-[400px] relative overflow-hidden transition-all duration-500"
                style={{
                  backgroundImage: 'url(/images/mesh-gradients/time-bg.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                variants={fadeInUp}
              >
              </motion.div>
              <motion.div
                className="px-12 md:px-20 py-16 bg-white"
                variants={fadeInUp}
              >
                <h2 className="text-4xl font-bold mb-4 text-gray-900 transition-all duration-300 group-hover:text-green-600">
                  {t('features.idleMoney.title')}
                </h2>
                <p className="text-gray-600 text-lg">{t('features.idleMoney.description')}</p>
              </motion.div>
            </motion.div>

            {/* Row 4: Rewards paid out every hour */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center group cursor-pointer"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="px-12 md:px-20 py-16 bg-white"
                variants={fadeInUp}
              >
                <h2 className="text-4xl font-bold mb-4 text-gray-900 transition-all duration-300 group-hover:text-cyan-600">
                  {t('features.hourlyRewards.title')}
                </h2>
                <p className="text-gray-600 text-lg">{t('features.hourlyRewards.description')}</p>
              </motion.div>
              <motion.div
                className="p-16 flex items-center justify-center min-h-[400px] relative overflow-hidden transition-all duration-500"
                style={{
                  backgroundImage: 'url(/images/mesh-gradients/growth-bg.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                variants={fadeInUp}
              >
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
