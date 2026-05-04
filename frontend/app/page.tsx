import type { Metadata } from 'next'
import Link from 'next/link'
import { IoraButton } from '../components/ui/IoraButton'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Home',
  description: '이오라 스튜디오의 디지털 경험, 포트폴리오, 프로젝트 예약 정보를 확인하세요.',
  alternates: {
    canonical: '/',
  },
}

const portfolioItems = [
  {
    category: 'FINTECH',
    title: 'Fintech Dashboard',
    description: 'A comprehensive financial management platform with clean data visualization.',
  },
  {
    category: 'COMMERCE',
    title: 'Luxury E-commerce',
    description: 'High-end fashion storefront with immersive visual storytelling.',
  },
  {
    category: 'BRANDING',
    title: 'Corporate Identity',
    description: 'Minimalist and modern brand website for a global tech firm.',
  },
]

const scheduleDays = [
  { day: '12', state: 'muted' },
  { day: '13', state: 'muted' },
  { day: '14', state: 'muted' },
  { day: '15', state: 'muted' },
  { day: '16', state: 'muted' },
  { day: '17', state: 'available' },
  { day: '18', state: 'busy' },
  { day: '19', state: 'muted' },
  { day: '20', state: 'selected' },
  { day: '21', state: 'muted' },
  { day: '22', state: 'available' },
  { day: '23', state: 'busy' },
]

const serviceItems = ['AI Integration', 'Web Development', 'Design System', 'Maintenance']

export default function HomePage() {
  return (
    <main className={styles.home}>
      <section className={styles.hero} aria-labelledby="home-hero-title">
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.heroOrb} />
          <div className={styles.heroDevice}>
            <div className={styles.deviceChrome}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.deviceGrid}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className={styles.heroContent}>
          <p className={styles.badge}>DIGITAL EXPERIENCE STUDIO</p>
          <h1 id="home-hero-title">기술과 감성을 결합한 정교한 디지털 경험</h1>
          <p className={styles.lead}>
            이오라 스튜디오는 브랜드의 본질을 해석하고 웹, AI, 디자인 시스템을 하나의
            완성도 높은 경험으로 연결합니다.
          </p>
          <div className={styles.heroActions}>
            <IoraButton variant="primary" size="md">
              View Portfolio
            </IoraButton>
            <IoraButton variant="secondary" size="md" showArrow={false}>
              Contact
            </IoraButton>
          </div>
        </div>
      </section>

      <section className={styles.portfolio} aria-labelledby="portfolio-title">
        <div className={styles.sectionHeading}>
          <p>WORKS</p>
          <h2 id="portfolio-title">Featured Portfolio</h2>
        </div>
        <div className={styles.portfolioGrid}>
          {portfolioItems.map((item, index) => (
            <article className={styles.portfolioCard} key={item.title}>
              <div className={styles.cardArtwork} data-index={index + 1} />
              <div className={styles.cardContent}>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link href="/portfolio">View Project</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.schedule} aria-labelledby="schedule-title">
        <div className={styles.scheduleCopy}>
          <div className={styles.sectionHeading}>
            <p>SCHEDULE</p>
            <h2 id="schedule-title">Current Schedule</h2>
          </div>
          <p>
            최상의 퀄리티를 위해 이오라 스튜디오는 한정된 프로젝트만 진행합니다.
            현재 진행 가능한 일정을 확인하시고 미팅을 예약하세요.
          </p>
          <div className={styles.legend} aria-label="Schedule status">
            <span>
              <i className={styles.availableDot} /> Available for May
            </span>
            <span>
              <i className={styles.busyDot} /> June Fully Booked
            </span>
          </div>
          <IoraButton variant="primary" size="lg" showArrow={false}>
            미팅 예약하기
          </IoraButton>
        </div>

        <div className={styles.calendar} aria-label="May 2026 availability calendar">
          <div className={styles.calendarHeader}>
            <h3>May 2026</h3>
            <div aria-hidden="true">
              <span>‹</span>
              <span>›</span>
            </div>
          </div>
          <div className={styles.weekdays}>
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className={styles.days}>
            {scheduleDays.map((item) => (
              <span className={styles[item.state]} key={item.day}>
                {item.day}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.services} aria-labelledby="services-title">
        <div>
          <p className={styles.badge}>IORA CAPABILITIES</p>
          <h2 id="services-title">작지만 밀도 높은 팀이 빠르게 설계하고 정교하게 완성합니다.</h2>
        </div>
        <ul>
          {serviceItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
