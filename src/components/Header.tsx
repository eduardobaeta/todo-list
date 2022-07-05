import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src='/src/assets/todo-list-logotype.svg' alt="ToDo List Logotype" />
    </header>
  )
}