'use client'

import { useBreakpoint } from '@/hooks/useBreakpoint'
import { useViewportSize } from '@/hooks/useViewportSize'

/**
 * ResponsiveDebug Component
 *
 * Development-only component that displays current breakpoint and viewport information.
 * Useful for debugging responsive layouts during development.
 *
 * Usage:
 * - Add to layout.tsx wrapped in process.env.NODE_ENV === 'development' check
 * - Position: Fixed bottom-right corner
 * - Shows: Current breakpoint, viewport width/height, device type
 */
export default function ResponsiveDebug() {
  const breakpoint = useBreakpoint()
  const { width, height } = useViewportSize()

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  const getBreakpointColor = () => {
    switch (breakpoint) {
      case 'xs':
        return 'bg-red-500'
      case 'sm':
        return 'bg-orange-500'
      case 'md':
        return 'bg-yellow-500'
      case 'lg':
        return 'bg-green-500'
      case 'xl':
        return 'bg-blue-500'
      case '2xl':
        return 'bg-indigo-500'
      case '3xl':
        return 'bg-purple-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div
      className={`fixed bottom-4 right-4 z-[9999] ${getBreakpointColor()} text-white px-4 py-2 rounded-lg shadow-lg font-mono text-sm`}
      style={{
        backdropFilter: 'blur(10px)',
        opacity: 0.9,
      }}
    >
      <div className="flex flex-col gap-1">
        <div className="font-bold text-lg">{breakpoint.toUpperCase()}</div>
        <div className="text-xs opacity-90">
          {width}px × {height}px
        </div>
        <div className="text-xs opacity-75">
          {width < 768 ? '📱 Mobile' : width < 1024 ? '📱 Tablet' : '💻 Desktop'}
        </div>
      </div>
    </div>
  )
}
