import CarouselActivities from '@organisms/carousel-activities/carousel-activities'
import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

function HobbyProfilPage() {
  const { hobbyId } = useParams()
  const hobby = Store.hobby.useHobby(hobbyId!)

  return (
    <section>
      <h1 className="text-center text-4xl">{hobby.name}</h1>
      <CarouselActivities hobbyCurrent={hobby} />
    </section>
  )
}
export default HobbyProfilPage
