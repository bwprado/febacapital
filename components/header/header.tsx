import Image from 'next/image'
import SocialButtons from '../socials'
import WhatsAppButton from '../whatsapp-button'
import Menu from '../menu'
import MenuMobile from '../menu-mobile'
import styles from './header.module.css'

export default function Header({ menuItems }: { menuItems: string[] }) {
  return (
    <header className={styles.header}>
      <Image
        src="/liva.png"
        alt="Liva - Empreendimentos Imobiliários"
        width={108}
        height={43}
        className={styles.logo}
        priority
      />
      <Menu items={menuItems} />
      <div className={styles.socialButtons}>
        <SocialButtons />
      </div>
      <div className={styles.whatsappButton}>
        <WhatsAppButton />
      </div>
      <MenuMobile items={menuItems} />
    </header>
  )
}
