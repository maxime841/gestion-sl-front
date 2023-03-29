import Title from '@atoms/title/title'
import { CardDancer } from '@molecules/card-dancer/card-dancer'
import React from 'react'

export function SectionListDancer() {
  return (
    <section>
      <Title addClass='mb-8 font-bold text-3xl'>Liste des danseurs</Title>
      <div className='dancer-list-box'>
        <CardDancer />
      </div>
    </section>
  )
}
