import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  // Base styles with touch optimization
  const baseStyles = 'font-medium rounded-full transition-all duration-300 min-w-touch min-h-touch'

  const variantStyles = {
    primary: 'btn-primary active:scale-95 active:opacity-90',
    secondary: 'btn-secondary active:scale-95 active:opacity-90',
    outline: 'bg-transparent border-2 hover:bg-background-accent active:scale-95 active:opacity-90',
  }

  const sizeStyles = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2 text-sm',
    lg: 'px-8 py-3 text-base',
  }

  const widthStyles = fullWidth ? 'w-full' : ''

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
      style={{ touchAction: 'manipulation' }}
      {...props}
    >
      {children}
    </button>
  )
}
