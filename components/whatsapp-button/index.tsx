import Button from '../button'
import WhatsApp from '../icons/whatsapp'
import styles from './whatsapp-button.module.css'

import { cn } from '@/lib/utils'

export default function WhatsAppButton({ className }: { className?: string }) {
  return (
    <Button variant="action" className={cn(styles.whatsappButton, className)}>
      <WhatsApp fill="var(--background)" width={18} height={18} />
      WHATSAPP
    </Button>
  )
}
