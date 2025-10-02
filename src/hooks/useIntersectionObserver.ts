'use client'

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [React.RefCallback<HTMLElement>, IntersectionObserverEntry | null] {
  const { threshold = 0, root = null, rootMargin = '0px', freezeOnceVisible = false } = options

  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const [node, setNode] = useState<HTMLElement | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)
  const frozen = useRef(false)

  useEffect(() => {
    // Disconnect previous observer
    if (observer.current) {
      observer.current.disconnect()
    }

    // Skip if frozen
    if (frozen.current) return

    // Skip if no node
    if (!node) return

    // Create new observer
    observer.current = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry)

        // Freeze if visible
        if (freezeOnceVisible && entry.isIntersecting) {
          frozen.current = true
          observer.current?.disconnect()
        }
      },
      { threshold, root, rootMargin }
    )

    // Observe the node
    observer.current.observe(node)

    // Cleanup
    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [node, threshold, root, rootMargin, freezeOnceVisible])

  return [setNode, entry]
}
