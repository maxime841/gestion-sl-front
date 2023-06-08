import Title from '@atoms/title/title'
import { CardLand } from '@molecules/card-land/card-land'
import React from 'react'

export function SectionListLand() {
  return (
    <section className='bg-contain'>
      <Title addClass='font-title text-center text-white text-8xl uppercase py-8 font-extrabold mb-10 underline'>Liste des terrains</Title>
      <div className='host-list-box mx-10'>
        <CardLand />
      </div>
    </section>
  )
}
