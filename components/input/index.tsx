'use client'

import styles from './input.module.css'

export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
  }
) {
  const { defaultValue, placeholder, className, id, label, ...rest } = props
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        defaultValue={defaultValue}
        title={label}
        placeholder={placeholder || label}
        className={`${styles.input} ${className}`}
        {...rest}
      />
    </div>
  )
}
