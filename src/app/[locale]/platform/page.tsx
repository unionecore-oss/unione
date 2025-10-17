'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'
import Button from '@/components/common/Button'
import FeatureCard from '@/components/sections/platform/FeatureCard'
import StatsDisplay from '@/components/sections/platform/StatsDisplay'

const platforms = [
  {
    title: 'Reward',
    description: '모든 거래에서 리워드를 받으세요',
    icon: '🎁',
    href: '/platform/reward',
  },
  {
    title: 'Wallet',
    description: '안전하고 편리한 디지털 지갑',
    icon: '👛',
    href: '/platform/wallet',
  },
  {
    title: 'Earn',
    description: '자산을 예치하고 수익을 얻으세요',
    icon: '📈',
    href: '/platform/earn',
  },
]

const stats = [
  { value: '1M+', label: 'Active Users' },
  { value: '$5B+', label: 'Transaction Volume' },
  { value: '99.9%', label: 'Uptime' },
  { value: '200+', label: 'Countries' },
]

export default function PlatformPage() {
  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      {/* Hero Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: 'var(--color-text-primary)' }}
              variants={fadeInUp}
            >
              The <GradientText>Platform</GradientText> for Modern Finance
            </motion.h1>

            <motion.p
              className="text-xl mb-8"
              style={{ color: 'var(--color-text-secondary)' }}
              variants={fadeInUp}
            >
              리워드, 지갑, 수익 창출까지 한 곳에서 관리하세요.
              <br />
              UNIONE 플랫폼으로 더 나은 금융 경험을 시작합니다.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-background-secondary)' }}
      >
        <div className="container-custom">
          <StatsDisplay stats={stats} />
        </div>
      </section>

      {/* Platform Features */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Explore Our Platform
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {platforms.map((platform) => (
              <Link key={platform.title} href={platform.href}>
                <FeatureCard
                  icon={platform.icon}
                  title={platform.title}
                  description={platform.description}
                />
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
