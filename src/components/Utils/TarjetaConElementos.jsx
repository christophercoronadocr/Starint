import React from 'react'

const TarjetaConElementos = ({elemento}) => {
  return (
    <div className='text-center'>
      <div className='my-16'>
        <img src={elemento.url} alt="" className='text-center mx-auto' />
      </div>
      <div className='my-16'>
        <div>
            <p className='text-3xl font-bold uppercase'>
                {elemento.titulo}
            </p>
        </div>
        <div>
            <p className='px-10 text-lg'>
                {elemento.descripcion}
            </p>
        </div>
      </div>
    </div>
  )
}

export default TarjetaConElementos
