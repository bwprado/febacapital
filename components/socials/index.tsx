import Image from 'next/image'
import styles from './socials.module.css'

export default function SocialLogin() {
  return (
    <ul className={styles.socialIcons}>
      <li>
        <a href="#" className={styles.socialIcon} title="Facebook">
          <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
        </a>
      </li>
      <li>
        <a href="#" className={styles.socialIcon} title="Instagram">
          <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
        </a>
      </li>
    </ul>
  )
}
