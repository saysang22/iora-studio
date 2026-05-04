import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type IoraButtonVariant = 'primary' | 'secondary' | 'gradient'

export type IoraButtonSize = 'sm' | 'md' | 'lg' | 'full'

export type IoraButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> & {
  variant?: IoraButtonVariant
  size?: IoraButtonSize
  disabled?: boolean
  trailingIcon?: ReactNode
  showArrow?: boolean
}
