import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const SuscripcionesCard = ({ subscription }) => {
  return (
    <Card className="mt-16 w-96">
      <CardHeader color="blue-gray" className="relative h-56 bg-cover bg-center" style={{ backgroundImage: `url(${subscription.Planes.Imagen})` }}>
        <></>
      </CardHeader>
      <CardBody style={{minHeight: '45%'}}>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {subscription.Planes.Nombre}
        </Typography>
        <Typography>
          {subscription.Planes.Informacion}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Ver detalle</Button>
      </CardFooter>
    </Card>
  )
}

export default SuscripcionesCard
