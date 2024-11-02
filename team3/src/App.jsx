import { useState } from 'react'
import './App.css'
import Roles from './ChooseRole/Roles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Roles />
    </>
  )
}

export default App
