'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import Card from '@/components/common/Card'

export default function APYCalculator() {
  const [principal, setPrincipal] = useState(10000)
  const [apy] = useState(4.5)
  const monthlyEarning = ((principal * apy) / 100 / 12).toFixed(2)
  const yearlyEarning = ((principal * apy) / 100).toFixed(2)

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          className="max-w-2xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2
            className="text-4xl font-bold mb-8 text-center"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Calculate Your Earnings
          </h2>

          <Card className="p-8">
            <div className="mb-6">
              <label className="block mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Principal Amount: ${principal.toLocaleString()}
              </label>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="text-center mb-6">
              <div className="text-sm mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                APY
              </div>
              <div className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                {apy}%
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
                <div className="text-sm mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                  Monthly Earning
                </div>
                <div
                  className="text-3xl font-bold bg-gradient-pink-purple bg-clip-text text-transparent"
                >
                  ${monthlyEarning}
                </div>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
                <div className="text-sm mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                  Yearly Earning
                </div>
                <div
                  className="text-3xl font-bold bg-gradient-pink-purple bg-clip-text text-transparent"
                >
                  ${yearlyEarning}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
