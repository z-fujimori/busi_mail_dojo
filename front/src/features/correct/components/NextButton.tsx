import React from 'react'
import { MdSend } from 'react-icons/md'

const NextButton = () => {
    return (
        <div className='flex justify-center px-8'>
            <button type="submit" className="w-60 bg-gray-400 hover:bg-gray-700 focus:bg-gray-700 text-white text-2xl m-3 px-4 py-2 rounded-md w-20 flex items-center justify-center transition-colors shadow-lg hover:shadow-xl focus:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1 focus:outline-none" >
                <span className='text-lg font-bold mx-2'> 次のメールへ </span>
                <MdSend />
            </button>
        </div>
    )
}

export default NextButton