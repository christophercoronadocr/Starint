import React from 'react'
import { Typography, Button } from "@material-tailwind/react";

const PlanCard = ({imagen, titulo, descripion}) => {
    return (
        <div className="relative h-full w-full">
            <img
                src={`${imagen}`}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
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
                        {descripion}
                    </Typography>
                    <div className="flex justify-center gap-2">
                        <Button size="lg" color="white">
                            Explore
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanCard
