import React from 'react'
import Headers from '../components/header/Header'
import Footers from '../components/Footer/Footers'
import { datosEncabezado, datosCuerpo, datosBannerInferior } from '../assets/js/dataTV'
import Tarjeta from '../components/Utils/Tarjeta'
import TarjetaContenedor from '../components/Utils/TarjetaContenedor'

const TV = () => {
    return (
        <>
            <Headers contenido={datosEncabezado} />
            {
                datosCuerpo.map((contenido, index) => <Tarjeta contenido={contenido} orientacion={contenido.orientacion} key={index} />)
            }
            {
                <TarjetaContenedor contenido={datosBannerInferior} />
            }
            <Footers verForm={true} />
        </>
    )
}

export default TV
