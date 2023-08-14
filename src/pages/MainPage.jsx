import React, { useEffect, useState } from 'react'
import NavHeader from '../components/navs/NavHeader'
import Footers from '../components/Footer/Footers'
import SuscripcionesCard from '../components/Suscripciones/SuscripcionesCard'
import { Typography } from '@material-tailwind/react'
import { getSubscriptionsByIdCliente, getUserById } from '../assets/js/Callbacks/APIGetUsers'


const MainPage = () => {

    const [Usuario, setUsuario] = useState({})
    const [Suscribs, setSuscribs] = useState({})

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const id = localStorage.getItem("IdUser");
        var dataClienteRespuesta = await getUserById(id);
        var dataRespuesta = await getSubscriptionsByIdCliente(id);

        if (dataClienteRespuesta.status == 200) {
            setUsuario(dataClienteRespuesta.data[0])
            var dataRespuesta = await getSubscriptionsByIdCliente(id);

            if (dataRespuesta.status == 200) {
                
                const listaSuscripciones = JSON.parse(dataRespuesta.data)
                if (listaSuscripciones.CodigoRespuesta == 200) {
                    setSuscribs(listaSuscripciones.ObjetoRespuesta)
                }
            }
          } else {
              return null;
          }

      };

    return (
        <>
            <div className='bg-black'>
                <NavHeader Usuario={Usuario} setUsuario={setUsuario} />
            </div>
            <div className="flex-row text-center mt-10">
                <Typography
                    variant={"h1"}>
                    My Subscriptions
                </Typography>
            </div>
            <div className='min-h-screen flex items-center justify-center mb-10'>
                <div className="container grid grid-cols-3" style={{ height: '90%' }}>
                    {
                        (Object.keys(Suscribs).length > 0)
                        ? (
                            <>
                                {Suscribs.map((subscription, index) => (
                                    <SuscripcionesCard key={index} subscription={subscription}  />
                                ))}
                            </>
                        )
                        : ""
                        
                    }

                </div>
            </div>

            <Footers verForm={false} />
        </>
    )
}

export default MainPage
