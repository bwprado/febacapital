'use client'

import Image from 'next/image'
import Facebook from '../icons/facebook'
import Instagram from '../icons/instagram'
import MenuIcon from '../icons/menu-icon'
import WhatsApp from '../icons/whatsapp'
import styles from './menu-mobile.module.css'

import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import WhatsAppButton from '../whatsapp-button'
import XIcon from '../icons/x-icon'

export default function MenuMobile({
  items,
  className
}: {
  items: string[]
  className?: string
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [open])

  const dialogRef = useRef<HTMLDialogElement>(null)
  return (
    <div>
      <button
        className={styles.menuMobileButton}
        title="Menu"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </button>
      <dialog
        className={styles.menuMobile}
        ref={dialogRef}
        onClose={() => setOpen(false)}
      >
        <div className={styles.dialogContent}>
          <div className={styles.dialogHeader}>
            <Image
              src="/liva.png"
              alt="liva"
              width={108}
              height={43}
              className={styles.logo}
            />
            <button
              className={styles.closeButton}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <XIcon />
            </button>
          </div>

          <ul className={cn(styles.menuMobileList, className)}>
            {items.map((item) => (
              <li key={item} className={styles.menuMobileLink}>
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.socialSection}>
            <p className={styles.socialText}>Acompanhe nas redes</p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <Instagram />
              </a>
            </div>
          </div>

          <WhatsAppButton />
        </div>
      </dialog>
    </div>
  )
}
