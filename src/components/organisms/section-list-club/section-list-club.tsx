import Title from '@atoms/title/title'
import { CardClub } from '@molecules/card-club/card-club'
import React from 'react'

export function SectionListClub() {
  return (
    <section className='fond-ecran-club-bis p-16 h-full w-full'>
      <Title addClass='font-title text-center text-white text-8xl uppercase mt-12 font-extrabold mb-16 underline'>Liste des clubs</Title>
      <div className='club-list-box'>
        <CardClub />
      </div>
    </section>
  )
}
