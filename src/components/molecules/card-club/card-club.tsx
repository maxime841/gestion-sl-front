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

export function CardClub() {
  const clubs = Store.club.useClubs()

  return (
    <div className="flex justify-items-center">
      {clubs ? (
        clubs.map(club => (
          <>
            <Card className="h-[490px] w-full max-w-[26rem] shadow-lg px-2">
      <CardHeader floated={false} color="blue-gray">
        <img
          className="mt-5"
          src={club?.picture?.picture_url}
          alt="representation du club"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between px-2">
          <Typography variant="h5" color="blue-gray" className="font-medium ">
            {club.name}
          </Typography>
        </div>
        <Typography color="gray">
          {club.presentation}
        </Typography>
      </CardBody>
      <CardFooter className="pt-3">
        <LinkBtn link={'/profil-club'}>
          En voir plus
        </LinkBtn>
      </CardFooter>
    </Card>
          </>
        ))
      ) : (
        <p>loading ...</p>
      )}
    </div>
  )
}
