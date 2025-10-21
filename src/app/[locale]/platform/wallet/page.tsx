'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { ShaderAnimation } from '@/components/ui/neno-shader'

export default function WalletPage() {
  const t = useTranslations('pages.wallet')

  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="order-2 lg:order-1"
            >
              <motion.div variants={fadeInUp}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 leading-tight tracking-tight text-gray-900">
                  {t('hero.title')}
                </h1>

                <div className="h-1.5 w-80 bg-gradient-to-r from-purple-600 to-purple-600 mb-8 rounded-full"></div>

                <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-10 text-gray-700 max-w-xl leading-relaxed">
                  {t('hero.subtitle')}
                </p>

                <button className="px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-black text-white text-base md:text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {t('hero.cta')}
                </button>
              </motion.div>
            </motion.div>

            {/* Right: Phone Mockup */}
            <motion.div
              className="relative flex justify-center items-center order-1 lg:order-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/123124.png"
                alt="UNIONE Wallet App"
                className="w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security You Can Trust */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'white' }}
      >
        <div className="container-custom">
          <motion.h2
            className="text-5xl md:text-6xl font-black text-center mb-20 tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            {t('security.title')}
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* UNIONE Logo Card */}
            <motion.div
              className="rounded-2xl p-6 min-h-[350px] md:min-h-[700px] flex flex-col shadow-lg relative"
              style={{ backgroundColor: 'rgb(245, 243, 255)' }}
              variants={fadeInUp}
            >
              {/* Top Text Content */}
              <div className="flex flex-col items-center text-center mb-auto">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 max-w-sm leading-tight">{t('security.custodianProtection.title')}</h3>

                {/* Description */}
                <p className="text-base text-gray-700 leading-relaxed max-w-lg">
                  {t('security.custodianProtection.description')}
                </p>
              </div>

              {/* 3D Image - Bottom Right */}
              <div className="absolute bottom-4 right-4">
                <div className="relative">
                  <img
                    src="/secure-shield.png"
                    alt="Custodian Protection Shield"
                    className="w-[175px] md:w-[350px] h-auto object-contain relative z-10"
                    style={{
                      filter: 'brightness(1.1) contrast(1.1)'
                    }}
                  />
                  <div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                      background: 'rgba(109, 40, 217, 1)',
                      mixBlendMode: 'color',
                      WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)',
                      maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)'
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>

            {/* UNIONE Company Name Card */}
            <motion.div
              className="rounded-2xl p-6 min-h-[350px] md:min-h-[700px] flex flex-col shadow-lg relative"
              style={{ backgroundColor: 'rgb(245, 243, 255)' }}
              variants={fadeInUp}
            >
              {/* Top Text Content */}
              <div className="flex flex-col items-center text-center mb-auto">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 max-w-sm leading-tight">{t('security.walletSecurity.title')}</h3>

                {/* Description */}
                <p className="text-base text-gray-700 leading-relaxed max-w-lg">
                  {t('security.walletSecurity.description')}
                </p>
              </div>

              {/* 3D Image - Bottom Right */}
              <div className="absolute bottom-4 right-4">
                <div className="relative">
                  <img
                    src="/secure-web.png"
                    alt="Wallet Security Box"
                    className="w-[175px] md:w-[350px] h-auto object-contain relative z-10"
                    style={{
                      filter: 'brightness(1.1) contrast(1.1)'
                    }}
                  />
                  <div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                      background: 'rgba(109, 40, 217, 1)',
                      mixBlendMode: 'color',
                      WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)',
                      maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)'
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Wallets that secure assets */}
      <section className="bg-white pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Left: Title and Shader Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-8 pt-12 pb-6 leading-tight whitespace-pre-line">
              {t('walletProtection.title')}
            </h2>
            <div className="h-[300px] overflow-hidden">
              <ShaderAnimation />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="px-8 md:px-12 lg:px-16 flex flex-col"
            style={{ marginTop: '2rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed font-light">
              {t('walletProtection.description')}
            </p>

            <button className="px-8 py-4 bg-black text-white text-base font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl w-fit">
              {t('walletProtection.cta')}
            </button>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
