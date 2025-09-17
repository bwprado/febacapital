import Image from 'next/image'
import SocialButtons from '../socials'
import WhatsAppButton from '../whatsapp-button'
import styles from './footer.module.css'

export default function Footer({ menuItems }: { menuItems: string[] }) {
  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
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

          <div className={styles.footerSection}>
            <nav className={styles.footerNav}>
              <h3 className={styles.footerNavTitle}>NAVEGUE NO SITE</h3>
              {menuItems.map((item) => (
                <a href="#" className={styles.footerNavLink} key={item}>
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div
            className={styles.footerSocialSection}
          >
            <p className={styles.footerSocialTitle}>Acompanhe nas redes</p>
            <SocialButtons darkMode className={styles.footerSocialButtons} />
          </div>

          <div className={styles.footerSection}>
            <p className={styles.footerDescription}>
              Duis aute irure dolor in reprehenderit
              <br />
              in voluptate velit esse cillum dolore
            </p>
            <div className={styles.footerContact}>
              <p className={styles.footerContactInfo}>(11) 9909-9091</p>
              <p className={styles.footerContactInfo} data-highlight="true">contato@liva.com.br</p>
            </div>
            <WhatsAppButton />
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p>Liva © 2022 Todos os direitos reservados.</p>
            <Image
              src="/febacapital.svg"
              alt="febacapital"
              width={80}
              height={10}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
