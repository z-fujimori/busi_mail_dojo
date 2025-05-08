import { FieldErrors, UseFormRegister } from 'react-hook-form'
import UserAnser from '../types/userAnser'

const EditTitle = (prpps:{
    register: UseFormRegister<UserAnser>
    errors: FieldErrors<UserAnser>
}) => {
    const register = prpps.register
    const errors = prpps.errors

    return (
        <div className="grid grid-cols-12 gap-2 p-1">
            <div className="col-span-2 text-gray-600 text-sm lg:text-lg">件名：</div>
            <div className="col-span-9">
                <input 
                    {...register('mailTitle', {required: true})}
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-800"
                    placeholder="件名を入力"
                />
            </div>
            <div className='text-red-800 text-sm col-span-1'>
                {errors.mailTitle && <span>※必須</span>}
            </div>
        </div>
    )
}

export default EditTitle