import { useState } from 'react'
import { Checkbox } from './Checkbox'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { TaskType } from '../@types'

import styles from './Task.module.css'

interface TaskProps {
  task: TaskType;
  onUpdateIsDone: (id: string, status: boolean) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ task, onDeleteTask, onUpdateIsDone }: TaskProps) {

  const [isDone, setIsDone] = useState(task.isDone)

  function handleSetIsDone() {
    setIsDone(!isDone)
    onUpdateIsDone(task.id, !isDone)
  }

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  return (
    <div className={styles.container}>
      <Checkbox
        onChange={handleSetIsDone}
        checked={isDone}
      />
      {isDone ?
        (
          <p className={styles.labelDone}>
            <s>
              {task.content}
            </s>
          </p>
        )
        :
        (
          <p className={styles.label}>
            {task.content}
          </p>
        )
      }
      <MdOutlineDeleteOutline 
      onClick={handleDeleteTask} 
      className={styles.deleteIcon} 
      size={24} 
      />
    </div>
  )
}