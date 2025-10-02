import { ReactNode, ButtonHTMLAttributes } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  variant?: 'ghost' | 'solid'
}

export default function IconButton({
  children,
  size = 'md',
  variant = 'ghost',
  className = '',
  ...props
}: IconButtonProps) {
  const sizeStyles = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }

  const variantStyles = {
    ghost: 'hover:bg-background-accent',
    solid: 'bg-background-secondary hover:bg-background-accent',
  }

  return (
    <button
      className={`${sizeStyles[size]} ${variantStyles[variant]} rounded-full flex items-center justify-center transition-colors ${className}`}
      style={{ color: 'var(--color-text-secondary)' }}
      {...props}
    >
      {children}
    </button>
  )
}
