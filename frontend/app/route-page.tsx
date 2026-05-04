import { IoraButton } from '../components/ui/IoraButton'

type RoutePageProps = {
  title: string
}

export function RoutePage({ title }: RoutePageProps) {
  return (
    <main>
      <h1>{title}</h1>
      <nav aria-label="Design system button examples">
        <IoraButton variant="primary" size="md">
          View Portfolio
        </IoraButton>
        <IoraButton variant="secondary" size="md" showArrow={false}>
          Contact
        </IoraButton>
        <IoraButton variant="gradient" size="full" showArrow={false}>
          문의 보내기
        </IoraButton>
        <IoraButton disabled variant="primary" size="md">
          Disabled
        </IoraButton>
      </nav>
    </main>
  )
}
