import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
      {/* Temporary text logo - will be replaced with actual logo image */}
      <div className="flex items-center">
        <span
          className="text-2xl font-bold tracking-tight"
          style={{ color: 'var(--color-text-primary)' }}
        >
          UNIONE
        </span>
      </div>
    </Link>
  )
}
