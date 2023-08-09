import React from 'react'
import Tarjeta from '../components/Utils/Tarjeta'
import Header from '../components/header/Header'
import { datos, datos2, datos3, datos4, opinionesUsuarios, datosEncabezado } from '../assets/js/data'
import TarjetaLineal from '../components/Utils/TarjetaLineal'
import Opiniones from '../components/Utils/Opiniones'
import Footers from '../components/Footer/Footers'


const Home = () => {
    return (
        <>
            <Header contenido={datosEncabezado} />
            {
                datos.map((contenido, index) => <Tarjeta contenido={contenido} orientacion={contenido.orientacion} key={index} />)
            }

            <div>
                {
                    datos3.map((contenido, index) => <TarjetaLineal contenido={contenido} url={contenido.url} key={index} />)
                }
            </div>
            <div>
                {
                    datos4.map((contenido, index) => <Tarjeta contenido={contenido} orientacion={contenido.orientacion} key={index} />)
                }
            </div>
            <div className='h-screen bg-stone-800'>
                <div className='flex first-letter:text-center items-end justify-center h-1/4 md:py-20'>
                    <h3 className='font-bold text-white text-6xl font-serif'>OPINIONES DE CLIENTES</h3>
                </div>
                <div className='grid grid-cols-3 h-3/4  md:py-14 md:px-12'>
                    {
                        opinionesUsuarios.map((opinion, index) => <Opiniones comentario={opinion.comentario} autor={opinion.autor} key={index} />)
                    }
                </div>
            </div>
            {
                datos2.map((contenido, index) => <Tarjeta contenido={contenido} orientacion={contenido.orientacion} key={index} />)
            }
            <Footers verForm={true} />
        </>
    )
}

export default Home
