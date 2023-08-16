import React from 'react'
import Headers from '../components/header/Header'
import Footers from '../components/Footer/Footers'
import {datosEncabezado, datosCuerpo} from '../assets/js/dataGamePass'
import Tarjeta from '../components/Utils/Tarjeta'


const GamePass = () => {
  return (
    <>
      <Headers contenido={datosEncabezado} />
      {
        datosCuerpo.map((contenido,index) => <Tarjeta contenido={contenido} orientacion={contenido.orientacion} key={index}  />)
      }
      <Footers verForm={true} />
    </>
  )
}

export default GamePass
