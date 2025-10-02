interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

export default function LoadingSpinner({ size = 'md', color }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} border-2 border-current border-t-transparent rounded-full animate-spin`}
        style={{
          color: color || 'var(--color-accent-pink)',
          borderTopColor: 'transparent',
        }}
      />
    </div>
  )
}
