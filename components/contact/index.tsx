import Image from 'next/image'
import Form from './form'
import styles from './contact.module.css'

import { getConsultants } from '@/app/services/consultants'

export default async function Contact() {
  const consultants = await getConsultants()
  return (
    <section className={styles.contact}>
      {/* Left Section - Dark Background */}
      <div className={styles.leftSection}></div>

      <div className={styles.middleSection}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Fale agora com um consultor de vendas
          </h2>
          <p className={styles.description}>
            Tire suas dúvidas e conheça de perto o seu{' '}
            <span className={styles.highlight}>novo jeito de morar</span>.
          </p>
          <div className={styles.consultants}>
            <p className={styles.consultantsLabel}>Consultores online</p>
            <div className={styles.profiles}>
              {consultants.map((consultant) => (
                <div className={styles.profile} key={consultant.name}>
                  <div className={styles.avatar}>
                    <Image
                      src={consultant.image}
                      alt={consultant.name}
                      className={styles.avatarImage}
                      width={60}
                      height={60}
                      style={{
                        objectPosition: consultant.facePosition
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Form />
      </div>
      {/* Right Section - Form Overlay */}
      <div className={styles.rightSection}></div>
    </section>
  )
}
