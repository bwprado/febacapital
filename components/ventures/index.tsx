import Image from 'next/image'
import Button from '../button'
import Filters from '../icons/filters'
import styles from './ventures.module.css'

interface Venture {
  id: string
  name: string
  image: string
  isPreLaunch?: boolean
  isLarge?: boolean
}

interface VenturesProps {
  ventures: Venture[]
}

export default function Ventures({ ventures }: VenturesProps) {
  return (
    <section className={styles.ventures}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.titleRegular}>Confira todos os </span>
          <span className={styles.titleHighlight}>empreendimentos da Liva</span>
        </h2>
        <Button variant="secondary" className={styles.filterButton}>
          <Filters />
          FILTROS
        </Button>
      </div>

      {/* Ventures Grid */}
      <div className={styles.grid}>
        {ventures.map((venture) => (
          <div
            key={venture.id}
            className={styles.card}
          >
            <div className={styles.imageContainer}>
              <Image
                src={venture.image}
                alt={venture.name}
                fill
                className={styles.image}
              />

              <div className={styles.overlay} />

              <div className={styles.content}>
                {venture.isPreLaunch && (
                  <div className={styles.preLaunchBadge}>PRÉ LANÇAMENTO</div>
                )}
                <div className={styles.ventureName}>{venture.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className={styles.loadMoreContainer}>
        <Button variant="primary" disabled>
          CARREGAR MAIS
        </Button>
      </div>
    </section>
  )
}
