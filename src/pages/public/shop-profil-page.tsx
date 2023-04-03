import CarouselArticles from '@organisms/carousel-articles/carousel-articles'
import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

function ShopProfilPage() {
  const { shopId } = useParams()
  const shop = Store.shop.useShop(shopId!)

  return (
    <section className='fond-ecran-shop bg-cover'>
      <h1 className="text-center text-4xl">{shop.name}</h1>
      <CarouselArticles shopCurrent={shop} />
    </section>
  )
}
export default ShopProfilPage
