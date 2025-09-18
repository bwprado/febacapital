'use client'

import Button from '../button'
import FiltersIcon from '../icons/filters'
import XIcon from '../icons/x-icon'
import Select from '../select'
import styles from './filters.module.css'

import { useState } from 'react'

const developmentStageOptions = [
  { value: 'planning', label: 'Planejamento' },
  { value: 'construction', label: 'Em Construção' },
  { value: 'completed', label: 'Concluído' }
]

const locationOptions = [
  { value: 'sao-paulo', label: 'São Paulo' },
  { value: 'rio-de-janeiro', label: 'Rio de Janeiro' },
  { value: 'minas-gerais', label: 'Minas Gerais' }
]

const propertyTypeOptions = [
  { value: 'residential', label: 'Residencial' },
  { value: 'commercial', label: 'Comercial' },
  { value: 'mixed', label: 'Misto' }
]

export default function Filters() {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState({
    developmentStage: 'all',
    location: 'all',
    propertyType: 'all'
  })

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const handleClearFilters = () => {
    setFilters({
      developmentStage: 'all',
      location: 'all',
      propertyType: 'all'
    })
  }

  return (
    <div className={styles.filtersContainer}>
      <Button
        variant="primary"
        className={styles.filterButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiltersIcon />
        FILTROS
      </Button>

      {isOpen && (
        <div className={styles.filterDropdown}>
          <div className={styles.filterOptions}>
            <Select
              options={developmentStageOptions}
              placeholder="Estágio do empreendimento"
              value={filters.developmentStage}
              onChange={(value) =>
                handleFilterChange('developmentStage', value)
              }
              aria-label="Estágio do empreendimento"
            />

            <Select
              options={locationOptions}
              placeholder="Localização"
              value={filters.location}
              onChange={(value) => handleFilterChange('location', value)}
              aria-label="Localização"
            />

            <Select
              options={propertyTypeOptions}
              placeholder="Tipo de imóvel"
              value={filters.propertyType}
              onChange={(value) => handleFilterChange('propertyType', value)}
              aria-label="Tipo de imóvel"
            />
          </div>
        </div>
      )}
    </div>
  )
}
