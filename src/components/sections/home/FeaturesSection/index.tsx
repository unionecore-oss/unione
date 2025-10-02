'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Card from '@/components/common/Card'

const features = [
  {
    title: 'Card',
    description: 'Discover our card solutions',
    href: '/card',
  },
  {
    title: 'Platform',
    description: 'Discover our platform solutions',
    href: '/platform',
  },
  {
    title: 'Company',
    description: 'Discover our company solutions',
    href: '/company',
  },
]

export default function FeaturesSection() {
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
