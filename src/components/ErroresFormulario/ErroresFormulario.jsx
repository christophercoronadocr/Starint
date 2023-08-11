import React from 'react'

const ErroresFormulario = ({error}) => {
  return (
    <div className='bg-orange-600' >
      <p className='font-bold text-white py-1 mb-1'>
        {error}
      </p>
    </div>
  )
}

export default ErroresFormulario
