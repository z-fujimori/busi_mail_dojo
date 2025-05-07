import React from 'react'
import { ReturnText } from '../types/returnText'
import ComparisonCard from './ComparisonCard'

const Comparison = (props: {
    correctData: ReturnText
}) => {
    return (
        <div className=''>
            {/* <h2 className="text-xl font-bold mb-2">添削後のメール</h2> */}
            <div className='w-full flex bg-gray-100'>
                <ComparisonCard text={props.correctData.userText} />
                <div className="w-px bg-gray-300 mx-1 my-3"></div>
                <ComparisonCard text={props.correctData.correctionText} />
            </div>
        </div>
    )
}

export default Comparison