import Button from '../button'
import FiltersIcon from '../icons/filters'
import styles from './filters.module.css'

export default function Filters() {
  return (
    <div>
      <Button variant="primary" className={styles.filterButton}>
        <FiltersIcon />
        FILTROS
      </Button>
      <div className={styles.filterOptions}>
        <div className={styles.filterOption}>
          <span>Todos</span>
          <span>Todos</span>
        </div>
      </div>
    </div>
  )
}
