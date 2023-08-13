import React from 'react'
import { IconContext } from 'react-icons'
import { FaArrowRight } from 'react-icons/fa'


const ServiceMenuListItem = ({ servicio, getPlanOfServices }) => {
    const { idServicio, nombre, descripcion } = servicio

    const listItemHandler = (id) => {
        getPlanOfServices(id)
    }

    return (
        <>
            <li className='cursor-pointer hover:bg-gray-300' onClick={() => listItemHandler(idServicio)}>
                <article className="flex items-start space-x-1 p-6">
                    <div className="min-w-0 relative flex-auto">
                        <div className='w-2/3 inline-block'>
                            <span style={{ verticalAlign: 'middle' }} className='pr-2'>{nombre}</span>
                        </div>
                        <IconContext.Provider value={{ size: '1em', style: { verticalAlign: 'middle', marginRight: '0.5em', display: 'inline' } }}>
                            <FaArrowRight />
                        </IconContext.Provider>
                    </div>
                </article>
            </li>
        </>
    )
}

export default ServiceMenuListItem
