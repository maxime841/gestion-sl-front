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

export function CardShop() {
  const shops = Store.shop.useShops()

  return (
    <div className="grid grid-cols-4 gap-5 items-center">
      {shops ? (
        shops.map(shop => (
          <div key={shop.id} className="h-fit w-full max-w-[26rem] shadow-lg px-2 mx-5">
            <Card>
      <CardHeader floated={false} color="blue-gray">
        <img
          className="mt-5"
          src={shop?.picture?.picture_url}
          alt="representation du shop"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between px-2">
          <Typography variant="h5" color="blue-gray" className="font-semibold text-2xl">
            {shop.name}
          </Typography>
        </div>
        <Typography color="gray">
          {shop.presentation}
        </Typography>
      </CardBody>
      <CardFooter className="pt-3">
      <LinkBtn link={`/shop/${shop.id}`}>
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
