import React from 'react'

const Mailedit = () => {
    return (
        <div className="h-1/2 p-4">
            <div className="grid grid-cols-12 gap-2 p-1">
                <div className="col-span-2 text-gray-600">件名：</div>
                <div className="col-span-10">
                    <input 
                        type="text" 
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="件名を入力"
                    />
                </div>
            </div>
            <div className="h-full border-2 border-gray-300 rounded-lg px-4 bg-white">
                <div className="space-y-4">
                    <div className="mt-4">
                        <textarea 
                            className="w-full h-[calc(40vh-65px)] border-0 focus:outline-none resize-none"
                            placeholder="本文を入力"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mailedit