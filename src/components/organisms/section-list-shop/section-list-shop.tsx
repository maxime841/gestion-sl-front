import Title from '@atoms/title/title'
import { CardShop } from '@molecules/card-shop/card-shop'
import React from 'react'

export function SectionListShop() {
  return (
    <section>
      <Title addClass='mb-8 font-bold text-3xl'>Liste des shops</Title>
      <div className='shop-list-box'>
        <CardShop />
      </div>
    </section>
  )
}
