import React from 'react'
import Header from '../components/header/Header'
import Footers from '../components/Footer/Footers'
import {datosCuerpo, datosEncabezado, datosBannerInferior} from '../assets/js/dataEnterprise'
import Tarjeta from '../components/Utils/Tarjeta'
import TarjetaLineal from '../components/Utils/TarjetaLineal'

const Enterprise = () => {
  return (
    <>
      <Header contenido={datosEncabezado} />
        {
            datosCuerpo.map(((contenido, index) =><Tarjeta contenido={contenido} orientacion={contenido.orientacion} key={index} />))
        }
        {
          datosBannerInferior.map((contenido, index) => <TarjetaLineal contenido={contenido} url={contenido.url} key={index} />)
        }
      <Footers verForm={true} />
    </>
  )
}

export default Enterprise
