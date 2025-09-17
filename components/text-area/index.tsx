'use client'

import styles from './text-area.module.css'

export default function TextArea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string
  }
) {
  const { defaultValue, placeholder, className, id, label, ...rest } = props
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        defaultValue={defaultValue}
        title={label}
        placeholder={placeholder || label}
        className={`${styles.textarea} ${className}`}
        {...rest}
      ></textarea>
    </div>
  )
}
