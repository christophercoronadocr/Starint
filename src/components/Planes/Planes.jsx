import { Carousel, Typography, Button } from "@material-tailwind/react";
import React from 'react'
import PlanCard from "./PlanCard";
import { datosPlanesCards } from "../../assets/js/dataPlanes";



const Planes = ({ Plan = {}, Usuario }) => {

  return (
    <Carousel className="rounded-xl">
      {
        (Plan[0] != undefined && Plan != {})
          ? Plan.map((planes, index) => <PlanCard Usuario={Usuario} id={planes.Id} imagen={planes.Imagen} titulo={planes.Nombre} descripcion={planes.Informacion} Descripciones={planes.Descripciones} key={index} />)
          : datosPlanesCards.map((planes, index) => <PlanCard imagen={planes.url} titulo={planes.titulo} descripcion={planes.descripcion} key={index} />)
      }
    </Carousel>
  )
}

export default Planes
