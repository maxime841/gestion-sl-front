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

export function CardDancer() {
  const dancers = Store.dancer.useDancers()

  return (
    <div className="grid grid-cols-4 gap-5">
      {
        dancers.map(dancer => (
          <>
            <Card className="h-[520px] w-full max-w-[26rem] shadow-lg px-2">
      <CardHeader floated={false} color="blue-gray">
        <img
          className="mt-5"
          src={dancer.picture?.picture_url}
          alt="representation du dancer"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between px-2">
          <Typography variant="h5" color="blue-gray" className="font-medium ">
            {dancer.name}
          </Typography>
        </div>
        <Typography color="gray">
          {dancer.presentation}
        </Typography>
      </CardBody>
      <CardFooter className="pt-3">
      <LinkBtn link={`/dancer/${dancer.id}`}>
          En voir plus
        </LinkBtn>
      </CardFooter>
    </Card>
          </>
        ))}
    </div>
  )
}
