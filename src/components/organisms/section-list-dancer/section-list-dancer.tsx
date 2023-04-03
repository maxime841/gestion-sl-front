import Title from '@atoms/title/title'
import { CardDancer } from '@molecules/card-dancer/card-dancer'
import React from 'react'

export function SectionListDancer() {
  return (
    <section className='fond-ecran-dancer bg-contain'>
      <Title addClass='font-title text-center text-white text-8xl uppercase py-8 font-extrabold mb-16 underline'>Liste des danseurs</Title>
      <div className='dancer-list-box'>
        <CardDancer />
      </div>
    </section>
  )
}
