import { Venture } from '@/app/services/ventures'
import styles from './ventures.module.css'
import Bed from '../icons/bed'
import CameraIcon from '../icons/camera-icon'

interface VentureDetailsProps {
  venture: Venture
}

export default function VentureDetails({ venture }: VentureDetailsProps) {
  return (
    <div className={styles.hoverContent}>
      {venture.isPreLaunch && (
        <div className={styles.hoverPreLaunchBadge}>PRÉ LANÇAMENTO</div>
      )}
      <div className={styles.ventureName}>{venture.name}</div>

      <div className={styles.locationDetails}>
        <div className={styles.locationItem}>
          <span className={styles.locationLabel}>Cidade</span>
          <span className={styles.locationValue}>
            {venture.city || 'Barra Velha'}
          </span>
        </div>
        <div className={styles.locationItem}>
          <span className={styles.locationLabel}>Bairro</span>
          <span className={styles.locationValue}>
            {venture.neighborhood || 'Tabuleiro'}
          </span>
        </div>
      </div>

      <div className={styles.features}>
        {venture.features?.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <div className={styles.featureIcon} />
            <span className={styles.featureText}>{feature}</span>
          </div>
        )) || (
          <>
            <div className={styles.feature}>
              <Bed className={styles.featureIcon} />
              <span className={styles.featureText}>
                Apartamento com 3 dormitórios sendo 1 suite
              </span>
            </div>
            <div className={styles.feature}>
              <CameraIcon className={styles.featureIcon} />
              <span className={styles.featureText}>Condomínio Fechado</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
