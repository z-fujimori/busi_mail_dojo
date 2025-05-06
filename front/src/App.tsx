import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './features/home/Home'
import Mailedit from './features/mailedit/Mailedit'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="h-[94vh] flex flex-col">
        <header className="">
          <a href="/" className='focus:underline focus:decoration-1 focus:decoration-gray-400 focus:outline-none'>
            <h1 className="text-3xl font-bold text-[#1a1a2e] text-center ">
              ビジネスメール道場
            </h1>
          </a>
        </header>
        <main className="flex-1 border-4 border-gray-400 m-4 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mailedit" element={<Mailedit />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
