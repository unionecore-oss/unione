'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp } from '@/lib/animations'
import Button from '@/components/common/Button'
import GradientText from '@/components/common/GradientText'

export default function NotFound() {
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
          <div
            className="text-9xl font-bold mb-4 bg-gradient-pink-purple bg-clip-text text-transparent"
          >
            404
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Page <GradientText>Not Found</GradientText>
          </h1>
          <p className="text-xl mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            죄송합니다. 요청하신 페이지를 찾을 수 없습니다.
          </p>
          <Link href="/">
            <Button variant="primary" size="lg">
              Go Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
