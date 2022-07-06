import { useState } from 'react'
import { Checkbox } from './Checkbox'
import { MdOutlineDeleteOutline } from 'react-icons/md'

import styles from './Task.module.css'
import { TaskProps } from '../@types'

type taskProps = {
  taskProps: TaskProps;
  updateIsDone: (id: number, status: boolean) => void;
}

export function Task(props: taskProps) {

  const [isDone, setIsDone] = useState(props.taskProps.isDone)

  function handleSetIsDone() {
    setIsDone(!isDone)
    props.updateIsDone(props.taskProps.id, !isDone)
  }

  return (
    <div className={styles.container}>
      <Checkbox onChange={handleSetIsDone} checked={isDone} />
      {isDone ?
        (
          <p className={styles.labelDone}>
            <s>
              {props.taskProps.content}
            </s>
          </p>
        )
        :
        (
          <p className={styles.label}>
            {props.taskProps.content}
          </p>
        )
      }
      <MdOutlineDeleteOutline className={styles.deleteIcon} size={24} />
    </div>
  )
}