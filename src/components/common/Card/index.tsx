import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export default function Card({ children, className = '', hover = true, onClick }: CardProps) {
  return (
    <div
      className={`card ${hover ? '' : 'hover:shadow-soft hover:translate-y-0'} ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {children}
    </div>
  )
}
