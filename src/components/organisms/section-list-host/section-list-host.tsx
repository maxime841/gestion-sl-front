import Title from '@atoms/title/title'
import { CardHost } from '@molecules/card-host/card-host'
import React from 'react'

export function SectionListHost() {
  return (
    <section>
      <Title addClass='font-title text-center text-white text-8xl uppercase mt-12 font-extrabold mb-10 underline'>Liste des hosts</Title>
      <div className='host-list-box mx-10'>
        <CardHost />
      </div>
    </section>
  )
}
