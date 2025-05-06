import React from 'react'
import EditTitle from './EditTitle'
import EditBody from './EditBody'
import { MdSend } from "react-icons/md";
import { useForm } from 'react-hook-form'
import UserAnser from '../types/userAnser';

const EditForm = () => {

	const {
		register, handleSubmit, formState: {errors}
	} = useForm<UserAnser>()

	const onSubmit = async (data: UserAnser) => {
		const res = await fetch('http://localhost:3000/answer', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		})

		const result = await res.json()
		alert(JSON.stringify(result, null, 2))
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div id="2" className="h-1/2 p-4">
				
				<EditTitle register={register} errors={errors} />

				<EditBody register={register} errors={errors} />
				
				<div className='flex justify-end px-8'>
					<button type="submit" className="bg-gray-500 hover:bg-gray-700 focus:bg-gray-700 text-white text-2xl m-3 px-4 py-2 rounded-md w-20 flex items-center justify-center transition-colors shadow-lg hover:shadow-xl focus:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1 focus:outline-none"><MdSend /></button>
				</div>
			</div>
		</form>
	)
}

export default EditForm