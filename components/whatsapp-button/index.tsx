import Image from 'next/image'
import Button from '../button'
import styles from './whatsapp-button.module.css'

export default function WhatsAppButton() {
  return (
    <Button variant="action" className={`${styles.whatsappButton} test`}>
      <Image src="/whatsapp.svg" alt="WhatsApp" width={14} height={14} />
      WHATSAPP
    </Button>
  )
}
