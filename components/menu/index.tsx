import styles from './menu.module.css'

import { cn } from '@/lib/utils'

export default function Menu({
  items,
  className
}: {
  items: string[]
  className?: string
}) {
  return (
    <ul className={cn(styles.menu, className)}>
      {items.map((item) => (
        <li key={item} className={styles.link}>
          {item}
        </li>
      ))}
    </ul>
  )
}
