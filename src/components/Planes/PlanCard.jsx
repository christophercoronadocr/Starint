import React from 'react'
import { Typography, Button } from "@material-tailwind/react";
import PlanesDetailsList from '../PlanesDetails/PlanesDetailsList';
import { createASubscription } from '../../assets/js/Callbacks/APIGetServices';


const PlanCard = ({Usuario, id, imagen, titulo, descripcion, Descripciones, Precio, setError }) => {

    const SuscribirseHandler = async (IdPlan) =>{
        if (Usuario.id != undefined && IdPlan != undefined) {
            const result = await createASubscription(IdPlan, Usuario.id);
            if (result.status == 200) {
                const jsonResult = JSON.parse(result.data);
                if (jsonResult.CodigoRespuesta == 200) {
                    location.href = '/Subscriptions';
                } else {
                    setError(jsonResult.MensajeError)
                    console.log(jsonResult);
                }
            } else {
                console.log(result);
            }
        }
    }



    return (
        <div className="relative h-full w-full">
            <img
                src={`${imagen}`}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className='grid grid-cols-2 w-full'>
                    <div className="text-center md:w-full inline-block">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            {titulo}
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            {descripcion}
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            {Precio}
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button size="lg" color="white" onClick={()=> SuscribirseHandler(id)}>
                                Suscribirse
                            </Button>
                        </div>
                    </div>
                    <div className="text-left md:ml-52 md:w-full inline-block">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-2xl lg:text-3xl"
                        >
                            Beneficios
                        </Typography>
                        <PlanesDetailsList Descripcion={Descripciones} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanCard
