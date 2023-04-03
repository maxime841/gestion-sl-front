import { Store } from '@store/store'
import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react'
import LinkBtn from '@atoms/links/link-btn'

export function CardDj() {
  const djs = Store.dj.useDjs()

  return (
    <div className="grid grid-cols-4 gap-5 items-center mx-10">
      {
        djs.map(dj => (
          <div key={dj.id} className="h-fit w-full max-w-[26rem] shadow-lg px-2 bg-white">
            <Card>
      <CardHeader floated={false} color="blue-gray">
        <img
          className="mt-5"
          src={dj.picture?.picture_url}
          alt="representation du dj"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between px-2">
          <Typography variant="h5" color="blue-gray" className="font-semibold text-2xl">
            {dj.name}
          </Typography>
        </div>
        <Typography color="gray">
          {dj.presentation}
        </Typography>
      </CardBody>
      <CardFooter className="pt-3">
      <LinkBtn link={`/dj/${dj.id}`}>
          En voir plus
        </LinkBtn>
      </CardFooter>
    </Card>
          </div>
        ))}
    </div>
  )
}
