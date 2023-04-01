import CarouselParties from '@organisms/carousel-parties/carousel-parties'
import { CommentaireClub } from '@organisms/commentaire-club/commentaire-club'
import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

function ClubProfilPage() {
  const { clubId } = useParams()
  const club = Store.club.useClub(clubId!)

  return (
    <section className='fond-ecran-club-bis'>
      <h1 className="font-title text-center text-white text-8xl uppercase mt-12 font-extrabold underline mb-16">{club.name}</h1>
      <CarouselParties clubCurrent={club} />
      <CommentaireClub />
    </section>
  )
}
export default ClubProfilPage
