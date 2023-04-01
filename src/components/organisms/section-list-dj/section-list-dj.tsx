import Title from '@atoms/title/title'
import { CardDj } from '@molecules/card-dj/card-dj'
import React from 'react'

export function SectionListDj() {
  return (
    <section className='neon bg-contain'>
      <Title addClass='font-title text-center text-white text-8xl uppercase mt-12 font-extrabold mb-10 underline'>Liste des djs</Title>
      <div className='dj-list-box'>
        <CardDj />
      </div>
    </section>
  )
}
