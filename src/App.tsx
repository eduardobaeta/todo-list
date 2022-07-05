import { useState } from 'react'

import '../src/styles/Global.css'
import { Checkbox } from './components/Check'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Checkbox />
    </div>
  )
}

export default App
