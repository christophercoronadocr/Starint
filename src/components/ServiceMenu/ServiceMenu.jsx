import React from 'react'
import ServiceMenuListItem from './ServiceMenuListItem'
import ServiceMenuList from './ServiceMenuList'

const servicio = [
    {
        IdServicio: 1,
        Nombre: "Internet Residencial"
    },
    {
        IdServicio: 2,
        Nombre: "Internet Empresarial"
    },
    {
        IdServicio: 3,
        Nombre: "Venta de Autos"
    },
    {
        IdServicio: 4,
        Nombre: "Suscripción de TV"
    }
]

const ServiceMenu = () => {
    return (
        <div className="divide-y divide-slate-100">
            <ServiceMenuList>
                {servicio.map((servicio) => (
                    <ServiceMenuListItem key={servicio.IdServicio} servicio={servicio} />
                ))}
            </ServiceMenuList>
        </div>
    )
}

export default ServiceMenu
