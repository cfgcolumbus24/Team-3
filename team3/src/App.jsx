import { useState } from 'react'
import './App.css'
import Sidebar from './sidebar_components/Sidebar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar />
    </>
  )
}

export default App
