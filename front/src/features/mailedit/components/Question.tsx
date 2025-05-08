import React from 'react'
import TypeQuestion from '../types/question';

const Question = (
	props: { question?: TypeQuestion }
) => {
	return (
		<div id="1" className='min-h-64 m-4 border-2 border-gray-300 rounded-lg p-4 bg-white flex flex-col justify-center items-center'>
				<div className='lg:text-xl text-md font-semibold mb-2'>[scene {props.question?.id}]<br/>{props.question?.title}</div>
				<div className='lg:text-base text-sm whitespace-pre-line mb-2'>{props.question?.content}</div>
				<div className='text-sm text-gray-500'>情報: {props.question?.info}</div>
		</div>
	)
}

export default Question