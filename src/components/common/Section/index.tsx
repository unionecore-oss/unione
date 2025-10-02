import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  backgroundColor?: string
  noPadding?: boolean
}

export default function Section({
  children,
  className = '',
  backgroundColor,
  noPadding = false,
}: SectionProps) {
  return (
    <section
      className={`${noPadding ? '' : 'section-padding'} ${className}`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {children}
    </section>
  )
}
