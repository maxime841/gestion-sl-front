import Title from '@atoms/title/title'
import { CardHobby } from '@molecules/card-hobby/card-hobby'
import React from 'react'

export function SectionListHobby() {
    return (
    <section>
      <Title addClass='mb-8 font-bold text-3xl'>Liste des terrains de loisir</Title>
      <div className='hobby-list-box'>
        <CardHobby />
      </div>
    </section>
  )
}
