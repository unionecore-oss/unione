'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import Card from '@/components/common/Card'

export default function RewardCalculator() {
  const [amount, setAmount] = useState(1000)
  const cashback = (amount * 0.03).toFixed(2)
  const annualReward = (amount * 12 * 0.03).toFixed(2)

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-background-secondary)' }}
    >
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
            Calculate Your Rewards
          </h2>

          <Card className="p-8">
            <div className="mb-6">
              <label className="block mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Monthly Spending: ${amount}
              </label>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
                <div className="text-sm mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                  Monthly Cashback
                </div>
                <div
                  className="text-3xl font-bold bg-gradient-pink-purple bg-clip-text text-transparent"
                >
                  ${cashback}
                </div>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
                <div className="text-sm mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                  Annual Reward
                </div>
                <div
                  className="text-3xl font-bold bg-gradient-pink-purple bg-clip-text text-transparent"
                >
                  ${annualReward}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
