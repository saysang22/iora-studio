import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import './globals.scss'

export const metadata: Metadata = {
  title: {
    default: 'Iora Studio',
    template: '%s | Iora Studio',
  },
  description: '기술과 감성을 결합한 정교한 디지털 경험을 만드는 이오라 스튜디오입니다.',
  metadataBase: new URL('https://iora.studio'),
  openGraph: {
    title: 'Iora Studio',
    description: '기술과 감성을 결합한 정교한 디지털 경험을 만드는 이오라 스튜디오입니다.',
    siteName: 'Iora Studio',
    locale: 'ko_KR',
    type: 'website',
  },
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
