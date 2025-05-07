import React from 'react'

const  Summary = (props: {
    summaryText: string
}) => {
    return (
        <div className='relative'>
            <h2 className="text-xl font-bold absolute -top-5 left-7 border-2 border-gray-300 rounded-xl py-1 px-5 bg-white">コメント</h2>
            <pre className="whitespace-pre-wrap px-4 py-8 border-2 border-gray-300 rounded-lg">
                {props.summaryText}
            </pre>
        </div>
    )
}

export default  Summary