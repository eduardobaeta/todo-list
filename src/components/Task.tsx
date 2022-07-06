import { Checkbox } from './Checkbox'
import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.container}>
      <Checkbox />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </p>
      
    </div>
  )
}