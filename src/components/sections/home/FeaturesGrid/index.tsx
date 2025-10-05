'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

const features = [
  {
    number: '1',
    title: 'Card',
    description:
      'Turn your crypto into real-world spending power. Instantly use your assets anywhere Visa is accepted — online, offline, or at ATMs.',
  },
  {
    number: '2',
    title: 'Earn',
    description:
      'Make your assets work for you. Choose flexible or fixed plans, earn in real time, and enjoy full on-chain transparency.',
  },
  {
    number: '3',
    title: 'Reward',
    description:
      'Grow together with your network. Invite friends, boost your mining speed, and unlock greater rewards through a community-driven model.',
  },
  {
    number: '4',
    title: 'Wallet',
    description:
      'Safely store, send, and receive crypto in one secure place. Manage assets, top up your card, stake, and shop — all from your wallet.',
  },
]

export default function FeaturesGrid() {
  // 4행 2열 레이아웃: rain.xyz 스타일
  const gridItems = [
    { type: 'text', feature: features[0] }, // 1행 1열: 텍스트
    { type: 'number', feature: features[0] }, // 1행 2열: 숫자 1
    { type: 'number', feature: features[1] }, // 2행 1열: 숫자 2
    { type: 'text', feature: features[1] }, // 2행 2열: 텍스트
    { type: 'text', feature: features[2] }, // 3행 1열: 텍스트
    { type: 'number', feature: features[2] }, // 3행 2열: 숫자 3
    { type: 'number', feature: features[3] }, // 4행 1열: 숫자 4
    { type: 'text', feature: features[3] }, // 4행 2열: 텍스트
  ]

  return (
    <section className="py-0">
      <div className="w-full">
        {/* 2열 그리드 */}
        <div className="grid grid-cols-2 gap-0">
          {gridItems.map((item, index) => {
            const isText = item.type === 'text'

            return (
              <motion.div
                key={index}
                className="relative"
                initial="initial"
                whileInView="animate"
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.05 }}
              >
                {isText ? (
                  // 텍스트 콘텐츠 - 보라색 그라디언트 + 글래스모피즘
                  <div
                    className="asset_container flex flex-col justify-center px-6 py-20 lg:px-12 lg:py-32"
                    style={{
                      background: 'linear-gradient(135deg, rgba(91, 44, 145, 0.9) 0%, rgba(139, 92, 246, 0.8) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(167, 139, 250, 0.2)',
                      minHeight: '400px',
                      height: '500px',
                      boxShadow: `
                        0 8px 32px rgba(91, 44, 145, 0.3),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <h3
                      className="text-2xl lg:text-[42px] font-semibold mb-4 lg:mb-6"
                      style={{
                        lineHeight: '1.1',
                        color: '#FFFFFF',
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      {item.feature.title}
                    </h3>
                    <p
                      className="text-sm lg:text-[15px]"
                      style={{
                        lineHeight: '1.5',
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      {item.feature.description}
                    </p>
                  </div>
                ) : (
                  // 숫자 콘텐츠 - 어두운 보라색 배경 + 네온 글로우
                  <div
                    className="asset_container relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #1a0b2e 0%, #2d1b69 100%)',
                      border: '1px solid rgba(139, 92, 246, 0.15)',
                      minHeight: '400px',
                      height: '500px',
                      boxShadow: `
                        0 8px 32px rgba(0, 0, 0, 0.4),
                        inset 0 1px 0 rgba(139, 92, 246, 0.1)
                      `,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div
                      className="text_giant right-side small"
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: item.feature.number === '1' || item.feature.number === '3' ? 'flex-end' : 'flex-start',
                        fontSize: 'clamp(250px, 35vw, 500px)',
                        lineHeight: '1',
                        color: '#8b5cf6',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: '900',
                        userSelect: 'none',
                        paddingLeft: item.feature.number === '2' || item.feature.number === '4' ? '40px' : '0',
                        paddingRight: item.feature.number === '1' || item.feature.number === '3' ? '40px' : '0',
                        textShadow: `
                          0 0 40px rgba(139, 92, 246, 0.8),
                          0 0 80px rgba(139, 92, 246, 0.6),
                          0 0 120px rgba(139, 92, 246, 0.4),
                          0 0 160px rgba(139, 92, 246, 0.2)
                        `
                      }}
                    >
                      {item.feature.number}
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
