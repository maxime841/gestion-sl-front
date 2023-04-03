import SectionPageProfilDancer from '@organisms/section-page-profil-dancer/section-page-profil-dancer'
import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

function DancerProfilPage() {
  const { dancerId } = useParams()
  const dancer = Store.dancer.useDancer(dancerId!)

  return (
    <section className='fond-ecran-dancer bg-contain'>
      <h1 className="font-title text-center text-white text-8xl uppercase py-8 font-extrabold mb-16 underline">{dancer.name}</h1>
      <SectionPageProfilDancer dancerCurrent={dancer} />
    </section>
  )
}
export default DancerProfilPage
