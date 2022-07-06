import { useState } from 'react'

import { Header } from './components/Header'

import styles from '../src/App.module.css'
import '../src/styles/Global.css'

function App() {

  const [tasks, setTasks] = useState([]);

  const isTasksVoid = tasks.length === 0;

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
              <span>0</span>
            </div>

            <div className={styles.doneTasks}>
              <strong>Concluídas</strong>
              <span>0</span>
            </div>
          </header>

          {isTasksVoid ? (<div className={styles.voidTasks}>
            <img src="./src/assets/clipboard.png" alt="" />
            <p>
              <b>Você ainda não tem tarefas cadastradas</b>
              <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>)
            :
            ''
          }

        </div>
      </main>
    </div>
  )
}

export default App
