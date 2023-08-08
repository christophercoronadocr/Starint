import React from 'react'
import TarjetaImagen from './TarjetaImagen'
import TarjetaContenido from './TarjetaContenido'

const Tarjeta = ({ contenido, orientacion }) => {
    return (
        <div className='grid grid-cols-2 h-screen'>
            {
                (orientacion == 'imagen-contenido')
                    ? (
                        <>
                            <TarjetaImagen url={contenido.url} />
                            <TarjetaContenido contenido={contenido} />
                        </>
                    )
                    :
                    (
                        <>
                            <TarjetaContenido contenido={contenido} />
                            <TarjetaImagen url={contenido.url} />
                        </>
                        
                    )
            }

        </div>
    )
}

export default Tarjeta
