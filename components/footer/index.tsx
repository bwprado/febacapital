import Image from 'next/image'
import SocialLogin from '../socials'
import WhatsAppButton from '../whatsapp-button'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerContainer}>
        {/* Main footer content */}
        <div className={styles.footerGrid}>
          {/* Left column - Logo and description */}
          <div className={styles.footerSection}>
            <div className={styles.footerLogo}>
              <Image src="/liva.svg" alt="liva" width={108} height={43} />
            </div>
            <p className={styles.footerDescription}>
              Duis aute irure dolor in reprehenderit
              <br />
              in voluptate velit esse cillum dolore
              <br />
              eu fugiat nulla pariatur.
            </p>
          </div>

          {/* Middle column - Navigation */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerNavTitle}>NAVEGUE NO SITE</h3>
            <nav className={styles.footerNav}>
              <a href="#" className={styles.footerNavLink}>
                HOME
              </a>
              <a href="#" className={styles.footerNavLink}>
                SOBRE A LIVA
              </a>
              <a href="#" className={styles.footerNavLink}>
                EMPREENDIMENTOS
              </a>
              <a href="#" className={styles.footerNavLink}>
                NOTÍCIAS
              </a>
              <a href="#" className={styles.footerNavLink}>
                CONTATO
              </a>
            </nav>
          </div>

          {/* Right column - Contact and social */}
          <div className={styles.footerSection}>
            <p className={styles.footerDescription}>
              Duis aute irure dolor in reprehenderit
              <br />
              in voluptate velit esse cillum dolore
            </p>
            <div className={styles.footerContact}>
              <p className={styles.footerContactInfo}>(11) 9909-9091</p>
              <p className={styles.footerContactInfo}>contato@liva.com.br</p>
            </div>
            <div className={styles.footerSocialSection}>
              <p className={styles.footerSocialTitle}>Acompanhe nas redes</p>
              <SocialLogin />
              <WhatsAppButton />
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p>Liva © 2022 Todos os direitos reservados.</p>
            <Image
              src="/febacapital.svg"
              alt="febacapital"
              width={108}
              height={43}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
