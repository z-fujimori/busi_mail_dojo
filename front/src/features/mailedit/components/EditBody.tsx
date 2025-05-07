import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import UserAnser from '../types/userAnser'

const EditBody = (prpps:{
    register: UseFormRegister<UserAnser>
    errors: FieldErrors<UserAnser>
}) => {
    const register = prpps.register
    const errors = prpps.errors

    return (
        <div className={`h-full border-2 rounded-lg px-4 bg-white ${errors.mailBody ? 'border-red-500' : 'border-gray-300'}`}>
            <div className="space-y-4">
                <div className="mt-4">
                    <textarea 
                        {...register('mailBody', { required: true })}
                        className="w-full h-[calc(40vh-65px)] border-0 focus:outline-none resize-none"
                        placeholder="本文を入力"
                    />
                </div>
            </div>
        </div>
    )
}

export default EditBody