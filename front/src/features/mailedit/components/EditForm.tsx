import React, { useState } from 'react'
import EditTitle from './EditTitle'
import EditBody from './EditBody'
import { MdSend } from "react-icons/md";
import { useForm } from 'react-hook-form'
import UserAnser from '../types/userAnser';
import { useNavigate } from 'react-router-dom';

const EditForm = (props: {
    questionId?: number
}) => {
	const navigate = useNavigate()
	const [error, setError] = useState<string>('');

	console.log("こっち側", props.questionId)

	const {
		register, handleSubmit, formState: {errors}
	} = useForm<UserAnser>()

	const onSubmit = async (data: UserAnser) => {
		console.log("送信データ", data)
		if (props.questionId != undefined) {
			console.log("これから入れる", props.questionId)
			data.questionId = props.questionId
		}
		console.log("送信データ", data)
		try {
			const res = await fetch('http://localhost:3000/answer', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			})

			const result = await res.json()
			
			if (res.status === 450) {
				setError(result.error);
				return;
			}

			console.log(result)
			setError('');
			navigate('/correct', { state: { result } });
		} catch (error) {
			console.log(error);
			setError('エラーが発生しました。');
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="h-1/2 px-4">
				{error && (
					<div className="text-red-500 text-sm mb-1">
						{error}
					</div>
				)}
				
				{/* <input type="hidden" value="0" {...register('questionId')} /> */}
				<input type="hidden" value={props.questionId} {...register('questionId')} />
				
				<EditTitle register={register} errors={errors} />

				<EditBody register={register} errors={errors} />
				
				<div className='flex justify-end lg:px-8 px-1'>
					<button type="submit" className="bg-gray-500 hover:bg-gray-700 focus:bg-gray-700 text-white text-2xl m-3 px-4 py-2 rounded-md w-20 flex items-center justify-center transition-colors shadow-lg hover:shadow-xl focus:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1 focus:outline-none"><MdSend /></button>
				</div>
			</div>
		</form>
	)
}

export default EditForm