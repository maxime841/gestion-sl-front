import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react'
import { TPartyProfil } from '@types-app/models/party.model'

export function CardParties({ partyCurrent }: TPartyProfil) {
  return (
    <div className="flex justify-items-center">
    <Card className="h-[490px] w-full max-w-[26rem] shadow-lg px-2">
      <CardHeader floated={false} color="blue-gray">
        <img
          className="mt-5"
          src={partyCurrent.picture?.picture_url}
          alt="representation du club"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between px-2">
          <Typography variant="h5" color="blue-gray" className="font-medium ">
            {partyCurrent.name}
          </Typography>
        </div>
        <Typography color="gray">
          {partyCurrent.presentation}
        </Typography>
      </CardBody>
      <CardFooter className="pt-3">
      </CardFooter>
    </Card>
       : (
        <p>loading ...</p>
      )
    </div>
  )
}