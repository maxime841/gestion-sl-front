import CarouselParties from '@organisms/carousel-parties/carousel-parties'
import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

function ClubProfilPage() {
  const { clubId } = useParams()
  const club = Store.club.useClub(clubId!)

  return (
    <section>
      <h1 className="text-center text-4xl">{club.name}</h1>
      <CarouselParties clubCurrent={club} />
    </section>
  )
}
export default ClubProfilPage
