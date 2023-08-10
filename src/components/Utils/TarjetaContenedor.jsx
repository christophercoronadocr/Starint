import React from 'react'
import TarjetaConElementos from './TarjetaConElementos'
const TarjetaContenedor = ({ contenido }) => {

    const {columnas, elementos} = contenido

    return (
        <div className={`bg-cover bg-center w-full h-5/6`}>
            <div className={`grid grid-cols-${columnas}`}>
               {
                elementos.map((elemento, index) => <TarjetaConElementos elemento={elemento} />)
               }
            </div>
        </div>
    )
}

export default TarjetaContenedor
