import LoadingSpinner from '@/components/common/LoadingSpinner'

export default function Loading() {
  return (
    <div
      className="min-h-screen pt-16 flex items-center justify-center"
      style={{ backgroundColor: 'var(--color-background-primary)' }}
    >
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          Loading...
        </p>
      </div>
    </div>
  )
}
