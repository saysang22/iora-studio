import Link from 'next/link'
import styles from './SiteLayout.module.scss'

const footerGroups = [
  {
    title: 'SERVICES',
    links: ['Web Development', 'UI/UX Design', 'AI Automation', 'Branding Strategy'],
  },
  {
    title: 'CONNECT',
    links: ['Inquiry Form', 'Instagram', 'LinkedIn', 'Naver Blog'],
  },
]

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <h2>Iora.Studio</h2>
          <p>
            기술과 감성이 만나는 지점에서,
            <br />
            당신의 가치를 가장 세련되게 담아냅니다.
          </p>
          <div className={styles.socials} aria-label="Social links">
            <Link href="/contact">◔</Link>
            <Link href="/contact">✉</Link>
            <Link href="/contact">⌯</Link>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div className={styles.footerColumn} key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((link) => (
              <Link href="/contact" key={link}>
                {link}
              </Link>
            ))}
          </div>
        ))}

        <div className={styles.office}>
          <h3>OFFICE</h3>
          <p>
            서울특별시 강남구 테헤란로 123
            <br />
            대한다크
          </p>
          <span>상담 가능: 10:00 - 18:00 KST</span>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2024 Iora Studio. All rights reserved.</p>
        <nav aria-label="Legal links">
          <Link href="/contact">개인정보처리방침</Link>
          <Link href="/contact">이용약관</Link>
        </nav>
      </div>
    </footer>
  )
}
