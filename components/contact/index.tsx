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
            <div className={styles.stack}>
              {consultants.map((consultant) => (
                <Image
                  key={consultant.name}
                  src={consultant.image}
                  alt={consultant.name}
                  className={styles.avatar}
                  width={100}
                  height={100}
                  style={{
                    objectPosition: consultant.facePosition
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <Form />
      </div>
      <div className={styles.rightSection}></div>
    </section>
  )
}
