import CarouselParties from '@organisms/carousel-parties/carousel-parties'
import { SectionPageProfilParties } from '@organisms/section-page-profil-parties/section-page-profil-parties'
import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

function ClubProfilPage() {
  const { clubId } = useParams()
  const club = Store.club.useClub(clubId!)

  return (
    <section>
      <h1>{club.name}</h1>
      <CarouselParties clubCurrent={club} />
      <SectionPageProfilParties clubCurrent={club} />
    </section>
  )
}
export default ClubProfilPage
