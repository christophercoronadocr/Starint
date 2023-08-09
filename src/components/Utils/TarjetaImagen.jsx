import React from 'react'

const TarjetaImagen = ({url}) => {

  return (
    <div className="mx-auto bg-black w-full h-screen">
        <div className={`bg-cover bg-center w-full h-full`} style={{backgroundImage: `url(${url})`}}>
        </div>
    </div>
  )
}

export default TarjetaImagen
