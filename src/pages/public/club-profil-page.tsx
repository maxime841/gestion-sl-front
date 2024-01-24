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
    <section /* className='fond-ecran-club bg-contain' */>
      <h1 className="font-title text-center text-white py-8 text-8xl uppercase font-extrabold underline mb-16">{club.name}</h1>
      <CarouselParties clubCurrent={club} />
      <CommentaireClub clubCurrent={club} />
    </section>
  )
}
export default ClubProfilPage
