import type { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: '이오라 스튜디오가 제작한 음식, 여행, 기업, 이커머스, 스타트업 프로젝트를 살펴보세요.',
  alternates: {
    canonical: '/portfolio',
  },
}

const filters = ['전체', '음식', '여행', '기업', '이커머스', '스타트업']

const projects = [
  {
    category: '음식',
    title: '파인 다이닝 예약 랜딩 페이지',
    description: '레스토랑 예약 시스템이 포함된 미니멀한 브랜드 웹사이트 디자인.',
    visual: 'dining',
  },
  {
    category: '여행',
    title: '글로벌 투어 큐레이션 서비스',
    description: '현지 맞춤형 여행 코스 추천 시스템을 갖춘 모바일 인터페이스 디자인.',
    visual: 'travel',
  },
  {
    category: '기업',
    title: 'IT 솔루션 기업 브랜딩 사이트',
    description: '신뢰감을 주는 레이아웃과 직관적인 네비게이션 중심의 기업 홍보 웹사이트.',
    visual: 'corporate',
  },
  {
    category: '이커머스',
    title: '뷰티 브랜드 통합 쇼핑몰',
    description: '사용자 구매 여정을 최적화한 모바일 및 PC 대응 쇼핑몰 시스템 디자인.',
    visual: 'beauty',
  },
  {
    category: '스타트업',
    title: 'AI 기반 자산 관리 대시보드',
    description: '데이터 시각화를 통해 사용자가 복잡한 금융 정보를 쉽게 이해할 수 있는 UI 디자인.',
    visual: 'startup',
  },
  {
    category: '음식',
    title: '건강 간편식 정기 구독 앱',
    description: '직관적인 메뉴 선택과 정기 결제 프로세스를 강조한 커머스 앱 디자인.',
    visual: 'health',
  },
]

export default function PortfolioPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero} aria-labelledby="portfolio-title">
          <h1 id="portfolio-title">
            우리의 <span>포트폴리오</span>
          </h1>
          <p>
            이오라 스튜디오가 제안하는 디지털 경험의 기록입니다.
            <br />
            기술적인 완성도와 사용자 중심의 설계를 통해 비즈니스의 실질적인 성장을 돕습니다.
          </p>
        </section>

        <section className={styles.filters} aria-label="Portfolio filters">
          {filters.map((filter) => (
            <button className={filter === '전체' ? styles.activeFilter : undefined} key={filter} type="button">
              {filter}
            </button>
          ))}
        </section>

        <section className={styles.grid} aria-label="Portfolio project list">
          {projects.map((project) => (
            <article className={styles.card} key={project.title}>
              <div className={`${styles.visual} ${styles[project.visual]}`} aria-hidden="true" />
              <div className={styles.cardBody}>
                <span>{project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </section>

        <div className={styles.more}>
          <button type="button">프로젝트 더보기 +</button>
        </div>

      </div>
    </main>
  )
}
