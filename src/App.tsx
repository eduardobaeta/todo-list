import React, { ChangeEvent, FormEvent, useState } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './components/Task';
import { Header } from './components/Header';
import { TaskType } from './@types';

import styles from '../src/App.module.css'
import '../src/styles/Global.css'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: '4b5a29f8-fd6a-11ec-b939-0242ac120002',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex nisi, eget consequat urna pulvinar nec. Integer vestibulum massa eu massa placerat, ut molestie dui hendrerit. Sed eu tellus vestibulum, semper nibh non, volutpat arcu.",
      isDone: true
    },
    {
      id: '4628d588-fd6a-11ec-b939-0242ac120002',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex nisi, eget consequat urna pulvinar nec. Integer vestibulum massa eu massa placerat, ut molestie dui hendrerit. Sed eu tellus vestibulum, semper nibh non, volutpat arcu.",
      isDone: true
    },
    {
      id: '412c21d4-fd6a-11ec-b939-0242ac120002',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex nisi, eget consequat urna pulvinar nec. Integer vestibulum massa eu massa placerat, ut molestie dui hendrerit. Sed eu tellus vestibulum, semper nibh non, volutpat arcu.",
      isDone: false
    },
    {
      id: '3acfcf16-fd6a-11ec-b939-0242ac120002',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex nisi, eget consequat urna pulvinar nec. Integer vestibulum massa eu massa placerat, ut molestie dui hendrerit. Sed eu tellus vestibulum, semper nibh non, volutpat arcu.",
      isDone: false
    },
    {
      id: '34f809dc-fd6a-11ec-b939-0242ac120002',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex nisi, eget consequat urna pulvinar nec. Integer vestibulum massa eu massa placerat, ut molestie dui hendrerit. Sed eu tellus vestibulum, semper nibh non, volutpat arcu.",
      isDone: false
    }
  ]);

  const [textInput, setTextInput] = useState('');

  const tasksOrderByIsDone = tasks.sort((x, y) => {
    let a = x.isDone;
    let b = y.isDone;
    return a == b ? 0 : a > b ? 1 : -1;
  });

  const totalTasks = tasks.length;

  const totalDoneTasks = tasks.reduce((result: TaskType[], task) => {
    task.isDone && result.push(task);
    return result;
  }, []).length;

  const isTasksVoid = tasks.length === 0;

  function handleTextInput(event: ChangeEvent<HTMLInputElement>) {
    setTextInput(event.currentTarget.value);
  }

  function handleCreateTask(event: SubmitEvent) {
    event.preventDefault();
    const updatedTasks: TaskType[] = [...tasks,
    {
      id: uuidv4(),
      content: textInput,
      isDone: false
    }]
    setTasks(updatedTasks)
    setTextInput('');
  }

  function onIsDone(id: string, isDonestatus: boolean) {
    const tasksCopy = [...tasks];
    const indexTaskToSetIsDone = tasksCopy.findIndex(task => task.id === id);
    tasksCopy[indexTaskToSetIsDone].isDone = isDonestatus;
    setTasks(tasksCopy);
  }

  function onDeleteTask(id: string) {
    const tasksWithoutTaskDeleted = tasks.filter(task => task.id !== id);
    setTasks(tasksWithoutTaskDeleted);
  }

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <form onSubmit={() => handleCreateTask} className={styles.createTaskBar}>
          <input required onChange={() => { handleTextInput }} value={textInput} type="text" placeholder='Adicione uma nova tarefa' />
          <button>
            Criar
            <MdOutlineAddCircleOutline size={16} />
          </button>
        </form>

        <div className={styles.tasksContainer}>
          <header className={styles.headerTasksContainer}>
            <div className={styles.createdTasks}>
              <strong>Tarefas criadas</strong>
              <span>{totalTasks}</span>
            </div>

            <div className={styles.doneTasks}>
              <strong>Concluídas</strong>
              <span>{totalDoneTasks}</span>
            </div>
          </header>

          {isTasksVoid ?
            (
              <div className={styles.voidTasks}>
                <img src="./src/assets/clipboard.png" alt="" />
                <p>
                  <b>Você ainda não tem tarefas cadastradas</b>
                  <br />
                  Crie tarefas e organize seus itens a fazer
                </p>
              </div>
            )
            :
            (
              tasksOrderByIsDone.map(task => {
                return (<Task
                  key={task.id}
                  task={task}
                  updateIsDoneFunction={onIsDone}
                  deleteTaskFunction={onDeleteTask}
                />)
              })
            )}
        </div>
      </main>
    </div>
  )
}

export default App
