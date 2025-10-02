'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import Button from '@/components/common/Button'
import GradientText from '@/components/common/GradientText'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main
      className="min-h-screen pt-16 flex items-center justify-center"
      style={{ backgroundColor: 'var(--color-background-primary)' }}
    >
      <div className="container-custom">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="text-6xl mb-4">⚠️</div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Something Went <GradientText>Wrong</GradientText>
          </h1>
          <p className="text-xl mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            죄송합니다. 오류가 발생했습니다.
          </p>
          <Button variant="primary" size="lg" onClick={reset}>
            Try Again
          </Button>
        </motion.div>
      </div>
    </main>
  )
}
