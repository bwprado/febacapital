'use client'

import Image from 'next/image'
import Button from '../button'
import FiltersIcon from '../icons/filters'
import styles from './ventures.module.css'
import Filters from '../filters'
import VentureDetails from './venture-details'

import { useState } from 'react'
import { Venture } from '@/app/services/ventures'

export default function Ventures({ ventures }: { ventures: Venture[] }) {
  const [open, setOpen] = useState(false)
  return (
    <section className={styles.ventures}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.titleRegular}>Confira todos os </span>
          <span className={styles.titleHighlight}>empreendimentos da Liva</span>
        </h2>
        <Button
          variant="primary"
          className={styles.filterButton}
          onClick={() => setOpen(!open)}
        >
          <FiltersIcon />
          FILTROS
        </Button>
        <Filters open={open} setOpen={setOpen} />
      </div>

      {/* Ventures Grid */}
      <div className={styles.grid}>
        {ventures.map((venture) => (
          <div key={venture.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src={venture.image}
                alt={venture.name}
                fill
                className={styles.image}
              />

              <div className={styles.overlay} />
              <div className={styles.hoverOverlay} />

              <div className={styles.content}>
                {venture.isPreLaunch && (
                  <div className={styles.preLaunchBadge}>PRÉ LANÇAMENTO</div>
                )}
                <div className={styles.ventureName}>{venture.name}</div>
              </div>

              <VentureDetails venture={venture} />
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className={styles.loadMoreContainer}>
        <Button variant="primary" disabled className={styles.loadMoreButton}>
          CARREGAR MAIS
        </Button>
      </div>
    </section>
  )
}
