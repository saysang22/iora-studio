'use client'

import type { IoraButtonProps, IoraButtonSize, IoraButtonVariant } from '../../../types/ui'
import styles from './IoraButton.module.scss'

const defaultVariant: IoraButtonVariant = 'primary'
const defaultSize: IoraButtonSize = 'md'

function cx(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(' ')
}

export function IoraButton({
  children,
  className,
  disabled = false,
  showArrow,
  size = defaultSize,
  trailingIcon,
  type = 'button',
  variant = defaultVariant,
  ...buttonProps
}: IoraButtonProps) {
  const shouldShowArrow = showArrow ?? variant === 'primary'

  return (
    <button
      className={cx(styles.button, styles[variant], styles[size], className)}
      disabled={disabled}
      type={type}
      {...buttonProps}
    >
      <span className={styles.label}>{children}</span>
      {trailingIcon ? <span className={styles.icon}>{trailingIcon}</span> : null}
      {!trailingIcon && shouldShowArrow ? (
        <span aria-hidden="true" className={cx(styles.icon, styles.arrow)} />
      ) : null}
    </button>
  )
}
