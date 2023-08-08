import React from 'react'
import TarjetaContenido from './TarjetaContenido'

const TarjetaLineal = ({ contenido, url }) => {

    return (
        <div className={`bg-cover bg-center w-full h-5/6`} style={{backgroundImage: `url(${url})`}}>
            <div className='grid grid-cols-2'>
                {
                    (contenido.orientacion == "imagen-contenido")
                        ?
                        (
                            <>
                                <div></div>
                                <TarjetaContenido contenido={contenido} fondo='' />
                            </>
                        )
                        :
                        (
                            <>
                                <TarjetaContenido contenido={contenido} fondo='' />
                                <div></div>
                            </>
                        )
                }

            </div>
        </div>
    )
}

export default TarjetaLineal
