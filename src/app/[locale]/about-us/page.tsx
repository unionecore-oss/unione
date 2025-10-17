import { Metadata } from 'next'
import CompanyVision from '@/components/sections/company/CompanyVision'
import AboutUnione from '@/components/sections/company/AboutUnione'
import ContactCTA from '@/components/sections/company/ContactCTA'

export const metadata: Metadata = {
  title: 'About UNIONE',
  description: 'We are dedicated to creating a better financial experience. Our vision is for everyone around the world to access financial services freely and securely.',
}

export default function CompanyPage() {
  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <CompanyVision />
      <AboutUnione />
      <ContactCTA />
    </main>
  )
}
