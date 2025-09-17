import Image from 'next/image'
import Menu from './menu'
import SocialLogin from './socials'
import WhatsAppButton from './whatsapp-button'

export default function Header({ menuItems }: { menuItems: string[] }) {
  return (
    <header className="header">
      <Image
        src="/liva.png"
        alt="liva"
        width={108}
        height={43}
        className="logo"
      />
      <Menu items={menuItems} />
      <SocialLogin />
      <WhatsAppButton />
    </header>
  )
}
