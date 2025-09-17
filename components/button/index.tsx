import styles from './button.module.css'
import { capitalize } from '@/lib/utils'

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: 'primary' | 'action' | 'outline' | 'secondary'
  }
) {
  const { className, variant, ...rest } = props
  const selectedClassName = [
    className,
    styles.btnBase,
    styles[`btn${capitalize(variant)}`]
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <button className={selectedClassName} {...rest}>
      {rest.children}
    </button>
  )
}
