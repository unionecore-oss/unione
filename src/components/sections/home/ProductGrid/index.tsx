'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ProductGrid() {
  const gridItems = [
    {
      number: '1',
      title: 'Card',
      description: 'Turn your crypto into real-world spending power. Instantly use your assets anywhere Visa is accepted — online, offline, or at ATMs.',
    },
    {
      number: '2',
      title: 'Earn',
      description: 'Make your assets work for you. Choose flexible or fixed plans, earn in real time, and enjoy full on-chain transparency.',
    },
    {
      number: '3',
      title: 'Reward',
      description: 'Grow together with your network. Invite friends, boost your mining speed, and unlock greater rewards through a community-driven model.',
    },
    {
      number: '4',
      title: 'Wallet',
      description: 'Safely store, send, and receive crypto in one secure place. Manage assets, top up your card, stake, and shop — all from your wallet.',
    },
  ]

  return (
    <section style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <div className="w-full">
        <div className="grid grid-cols-2 gap-0">
          {gridItems.map((item, index) => {
            const isNumberOnRight = index % 2 === 0 // 1행, 3행은 숫자가 오른쪽

            const textCell = (
              <motion.div
                key={`text-${index}`}
                className="product_asset_wrap"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div
                  className="asset_container h-[700px] p-12 flex items-center justify-center"
                  style={{
                    background: '#FFFFFF',
                  }}
                >
                  <div className="space-y-6 max-w-2xl">
                    <h2
                      className="text-7xl font-bold leading-tight"
                      style={{ color: '#000000' }}
                    >
                      {item.title}
                    </h2>
                    <p
                      className="text-2xl leading-relaxed"
                      style={{ color: '#666666' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )

            const numberCell = (
              <motion.div
                key={`number-${index}`}
                className="product_asset_wrap"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 + 0.1, duration: 0.6 }}
              >
                <div
                  className={`asset_container h-[700px] flex items-center ${
                    isNumberOnRight ? 'justify-end pr-16' : 'justify-start pl-16'
                  }`}
                  style={{
                    background: '#EEEEEE',
                  }}
                >
                  <div
                    className="text-[800px] font-bold leading-none select-none"
                    style={{
                      color: '#FFFFFF',
                      opacity: 1,
                    }}
                  >
                    {item.number}
                  </div>
                </div>
              </motion.div>
            )

            return (
              <React.Fragment key={index}>
                {isNumberOnRight ? (
                  <>
                    {textCell}
                    {numberCell}
                  </>
                ) : (
                  <>
                    {numberCell}
                    {textCell}
                  </>
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}
