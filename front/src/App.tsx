import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold text-[#1a1a2e] text-center'>Vite + React</h1>
      <h3 className='text-blue-500'>Vite + React</h3>
    </>
  )
}

export default App
