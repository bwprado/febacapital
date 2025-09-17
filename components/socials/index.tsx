import { cn } from '@/lib/utils'
import Facebook from '../icons/facebook'
import Instagram from '../icons/instagram'
import styles from './socials.module.css'

export default function SocialButtons({
  darkMode = false,
  className
}: {
  darkMode?: boolean
  className?: string
}) {
  return (
    <ul
      className={cn(
        styles.socialIcons,
        darkMode ? styles?.darkMode || '' : '',
        className
      )}
    >
      <li>
        <a href="#" title="Facebook">
          <Facebook
            className={cn(
              styles.socialIcon,
              darkMode ? styles.darkMode : '',
              className
            )}
            width={24}
            height={24}
          />
        </a>
      </li>
      <li>
        <a href="#" title="Instagram">
          <Instagram
            className={`${styles.socialIcon} ${
              darkMode ? styles.darkMode : ''
            }`}
            width={24}
            height={24}
          />
        </a>
      </li>
    </ul>
  )
}
