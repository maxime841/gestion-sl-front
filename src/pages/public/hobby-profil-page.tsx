import CarouselActivities from '@organisms/carousel-activities/carousel-activities'
import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

function HobbyProfilPage() {
  const { hobbyId } = useParams()
  const hobby = Store.hobby.useHobby(hobbyId!)

  return (
    <section className='fond-ecran-hobby bg-contain'>
      <h1 className="font-title text-center text-white text-8xl uppercase py-8 font-extrabold mb-10 underline">{hobby.name}</h1>
      <CarouselActivities hobbyCurrent={hobby} />
    </section>
  )
}
export default HobbyProfilPage
