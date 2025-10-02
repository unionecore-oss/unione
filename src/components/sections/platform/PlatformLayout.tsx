import { ReactNode } from 'react'

interface PlatformLayoutProps {
  children: ReactNode
}

export default function PlatformLayout({ children }: PlatformLayoutProps) {
  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      {children}
    </main>
  )
}
