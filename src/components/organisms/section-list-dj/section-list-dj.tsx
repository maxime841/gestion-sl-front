import Title from '@atoms/title/title'
import { CardDj } from '@molecules/card-dj/card-dj'
import React from 'react'

export function SectionListDj() {
  return (
    <section>
      <Title addClass='mb-8 font-bold text-3xl'>Liste des djs</Title>
      <div className='dj-list-box'>
        <CardDj />
      </div>
    </section>
  )
}
