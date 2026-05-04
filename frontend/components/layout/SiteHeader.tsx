'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './SiteLayout.module.scss'

const navItems = [
  { href: '/', label: 'HOME' },
  { href: '/company', label: 'COMPANY' },
  { href: '/portfolio', label: 'PORTFOLIO' },
  { href: '/contact', label: 'CONTACT' },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/">
        Iora Studio
      </Link>
      <nav aria-label="Primary navigation" className={styles.nav}>
        {navItems.map((item) => (
          <Link
            aria-current={pathname === item.href ? 'page' : undefined}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
