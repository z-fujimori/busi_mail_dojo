import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/24651_color.svg'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <button 
          className="px-8 py-4 text-xl bg-[#4a6fa5] text-white rounded-lg hover:bg-[#3a5a8c] transition-colors" 
          onClick={() => navigate('/mailedit')}>
          練習を始める
        </button>
      </div>
      <div className="flex justify-end p-4 overflow-hidden">
        <img src={logo} alt="logo" className="h-12" />
      </div>
    </div>
  )
}

export default Home