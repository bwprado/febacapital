import styles from './button.module.css'

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: 'primary' | 'action'
    children: React.ReactNode
  }
) {
  const { className, variant, ...rest } = props
  const selectedClassName = [
    className,
    variant === 'primary' ? styles.btnPrimary : styles.btnAction
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <button className={selectedClassName} {...rest}>
      {props.children}
    </button>
  )
}
