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

	console.log(props.questionId)

	const {
		register, handleSubmit, formState: {errors}
	} = useForm<UserAnser>()

	const onSubmit = async (data: UserAnser) => {
		setIsLoad(true)
		console.log("送信データ", data)
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
		<div>
			{isLoad && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-gray-400 bg-opacity-50 p-8 rounded-lg shadow-lg">
						<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto"></div>
						<p className="text-center text-lg mt-4 text-gray-300">
							問題取得中
							<span className="animate-dot1">. </span>
							<span className="animate-dot2">. </span>
							<span className="animate-dot3">. </span>
						</p>
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
		</div>
	)
}

export default EditForm

const styles = `
@keyframes dot1 {
    0%, 0% { opacity: 0; }
    30%, 80% { opacity: 1; }
    90%, 100% { opacity: 0; }
}

@keyframes dot2 {
    0%, 20% { opacity: 0; }
    30%, 70% { opacity: 1; }
    80%, 100% { opacity: 0; }
}

@keyframes dot3 {
    0%, 30% { opacity: 0; }
    40%, 60% { opacity: 1; }
    70%, 100% { opacity: 0; }
}

.animate-dot1 {
    animation: dot1 3s infinite;
}

.animate-dot2 {
    animation: dot2 3s infinite;
}

.animate-dot3 {
    animation: dot3 3s infinite;
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
