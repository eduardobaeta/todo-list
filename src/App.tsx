import { useState } from 'react'
import { Task } from './components/Task';
import { Header } from './components/Header'
import { TaskProps } from './@types';

import styles from '../src/App.module.css'
import '../src/styles/Global.css'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex nisi, eget consequat urna pulvinar nec. Integer vestibulum massa eu massa placerat, ut molestie dui hendrerit. Sed eu tellus vestibulum, semper nibh non, volutpat arcu.",
      isDone: true
    },
    {
      id: 2,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex nisi, eget consequat urna pulvinar nec. Integer vestibulum massa eu massa placerat, ut molestie dui hendrerit. Sed eu tellus vestibulum, semper nibh non, volutpat arcu.",
      isDone: true
    },
    {
      id: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex nisi, eget consequat urna pulvinar nec. Integer vestibulum massa eu massa placerat, ut molestie dui hendrerit. Sed eu tellus vestibulum, semper nibh non, volutpat arcu.",
      isDone: false
    },
    {
      id: 4,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex nisi, eget consequat urna pulvinar nec. Integer vestibulum massa eu massa placerat, ut molestie dui hendrerit. Sed eu tellus vestibulum, semper nibh non, volutpat arcu.",
      isDone: false
    },
    {
      id: 5,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex nisi, eget consequat urna pulvinar nec. Integer vestibulum massa eu massa placerat, ut molestie dui hendrerit. Sed eu tellus vestibulum, semper nibh non, volutpat arcu.",
      isDone: false
    }
  ]);

  const tasksOrderByIsDone = tasks.sort((x, y) => {
    let a = x.isDone;
    let b = y.isDone;
    return a == b ? 0 : a > b ? 1 : -1;
  });

  const totalTasks = tasks.length;

  const totalDoneTasks = tasks.reduce((result: TaskProps[], task) => {
    task.isDone && result.push(task);
    return result;
  }, []).length;

  const isTasksVoid = tasks.length === 0;

  function onIsDone(id: number, status: boolean) {
    const tasksCopy = [...tasks];
    const indexTaskToSetIsDone = tasksCopy.findIndex(task => task.id === id);
    tasksCopy[indexTaskToSetIsDone].isDone = status;
    setTasks(tasksCopy);
  }

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <form className={styles.createTaskBar}>
          <input type="text" placeholder='Adicione uma nova tarefa' />
          <button>
            Criar
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
                  taskProps={task}
                  updateIsDone={onIsDone}
                />)
              })
            )}
        </div>
      </main>
    </div>
  )
}

export default App
