import React, { useEffect, useState } from 'react'
import NavHeader from '../components/navs/NavHeader'
import Footers from '../components/Footer/Footers'
import ServiceMenu from '../components/ServiceMenu/ServiceMenu'
import Planes from '../components/Planes/Planes'
import { getUserById } from '../assets/js/Callbacks/APIGetUsers'
import { getPlansByServiceId, getServices } from '../assets/js/Callbacks/APIGetServices'

const Services = () => {

  const [Usuario, setUsuario] = useState({})
  const [Services, setServices] = useState({})
  const [Plan, setPlan] = useState({})

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var dataRespuesta = await getUserById(localStorage.getItem("IdUser"));
    var dataServices = await getServices();
    setUsuario(dataRespuesta.data[0])
    if (dataServices.data.codigoRespuesta == 200) {
      setServices(dataServices.data.objetoRespuesta)
    }
  };

  const getPlanOfServices = async (id) => {
    const result = await getPlansByServiceId(id);
    console.log(result);
  }


  return (
    <>
      <div className='bg-black'>
        <NavHeader Usuario={Usuario} setUsuario={setUsuario} />
      </div>
      <div className='flex items-center h-screen'>
        <div className='flex w-1/4 text-center h-full items-center'>
          <div className=' bg-white mx-10 h-3/4 w-full rounded-md shadow-lg text-center'>
            <div className='py-10'>
              <h1 className='font-bold text-4xl'>
                Servicios disponibles
              </h1>
            </div>
            <ServiceMenu Services={Services} getPlanOfServices={getPlanOfServices}/>
          </div>
        </div>
        <div className='w-3/4 bg-red-200 mx-2 h-3/4 rounded-lg'>
          <Planes />
        </div>
      </div>
      <Footers verForm={false} />
    </>
  )
}

export default Services
