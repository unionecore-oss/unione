'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const stats = [
  {
    value: '200+',
    label: 'Countries Supported',
    icon: '🌍',
  },
  {
    value: '1sec',
    label: 'Transaction Speed',
    icon: '⚡',
  },
  {
    value: '99%',
    label: 'Security Uptime',
    icon: '🛡️',
  },
  {
    value: '100k+',
    label: 'Users & Growing',
    icon: '👥',
  },
]

export default function FeaturesBreakdown() {
  return (
    <section className="py-20">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          className="rounded-3xl p-12 mb-12"
          style={{
            background: 'linear-gradient(135deg, #A4DC6C 0%, #8BC34A 100%)',
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <p className="text-sm font-medium mb-2" style={{ color: 'rgba(0,0,0,0.7)' }}>
            Place to use Unione Card
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#000' }}>
            Spend Everywhere
          </h2>
          <p className="text-lg max-w-3xl" style={{ color: 'rgba(0,0,0,0.8)' }}>
            Unione Card is designed for your everyday life — simple, limitless, and effortless. Spend your assets wherever you go, anytime you need.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-3xl mb-4">{stat.icon}</div>
              <div
                className="text-5xl md:text-6xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </div>
              <p className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
