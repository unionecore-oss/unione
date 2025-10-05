import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
      {/* Temporary text logo - will be replaced with actual logo image */}
      <div className="flex items-center">
        <span
          className="text-3xl font-bold"
          style={{
            background: 'linear-gradient(135deg, #00ffff 0%, #ff0080 50%, #b100ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
            fontWeight: 700,
          }}
        >
          UNIONE
        </span>
      </div>
    </Link>
  )
}
