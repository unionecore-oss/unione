'use client'

import { useEffect, useState } from 'react'

interface UseParallaxOptions {
  speed?: number
  direction?: 'up' | 'down'
}

export function useParallax(options: UseParallaxOptions = {}) {
  const { speed = 0.5, direction = 'up' } = options
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const multiplier = direction === 'up' ? -1 : 1
      setOffset(scrolled * speed * multiplier)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, direction])

  return offset
}

// Helper hook for element-specific parallax
export function useElementParallax(options: UseParallaxOptions = {}) {
  const { speed = 0.5, direction = 'up' } = options
  const [offset, setOffset] = useState(0)
  const [elementTop, setElementTop] = useState(0)

  const setRef = (element: HTMLElement | null) => {
    if (element) {
      const rect = element.getBoundingClientRect()
      setElementTop(rect.top + window.scrollY)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const distance = scrolled - elementTop
      const multiplier = direction === 'up' ? -1 : 1

      if (distance > -window.innerHeight && distance < window.innerHeight) {
        setOffset(distance * speed * multiplier)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, direction, elementTop])

  return { ref: setRef, offset }
}
