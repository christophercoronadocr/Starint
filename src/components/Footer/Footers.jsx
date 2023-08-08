import React from 'react'
import FormularioFooter from '../Forms/FormularioFooter'

const Footers = ({ verForm = false }) => {
    const altura = (verForm) ? "h-80" : "h-20"
    return (
        <>
            <div className={`${altura} bg-black text-white w-full`}>
                {
                    (verForm)
                        ? (
                            <FormularioFooter />
                        )
                        : <></>
                }
                <div className="mx-auto px-4 pt-10">
                    <div className='flex items-end mx-auto justify-between'>
                        <div>
                            <span>Starint © 2023</span>
                        </div>
                        <div className='space-x-3'>
                            <a href="">Operadores de satélites</a> |
                            <a href="">Privacidad y Legal</a> |
                            <a href="">Preferencias de privacidad</a>
                        </div>
                        <div>
                            <span>
                                Startint es una división de Startint SA. Visítenos en <a href="#">starint.com</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footers
