import React from 'react'
import Botones from './Botones';

const TarjetaContenido = ({ contenido, fondo="bg-black", botones=[] }) => {

    return (
        <div className={`container mx-auto h-full ${fondo} text-white`}>
            <div className="h-screen">
                <div className="flex items-end h-1/3 md:pl-24 md:pr-80">
                    <p className='font-bold text-4xl'>
                        {contenido.titulo}
                    </p>
                </div>
                <div className="flex items-center justify-center h-1/3 md:pl-24 md:pr-80">
                    <p className='text-justify'>
                        {contenido.descripcion}
                    </p>
                </div>
                <div className="flex items-start justify-start h-1/3 md:pl-24">
                    {
                        (botones.length > 0)
                        ? botones.map((boton, index) => <Botones botones={boton} key={index} />)
                        : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default TarjetaContenido
