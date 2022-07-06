import { useState } from 'react'
import { Checkbox } from './Checkbox'
import { MdOutlineDeleteOutline } from 'react-icons/md'

import styles from './Task.module.css'
import { TaskProps } from '../@types'

type taskProps = {
  taskProps: TaskProps;
  updateIsDoneFunction: (id: number, status: boolean) => void;
  deleteTaskFunction: (id: number) => void;
}

export function Task(props: taskProps) {

  const [isDone, setIsDone] = useState(props.taskProps.isDone)

  function handleSetIsDone() {
    setIsDone(!isDone)
    props.updateIsDoneFunction(props.taskProps.id, !isDone)
  }

  function handleDeleteTask() {
    props.deleteTaskFunction(props.taskProps.id);
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
      <MdOutlineDeleteOutline onClick={handleDeleteTask} className={styles.deleteIcon} size={24} />
    </div>
  )
}