import { useState } from 'react'
import { Checkbox } from './Checkbox'
import { RiDeleteBin5Line } from 'react-icons/ri'

import styles from './Task.module.css'

type taskProps = {
  isDone: boolean;
  label: string;
}


export function Task(props: taskProps) {

  const [isDone, setIsDone] = useState(true)

  function handleSetIsDone() {
    setIsDone(!isDone)
    console.log('Change')
  }

  return (
    <div className={styles.container}>
      <Checkbox onChange={handleSetIsDone} checked={isDone} />
      {isDone ? (
        <p className={styles.labelDone}>
          <s>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
          </s>
        </p>
      ) :
        (<p className={styles.label}>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </p>)
      }
      <RiDeleteBin5Line className={styles.deleteIcon} size={24} />
    </div>
  )
}