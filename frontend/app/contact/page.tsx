import type { Metadata } from 'next'
import { RoutePage } from '../route-page'

export const metadata: Metadata = {
  title: 'Contact',
  description: '이오라 스튜디오에 프로젝트 문의를 남기고 상담 일정을 예약하세요.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return <RoutePage title="CONTACT" />
}
