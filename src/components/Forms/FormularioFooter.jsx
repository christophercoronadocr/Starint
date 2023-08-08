import React from 'react'

const FormularioFooter = () => {
    return (
        <div className='h-3/4 w-full text-center pt-20'>
            <div className='my-5'>
                <p>
                    ¿Interesado en estar al día con Starint?
                </p>
            </div>
            <div className="grid grid-cols-2">
                <div className='text-right'>
                    <input type="text" className='w-1/2 h-12 rounded-md p-2 border 
                        border-gray-600 bg-transparent px-4 py-2 
                        focus:outline-none focus:border-white text-white' placeholder='Ingresa tu correo electrónico' />
                </div>
                <div className='text-left lg:pl-6'>
                    <button type="button"
                        className='lg:w-1/6 sm:w-1/2 h-12 border-black font-bold rounded-md
            bg-neutral-700 uppercase hover:bg-neutral-500 transition text-gray-400'>
                        Inscribirme
                    </button>
                </div>
            </div>
            <div className='my-5'>
                <p className='text-gray-500'>By clicking order now, you agree to our {('')}
                    <a href='#' className='text-gray-200 underline hover:text-gray-400 transition'>Privacy Policy</a></p>
            </div>
        </div>
    )
}

export default FormularioFooter
