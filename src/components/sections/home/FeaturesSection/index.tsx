'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/i18n/navigation'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Card from '@/components/common/Card'

export default function FeaturesSection() {
  const t = useTranslations('pages.home.features')

  const features = [
    {
      title: t('card.title'),
      description: t('card.description'),
      href: '/card',
    },
    {
      title: t('platform.title'),
      description: t('platform.description'),
      href: '/platform',
    },
    {
      title: t('company.title'),
      description: t('company.description'),
      href: '/about-us',
    },
  ]

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-background-secondary)' }}
    >
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeInUp}>
              <Link href={feature.href}>
                <Card className="p-8 h-full">
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{feature.description}</p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
