import Title from '@atoms/title/title'
import { CardHobby } from '@molecules/card-hobby/card-hobby'
import React from 'react'

export function SectionListHobby() {
    return (
    <section>
      <Title addClass='font-title text-center text-white text-8xl uppercase py-8 font-extrabold mb-10 underline'>Liste des terrains de loisir</Title>
      <div className='hobby-list-box'>
        <CardHobby />
      </div>
    </section>
  )
}
