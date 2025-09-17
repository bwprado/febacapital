import styles from './slider-buttons.module.css'

export default function SliderButtons(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      onClick={props.onClick}
      className={styles.sliderButton}
      disabled={props.disabled}
      {...props}
    >
      {props.children}
    </button>
  )
}
