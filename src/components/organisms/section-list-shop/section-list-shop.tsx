import Title from '@atoms/title/title'
import { CardShop } from '@molecules/card-shop/card-shop'
import React from 'react'

export function SectionListShop() {
  return (
    <section /* className='fond-ecran-shop bg-cover' */>
      <Title addClass='font-title text-center text-white text-8xl uppercase py-8 font-extrabold mb-10 underline'>Liste des shops</Title>
      <div className='shop-list-box'>
        <CardShop />
      </div>
    </section>
  )
}
