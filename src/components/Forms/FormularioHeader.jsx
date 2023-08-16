import React from 'react'

const FormularioHeader = () => {
    return (
        <>
        <div className="grid lg:grid-cols-2 w-full mb-10">
            <div className="flex lg:justify-end sm:justify-center">
                <input type="text"
                    className='w-1/2 h-12 rounded-md p-2 border 
                        border-gray-600 bg-transparent px-4 py-2 
                        focus:outline-none focus:border-white text-white'
                    placeholder='Address of Service' />
            </div>
            <div className="flex lg:justify-start sm:justify-center sm:mt-3 lg:mt-0 lg:ml-5">
                <button type="button"
                    className='lg:w-1/6 sm:w-1/2 h-12 border-black font-bold rounded-md
                        bg-gray-50 uppercase hover:bg-gray-200 transition'>Order now</button>
            </div>
        </div>
        </>
    )
}

export default FormularioHeader
