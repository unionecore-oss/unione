'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'

const features = [
  {
    label: 'Money-in',
    title: 'Real-Time Conversion',
    description: 'Seamlessly convert your crypto into fiat at the moment of purchase. No need for manual exchanges transactions are instant, automatic, and come without conversion fees, can spend with confidence anytime, anywhere.',
    image: 'url(https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80)',
  },
  {
    label: 'Accounts',
    title: 'Low Fees',
    description: 'Enjoy peace of mind with a transparent fee structure. No hidden markups, no surprise charges — just fair and predictable costs every time use your card, whether at home or abroad.',
    image: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80)',
  },
  {
    label: 'Global Usage',
    title: 'Global Usage',
    description: 'Use your Unione card seamlessly across the globe. From online shopping to in-store purchases and ATM withdrawals, it works anywhere Visa is accepted, turning your crypto into true borderless money.',
    image: 'url(https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&q=80)',
  },
  {
    label: 'App',
    title: 'Easy-to-Use App',
    description: 'Control your entire financial experience from one intuitive app. Easily top up, monitor spending, manage your card, and explore features all from a clean dashboard available on both iOS and Android.',
    image: 'url(https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80)',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Real-Time Conversion, Low Fees, Global usage, Easy-to-Use App
          </h2>
        </motion.div>
      </div>

      <div className="w-full px-0">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 items-start"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="overflow-hidden"
              style={{
                marginTop: `${index * 60}px`,
              }}
            >
              <div
                className="w-full h-72 relative"
                style={{
                  background: feature.image,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute top-6 left-6 text-sm font-bold" style={{
                  color: '#FF1493',
                  letterSpacing: '0.05em'
                }}>
                  {feature.label}
                </p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  {feature.description}
                </p>
                <button className="text-xs font-bold hover:opacity-80 transition-opacity" style={{
                  letterSpacing: '0.1em'
                }}>
                  LEARN MORE
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
