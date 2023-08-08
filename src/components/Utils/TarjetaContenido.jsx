import React from 'react'

const TarjetaContenido = ({ contenido, fondo="bg-black" }) => {
    
    return (
        <div className={`container mx-auto h-full ${fondo} text-white`}>
            <div className="h-screen">
                <div className="flex items-end justify-center h-1/3 md:pl-24 md:pr-80">
                    <p className='font-bold text-4xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ratione nobis repellat adipisci eum.
                    </p>
                </div>
                <div className="flex items-center justify-center h-1/3 md:pl-24 md:pr-80">
                    <p className='text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae quod natus officiis laudantium. Quod quos dolor perferendis impedit harum iste, officia delectus saepe temporibus vel, commodi neque numquam repellendus.
                    </p>
                </div>
                <div className="flex items-start justify-start h-1/3 md:pl-24">
                    <button type="button" 
                    className='bg-indigo-500 rounded-md w-1/3 h-1/6 bg-transparent font-bold uppercase border border-slate-200 hover:bg-gray-950'>Prueba</button>
                </div>
            </div>
        </div>
    )
}

export default TarjetaContenido
