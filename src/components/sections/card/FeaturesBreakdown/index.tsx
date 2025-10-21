'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Globe, Lightning, Shield, Users } from '@phosphor-icons/react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function FeaturesBreakdown() {
  const t = useTranslations('pages.card.featuresBreakdown')

  const stats = [
    {
      key: 'countries',
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-500',
      iconColor: '#3B82F6',
      glowColor: 'rgba(59, 130, 246, 0.4)',
    },
    {
      key: 'speed',
      icon: Lightning,
      gradient: 'from-yellow-500 to-orange-500',
      iconColor: '#F59E0B',
      glowColor: 'rgba(245, 158, 11, 0.4)',
    },
    {
      key: 'security',
      icon: Shield,
      gradient: 'from-green-500 to-emerald-500',
      iconColor: '#10B981',
      glowColor: 'rgba(16, 185, 129, 0.4)',
    },
    {
      key: 'users',
      icon: Users,
      gradient: 'from-purple-500 to-pink-500',
      iconColor: '#8B5CF6',
      glowColor: 'rgba(139, 92, 246, 0.4)',
    },
  ]

  return (
    <section className="py-16 md:py-20 lg:py-24 3xl:py-32 relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Hero Section */}
        <motion.div
          className="rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16 3xl:p-20 mb-10 md:mb-14 lg:mb-16 3xl:mb-20 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #A4DC6C 0%, #8BC34A 100%)',
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <div className="relative z-10">
            <p className="text-xs sm:text-sm 3xl:text-base font-semibold mb-2 md:mb-2.5 lg:mb-3 3xl:mb-4 tracking-wide uppercase" style={{ color: 'rgba(0,0,0,0.6)' }}>
              {t('label')}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[3rem] lg:text-6xl xl:text-7xl 3xl:text-8xl font-bold mb-4 md:mb-5 lg:mb-6 3xl:mb-8 leading-tight" style={{ color: '#000' }}>
              {t('title')}
            </h2>
            <p className="text-base sm:text-lg md:text-[1.125rem] lg:text-xl 3xl:text-2xl max-w-3xl 3xl:max-w-4xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.75)' }}>
              {t('description')}
            </p>
          </div>
        </motion.div>

        {/* Premium Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.key}
                variants={fadeInUp}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-9 lg:p-12"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
                }}
              >
                {/* Animated gradient background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${stat.glowColor}, transparent 70%)`,
                  }}
                />

                {/* Animated border glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `linear-gradient(135deg, ${stat.glowColor}, transparent)`,
                    filter: 'blur(20px)',
                    transform: 'scale(0.95)',
                  }}
                />

                <div className="relative z-10">
                  {/* Premium Icon Container */}
                  <motion.div
                    className="inline-flex items-center justify-center w-14 md:w-15 lg:w-16 h-14 md:h-15 lg:h-16 rounded-2xl mb-6 md:mb-7 lg:mb-8 relative"
                    style={{
                      background: `linear-gradient(135deg, ${stat.glowColor}, rgba(255, 255, 255, 0.05))`,
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: `0 0 30px ${stat.glowColor}`,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {/* Icon glow effect */}
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl opacity-60"
                      style={{
                        background: stat.iconColor,
                      }}
                    />
                    <Icon
                      size={32}
                      weight="duotone"
                      style={{
                        color: stat.iconColor,
                        filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))',
                      }}
                      className="relative z-10"
                    />
                  </motion.div>

                  {/* Value with animated gradient */}
                  <motion.div
                    className="text-6xl md:text-7xl lg:text-8xl font-bold mb-3 md:mb-4 tracking-tight"
                    style={{
                      background: `linear-gradient(135deg, ${stat.iconColor} 0%, rgba(255, 255, 255, 0.9) 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))',
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {t(`stats.${stat.key}.value`)}
                  </motion.div>

                  {/* Label with enhanced typography */}
                  <p
                    className="text-lg font-bold mb-2 tracking-wide"
                    style={{
                      color: 'var(--color-text-primary)',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {t(`stats.${stat.key}.label`)}
                  </p>

                  {/* Description with better contrast */}
                  <p
                    className="text-sm font-medium"
                    style={{
                      color: 'var(--color-text-secondary)',
                      opacity: 0.8,
                    }}
                  >
                    {t(`stats.${stat.key}.description`)}
                  </p>

                  {/* Decorative corner element */}
                  <div
                    className="absolute bottom-0 right-0 w-32 h-32 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at bottom right, ${stat.glowColor}, transparent 70%)`,
                      filter: 'blur(40px)',
                    }}
                  />
                </div>

                {/* Glass reflection effect */}
                <div
                  className="absolute inset-x-0 top-0 h-1/2 opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent)',
                    borderRadius: '24px 24px 0 0',
                  }}
                />

                {/* Ambient particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <div
                    className="absolute w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                    style={{
                      background: stat.iconColor,
                      top: '20%',
                      left: '15%',
                      boxShadow: `0 0 20px ${stat.glowColor}`,
                      animation: 'float 3s ease-in-out infinite',
                    }}
                  />
                  <div
                    className="absolute w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200"
                    style={{
                      background: stat.iconColor,
                      top: '60%',
                      right: '20%',
                      boxShadow: `0 0 15px ${stat.glowColor}`,
                      animation: 'float 4s ease-in-out infinite 0.5s',
                    }}
                  />
                  <div
                    className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-400"
                    style={{
                      background: stat.iconColor,
                      bottom: '25%',
                      left: '25%',
                      boxShadow: `0 0 10px ${stat.glowColor}`,
                      animation: 'float 3.5s ease-in-out infinite 1s',
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  )
}
