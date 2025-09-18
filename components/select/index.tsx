import ChevronDown from '../icons/chevron-down'
import styles from './select.module.css'

import { cn } from '@/lib/utils'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  options: SelectOption[]
  placeholder: string
  value?: string
  onChange: (value: string) => void
  className?: string
  disabled?: boolean
  required?: boolean
  'aria-label'?: string
}

export default function Select({
  options,
  placeholder,
  value,
  onChange,
  className,
  disabled = false,
  required = false,
  'aria-label': ariaLabel
}: SelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className={styles.selectDiv}>
      <select
        value={value || ''}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        aria-label={ariaLabel}
        className={cn(styles.select, className)}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={styles.selectOption}
          >
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className={styles.selectChevron} />
    </div>
  )
}
