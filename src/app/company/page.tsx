import { Metadata } from 'next'
import CompanyVision from '@/components/sections/company/CompanyVision'
import Milestones from '@/components/sections/company/Milestones'
import ContactCTA from '@/components/sections/company/ContactCTA'

export const metadata: Metadata = {
  title: 'About UNIONE',
  description: 'UNIONE은 더 나은 금융 경험을 만들기 위해 최선을 다하고 있습니다. 우리의 비전은 전 세계 모든 사람이 자유롭고 안전하게 금융 서비스를 이용하는 것입니다.',
}

export default function CompanyPage() {
  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <CompanyVision />
      <Milestones />
      <ContactCTA />
    </main>
  )
}
