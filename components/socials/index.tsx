import { cn } from '@/lib/utils'
import Facebook from '../icons/facebook'
import Instagram from '../icons/instagram'
import styles from './socials.module.css'

export default function SocialButtons({
  className,
  classNameIcon
}: {
  className?: string
  classNameIcon?: string
}) {
  return (
    <ul className={cn(styles.socialIcons, className)}>
      <li>
        <a href="#" title="Facebook">
          <Facebook
            className={cn(styles.socialIcon, classNameIcon)}
            width={24}
            height={24}
          />
        </a>
      </li>
      <li>
        <a href="#" title="Instagram">
          <Instagram
            className={cn(styles.socialIcon, classNameIcon)}
            width={24}
            height={24}
          />
        </a>
      </li>
    </ul>
  )
}
