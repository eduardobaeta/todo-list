import styles from './Checkbox.module.css'

type checkBoxProps = {
  checked: boolean;
  onChange: () => void;
}

export function Checkbox(props: checkBoxProps) {
  return (
    <input
      className={styles.checkbox}
      onChange={props.onChange}
      checked={props.checked}
      type="checkbox"
    />
  )
}