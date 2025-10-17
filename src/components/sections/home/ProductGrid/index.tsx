'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function ProductGrid() {
  const t = useTranslations('pages.home.productGrid')

  const gridItems = [
    {
      number: '1',
      title: t('card.title'),
      description: t('card.description'),
    },
    {
      number: '2',
      title: t('earn.title'),
      description: t('earn.description'),
    },
    {
      number: '3',
      title: t('reward.title'),
      description: t('reward.description'),
    },
    {
      number: '4',
      title: t('wallet.title'),
      description: t('wallet.description'),
    },
  ]

  return (
    <section style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
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
                  className="asset_container min-h-[400px] md:min-h-[450px] md:h-[500px] lg:h-[550px] 3xl:h-[600px] p-6 md:p-10 lg:p-12 3xl:p-16 flex items-center justify-center"
                  style={{
                    background: '#FFFFFF',
                  }}
                >
                  <div className="space-y-4 md:space-y-5 lg:space-y-6 3xl:space-y-8 max-w-2xl 3xl:max-w-4xl">
                    <h2
                      className="text-3xl md:text-[2.75rem] lg:text-5xl 3xl:text-6xl font-bold leading-tight"
                      style={{ color: '#000000' }}
                    >
                      {item.title}
                    </h2>
                    <p
                      className="text-base md:text-[1.0625rem] lg:text-xl 3xl:text-2xl leading-relaxed"
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
                  className={`asset_container min-h-[250px] md:min-h-[450px] md:h-[500px] lg:h-[550px] 3xl:h-[600px] flex items-center ${
                    isNumberOnRight ? 'justify-center md:justify-end md:pr-12 lg:pr-16 3xl:pr-20' : 'justify-center md:justify-start md:pl-12 lg:pl-16 3xl:pl-20'
                  }`}
                  style={{
                    background: '#EEEEEE',
                  }}
                >
                  <div
                    className="text-[200px] md:text-[350px] lg:text-[650px] 3xl:text-[750px] font-bold leading-none select-none"
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
