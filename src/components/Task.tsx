import { useState } from 'react'
import { Checkbox } from './Checkbox'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { TaskType } from '../@types'

import styles from './Task.module.css'

interface TaskProps {
  task: TaskType;
  updateIsDoneFunction: (id: string, status: boolean) => void;
  deleteTaskFunction: (id: string) => void;
}

export function Task(props: TaskProps) {

  const [isDone, setIsDone] = useState(props.task.isDone)

  function handleSetIsDone() {
    setIsDone(!isDone)
    props.updateIsDoneFunction(props.task.id, !isDone)
  }

  function handleDeleteTask() {
    props.deleteTaskFunction(props.task.id);
  }

  return (
    <div className={styles.container}>
      <Checkbox onChange={handleSetIsDone} checked={isDone} />
      {isDone ?
        (
          <p className={styles.labelDone}>
            <s>
              {props.task.content}
            </s>
          </p>
        )
        :
        (
          <p className={styles.label}>
            {props.task.content}
          </p>
        )
      }
      <MdOutlineDeleteOutline onClick={handleDeleteTask} className={styles.deleteIcon} size={24} />
    </div>
  )
}