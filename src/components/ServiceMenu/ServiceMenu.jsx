import React from 'react'
import ServiceMenuListItem from './ServiceMenuListItem'
import ServiceMenuList from './ServiceMenuList'

const ServiceMenu = ({ Services, getPlanOfServices }) => {
    return (
        <div className="divide-y divide-slate-100">
            {
                (Services != {} && Services[0] != undefined)
                    ? (
                        <ServiceMenuList>
                            {Services.map((servicio) => (
                                <ServiceMenuListItem key={servicio.idServicio} servicio={servicio} getPlanOfServices={getPlanOfServices} />
                            ))}
                        </ServiceMenuList>
                    )
                    : ""
            }
        </div>
    )
}

export default ServiceMenu
