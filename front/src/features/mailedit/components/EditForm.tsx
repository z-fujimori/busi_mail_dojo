import { useState } from 'react'
import EditTitle from './EditTitle'
import EditBody from './EditBody'
import { MdSend } from "react-icons/md";
import { useForm } from 'react-hook-form'
import UserAnser from '../types/userAnser';
import { useNavigate } from 'react-router-dom';

const EditForm = (props: {
    questionId?: number
}) => {
	const navigate = useNavigate();
	const [error, setError] = useState<string>('');
	const [isLoad, setIsLoad] = useState(false);

	const {
		register, handleSubmit, formState: {errors}
	} = useForm<UserAnser>()

	const onSubmit = async (data: UserAnser) => {
		setIsLoad(true)
		try {
			const res = await fetch('https://busi-mail-dojo.onrender.com/answer', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			})

			const result = await res.json()
			
			if (res.status === 450) {
				setIsLoad(false);
				setError(result.error);
				return;
			}

			setIsLoad(false)
			setError('');
			navigate('/correct', { state: { result } });
		} catch (error) {
			setIsLoad(false);
			console.log(error);
			setError('エラーが発生しました。再度試して下さい。');
		}
		setIsLoad(false);
	}

	return (
		<>
			{isLoad && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white p-4 rounded-lg shadow-lg">
						<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto"></div>
						<p className="text-center mt-4">処理中...</p>
					</div>
				</div>
			)}
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
		</>
	)
}

export default EditForm