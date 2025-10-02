'use client'

import { motion } from 'framer-motion'

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-0.5"
        style={{ backgroundColor: 'var(--color-border)', transform: 'translateX(-50%)' }}
      />

      {items.map((item, index) => (
        <motion.div
          key={item.year}
          className="relative mb-12 last:mb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <div
                className="text-3xl font-bold mb-2 bg-gradient-pink-purple bg-clip-text text-transparent"
              >
                {item.year}
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {item.title}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>{item.description}</p>
            </div>

            {/* Dot */}
            <div
              className="w-4 h-4 rounded-full z-10"
              style={{
                background: 'linear-gradient(135deg, var(--color-accent-pink), var(--color-accent-purple))',
              }}
            />

            <div className="flex-1" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
