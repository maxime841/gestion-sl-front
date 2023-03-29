import Title from '@atoms/title/title'
import { CardHost } from '@molecules/card-host/card-host'
import React from 'react'

export function SectionListHost() {
  return (
    <section>
      <Title addClass='mb-8 font-bold text-3xl'>Liste des hosts</Title>
      <div className='host-list-box'>
        <CardHost />
      </div>
    </section>
  )
}
