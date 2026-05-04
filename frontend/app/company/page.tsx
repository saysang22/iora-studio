import type { Metadata } from 'next'
import { RoutePage } from '../route-page'

export const metadata: Metadata = {
  title: 'Company',
  description: '이오라 스튜디오의 철학, 작업 방식, 팀 역량을 소개합니다.',
  alternates: {
    canonical: '/company',
  },
}

export default function CompanyPage() {
  return <RoutePage title="COMPANY" />
}
