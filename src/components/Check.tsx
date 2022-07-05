import styles from './Check.module.css'

export function Checkbox() {
  return (
    <input className={styles.checkbox} type="checkbox" name="checkbox" id="checkbox" />
  )
}