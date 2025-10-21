"use client"

import React from "react"
import { useId } from "react"
import { motion, type Variants } from "framer-motion"
import { useTranslations } from 'next-intl'

export function FeatureCardsGrid() {
  const t = useTranslations('pages.reward.features')

  const features = [
    { key: 'maximizeRewards' },
    { key: 'mobileFirst' },
    { key: 'userFriendly' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const // easeOut cubic-bezier
      }
    }
  }

  return (
    <div className="py-20 lg:py-32">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.key}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-8 md:p-10 rounded-3xl overflow-hidden min-h-[280px] md:min-h-[320px] cursor-pointer"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Grid size={20} index={index} />
            <motion.p
              className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-white relative z-20"
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              {t(`${feature.key}.title`)}
            </motion.p>
            <motion.p
              className="text-neutral-600 dark:text-neutral-400 mt-4 text-base md:text-lg font-normal relative z-20"
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              {t(`${feature.key}.description`)}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

// Pre-generated patterns to avoid hydration mismatch
const DEFAULT_PATTERNS = [
  [[7, 3], [8, 5], [9, 2], [10, 4], [8, 1]],
  [[9, 4], [7, 2], [10, 5], [8, 3], [9, 1]],
  [[8, 2], [10, 3], [7, 4], [9, 5], [8, 6]],
]

const Grid = ({
  pattern,
  size,
  index = 0,
}: {
  pattern?: number[][]
  size?: number
  index?: number
}) => {
  const p = pattern ?? DEFAULT_PATTERNS[index % DEFAULT_PATTERNS.length]
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  )
}

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId()

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}
