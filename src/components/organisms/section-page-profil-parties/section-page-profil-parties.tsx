import Title from '@atoms/title/title'
import { CardParties } from '@molecules/card-parties/card-parties'
import { TPageProfilClub } from '@types-app/models/club.model'
import React from 'react'

export function SectionPageProfilParties({ clubCurrent }: TPageProfilClub) {
  return (
    <section className="">
      <Title addClass='mb-8 font-bold text-3xl'>Les informations de la soirée</Title>
      <div className='party-list-box'>
        {clubCurrent?.parties?.map(party => {
          return (
        <CardParties partyCurrent={party} />
          )
})}
      </div>
    </section>
  )
}
