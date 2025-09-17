import Image from 'next/image'

import styles from './hero.module.css'
import Button from '../button'

export default function Hero() {
  return (
    <main className={styles.hero}>
      <Image src="/hero-mask.svg" alt="Hero" width={472} height={472} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span>Contruimos confiança e </span>
          <span className={styles.heroTitleStrong}>realizamos sonhos!</span>
        </h1>
        <span className={styles.heroDescription}>
          Na Liva, cada projeto é planejado para facilitar a vida dos moradores,
          trazendo uma sensação máxima de bem-estar. Espaços que abrigam
          histórias de vida e que são desenvolvidos para que você viva momentos
          incríveis ao lado da sua família.
        </span>
        <Button variant="primary" className={styles.heroButton}>SAIBA MAIS</Button>
      </div>
    </main>
  )
}
