import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "../components/MaterialTailwind";
 
export function NewList() {
 
  return (
    <>
        <Card className="mx-auto w-full max-w-[24rem]">
        <CardHeader
        variant="outlined"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Crear nueva lista
        </Typography>
      </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Typography className="-mb-2" variant="h6" color="black">
              Nombre de la lista
            </Typography>
            <Input
            type="text"
            placeholder="Nombre"
            containerProps={{
              className: "w-full",
            }}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900 placeholder:opacity-100"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          </CardBody>
          <CardFooter>
            <Button color="black" fullWidth>
            Crear Lista
            </Button>
          </CardFooter>
        </Card>
    </>
  );
}

export default NewList;