import { useState } from 'react'

import '../src/styles/Global.css'
import { Checkbox } from './components/Check'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Todo List</h1>
      <Checkbox />
    </div>
  )
}

export default App
