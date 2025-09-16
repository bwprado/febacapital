import Button from '../button'
import WhatsApp from '../icons/whatsapp'
import styles from './whatsapp-button.module.css'

export default function WhatsAppButton() {
  return (
    <Button variant="action" className={`${styles.whatsappButton} test`}>
      <WhatsApp fill="var(--background)" width={18} height={18} />
      WHATSAPP
    </Button>
  )
}
