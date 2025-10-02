'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import Card from '@/components/common/Card'

const comparisons = [
  { feature: 'Savings APY', traditional: '0.5%', unione: '4.5%' },
  { feature: 'Min. Balance', traditional: '$1,000', unione: '$0' },
  { feature: 'Monthly Fees', traditional: '$10', unione: '$0' },
  { feature: 'Withdrawal Time', traditional: '3-5 days', unione: 'Instant' },
]

export default function ComparisonTable() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-background-secondary)' }}
    >
      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2
            className="text-4xl font-bold mb-8 text-center"
            style={{ color: 'var(--color-text-primary)' }}
          >
            UNIONE vs Traditional Banks
          </h2>

          <Card className="overflow-hidden">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: 'var(--color-background-secondary)' }}>
                  <th className="p-4 text-left" style={{ color: 'var(--color-text-primary)' }}>
                    Feature
                  </th>
                  <th className="p-4 text-center" style={{ color: 'var(--color-text-secondary)' }}>
                    Traditional
                  </th>
                  <th className="p-4 text-center" style={{ color: 'var(--color-text-primary)' }}>
                    UNIONE
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderTop: '1px solid var(--color-border)',
                      backgroundColor: index % 2 === 0 ? 'transparent' : 'var(--color-background-secondary)',
                    }}
                  >
                    <td className="p-4" style={{ color: 'var(--color-text-primary)' }}>
                      {row.feature}
                    </td>
                    <td className="p-4 text-center" style={{ color: 'var(--color-text-secondary)' }}>
                      {row.traditional}
                    </td>
                    <td
                      className="p-4 text-center font-bold bg-gradient-pink-purple bg-clip-text text-transparent"
                    >
                      {row.unione}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
