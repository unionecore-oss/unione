'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Shield, Zap, Globe, Sparkles } from 'lucide-react'
import { ReactNode } from 'react'

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
    <div className="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l">{children}</div>
  </div>
)

export default function AboutUnione() {
  const t = useTranslations('pages.aboutUs.about')

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-background-secondary)' }}
    >
      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-6xl md:text-7xl font-bold mb-16"
            style={{ color: 'var(--color-text-primary)' }}
            variants={fadeInUp}
          >
            {t('title')}
          </motion.h2>

          <motion.div className="space-y-12 text-2xl leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            <motion.p variants={fadeInUp}>
              {t('paragraph1')}
            </motion.p>

            <motion.p variants={fadeInUp}>
              {t('paragraph2')}
            </motion.p>

            <motion.p variants={fadeInUp}>
              {t('paragraph3')}
            </motion.p>

            {/* Visual Break - Core Values */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16"
            >
              {[
                { Icon: Shield, key: 'securityFirst' },
                { Icon: Zap, key: 'lightningFast' },
                { Icon: Globe, key: 'globalAccess' },
                { Icon: Sparkles, key: 'premiumExperience' }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="h-full"
                >
                  <Card className="group shadow-black-950/5 h-full">
                    <CardHeader className="pb-3">
                      <CardDecorator>
                        <value.Icon className="size-6" aria-hidden />
                      </CardDecorator>

                      <h3 className="mt-6 font-medium text-center">{t(`values.${value.key}.title`)}</h3>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm text-center">{t(`values.${value.key}.description`)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
