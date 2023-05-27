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
import { PencilIcon } from '@atoms/icons/pencil-icon'
import { TrashIcon } from '@atoms/icons/trash-icon'
import { Textarea } from '@mantine/core'

export function CardLandOffice() {
  const lands = Store.land.useLands()

  return (
    <div className="flex justify-items-center items-center">
      {lands ? (
        lands.map(land => (
          <div key={land.id} className="h-fit w-full max-w-[26rem] shadow-lg px-2 mx-10">
            <Card>
      <CardHeader floated={false} color="blue-gray">
        <img
          className="mt-5"
          src={land?.picture?.picture_url}
          alt="representation du club"
        />
        <div className='flex'>
        <button className='p-2 rounded-full bg-black w-fit mx-4 color-white'>
          <PencilIcon size='w-4 h-4' />
        </button>
        <button className='p-2 rounded-full bg-black w-fit color-white'>
          <TrashIcon size='w-4 h-4' />
        </button>
        </div>
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between px-2">
          <Typography variant="h5" color="blue-gray" className="font-semibold text-2xl ">
            {land.name}
          </Typography>
        </div>
        <Typography color="gray">
          {land.presentation}
        </Typography>
      </CardBody>
      <CardFooter className="pt-3">
      <LinkBtn link={`/land/${land.id}`}>
          En voir plus
        </LinkBtn>
      </CardFooter>
    </Card>
          </div>
        ))
      ) : (
        <p>loading ...</p>
      )}
    </div>
  )
}
