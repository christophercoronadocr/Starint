import { Carousel, Typography, Button } from "@material-tailwind/react";
import React from 'react'
import PlanCard from "./PlanCard";
import { datosPlanesCards } from "../../assets/js/dataPlanes";



const Planes = () => {
  return (
    <Carousel className="rounded-xl">
      {
        datosPlanesCards.map((planes, index) => <PlanCard imagen={planes.url} titulo={planes.titulo} descripion={planes.descripcion}  key={index}/>)
      }
    </Carousel>
  )
}

export default Planes
